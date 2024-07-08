/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-background":
          "url(assets/bg-top.svg),url(assets/bg-bottom.svg)" /*top pattern - bottom pattern*/,
      },

      backgroundPosition: {
        "pattern-position":
          "top -25px right -150px,bottom left" /*bg top - bg bottom*/,
        "pattern-position-default":
          "top right,bottom left" /*bg top - bg bottom*/,
      },

      backgroundSize: {
        "pattern-size": "80%,auto",
      },

      fontFamily: {
        "montserrat-font": ["Montserrat", "monospace"],
      },

      backgroundColor: {
        "body-bg-color": "#f7f7ff",
        "primary-bg-color": "#696fdd",
        "interative-hover-bg": "#c6c7f3",
      },

      gradientColorStops: {
        "top-left-gradient": "#a3a8f0",
        "bottom-right-gradient": "#696fdd",
        "interative-hover-bg": "#c6c7f3",
      },

      /* colors: {
        "link-text-color": "#696fdd",
        "border-color": "#e3e3e3",
        "text-main-color": "#494c5f",
        "secondary-color": "#6d708d",
      }, */

      ringColor: {
        "border-hover-color": "#696fdd",
      },

      borderColor: {
        "border-color": "#e3e3e3",
        "professional-border": "#a0a5f9",
        "border-toggle-focus": "#696fdd",
      },

      textColor: {
        "link-text-color": "#696fdd",
        "text-main-color": "#494c5f",
        "secondary-color": "#6d708d",
      },

      //media queries breakpoints
      screens: {
        tablet: "40rem",
        desktop: "64rem",
      },
    },
  },
  plugins: [],
};
