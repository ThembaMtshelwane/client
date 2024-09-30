/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b213b",
        secondary: "#2084c4",
        tertiary: "#0f2c4f",
      },
      fontFamily: {
        robotoMono: "Roboto Mono",
      },
    },
  },
  plugins: [],
};
