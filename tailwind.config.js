/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#17233f",
        blush: "#e9b7b8",
        rose: "#b96f78",
        cream: "#fbf6ef",
        champagne: "#f4e6d8",
        ink: "#1f2634",
        mist: "#f8eef0"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 35, 63, 0.12)",
        glow: "0 18px 45px rgba(185, 111, 120, 0.18)"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
