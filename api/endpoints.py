
from fastapi import APIRouter, Depends
from models import StudentProfile, OrientationResult
from application.use_cases import ProcessOrientationUseCase
from database import get_database

router = APIRouter()

class MockRepo:
    async def find_matches(self, prompt, budget):
        # Simulación de consulta a MongoDB
        return []

@router.post("/orientacion")
async def get_orientation(profile: StudentProfile):
    # En una implementación real, se usaría Inyección de Dependencias
    repo = MockRepo()
    use_case = ProcessOrientationUseCase(repo)
    result = await use_case.execute(profile.prompt, profile.presupuesto_estimado)
    
    return {
        "analisis_perfil": result["analysis"],
        "recomendaciones": result["programs"],
        "token_seguridad": result["session_id"]
    }
