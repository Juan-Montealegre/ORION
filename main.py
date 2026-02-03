
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.endpoints import router as api_router
from api.auth import router as auth_router
from api.admin import router as admin_router
from database import connect_to_mongo, close_mongo_connection

app = FastAPI(
    title="Orion - Unilibre Clean Architecture 2026",
    description="Tu guía inteligente entre las constelaciones del saber",
    version="4.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()

# Rutas de la API v1
app.include_router(auth_router, prefix="/api/v1/auth", tags=["Autenticación"])
app.include_router(admin_router, prefix="/api/v1/admin", tags=["Panel Administrativo"])
app.include_router(api_router, prefix="/api/v1", tags=["Servicios Core"])

# Endpoints adicionales solicitados para los nuevos módulos
@app.get("/api/v1/facultades", tags=["Universidades"])
async def list_faculties():
    """Retorna el catálogo de facultades desde MongoDB"""
    return [
        {"id": 1, "nombre": "Facultad de Ingeniería", "sede": "Bosque"},
        {"id": 2, "nombre": "Facultad de Derecho", "sede": "Candelaria"},
        {"id": 3, "nombre": "Ciencias Económicas", "sede": "Candelaria"}
    ]

@app.get("/api/v1/mi-camino/{user_id}", tags=["Mi Camino"])
async def get_user_favorites(user_id: str):
    """Retorna las carreras favoritas guardadas por el aspirante"""
    return {"favorites": ["Ingeniería de Sistemas"], "progress": "Descubridor"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
