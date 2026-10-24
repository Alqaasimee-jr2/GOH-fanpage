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
      
      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Basics & Stats */}
        <div className="md:col-span-5 space-y-6">
          
          {/* Basics */}
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-[7px] border border-white/20 space-y-3">
            <h3 className="font-manga text-lg text-[#ffe75e] tracking-wider border-b border-white/10 pb-1">
              PROFILE BASICS
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              {basics.map((b, i) => (
                <div key={i}>
                  <h4 className="font-manga text-[#e2620d] text-xs uppercase">{b.label}</h4>
                  <p className="text-[#f1f1f1] font-medium">{b.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats: Wukong vs Mori */}
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-[7px] border border-white/20 space-y-4">
            {/* Wukong Stats */}
            <div>
              <span className="font-manga text-sm text-[#ffe75e] tracking-wider block mb-1.5">
                SUN WUKONG STATS
              </span>
              <div className="space-y-1 text-xs sm:text-sm">
                {wukongStats.map((s, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 py-0.5">
                    <strong className="text-[#f1f1f1]">{s.label}</strong>
                    <span className="text-[#ffe75e] font-manga">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jin Mori Stats */}
            <div className="pt-2 border-t border-white/10">
              <span className="font-manga text-sm text-[#e2620d] tracking-wider block mb-1.5">
                JIN MORI STATS
              </span>
              <div className="space-y-1 text-xs sm:text-sm">
                {moriStats.map((s, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 py-0.5">
                    <strong className="text-[#f1f1f1]">{s.label}</strong>
                    <span className="text-[#f8ecd5] font-manga">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Relationships & Character Art */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Relationships */}
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-[7px] border border-white/20 space-y-3">
            <span className="font-manga text-lg text-[#ffe75e] tracking-wider block border-b border-white/10 pb-1">
              RELATIONSHIPS
            </span>
            <ul className="space-y-3">
              {relationships.map((rel, i) => (
                <li key={i} className="text-xs sm:text-sm">
                  <h4 className="font-manga text-[#ffe75e] text-sm">{rel.name}:</h4>
                  <p className="text-stone-200 mt-0.5 leading-snug">{rel.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Artwork Footer within About view */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <motion.img
              src="/assets/chibi.png"
              alt="Chibi Mori"
              className="h-28 sm:h-36 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
              whileHover={{ scale: 1.08 }}
            />
            <motion.img
              src="/assets/sun.png"
              alt="Sun Wukong"
              className="h-28 sm:h-36 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
              whileHover={{ scale: 1.08 }}
            />
          </div>

        </div>

      </div>

    </div>
  );
};
