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
  },
  plugins: [],
};
