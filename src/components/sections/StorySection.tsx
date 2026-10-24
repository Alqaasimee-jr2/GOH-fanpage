import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MangaBadge } from '../ui/MangaBadge';
import { STORY_ARCS } from '../../data/storyData';
import { BookOpen, Calendar, Swords, Quote, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [selectedArcIndex, setSelectedArcIndex] = useState<number>(0);

  const selectedArc = STORY_ARCS[selectedArcIndex];

  return (
    <section
      id="story"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-[#ffe75e]/40 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#ffe75e]" />
              <MangaBadge variant="gold">MANHWA CHRONICLES</MangaBadge>
            </div>
            <h2 className="font-manga text-3xl md:text-5xl text-[#ffe75e] text-shadow-manga tracking-wide mt-1">
              THE 5 SAGA MILESTONES
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <img src="/assets/GOH.png" alt="GOH" className="h-8 object-contain" />
            <p className="text-xs md:text-sm text-[#f8ecd5] max-w-xs italic">
              "570+ chapters spanning from Seoul tournament brawls to the ultimate cosmic Nirvana."
            </p>
          </div>
        </div>

        {/* Saga Arc Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {STORY_ARCS.map((arc, idx) => {
            const isActive = idx === selectedArcIndex;
            return (
              <button
                key={arc.id}
                onClick={() => setSelectedArcIndex(idx)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-[7px] border-2 font-manga text-xs md:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ffe75e] text-black border-[#ffe75e] font-extrabold shadow-[0_0_12px_#ffe75e]'
                    : 'bg-black/60 text-[#f1f1f1] border-[#f1f1f1]/40 hover:border-[#ffe75e] hover:text-[#ffe75e]'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/30 flex items-center justify-center text-[10px]">
                  {arc.number}
                </span>
                <span>{arc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Arc Narrative Stage */}
        <GlassCard variant="base" className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArc.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Left Column: Arc Overview & Summary */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#f8ecd5] font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ffe75e]" />
                    <span>{selectedArc.badge}</span>
                    <span>•</span>
                    <span className="text-[#ffe75e]">{selectedArc.period}</span>
                  </div>
                  <h3 className="font-manga text-2xl md:text-4xl text-[#ffe75e] text-shadow-manga">
                    {selectedArc.title}
                  </h3>
                  <p className="font-brush text-sm md:text-base text-[#f8ecd5] mt-0.5">
                    {selectedArc.subtitle}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-stone-100 leading-relaxed bg-black/40 p-3.5 rounded border border-white/10">
                  {selectedArc.summary}
                </p>

                {/* Climax Callout */}
                <div className="p-3 rounded bg-amber-500/20 border-l-4 border-[#ffe75e] text-xs md:text-sm">
                  <div className="flex items-center gap-1.5 font-manga text-[#ffe75e] uppercase">
                    <Swords className="w-4 h-4" />
                    <span>Saga Climax:</span>
                  </div>
                  <p className="text-[#f1f1f1] mt-1 font-medium">{selectedArc.climax}</p>
                </div>

                {/* Quote */}
                <div className="p-2.5 rounded bg-black/60 border border-[#ffe75e]/40 text-[#ffe75e] text-xs md:text-sm italic flex items-start gap-2">
                  <Quote className="w-4 h-4 shrink-0 mt-0.5 text-[#ffe75e]" />
                  <span>"{selectedArc.quote}"</span>
                </div>
              </div>

              {/* Right Column: Key Events Checklist & Visuals */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-3.5 rounded bg-black/60 border border-[#f1f1f1]/30">
                  <div className="flex items-center gap-1.5 font-manga text-xs md:text-sm text-[#ffe75e] mb-2 uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>Pivotal Arc Moments:</span>
                  </div>

                  <ul className="space-y-2">
                    {selectedArc.keyEvents.map((event: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-stone-200 bg-white/5 p-2 rounded hover:bg-white/10 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffe75e] mt-1 shrink-0" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>

      </div>
    </section>
  );
};
