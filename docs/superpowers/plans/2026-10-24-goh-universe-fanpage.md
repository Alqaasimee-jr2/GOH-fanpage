# God of High School (GOH) Universe Fan Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the God of High School fan page into an expansive, cinematic universe showcase using React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion, with full universe coverage, strict adherence to the repo's original amber glassmorphic palette, manga typography, and companion manhwa assets.

**Architecture:** A full-screen cinematic single-page application with vertical snap sections on desktop and responsive fluid touch scrolling on mobile. Global form state (`CharacterModeContext`) drives real-time visual and stat transformations. Sections are modularized into independent, self-contained components powered by rich canonical data modules.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React, Google Fonts (Shojumaru, Bangers, Permanent Marker, Outfit).

---

### Task 1: Vite + React 19 + TypeScript + Tailwind CSS Scaffold & Asset Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Copy: `glassmorphin/*` $\rightarrow$ `public/assets/`

- [ ] **Step 1: Create `package.json` with required dependencies**

```json
{
  "name": "goh-fanpage",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.4.7",
    "lucide-react": "^1.16.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.7.2",
    "vite": "^6.2.0"
  }
}
```

- [ ] **Step 2: Create TypeScript & Vite configurations**

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

`vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 3: Create Tailwind & PostCSS configurations with canonical repo palette**

`tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goh: {
          glass: 'rgba(230, 160, 10, 0.40)',
          intense: 'rgba(255, 174, 0, 0.70)',
          subtle: 'rgba(255, 241, 42, 0.35)',
          gold: '#ffe75e',
          amber: '#e2620d',
          cream: '#f8ecd5',
          border: '#f1f1f1',
        }
      },
      fontFamily: {
        manga: ['Shojumaru', 'Bangers', 'cursive'],
        brush: ['Permanent Marker', 'cursive'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'goh-glow': '0 0 25px rgba(230, 160, 10, 0.5)',
        'goh-divine': '0 0 35px rgba(255, 231, 94, 0.6)',
      }
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Create `index.html` with Google Fonts and app mount**

`index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>THE GOD OF HIGH SCHOOL — Official Universe Fan Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Outfit:wght@300;400;600;700;900&family=Permanent+Marker&family=Shojumaru&display=swap" rel="stylesheet">
  </head>
  <body class="bg-black text-white font-body selection:bg-amber-500 selection:text-black">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Setup `src/index.css` and migrate assets to `public/assets/`**

Create `public/assets/` and copy `chibi.png`, `GOH.png`, `jin.png`, `logo.png`, `mori.jpg`, `morr.png`, `sun.png`, `team2.png`.
Run: `npm install`
Verify: `npx tsc --noEmit` and files present in `public/assets/`.

- [ ] **Step 6: Commit**
```bash
git add package.json vite.config.ts tsconfig.json tailwind.config.js postcss.config.js index.html src/index.css public/assets/
git commit -m "chore: scaffold React 19 Vite TypeScript project and migrate assets"
```

---

### Task 2: Companion Manhwa Asset Generation via `image-generator`

**Files:**
- Create: `public/assets/daewi.png` (Han Daewi cutout/portrait in manhwa style)
- Create: `public/assets/mira.png` (Yoo Mira cutout/portrait in manhwa style)
- Create: `public/assets/yeoui.png` (Yeoui / Ruyi Jingu Bang divine staff artwork)

- [ ] **Step 1: Invoke `image-generator` for Han Daewi**
Generate Han Daewi in The God of High School manhwa style (Kyokushin karate stance, blue dragon aura, transparent background). Save as `public/assets/daewi.png`.

- [ ] **Step 2: Invoke `image-generator` for Yoo Mira**
Generate Yoo Mira in The God of High School manhwa style (Moonlight Sword drawn, dynamic wind, transparent background). Save as `public/assets/mira.png`.

- [ ] **Step 3: Invoke `image-generator` for Yeoui**
Generate the legendary red and gold pillar staff Yeoui / Ruyi Jingu Bang with glowing draconic energy runes. Save as `public/assets/yeoui.png`.

- [ ] **Step 4: Commit assets**
```bash
git add public/assets/
git commit -m "feat(assets): add generated manhwa companion artwork for Trio and Yeoui"
```

---

### Task 3: TypeScript Data Models & Lore Databases

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/universeData.ts`
- Create: `src/data/combatData.ts`
- Create: `src/data/arsenalData.ts`
- Create: `src/data/storyData.ts`

- [ ] **Step 1: Define TypeScript interfaces in `src/types/index.ts`**
Include `CharacterMode`, `CharacterProfile`, `TrioMember`, `StatMetric`, `MartialArtMove`, `CharyeokPower`, `DivineRelic`, `StoryArc`.

- [ ] **Step 2: Implement `src/data/universeData.ts`**
Add rich data for The Legendary Trio (Jin Mori, Han Daewi, Yoo Mira), Master Jin Taejin, The Six (Park Mujin, Na Bong-Chim, etc.), and Key Gods (Tathagata, Satan 666, Okhwang).

- [ ] **Step 3: Implement `src/data/combatData.ts`**
Add combat metrics for Mortal Mori vs Divine Sun Wukong, Renewal Taekwondo moves (3-Stage Hoechook, Blue Dragon Kick, Bo-Bup), Recoilless Stance, Nabong Needle Limiter Removal, and Charyeok mechanics.

- [ ] **Step 4: Implement `src/data/arsenalData.ts`**
Add full specs for Yeoui (19 Dragon Kings), Sentient Yongpyo, Geundoowun, and The Gourd.

- [ ] **Step 5: Implement `src/data/storyData.ts`**
Add details for all 5 Saga Arcs with milestones, quotes, and pivotal battles.

- [ ] **Step 6: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 7: Commit**
```bash
git add src/types/index.ts src/data/
git commit -m "feat(data): add comprehensive GOH universe, combat, arsenal, and story lore"
```

---

### Task 4: Global State & Reusable Glassmorphic UI Primitives

**Files:**
- Create: `src/context/CharacterModeContext.tsx`
- Create: `src/components/ui/GlassCard.tsx`
- Create: `src/components/ui/StatBar.tsx`
- Create: `src/components/ui/ModeToggle.tsx`
- Create: `src/components/ui/MangaBadge.tsx`

- [ ] **Step 1: Implement `src/context/CharacterModeContext.tsx`**
Provide `mode: 'mori' | 'wukong'`, `toggleMode()`, active aura gradient, and theme tokens.

- [ ] **Step 2: Implement `src/components/ui/GlassCard.tsx`**
Card with signature repo colors: `bg-goh-glass`, `backdrop-blur-md`, `border-[3px] border-goh-border hover:border-goh-gold transition-all duration-300 rounded-lg`.

- [ ] **Step 3: Implement `src/components/ui/StatBar.tsx`**
Animated progress bar displaying dynamic values (e.g. 8/10 vs $\infty$) with glowing amber/gold fills.

- [ ] **Step 4: Implement `src/components/ui/ModeToggle.tsx`**
Pill switch between "MORTAL MORI" and "DIVINE WUKONG" with sound click feedback and glowing state.

- [ ] **Step 5: Implement `src/components/ui/MangaBadge.tsx`**
Angled manhwa badge for combat classes, forms, and titles.

- [ ] **Step 6: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 7: Commit**
```bash
git add src/context/ src/components/ui/
git commit -m "feat(ui): add CharacterModeContext and reusable glassmorphic UI components"
```

---

### Task 5: Layout Navigation & Ambient Audio Controller

**Files:**
- Create: `src/components/layout/GlassNavbar.tsx`
- Create: `src/components/layout/SectionIndicator.tsx`
- Create: `src/components/layout/AudioPlayer.tsx`

- [ ] **Step 1: Implement `src/components/layout/AudioPlayer.tsx`**
Floating audio toggle button in header. Plays ambient anime theme, with a Web Audio API chord synthesis fallback if audio file is not loaded, featuring an animated 4-bar equalizer wave.

- [ ] **Step 2: Implement `src/components/layout/GlassNavbar.tsx`**
Floating top glass dock with GOH logo, navigation links (`#overview`, `#trio`, `#combat`, `#arsenal`, `#story`, `#tribute`), audio toggle, and active section highlight.

- [ ] **Step 3: Implement `src/components/layout/SectionIndicator.tsx`**
Right-hand vertical dot navigation with active tooltips and smooth scroll triggers.

- [ ] **Step 4: Verify TypeScript compilation**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 5: Commit**
```bash
git add src/components/layout/
git commit -m "feat(layout): add GlassNavbar, SectionIndicator, and AudioPlayer"
```

---

### Task 6: Hero / Overview Section (`#overview`)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Implement `HeroSection.tsx`**
- Background: Blurred `mori.jpg` with glassmorphic amber overlay.
- Dynamic character art: `morr.png` (Mori) $\leftrightarrow$ `sun.png` (Wukong) with floating animation.
- Manga display typography: "SUN WUKONG" / "JIN MORI", subtitle "The God of High School".
- ModeToggle switch and badges ("Highest Ranking Revolutionary Figure", "Dragon Slayer", "Child of Gaia").
- CTA buttons linking to `#trio` and `#combat`.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat(sections): implement HeroSection with dynamic mode switcher and manga typography"
```

---

### Task 7: The Legendary Trio & Universe Legends Section (`#trio`)

**Files:**
- Create: `src/components/sections/TrioSection.tsx`

- [ ] **Step 1: Implement `TrioSection.tsx`**
- Feature tabs for The Legendary Trio:
  1. **Jin Mori**: Renewal Taekwondo, Monkey King awakened.
  2. **Han Daewi**: Successor to the Jade Emperor, Kyokushin Karate, Four Guardian Gods.
  3. **Yoo Mira**: 25th Master of Moonlight Sword Style, Witch of the West.
- Showcase cards for Master **Jin Taejin**, **The Six**, and **Cosmic Gods/Antagonists** (Tathagata, Satan 666, Okhwang).
- Renders `chibi.png`, `daewi.png`, `mira.png`, and `team2.png`.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/TrioSection.tsx
git commit -m "feat(sections): implement TrioSection covering Mori, Daewi, Mira, and Legends"
```

---

### Task 8: Combat Systems: Martial Arts vs Charyeok Section (`#combat`)

**Files:**
- Create: `src/components/sections/CombatSection.tsx`

- [ ] **Step 1: Implement `CombatSection.tsx`**
- Left Column: Animated combat stat bars (Strength, Speed, Battle IQ, Endurance, Luck) dynamically morphing on mode toggle.
- Right Column:
  - Genuine Martial Arts: Renewal Taekwondo (3-Stage Hoechook, Blue Dragon Kick, Bo-Bup), Recoilless Stance, Nabong Needle Limiter Removal.
  - Borrowed Power (Charyeok): Mechanics of god contracts, Taboo removal, Haetae, Lu Bu, Tam, Longinus.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/CombatSection.tsx
git commit -m "feat(sections): implement CombatSection with morphing stats and martial arts dossier"
```

---

### Task 9: Divine Arsenal & Relics Section (`#arsenal`)

**Files:**
- Create: `src/components/sections/ArsenalSection.tsx`

- [ ] **Step 1: Implement `ArsenalSection.tsx`**
- Showcase cards with interactive inspection for:
  - **Yeoui (Ruyi Jingu Bang)**: Expanding mass, 19 Dragon Kings.
  - **Yongpyo**: Sentient Dragon Armor, Speed & Power forms.
  - **Geundoowun**: Flying Nimbus weather & lightning command.
  - **The Gourd & Loop of Binding**: Entity sealing and power stabilization.
- Includes `yeoui.png` and glowing rune accents.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/ArsenalSection.tsx
git commit -m "feat(sections): implement ArsenalSection for Divine Relics and Weapons"
```

---

### Task 10: 5-Stage Story Chronicle Section (`#story`)

**Files:**
- Create: `src/components/sections/StorySection.tsx`

- [ ] **Step 1: Implement `StorySection.tsx`**
- Interactive 5-arc manhwa chronicle:
  1. Seoul GOH Tournament
  2. Sage Realm
  3. Ragnarök War
  4. Dan Mori & 17-Year Timeskip
  5. The Final Nirvana Climax
- Interactive timeline selector with pause/play auto-scroll, manhwa quotes, and key battle highlights. Includes `GOH.png`.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/StorySection.tsx
git commit -m "feat(sections): implement StorySection with 5-arc interactive manhwa chronicle"
```

---

### Task 11: Memorial & Creator Tribute Section (`#tribute`)

**Files:**
- Create: `src/components/sections/TributeSection.tsx`

- [ ] **Step 1: Implement `TributeSection.tsx`**
- Master **Jin Taejin** memorial plaque featuring `jin.png` and his life philosophy.
- Creator tribute honoring **Yongje Park** and 11+ years of webtoon serialization.
- Squad art display (`team2.png`, `logo.png`).
- Fan page author contact card (`qaasimkids6@gmail.com`), GitHub repository link, and share button.

- [ ] **Step 2: Verify component rendering and TypeScript compilation**
Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/TributeSection.tsx
git commit -m "feat(sections): implement TributeSection with Jin Taejin memorial and author credits"
```

---

### Task 12: Main App Assembly & Full-Screen Snap Scroll Integration

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Integrate all sections in `src/App.tsx`**
- Wire `CharacterModeProvider`.
- Setup `<main>` with full-screen snap container (`h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth`).
- Attach `IntersectionObserver` to track active section among `#overview`, `#trio`, `#combat`, `#arsenal`, `#story`, `#tribute`.
- Render background `mori.jpg` with `blur(4px)` and amber glass container.

- [ ] **Step 2: Verify smooth navigation, mode switches, and responsive styling**
Run: `npm run build`
Expected: Successful build with zero errors.

- [ ] **Step 3: Commit**
```bash
git add src/App.tsx src/main.tsx
git commit -m "feat(app): assemble full GOH universe fanpage with snap scroll and mode provider"
```

---

### Task 13: End-to-End Build, Typecheck & Verification

**Files:**
- All project files

- [ ] **Step 1: Execute TypeScript compilation check**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 2: Execute Vite production build**
Run: `npm run build`
Expected: Complete production build in `dist/`.

- [ ] **Step 3: Verify color fidelity against repo**
Confirm all panels use `rgba(230, 160, 10, 0.4)`, `#ffe75e`, `#f1f1f1`, `rgb(226, 98, 13)`, and `rgb(248, 236, 213)`.

- [ ] **Step 4: Commit final verification**
```bash
git add .
git commit -m "chore: complete end-to-end verification of GOH universe fanpage"
```
