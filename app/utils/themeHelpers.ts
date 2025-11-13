/**
 * Theme Helper Functions
 *
 * Utility functions to generate Tailwind CSS classes from theme configuration.
 */

import { themeConfig } from '@/config/theme.config';

/**
 * Get the primary brand color class
 * @example getPrimaryColor() // Returns: 'pink-500'
 */
export const getPrimaryColor = (): string => {
  const { color, shade } = themeConfig.brand.primary;
  return `${color}-${shade}`;
};

/**
 * Get the brand gradient classes for backgrounds
 * @param direction - Gradient direction (default: 'r' for right)
 * @param variant - Gradient variant: 'normal' or 'light' (default: 'normal')
 * @example getBrandGradient() // Returns: 'bg-gradient-to-r from-pink-500 to-purple-600'
 * @example getBrandGradient('br') // Returns: 'bg-gradient-to-br from-pink-500 to-purple-600'
 * @example getBrandGradient('r', 'light') // Returns: 'bg-gradient-to-r from-pink-400 to-purple-500'
 */
export const getBrandGradient = (
  direction: 'r' | 'l' | 'b' | 't' | 'br' | 'bl' | 'tr' | 'tl' = 'r',
  variant: 'normal' | 'light' = 'normal'
): string => {
  const gradient = variant === 'light' ? themeConfig.brand.gradientLight : themeConfig.brand.gradient;
  const fromColor = `${gradient.from.color}-${gradient.from.shade}`;
  const toColor = `${gradient.to.color}-${gradient.to.shade}`;

  return `bg-gradient-to-${direction} from-${fromColor} to-${toColor}`;
};

/**
 * Get text gradient classes (for text with gradient effect)
 * @example getTextGradient() // Returns: 'bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'
 */
export const getTextGradient = (): string => {
  return `${getBrandGradient()} bg-clip-text text-transparent`;
};

/**
 * Get primary color text class
 * @example getPrimaryTextColor() // Returns: 'text-pink-500'
 */
export const getPrimaryTextColor = (): string => {
  return `text-${getPrimaryColor()}`;
};

/**
 * Get primary color hover text class
 * @example getPrimaryHoverTextColor() // Returns: 'hover:text-pink-500'
 */
export const getPrimaryHoverTextColor = (): string => {
  return `hover:text-${getPrimaryColor()}`;
};

/**
 * Get primary color background class
 * @example getPrimaryBgColor() // Returns: 'bg-pink-500'
 */
export const getPrimaryBgColor = (): string => {
  return `bg-${getPrimaryColor()}`;
};

/**
 * Get light background color for badges/tags
 * @example getPrimaryLightBg() // Returns: 'bg-pink-100'
 */
export const getPrimaryLightBg = (): string => {
  const { color } = themeConfig.brand.primary;
  return `bg-${color}-100`;
};

/**
 * Get darker text color for badges/tags
 * @example getPrimaryDarkTextColor() // Returns: 'text-pink-600'
 */
export const getPrimaryDarkTextColor = (): string => {
  const { color } = themeConfig.brand.primary;
  return `text-${color}-600`;
};

/**
 * Get hover border color
 * @example getPrimaryHoverBorderColor() // Returns: 'hover:border-pink-500'
 */
export const getPrimaryHoverBorderColor = (): string => {
  return `hover:border-${getPrimaryColor()}`;
};
