import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CharacterMode } from '../types';

interface CharacterModeContextType {
  mode: CharacterMode;
  toggleMode: () => void;
  setMode: (mode: CharacterMode) => void;
  isDivine: boolean;
  theme: {
    heroTitle: string;
    heroSubtitle: string;
    epithet: string;
    primaryAura: string;
    accentColor: string;
    glassBorder: string;
    badgeStyle: string;
  };
}

const CharacterModeContext = createContext<CharacterModeContextType | undefined>(undefined);

export const CharacterModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<CharacterMode>('mori');

  const toggleMode = () => {
    setMode((prev) => (prev === 'mori' ? 'wukong' : 'mori'));
  };

  const isDivine = mode === 'wukong';

  const theme = isDivine
    ? {
        heroTitle: 'SUN WUKONG',
        heroSubtitle: 'The Monkey King • Jecheondaeseong',
        epithet: 'The Great Sage Heaven’s Equal & Supreme God',
        primaryAura: 'from-amber-500/30 via-yellow-400/20 to-transparent',
        accentColor: '#ffe75e',
        glassBorder: 'border-[#ffe75e] shadow-goh-divine',
        badgeStyle: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black',
      }
    : {
        heroTitle: 'JIN MORI',
        heroSubtitle: 'The God of High School Contender',
        epithet: 'Master of Renewal Taekwondo & Child of Gaia',
        primaryAura: 'from-orange-500/20 via-amber-600/15 to-transparent',
        accentColor: '#e2620d',
        glassBorder: 'border-goh-border hover:border-[#ffe75e] shadow-goh-glow',
        badgeStyle: 'bg-goh-amber text-white',
      };

  return (
    <CharacterModeContext.Provider
      value={{
        mode,
        toggleMode,
        setMode,
        isDivine,
        theme,
      }}
    >
      {children}
    </CharacterModeContext.Provider>
  );
};

export const useCharacterMode = () => {
  const context = useContext(CharacterModeContext);
  if (!context) {
    throw new Error('useCharacterMode must be used within a CharacterModeProvider');
  }
  return context;
};
