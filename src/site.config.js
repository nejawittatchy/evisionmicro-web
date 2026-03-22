/**
 * =====================================================
 *  eVision Microsystems — Site Page Visibility Config
 * =====================================================
 *
 *  Control which pages appear in the navigation by
 *  setting `enabled` to true or false.
 *
 *  Changes here are automatically reflected in:
 *    - Desktop navigation bar
 *    - Mobile navigation menu
 *    - Footer quick links (if applicable)
 *
 *  No HTML editing required — just flip the flag!
 * =====================================================
 */

export const siteConfig = {
  pages: {
    newsletter: {
      enabled: true,              // Set to false to hide the Newsletter link
      label: 'Newsletter',
      href: 'newsletter.html',
    },
    gallery: {
      enabled: true,              // Set to false to hide the Gallery link
      label: 'Gallery',
      href: 'gallery.html',
    },
  },
};
