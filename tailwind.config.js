/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      palePurple: "#f1e3f3ff",
      periwinkle: "#c2bbf0ff",
      jordyBlue: "#8fb8edff",
      deepBlue: "#62bfedff",
      dodgerBlue: "#3590f3ff",
    },
    extend: {
      colors: {
        ...colors
      },
      backgroundImage: {
        'hero': "url(./src/assets/snack-banner.jpg)"
      }
    },
  },
  plugins: [],
}

