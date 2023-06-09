/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'xs': '576px',
      'sm': '767px',
      'md': '991px',
      'lg': '1140px',
      'xl': '1376px',
      '2xl': '1440px'
    },
    fontFamily: {
      heebo: ['Heebo', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#5EB700',
        'secondary': '#FF7C00',
        'heading': '#33414F',
        'body': '#485868',
        'lightGreen': 'rgba(180, 213, 146, 0.2)',
        'grey': '#F0F0F4',
        'disabled': '#A5A5AA'
      },
      gridTemplateColumns: {
        'details': '1fr 434px',
      },
      gridTemplateRows:{
        'modal': 'auto auto 1fr auto',
      }
    },
  },
  plugins: [],
}

