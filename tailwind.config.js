/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: colors.slate[900],
      primary: "#02ee25",
    },
    fontFamily: {
      "fira-code": ["Fira Code"],
    },
    extend: {},
  },
  plugins: [],
};
