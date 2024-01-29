
from fastapi import APIRouter,Depends,status,HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from ..models import models
from ..schemas import schemas
from ..database import database
from ..repositories import lawyer
from sqlalchemy.orm import Session
from typing import List

from ..repositories.hashing import Hash
from .. import token


router=APIRouter(tags=['admin'],prefix='/admin')

@router.delete("/delete/{lawyerid}")
def deleteLawyer(lawyerid:int,db:Session=Depends(database.get_db)):
    return lawyer.delete_lawyer(db,lawyerid)
