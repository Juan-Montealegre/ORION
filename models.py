
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

class CareerSchema(BaseModel):
    carrera: str = Field(..., example="Ingeniería de Sistemas")
    institucion: str = "Universidad Libre"
    pensum_resumen: str
    costos: float
    duracion: str
    tags: List[str]
    compatibilidad: Optional[float] = 0.0

class StudentProfile(BaseModel):
    nombre: Optional[str] = "Aspirante Anónimo"
    prompt: str = Field(..., min_length=10)
    presupuesto_estimado: Optional[float] = None
    fecha_consulta: datetime = Field(default_factory=datetime.now)

class OrientationResult(BaseModel):
    analisis_perfil: str
    recomendaciones: List[CareerSchema]
    token_seguridad: str # Para trazabilidad
