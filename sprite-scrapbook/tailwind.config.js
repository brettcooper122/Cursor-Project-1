/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#32CD32',    // vibrant green
        secondary: '#FF69B4',  // hot pink
        accent: '#00BFFF',     // bright blue
        paper: '#FFF8DC',      // cream for scrapbook notes
        background: '#FFFFFF', // clean white
      },
      animation: {
        'fast': 'var(--animation-fast)',
        'medium': 'var(--animation-medium)',
        'slow': 'var(--animation-slow)',
      },
      spacing: {
        'nav-height': 'var(--nav-height)',
        'drawer-width': 'var(--drawer-width)',
        'sprite-size': 'var(--sprite-size)',
      },
      fontFamily: {
        'retro': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}
