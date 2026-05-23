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
        navy: "#1e3028",
        blush: "#d4b48c",
        rose: "#a0624a",
        cream: "#f7f0e6",
        champagne: "#e8d5b0",
        ink: "#2a1f14",
        mist: "#ede8df"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(30, 48, 40, 0.12)",
        glow: "0 18px 45px rgba(160, 98, 74, 0.18)"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
