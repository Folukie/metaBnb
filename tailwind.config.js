/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000',
        primary: '#A02279',

        gray: {
          primary: '#434343',
          50: '#D7D7D7',
          60: '#CFD8DC',
          100: '#A3A3A3',
        },
      },
    },
    screens: {
      sm: { max: '600px' },
      md: { min: '601px', max: '1024px' },
      lg: { min: '1024px' },
    },
  },
  plugins: [],
}
