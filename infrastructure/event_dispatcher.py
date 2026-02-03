
import asyncio
from typing import Callable, Dict, List

class EventDispatcher:
    """
    Simula un bus de eventos para comunicación entre microservicios
    dentro de una arquitectura orientada a eventos.
    """
    def __init__(self):
        self._listeners: Dict[str, List[Callable]] = {}

    def subscribe(self, event_type: str, listener: Callable):
        if event_type not in self._listeners:
            self._listeners[event_type] = []
        self._listeners[event_type].append(listener)

    async def emit(self, event_type: str, data: dict):
        if event_type in self._listeners:
            tasks = [asyncio.create_task(listener(data)) for listener in self._listeners[event_type]]
            await asyncio.gather(*tasks)

# Instancia global del bus de eventos
event_bus = EventDispatcher()

# Ejemplo de un listener (Microservicio de Analítica)
async def analytics_listener(data: dict):
    print(f"[EVENT] Analytics Service: Registrando consulta - {data.get('session_id')}")

event_bus.subscribe("orientation_created", analytics_listener)
