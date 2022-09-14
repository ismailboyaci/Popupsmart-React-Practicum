/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'todo': "url('./assets/todo.jpg')",
      },
      colors:{
        'bpink':'#F5D0D8',
        'tblue':'#2f4d8f',
        'tgreen':'#99E0D6',
        'tblack':'#FFFFFF',
        'tred':'#2E282A',
        'light':{
          '1':'#E3FDFD',
          '2':'#CBF1F5',
          '3':'#A6E3E9',
          '4':'#71C9CE',
        },
        'dark':{
          '1':'#222831',
          '2':'#393E46',
          '3':'#00ADB5',
          '4':'#EEEEEE',
          '5':'#395B64',
          '6':'#A5C9CA',
        }
      }
    },
  },
  plugins: [],
}
