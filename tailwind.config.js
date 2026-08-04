/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F172A',
        'bg-secondary': '#090D16',
        'bg-glass': 'rgba(30, 41, 59, 0.6)',
        'border-glass': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'color-primary': '#06B6D4',
        'accent-glow': 'rgba(6, 182, 212, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
        'gradient-hover': 'linear-gradient(135deg, #0891B2 0%, #059669 100%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        'nav-height': '80px',
      }
    },
  },
  plugins: [],
}
