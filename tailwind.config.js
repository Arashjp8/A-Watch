/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, jsx, ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#439cee",
      },
    },
    screens: {
      xxs: "100px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ssm: "860px",
      md: "1060px",
      lg: "1200px",
      sxl: "1450px",
      xl: "1700px",
    },
  },
  plugins: [],
};
