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
        // Clean & Punchy Palette - Main Brand Colors
        'brand-red': {
          DEFAULT: '#D63031',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#D63031', // Main red - CTAs, chiffres clés
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        'brand-blue': {
          DEFAULT: '#0984E3',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#0984E3', // Main blue - CTAs secondaires
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'brand-gray': {
          DEFAULT: '#2D3436',
          50: '#F5F6FA', // Gris clair pour sections
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#636E72', // Gris moyen - textes secondaires
          700: '#374151',
          800: '#2D3436', // Gris anthracite - textes principaux
          900: '#111827',
        },
        'brand-green': {
          DEFAULT: '#00B894',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#00B894', // Vert succès - métriques positives
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        'brand-yellow': {
          DEFAULT: '#FDCB6E',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FDCB6E', // Jaune doré - hovers subtils
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Legacy mappings (redirect to new colors for backwards compatibility)
        burgundy: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#D63031',
          700: '#B91C1C',
          800: '#D63031', // Mapped to brand-red
          900: '#7F1D1D',
        },
        olive: {
          50: '#F5F6FA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#2D3436', // Mapped to brand-gray
          700: '#2D3436',
          800: '#2D3436',
          900: '#111827',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FDCB6E',
          500: '#FDCB6E', // Mapped to brand-yellow
          600: '#FDCB6E',
          700: '#D97706',
          800: '#B45309',
          900: '#92400E',
        },
      }
    },
  },
  plugins: [],
}
