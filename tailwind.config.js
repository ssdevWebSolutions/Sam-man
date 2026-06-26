export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00B871',
        foreground: '#161E2E',
        muted: '#6B7280',
        border: '#E5E7EB',
        background: '#FFFFFF',
        surfaceElevated: '#F9FAFB',
      },
      boxShadow: {
        small: '0 1px 2px rgba(22, 30, 46, 0.06)',
        medium: '0 10px 30px rgba(22, 30, 46, 0.08)',
        large: '0 20px 60px rgba(22, 30, 46, 0.12)',
        card: '0 16px 44px rgba(22, 30, 46, 0.08)',
        floating: '0 24px 80px rgba(22, 30, 46, 0.14)',
        hover: '0 16px 40px rgba(22, 30, 46, 0.16)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.625rem',
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1360px',
        },
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
