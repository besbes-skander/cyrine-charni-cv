/**
 * Theme Configuration
 *
 * Centralized color management for the portfolio site.
 * Edit these values to quickly change the site's color scheme.
 */

/**
 * Clean & Punchy Color Palette
 *
 * Primary: Rouge vif #D63031 - CTAs principaux, chiffres clés
 * Secondary: Bleu électrique #0984E3 - CTAs secondaires, accents
 * Text: Gris anthracite #2D3436 - Textes principaux
 * TextSecondary: Gris moyen #636E72 - Textes secondaires
 * Accent: Vert succès #00B894 - Métriques positives (92%)
 * Background: Blanc #FFFFFF - Fond principal
 * BackgroundAlt: Gris clair #F5F6FA - Sections alternées
 */
export const themeConfig = {
  brand: {
    // Primary brand color: Rouge vif
    primary: {
      color: 'brand-red',
      shade: '600',
    },

    // Secondary brand color: Bleu électrique
    secondary: {
      color: 'brand-blue',
      shade: '500',
    },

    // Success color: Vert
    success: {
      color: 'brand-green',
      shade: '500',
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

    // Brand gradient (used in some sections)
    gradient: {
      from: {
        color: 'brand-red',
        shade: '600',
      },
      to: {
        color: 'brand-red',
        shade: '700',
      },
    },

    // Lighter gradient variant
    gradientLight: {
      from: {
        color: 'brand-red',
        shade: '400',
      },
      to: {
        color: 'brand-red',
        shade: '600',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
