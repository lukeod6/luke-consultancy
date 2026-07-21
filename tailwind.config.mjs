import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4ED',
        ink: '#202729',
        muted: '#4F5A5C',
        border: '#CBC8BE',
        surface: '#FFFFFF',
        'surface-soft': '#ECE8DF',
        'surface-strong': '#202729',
        accent: '#2D5E4E',
        'accent-strong': '#23493D',
        'accent-soft': '#9CB7AD',
        'accent-wash': '#E1E9E5',
        slate: '#657073',
        'cool-steel': '#788B8D',
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-lg': ['clamp(2.75rem, 6vw, 5.1rem)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        'display-md': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'section-title': ['clamp(1.9rem, 3.2vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
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
        panel: '0.5rem',
        'panel-lg': '0.75rem',
      },
      boxShadow: {
        glow: '0 1px 2px rgba(32, 39, 41, 0.12)',
        panel: '0 1px 2px rgba(32, 39, 41, 0.08)',
        'panel-lift': '0 2px 4px rgba(32, 39, 41, 0.10)',
      },
    },
  },
  plugins: [],
};
