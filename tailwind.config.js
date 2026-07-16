/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#BB9A65",
        secondary: "#858585",
        tertiary: "#9E6202",
        heading:"#3A2D23",
        category:"#A67B36",
      }
      
    },
  },
  plugins: [],
}

