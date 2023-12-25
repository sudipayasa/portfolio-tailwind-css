/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode : 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        Tjbanget: '#86198f',
        secondary: '#64748b',
        dark: '#020617',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

