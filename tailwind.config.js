/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blues:{
          5:'#EFF9FF',
          10:'#C0EAFF',
          50:'#88D8FF',
          60: '#95DDFF',
          100:'#A7E2FF',
          150:'#4EC6FF',
          200:'#00A4F4',
          300:'#0095DE',
          400:'#35BDFF',
          500:'#0179B4',
          600:'#0084D4',
          700:'#0069AB'
        },
        blacks:{
          50:'#B0B0B0',
          100:'#4F4F4F',
          300:'#B0B0B0'
        }
      },
    },
  },
  plugins: [],
}

