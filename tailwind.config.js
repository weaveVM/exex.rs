/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'dark-background': '#1a1a1a',
        'dark-card': '#2a2a2a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
