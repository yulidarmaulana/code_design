/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F6B4F',
        'secondary': '#FFFFFF',
        'dark': '#2A2C3D',
        'light': '#D9D9D9',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

