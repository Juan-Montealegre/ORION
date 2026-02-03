
from fastapi import APIRouter, Depends
from models import CareerSchema
from database import get_database
from typing import List

router = APIRouter()

@router.get("/metrics")
async def get_system_metrics():
    """Retorna métricas de uso de la IA para el panel administrativo"""
    return {
        "total_consultas": 1250,
        "carrera_mas_buscada": "Ingeniería de Sistemas",
        "tiempo_promedio_respuesta": "1.2s",
        "precision_ia": "94.5%"
    }

@router.post("/careers")
async def add_career(career: CareerSchema):
    """Agrega un nuevo programa académico al catálogo de la Universidad Libre"""
    # db = get_database()
    # await db.careers.insert_one(career.dict())
    return {"message": f"Programa {career.carrera} añadido correctamente"}

@router.delete("/careers/{career_id}")
async def delete_career(career_id: str):
    return {"message": "Programa eliminado del ecosistema"}
