import datetime
from sqlalchemy.orm import Session
from ..models.models import Lawyer, Comment, Rating, User
from sqlalchemy.sql import func
from ..schemas.rating import RateSchema
from datetime import datetime

def rateAvocat(rateSchema: RateSchema,db:Session):
    rate = Rating(rate=rateSchema.rate,lawyerId=rateSchema.lawyerId,userId=rateSchema.userId,createdAt=datetime.now())
    db.add(rate)
    db.commit()
    db.refresh(rate)
    
    if(rateSchema.comment):
        comment = Comment(comment=rateSchema.comment,ratingid=rate.id)
        db.add(comment)
        db.commit()
        db.refresh(comment)
    
    return caluclateAvocatRate(rateSchema.lawyerId,db);

def caluclateAvocatRate(lawyerId:int,db:Session):
    (roundedavgrating,) = db.query(func.round(func.avg(Rating.rate) * 2) / 2).filter(Rating.lawyerId == lawyerId).first()
    db.query(Lawyer).filter(Lawyer.id == lawyerId).update({'rate': roundedavgrating})
    db.commit()
    return roundedavgrating

def aleadyRated(lawyerId:int,userId:int,db:Session):
    if db.query(Rating).filter(Rating.lawyerId == lawyerId).filter(Rating.userId == userId).first():
        return True
    else:
        return False


class LawyerRatingsAndCommentsResult:
    def __init__(self, userName, rate, comment, createdAt):
        self.userName = userName
        self.rate = rate
        self.comment = comment
        self.createdAt = createdAt

def getAvocatRatingsAndComments(avocatId:int,db:Session):
    results = db.query(Rating,Comment).join(Comment).filter(Rating.lawyerId == avocatId).filter(Rating.id == Comment.ratingid).all()
    
    lawyer_ratings_and_comments = [
        LawyerRatingsAndCommentsResult(
            userName=result.Rating.user.name,
            rate=result.Rating.rate,
            comment=result.Comment.comment,
            createdAt=result.Rating.createdAt.strftime("%B %d, %Y"),
        )
        for result in results
    ]
    return lawyer_ratings_and_comments
