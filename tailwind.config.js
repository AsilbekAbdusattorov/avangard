/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'base': '1450px'
      },
      // colors: {
      //   'Mos-Purple': '#5C6BC0',
      //   'Mos-purple-light': '#E0E7FF',
      //   'purple-btn-color': '#E25B94',
      //   'footer-bg': '#19227B',
      //   'RoyxatdanOtish-Blue-Color': '#2265D9'
      // },
      fontFamily: {
        'montserrat': 'Montserrat, sans-serif'
      },
      backgroundImage: {
        'KompaniyaHaqidaHero-Background': "linear-gradient(180deg, rgba(9, 9, 9, 0.65) 0%, #09161F 1000%), url('./src/img/KompaniyaHaqidaLargeimg.webp')",
        'PNF-Background': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./src/img/PNFBackground.webp')",
        'XizmatlarHero': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./src/img/XizmatlarHero.jpg')",
        'hero1': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./img/hero1.jpg')",
        'hero2': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./img/hero2.jpg')",
      },
      screens: {
        'bizhaqdaResp': '1480px',
        'navHiddenResp': '900px',
        'navBirjaHiddenResp': '1110px',
        'moreHiddenResp': '515px',
        'modalResp': '430px'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
],
}
