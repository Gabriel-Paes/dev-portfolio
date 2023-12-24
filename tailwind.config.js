/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "fira-code": ["Fira Code"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: colors.slate[900],
        primary: "#02ee25",
      },
      backgroundImage: {
        "gradient-blue-pink": "linear-gradient(to right, #3490dc, #f6993f)",
        "gradient-blue-green":
          "linear-gradient(40deg, rgba(15,23,42,1) 15%, rgba(24,9,121,1) 66%, rgba(2,238,37,1) 100%)",
        "gradient-purple-green": "linear-gradient(to left, #805ad5, #4a90e2)",
      },
    },
  },
  plugins: [],
};
