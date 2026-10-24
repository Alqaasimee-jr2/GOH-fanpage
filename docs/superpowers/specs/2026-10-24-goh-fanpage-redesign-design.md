# Design Specification: God of High School (GOH) Cinematic Fan Page (Lore-Enriched Edition)

**Date**: 2026-10-24  
**Status**: Revised with Deep Lore & Character Research  
**Target Repository**: `Alqaasimee-jr2/GOH-fanpage`  

---

## 1. Project Overview & Lore-Driven Vision

The goal is to rebuild the *God of High School (GOH)* fan page into a world-class, cinematic manhwa fan experience using **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Based on deep research into Yongje Park's 11-year epic manhwa, the application will incorporate the full canonical depth of **Jin Mori**, his legendary weapons, martial arts techniques, the **Legendary Trio**, and the overarching cosmic war.

### Core Lore & Interactive Pillars
1. **Dynamic Character Form Switcher**:
   - **Mortal Mori Jin**: The Renewal Taekwondo prodigy, high school contender, high-agility martial artist with azure/cyan aura.
   - **Awakened Jecheondaeseong (Monkey King)**: The celestial victor with the Loop of Binding, Fiery Eyes & Golden Pupils, golden flaming aura.
   - **Dan Mori & Nirvana Buddha**: Bonus lore states detailing the Recoilless Taekwondo era and cosmic Supreme God ascension.
2. **Divine Arsenal & Combat Techniques**:
   - **Yeoui (Ruyi Jingu Bang)**: Size/weight manipulation, reaching orbit, 19 Dragon Kings infusion.
   - **Yongpyo (Dragon Armor)**: Sentient armor by Hephaestus, Speed/Power modes.
   - **Geundoowun (Kinto-Un)**: Weather control and lightning strikes.
   - **Martial Arts**: Recoilless Renewal Taekwondo (3-Stage Hoechook, Blue Dragon Kick, Bo-Bup) and Nabong Needle Ryu (Limiter Removal up to 250,000x).
3. **The Legendary Trio & Allies**:
   - **Jin Mori**: Jecheondaeseong / Supreme God.
   - **Han Daewi**: Successor to the Jade Emperor, master of Kyokushin Karate, ruler of fundamental forces (Gravity, Electromagnetism).
   - **Yoo Mira**: 25th Master of Moonlight Sword Style, Jade Emperor physical successor, the Sword Saint.
   - **Grandpa Jin Taejin**: The legendary creator of Renewal Taekwondo who defied the gods with pure human martial arts.
   - **Dan Ahan & Uma**: Sister & Sworn Brother bonds.
4. **Cinematic 5-Stage Story Timeline**:
   - *Phase 1*: The Seoul GOH Tournament & Charyeok awakening.
   - *Phase 2*: The Sage Realm & Monkey King Rebirth.
   - *Phase 3*: Ragnarök — The Heavenly War & Jin Taejin's sacrifice.
   - *Phase 4*: Dan Mori & The 17-Year Timeskip.
   - *Phase 5*: The Final Nirvana Battle against Maitreya Park Mujin & Tathagata.
5. **Interactive Memorial & Tribute**:
   - Memorial to Master Jin Taejin and his guiding motto: *"Do what you want, that's what Renewal Taekwondo is about."*
   - Tribute to author **Yongje Park** and community credits.
6. **Ambient Audio & Glassmorphic Visuals**:
   - Continuous ambient audio controller with animated soundwaves and zero-crash Web Audio synthesis fallback.
   - Responsive dark glassmorphism with dynamic glowing borders matching active forms.

---

