/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {colors: {
        'tealgreen': '#006D5B',
        'custom-green': '#609966',
        'custom-blue': '#344D67',
        'beige':'#EDE8D0',
        'royal-blue':'#02066F',
        'royal-red':'#890304',
        'royal-gold':'#eead0e',
        'royal-purple':'#660099',
        'blacky':'#000000',
        'whity':'#ffffff'

      },
      extend: {
        fontFamily: {
          visoria: ['Visoria', 'sans-serif'],
          NewElegance: ['NewElegance','sans-serif']
        },},
    },
    plugins: [],
  }
  