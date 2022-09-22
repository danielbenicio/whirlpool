/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        whirlpool: "#0D436B",
      }
    },
  },
  plugins: [],
}
