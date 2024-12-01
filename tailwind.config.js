/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      backgroundColor: {
        'color-theme1': '#FFFFFF',
        'color-theme2': '#000000'
      },
      textColor:{
        'color-theme1': '#000000',
        'color-theme2': '#FFFFFF'
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary-lighter': '#EBC059',
        'primary-darker': '#584424',
        'btn-hover': '#4F3D20',
        'dress-pink': '#E93FBC',
        'dress-green': '#0A9418',
        'dress-orange': '#B86709'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        wide: '1440px'
      }
    }
  },
  safelist:[
    {
      pattern: /text-color-(theme1|theme2)/
    },
    {
      pattern: /bg-color-(theme1|theme2)/
    },
    {
      pattern: /text-color-(theme1|theme2)/
    }
  ],
  plugins: []
}
