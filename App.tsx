import React, { useState } from 'react';
import '../style.css';
import { RequestStatus } from './types';
import Dashboard from './sections/Dashboard';
import Comparador from './sections/Comparador';
import Universidades from './sections/Universidades';
import MiCamino from './sections/MiCamino';
import Auth from './sections/Auth';
import Admin from './sections/Admin';
import TabsNavigation from './components/TabsNavigation';

export type AppTab = 'ia' | 'comparador' | 'universidades' | 'camino';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('ia');
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (admin: boolean = false) => {
    setIsLoggedIn(true);
    setIsAdmin(admin);
    setActiveTab('ia');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  if (!isLoggedIn) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-red-500/30 animate-in fade-in duration-1000">
      {/* Header Global */}
      <header className="sticky top-0 z-50 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('ia')}>
            <div className="w-10 h-10 bg-[#D32F2F] rounded-xl flex items-center justify-center shadow-lg shadow-red-900/40 rotate-3 transition-transform hover:rotate-0">
              <img src="https://www.unilibre.edu.co/la-universidad/images/escudo-unilibre.png" className="w-6 h-6 invert brightness-0" alt="UL" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black tracking-tight leading-none">ORION <span className="text-[#D32F2F]">AI</span></h1>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1 italic">Tu guía entre las constelaciones del saber</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             {isAdmin && (
               <span className="text-[9px] font-black text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 uppercase tracking-widest">
                 Modo Admin
               </span>
             )}
             <button 
                onClick={handleLogout}
                className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
              >
                Cerrar Sesión
              </button>
          </div>
        </div>
      </header>

      {/* Tabs Navigation Bar */}
      {!isAdmin && (
        <div className="sticky top-20 z-40 py-6 bg-gradient-to-b from-[#020617] to-transparent">
            <TabsNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-6 py-8 max-w-7xl relative">
        {isAdmin ? (
          <Admin />
        ) : (
          <div className="transition-all duration-500 transform">
            {activeTab === 'ia' && <Dashboard onStatusChange={setStatus} />}
            {activeTab === 'comparador' && <Comparador />}
            {activeTab === 'universidades' && <Universidades />}
            {activeTab === 'camino' && <MiCamino />}
          </div>
        )}
      </main>

      <footer className="bg-black/80 py-12 border-t border-white/5 text-center">
         <div className="container mx-auto px-6 space-y-3">
           <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Navegando las constelaciones de tu propósito</p>
           <div className="flex justify-center items-center gap-4 py-2 opacity-30 grayscale hover:grayscale-0 transition-all">
              <img src="https://www.unilibre.edu.co/la-universidad/images/escudo-unilibre.png" className="h-6" alt="Unilibre" />
           </div>
           <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.4em]">
              Ecosistema Orión • Universidad Libre de Colombia • 2026
           </p>
         </div>
      </footer>
    </div>
  );
};

export default App;
