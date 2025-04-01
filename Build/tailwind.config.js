import * as defaultTheme from 'tailwindcss/defaultTheme'
import * as pluginForms from '@tailwindcss/forms'
import * as pluginTypography from '@tailwindcss/typography'
import * as pluginAspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: [
    '../Resources/Private/**/*.html',
    './Sources/**/*.{js,cjs,mjs,ts,cts,mts}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        25: 'hsl(var(--color-primary-25) / <alpha-value>)',
        700: 'hsl(var(--color-primary-700) / <alpha-value>)',
      },
      secondary: {
        25: 'hsl(var(--color-secondary-25) / <alpha-value>)',
        50: 'hsl(var(--color-secondary-50) / <alpha-value>)',
        300: 'hsl(var(--color-secondary-300) / <alpha-value>)',
        700: 'hsl(var(--color-secondary-700) / <alpha-value>)',
      },
      black: 'hsl(var(--color-black) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
      info: {
        500: 'hsl(var(--color-info-500) / <alpha-value>)',
        700: 'hsl(var(--color-info-700) / <alpha-value>)',
      },
      danger: {
        500: 'hsl(var(--color-danger-500) / <alpha-value>)',
        700: 'hsl(var(--color-danger-700) / <alpha-value>)',
      },
      warning: {
        500: 'hsl(var(--color-warning-500) / <alpha-value>)',
        700: 'hsl(var(--color-warning-700) / <alpha-value>)',
      },
      success: {
        500: 'hsl(var(--color-success-500) / <alpha-value>)',
        700: 'hsl(var(--color-success-700) / <alpha-value>)',
      },
      notice: {
        500: 'hsl(var(--color-notice-500) / <alpha-value>)',
        700: 'hsl(var(--color-notice-700) / <alpha-value>)',
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
      mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
    },
    letterSpacing: {
      tighter: '-0.051em',
      tight: '-0.026em',
      normal: '0.01em',
      wide: '0.026em',
      wider: '0.051em',
      widest: '0.101em',
    },
    corePlugins: {
      aspectRatio: false,
    },
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
    },
  },
  plugins: [
    pluginForms,
    pluginTypography,
    pluginAspectRatio,
  ]
}
