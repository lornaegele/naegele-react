/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#00df9a',
      },
      keyframes: {
        scrollDown: {
          '0%': {
            transform: 'translateY(14px)'
        },
        '10%': {
            transform: 'translateY(14px)'
        },
        '30%': {
           transform: 'translateY(6px)'
        },
       '45%':    {
           transform: 'translateY(1px)'
        },
        '60%':    {
            transform: 'translateY(14px)'
        },
        '100%':    {
            transform: 'translateY(14px)'
        },
        }
      },
      animation: {
        'scrollDown': 'scrollDown 2s linear infinite',
      }
    },
  },
  plugins: [],
}