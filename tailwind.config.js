/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-white': '#ffffff2b',
        'dark-grey': 'rgba(32,33,35,1)',
        'light-grey': 'rgba(52,53,65,1)',
      },
    },
  },
  plugins: [require('daisyui')],
};
