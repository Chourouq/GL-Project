
from fastapi import FastAPI

from app.api import admin, appointmet, rating, user
app = FastAPI()
from .models import models
from .database.database import engine
from .api import lawyer,search

# Define a route

models.Base.metadata.create_all(engine)
app.include_router(lawyer.router)
app.include_router(user.router)
app.include_router(admin.router)
app.include_router(search.router)
app.include_router(appointmet.router)
app.include_router(rating.router)



