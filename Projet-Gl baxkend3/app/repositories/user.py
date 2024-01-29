from fastapi import APIRouter,Depends,status,HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from ..schemas import schemas
from ..models import models
from ..database import database
from typing import List
from sqlalchemy.orm import Session
from .hashing import Hash

def create_user(request:schemas.UserSignUp,db:Session = Depends(database.get_db)):
    newUser = models.User(name=request.name,
                              email=request.email,
                              password= request.password      )
    db.add(newUser)
    db.commit()
    db.refresh(newUser)
    return newUser

def login_User(db: Session,request:OAuth2PasswordRequestForm ):
    lawyer=db.query(models.User).filter(models.User.email==request.username).first()
    return lawyer

def get_by_id(avocat_id: int, db: Session):
    avocat = db.query(models.User).filter(models.User.id == avocat_id).first()
    if avocat is None:
        raise HTTPException(status_code=404, detail="Avocat non trouvé")
    return avocat