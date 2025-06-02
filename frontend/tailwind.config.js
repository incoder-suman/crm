/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '0px 0px 10px gray',
      },
      animation:{
        scroll: 'scroll 5s ease-in-out infinite alternate',
      },
      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(130px)' },
        }
      },
    },
  },
  plugins: [],
}

