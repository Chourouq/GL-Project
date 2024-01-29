from sqlalchemy import Column, Integer, String,ForeignKey,JSON,Date,Float,DateTime
from ..database.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "user"
    id = Column (Integer,primary_key=True,index = True,autoincrement=True)
    name = Column(String(50))
    email = Column(String(50),unique=True)
    password = Column(String(31))
    appointments = relationship("Appointment", back_populates="user")
    rating = relationship("Rating",back_populates="user")

class Lawyer(Base):
    __tablename__='lawyer'
    id=Column(Integer,primary_key=True,index=True,autoincrement=True)
    name=Column(String(50) ,index=True)
    email=Column(String(50),unique=True)    
    specialty = Column(String(50))
    phone_number = Column(Integer)
    office_address = Column(String(50))
    website = Column(String(50))
    linkedin_profile = Column(String(50))
    wilaya=Column(String(50))
    password=Column(String(50))    
    categories = Column(JSON)
    description = Column(String(50))
    rate =Column(Float)
    appointments = relationship("Appointment", back_populates="lawyer", cascade="all, delete-orphan")
    rating = relationship("Rating",back_populates="lawyer", cascade="all, delete-orphan")

class Appointment(Base):
    __tablename__='appointment'
    id=Column(Integer,primary_key=True,index=True,autoincrement=True)
    userid = Column(Integer,ForeignKey("user.id"))
    avocatid = Column(Integer,ForeignKey("lawyer.id"))
    appointmentDate = Column(Date)
    appointmentIndex = Column(Integer)
    lawyer = relationship("Lawyer", back_populates="appointments")
    user = relationship("User", back_populates="appointments")

    
class Rating(Base):
    __tablename__ = "rating"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"))
    lawyerId = Column(Integer, ForeignKey("lawyer.id"))
    rate = Column(Float)
    createdAt = Column(DateTime)
    lawyer = relationship("Lawyer", back_populates="rating")
    user = relationship("User", back_populates="rating")
    comment = relationship("Comment", back_populates="rating", passive_deletes=True)
    
class Comment(Base):
    __tablename__ = "comment"
    id = Column(Integer, primary_key=True, index=True)
    ratingid = Column(Integer, ForeignKey("rating.id", ondelete='CASCADE'))
    comment = Column(String(255))
    rating = relationship("Rating", back_populates="comment")
