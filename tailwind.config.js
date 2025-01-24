/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-primary" : "#090F08",
        "my-secondery" : "#0FD844",
        "my-primary-dark" : "#141414",
        "preloader" : "linear-gradient(50%,#0FD844,100%, #090F08)" 
      },
      padding: {
        "main-padding" : "50px 20px"
      },
      height: {
        "hero" : "calc(100vh - 93px)"
      },
      fontFamily: {
        "poppins" : '"Poppins", serif',
      },
      boxShadow: {
        "myshadow" : "1px 1px 15px 5px #0FD844",
        "btnshadow" : "0px 0px 8px 1px #0FD844"
      },
      animation: {
        spinSlow: 'spin 1.5s linear infinite',
        spinReverse: 'spin-reverse 1s linear infinite', 
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}

