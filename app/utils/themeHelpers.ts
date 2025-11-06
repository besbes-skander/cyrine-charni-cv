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
 * Get the secondary brand color class
 * @example getSecondaryColor() // Returns: 'purple-600'
 */
export const getSecondaryColor = (): string => {
  const { color, shade } = themeConfig.brand.secondary;
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
 * Get secondary color text class
 * @example getSecondaryTextColor() // Returns: 'text-purple-600'
 */
export const getSecondaryTextColor = (): string => {
  return `text-${getSecondaryColor()}`;
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

/**
 * Get the accent color class
 * @example getAccentColor() // Returns: 'olive-600'
 */
export const getAccentColor = (): string => {
  const { color, shade } = themeConfig.brand.accent;
  return `${color}-${shade}`;
};

/**
 * Get accent color text class
 * @example getAccentTextColor() // Returns: 'text-olive-600'
 */
export const getAccentTextColor = (): string => {
  return `text-${getAccentColor()}`;
};

/**
 * Get the brand gradient for buttons and accents (more vibrant)
 * @param direction - Gradient direction (default: 'r' for right)
 * @example getAccentGradient() // Returns: 'bg-gradient-to-r from-gold-500 to-olive-500'
 */
export const getAccentGradient = (
  direction: 'r' | 'l' | 'b' | 't' | 'br' | 'bl' | 'tr' | 'tl' = 'r'
): string => {
  const gradient = themeConfig.brand.gradientAccent;
  const fromColor = `${gradient.from.color}-${gradient.from.shade}`;
  const toColor = `${gradient.to.color}-${gradient.to.shade}`;

  return `bg-gradient-to-${direction} from-${fromColor} to-${toColor}`;
};

/**
 * Get text gradient for accent elements
 * @example getAccentTextGradient() // Returns: 'bg-gradient-to-r from-gold-500 to-olive-500 bg-clip-text text-transparent'
 */
export const getAccentTextGradient = (): string => {
  return `${getAccentGradient()} bg-clip-text text-transparent`;
};
