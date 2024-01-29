from datetime import date
from fastapi import APIRouter, Depends

from app import schemas
from .. import oauth2

from app.repositories.appointement import createAppointment, getAppointment
from ..database import database
from sqlalchemy.orm import Session
from ..repositories.search import usersearch as usersr

router = APIRouter(tags=['appointment'])


@router.post("/appointment")
def CreateAppointment(userid:int,avocatid:int,appointmentDate:date,appointmentIndex:int,db:Session = Depends(database.get_db)):
    return createAppointment(userid,avocatid,appointmentDate,appointmentIndex,db)

@router.get("/appointment")
def GetAppointments(avocatid:int,db:Session = Depends(database.get_db)):
    return getAppointment(avocatid,db)