import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        doritos: {
          red: '#E31837',
          orange: '#FF6B00',
          yellow: '#FFD700',
          dark: '#1A0A00',
          darkred: '#8B0000',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Impact', 'Arial Black', 'sans-serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-15deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-10deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 107, 0, 0.9)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
