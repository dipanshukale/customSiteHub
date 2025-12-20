/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Line width expansion
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '7rem' }, // w-28 equivalent
        },
        // Fade + slide animation
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        // Shimmer animation for gradient line
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Optional pulse for soft glowing effect
        pulseSlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        expand: 'expand 1.2s ease-out forwards',
        fadeSlide: 'fadeSlide 1s ease-out forwards',
        shimmer: 'shimmer 1.5s linear infinite',
        pulseSlow: 'pulseSlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
