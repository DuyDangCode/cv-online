/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // if using App Router
    './pages/**/*.{js,ts,jsx,tsx}', // if using Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-1': 'var(--main-color-1)',
        'main-2': 'var(--main-color-2)',
      },
    },
  },
  plugins: [],
}
