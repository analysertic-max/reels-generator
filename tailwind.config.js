/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-cairo)', 'Tahoma', 'Arial', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
        tajawal: ['var(--font-tajawal)', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [],
};