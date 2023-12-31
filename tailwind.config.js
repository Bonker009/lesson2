/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screen: {
        widescreen: { raw: "(min-aspect-ratio : 3/2)" },
        tailscreen: { raw: "(min-aspect-ratio: 14/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transfrom: "scaleY(0)" },
          "80%": { transfrom: "scaleY(1.2)" },
          "100%": { transfrom: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
