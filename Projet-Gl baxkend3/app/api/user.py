
from fastapi import APIRouter,Depends,status,HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from app import models
from app.api import lawyer
from ..schemas import schemas
from ..database import database
from ..repositories import user
from sqlalchemy.orm import Session
from typing import List

from ..repositories.hashing import Hash
from .. import token

router = APIRouter(prefix="/User",tags=["User"])

@router.post('/login')
def login_user(request:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(database.get_db)):
   User=user.login_User(db,request)
   if not User :
      raise HTTPException (status_code=status.HTTP_404_NOT_FOUND,detail=f"invalid credentials")
   if not    User.password ==request.password :
      raise HTTPException (status_code=status.HTTP_404_NOT_FOUND,detail=f"incorrect password")

   access_token = token.create_access_token(
        data={"sub": User.email} )
   return {"access_token": access_token, "token_type": "bearer"}

@router.post('/create')
def create_user(request:schemas.UserSignUp ,db:Session = Depends(database.get_db)):
    return user.create_user(request,db)