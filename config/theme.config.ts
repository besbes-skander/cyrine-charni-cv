/**
 * Theme Configuration
 *
 * Centralized color management for the portfolio site.
 * Edit these values to quickly change the site's color scheme.
 */

export const themeConfig = {
  brand: {
    // Primary brand color (custom olive: #708246)
    primary: {
      color: 'olive',
      shade: '600',
    },

    // Accent color 1: Burgundy for important CTAs (custom burgundy: #9e1533)
    accent1: {
      color: 'burgundy',
      shade: '800',
    },

    // Accent color 2: Royal Blue for secondary actions
    accent2: {
      color: 'blue',
      shade: '600',
    },

    // Brand gradient (used in hero, navigation)
    // Olive gradient
    gradient: {
      from: {
        color: 'olive',
        shade: '600',
      },
      to: {
        color: 'olive',
        shade: '700',
      },
    },

    // Lighter gradient variant (used in some cards)
    gradientLight: {
      from: {
        color: 'olive',
        shade: '400',
      },
      to: {
        color: 'olive',
        shade: '600',
      },
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
