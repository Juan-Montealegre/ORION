
import React from 'react';
import { ORION_MASCOT_EMOTIONS } from '../constants';

type OrionEmotion = 'idle' | 'thinking' | 'happy' | 'confused';

interface OrionMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isTalking?: boolean;
  emotion?: OrionEmotion;
}

const OrionMascot: React.FC<OrionMascotProps> = ({ 
  size = 'md', 
  className = '', 
  isTalking = false,
  emotion = 'idle'
}) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-72 h-72'
  };

  const sparkles = Array.from({ length: 8 });

  // Seleccionar imagen basada en la emoción
  const currentImage = ORION_MASCOT_EMOTIONS[emotion] || ORION_MASCOT_EMOTIONS.idle;

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Container Esférico (Round Shape) */}
      <div className={`relative rounded-full p-2 border-2 transition-all duration-700 ${isTalking ? 'border-[#D32F2F] shadow-[0_0_50px_rgba(211,47,47,0.4)]' : 'border-white/10 shadow-none'}`}>
        
        {/* Glow effect background */}
        <div className={`absolute inset-0 bg-red-600/20 rounded-full blur-3xl transition-opacity duration-1000 ${isTalking ? 'opacity-100 scale-125' : 'opacity-20'}`}></div>
        
        {/* Sparkles Container */}
        <div className={`absolute inset-0 z-0 pointer-events-none ${isTalking || emotion === 'happy' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {sparkles.map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                color: i % 2 === 0 ? '#D32F2F' : '#FFD700'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Circular Frame for the Avatar */}
        <div className={`${sizes[size]} relative z-10 rounded-full overflow-hidden bg-slate-900 border-4 border-white/5 transition-all duration-500 transform ${isTalking ? 'scale-105' : 'scale-100'}`}>
          <img 
            src={currentImage} 
            alt={`Orión - Estado: ${emotion}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${isTalking ? 'animate-talk' : 'animate-float'}`}
          />
        </div>
      </div>
      
      {/* Dynamic Shadow */}
      <div className={`w-1/2 h-3 bg-black/40 rounded-[100%] blur-md mt-6 transition-transform duration-500 ${isTalking ? 'scale-125 opacity-30' : 'animate-shadow'}`}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes talk {
          0%, 100% { transform: scale(1, 1) translateY(-10px); }
          25% { transform: scale(1.1, 0.9) translateY(-5px); }
          75% { transform: scale(0.9, 1.1) translateY(-15px); }
        }
        @keyframes shadow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(0.7); opacity: 0.1; }
        }
        @keyframes sparkle {
          0% { transform: scale(0) rotate(0deg) translate(0, 0); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg) translate(25px, -25px); opacity: 1; }
          100% { transform: scale(0) rotate(360deg) translate(50px, -50px); opacity: 0; }
        }
        .animate-talk {
          animation: talk 0.3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shadow {
          animation: shadow 5s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2.5s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OrionMascot;
