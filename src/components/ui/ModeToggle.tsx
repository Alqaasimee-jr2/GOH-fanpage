import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';
import { useCharacterMode } from '../../context/CharacterModeContext';

export const ModeToggle: React.FC = () => {
  const { mode, toggleMode, isDivine } = useCharacterMode();

  return (
    <div className="inline-flex items-center p-1.5 rounded-full bg-black/70 border-2 border-[#f1f1f1] shadow-goh-glow">
      <button
        onClick={() => mode !== 'mori' && toggleMode()}
        className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-manga transition-colors duration-300 ${
          !isDivine ? 'text-black font-bold' : 'text-stone-300 hover:text-white'
        }`}
      >
        {!isDivine && (
          <motion.div
            layoutId="mode-pill"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-md"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <Flame className="w-4 h-4 text-white" />
          MORTAL MORI
        </span>
      </button>

      <button
        onClick={() => mode !== 'wukong' && toggleMode()}
        className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-manga transition-colors duration-300 ${
          isDivine ? 'text-black font-bold' : 'text-stone-300 hover:text-white'
        }`}
      >
        {isDivine && (
          <motion.div
            layoutId="mode-pill"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-[#ffe75e] shadow-[0_0_15px_#ffe75e]"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-black" />
          DIVINE WUKONG
        </span>
      </button>
    </div>
  );
};
