# Design Specification: The Ultimate God of High School (GOH) Universe Fan Page

**Date**: 2026-10-24  
**Status**: Revised with Full Universe Scope, Canonical Color Lock & Manga Typography  
**Target Repository**: `Alqaasimee-jr2/GOH-fanpage`  

---

## 1. Vision & Core Requirements

This specification transforms the repository into **The Ultimate God of High School (GOH) Universe Fan Page**, honoring Yongje Park's masterpiece in full scope while strictly preserving the visual identity, colors, and manga spirit of the original repository.

### Key Mandates
1. **Full GOH Universe Scope**:
   - Central Protagonist: **Jin Mori** (Mortal High Schooler $\leftrightarrow$ Awakened Sun Wukong / Jecheondaeseong $\leftrightarrow$ Dan Mori $\leftrightarrow$ Nirvana Supreme God).
   - **The Legendary Trio**: Jin Mori, Han Daewi (Jade Emperor Wisdom & Kyokushin Karate), and Yoo Mira (Moonlight Sword Master & Witch of the West).
   - **Martial Arts vs Charyeok (Borrowed Power)**: Complete dossier on Renewal Taekwondo, Kyokushin Karate, Moonlight Sword, Nabong Needle Clinic vs Gods' Charyeok (Haetae, Lu Bu, Tam, Longinus).
   - **Divine Weapons & Relics**: Yeoui (Ruyi Jingu Bang), Yongpyo (Dragon Armor), Geundoowun (Kinto-Un), Sage's Cane, and The Gourd.
   - **Cosmic Antagonists & The Six**: Park Mujin / Maitreya, Tathagata, Satan 666, Okhwang (Jade Emperor), and The Six masters.
   - **Chronicles of the Universe**: 5-Stage interactive story timeline spanning the entire 570+ chapters.
2. **Strict Color Fidelity (No Deviation from Repo)**:
   - Primary Glassmorphic Fill: `rgba(230, 160, 10, 0.4)` to `rgba(255, 174, 0, 0.7)` (warm amber / golden orange).
   - Accent Borders: `#ffe75e` / `#f1f1f1` (warm gold / frosted white 3px borders).
   - Deep Accent Text & Badges: `rgb(226, 98, 13)` (burnt orange-amber).
   - Warm Text Highlights: `rgb(248, 236, 213)` (cream parchment gold) & pure white `#ffffff`.
   - Backdrop: `url(mori.jpg); filter: blur(4px);` with dark atmospheric overlay.
3. **Authentic Manga Style Typography**:
   - Header & Manga Burst Fonts: **Shojumaru**, **Bangers**, and **Permanent Marker** (action manhwa brush lettering).
   - Body Text: **Outfit** / **Inter** with stylized letter spacing, comic badges, and manhwa callout boxes.
4. **Targeted Image Generation**:
   - Preserve and feature all existing assets (`mori.jpg`, `morr.png`, `sun.png`, `chibi.png`, `jin.png`, `team2.png`, `GOH.png`, `logo.png`).
   - Use the `image-generator` subagent to generate authentic manhwa-style companion artwork for **Han Daewi**, **Yoo Mira**, and **Yeoui Divine Staff** to make the roster visually complete.

---

## 2. Technical Stack & Architecture

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`.tsx`, `.ts`)
- **Build Tool**: Vite 6+
- **Styling**: Tailwind CSS with custom repo glass colors (`bg-goh-glass`, `border-goh-gold`, `text-goh-amber`)
- **Animation**: `framer-motion` for character aura flares, stat bar morphing, and card transitions
- **Icons**: `lucide-react`
- **Typography Integration**: Google Fonts (`Shojumaru`, `Bangers`, `Permanent Marker`, `Outfit`)

