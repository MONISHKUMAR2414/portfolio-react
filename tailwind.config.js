/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        blue: 'rgb(var(--blue) / <alpha-value>)',
        orange: 'rgb(var(--orange) / <alpha-value>)',
        cyan: 'rgb(var(--cyan) / <alpha-value>)',
        green: 'rgb(var(--green) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3.75rem, 9vw, 7rem)', { lineHeight: '1.02', letterSpacing: '-0.08em', fontWeight: '800' }],
        display: ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        sm: '7px',
        DEFAULT: '9px',
        md: '11px',
        lg: '13px',
        xl: '15px',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgb(2 8 23 / 0.6)',
        glow: '0 0 24px -4px rgb(var(--blue) / 0.45)',
        'glow-cyan': '0 0 20px -4px rgb(var(--cyan) / 0.5)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}