## 2. Technical Stack & Architecture

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`.tsx`, `.ts`)
- **Build System**: Vite 6+ (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS with custom glass utilities, animated gradient overlays, and aura glows
- **Animation**: `framer-motion` for smooth layout transitions, stat morphing, floating character art, and card flips
- **Icons**: `lucide-react`
- **Typography**:
  - Headings: Google Fonts **Shojumaru** / **Permanent Marker** (action/manga display typography)
  - Body & UI: Google Fonts **Outfit** / **Inter** (clean modern high-contrast sans-serif)

### Directory Structure
```
c:\Users\DELL\Downloads\FAN-PAGE\
├── public/
│   ├── assets/
│   │   ├── mori.jpg           # Background artwork
│   │   ├── morr.png           # Mori Jin character cutout
│   │   ├── sun.png            # Sun Wukong divine mode cutout
│   │   ├── chibi.png          # Chibi Mori illustration
│   │   ├── jin.png            # Master Jin Taejin artwork
│   │   ├── team2.png          # GOH squad artwork
│   │   ├── GOH.png            # God of High School logo
│   │   └── logo.png           # Accent crest
│   ├── favicon.ico
│   └── audio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GlassNavbar.tsx       # Floating glass dock with nav links & audio control
│   │   │   ├── SectionIndicator.tsx  # Vertical right-side dot navigation
│   │   │   └── AudioPlayer.tsx       # Ambient audio toggle with animated equalizer wave
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Overview, mode toggle, titles, badges, artwork
│   │   │   ├── CharacterSection.tsx  # Dynamic stat comparison & relationship spotlight
│   │   │   ├── ArsenalSection.tsx    # Yeoui, Yongpyo, Geundoowun, & Martial Arts
│   │   │   ├── StorySection.tsx      # Interactive manhwa arc timeline
│   │   │   └── TributeSection.tsx    # Master Jin memorial, creator note, author credits
│   │   └── ui/
│   │       ├── GlassCard.tsx         # Reusable glassmorphic panel with dynamic glow
│   │       ├── StatBar.tsx           # Animated progress bar with custom metrics
│   │       ├── ModeToggle.tsx        # Dual-state switch button
│   │       └── TechniqueModal.tsx    # Detailed technique breakdown
│   ├── context/
│   │   └── CharacterModeContext.tsx  # Form mode state ('mori' | 'wukong')
│   ├── data/
│   │   ├── characterData.ts          # Stats, facts, forms, relationships
│   │   ├── arsenalData.ts            # Weapons, armor, martial arts moves
│   │   └── storyData.ts              # Timeline arcs, key quotes, enemies
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces
│   ├── App.tsx                       # Main layout & section container
│   ├── index.css                     # Tailwind imports, custom glassmorphism & aura classes
│   └── main.tsx                      # Entrypoint
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-10-24-goh-fanpage-redesign-design.md
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 3. Data Models & State Architecture

### TypeScript Interfaces (`src/types/index.ts`)
```typescript
export type CharacterMode = 'mori' | 'wukong';

export interface StatMetric {
  name: string;
  moriValue: number;
  moriDisplay: string;
  wukongValue: number;
  wukongDisplay: string;
  description: string;
}

export interface DivineWeapon {
  id: string;
  name: string;
  alias: string;
  creatorOrOrigin: string;
  description: string;
  abilities: string[];
  icon: string;
}

export interface MartialArtTechnique {
  name: string;
  style: 'Renewal Taekwondo' | 'Recoilless' | 'Nabong Needle Ryu' | 'Divine Power';
  description: string;
  signatureMove: string;
}

export interface TrioMember {
  name: string;
  epithet: string;
  style: string;
  borrowedPower: string;
  description: string;
  role: string;
}

export interface Relationship {
  name: string;
  relation: string;
  description: string;
  quote?: string;
  badge?: string;
}

export interface StoryArc {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  climax: string;
  keyMoments: string[];
}
```

---

## 4. Section Breakdown

### 4.1 Hero Section (`HeroSection.tsx` - `#overview`)
- **Title**: Dynamic Manga Brush display ("JIN MORI" / "SUN WUKONG" / "JECHEONDAESEONG").
- **Subtitles**: "Supreme God of the Universe • Master of Renewal Taekwondo • Reincarnation of the Monkey King".
- **Artwork**: Centered high-resolution cutout (`morr.png` / `sun.png`) with animated breathing/floating physics and aura glow.
- **Form Switcher**: Toggle button with instant reactive palette change (Cyan Azure $\leftrightarrow$ Solar Gold).
- **Badges**: "Dragon Slayer", "Child of Gaia", "Bearer of the Loop of Binding", "Billion-Level Power".

### 4.2 Character, Trio & Combat Stats (`CharacterSection.tsx` - `#character`)
- **Sub-Tab 1: Combat Stats**:
  - Animated stat bars comparing Mortal Mori vs Divine Monkey King:
    - *Strength*: 8/10 $\rightarrow$ $\infty$ (Infinite)
    - *Speed*: 9/10 $\rightarrow$ 999+ (Faster than Light)
    - *Battle IQ*: 7/10 $\rightarrow$ 600 (Master Tactician & Technique Mimicry)
    - *Endurance*: 8/10 $\rightarrow$ $\infty$ (Immortal Celestial Body)
    - *Luck*: 4/10 $\rightarrow$ 500
- **Sub-Tab 2: The Legendary Trio**:
  - **Jin Mori**: Renewal Taekwondo & Monkey King.
  - **Han Daewi**: Successor to the Jade Emperor, Master of Kyokushin Karate and the Four Fundamental Forces.
  - **Yoo Mira**: Witch of the West, 25th Master of Moonlight Sword Style, Jade Emperor physical heir.
- **Sub-Tab 3: Relationships**:
  - Grandpa Jin Taejin, Dan Ahan, Park Taejin, and Uma with lore backstories.

### 4.3 Divine Arsenal & Secret Arts (`ArsenalSection.tsx` - `#arsenal`)
- **The Divine Relics**:
  - **Yeoui (Ruyi Jingu Bang)**: Expanding pillar of infinite mass, 19 Dragon Kings.
  - **Yongpyo (Sentient Dragon Armor)**: Speed/Power transformations crafted by Hephaestus.
  - **Geundoowun (Nimbus Cloud)**: Atmospheric weather control and thunder strike summons.
  - **The Gourd & Loop of Binding**: Celestial seals and power limiters.
- **Martial Arts Dossier**:
  - *Renewal Taekwondo*: 3-Stage Hoechook, Blue Dragon Kick, Dragon Catcher, Bo-Bup.
  - *Recoilless Taekwondo*: Removing excess motion to produce unstoppable kinetic strikes.
  - *Nabong Needle Ryu*: Limiter Removal (2x, 8x, 250,000x) and Pain Blockade.

### 4.4 Story Arcs Timeline (`StorySection.tsx` - `#story`)
- **Arc 1: The Seoul GOH Tournament**: High school brawls, Charyeok revelation, Taek Jegal climax.
- **Arc 2: The Sage Realm**: Reclaiming memories, unsealing Yeoui from the moon, Monkey King rebirth.
- **Arc 3: Ragnarök**: The Heavenly War, clash against the First Heavenly Realm, Jin Taejin's sacrifice.
- **Arc 4: The Dan Mori Era**: 17-year timeskip, powerless underdog, mastering Recoilless Taekwondo.
- **Arc 5: Nirvana & The Supreme God**: The final battle against Maitreya Mujin Park and Tathagata, cosmic universal peace.

### 4.5 Memorial & Tribute (`TributeSection.tsx` - `#tribute`)
- **Master Jin Taejin Memorial**: Highlighting `jin.png` and the philosophy of Renewal Taekwondo.
- **Yongje Park Tribute**: Honoring the author's 11-year serialization and 570+ chapters.
- **Squad Showcase**: Featuring `team2.png`, `GOH.png`, and `logo.png`.
- **Fan Community Footer**: Original author email (`qaasimkids6@gmail.com`), GitHub link, and share button.

---

## 5. Verification Plan

1. **Vite TypeScript Compilation**: `npx tsc --noEmit` exits with 0 errors.
2. **Production Bundle**: `npm run build` generates optimized assets in `dist/`.
3. **Asset Migration Verification**: All images from `glassmorphin/` accessible in `public/assets/`.
4. **Interactive Feature Validation**: Form switcher, arsenal modals, stat morphing, and audio controls tested and fully responsive.
