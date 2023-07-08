/** @type {import('tailwindcss').Config} */

const colors = require('./src/configs/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.greenDark,
        secondary: colors.greenLime,
        tertiary: colors.greenPastel,
        white: colors.white,
      }
    },
  },
  plugins: [],
}
