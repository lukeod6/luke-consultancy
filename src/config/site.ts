/**
 * Site contact and CTA configuration.
 * Override via env vars rather than hardcoding live URLs in components:
 *   PUBLIC_BOOKING_URL
 *   PUBLIC_EMAIL
 *   PUBLIC_LINKEDIN_URL
 */
export const siteConfig = {
  siteName: 'SignalFormation',
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL ?? 'https://calendly.com/luke-signalformation/30-minute-discussion',
  email: import.meta.env.PUBLIC_EMAIL ?? 'luke@signalformation.com',
  linkedInUrl: import.meta.env.PUBLIC_LINKEDIN_URL ?? '',
};
