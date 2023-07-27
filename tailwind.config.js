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
        white: colors.white,
      }
    },
  },
  plugins: [require("tailwindcss")],
})
