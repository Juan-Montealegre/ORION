
import React from 'react';

const MiCamino: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-[#D32F2F] p-1">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aspirante" className="w-full h-full rounded-full bg-slate-800" alt="Avatar" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-[#020617] flex items-center justify-center text-[10px]">✨</div>
        </div>
        <div className="text-center md:text-left space-y-2">
           <h2 className="text-4xl font-black">Mi Camino Estelar</h2>
           <p className="text-slate-500 text-sm font-medium uppercase tracking-widest italic">Aspirante en proceso de descubrimiento • 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Constelaciones Guardadas */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Constelaciones Favoritas</h3>
          <div className="bg-slate-900/60 p-8 rounded-[2.5rem] border border-white/5 space-y-6">
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#D32F2F]/30 transition-all cursor-pointer">
              <div className="flex items-center gap-6">
                 <span className="text-3xl">💻</span>
                 <div>
                    <h4 className="font-black text-lg">Ingeniería de Sistemas</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Match: 95%</p>
                 </div>
              </div>
              <button className="text-red-500 text-sm font-black">Quitar</button>
            </div>
            
            <div className="flex items-center justify-center p-12 border-2 border-dashed border-white/5 rounded-2xl opacity-40">
               <p className="text-xs font-black uppercase tracking-widest text-slate-600">Espacio disponible para más propósitos</p>
            </div>
          </div>
        </div>

        {/* Estadísticas de Navegación */}
        <div className="space-y-6">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Métricas de Navegación</h3>
          <div className="bg-[#D32F2F] p-8 rounded-[2.5rem] shadow-2xl text-white space-y-6">
             <div className="space-y-1">
                <p className="text-[9px] font-black uppercase opacity-70">Consultas Orion IA</p>
                <p className="text-4xl font-black">12</p>
             </div>
             <div className="space-y-1">
                <p className="text-[9px] font-black uppercase opacity-70">Tiempo en Ecosistema</p>
                <p className="text-2xl font-black italic">Explorador</p>
             </div>
             <button className="w-full bg-white text-[#D32F2F] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Descargar Reporte PDF
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiCamino;
