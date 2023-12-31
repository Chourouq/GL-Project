from fastapi import FastAPI, HTTPException
import pymysql
import bcrypt 
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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
    specialite: str
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
        db.commit()

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