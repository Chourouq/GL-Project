from fastapi import APIRouter
from ..database import database
from fastapi import APIRouter,Depends,status,HTTPException
from ..models import models
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from ..repositories.hashing import Hash
from .. import token



router=APIRouter(tags=['authentification'])


@router.post('/login')
def login(request:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(database.get_db)):
   lawyer=db.query(models.Lawyer).filter(models.Lawyer.email==request.username).first()
   if not lawyer :
      raise HTTPException (status_code=status.HTTP_404_NOT_FOUND,detail=f"invalid credentials")
   if not Hash.verify(lawyer.password,request.password):
      raise HTTPException (status_code=status.HTTP_404_NOT_FOUND,detail=f"incorrect password")

   access_token = token.create_access_token(
        data={"sub": lawyer.email} )
   return {"access_token": access_token, "token_type": "bearer"}