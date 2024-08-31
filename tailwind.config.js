/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black":{
          50:"#252525",
          100:"#2e2e2e",
          300:"#1e1e1e",
          600:"#111111",
        }
      }
    },
  },
  plugins: [],
}

