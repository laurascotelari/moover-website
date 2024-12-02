/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontSize: {
      xs: [`12px`, '16px'],
      base: ['16px', '19.5px'],
      sm: ['14px', '20px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '34px'],
      '4xl': ['32px', '38px'],
      '5xl': ['36px', '42px'],
    },
    extend: {
      fontSize: {
        // Small sizes
        '1sm': ['14px', '20px'],
        '2sm': ['16px', '24px'],
        '3sm': ['18px', '26px'],
        '4sm': ['20px', '28px'],
        '5sm': ['22px', '30px'],
      
        // Medium sizes
        '1md': ['18px', '24px'],
        '2md': ['20px', '26px'],
        '3md': ['22px', '28px'],
        '4md': ['24px', '30px'],
        '5md': ['26px', '32px'],
      
        // Large sizes
        '1lg': ['20px', '28px'],
        '2lg': ['24px', '32px'],
        '3lg': ['28px', '36px'],
        '4lg': ['32px', '40px'],
        '5lg': ['36px', '44px'],
      
        // Additional larger sizes
        '1xxl': ['28px', '34px'],
        '2xxl': ['32px', '38px'],
        '3xxl': ['34px', '40px'],
        '4xxl': ['36px', '42px'],
        '5xxl': ['38px', '44px']
      },
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
