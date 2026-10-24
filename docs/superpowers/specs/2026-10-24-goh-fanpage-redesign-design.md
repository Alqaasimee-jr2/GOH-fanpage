# Design Specification: God of High School (GOH) Cinematic Fan Page

**Date**: 2026-10-24  
**Status**: Approved by User  
**Author**: Antigravity & User  
**Target Repository**: `Alqaasimee-jr2/GOH-fanpage`  

---

## 1. Project Overview & Objectives

The goal is to rebuild the *God of High School (GOH)* fan page into a modern, cinematic web application using **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

### Core Objectives
1. **Cinematic Story Experience**: Full-screen vertical snap sections on desktop (`#overview`, `#character`, `#story`, `#tribute`) that transition smoothly, with fluid responsive scrolling on mobile devices.
2. **Dynamic Character Mode Switcher**: A dual-state toggle between **Mortal Mori Jin** (Renewal Taekwondo, earthly stats 1–10, azure/cyan aura) and **Divine Sun Wukong** (Monkey King / Jecheondaeseong, infinite celestial stats, golden flaming aura).
3. **Interactive Visual Components**:
   - Animated comparison stat bars that morph dynamically upon form change.
   - Interactive story arc timeline covering the 4 major saga milestones.
   - Character relationships spotlight cards (Grandpa Jin Taejin, Dan Ahan, Park Taejin, Uma).
   - High-impact tribute memorial to Master Jin Taejin and webtoon creator Yongje Park.
4. **Ambient Audio Integration**: Ambient battle/anime theme audio controller with animated equalizer waves and graceful Web Audio API fallback.
5. **Preservation of Existing Assets**: Seamless migration of all legacy artwork (`mori.jpg`, `morr.png`, `sun.png`, `chibi.png`, `jin.png`, `team2.png`, `GOH.png`, `logo.png`) into the Vite asset pipeline.

---

## 2. Technical Stack & Architecture

### Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`.tsx`, `.ts`)
- **Build System**: Vite 6+ (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v3/v4 with custom glassmorphism utilities and aura animation keyframes
- **Animation**: `framer-motion` for aura glow pulses, mode morphing, and stat bar fills
- **Icons**: `lucide-react`
- **Typography**:
  - Headings: Google Fonts **Shojumaru** / **Permanent Marker** (action/manga display typography)
  - Body & UI: Google Fonts **Outfit** / **Inter** (clean modern high-contrast sans-serif)

### File Structure
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
│       └── ambient.mp3        # Ambient soundtrack (or synthetic fallback)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GlassNavbar.tsx       # Floating glass dock with nav links & audio control
│   │   │   ├── SectionIndicator.tsx  # Vertical right-side dot navigation
│   │   │   └── AudioPlayer.tsx       # Ambient audio toggle with animated equalizer wave
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Overview, mode toggle, titles, badges, artwork
│   │   │   ├── CharacterSection.tsx  # Dynamic stat comparison & relationship spotlight
│   │   │   ├── StorySection.tsx      # Interactive manhwa arc timeline
│   │   │   └── TributeSection.tsx    # Master Jin memorial, creator note, author credits
│   │   └── ui/
│   │       ├── GlassCard.tsx         # Reusable glassmorphic panel with dynamic glow
│   │       ├── StatBar.tsx           # Animated progress bar with custom metrics
│   │       └── ModeToggle.tsx        # Dual-state switch button
│   ├── context/
│   │   └── CharacterModeContext.tsx  # Form mode state ('mori' | 'wukong')
│   ├── data/
│   │   ├── characterData.ts          # Stats, facts, relationships
│   │   └── storyData.ts              # Timeline arcs, key quotes
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

### Types (`src/types/index.ts`)
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
  keyMoments: string[];
}

export interface CharacterProfile {
  title: string;
  subtitle: string;
  age: string;
  nationality: string;
  occupation: string;
  hobbies: string;
  traits: string[];
}
```

### Context & Flow (`src/context/CharacterModeContext.tsx`)
* Tracks active form: `mode: CharacterMode` ('mori' | 'wukong').
* Provides `toggleMode()` to smoothly swap themes and trigger Framer Motion animations.
* Theme mapping:
  - **Mori**: Primary colors `cyan-400`, border `border-cyan-500/40`, aura `shadow-[0_0_30px_rgba(6,182,212,0.25)]`, banner "Mortal Contender".
  - **Wukong**: Primary colors `amber-400`, border `border-amber-400/40`, aura `shadow-[0_0_35px_rgba(245,158,11,0.35)]`, banner "Jecheondaeseong".

---

## 4. Section Specifications

### 4.1 Overview / Hero Section (`HeroSection.tsx`)
- **ID**: `#overview`
- **Visuals**: Full-screen frosted glass container over blurred `mori.jpg` backdrop with animated radial aura behind the character cutout.
- **Dynamic Character Art**:
  - In `mori` mode: Renders `morr.png` with azure glow and subtle levitation animation.
  - In `wukong` mode: Renders `sun.png` with fiery golden glow and golden ember particles.
