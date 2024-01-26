from fastapi import FastAPI, HTTPException
import pymysql
import bcrypt 
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List
from tortoise.contrib.fastapi import register_tortoise
from typing import List
from fastapi import Cookie, Depends
from fastapi import FastAPI, HTTPException, Request


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class UserRegistrationRequest(BaseModel):
    email: str
    fullName: str
    specialites: List[str]
    password: str
    confirmPassword: str

class UserRegistrationResponse(BaseModel):
    message: str 


db = pymysql.connect(
    host="localhost",
    user="root",
    database="dzmohami",
    cursorclass=pymysql.cursors.DictCursor,
    password=""
)

@app.get("/specialties", response_model=List[dict])
def get_specialties():
    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM specialite")
        specialties = cursor.fetchall()
    return specialties

@app.post("/register", response_model=UserRegistrationResponse)
def register_user(user_data: UserRegistrationRequest):
    nom = user_data.fullName
    email = user_data.email
    password = user_data.password
    confirmPassword = user_data.confirmPassword

    if password != confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    
    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM avocat WHERE email = %s", (email,))
        existing_user = cursor.fetchone()
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already exists")

    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    
    with db.cursor() as cursor:
        query = "INSERT INTO avocat (nom, email, password) VALUES (%s, %s, %s)"
        cursor.execute(query, (nom, email, hashed_password))
        avocat_id = cursor.lastrowid 
        db.commit()
    '''with db.cursor() as cursor:
        for specialty in user_data.specialites:
            cursor.execute("SELECT specialiteID FROM specialite WHERE nomSpecialite = %s", (specialty,))
            specialite_id = cursor.fetchone()
            if not specialite_id:
                raise HTTPException(status_code=400, detail="Speciality not found")

            query = "INSERT INTO avocatSpecialite (avocatID, specialiteID) VALUES (%s, %s)"
            cursor.execute(query, (avocat_id, specialite_id))    
    db.commit()'''
    with db.cursor() as cursor:
     for specialty in user_data.specialites:
        cursor.execute("SELECT specialiteID FROM specialite WHERE nomSpecialite = %s", (specialty,))
        specialite_info = cursor.fetchone()
        if not specialite_info:
            raise HTTPException(status_code=400, detail="Speciality not found")

        specialite_id = specialite_info["specialiteID"]
        query = "INSERT INTO avocatSpecialite (avocatID, specialiteID) VALUES (%s, %s)"
        cursor.execute(query, (avocat_id, specialite_id))

        db.commit()
    

    '''with db.cursor() as cursor:
        for specialite_id in user_data.specialites:
            query = "INSERT INTO avocatSpecialite (avocatID, specialiteID) VALUES (%s, %s)"
            cursor.execute(query, (avocat_id, specialite_id))

        db.commit()'''
    return {"message": "User registered successfully"}

class UserLoginRequest(BaseModel):
    email: str
    password: str


@app.post("/login")
def login_user(user_data: UserLoginRequest):
    email = user_data.email
    password = user_data.password

    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM avocat WHERE email = %s", (email,))
        user = cursor.fetchone()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        stored_hashed_password = user["password"].encode("utf-8")
        entered_password = password.encode("utf-8")

        if bcrypt.checkpw(entered_password, stored_hashed_password):
            return {"message": "Login successful"}
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        

class CookieDeleter:
    def __init__(self, response: JSONResponse = Depends(JSONResponse)):
        self.response = response

    def __call__(self):
        self.response.delete_cookie(key="user_id")

def create_cookie():
    return JSONResponse(content={}, headers={"Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Origin": "http://localhost:5173"})

def delete_cookie():
    return JSONResponse(content={}, headers={"Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Origin": "http://localhost:5173"})

@app.post("/logout")
def logout(response: JSONResponse = delete_cookie()):
    response.delete_cookie(key="user_id")
    return {"message": "Logout successful"}

def delete_cookie():
    return JSONResponse(content={}, headers={"Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Origin": "http://localhost:5173"})

async def get_current_user(user_id: int = Cookie(None)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return credentials_exception


# Helper function to delete the user_id cookie
def delete_cookie():
    return JSONResponse(content={}, headers={"Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Origin": "http://localhost:5173"})

async def get_current_user(user_id: int = Cookie(None)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return credentials_exception

class AvocatProfile(BaseModel):
    nom: str
    email: str
    phone: str
    website: str
    description: str
    address: str
    specialities: List[str]


@app.get("/avocat/{avocat_id}", response_model=AvocatProfile)
def get_avocat_profile(avocat_id: int, current_user: int = Depends(get_current_user)):

    if not current_user:
        raise HTTPException(status_code=401, detail="User not authenticated")
    # Fetch avocat profile information from the database based on avocat_id
    # You need to implement this query based on your database structure
    with db.cursor() as cursor:
        cursor.execute("""
            SELECT a.nom, a.email, a.phone, a.website, a.description, l.lat, l.lng, l.address
            FROM avocat a
            LEFT JOIN location l ON a.id = l.avocatID
            WHERE a.id = %s
        """, (avocat_id,))
        avocat_data = cursor.fetchone()

        if not avocat_data:
            raise HTTPException(status_code=404, detail="Avocat not found")

        # Fetch specialities for the avocat
        cursor.execute("""
            SELECT s.nomSpecialite
            FROM specialite s
            INNER JOIN avocatSpecialite a ON s.specialiteID = a.specialiteID
            WHERE a.avocatID = %s
        """, (avocat_id,))
        specialities = [item['nomSpecialite'] for item in cursor.fetchall()]

    # Prepare the response model
    avocat_profile = AvocatProfile(
        nom=avocat_data['nom'],
        email=avocat_data['email'],
        phone=avocat_data['phone'],
        website=avocat_data['website'],
        description=avocat_data['description'],
        address=avocat_data['address'],
        specialities=specialities,
    )

    return avocat_profile
async def get_current_user(user_id: int = Cookie(None)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    if user_id:
        
        if validate_user_id(user_id):
            return user_id
        else:
            raise credentials_exception
    else:
        raise credentials_exception


class AvocatProfileUpdate(BaseModel):
    description: str
    address: str
    specialities: List[str]

@app.put("/avocat/{avocat_id}/update", response_model=AvocatProfile)
def update_avocat_profile(avocat_id: int, update_data: AvocatProfileUpdate):
    # Update avocat profile information in the database based on avocat_id
    # You need to implement the update query based on your database structure
    with db.cursor() as cursor:
        cursor.execute("""
            UPDATE avocat
            SET description = %s
            WHERE id = %s
        """, (update_data.description, avocat_id))

        cursor.execute("""
            UPDATE location
            SET address = %s
            WHERE avocatID = %s
        """, (update_data.address, avocat_id))

        # Delete existing specialities and insert new ones
        cursor.execute("""
            DELETE FROM avocatSpecialite
            WHERE avocatID = %s
        """, (avocat_id,))

        for specialty in update_data.specialities:
            cursor.execute("""
                INSERT INTO avocatSpecialite (avocatID, specialiteID)
                VALUES (%s, (SELECT specialiteID FROM specialite WHERE nomSpecialite = %s))
            """, (avocat_id, specialty))

    db.commit()

    # Fetch and return the updated avocat profile
    return get_avocat_profile(avocat_id)    

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )

@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    # Log the exception details (you can use a proper logging library)
    print(f"Unexpected error: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error"},
    )
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