### Project Directory Layout
```
c:\Users\DELL\Downloads\FAN-PAGE\
├── public/
│   ├── assets/
│   │   ├── mori.jpg           # Background artwork (original)
│   │   ├── morr.png           # Mori Jin character cutout (original)
│   │   ├── sun.png            # Sun Wukong divine mode cutout (original)
│   │   ├── chibi.png          # Chibi Mori illustration (original)
│   │   ├── jin.png            # Master Jin Taejin artwork (original)
│   │   ├── team2.png          # GOH squad artwork (original)
│   │   ├── GOH.png            # God of High School logo (original)
│   │   ├── logo.png           # Accent crest (original)
│   │   ├── daewi.png          # Han Daewi artwork (generated)
│   │   ├── mira.png           # Yoo Mira artwork (generated)
│   │   └── yeoui.png          # Yeoui divine staff artwork (generated)
│   ├── favicon.ico
│   └── audio/
│       └── ambient.mp3
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GlassNavbar.tsx       # Amber-tinted glass dock with nav links & audio control
│   │   │   ├── SectionIndicator.tsx  # Vertical right-side golden dot navigation
│   │   │   └── AudioPlayer.tsx       # Ambient audio toggle with animated equalizer wave
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Universe Overview, Mori mode toggle, titles, badges
│   │   │   ├── TrioSection.tsx       # The Legendary Trio (Mori, Daewi, Mira) & The Six
│   │   │   ├── CombatSection.tsx     # Animated Combat Stats, Martial Arts vs Charyeok
│   │   │   ├── ArsenalSection.tsx    # Divine Weapons (Yeoui, Yongpyo, Geundoowun, Gourd)
│   │   │   ├── StorySection.tsx      # 5-Arc Manhwa Chronicle & Epic Battles
│   │   │   └── TributeSection.tsx    # Master Jin memorial, Yongje Park tribute, fan credits
│   │   └── ui/
│   │       ├── GlassCard.tsx         # Signature repo glass panel (rgba(230,160,10,0.4), #ffe75e)
│   │       ├── StatBar.tsx           # Golden animated progress bar
│   │       ├── ModeToggle.tsx        # Mori Jin vs Sun Wukong dual-state switch
│   │       └── MangaBadge.tsx        # Comic burst badge component
│   ├── context/
│   │   └── CharacterModeContext.tsx  # Mode state ('mori' | 'wukong') with golden aura presets
│   ├── data/
│   │   ├── universeData.ts           # Overview, The Trio, The Six, Gods & Antagonists
│   │   ├── combatData.ts             # Stats, Renewal Taekwondo, Charyeok powers
│   │   ├── arsenalData.ts            # Divine relics, weapon specs
│   │   └── storyData.ts              # 5 major saga arcs, quotes, battles
│   ├── types/
│   │   └── index.ts                  # TypeScript models
│   ├── App.tsx                       # Main snap layout & section orchestrator
│   ├── index.css                     # Tailwind setup, repo colors, glassmorphic filters
│   └── main.tsx
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-10-24-goh-fanpage-redesign-design.md
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Strict Color Palette Definition

All components must draw from this exact palette matching `glassmorphin/style*.css`:

| Token | Hex / RGBA | Role in Fan Page |
|---|---|---|
| `goh-glass-base` | `rgba(230, 160, 10, 0.40)` | Primary container glass surface |
| `goh-glass-intense` | `rgba(255, 174, 0, 0.70)` | Active card & highlight panel surface |
| `goh-glass-subtle` | `rgba(255, 241, 42, 0.35)` | Nested cards & badges |
| `goh-border-gold` | `#ffe75e` | 3px primary golden border |
| `goh-border-white` | `#f1f1f1` | 3px frosted white border |
| `goh-amber` | `rgb(226, 98, 13)` (`#e2620d`) | Action titles, badges, and accents |
| `goh-cream` | `rgb(248, 236, 213)` (`#f8ecd5`) | Hover states and subtitles |
| `goh-white` | `#ffffff` / `#f1f1f1` | Crisp high-contrast body text |
| `goh-bg-blur` | `blur(4px)` over `mori.jpg` | Canonical backdrop styling |

---

## 4. Full Universe Sections Specification

### 4.1 Universe & Hero Stage (`#overview`)
- **Backdrop**: Classic `mori.jpg` with `blur(4px)` and amber vignette overlay.
- **Title**: Action Manga Typography: **THE GOD OF HIGH SCHOOL** / **SUN WUKONG • JIN MORI**.
- **Interactive Form Switcher**:
  - *Mortal Mori*: High School Renewal Taekwondo contender, human stats, amber/gold glow.
  - *Awakened Sun Wukong*: The Great Sage Heaven's Equal, blazing solar aura, infinity metrics.
- **Universe Tagline**: *"From a high school street brawl to the clash of Gods and Nirvana — The Battle for the Cosmos."*
- **Quick Links**: Jump to Trio, Martial Arts, Divine Arsenal, Story Chronicles, and Tribute.

### 4.2 The Legendary Trio & Universe Legends (`#trio`)
- **The Main Trio**:
  1. **Jin Mori**: The Supreme God / Monkey King. Renewal Taekwondo & divine gear.
  2. **Han Daewi**: Successor to the Jade Emperor. Kyokushin Karate & Four Fundamental Universal Forces (Gravity, Electromagnetism, Strong/Weak nuclear forces).
  3. **Yoo Mira**: 25th Master of Moonlight Sword Style, Witch of the West, Jade Emperor physical heir.
