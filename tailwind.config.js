/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./public/*.html"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grey: {
        light: '#EDEDED',
        default: '#E2E2E2',
        dark: '#999999',
        darkest: '#5B5A5F'
      },
      black: '#000000',
      white: '#FFFFFF',
      blue: {
        default: '#022754',
        dark: '#001428'
      },
      red: {
        light: '#F26879',
        default: '#AF121E'
      },
      green:{
        light: '#A7CEA7',
        default: '#447F44',
        whatsapp: '#128c7e'
      }
    },
    extend: {
      fontFamily : {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
