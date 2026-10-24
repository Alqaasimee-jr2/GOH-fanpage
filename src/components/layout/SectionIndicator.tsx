import React from 'react';

interface SectionIndicatorProps {
  activeSection: string;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'trio', label: 'The Trio' },
    { id: 'combat', label: 'Combat & Stats' },
    { id: 'arsenal', label: 'Divine Relics' },
    { id: 'story', label: 'Story Arcs' },
    { id: 'tribute', label: 'Extra & Tribute' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-auto">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-7 px-2.5 py-1 rounded bg-black/80 border border-[#ffe75e] text-xs font-manga text-[#f8ecd5] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              {section.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3.5 h-3.5 bg-[#ffe75e] ring-4 ring-[#ffe75e]/30 shadow-[0_0_12px_#ffe75e]'
                  : 'w-2 h-2 bg-white/40 group-hover:bg-white group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
