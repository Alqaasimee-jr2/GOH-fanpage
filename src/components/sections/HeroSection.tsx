import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ModeToggle } from '../ui/ModeToggle';
import { MangaBadge } from '../ui/MangaBadge';
import { useCharacterMode } from '../../context/CharacterModeContext';
import { Shield, ChevronDown, Swords, ScrollText } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { isDivine, theme } = useCharacterMode();

  const originalStats = [
    'Highest ranking revolutionary figure',
    'Dragon slayer',
    'Child of Gaia',
    'The most powerful being in the universe',
    'Jecheondaeseong (The Great Sage)',
  ];

  return (
    <section
      id="overview"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Card: Titles, Toggle & Original Fact Bullet Points */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="relative overflow-hidden" variant="base">
            {/* Top mode switch */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <MangaBadge variant={isDivine ? 'gold' : 'amber'}>
                {isDivine ? 'DIVINE FORM' : 'HUMAN FORM'}
              </MangaBadge>
              <ModeToggle />
            </div>

            {/* Main Manga Title */}
            <div className="space-y-1">
              <motion.h1
                key={theme.heroTitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="font-manga text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#ffe75e] text-shadow-manga"
              >
                {theme.heroTitle}
              </motion.h1>
              <motion.p
                key={theme.heroSubtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-brush text-xl md:text-2xl text-[#f8ecd5] tracking-wider"
              >
                {theme.heroSubtitle}
              </motion.p>
            </div>

            {/* Subtitle / Epithet */}
            <div className="mt-4 p-3 rounded bg-black/40 border border-white/20">
              <p className="text-sm md:text-base font-semibold text-[#f1f1f1] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#ffe75e]" />
                {theme.epithet}
              </p>
            </div>

            {/* Original Lore Bullet Points */}
            <div className="mt-6 space-y-2.5">
              <h4 className="font-manga text-sm md:text-base text-[#ffe75e] tracking-wider uppercase">
                Combat Accolades & Lineage:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#f1f1f1]">
                {originalStats.map((stat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-black/30 border border-[#f1f1f1]/30 hover:border-[#ffe75e] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffe75e] shrink-0" />
                    <span className="font-medium">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('combat')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#ffe75e] text-black font-manga text-sm md:text-base font-extrabold hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_15px_#ffe75e]"
              >
                <Swords className="w-4 h-4" />
                COMBAT STATS
              </button>

              <button
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-black/60 border-2 border-[#f1f1f1] text-[#f1f1f1] font-manga text-sm md:text-base hover:border-[#ffe75e] hover:text-[#ffe75e] transition-all duration-300"
              >
                <ScrollText className="w-4 h-4" />
                EXPLORE STORY
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Right Card: Dynamic Character Artwork */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
            {/* Background Aura Orb */}
            <div
              className={`absolute inset-0 rounded-full blur-3xl opacity-60 transition-all duration-700 bg-gradient-to-tr ${
                isDivine ? 'from-amber-500 via-yellow-400 to-amber-600' : 'from-orange-600 via-amber-500 to-yellow-500'
              }`}
            />

            {/* Character Image Switch with Floating Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isDivine ? 'wukong-img' : 'mori-img'}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <motion.img
                  src={isDivine ? '/assets/sun.png' : '/assets/morr.png'}
                  alt={isDivine ? 'Sun Wukong' : 'Jin Mori'}
                  className="max-h-[85vh] w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Down Arrow Indicator */}
      <button
        onClick={() => document.getElementById('trio')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 hover:text-[#ffe75e] transition-colors p-2 z-20 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
