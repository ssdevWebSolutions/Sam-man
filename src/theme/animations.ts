export const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  fadeDown: {
    initial: { opacity: 0, y: -24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 24 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  fadeRight: {
    initial: { opacity: 0, x: -24 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  },
  pageTransition: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hoverLift: {
    whileHover: { y: -4, scale: 1.01 },
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hoverScale: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  buttonHover: {
    whileHover: { scale: 1.01, y: -1 },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.2, ease: 'easeOut' },
  },
} as const
