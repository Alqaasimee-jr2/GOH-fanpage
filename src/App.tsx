import React, { useState, useEffect } from 'react';
import { CharacterModeProvider } from './context/CharacterModeContext';
import { GlassNavbar } from './components/layout/GlassNavbar';
import { SectionIndicator } from './components/layout/SectionIndicator';
import { HeroSection } from './components/sections/HeroSection';
import { TrioSection } from './components/sections/TrioSection';
import { CombatSection } from './components/sections/CombatSection';
import { ArsenalSection } from './components/sections/ArsenalSection';
import { StorySection } from './components/sections/StorySection';
import { TributeSection } from './components/sections/TributeSection';

export const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const sectionIds = ['overview', 'trio', 'combat', 'arsenal', 'story', 'tribute'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-body selection:bg-[#ffe75e] selection:text-black">
      {/* Fixed Background Image with Blur */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat filter blur-[4px] scale-105 transition-all duration-700"
        style={{ backgroundImage: `url('/assets/mori.jpg')` }}
      />

      {/* Amber/Gold Tint Overlay matching original repo palette */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-amber-950/20 to-black/80 pointer-events-none" />

      {/* Floating Glass Navigation Dock */}
      <GlassNavbar activeSection={activeSection} />

      {/* Right-Side Vertical Indicator Dots */}
      <SectionIndicator activeSection={activeSection} />

      {/* Full-Screen Snap Scroll Container */}
      <main className="relative z-10 w-full h-screen overflow-y-auto overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth">
        <HeroSection />
        <TrioSection />
        <CombatSection />
        <ArsenalSection />
        <StorySection />
        <TributeSection />
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CharacterModeProvider>
      <AppContent />
    </CharacterModeProvider>
  );
};

export default App;
