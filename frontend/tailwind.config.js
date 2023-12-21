// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');

const colors = {
    gray: {
        100: '#F7F4F3',
        200: '#EFE9E7',
        300: '#D0C9C9',
        400: '#B1ABAD',
        500: '#918E92',
        600: '#727276',
        700: '#55575C',
        800: '#393E41',
        900: '#1D2225',
    },
    red: {
        100: '#efcece',
        200: '#df9d9c',
        300: '#cf6d6b',
        400: '#bf3c39',
        500: '#AF0B08',
        600: '#8c0906',
        700: '#690705',
        800: '#460403',
        900: '#230202',
    },
    blue: {
        100: '#ceedef',
        200: '#9cdbdf',
        300: '#6bc8cf',
        400: '#39b6bf',
        500: '#08A4AF',
        600: '#06838c',
        700: '#056269',
        800: '#034246',
        900: '#022123',
    },
    green: {
        100: '#ddefce',
        200: '#bbdf9c',
        300: '#9acf6b',
        400: '#78bf39',
        500: '#56AF08',
        600: '#458c06',
        700: '#346905',
        800: '#224603',
        900: '#112302',
    },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        '.src/components/**/*.{js,ts,jsx,tsx,mdx}',
        '.src/app/**/*.{js,ts,jsx,tsx,mdx}',
        join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,mdx,html}'),
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: colors.red,
                    secondary: colors.blue,
                    success: colors.green,
                    neutral: colors.gray,
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
