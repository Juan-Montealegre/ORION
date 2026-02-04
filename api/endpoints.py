
from fastapi import APIRouter, Depends, HTTPException
from models import StudentProfile, OrientationResult
from application.use_cases import ProcessOrientationUseCase
from database import get_database

router = APIRouter()

# Ubicación física: /api/endpoints.py
# Este archivo es el punto de entrada de la red para el frontend.

@router.post("/orientacion")
async def get_orientation(profile: StudentProfile):
    """
    Punto de enlace (Endpoint) para el motor de orientación.
    Recibe el prompt del estudiante y coordina la lógica con la IA y MongoDB.
    """
    try:
        # En una arquitectura limpia, el repositorio se encarga de MongoDB
        # y el Caso de Uso de orquestar la llamada a la IA.
        repo = None # Inyectar repositorio de MongoDB aquí
        use_case = ProcessOrientationUseCase(repo)
        result = await use_case.execute(profile.prompt, profile.presupuesto_estimado)
        
        return {
            "analisis_perfil": result["analysis"],
            "top_options": result["programs"],
            "token_seguridad": result["session_id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno en el Ecosistema Orión: {str(e)}")
