/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9FC131",
        secondary: "#DBF227",
        tertiary: "#23252A",
        light:"#D6D58E",
        highlight:"#ECEBC4"
      },
    },
  },
  plugins: [],
};
