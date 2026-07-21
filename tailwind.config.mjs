import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F8F6',
        ink: '#1F2933',
        muted: '#44525C',
        border: '#C7D5D2',
        surface: '#FFFFFF',
        'surface-soft': '#EAF4F1',
        'surface-strong': '#1F2933',
        // Single teal accent, three weights. `accent` passes AA on paper and
        // white, so it can carry text and rules rather than only 6px dots.
        accent: '#2F6F5E',
        'accent-strong': '#245A4C',
        'accent-soft': '#90BAAD',
        'accent-wash': '#DCEBE5',
        slate: '#5F6B75',
        'cool-steel': '#6F8790',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-lg': ['clamp(2.75rem, 6.5vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.25rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'section-title': ['clamp(1.75rem, 3.5vw, 2.85rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.0625rem, 1.2vw, 1.125rem)', { lineHeight: '1.65' }],
      },
      maxWidth: {
        prose: '720px',
        container: '1240px',
        hero: '840px',
      },
      letterSpacing: {
        widest: '0.08em',
      },
      spacing: {
        section: '5.5rem',
        'section-lg': '7.25rem',
      },
      borderRadius: {
        panel: '1.5rem',
        'panel-lg': '2rem',
      },
      boxShadow: {
        // Layered: a tight contact shadow reads as an edge, the wide one as depth.
        // A single wide blur alone just looks foggy.
        glow: '0 1px 2px rgba(31, 41, 51, 0.16), 0 8px 24px rgba(31, 41, 51, 0.18)',
        panel: '0 1px 2px rgba(31, 41, 51, 0.05), 0 12px 32px -8px rgba(31, 41, 51, 0.13)',
        'panel-lift': '0 2px 4px rgba(31, 41, 51, 0.06), 0 22px 48px -12px rgba(31, 41, 51, 0.20)',
      },
    },
  },
  plugins: [],
};
