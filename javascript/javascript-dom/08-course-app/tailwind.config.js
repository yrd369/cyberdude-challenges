/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/js/main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rale: "Raleway",
      },
      colors: {
        primary: "#2d3250",
        seondary:"#424769",
        button:"#f9b17a",
        additional:"#676f9d"
      },
    },
  },
  plugins: [],
};
