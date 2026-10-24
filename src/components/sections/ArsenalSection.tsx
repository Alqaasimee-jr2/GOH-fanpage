import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MangaBadge } from '../ui/MangaBadge';
import { DIVINE_RELICS } from '../../data/arsenalData';
import { Sparkles, Weight, Shield, Zap } from 'lucide-react';

export const ArsenalSection: React.FC = () => {
  const [selectedRelicId, setSelectedRelicId] = useState<string>('yeoui');

  const selectedRelic = DIVINE_RELICS.find((r) => r.id === selectedRelicId) || DIVINE_RELICS[0];

  return (
    <section
      id="arsenal"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-[#ffe75e]/40 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ffe75e]" />
              <MangaBadge variant="gold">MYTHICAL TREASURY</MangaBadge>
            </div>
            <h2 className="font-manga text-3xl md:text-5xl text-[#ffe75e] text-shadow-manga tracking-wide mt-1">
              DIVINE ARSENAL & RELICS
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#f8ecd5] max-w-md italic">
            "Mythological relics forged in celestial fires, capable of altering planetary gravity and tearing space."
          </p>
        </div>

        {/* Relic Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DIVINE_RELICS.map((relic) => {
            const isActive = relic.id === selectedRelicId;
            return (
              <button
                key={relic.id}
                onClick={() => setSelectedRelicId(relic.id)}
                className={`p-3 rounded-[7px] border-2 text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ffe75e] text-black border-[#ffe75e] shadow-[0_0_15px_#ffe75e]'
                    : 'bg-black/50 text-white border-[#f1f1f1]/40 hover:border-[#ffe75e] hover:bg-black/70'
                }`}
              >
                <div className="font-manga text-base md:text-lg truncate">{relic.name.split('(')[0]}</div>
                <div className={`text-xs truncate ${isActive ? 'text-stone-800' : 'text-stone-300'}`}>
                  {relic.alias.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Relic Showcase Card */}
        <GlassCard variant="intense" className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRelic.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Relic Artwork */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-xs aspect-square rounded-[7px] overflow-hidden border-[3px] border-[#ffe75e] bg-black/80 flex items-center justify-center p-4 shadow-2xl">
                  {selectedRelic.image && (
                    <img
                      src={selectedRelic.image}
                      alt={selectedRelic.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,231,94,0.7)] hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded bg-black/90 border border-[#ffe75e] text-[10px] font-manga text-[#ffe75e]">
                    <Weight className="w-3 h-3 text-[#ffe75e]" />
                    <span>{selectedRelic.weight}</span>
                  </div>
                </div>
              </div>

              {/* Relic Specs & Powers */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h3 className="font-manga text-3xl md:text-4xl text-black bg-[#ffe75e] inline-block px-3 py-1 rounded -skew-x-6">
                    {selectedRelic.name}
                  </h3>
                  <p className="font-brush text-base md:text-lg text-[#e2620d] font-bold mt-1">
                    {selectedRelic.alias}
                  </p>
                  <p className="text-xs font-semibold text-stone-800">
                    Origin: {selectedRelic.origin}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-stone-950 font-medium leading-relaxed bg-white/50 p-3 rounded border border-black/10">
                  {selectedRelic.description}
                </p>

                {/* Abilities List */}
                <div className="space-y-2">
                  <span className="font-manga text-xs md:text-sm text-black tracking-wider uppercase flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#e2620d]" />
                    Divine Capabilities:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedRelic.powers.map((power, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded bg-black/85 border border-[#ffe75e]/60 text-xs text-[#f1f1f1]"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#ffe75e] shrink-0 mt-0.5" />
                        <span>{power}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>

      </div>
    </section>
  );
};
