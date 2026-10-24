# 🥋 The God of High School — Mori Jin Fan Page

A cinematic, modern web fan page dedicated to **Jin Mori / Sun Wukong** from the legendary manhwa and anime series ***The God of High School*** (authored by Yongje Park).

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, maintaining the exact glassmorphic aesthetic, golden amber color identity, and centered card layout of the original project.

---

## ✨ Features

* **Centered Glassmorphic Stage (`.page`)**:
  * Floating `89%` viewport glass card with `3px solid #f1f1f1` borders, `border-radius: 7px`, and translucent golden amber fill (`rgba(230, 160, 10, 0.40)`).
  * Layered over the iconic blurred background image (`mori.jpg`) with `filter: blur(4px)`.
* **Vertical Right Navigation (`.nav`)**:
  * `overview` • `about` • `story` • `extra`
  * Signature hover slide animation (`margin-left: 10px`) with warm golden cream highlight (`#f8ecd5`).
* **Text-Shadow Depth & Emphasis (No Heavy Background Boxes)**:
  * Pure text floating seamlessly on the glass surface.
  * Hierarchical depth achieved through deep manga text shadows (`drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)]`) and golden title glows.
* **The 4 Canonical Views**:
  * **`overview`**: Large **SUN WUKONG** / `mori jin` display header, centered standing character cutout (`morr.png` / `sun.png`), form toggle, and the 5 accolades list.
  * **`about`**: Profile Basics (Age, Nationality, Occupation, Hobbies), Sun Wukong Stats vs Jin Mori Stats, and character Relationships (Master Jin Taejin, Dan Ahan, Park Taejin, Uma) with `chibi.png` & `sun.png` art.
  * **`story`**: Smooth auto-scrolling narrative of Jin Mori's journey with the `GOH.png` logo and interactive pause/resume controls.
  * **`extra`**: The God of High School title, `logo.png`, creator appreciation message, `team2.png`, the **Master JIN** memorial with `jin.png`, and creator contact info.
* **Ambient Sound Controller**:
  * Toggleable ambient theme audio in the corner with visual equalizer feedback and Web Audio API synthesizer fallback.

---

## 🛠️ Tech Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Google Fonts (*Shojumaru*, *Bangers*, *Permanent Marker*, *Outfit*)

---

## 📁 Project Structure

```
FAN-PAGE/
├── public/
│   └── assets/              # Canonical anime & manhwa artwork
│       ├── chibi.png        # Chibi Mori
│       ├── GOH.png          # God of High School logo
│       ├── jin.png          # Master Jin Taejin
│       ├── logo.png         # Crest emblem
│       ├── mori.jpg         # Full background wallpaper
│       ├── morr.png         # Mori Jin standing cutout
│       ├── sun.png          # Sun Wukong divine cutout
│       └── team2.png        # GOH Seoul squad
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── AudioPlayer.tsx    # Ambient sound controller
│   │   └── views/
│   │       ├── OverviewView.tsx   # Overview & character accolades
│   │       ├── AboutView.tsx      # Profile basics, stats & relationships
│   │       ├── StoryView.tsx      # Auto-scrolling manhwa narrative
│   │       └── ExtraView.tsx      # Tribute & creator thanks
│   ├── App.tsx                    # Centered glass frame & right nav
│   ├── index.css                  # Tailwind imports & scrollbar styles
│   └── main.tsx                   # React root mount
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* `npm` (or `pnpm` / `yarn`)

### Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Alqaasimee-jr2/GOH-fanpage.git
   cd GOH-fanpage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📜 Credits & Acknowledgments

* **The God of High School** is created and authored by **Yongje Park** / **WEBTOON** / **Naver**.
* Fanmade tribute created by **Qaasim-Falade Abdullah** ([qaasimkids6@gmail.com](mailto:qaasimkids6@gmail.com)).
