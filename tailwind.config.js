/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salesmain: '#206879',
        salesmainlight: 'rgb(32, 104, 121,0.4)',
        salesSidebar: '#248ca3', 
        salesHover: '#164f5a',
        adminmain: '#a72468', 
        adminmainlight: 'rgb(167, 36, 104,0.5)', 
        adminSidebar: '#f94ba5', 
        adminHover: '#962b64',
        teammain: '#28378f',  
        teammainlight:'rgb(40, 55, 143,0.5)',
        teamSidebar: '#4056c1',  
        teamHover:'#3548b7',   
      },
      boxShadow: {
        'custom-gray': '0px 0px 10px gray',
        'custom-grey': '0px 0px 5px gray',
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

