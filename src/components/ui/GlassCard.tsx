import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  variant?: 'base' | 'intense' | 'subtle';
  bordered?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'base',
  bordered = true,
  ...props
}) => {
  const bgStyles = {
    base: 'bg-[rgba(230,160,10,0.40)] backdrop-blur-md',
    intense: 'bg-[rgba(255,174,0,0.70)] backdrop-blur-lg',
    subtle: 'bg-[rgba(255,241,42,0.30)] backdrop-blur-sm',
  };

  const borderStyle = bordered
    ? 'border-[3px] border-[#f1f1f1] hover:border-[#ffe75e] transition-colors duration-300'
    : '';

  return (
    <motion.div
      className={`rounded-[7px] text-white p-4 md:p-6 shadow-goh-glow transition-all duration-300 ${bgStyles[variant]} ${borderStyle} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
