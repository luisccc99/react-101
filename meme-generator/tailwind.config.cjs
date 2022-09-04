/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#8a2846',
        'primary-container': '#ffd9df',
        'on-primary-container': '#3f0017',
        'secondary': '#ab888e',
        'tertiary': '#b28960',
        'background': '#fffbff'
      },
      fontFamily: {
        'kanit': ['kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
