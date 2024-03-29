//import withMT from "@material-tailwind/react/utils/withMT";

const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */

const colors = require('./src/configs/colors');

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.greenDark,
        secondary: colors.greenLime,
        tertiary: colors.greenPastel,
        greenPastelLight: colors.greenPastelLight,
        white: colors.white,
        linkedin: colors.linkedin,
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Congenial Black', 'serif'],
        custom: ['Amaranth', 'serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss")
  ],
})