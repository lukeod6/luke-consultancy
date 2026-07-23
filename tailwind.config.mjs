/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        border: 'var(--color-rule)',
        surface: 'var(--color-surface)',
        'surface-soft': 'var(--color-paper-2)',
        'surface-strong': 'var(--color-surface-strong)',
        accent: 'var(--color-accent)',
        'accent-strong': 'var(--color-accent-strong)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-wash': 'var(--color-accent-wash)',
        slate: 'var(--color-ink-2)',
        'cool-steel': 'var(--color-ink-2)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-lg': [
          'var(--text-display)',
          { lineHeight: '1.02', letterSpacing: '-0.04em' },
        ],
        'display-md': [
          'var(--text-display-s)',
          { lineHeight: '1.05', letterSpacing: '-0.035em' },
        ],
        'section-title': [
          'clamp(1.85rem, 3.2vw, 2.65rem)',
          { lineHeight: '1.1', letterSpacing: '-0.03em' },
        ],
        lead: ['clamp(1.0625rem, 1.2vw, 1.2rem)', { lineHeight: '1.65' }],
      },
      maxWidth: {
        prose: '720px',
        container: 'var(--page-max)',
        hero: '40rem',
      },
      letterSpacing: {
        widest: '0.08em',
      },
      spacing: {
        section: '5.5rem',
        'section-lg': '7.25rem',
      },
      borderRadius: {
        panel: 'var(--radius-md)',
        'panel-lg': '0.875rem',
      },
    },
  },
  plugins: [],
};
