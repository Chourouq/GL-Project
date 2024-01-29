from fastapi import APIRouter, Depends, HTTPException, Request,status
from fastapi.security import HTTPBearer
from jose import JWTError
from sqlalchemy.orm import Session
from ..database.database import get_db
from ..repositories.rating import aleadyRated, rateAvocat,getAvocatRatingsAndComments
from ..schemas.rating import RateSchema
from ..repositories import lawyer,user



router = APIRouter(prefix="/rating", tags=["Rating"])

@router.post("/rate")
def rate(rateSchema: RateSchema,db:Session=Depends(get_db)):
    checkavocat = lawyer.get_by_id( rateSchema.lawyerId,db)
    checkuser = user.get_by_id( rateSchema.userId,db)
    if (not checkavocat or not checkuser):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User or Avocat not found")
    if(aleadyRated(rateSchema.lawyerId,rateSchema.userId,db)):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already rated this avocat")
    if(rateSchema.rate < 0 or rateSchema.rate > 5):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Rate must be between 0 and 5")
    newrating = rateAvocat(rateSchema,db)
    return {"rating":newrating}

@router.get("/rate")
def rate(lawyerId : int,db:Session=Depends(get_db)):
    checkaLawyer = lawyer.get_by_id(lawyerId,db)
    if not checkaLawyer:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Avocat not found")
    return getAvocatRatingsAndComments(lawyerId,db)

@router.get("/can-rate")
def canRate(lawyerId : int,userid : int,db:Session=Depends(get_db)):
    checkaLawyer = lawyer.get_by_id(lawyerId,db )
    checkuser = user.get_by_id(userid,db)
    if (not checkaLawyer or not checkuser):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User or Avocat not found")
    if(aleadyRated(lawyerId,userid,db) or checkaLawyer.userId == userid):
        return {"canRate":False}
    else:
        return {"canRate":True}
