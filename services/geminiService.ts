
import { GoogleGenAI, Type } from "@google/genai";
import { OrientationResponse } from "../types";
import { CAREER_CATALOG } from "../constants";
import { API_CONFIG } from "./apiConfig";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
Actúa como Orión, un Ecosistema de Inteligencia Artificial desarrollado por la Facultad de Ingeniería de la Universidad Libre de Colombia.
Tu tono es profesional, visionario e ingenieril.

CONTEXTO:
Utilizas los datos de los programas de la Unilibre para conectar los sueños del aspirante con la realidad académica.

CATÁLOGO:
${JSON.stringify(CAREER_CATALOG, null, 2)}

PROTOCOLO:
1. Analiza el propósito del aspirante.
2. Selecciona exactamente 3 opciones del catálogo.
3. RESTRICCIÓN: No menciones medicina o salud.
4. Devuelve un JSON estructurado.
`;

/**
 * Función Principal de Orientación
 * Ubicación lógica: services/geminiService.ts
 */
export const getOrientation = async (prompt: string): Promise<OrientationResponse> => {
  // Si estamos en modo BACKEND_CORE, redirigimos la petición al servidor FastAPI (Python)
  if (API_CONFIG.MODE === 'BACKEND_CORE') {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ORIENTATION}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) throw new Error("Fallo de comunicación con el Core de Orión (FastAPI).");
    return await response.json();
  }

  // Ejecución vía Gemini SDK (Modo Demo / IA Directa)
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analiza este perfil: "${prompt}"`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analisis_perfil: { type: Type.STRING },
          top_options: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                carrera: { type: Type.STRING },
                institucion: { type: Type.STRING },
                pensum_resumen: { type: Type.STRING },
                costos: { type: Type.STRING },
                duracion: { type: Type.STRING },
                justificacion: { type: Type.STRING },
                compatibilidad: { type: Type.NUMBER }
              },
              required: ["carrera", "institucion", "pensum_resumen", "costos", "duracion", "justificacion", "compatibilidad"]
            }
          }
        },
        required: ["analisis_perfil", "top_options"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("El motor Orión no devolvió una respuesta válida.");
  return JSON.parse(text) as OrientationResponse;
};
