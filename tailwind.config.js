/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      height: {
        heightWithoutNavbar: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
