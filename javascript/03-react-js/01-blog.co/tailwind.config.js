/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43766C",
        secondary: "#F8FAE5",
        additional: "#B19470",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        Viga: ["Viga", "sans-serif"],
        Poor: ["Poor ", "system-ui"],
      },
    },
  },
  plugins: [],
};
