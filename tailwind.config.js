/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        custom: 'rgba(255, 255, 255, 0.1)',  
        grey: 'rgb(113, 118, 123)',        
        shade: 'rgb(32, 35, 39)',
        border: 'rgb(47, 51, 54)',
        opacity: 'rgba(0,0,0,0.2)',
        happen: 'rgb(113, 118, 123)',
        newblue: 'rgb(29, 155, 240)'
      },
      width: {
        customWidth:'88%',
      },
      height: {
        infinite: '100000px'
      },
      screens: {
        xs: '500px'
      }
    },
  },
  plugins: [],
}




