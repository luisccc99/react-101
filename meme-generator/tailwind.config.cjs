/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-green': '#caefd7',
        'green': '#82cf9d',
        'light-pink': '#f5bfd7',
        'light-blue': '#abc9e9'
      },
    },
  },
  plugins: [],
}
