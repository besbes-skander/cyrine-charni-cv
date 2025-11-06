/**
 * Site Configuration
 *
 * Centralized configuration file for contact information and external links.
 * Update this file to change email, phone, social media links, etc.
 */

export const siteConfig = {
  contact: {
    email: 'cyrine.charni12@gmail.com',
    phone: '07 44 19 69 09',
    phoneRaw: '0744196909', // For tel: links
  },
  links: {
    linkedin: 'https://linkedin.com/in/cyrine-charni',
    calendly: 'https://calendly.com/cyrine-charni',
  },
} as const;

export type SiteConfig = typeof siteConfig;
