const colors = require("tailwindcss/colors");

// let heroDesktop = require("./public/img/xl-hero-desktop_2021.webp");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "799px" },
      sm: { max: "639px" },
    },
    colors: {
      
      primary: {
        100: "#f1f8f6",
        200 : "#d4e9e2",
        300 : "#008248",
        400 : "#1e3932",
      },
      secondry:{
        yellowShade: "#f3f1e7",
        black: colors.black,
        gray: colors.trueGray,
        white: colors.white,
      }
    },
    extend: {
      backgroundImage: (theme) => ({
        // "hero-desktop": "url('../public/img/xl-hero-desktop_2021.webp')",
        "hero-desktop": "url('img/xl-hero-desktop_2021.webp')",

      }),
      fontFamily:{
        Sans: " 'Helvetica Neue', Helvetica, Arial, sans-serif"
      },
      backgroundPosition: {
        "1/2": "50%",
        "2/2.5": "40% 100%",
      },

      backgroundSize: {
        "auto-100%": "auto 100%",
        "auto-50%": "auto 50%",
      },

      padding: {
        "1/5": "20%",
        full: "100%",
      },

      maxWidth: {
        "8xl": "90rem",
        7.5: "30rem",
        4.75: "19rem",
        4.125: "16.5rem",
      },

      minWidth: {
        "1/6": "16.66%",
      },

      width: {
        "1/6": "16.66%",
      },

      margin: {
        38: "9.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
