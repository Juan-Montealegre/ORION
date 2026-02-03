
import React from 'react';
import { AppTab } from '../App';

interface TabsNavigationProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: AppTab; label: string; icon: string }[] = [
    { id: 'ia', label: 'Orion IA', icon: '✨' },
    { id: 'comparador', label: 'Comparador', icon: '⚖️' },
    { id: 'universidades', label: 'Universidades', icon: '🏛️' },
    { id: 'camino', label: 'Mi Camino', icon: '🌌' },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-slate-900/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 flex gap-1 shadow-2xl relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 group ${
                isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {/* Glow background for active tab */}
              {isActive && (
                <div className="absolute inset-0 bg-[#D32F2F] rounded-xl shadow-[0_0_20px_rgba(211,47,47,0.4)] animate-in fade-in zoom-in duration-300"></div>
              )}
              
              <span className={`relative z-10 text-sm transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <span className="relative z-10 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabsNavigation;
