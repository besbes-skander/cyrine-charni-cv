/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Burgundy colors
    'text-burgundy-50', 'text-burgundy-100', 'text-burgundy-200', 'text-burgundy-300', 'text-burgundy-400',
    'text-burgundy-500', 'text-burgundy-600', 'text-burgundy-700', 'text-burgundy-800', 'text-burgundy-900',
    'bg-burgundy-50', 'bg-burgundy-100', 'bg-burgundy-200', 'bg-burgundy-300', 'bg-burgundy-400',
    'bg-burgundy-500', 'bg-burgundy-600', 'bg-burgundy-700', 'bg-burgundy-800', 'bg-burgundy-900',
    'from-burgundy-50', 'from-burgundy-100', 'from-burgundy-200', 'from-burgundy-300', 'from-burgundy-400',
    'from-burgundy-500', 'from-burgundy-600', 'from-burgundy-700', 'from-burgundy-800', 'from-burgundy-900',
    'to-burgundy-50', 'to-burgundy-100', 'to-burgundy-200', 'to-burgundy-300', 'to-burgundy-400',
    'to-burgundy-500', 'to-burgundy-600', 'to-burgundy-700', 'to-burgundy-800', 'to-burgundy-900',
    'border-burgundy-50', 'border-burgundy-100', 'border-burgundy-200', 'border-burgundy-300', 'border-burgundy-400',
    'border-burgundy-500', 'border-burgundy-600', 'border-burgundy-700', 'border-burgundy-800', 'border-burgundy-900',
    'hover:text-burgundy-800', 'hover:border-burgundy-800',

    // Gold colors
    'text-gold-50', 'text-gold-100', 'text-gold-200', 'text-gold-300', 'text-gold-400',
    'text-gold-500', 'text-gold-600', 'text-gold-700', 'text-gold-800', 'text-gold-900',
    'bg-gold-50', 'bg-gold-100', 'bg-gold-200', 'bg-gold-300', 'bg-gold-400',
    'bg-gold-500', 'bg-gold-600', 'bg-gold-700', 'bg-gold-800', 'bg-gold-900',
    'from-gold-50', 'from-gold-100', 'from-gold-200', 'from-gold-300', 'from-gold-400',
    'from-gold-500', 'from-gold-600', 'from-gold-700', 'from-gold-800', 'from-gold-900',
    'to-gold-50', 'to-gold-100', 'to-gold-200', 'to-gold-300', 'to-gold-400',
    'to-gold-500', 'to-gold-600', 'to-gold-700', 'to-gold-800', 'to-gold-900',

    // Olive colors
    'text-olive-50', 'text-olive-100', 'text-olive-200', 'text-olive-300', 'text-olive-400',
    'text-olive-500', 'text-olive-600', 'text-olive-700', 'text-olive-800', 'text-olive-900',
    'bg-olive-50', 'bg-olive-100', 'bg-olive-200', 'bg-olive-300', 'bg-olive-400',
    'bg-olive-500', 'bg-olive-600', 'bg-olive-700', 'bg-olive-800', 'bg-olive-900',
    'from-olive-50', 'from-olive-100', 'from-olive-200', 'from-olive-300', 'from-olive-400',
    'from-olive-500', 'from-olive-600', 'from-olive-700', 'from-olive-800', 'from-olive-900',
    'to-olive-50', 'to-olive-100', 'to-olive-200', 'to-olive-300', 'to-olive-400',
    'to-olive-500', 'to-olive-600', 'to-olive-700', 'to-olive-800', 'to-olive-900',

    // Gradient directions
    'bg-gradient-to-r', 'bg-gradient-to-l', 'bg-gradient-to-t', 'bg-gradient-to-b',
    'bg-gradient-to-tr', 'bg-gradient-to-tl', 'bg-gradient-to-br', 'bg-gradient-to-bl',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
      },
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
