/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "15rem",
      },
      rotate: {
        29: "-29deg",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(-360deg)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        rotation: "rotation 6s linear infinite",
        text: "text 5s ease infinite",
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
