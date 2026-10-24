import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MangaBadge } from '../ui/MangaBadge';
import { TRIO_MEMBERS, UNIVERSE_LEGENDS } from '../../data/universeData';
import { Users, Award, HeartHandshake, Quote } from 'lucide-react';

export const TrioSection: React.FC = () => {
  const [selectedTrioId, setSelectedTrioId] = useState<string>('mori');

  const selectedMember = TRIO_MEMBERS.find((m) => m.id === selectedTrioId) || TRIO_MEMBERS[0];

  const originalRelationships = [
    {
      name: 'Jin Taejin',
      relation: 'Adoptive Grandfather',
      desc: 'Both created and taught Mori the Renewal Taekwondo style. Defeated the gods using pure human martial arts.',
    },
    {
      name: 'Dan Ahan',
      relation: 'Adoptive Sister',
      desc: 'Student at Apricot Flower High School, one of the schools stratifying Charyeok 17 years after Ragnarök.',
    },
    {
      name: 'Park Taejin',
      relation: 'Adopted Daughter',
      desc: 'Biological daughter of Park Mubong and Judge P, adopted and protected by Dan Ahan and Jin Mori.',
    },
    {
      name: 'Uma (The Ox King)',
      relation: 'Sworn Brother',
      desc: 'Sworn brother from previous life as Monkey King. Fought side-by-side for centuries.',
    },
  ];

  return (
    <section
      id="trio"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-[#ffe75e]/40 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#ffe75e]" />
              <MangaBadge variant="gold">LEGENDS OF GOH</MangaBadge>
            </div>
            <h2 className="font-manga text-3xl md:text-5xl text-[#ffe75e] text-shadow-manga tracking-wide mt-1">
              THE LEGENDARY TRIO & ALLIES
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#f8ecd5] max-w-md italic">
            "Three high school students bound by promise, who shook the heavens and rewrote the laws of gods and men."
          </p>
        </div>

        {/* Main Grid: Trio Spotlight + Relationships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Trio Member Selector & Detailed View */}
          <div className="lg:col-span-8 space-y-4">
            {/* Trio Tabs */}
            <div className="flex flex-wrap gap-2">
              {TRIO_MEMBERS.map((member) => {
                const isActive = member.id === selectedTrioId;
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedTrioId(member.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[7px] font-manga text-sm md:text-base transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-[#ffe75e] text-black border-[#ffe75e] font-extrabold shadow-[0_0_15px_#ffe75e]'
                        : 'bg-black/50 text-[#f1f1f1] border-[#f1f1f1]/40 hover:border-[#ffe75e] hover:text-[#ffe75e]'
                    }`}
                  >
                    <span>{member.name}</span>
                    <span className="text-xs opacity-75 hidden sm:inline">({member.epithet.split('&')[0]})</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Trio Card */}
            <GlassCard variant="intense" className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  {/* Member Artwork */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-48 md:w-56 aspect-[3/4] rounded-[7px] overflow-hidden border-2 border-[#ffe75e] bg-black/60 shadow-xl">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Member Lore & Stats */}
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <h3 className="font-manga text-2xl md:text-3xl text-black bg-[#ffe75e] inline-block px-2 py-0.5 rounded -skew-x-6">
                        {selectedMember.name}
                      </h3>
                      <p className="font-brush text-sm md:text-base text-[#e2620d] font-bold mt-1">
                        {selectedMember.epithet}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs md:text-sm text-black font-semibold">
                      <p>
                        <strong className="text-black">Martial Art:</strong> {selectedMember.martialArt}
                      </p>
                      <p>
                        <strong className="text-black">Borrowed Power:</strong> {selectedMember.borrowedPower}
                      </p>
                      <p>
                        <strong className="text-black">Signature Move:</strong> {selectedMember.signatureTechnique}
                      </p>
                    </div>

                    <p className="text-xs md:text-sm text-stone-900 leading-relaxed font-medium bg-white/40 p-2.5 rounded">
                      {selectedMember.description}
                    </p>

                    <div className="p-2.5 rounded bg-black/80 border border-[#ffe75e] text-[#ffe75e] text-xs md:text-sm italic flex items-start gap-2">
                      <Quote className="w-4 h-4 shrink-0 text-[#ffe75e] mt-0.5" />
                      <span>"{selectedMember.quote}"</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* Right Column: Original Character Relationships from about.html */}
          <div className="lg:col-span-4 space-y-4">
            <GlassCard variant="base">
              <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                <div className="flex items-center gap-1.5 text-sm font-manga text-[#ffe75e]">
                  <HeartHandshake className="w-4 h-4" />
                  <span>ORIGINAL BONDS & RELATIONSHIPS</span>
                </div>
                <img src="/assets/chibi.png" alt="Chibi Mori" className="h-8 object-contain" />
              </div>

              <div className="space-y-3">
                {originalRelationships.map((rel, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-black/40 border border-[#f1f1f1]/30 hover:border-[#ffe75e] transition-colors"
                  >
                    <div className="flex justify-between items-center text-xs font-bold text-[#ffe75e]">
                      <span>{rel.name}</span>
                      <span className="text-[10px] text-[#f8ecd5] bg-black/50 px-1.5 py-0.5 rounded">
                        {rel.relation}
                      </span>
                    </div>
                    <p className="text-xs text-stone-200 mt-1 leading-snug">{rel.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

        {/* Bottom Banner: The Six & Universe Figures */}
        <GlassCard variant="subtle" className="py-3 px-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#ffe75e]" />
            <span className="font-manga text-xs md:text-sm text-[#ffe75e] tracking-wider uppercase">
              The Six & Cosmic Pantheon
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {UNIVERSE_LEGENDS.map((leg, idx) => (
              <div
                key={idx}
                className="p-2 rounded bg-black/50 border border-white/10 hover:border-[#ffe75e] transition-all text-center"
              >
                <div className="text-xs font-manga text-[#ffe75e] truncate">{leg.name}</div>
                <div className="text-[10px] text-stone-300 truncate">{leg.title}</div>
                <span className="inline-block mt-1 text-[9px] px-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {leg.badge}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
