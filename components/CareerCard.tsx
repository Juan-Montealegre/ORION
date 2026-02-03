
import React from 'react';
import { CareerOption } from '../types';

interface CareerCardProps {
  option: CareerOption;
  rank: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ option, rank }) => {
  return (
    <div className="group relative bg-slate-900/40 rounded-[3rem] border border-white/5 p-12 shadow-2xl hover:border-red-500/40 transition-all duration-700 hover:-translate-y-2 overflow-hidden">
      {/* Power accent */}
      <div className="absolute top-0 left-12 w-16 h-1 bg-[#D32F2F] rounded-b-full group-hover:w-32 transition-all"></div>
      
      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-[#D32F2F] text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-red-900/50">
                MATCH 0{rank}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black text-green-500">{option.compatibilidad}% Afinidad</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-red-400 transition-colors tracking-tighter">
              {option.carrera}
            </h3>
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">{option.institucion}</p>
          </div>
          
          <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-white/5 text-center min-w-[180px]">
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Costo Semestral</p>
            <p className="text-3xl font-black text-white">{option.costos}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
               <div className="absolute -top-4 -right-4 text-6xl text-white/5 opacity-5 font-black">?</div>
               <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4">¿Por qué este es tu propósito?</h4>
               <p className="text-slate-300 font-medium text-lg leading-relaxed italic">
                 "{option.justificacion}"
               </p>
            </div>
            <div className="flex items-center gap-10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
               <span className="flex items-center gap-2">⏱ {option.duracion}</span>
               <span className="flex items-center gap-2">📍 Sede Bogotá</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] border-b border-white/10 pb-4">Dimensiones del Perfil</h4>
            <div className="space-y-4">
               <p className="text-sm text-slate-400 font-medium leading-relaxed">
                 {option.pensum_resumen}
               </p>
            </div>
            <button className="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-[0.2em] group/btn mt-8">
              Analizar Plan de Estudios 
              <span className="w-8 h-8 rounded-full border border-red-500/20 flex items-center justify-center group-hover/btn:bg-red-500 group-hover/btn:text-white transition-all">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
