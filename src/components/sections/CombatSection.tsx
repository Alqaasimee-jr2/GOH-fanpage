import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { StatBar } from '../ui/StatBar';
import { MangaBadge } from '../ui/MangaBadge';
import { ModeToggle } from '../ui/ModeToggle';
import { COMBAT_STATS, MARTIAL_ARTS_MOVES, CHARYEOK_SYSTEM } from '../../data/combatData';
import { useCharacterMode } from '../../context/CharacterModeContext';
import { Swords, Zap, Wind, Flame, Activity, Footprints, ShieldAlert } from 'lucide-react';

export const CombatSection: React.FC = () => {
  const { isDivine } = useCharacterMode();
  const [activeTab, setActiveTab] = useState<'stats' | 'martial' | 'charyeok'>('stats');

  const getMoveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#ffe75e]" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-[#ffe75e]" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-[#ffe75e]" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#ffe75e]" />;
      case 'Footprints':
        return <Footprints className="w-4 h-4 text-[#ffe75e]" />;
      default:
        return <Swords className="w-4 h-4 text-[#ffe75e]" />;
    }
  };

  return (
    <section
      id="combat"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-[#ffe75e]/40 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-[#ffe75e]" />
              <MangaBadge variant="gold">BATTLE POWER & TECHNIQUES</MangaBadge>
            </div>
            <h2 className="font-manga text-3xl md:text-5xl text-[#ffe75e] text-shadow-manga tracking-wide mt-1">
              MARTIAL ARTS VS CHARYEOK
            </h2>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-[#f1f1f1]">
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-1 rounded-full font-manga text-xs md:text-sm transition-colors ${
                activeTab === 'stats' ? 'bg-[#ffe75e] text-black font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              COMBAT STATS
            </button>
            <button
              onClick={() => setActiveTab('martial')}
              className={`px-3 py-1 rounded-full font-manga text-xs md:text-sm transition-colors ${
                activeTab === 'martial' ? 'bg-[#ffe75e] text-black font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              SECRET ARTS
            </button>
            <button
              onClick={() => setActiveTab('charyeok')}
              className={`px-3 py-1 rounded-full font-manga text-xs md:text-sm transition-colors ${
                activeTab === 'charyeok' ? 'bg-[#ffe75e] text-black font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              CHARYEOK SYSTEM
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Stat Bars Left */}
            <div className="lg:col-span-8">
              <GlassCard variant="base">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-3 mb-4">
                  <div>
                    <h3 className="font-manga text-xl md:text-2xl text-[#ffe75e]">
                      {isDivine ? 'DIVINE SUN WUKONG ATTRIBUTES' : 'MORTAL JIN MORI ATTRIBUTES'}
                    </h3>
                    <p className="text-xs text-stone-200">
                      {isDivine
                        ? 'Unlimited cosmic scale power awakened through celestial godhood.'
                        : 'Earthly peak human stats forged through intense Renewal Taekwondo training.'}
                    </p>
                  </div>
                  <ModeToggle />
                </div>

                <div className="space-y-4">
                  {COMBAT_STATS.map((stat, idx) => (
                    <StatBar
                      key={idx}
                      name={stat.name}
                      value={isDivine ? stat.wukongValue : stat.moriValue}
                      display={isDivine ? stat.wukongDisplay : stat.moriDisplay}
                      description={stat.description}
                      isDivine={isDivine}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right Card: Original Stat Breakdown Comparison */}
            <div className="lg:col-span-4 space-y-4">
              <GlassCard variant="intense" className="text-black">
                <h4 className="font-manga text-lg text-black bg-[#ffe75e] px-2 py-0.5 rounded -skew-x-6 inline-block mb-3">
                  ORIGINAL REPO METRICS
                </h4>

                <div className="space-y-3 text-xs md:text-sm font-semibold">
                  <div className="p-2.5 rounded bg-white/50 border border-black/10">
                    <span className="text-[#e2620d] font-bold block mb-1">SUN WUKONG STATS:</span>
                    <p>Strength: ∞ ∞ ∞ (Infinite)</p>
                    <p>Speed: 999+</p>
                    <p>Intelligence: 600</p>
                    <p>Endurance: ∞</p>
                    <p>Luck: 500</p>
                  </div>

                  <div className="p-2.5 rounded bg-white/50 border border-black/10">
                    <span className="text-[#e2620d] font-bold block mb-1">JIN MORI STATS:</span>
                    <p>Strength: 8</p>
                    <p>Speed: 9</p>
                    <p>Intelligence: 7</p>
                    <p>Endurance: 8</p>
                    <p>Luck: 4</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        )}

        {activeTab === 'martial' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MARTIAL_ARTS_MOVES.map((move, idx) => (
              <GlassCard key={idx} variant="base" className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-black/60 border border-[#ffe75e]">
                      {getMoveIcon(move.iconName)}
                    </div>
                    <span className="font-manga text-base md:text-lg text-[#ffe75e]">{move.name}</span>
                  </div>
                  <MangaBadge variant="amber">{move.style}</MangaBadge>
                </div>

                <div className="text-xs text-stone-200 bg-black/40 p-2.5 rounded border border-white/10">
                  <p>
                    <strong className="text-[#ffe75e]">Execution:</strong> {move.execution}
                  </p>
                  <p className="mt-1">
                    <strong className="text-[#f8ecd5]">Effect:</strong> {move.effect}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {activeTab === 'charyeok' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHARYEOK_SYSTEM.map((ch, idx) => (
              <GlassCard key={idx} variant="base" className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <div>
                    <h4 className="font-manga text-xl text-[#ffe75e]">{ch.name}</h4>
                    <span className="text-xs text-[#f8ecd5]">Entity: {ch.godOrEntity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-300 bg-black/60 px-2 py-1 rounded border border-amber-400/40">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#ffe75e]" />
                    <span>{ch.tabooStatus}</span>
                  </div>
                </div>

                <div className="text-xs md:text-sm space-y-1 text-stone-100">
                  <p>
                    <strong className="text-[#ffe75e]">Contracted User:</strong> {ch.user}
                  </p>
                  <p className="bg-black/30 p-2 rounded border border-white/10 mt-1">
                    <strong className="text-stone-300">Divine Ability:</strong> {ch.ability}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
