import React from 'react';

interface MangaBadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'amber' | 'white' | 'dark';
  className?: string;
}

export const MangaBadge: React.FC<MangaBadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const styles = {
    gold: 'bg-gradient-to-r from-amber-400 to-[#ffe75e] text-black font-extrabold shadow-[0_0_10px_#ffe75e]',
    amber: 'bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold shadow-md',
    white: 'bg-white/90 text-black font-bold border border-black/20',
    dark: 'bg-black/70 text-[#f8ecd5] border border-[#ffe75e]/50',
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs md:text-sm font-manga tracking-wide uppercase -skew-x-6 rounded-[3px] ${styles[variant]} ${className}`}
    >
      <span className="inline-block skew-x-6">{children}</span>
    </span>
  );
};
