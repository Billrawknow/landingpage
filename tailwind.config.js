/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      },
    },
    extend: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px', 
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    backgroundImage: {
      hero: 'url(/assests/hero/bg.jpg)',
      hero: 'url(/assests/grid.png)',
    },
    extend: {
      colors: {
        primary:{
          DEFAULT: '#292F36',
          hover: '#343e4a',
        } ,
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
        },
      },
    },
  },
  plugins: [],
}