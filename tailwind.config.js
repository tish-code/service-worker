/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "DM Sans", "Inter", "sans-serif"],
      large: ["DM Sans", "Inter"],
    },
    extend: {
      backgroundImage: {
        "hero-small": "url('/src/assets/hero-solar-small.jpg')",
        "hero-large": "url('/src/assets/hero-solar-large.jpg')",
      },
      backgroundColor: {
        primary: "#0a50c9",
      },
      textColor: {
        primary: "#fafafc",
        secondary: "#0a50c9",
      },
    },
  },
  plugins: [],
};
