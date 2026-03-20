/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#060b16',
          deeper: '#050913',
          surface: '#081223',
          card: '#0a1628',
        },
        accent: {
          blue: '#2d7bff',
          cyan: '#00d4ff',
          silver: '#c0c8d4',
          ice: '#e0f0ff',
        },
        midnight: {
          navy: '#0f1d3a',
          black: '#1a1a2e',
        },
      },
      fontFamily: {
        display: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        micro: '0.2em',
        wide: '0.1em',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
