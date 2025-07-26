const colors = require('./theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  plugins: [],
  
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        display: ['Nunito', 'system-ui', 'sans-serif'], // For headlines and titles
        body: ['Inter', 'system-ui', 'sans-serif'], // For body text and labels
      },
      colors: {
        // Material Design 3 Color Roles
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        surface: colors.surface,
        background: colors.background,
        outline: colors.outline,
        error: colors.error,
        inverse: colors.inverse,
        shadow: colors.shadow,
        scrim: colors.scrim,
        'surface-tint': colors['surface-tint'],

        // Dark mode colors (accessible via dark: modifier)
        // These will be handled through CSS custom properties for better theming

        // Legacy color mapping for gradual migration
        card: colors.card,
        'text-primary': colors.textPrimary,
        'text-secondary': colors.textSecondary,
        border: colors.border,
        success: colors.success,
        warning: colors.warning,
        info: colors.info,
        muted: colors.muted,
        'tag-bg': colors.tagBg,

        // Keep existing color palettes for legacy components
        violet: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        sage: {
          50: 'hsl(85 10% 95%)',
          100: 'hsl(85 10% 90%)',
          200: 'hsl(85 10% 80%)',
          300: 'hsl(85 10% 70%)',
          400: 'hsl(85 15% 60%)',
          500: 'hsl(85 15% 50%)',
          600: 'hsl(85 15% 45%)',
          700: 'hsl(85 20% 35%)',
          800: 'hsl(85 20% 25%)',
          900: 'hsl(85 20% 20%)',
        },

        // Additional semantic colors for Material Design 3
        'on-primary': colors.primary.foreground,
        'primary-container': colors.primary.container,
        'on-primary-container': colors.primary['container-foreground'],
        'on-secondary': colors.secondary.foreground,
        'secondary-container': colors.secondary.container,
        'on-secondary-container': colors.secondary['container-foreground'],
        'on-tertiary': colors.tertiary.foreground,
        'tertiary-container': colors.tertiary.container,
        'on-tertiary-container': colors.tertiary['container-foreground'],
        'on-surface': colors.surface.foreground,
        'surface-variant': colors.surface.variant,
        'on-surface-variant': colors.surface['variant-foreground'],
        'surface-container': colors.surface.container,
        'surface-container-high': colors.surface['container-high'],
        'surface-container-highest': colors.surface['container-highest'],
        'surface-container-low': colors.surface['container-low'],
        'surface-container-lowest': colors.surface['container-lowest'],
        'on-background': colors.background.foreground,
        'outline-variant': colors.outline.variant,
        'on-error': colors.error.foreground,
        'error-container': colors.error.container,
        'on-error-container': colors.error['container-foreground'],
        'inverse-surface': colors.inverse.surface,
        'inverse-on-surface': colors.inverse['surface-foreground'],
        'inverse-primary': colors.inverse.primary,
      },
      borderRadius: {
        // Material Design 3 shape scale
        xs: '4px', // Extra small components
        sm: '8px', // Small components
        md: '12px', // Medium components
        lg: '16px', // Large components
        xl: '20px', // Extra large components
        '2xl': '28px', // Extra large components with emphasis
        full: '9999px', // Fully rounded (pills, FABs)

        // Legacy support
        card: '16px', // matches lg
        button: '24px', // matches full for most cases
      },
      spacing: {
        // Material Design 3 spacing scale
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        // Material Design 3 Expressive motion
        'expressive-enter': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8) translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        'expressive-exit': {
          '0%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9) translateY(-8px)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'expressive-enter': 'expressive-enter 0.4s cubic-bezier(0.2, 0, 0, 1)',
        'expressive-exit': 'expressive-exit 0.2s cubic-bezier(0.4, 0, 1, 1)',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      fontSize: {
        // Material Design 3 type scale
        // Display (Nunito)
        'display-large': ['57px', { lineHeight: '64px', fontFamily: 'Nunito' }],
        'display-medium': ['45px', { lineHeight: '52px', fontFamily: 'Nunito' }],
        'display-small': ['36px', { lineHeight: '44px', fontFamily: 'Nunito' }],

        // Headline (Nunito)
        'headline-large': ['32px', { lineHeight: '40px', fontFamily: 'Nunito' }],
        'headline-medium': ['28px', { lineHeight: '36px', fontFamily: 'Nunito' }],
        'headline-small': ['24px', { lineHeight: '32px', fontFamily: 'Nunito' }],

        // Title (Nunito)
        'title-large': ['22px', { lineHeight: '28px', fontFamily: 'Nunito' }],
        'title-medium': ['16px', { lineHeight: '24px', fontFamily: 'Nunito' }],
        'title-small': ['14px', { lineHeight: '20px', fontFamily: 'Nunito' }],

        // Body (Inter)
        'body-large': ['16px', { lineHeight: '24px', fontFamily: 'Inter' }],
        'body-medium': ['14px', { lineHeight: '20px', fontFamily: 'Inter' }],
        'body-small': ['12px', { lineHeight: '16px', fontFamily: 'Inter' }],

        // Label (Inter)
        'label-large': ['14px', { lineHeight: '20px', fontFamily: 'Inter' }],
        'label-medium': ['12px', { lineHeight: '16px', fontFamily: 'Inter' }],
        'label-small': ['11px', { lineHeight: '16px', fontFamily: 'Inter' }],

        // Legacy support (keeping for gradual migration)
        xs: ['10px', { lineHeight: '14px' }], // for subtle UI captions
        sm: ['12px', { lineHeight: '16px' }], // emoji labels, hints
        base: ['14px', { lineHeight: '20px' }], // body text
        md: ['16px', { lineHeight: '22px' }], // optional: dense body or buttons
        xl: ['18px', { lineHeight: '24px' }], // section/card titles
        '2xl': ['24px', { lineHeight: '32px' }], // screen titles
        '3xl': ['30px', { lineHeight: '38px' }], // onboarding, headlines
        '5xl': ['36px', { lineHeight: '44px' }], // hero/intro screens
      },
    },
  },

};
