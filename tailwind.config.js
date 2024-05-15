/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-orange": "#f18701",
        "greyish-black": "#1a1a1a",
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
        newsletter: "url('/src/assets/images/newMag.png')",
        // "grid-one": "url('/src/assets/images/1stgridmobile.png')",
        // "grid-two": "url('/src/assets/images/2ndgridmobile.png')",
        // "grid-three": "url('/src/assets/images/3rdgridmobile.png')",
        // "grid-four": "url('/src/assets/images/4thgridmobile.png')",
        // "grid-five": "url('/src/assets/images/5thgridmobile.png')",
      },
    },
  },
  plugins: [],
};
