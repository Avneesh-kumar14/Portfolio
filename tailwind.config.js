
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      graphik: ['Graphik'],
      nunito: ['Nunito Sans'],
      },
      colors:{
        'primary': '#19191B',
        'textcolor':'#FFFFFF',
        'buttoncolor':'#5454D4'
      }
    },
  },
  plugins: [],
}