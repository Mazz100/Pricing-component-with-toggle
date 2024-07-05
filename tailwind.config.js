/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      "body-bg-color": "#f7f7ff",
    },

    gradientColorStops: {
      "top-left-gradient": "#a3a8f0",
      "bottom-right-gradient": "#696fdd",
    },

    colors: {
      "link-text-color": "#696fdd",
      "border-color": "#e3e3e3",
      "text-main-color": "#494c5f",
      "secondary-color": "#6d708d",
    },

    extend: {
      backgroundImage: {
        "bg-top": "url(./src/images/bg-top.svg)",
        "bg-bottom": "url(./src/images/bg-bottom.svg)",
      },

      fontFamily: {
        "montserrat-font": ["Montserrat", "monospace"],
      },
    },
  },
  plugins: [],
};
