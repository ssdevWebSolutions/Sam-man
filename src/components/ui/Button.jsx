import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-small',
  secondary: 'bg-foreground text-white hover:bg-slate-800 shadow-small',
  outline: 'border border-border bg-transparent text-foreground hover:bg-surfaceElevated',
  ghost: 'bg-transparent text-foreground hover:bg-surfaceElevated',
  link: 'bg-transparent p-0 text-primary hover:text-primary-hover underline-offset-4 hover:underline',
}

function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  return (
    <motion.div whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
      <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
        {children}
      </Component>
    </motion.div>
  )
}

export default Button