- **Interactive Controls**:
  - `ModeToggle`: Prominent pill switch to toggle between Mortal Mori & Divine Sun Wukong.
  - CTAs: "Combat Stats" (jumps to `#character`) and "Story Arcs" (jumps to `#story`).
- **Badges**: "Highest Ranking Revolutionary Figure", "Dragon Slayer", "Child of Gaia", "Supreme God of the Universe".

### 4.2 Character & Stats Section (`CharacterSection.tsx`)
- **ID**: `#character`
- **Combat Stats Tab**:
  - Animated progress bars for **Strength**, **Speed**, **Intelligence**, **Endurance**, and **Luck**.
  - When in Mori mode: Shows mortal values (e.g. Strength 8/10, Speed 9/10, Luck 4/10).
  - When in Wukong mode: Morphs to divine values (Strength $\infty$, Speed 999+, Endurance $\infty$).
- **Relationships Spotlight**:
  - Interactive grid displaying Jin Taejin, Dan Ahan, Park Taejin, and Uma.
  - Includes chibi Mori artwork (`chibi.png`) and quote callouts.

### 4.3 Story Arcs Section (`StorySection.tsx`)
- **ID**: `#story`
- **Interactive Timeline**:
  - **Arc 1: The GOH Tournament** (Invitation, Renewal Taekwondo showcase, bonds with Daewi & Mira).
  - **Arc 2: Sage Realm** (Awakening as Sun Wukong, unsealing Ruyi Jingu Bang & Geundoowun).
  - **Arc 3: Ragnarök** (Heavenly realm war, Jade Emperor clash, Jin Taejin's sacrifice).
  - **Arc 4: The Supreme God** (Dan Mori identity, Maitreya Mubong Park battle, cosmic Nirvana).
- **Controls**: Interactive arc selector tabs, pause-on-hover auto-advance, and animated manhwa quotes.

### 4.4 Tribute Section (`TributeSection.tsx`)
- **ID**: `#tribute`
- **Grandpa Jin Tribute**: Dedicated memorial for Master Jin Taejin (`jin.png`) with his philosophy ("Do what you want, that's what Renewal Taekwondo is about").
- **Creator Tribute**: Appreciation for Yongje Park and 11+ years of The God of High School webtoon.
- **Visual Showcase**: Renders `team2.png`, `GOH.png`, and `logo.png`.
- **Fan Page Credits**: Original creator contact (`qaasimkids6@gmail.com`), GitHub link, and share button.

---

## 5. Responsiveness, Accessibility & Fallbacks

1. **Desktop View (≥ 1024px)**:
   - Full-screen snap scroll (`h-screen snap-y snap-mandatory`).
   - Side-by-side layout for text cards and character cutout.
   - Right-side vertical dot navigation.
2. **Mobile & Tablet View (< 1024px)**:
   - Fluid touch scrolling (removes rigid snap scroll to avoid gesture conflicts).
   - Responsive stacked cards with character artwork placed as an elegant backdrop or top illustration.
   - Compact bottom or top glass navigation bar.
3. **Audio Handling**:
   - Starts muted to comply with browser autoplay restrictions.
   - Includes Web Audio API fallback to synthesize an ambient chord progression if `ambient.mp3` is not found, guaranteeing zero 404 broken audio states.
4. **Motion**:
   - Respects `prefers-reduced-motion` media queries.

---

## 6. Verification Plan

1. **Asset Integrity Check**: Ensure all images from `glassmorphin/` are correctly copied to `public/assets/`.
2. **TypeScript Typecheck**: Run `npx tsc --noEmit` to verify type cleanliness.
3. **Build Validation**: Run `npm run build` to confirm Vite bundles successfully without errors.
4. **Interaction Check**: Verify mode toggle, audio toggle, stat bar morphing, and smooth scrolling across all 4 sections.
