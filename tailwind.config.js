/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B4B4B',
        secondary: '#ffe5f6',
        accented: '#f5cde7'
      },
      fontFamily: {
        body: ['Quicksand']
      },
      
    },
    screens: {
      'xs': {'min': '300px', 'max': '766px'},

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'med': {'max': '768px'},

      'medd': {'min': '883px'},

      'l': {'min': '1024px', 'max': '1278px'},

      'lg': {'min': '1024px', 'max': '2500px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
