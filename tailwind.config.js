/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","thankyou.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        "custom-bg": "#FAFAFA",
        primary: "#6366F1",
        "primary-dark": "#4F46E5",
        secondary: "#4B5563",
        dark: "#0A0A0A",
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
