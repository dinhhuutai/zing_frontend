/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                "md": "0px 8px 12px #221a2d;"
            }
        },
    },
    plugins: [],
};
