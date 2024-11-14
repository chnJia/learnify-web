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
        'azure': '#3361b0',
        'soft-blue': '#DBEAFF',
        'light-blue': '#F3F8FF',
        'light-yellow': '#F7F3EA'
      },
      height: {
        '18': '4.5rem',
       },
       fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

