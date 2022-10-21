/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashgrotesk: ["Clash Grotesk", "sans-serif"],
        clashdisplay: ["Clash Display", "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
