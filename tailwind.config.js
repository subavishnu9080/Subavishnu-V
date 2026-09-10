/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08090d',
          card: '#0f111a',
          lighter: '#171b2c',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.25)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.25)',
      }
    },
  },
  plugins: [],
}
