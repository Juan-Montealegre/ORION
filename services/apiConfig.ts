
/**
 * Configuración de Puntos de Enlace (Endpoints) - Ecosistema Orión
 * --------------------------------------------------------------------
 * Este archivo centraliza la ubicación de los servicios para facilitar
 * el paso de modo Demo (IA directa) a Producción (Backend FastAPI).
 */

export const API_CONFIG = {
  // Ubicación del Backend en Python (FastAPI)
  BASE_URL: "http://localhost:8000/api/v1",
  
  // Modos de Operación:
  // 'IA_DIRECT': El frontend procesa la IA directamente (Demo rápida).
  // 'BACKEND_CORE': El frontend consulta al backend Python, que a su vez usa MongoDB.
  MODE: 'IA_DIRECT' as 'IA_DIRECT' | 'BACKEND_CORE',
  
  ENDPOINTS: {
    ORIENTATION: "/orientacion",
    FACULTIES: "/facultades",
    AUTH_LOGIN: "/auth/login",
    METRICS: "/admin/metrics",
  }
};
