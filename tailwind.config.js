/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#667FFF',
            },
            fontFamily: {
                'cursiva': ['Edwardian Script Regular', 'cursive'],
            }
        },
    },
    plugins: [],
}
