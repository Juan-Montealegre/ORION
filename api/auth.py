
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta
import jwt

router = APIRouter()

SECRET_KEY = "orion_v3_core_platform_secret"
ALGORITHM = "HS256"

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    email: str
    role: str
    token: str

@router.post("/login", response_model=UserResponse)
async def login(request: LoginRequest):
    # Simulación de validación en MongoDB
    if request.email == "admin@unilibre.edu.co" and request.password == "orion2026":
        token_data = {"sub": request.email, "role": "ADMIN", "exp": datetime.utcnow() + timedelta(hours=24)}
        token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)
        return {
            "email": request.email,
            "role": "ADMIN",
            "token": token
        }
    
    # Usuario aspirante por defecto
    token_data = {"sub": request.email, "role": "STUDENT", "exp": datetime.utcnow() + timedelta(hours=24)}
    token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)
    return {
        "email": request.email,
        "role": "STUDENT",
        "token": token
    }

@router.post("/register")
async def register(user: LoginRequest):
    # Lógica de registro en MongoDB Atlas
    return {"message": "Usuario registrado exitosamente en el ecosistema Orión"}
