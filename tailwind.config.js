/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button:"#007FFF",
        heading:'#292929',
        footerbg:'#17224D',
        webbg:'#17224D',
        textgrey:'#515151',
        footergrey:'#F5FAFA'
      },
    },
  },
  plugins: [],
}