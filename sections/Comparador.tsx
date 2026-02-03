import React, { useState } from 'react';
import { CAREER_CATALOG } from '../constants';

const Comparador: React.FC = () => {
  const [leftCareer, setLeftCareer] = useState(CAREER_CATALOG[0]);
  const [rightCareer, setRightCareer] = useState(CAREER_CATALOG[1]);

  const renderCurriculumBubbles = (career: any, side: 'left' | 'right') => {
    // Imágenes reales relacionadas a materias de Unilibre
    const mockSubjects = [
      { name: 'Cálculo', credits: 4, area: 'Ciencias', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=60&w=200' },
      { name: 'Programación', credits: 3, area: 'Técnica', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=60&w=200' },
      { name: 'Derecho Civil', credits: 4, area: 'Leyes', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=200' },
      { name: 'Humanidades', credits: 2, area: 'Socio-Humanística', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=60&w=200' },
      { name: 'Economía', credits: 3, area: 'Finanzas', img: 'https://images.unsplash.com/photo-1611974714658-71d4451f7dd1?auto=format&fit=crop&q=60&w=200' },
    ];

    return (
      <div className="flex flex-wrap gap-4 justify-center py-10">
        {mockSubjects.slice(0, 5).map((subject, idx) => (
          <div 
            key={idx}
            className={`group relative rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125 cursor-help ${side === 'left' ? 'bg-slate-800 border-white/10' : 'bg-slate-800 border-[#D32F2F]/30'} border-2 overflow-hidden shadow-2xl`}
            style={{ 
              width: `${subject.credits * 25}px`, 
              height: `${subject.credits * 25}px` 
            }}
          >
            <img 
              src={subject.img} 
              className="imagen-global absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity"
              alt={subject.name}
            />
            <span className="relative z-10 text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase text-center p-2 text-white drop-shadow-lg">
              {subject.name}
            </span>
            {/* Tooltip */}
            <div className="absolute -top-10 scale-0 group-hover:scale-100 bg-black px-3 py-1 rounded text-[8px] font-black uppercase text-red-500 transition-transform z-20">
              {subject.credits} Créditos
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black tracking-tight">Comparador de <span className="text-[#D32F2F]">Propósitos</span></h2>
        <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Contrasta mallas curriculares y carga académica</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
        
        {/* Lado Izquierdo */}
        <div className="bg-[#020617] p-12 space-y-8 relative group min-h-[600px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <select 
              value={leftCareer.carrera} 
              onChange={(e) => setLeftCareer(CAREER_CATALOG.find(c => c.carrera === e.target.value)!)}
              className="bg-transparent text-xl font-black text-white focus:outline-none border-b-2 border-white/10 pb-2 cursor-pointer max-w-[250px]"
            >
              {CAREER_CATALOG.map(c => <option key={c.carrera} value={c.carrera} className="bg-[#020617]">{c.carrera}</option>)}
            </select>
            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.3em]">Sede Principal</span>
          </div>

          <div className="flex-grow space-y-12">
             <div className="h-40 w-full rounded-2xl overflow-hidden relative">
                <img src={(leftCareer as any).image} className="imagen-global w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Career" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
             </div>

             <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>Carga Académica Semestral</span>
                  <span className="text-white italic">Distribución Unilibre</span>
                </div>
                {renderCurriculumBubbles(leftCareer, 'left')}
             </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Áreas Core</h4>
            <div className="flex flex-wrap gap-2">
              {(leftCareer as any).areas?.map((area: string) => (
                <span key={area} className="bg-white/5 text-[9px] font-bold px-4 py-2 rounded-full border border-white/5">{area}</span>
              ))}
            </div>
          </div>

          <button className="w-full bg-white/5 hover:bg-white/10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all mt-8">
            Descargar Pénsum Completo
          </button>
        </div>

        {/* Lado Derecho (Espejo Activo) */}
        <div className="bg-slate-900/40 p-12 space-y-8 relative border-l border-white/5 min-h-[600px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <select 
              value={rightCareer.carrera} 
              onChange={(e) => setRightCareer(CAREER_CATALOG.find(c => c.carrera === e.target.value)!)}
              className="bg-transparent text-xl font-black text-[#D32F2F] focus:outline-none border-b-2 border-[#D32F2F]/30 pb-2 cursor-pointer max-w-[250px]"
            >
              {CAREER_CATALOG.map(c => <option key={c.carrera} value={c.carrera} className="bg-[#020617]">{c.carrera}</option>)}
            </select>
            <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Sede Principal</span>
          </div>

          <div className="flex-grow space-y-12">
             <div className="h-40 w-full rounded-2xl overflow-hidden relative">
                <img src={(rightCareer as any).image} className="imagen-global w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Career" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
             </div>

             <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>Carga Académica Semestral</span>
                  <span className="text-[#D32F2F] italic">Distribución Unilibre</span>
                </div>
                {renderCurriculumBubbles(rightCareer, 'right')}
             </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Áreas Core</h4>
            <div className="flex flex-wrap gap-2">
              {(rightCareer as any).areas?.map((area: string) => (
                <span key={area} className="bg-[#D32F2F]/10 text-[#D32F2F] text-[9px] font-bold px-4 py-2 rounded-full border border-[#D32F2F]/20">{area}</span>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#D32F2F] hover:bg-red-700 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all mt-8 shadow-xl shadow-red-900/30">
            Comparar Requisitos Financieros
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comparador;
