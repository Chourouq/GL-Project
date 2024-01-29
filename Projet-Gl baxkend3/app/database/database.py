from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHAMY_DATA_BASE_URL='mysql+pymysql://root@localhost:3306/dzmohami'
engine = create_engine(SQLALCHAMY_DATA_BASE_URL)

SessionLocal=sessionmaker(bind=engine,autocommit=False,autoflush=False,)

Base = declarative_base()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
