/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-orange": "#f18701",
      },
      fontFamily: {
        ussf: ["'USSF 90 Minutes Display'"],
        inter: ["Inter"],
        montserrat: ["Montserrat"],
        oswald: ["Oswald"],
        digital: ["Digital"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero.png')",
      },
    },
  },
  plugins: [],
};
