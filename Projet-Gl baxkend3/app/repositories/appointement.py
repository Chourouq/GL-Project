

from datetime import date
from fastapi import Depends
from ..database import database
from app.database.database import SessionLocal
from app.models.models import Appointment,User
from app.schemas.appointment import AppointmentResult,AppointmentTimes



def createAppointment(userid:int,avocatid:int,appointmentDate:date,appointmentIndex:int,db:SessionLocal):
    newAppointement = Appointment(
        userid = userid,
        avocatid = avocatid,
        appointmentDate = appointmentDate,
        appointmentIndex = appointmentIndex
    )
    db.add(newAppointement)
    db.commit()
    db.refresh(newAppointement)
    return newAppointement

def getAppointment(avocatid:int,db:SessionLocal):
    appointments = db.query(Appointment).filter(Appointment.avocatid == avocatid)

    appointmentResult = []
    for appointment in appointments:
        user = db.query(User).filter(User.id == appointment.userid).first()
        appointmentTime = AppointmentTimes[appointment.appointmentIndex]
        app = AppointmentResult(username = user.name,appointmentDate = appointment.appointmentDate,appointmentTime = appointmentTime)
        appointmentResult.append(app)
    return appointmentResult