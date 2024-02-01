/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: "Noto Sans",
      },
      colors: {
        primary: "#030637",
      },
    },
  },
  plugins: [],
};
