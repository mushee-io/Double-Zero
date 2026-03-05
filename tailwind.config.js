/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        musheeOrange: "#ff6a00",
        musheeCream: "#f5efe6",
        musheeBrown: "#7a4a2c",
        musheeInk: "#121212"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0,0,0,0.08)",
        glow: "0 0 0 1px rgba(255,106,0,0.20), 0 18px 50px rgba(255,106,0,0.15)"
      }
    },
  },
  plugins: [],
};
