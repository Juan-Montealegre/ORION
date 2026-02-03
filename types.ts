
export interface CareerOption {
  carrera: string;
  institucion: string;
  pensum_resumen: string;
  costos: string;
  duracion: string;
  justificacion: string;
  compatibilidad: number; // 0 to 100
}

export interface OrientationResponse {
  top_options: CareerOption[];
  analisis_perfil: string;
}

export enum RequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
