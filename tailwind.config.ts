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
        background: '#0F0F0F',
        foreground: '#E5E7EB',
        card: {
          DEFAULT: '#1A1A1A',
          foreground: '#E5E7EB',
        },
        popover: {
          DEFAULT: '#1A1A1A',
          foreground: '#E5E7EB',
        },
        primary: {
          DEFAULT: '#10B981',
          foreground: '#0F0F0F',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          foreground: '#0F0F0F',
        },
        muted: {
          DEFAULT: '#6B7280',
          foreground: '#D1D5DB',
        },
        accent: {
          DEFAULT: '#06B6D4',
          foreground: '#0F0F0F',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#E5E7EB',
        },
        border: '#2D3748',
        input: '#2D3748',
        ring: '#10B981',
        success: '#10B981',
        'success-dark': '#047857',
        exception: '#F59E0B',
        'exception-dark': '#D97706',
        locked: '#06B6D4',
        'locked-dark': '#0891B2',
        'terminal-bg': '#0A0A0A',
        slate: '#2D3748',
        'slate-dark': '#1A202C',
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
