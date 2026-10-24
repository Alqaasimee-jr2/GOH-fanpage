import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverviewView } from './components/views/OverviewView';
import { AboutView } from './components/views/AboutView';
import { StoryView } from './components/views/StoryView';
import { ExtraView } from './components/views/ExtraView';
import { AudioPlayer } from './components/layout/AudioPlayer';

export type TabType = 'overview' | 'about' | 'story' | 'extra';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('overview');

  const navItems: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'overview' },
    { id: 'about', label: 'about' },
    { id: 'story', label: 'story' },
    { id: 'extra', label: 'extra' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-body selection:bg-[#ffe75e] selection:text-black">
      
      {/* Background Image with Canonical 4px Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[4px] scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/assets/mori.jpg')` }}
      />

      {/* Floating Ambient Sound Controller (Top-right corner of screen) */}
      <div className="absolute top-4 right-4 z-40">
        <AudioPlayer />
      </div>

      {/* The Iconic Centered Glass Frame (.page) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[94vw] h-[92vh] md:w-[89vw] md:h-[89vh] rounded-[7px] border-[3px] border-[#f1f1f1] bg-[rgba(230,160,10,0.40)] backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden flex">
        
        {/* Main View Area */}
        <div className="flex-1 h-full overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {currentTab === 'overview' && <OverviewView />}
              {currentTab === 'about' && <AboutView />}
              {currentTab === 'story' && <StoryView />}
              {currentTab === 'extra' && <ExtraView />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The Original Vertical Right Navigation (.nav) */}
        <nav
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col justify-center items-end"
          aria-label="Fanpage Navigation"
        >
          <ul className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 text-right">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <li key={item.id} className="list-none">
                  <button
                    onClick={() => setCurrentTab(item.id)}
                    className={`font-manga text-sm sm:text-base md:text-lg lowercase tracking-wider transition-all duration-300 transform block cursor-pointer select-none drop-shadow-[1px_2px_4px_rgba(0,0,0,0.9)] ${
                      isActive
                        ? 'text-[#ffe75e] font-extrabold translate-x-2 drop-shadow-[0_0_10px_rgba(255,231,94,0.9)]'
                        : 'text-[#f1f1f1] hover:text-[#f8ecd5] hover:translate-x-2'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>

    </div>
  );
};

export default App;
