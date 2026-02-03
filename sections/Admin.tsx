
import React from 'react';

const Admin: React.FC = () => {
  const metrics = [
    { label: 'Consultas AI', value: '1,250', delta: '+12%', icon: '📊' },
    { label: 'Match Rate', value: '94.5%', delta: 'Estable', icon: '🎯' },
    { label: 'Nuevos Perfiles', value: '450', delta: '+25%', icon: '👤' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Admin <span className="text-[#D32F2F]">Panel</span></h2>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Gestión de Arquitectura Orion</p>
        </div>
        <button className="bg-red-500/10 text-red-500 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-red-500/20">
          Cerrar Sesión
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map(m => (
          <div key={m.label} className="bg-slate-900/60 p-8 rounded-[2rem] border border-white/5 space-y-4">
            <div className="flex justify-between items-center">
               <span className="text-2xl">{m.icon}</span>
               <span className="text-[10px] font-black text-green-500">{m.delta}</span>
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
               <p className="text-3xl font-black">{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/40 rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h3 className="font-black text-sm uppercase tracking-widest">Catálogo de Programas MongoDB</h3>
          <button className="bg-[#D32F2F] px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest">Agregar Carrera</button>
        </div>
        <div className="p-8 overflow-x-auto">
          <table className="w-full text-left text-sm font-medium">
            <thead className="text-slate-500 uppercase text-[10px] tracking-widest">
              <tr>
                <th className="pb-4">Carrera</th>
                <th className="pb-4">Facultad</th>
                <th className="pb-4">Estado</th>
                <th className="pb-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {['Ingeniería de Sistemas', 'Derecho', 'Medicina (Restringida)'].map(c => (
                <tr key={c} className="border-t border-white/5">
                  <td className="py-4 font-black">{c}</td>
                  <td className="py-4 text-xs">Ingeniería / Jurídicas</td>
                  <td className="py-4 text-xs"><span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-500/20 font-black">Activo</span></td>
                  <td className="py-4 text-xs font-black text-red-500 cursor-pointer">Editar / Eliminar</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
