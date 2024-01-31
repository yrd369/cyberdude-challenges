/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#F56539",
        additional: "#613528",
      },
      fontFamily: {
        poppins: "Poppins",
        cursive: "Cedarville Cursive",
      },
    },
  },
  plugins: [],
};
