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
