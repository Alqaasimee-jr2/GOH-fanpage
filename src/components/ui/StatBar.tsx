import React from 'react';
import { motion } from 'framer-motion';

interface StatBarProps {
  name: string;
  value: number; // 0 to 100
  display: string;
  description: string;
  isDivine?: boolean;
}

export const StatBar: React.FC<StatBarProps> = ({
  name,
  value,
  display,
  description,
  isDivine = false,
}) => {
  return (
    <div className="space-y-1.5 my-3">
      <div className="flex justify-between items-center text-sm md:text-base font-semibold">
        <span className="text-[#f1f1f1] uppercase tracking-wider">{name}</span>
        <motion.span
          key={display}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`font-manga text-base md:text-lg ${
            isDivine ? 'text-[#ffe75e] text-shadow-gold' : 'text-[#f8ecd5]'
          }`}
        >
          {display}
        </motion.span>
      </div>

      <div className="h-3 w-full bg-black/60 rounded-full border border-white/20 overflow-hidden p-0.5">
        <motion.div
          className={`h-full rounded-full ${
            isDivine
              ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-[#ffe75e] shadow-[0_0_12px_#ffe75e]'
              : 'bg-gradient-to-r from-orange-600 to-amber-500 shadow-[0_0_8px_rgba(230,160,10,0.6)]'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(5, value))}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <p className="text-xs text-stone-300 italic">{description}</p>
    </div>
  );
};
