/**
 * Theme Configuration
 *
 * Centralized color management for the portfolio site.
 * Edit these values to quickly change the site's color scheme.
 */

export const themeConfig = {
  brand: {
    // Primary brand color (default: pink)
    primary: {
      color: 'pink',
      shade: '500',
    },

    // Secondary brand color (default: purple)
    secondary: {
      color: 'purple',
      shade: '600',
    },

    // Brand gradient (used in hero, navigation, buttons)
    gradient: {
      from: {
        color: 'pink',
        shade: '500',
      },
      to: {
        color: 'purple',
        shade: '600',
      },
    },

    // Lighter gradient variant (used in some cards)
    gradientLight: {
      from: {
        color: 'pink',
        shade: '400',
      },
      to: {
        color: 'purple',
        shade: '500',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
