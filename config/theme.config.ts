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

    // Brand gradient (used in hero, navigation, buttons)
    // Olive to Gold gradient
    gradient: {
      from: {
        color: 'olive',
        shade: '600',
      },
      to: {
        color: 'gold',
        shade: '600',
      },
    },

    // Lighter gradient variant (used in some cards)
    gradientLight: {
      from: {
        color: 'olive',
        shade: '500',
      },
      to: {
        color: 'gold',
        shade: '500',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
