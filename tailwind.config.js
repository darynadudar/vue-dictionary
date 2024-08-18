/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#FFFFFF',
            'black': '#050505',
            'purple': '#A445ED',
            'red': '#FF5252',
            'grey': {
                1: '#F4F4F4',
                2: '#E9E9E9',
                3: '#757575',
                4: '#3A3A3A',
                5: '#2D2D2D',
                6: '#1F1F1F',
            },
        },
        fontSize: {
            null: '0',
            sm: ['14px', '18px'],
            base: ['18px', '24px'],
            lg: ['20px', '24px'],
            xl: ['24px', '32px'],
            heading: ['64px', '77px'],
        }
    },
    plugins: [],
    darkMode: 'class',
}

