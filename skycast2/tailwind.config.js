/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      maxWidth: {
        xxs: "15rem",
      },
      fontSize: {
        xxs: "0.7rem",
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
        search: "rgba(32, 50, 97, 0.2)",
        button: "rgba(255, 255, 255, 0.5)",
        hover: "rgba(255,255,255)",
        loading: "rgba(46, 41, 41, 0.27)",
      },
      fontFamily: {
        Orbitron: ["Orbitron"],
      },
    },
  },
  plugins: [],
};
