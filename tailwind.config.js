/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f1f9f2",
          100: "#dcefdf",
          200: "#bbdfc2",
          300: "#8fc99b",
          400: "#5eab70",
          500: "#3d8f4f",
          600: "#2f9e44",
          700: "#256637",
          800: "#20512e",
          900: "#1b4227",
        },
        soil: {
          50: "#f7f4f1",
          100: "#ece4dc",
          500: "#7a5a44",
          700: "#4f3a2c",
          900: "#2e211a",
        },
      },
    },
  },
  plugins: [],
};
