/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#6366F1',
          500: '#6366F1',
          600: '#4F46E5',
        },
        blue: {
          DEFAULT: '#3B82F6',
          500: '#3B82F6',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          500: '#8B5CF6',
        },
        coral: {
          DEFAULT: '#F97316',
          500: '#F97316',
        },
        dark: {
          DEFAULT: '#0F172A',
          900: '#0F172A',
          800: '#1E293B',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'mesh-gradient': 'meshGradient 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'draw-line': 'drawLine 1s ease-out forwards',
        'dot-flow': 'dotFlow 2s linear infinite',
      },
      keyframes: {
        meshGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        dotFlow: {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
      },
    },
  },
  plugins: [],
}
