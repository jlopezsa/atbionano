//import withMT from "@material-tailwind/react/utils/withMT";

const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */

const colors = require("./src/configs/colors")

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Congenial Black", "serif"],
        custom: ["Amaranth", "serif"],
      },
      // https://www.cssgradienttext.com/
      backgroundImage: {
        "gradient-text": "linear-gradient(135deg, #C0382B, #2ECC70)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scroll-rtl": "infinite-scroll-rtl 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-rtl": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss")],
})
