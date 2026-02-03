
import React, { useState } from 'react';
import OrionMascot from '../components/OrionMascot';

interface AuthProps {
  onLogin: (isAdmin: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de delay de red para realismo técnico
    setTimeout(() => {
      const isAdmin = email.includes('admin');
      onLogin(isAdmin);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Constellations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
         <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-700 shadow-[0_0_15px_red]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-xl w-full px-6 relative z-10 animate-in fade-in zoom-in duration-1000">
        <div className="flex flex-col items-center mb-12 space-y-6">
           <OrionMascot size="lg" emotion="idle" isTalking={isSubmitting} />
           <div className="text-center">
             <h1 className="text-5xl font-black tracking-tighter text-white">ORION <span className="text-[#D32F2F]">AI</span></h1>
             <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] mt-2 italic">Portal de Lanzamiento Estelar</p>
           </div>
        </div>

        <div className="bg-slate-900/60 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-black">Inicia tu Trayectoria</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Accede al Ecosistema Unilibre</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-6">Identificador Estelar (Email)</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aspirante@unilibre.edu.co"
                className="w-full bg-black/40 border border-white/10 rounded-[2rem] px-8 py-5 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]/30 transition-all outline-none font-medium text-white placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-6">Código de Acceso</label>
              <input 
                required
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/10 rounded-[2rem] px-8 py-5 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]/30 transition-all outline-none text-white"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D32F2F] hover:bg-red-700 py-6 rounded-[2rem] text-white font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl shadow-red-900/40 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Sincronizando...
                </>
              ) : "Entrar al Ecosistema"}
            </button>
          </form>

          <div className="text-center pt-4">
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">
              ¿Eres nuevo aspirante? <span className="text-red-500 cursor-pointer font-black hover:underline transition-all">Crea tu Constelación</span>
            </p>
          </div>
        </div>
        
        <p className="text-center mt-12 text-[8px] font-bold text-slate-700 uppercase tracking-[0.5em]">
          Universidad Libre de Colombia • Laboratorio de Futuro • 2026
        </p>
      </div>
    </div>
  );
};

export default Auth;
