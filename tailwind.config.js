/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.jsx",
      "./resources/**/*.vue",
    ],
    theme: {
      extend: {
        colors:{
            'custom-blue': '#667FFF',
        }
      },
    },
    plugins: [],
  }
