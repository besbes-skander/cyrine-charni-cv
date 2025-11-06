/**
 * Theme Configuration
 *
 * Centralized color management for the portfolio site.
 * Edit these values to quickly change the site's color scheme.
 */

export const themeConfig = {
  brand: {
    // Primary brand color (custom burgundy: #9e1533)
    primary: {
      color: 'burgundy',
      shade: '800',
    },

    // Secondary brand color (custom gold: #dc8f09)
    secondary: {
      color: 'gold',
      shade: '600',
    },

    // Accent color (olive green)
    accent: {
      color: 'olive',
      shade: '600',
    },

    // Subtle gradient - cream to light gold (for backgrounds and soft accents)
    // Much softer than before for a minimalist look
    gradient: {
      from: {
        color: 'gold',
        shade: '50',
      },
      to: {
        color: 'olive',
        shade: '100',
      },
    },

    // Lighter gradient variant (barely visible, for subtle effects)
    gradientLight: {
      from: {
        color: 'gold',
        shade: '50',
      },
      to: {
        color: 'gold',
        shade: '100',
      },
    },

    // Accent gradient for buttons and important elements
    // Gold to olive - warm and earthy
    gradientAccent: {
      from: {
        color: 'gold',
        shade: '500',
      },
      to: {
        color: 'olive',
        shade: '500',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
