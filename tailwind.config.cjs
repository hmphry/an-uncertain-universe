/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue"
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': {
        DEFAULT: '#3A3335',
        '50': '#D3CCCE',
        '100': '#C9C2C4',
        '200': '#B6ACAF',
        '300': '#A3969A',
        '400': '#908085',
        '500': '#7B6C71',
        '600': '#65595D',
        '700': '#504649',
        '800': '#3A3335',
        '900': '#1C191A'
      },
      'blue': {
        DEFAULT: '#6FA4BF',
        '50': '#EEF4F7',
        '100': '#E0EBF1',
        '200': '#C4DAE5',
        '300': '#A7C8D8',
        '400': '#8BB6CC',
        '500': '#6FA4BF',
        '600': '#4C8AAA',
        '700': '#3A6B83',
        '800': '#294B5D',
        '900': '#182C36'
      },
      'green': {
        DEFAULT: '#5AA86A',
        '50': '#D2E7D7',
        '100': '#C5E0CA',
        '200': '#AAD2B2',
        '300': '#8FC49A',
        '400': '#75B682',
        '500': '#5AA86A',
        '600': '#468453',
        '700': '#325F3C',
        '800': '#1F3B25',
        '900': '#0C160E'
      },
      'red': {
        DEFAULT: '#EB5E55',
        '50': '#FAD7D5',
        '100': '#F8C6C3',
        '200': '#F4A39E',
        '300': '#EF817A',
        '400': '#EB5E55',
        '500': '#E52E23',
        '600': '#BA2016',
        '700': '#881710',
        '800': '#560F0A',
        '900': '#230604'
      },
      'yellow': {
        DEFAULT: '#DDC67B',
        '50': '#FAF7ED',
        '100': '#F6F0DC',
        '200': '#EEE2BC',
        '300': '#E5D49B',
        '400': '#DDC67B',
        '500': '#D2B34E',
        '600': '#B8982F',
        '700': '#8C7324',
        '800': '#5F4F18',
        '900': '#322A0D'
      },
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens')
  ],
  fontFamily: {
    sans: ['Roboto', 'sans-serif']
  },
}
