/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Custom color palette: Burgundy Red (#9e1533)
        burgundy: {
          50: '#fef2f4',
          100: '#fde6e9',
          200: '#fccdd6',
          300: '#f9a5b3',
          400: '#f4748a',
          500: '#ea4d6b',
          600: '#d63554',
          700: '#b32644',
          800: '#9e1533', // Main burgundy color
          900: '#7a1127',
        },
        // Custom color palette: Gold (#dc8f09)
        gold: {
          50: '#fef9e7',
          100: '#fdf3c7',
          200: '#fbe68a',
          300: '#f9d84d',
          400: '#f4c520',
          500: '#e4ab13',
          600: '#dc8f09', // Main gold color
          700: '#b77308',
          800: '#945e0c',
          900: '#7a4e10',
        },
        // Custom color palette: Olive Green (#708246)
        olive: {
          50: '#f6f8f3',
          100: '#eaefe2',
          200: '#d5dfc5',
          300: '#b8c89e',
          400: '#9bae77',
          500: '#849958',
          600: '#708246', // Main olive color
          700: '#5a6838',
          800: '#4a5530',
          900: '#3e472a',
        },
      }
    },
  },
  plugins: [],
}
