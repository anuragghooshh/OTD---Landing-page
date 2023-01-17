/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#283FB6",
        myWhite: "#ffffff",
        myBlack: "#0B0B0B",
        myWhiteT : "rgba(255, 255, 255, 0.953)"
      },
      fontFamily: {
        inter: ["Inter"],
        oxygen: ["Oxygen"],
      },
      width: {
        fullvw: "100vw",
        image: "26rem",
        imagesm : "30rem",
        navWidth: "50vw",
      },
      height: {
        fullvh: "100vh",
      },
      padding: {
        mobile: "80px 20px",
        tablet: "80px 50px",
        desktop: "80px 70px",
      },
      backgroundImage:{
        grids : "url('../resources/grid.png')"
      }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
