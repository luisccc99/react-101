/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#2B283A',
        'cultured': '#F5F5F5',
        'light-malachite-green': '#59E391',
        'han-purple': '#5035FF',
        'independence': '#4A4E74',
        'maastritch-blue': '#0B2434'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'karla': ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}
