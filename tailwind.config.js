/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            blue: '#1fb6ff',
        },
        extend: {},
    },
    plugins: [],
};
