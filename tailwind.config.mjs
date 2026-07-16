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
        accent: '#90BAAD',
        electric: '#A1E5AB',
        coral: '#ADF6B1',
        slate: '#5F6B75',
        'cool-steel': '#6F8790',
        'muted-teal': '#90BAAD',
        celadon: '#A1E5AB',
        'light-green': '#ADF6B1',
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
        glow: '0 12px 48px rgba(113, 124, 137, 0.22)',
        panel: '0 20px 60px rgba(31, 41, 51, 0.12)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 0% 10%, rgba(143, 186, 173, 0.28) 0%, transparent 35%), radial-gradient(circle at 85% 20%, rgba(113, 124, 137, 0.24) 0%, transparent 40%), radial-gradient(circle at 65% 80%, rgba(161, 229, 171, 0.22) 0%, transparent 45%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -14px, 0) scale(1.02)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
