/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '18px'],
      base: ['18px', '24px'],
      lg: ['20px', '24px'],
      xl: ['24px', '32px'],
      heading: ['64px', '80px'],
    }
  },
  plugins: [],
  darkMode: 'class',
}

