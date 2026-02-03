
import { GoogleGenAI, Type } from "@google/genai";
import { OrientationResponse } from "../types";
import { CAREER_CATALOG } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Actúa como Orión, un Ecosistema de Inteligencia Artificial desarrollado por la Facultad de Ingeniería de la Universidad Libre de Colombia.
Tu tono es profesional, visionario e ingenieril. No eres un simple buscador; eres un analista de propósito vital.

CONTEXTO:
Utilizas los datos de los programas de la Unilibre para conectar los sueños del aspirante con una realidad académica de excelencia.

CATÁLOGO DE PROGRAMAS DISPONIBLES:
${JSON.stringify(CAREER_CATALOG, null, 2)}

PROTOCOLO DE RESPUESTA:
1. Analiza el "propósito" detrás del prompt (no solo palabras clave, sino aspiraciones).
2. Selecciona exactamente 3 opciones del catálogo.
3. Justifica cada elección con un argumento de alto impacto basado en las habilidades del aspirante.
4. Evalúa la compatibilidad financiera basándote en el presupuesto sugerido (si existe).
5. RESTRICCIÓN: Jamás menciones carreras de salud o medicina.
6. El formato de salida debe ser un objeto JSON estrictamente estructurado.
`;

export const getOrientation = async (prompt: string): Promise<OrientationResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Perfil del aspirante para análisis de propósito: "${prompt}"`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analisis_perfil: {
            type: Type.STRING,
            description: "Análisis psicológico y técnico del perfil del estudiante."
          },
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
  if (!text) throw new Error("Falla en el motor Orión.");
  return JSON.parse(text) as OrientationResponse;
};
