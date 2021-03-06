const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    // fontFamily: {
    //   'Lato': ['Lato', 'sans-serif' ],
    //  },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "799px" },
      sm: { max: "639px" },
    },

    colors: {
      yellow: colors.yellow,
      blue: colors.blue,
      black: colors.black,
      gray: colors.trueGray,
      white: colors.white,
      red : colors.red,
      primary: {
        lightestShade: "#f1f8f6",
        lightShade: "#d4e9e2",
        darkShade: "#047857",
        darkerShade: "#008248",
        darkestShade: "#1e3932",
      },
    },

    extend: {
      backgroundImage: (theme) => ({
        "hero-desktop": "url('./img/xl-hero-desktop_2021.webp')",
      }),

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
