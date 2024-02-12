/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#303B54',
        primaryGrayDark: '#242D40',
        PrimaryGrayDarker: '#171C28',
        jobCardPrimary: '#323C52',
        jobCardPrimaryDark:'#3F4962',
        jobCardBg:'#1D2331',
        primaryButton:'#5CA4A9',
        primaryRed: '#E83363',
        primaryBorder: '#151924'
       
      },
    },
  },
  plugins: [],
}

