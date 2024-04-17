/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9ad8eb',
          DEFAULT: '#00afd1'
        },
        secondary: {
          light: '#f0d09f',
          DEFAULT: '#ecb800'
        },
        danger: {
          light: '#fc6f6f',
          DEFAULT: '#ff3939'
        },
        background:{
          light: '#222326',
          DEFAULT: '#1d1e20' 
        }
      },
      boxShadow: {
        'innerNeo' : 'inset -5px -5px 10px 0px rgba(102,102,102,0.25), inset 5px 5px 10px 0px rgba(0,0,0,0.25)',
        'outerNeo' : '-5px -5px 15px 0px rgba(102,102,102,0.25), 5px 5px 15px 0px rgba(0,0,0,0.25)'
      },
    }
  },
  plugins: [],
}