- **The Six & Mentors**:
  - Master **Jin Taejin** (Creator of Renewal Taekwondo).
  - Park Mujin, Kim Doo-Sik, Na Bong-Chim (Acupuncture God), Seo Han-Ryang, Jeon Jae-San, Park Il-Pyo (Nine-Tails Guardian).
- **The Gods & Antagonists**:
  - Tathagata, Satan 666, Okhwang (Jade Emperor), Ultio R, Taek Jegal.

### 4.3 Combat Systems: Martial Arts vs Charyeok (`#combat`)
- **Animated Combat Stats**:
  - Dynamic comparison bars for Strength, Speed, Battle IQ, Endurance, and Luck.
  - Morphs in real-time when switching between Mori Jin (Mortal) and Sun Wukong (Divine).
- **Genuine Martial Arts**:
  - *Renewal Taekwondo*: 3-Stage Hoechook, Blue Dragon Kick, Dragon Catcher, Bo-Bup.
  - *Recoilless Taekwondo*: Eliminating kinetic waste for devastating cosmic impact.
  - *Nabong Needle Ryu*: Limiter Removal (2x to 250,000x multiplier), Blood Sealing.
  - *Moonlight Sword Style*: Yoo Family secret lethal swordsmanship.
  - *Kyokushin Karate & Four Guardian Gods*: Dance of the Four Gods.
- **Borrowed Power (Charyeok)**:
  - Explanation of contracts between humans and gods, Taboo removal, Haetae, Lu Bu, Tam, Longinus.

### 4.4 Divine Arsenal & Relics (`#arsenal`)
- **Interactive Relic Cards**:
  1. **Yeoui (Ruyi Jingu Bang)**: Mental command size/weight manipulation, planetary reach, 19 Dragon Kings infusion.
  2. **Yongpyo (Dragon Armor)**: Sentient armor by Hephaestus, Speed and Power modes, impervious durability.
  3. **Geundoowun (Nimbus Cloud)**: Weather command, supercharged divine thunderbolts.
  4. **The Gourd & Loop of Binding**: Entity sealing and power stabilization.

### 4.5 The 5-Stage Story Chronicle (`#story`)
- **Stage 1: The Seoul GOH Tournament**: The battle for the wish, meeting Daewi & Mira, defeating Taek Jegal, Charyeok awakening.
- **Stage 2: The Sage Realm**: Journey to the realm of monsters, recovering Monkey King memories, unsealing Yeoui from the Moon.
- **Stage 3: Ragnarök (The Heavenly War)**: The invasion of the Gods, Jin Taejin's heroic sacrifice, Mori clashing against the First Heavenly Realm.
- **Stage 4: The 17-Year Timeskip & Dan Mori**: The weakened underdog, adopting Dan Ahan, mastering Recoilless Taekwondo.
- **Stage 5: Nirvana & Cosmic Climax**: The final clash against Maitreya Park Mujin and Tathagata, ascending to the ultimate Buddha.

### 4.6 Memorial, Creator Tribute & Community (`#tribute`)
- **Master Jin Taejin Memorial**: Dedicated homage with `jin.png` artwork and his immortal words: *"Do what you want, that's what Renewal Taekwondo is about."*
- **Yongje Park Tribute**: Honoring 11 years of non-stop action manhwa storytelling.
- **Artwork Gallery**: Showcasing `team2.png`, `chibi.png`, `GOH.png`, and `logo.png`.
- **Fan Credits & Contact**: Original author contact (`qaasimkids6@gmail.com`), GitHub repository link, and share button.

---

## 5. Verification Plan

1. **Color Conformance Check**: Verify that all glass surfaces, borders, and text accents strictly implement `rgba(230, 160, 10, 0.4)`, `#ffe75e`, `#f1f1f1`, `rgb(226, 98, 13)`, and `rgb(248, 236, 213)`.
2. **TypeScript & Build Check**: `npx tsc --noEmit` and `npm run build` execute cleanly with zero errors.
3. **Manga Typography Check**: Confirm Google Fonts `Shojumaru`, `Bangers`, and `Permanent Marker` render with authentic manhwa display impact.
4. **Interactive Validation**: Mode switcher, audio controls, stat morphing, and all universe sections tested and responsive across mobile, tablet, and widescreen.
