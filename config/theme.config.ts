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
    // Burgundy to Gold gradient
    gradient: {
      from: {
        color: 'burgundy',
        shade: '800',
      },
      to: {
        color: 'gold',
        shade: '600',
      },
    },

    // Lighter gradient variant (used in some cards)
    gradientLight: {
      from: {
        color: 'burgundy',
        shade: '700',
      },
      to: {
        color: 'gold',
        shade: '500',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
