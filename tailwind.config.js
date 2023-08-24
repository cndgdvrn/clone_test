/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "getir-purple": "#4c3398",
        "getir-logo-bg": "#5D3EBC",
        "flag-border" : "#C9C9C9",
        "getir-yellow":"#FFD300",
        "mobile-app-bg":"#FAFAFA"
      },
    },
  },
  plugins: [],
};
