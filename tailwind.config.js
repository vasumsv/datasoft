/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        sand: '#E8DED2',
        gold: {
          50: '#FFF9E6',
          100: '#FFEFC2',
          200: '#FFE599',
          300: '#FFD966',
          400: '#FFCD3D',
          500: '#FFC107',
          600: '#F5B800',
          700: '#E6A800',
          800: '#D69800',
          900: '#C68900',
        },
        bronze: {
          500: '#CD7F32',
          600: '#B87333',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(205, 127, 50, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(205, 127, 50, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
