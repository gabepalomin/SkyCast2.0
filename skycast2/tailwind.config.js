/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        29: "-29deg",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        rotation: "rotation 6s linear infinite",
      },
      backdropBlur: {
        xs: "1px",
      },
      colors: {
        blur: "rgba(217, 217, 217, 0.27)",
        page: "#1f3c74",
        desc: "#4285f4",
      },
      fontFamily: {
        Orbitron: ["Orbitron"],
      },
    },
  },
  plugins: [],
};
