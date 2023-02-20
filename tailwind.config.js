const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['ArticNormal', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            'mainblue': '#0038FF',
            'putih': '#FFFFFF'
        }
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
