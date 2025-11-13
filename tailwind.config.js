/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Coral colors
    'text-brand-coral-50', 'text-brand-coral-100', 'text-brand-coral-200', 'text-brand-coral-300', 'text-brand-coral-400',
    'text-brand-coral-500', 'text-brand-coral-600', 'text-brand-coral-700', 'text-brand-coral-800', 'text-brand-coral-900',
    'bg-brand-coral-50', 'bg-brand-coral-100', 'bg-brand-coral-200', 'bg-brand-coral-300', 'bg-brand-coral-400',
    'bg-brand-coral-500', 'bg-brand-coral-600', 'bg-brand-coral-700', 'bg-brand-coral-800', 'bg-brand-coral-900',
    'from-brand-coral-50', 'from-brand-coral-100', 'from-brand-coral-200', 'from-brand-coral-300', 'from-brand-coral-400',
    'from-brand-coral-500', 'from-brand-coral-600', 'from-brand-coral-700', 'from-brand-coral-800', 'from-brand-coral-900',
    'to-brand-coral-50', 'to-brand-coral-100', 'to-brand-coral-200', 'to-brand-coral-300', 'to-brand-coral-400',
    'to-brand-coral-500', 'to-brand-coral-600', 'to-brand-coral-700', 'to-brand-coral-800', 'to-brand-coral-900',
    'border-brand-coral-50', 'border-brand-coral-100', 'border-brand-coral-200', 'border-brand-coral-300', 'border-brand-coral-400',
    'border-brand-coral-500', 'border-brand-coral-600', 'border-brand-coral-700', 'border-brand-coral-800', 'border-brand-coral-900',
    'hover:text-brand-coral-600', 'hover:border-brand-coral-600',

    // Teal colors
    'text-brand-teal-50', 'text-brand-teal-100', 'text-brand-teal-200', 'text-brand-teal-300', 'text-brand-teal-400',
    'text-brand-teal-500', 'text-brand-teal-600', 'text-brand-teal-700', 'text-brand-teal-800', 'text-brand-teal-900',
    'bg-brand-teal-50', 'bg-brand-teal-100', 'bg-brand-teal-200', 'bg-brand-teal-300', 'bg-brand-teal-400',
    'bg-brand-teal-500', 'bg-brand-teal-600', 'bg-brand-teal-700', 'bg-brand-teal-800', 'bg-brand-teal-900',
    'from-brand-teal-50', 'from-brand-teal-100', 'from-brand-teal-200', 'from-brand-teal-300', 'from-brand-teal-400',
    'from-brand-teal-500', 'from-brand-teal-600', 'from-brand-teal-700', 'from-brand-teal-800', 'from-brand-teal-900',
    'to-brand-teal-50', 'to-brand-teal-100', 'to-brand-teal-200', 'to-brand-teal-300', 'to-brand-teal-400',
    'to-brand-teal-500', 'to-brand-teal-600', 'to-brand-teal-700', 'to-brand-teal-800', 'to-brand-teal-900',

    // Amber colors
    'text-brand-amber-50', 'text-brand-amber-100', 'text-brand-amber-200', 'text-brand-amber-300', 'text-brand-amber-400',
    'text-brand-amber-500', 'text-brand-amber-600', 'text-brand-amber-700', 'text-brand-amber-800', 'text-brand-amber-900',
    'bg-brand-amber-50', 'bg-brand-amber-100', 'bg-brand-amber-200', 'bg-brand-amber-300', 'bg-brand-amber-400',
    'bg-brand-amber-500', 'bg-brand-amber-600', 'bg-brand-amber-700', 'bg-brand-amber-800', 'bg-brand-amber-900',
    'from-brand-amber-50', 'from-brand-amber-100', 'from-brand-amber-200', 'from-brand-amber-300', 'from-brand-amber-400',
    'from-brand-amber-500', 'from-brand-amber-600', 'from-brand-amber-700', 'from-brand-amber-800', 'from-brand-amber-900',
    'to-brand-amber-50', 'to-brand-amber-100', 'to-brand-amber-200', 'to-brand-amber-300', 'to-brand-amber-400',
    'to-brand-amber-500', 'to-brand-amber-600', 'to-brand-amber-700', 'to-brand-amber-800', 'to-brand-amber-900',

    // Scarlet colors
    'text-brand-scarlet-50', 'text-brand-scarlet-100', 'text-brand-scarlet-200', 'text-brand-scarlet-300', 'text-brand-scarlet-400',
    'text-brand-scarlet-500', 'text-brand-scarlet-600', 'text-brand-scarlet-700', 'text-brand-scarlet-800', 'text-brand-scarlet-900',
    'bg-brand-scarlet-50', 'bg-brand-scarlet-100', 'bg-brand-scarlet-200', 'bg-brand-scarlet-300', 'bg-brand-scarlet-400',
    'bg-brand-scarlet-500', 'bg-brand-scarlet-600', 'bg-brand-scarlet-700', 'bg-brand-scarlet-800', 'bg-brand-scarlet-900',
    'from-brand-scarlet-50', 'from-brand-scarlet-100', 'from-brand-scarlet-200', 'from-brand-scarlet-300', 'from-brand-scarlet-400',
    'from-brand-scarlet-500', 'from-brand-scarlet-600', 'from-brand-scarlet-700', 'from-brand-scarlet-800', 'from-brand-scarlet-900',
    'to-brand-scarlet-50', 'to-brand-scarlet-100', 'to-brand-scarlet-200', 'to-brand-scarlet-300', 'to-brand-scarlet-400',
    'to-brand-scarlet-500', 'to-brand-scarlet-600', 'to-brand-scarlet-700', 'to-brand-scarlet-800', 'to-brand-scarlet-900',

    // Gray colors
    'text-brand-gray-50', 'text-brand-gray-100', 'text-brand-gray-200', 'text-brand-gray-300', 'text-brand-gray-400',
    'text-brand-gray-500', 'text-brand-gray-600', 'text-brand-gray-700', 'text-brand-gray-800', 'text-brand-gray-900',
    'bg-brand-gray-50', 'bg-brand-gray-100', 'bg-brand-gray-200', 'bg-brand-gray-300', 'bg-brand-gray-400',
    'bg-brand-gray-500', 'bg-brand-gray-600', 'bg-brand-gray-700', 'bg-brand-gray-800', 'bg-brand-gray-900',

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
        // New Vibrant Palette - Amber, Scarlet, Coral & Teal
        'brand-coral': {
          DEFAULT: '#f65156',
          50: '#fff5f5',
          100: '#ffe5e6',
          200: '#ffc8cb',
          300: '#ff9fa4',
          400: '#fa777d',
          500: '#f65156', // Main coral - Vibrant accent
          600: '#e62f35',
          700: '#c61f24',
          800: '#a1161a',
          900: '#7d1013',
        },
        'brand-teal': {
          DEFAULT: '#009292',
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#009292', // Main teal - Cool balance
          600: '#007575',
          700: '#005858',
          800: '#003b3b',
          900: '#001e1e',
        },
        'brand-amber': {
          DEFAULT: '#ffce13',
          50: '#fffcf0',
          100: '#fff8d6',
          200: '#fff1ad',
          300: '#ffe984',
          400: '#ffe05b',
          500: '#ffce13', // Main amber - Bright highlight
          600: '#e6b700',
          700: '#b38f00',
          800: '#806700',
          900: '#4d3e00',
        },
        'brand-scarlet': {
          DEFAULT: '#88070b',
          50: '#fef2f2',
          100: '#fee2e3',
          200: '#fcc9cb',
          300: '#f8a2a6',
          400: '#eb6267',
          500: '#d32f35', // Lighter for better usability
          600: '#b31f24',
          700: '#88070b', // Main scarlet - Deep intensity
          800: '#6b0509',
          900: '#540407',
        },
        'brand-gray': {
          DEFAULT: '#1F2937',
          50: '#FAFAFA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Legacy mappings (for compatibility)
        'brand-red': {
          DEFAULT: '#f65156',
          50: '#fff5f5',
          100: '#ffe5e6',
          200: '#ffc8cb',
          300: '#ff9fa4',
          400: '#fa777d',
          500: '#f65156',
          600: '#e62f35',
          700: '#c61f24',
          800: '#a1161a',
          900: '#7d1013',
        },
        'brand-blue': {
          DEFAULT: '#009292',
          500: '#009292', // Mapped to teal
        },
        'brand-green': {
          DEFAULT: '#009292',
          500: '#009292', // Mapped to teal
        },
      }
    },
  },
  plugins: [],
}
