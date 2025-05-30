/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      xs: '30rem',
      sm: '40rem',
      md: '48rem',
      lg: '65.688rem',
      xl: '80rem',
      '2xl': '96rem',
    },
  },
  plugins: [],
}