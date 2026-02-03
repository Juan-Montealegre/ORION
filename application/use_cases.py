
from domain.entities import AcademicProgram, OrientationSession
from infrastructure.event_dispatcher import event_bus
import uuid

class ProcessOrientationUseCase:
    def __init__(self, repository):
        self.repository = repository

    async def execute(self, prompt: str, budget: float = None) -> dict:
        # 1. Lógica de negocio: Buscar programas que coincidan
        # (Aquí se integraría el motor de IA/NLP)
        programs_data = await self.repository.find_matches(prompt, budget)
        
        # 2. Crear la entidad de sesión
        session_id = str(uuid.uuid4())
        
        # 3. Emitir evento de dominio (Orientada a Eventos)
        await event_bus.emit("orientation_created", {
            "session_id": session_id,
            "prompt_length": len(prompt)
        })
        
        return {
            "session_id": session_id,
            "analysis": "Tu perfil muestra una fuerte inclinación analítica y técnica.",
            "programs": programs_data
        }
