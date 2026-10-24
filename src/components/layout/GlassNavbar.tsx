import React, { useState } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { Menu, X } from 'lucide-react';

interface GlassNavbarProps {
  activeSection: string;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'trio', label: 'THE TRIO' },
    { id: 'combat', label: 'COMBAT & STATS' },
    { id: 'arsenal', label: 'DIVINE RELICS' },
    { id: 'story', label: 'STORY' },
    { id: 'tribute', label: 'EXTRA' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src="/assets/GOH.png"
            alt="God of High School Logo"
            className="h-9 md:h-11 object-contain drop-shadow-[0_0_10px_rgba(255,231,94,0.5)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[rgba(230,160,10,0.35)] backdrop-blur-md border-[2px] border-[#f1f1f1] shadow-goh-glow">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 text-xs md:text-sm font-manga tracking-wider rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ffe75e] text-black font-extrabold shadow-[0_0_12px_#ffe75e]'
                    : 'text-[#f1f1f1] hover:text-[#f8ecd5] hover:bg-black/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          <AudioPlayer />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-black/60 border border-[#f1f1f1] text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-[7px] bg-[rgba(230,160,10,0.85)] backdrop-blur-xl border-[2px] border-[#ffe75e] pointer-events-auto shadow-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-md font-manga text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-black text-[#ffe75e] font-bold'
                    : 'text-white hover:bg-black/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
