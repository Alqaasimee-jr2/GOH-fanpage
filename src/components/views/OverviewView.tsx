import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';

export const OverviewView: React.FC = () => {
  const [isWukong, setIsWukong] = useState<boolean>(true);

  const accolades = [
    'highest ranking revolutionary figure',
    'Dragon slayer',
    'Child of gaia',
    'The most powerful being in the world',
    'Jecheondaeseong',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-8 pr-12 md:pr-32 overflow-hidden select-none">
      
      {/* Top Header: Title & Form Toggle */}
      <div className="flex items-start justify-between z-20">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={isWukong ? 'wukong-title' : 'mori-title'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-manga text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white drop-shadow-[2px_3px_5px_rgba(0,0,0,0.9)]">
                {isWukong ? 'SUN WUKONG' : 'JIN MORI'}
              </h1>
              <h5 className="font-brush text-sm sm:text-base md:text-lg text-[#f8ecd5] tracking-widest pl-1 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.9)]">
                {isWukong ? 'mori jin' : 'jecheondaeseong'}
              </h5>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Form Switcher with Text Shadow */}
        <button
          onClick={() => setIsWukong(!isWukong)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-[#f1f1f1] hover:border-[#ffe75e] text-xs font-manga text-[#f8ecd5] hover:text-white transition-all drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] cursor-pointer"
          title="Toggle Form"
        >
          {isWukong ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#ffe75e] drop-shadow-[0_0_6px_#ffe75e]" />
              <span className="hidden sm:inline drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">FORM:</span>
              <span className="text-[#ffe75e] font-bold drop-shadow-[0_0_6px_rgba(255,231,94,0.8)]">SUN WUKONG</span>
            </>
          ) : (
            <>
              <Flame className="w-3.5 h-3.5 text-orange-400 drop-shadow-[0_0_6px_#ea580c]" />
              <span className="hidden sm:inline drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">FORM:</span>
              <span className="text-orange-300 font-bold drop-shadow-[0_0_6px_rgba(253,186,116,0.8)]">JIN MORI</span>
            </>
          )}
        </button>
      </div>

      {/* Center Character Cutout */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={isWukong ? 'wukong-img' : 'mori-img'}
            src={isWukong ? '/assets/sun.png' : '/assets/morr.png'}
            alt={isWukong ? 'Sun Wukong' : 'Mori Jin'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="max-h-[75%] md:max-h-[84%] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          />
        </AnimatePresence>
      </div>

      {/* Bottom-Left Accolades List (Original stats — No background, pure depth via shadows) */}
      <div className="z-20 max-w-sm sm:max-w-md pb-2">
        <ul className="space-y-2 text-sm sm:text-base text-white font-semibold leading-relaxed">
          {accolades.map((stat, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-2.5 drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)] hover:text-[#f8ecd5] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#ffe75e] shadow-[0_0_6px_#ffe75e] shrink-0" />
              <span className="capitalize">{stat}</span>
            </motion.li>
          ))}
        </ul>
      </div>

    </div>
  );
};
