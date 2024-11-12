/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#111B25',
        'dark-moderate-blue': '#254E7A',
        'soft-blue': '#DBEAFF',
        'light-blue': '#F3F8FF',
        'light-yellow': '#F7F3EA'
      },
      height: {
        '18': '4.5rem',
       },
    },
  },
  plugins: [],
}

