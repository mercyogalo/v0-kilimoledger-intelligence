import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f0d',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#111a14',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#111a14',
          foreground: '#ffffff',
        },
        primary: {
          DEFAULT: '#22c55e',
          foreground: '#0a0f0d',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          foreground: '#0a0f0d',
        },
        muted: {
          DEFAULT: '#4b5563',
          foreground: '#c5cad1',
        },
        accent: {
          DEFAULT: '#22c55e',
          foreground: '#0a0f0d',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#1e2e22',
        input: '#1e2e22',
        ring: '#22c55e',
        success: '#22c55e',
        'success-dark': '#16a34a',
        exception: '#f59e0b',
        'exception-dark': '#d97706',
        locked: '#3b82f6',
        'locked-dark': '#1d4ed8',
        'terminal-bg': '#000000',
        slate: '#1e2e22',
        'slate-dark': '#0a0f0d',
      },
      borderRadius: {
        sm: '0.375rem',
        base: '0.5625rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

export default config
