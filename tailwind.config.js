/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0c',
        'bg-raised': '#111114',
        line: '#232327',
        text: '#f2f0ec',
        'text-dim': '#8d8d94',
        cyan: {
          DEFAULT: '#4ee1d6',
        },
        violet: {
          DEFAULT: '#a855f7',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        eyebrow: '0.72rem',
      },
      letterSpacing: {
        eyebrow: '0.3em',
        nav: '0.08em',
      },
    },
  },
  plugins: [],
}