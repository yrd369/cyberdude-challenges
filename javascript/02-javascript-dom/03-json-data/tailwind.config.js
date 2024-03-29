/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js", "./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
