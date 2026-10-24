import React from 'react';
import { motion } from 'framer-motion';

export const AboutView: React.FC = () => {
  const basics = [
    { label: 'Age:', value: 'Unknown 999+' },
    { label: 'Nationality:', value: 'North Korea' },
    { label: 'Occupation:', value: "Formally Gaia's Guardian" },
    { label: 'Hobbies:', value: 'Martial Arts & Eating' },
  ];

  const wukongStats = [
    { label: 'Strength:', val: '∞ ∞ ∞' },
    { label: 'Speed:', val: '999+' },
    { label: 'Intelligence:', val: '600' },
    { label: 'Endurance:', val: '∞' },
    { label: 'Luck:', val: '500' },
  ];

  const moriStats = [
    { label: 'Strength:', val: '8' },
    { label: 'Speed:', val: '9' },
    { label: 'Intelligence:', val: '7' },
    { label: 'Endurance:', val: '8' },
    { label: 'Luck:', val: '4' },
  ];

  const relationships = [
    {
      name: 'Jin TaeJin',
      desc: "Mo-Ri's adoptive Grandfather. He both created and taught Mo-Ri the Renewal Taekwondo style.",
    },
    {
      name: 'Dan Ah-An',
      desc: "Dan Ahan is the adoptive sister of Dan Mori and a student at Apricot Flower High School, one of the many schools that began stratifying Charyeok's talents 17 years after Ragnarök.",
    },
    {
      name: 'Park TaeJin',
      desc: 'Park Taejin is the biological daughter of Park Mubong and Judge P and the adopted daughter of Dan Ahan and Jin Mori.',
    },
    {
      name: 'Uma',
      desc: "Mo-Ri's \"brother\" from his previous life as the Monkey King. They were sworn brothers and fought together for possibly as long as centuries.",
    },
  ];

  return (
    <div className="relative w-full h-full p-4 md:p-8 pr-12 md:pr-32 overflow-y-auto scrollbar-thin">
      
      {/* 2-Column Responsive Grid without background cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Basics & Stats */}
        <div className="md:col-span-5 space-y-6">
          
          {/* Basics */}
          <div className="space-y-3">
            <h3 className="font-manga text-xl text-[#ffe75e] tracking-wider drop-shadow-[1px_2px_4px_rgba(0,0,0,0.9)] border-b-2 border-white/20 pb-1">
              PROFILE BASICS
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              {basics.map((b, i) => (
                <div key={i} className="drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]">
                  <h4 className="font-manga text-[#e2620d] text-xs sm:text-sm uppercase tracking-wide">
                    {b.label}
                  </h4>
                  <p className="text-white font-semibold mt-0.5">{b.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats: Wukong vs Mori */}
          <div className="space-y-4 pt-2">
            {/* Wukong Stats */}
            <div>
              <span className="font-manga text-base text-[#ffe75e] tracking-wider block mb-2 drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)]">
                SUN WUKONG STATS
              </span>
              <div className="space-y-1.5 text-xs sm:text-sm font-semibold">
                {wukongStats.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-0.5 border-b border-white/15 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]"
                  >
                    <strong className="text-white">{s.label}</strong>
                    <span className="text-[#ffe75e] font-manga tracking-wide drop-shadow-[0_0_8px_rgba(255,231,94,0.7)]">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jin Mori Stats */}
            <div className="pt-2">
              <span className="font-manga text-base text-[#e2620d] tracking-wider block mb-2 drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)]">
                JIN MORI STATS
              </span>
              <div className="space-y-1.5 text-xs sm:text-sm font-semibold">
                {moriStats.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-0.5 border-b border-white/15 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]"
                  >
                    <strong className="text-white">{s.label}</strong>
                    <span className="text-[#f8ecd5] font-manga tracking-wide drop-shadow-[0_0_6px_rgba(248,236,213,0.6)]">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Relationships & Character Art */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Relationships */}
          <div className="space-y-3">
            <span className="font-manga text-xl text-[#ffe75e] tracking-wider block drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)] border-b-2 border-white/20 pb-1">
              RELATIONSHIPS
            </span>
            <ul className="space-y-3.5">
              {relationships.map((rel, i) => (
                <li key={i} className="text-xs sm:text-sm drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]">
                  <h4 className="font-manga text-[#ffe75e] text-sm sm:text-base tracking-wide">
                    {rel.name}:
                  </h4>
                  <p className="text-white mt-0.5 leading-relaxed font-normal">
                    {rel.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Artwork Showcase without card wrappers */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <motion.img
              src="/assets/chibi.png"
              alt="Chibi Mori"
              className="h-28 sm:h-36 object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.85)]"
              whileHover={{ scale: 1.08 }}
            />
            <motion.img
              src="/assets/sun.png"
              alt="Sun Wukong"
              className="h-28 sm:h-36 object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.85)]"
              whileHover={{ scale: 1.08 }}
            />
          </div>

        </div>

      </div>

    </div>
  );
};
