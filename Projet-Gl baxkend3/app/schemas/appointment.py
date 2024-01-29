

from datetime import date
from pydantic import BaseModel

AppointmentTimes = {1:"8:00-9:30",2:"10:00-11:30",3:"13:00-14:30",4:"15:00-16:30"}

class AppointmentResult(BaseModel):
    username :str
    appointmentDate:date
    appointmentTime:str
