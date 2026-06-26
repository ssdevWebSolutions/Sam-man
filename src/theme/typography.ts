export const typography = {
  displayXL: {
    fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },
  displayLarge: {
    fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  headingXL: {
    fontSize: 'clamp(1.875rem, 3.4vw, 2.5rem)',
    fontWeight: 600,
    lineHeight: 1.16,
    letterSpacing: '-0.02em',
  },
  headingLarge: {
    fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  headingMedium: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: '-0.01em',
  },
  headingSmall: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.01em',
  },
  bodyLarge: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: '-0.01em',
  },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0em',
  },
  small: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.02em',
  },
} as const
