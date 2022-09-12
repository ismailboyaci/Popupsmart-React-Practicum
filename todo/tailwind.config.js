/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'todo': "url('./assets/todo.jpg')",
      },
      colors:{
        'bpink':'#F5D0D8',
        'tblue':'#2f4d8f',
        'tgreen':'#99E0D6'
      }
    },
  },
  plugins: [],
}
