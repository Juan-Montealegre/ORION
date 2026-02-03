
import React, { useState, useCallback, useEffect } from 'react';
import { OrientationResponse, RequestStatus } from '../types';
import { getOrientation } from '../services/geminiService';
import CareerCard from '../components/CareerCard';
import OrionMascot from '../components/OrionMascot';

interface DashboardProps {
  onStatusChange: (status: RequestStatus) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStatusChange }) => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE);
  const [results, setResults] = useState<OrientationResponse | null>(null);
  const [placeholderText, setPlaceholderText] = useState('');

  const fullPlaceholder = "Quiero estudiar algo creativo que pague bien...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPlaceholderText(fullPlaceholder.slice(0, i));
      i++;
      if (i > fullPlaceholder.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(RequestStatus.LOADING);
    onStatusChange(RequestStatus.LOADING);

    try {
      const response = await getOrientation(prompt);
      setResults(response);
      setStatus(RequestStatus.SUCCESS);
      onStatusChange(RequestStatus.SUCCESS);
    } catch (err) {
      setStatus(RequestStatus.ERROR);
      onStatusChange(RequestStatus.ERROR);
    }
  }, [prompt, onStatusChange]);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/40 transition-all"></div>
          <OrionMascot 
            size="xl" 
            isTalking={status === RequestStatus.LOADING} 
            emotion={status === RequestStatus.LOADING ? 'thinking' : status === RequestStatus.SUCCESS ? 'happy' : 'idle'}
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Encuentra tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-400 italic">Estrella.</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto italic">
          Orión te guía a través de las constelaciones del conocimiento para descubrir tu verdadera vocación.
        </p>
      </div>

      {/* Search Console */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-slate-900/40 border border-white/5 p-2 rounded-[2.5rem] shadow-2xl backdrop-blur-sm group hover:border-red-500/30 transition-all duration-500">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={placeholderText}
              className="w-full h-40 p-10 text-2xl font-medium text-white bg-transparent focus:outline-none placeholder:text-slate-700 resize-none"
              disabled={status === RequestStatus.LOADING}
            />
            <button
              type="submit"
              disabled={status === RequestStatus.LOADING || !prompt.trim()}
              className="w-full bg-[#D32F2F] hover:bg-red-700 py-6 rounded-3xl text-white font-black text-xl transition-all disabled:opacity-30 shadow-xl shadow-red-900/30"
            >
              {status === RequestStatus.LOADING ? "Trazando rutas estelares..." : "Navegar las Constelaciones"}
            </button>
          </form>
        </div>
      </section>

      {/* Bento Grid Results */}
      {status === RequestStatus.SUCCESS && results && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="md:col-span-2 bg-slate-900/60 p-12 rounded-[3rem] border border-white/5">
                <h3 className="text-red-500 font-black uppercase text-[10px] tracking-widest mb-6">Mapa Astral Orion AI</h3>
                <p className="text-3xl font-bold leading-tight italic">"{results.analisis_perfil}"</p>
             </div>
             <div className="bg-[#D32F2F] p-12 rounded-[3rem] shadow-2xl flex flex-col justify-center text-white">
                <span className="text-4xl mb-4">🌟</span>
                <h4 className="text-2xl font-black">Destinos Brillantes</h4>
                <p className="text-xs font-medium opacity-80 mt-2">Las constelaciones académicas más afines a tu brillo personal.</p>
             </div>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {results.top_options.map((option, index) => (
              <CareerCard key={option.carrera} option={option} rank={index + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
