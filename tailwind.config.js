/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          primary: '#214D2D',
          secondary: '#3D6A45',
          light: '#EEF4EF',
        },
        gold: '#C89B3C',
        cream: '#FAF7F0',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
