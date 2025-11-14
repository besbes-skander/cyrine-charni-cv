/**
 * Theme Configuration
 *
 * Centralized color management for the portfolio site.
 * Edit these values to quickly change the site's color scheme.
 */

/**
 * Vibrant Color Palette - Amber, Scarlet, Coral & Teal
 *
 * Primary: Coral #f65156 - CTAs principaux, chiffres clés
 * Secondary: Teal Green #009292 - CTAs secondaires, accents frais
 * Accent: Amber #ffce13 - Highlights, métriques positives, succès
 * Intensity: Scarlet #88070b - Emphase forte, éléments d'urgence
 * Text: Gris anthracite #2D3436 - Textes principaux
 * TextSecondary: Gris moyen #636E72 - Textes secondaires
 * Background: Blanc #FFFFFF - Fond principal
 * BackgroundAlt: Gris clair #F5F6FA - Sections alternées
 */
export const themeConfig = {
  brand: {
    // Primary brand color: Coral
    primary: {
      color: 'brand-coral',
      shade: '500',
    },

    // Secondary brand color: Teal Green
    secondary: {
      color: 'brand-teal',
      shade: '500',
    },

    // Success/Highlight color: Amber
    success: {
      color: 'brand-amber',
      shade: '500',
    },

    // Intensity color: Scarlet
    intensity: {
      color: 'brand-scarlet',
      shade: '700',
    },

    // Text colors
    text: {
      primary: {
        color: 'brand-gray',
        shade: '800',
      },
      secondary: {
        color: 'brand-gray',
        shade: '600',
      },
    },

    // Background colors
    background: {
      primary: '#FFFFFF',
      secondary: {
        color: 'brand-gray',
        shade: '50',
      },
    },

    // Brand gradient (Coral to Teal - warm to cool)
    gradient: {
      from: {
        color: 'brand-coral',
        shade: '500',
      },
      to: {
        color: 'brand-teal',
        shade: '500',
      },
    },

    // Lighter gradient variant
    gradientLight: {
      from: {
        color: 'brand-coral',
        shade: '400',
      },
      to: {
        color: 'brand-teal',
        shade: '400',
      },
    },

    // Warm gradient (Amber to Coral)
    gradientWarm: {
      from: {
        color: 'brand-amber',
        shade: '500',
      },
      to: {
        color: 'brand-coral',
        shade: '500',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
