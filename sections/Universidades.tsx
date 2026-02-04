
import React from 'react';

const Universidades: React.FC = () => {
  const sedes = [
    { 
      name: 'Sede Candelaria', 
      location: 'Centro Histórico, Bogotá', 
      focus: 'Jurídicas y Políticas', 
      img: 'https://www.unilibre.edu.co/la-universidad/images/sedes/candelaria.jpg',
      icon: '🏛️'
    },
    { 
      name: 'Sede Bosque', 
      location: 'Norte de Bogotá', 
      focus: 'Ingeniería y Educación', 
      img: 'https://www.unilibre.edu.co/bogota/images/recorrido/bosque/1.jpg',
      icon: '🌲'
    },
    { 
      name: 'Sede Pereira', 
      location: 'Risaralda', 
      focus: 'Salud y Administración', 
      img: 'https://www.unilibre.edu.co/pereira/images/recorrido/belmonte/1.jpg',
      icon: '☕'
    },
    { 
      name: 'Sede Cali', 
      location: 'Valle del Cauca', 
      focus: 'Multidisciplinar', 
      img: 'https://www.unilibrecall.edu.co/images/valle-lili/1.jpg',
      icon: '☀️'
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tight">Red de <span className="text-[#D32F2F]">Sedes</span></h2>
        <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Nodos del ecosistema Unilibre a nivel nacional</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sedes.map((sede, idx) => (
          <div 
            key={idx}
            className="group bg-slate-900/40 border border-white/5 rounded-[2.5rem] hover:border-[#D32F2F]/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col h-full shadow-xl"
          >
            {/* Imagen de Fondo de la Sede */}
            <div className="h-48 w-full relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10 opacity-60"></div>
               <img 
                 src={sede.img} 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800`;
                 }}
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 alt={sede.name} 
               />
               <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-[#D32F2F] rounded-lg flex items-center justify-center text-sm shadow-lg">
                 {sede.icon}
               </div>
            </div>

            <div className="p-8 relative z-10 flex-grow flex flex-col justify-between">
               <div className="space-y-3">
                  <h4 className="text-xl font-black text-white group-hover:text-[#D32F2F] transition-colors">{sede.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sede.location}</p>
                  <div className="h-px w-8 bg-red-600/40 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Especializada en: <br/><span className="text-slate-200">{sede.focus}</span>
                  </p>
               </div>
               <button className="mt-6 text-[9px] font-black uppercase tracking-tighter text-slate-500 group-hover:text-white transition-colors flex items-center gap-2">
                 Ver Facultad →
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#D32F2F]/10 to-slate-900/40 p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
        <div className="space-y-2">
           <h3 className="text-2xl font-black italic">¿Buscas una sede específica?</h3>
           <p className="text-sm text-slate-400 font-medium">Consulta el catálogo completo de 7 sedes y más de 50 programas en MongoDB Atlas.</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-all shadow-xl">
             Ver Mapa de Facultades
           </button>
        </div>
      </div>
    </div>
  );
};

export default Universidades;
