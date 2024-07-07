/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-top": "url(/src/images/bg-top.svg)",
        "bg-bottom": "url(/src/images/bg-bottom.svg)",
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
        "border-focus": "#696fdd",
      },

      textColor: {
        "link-text-color": "#696fdd",
        "text-main-color": "#494c5f",
        "secondary-color": "#6d708d",
      },
    },
  },
  plugins: [],
};
