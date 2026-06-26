function Card({ children, className = '', tone = 'default', ...props }) {
  const toneClasses = {
    default: 'border border-border bg-white text-foreground shadow-card',
    dark: 'border border-white/10 bg-slate-900/70 text-white shadow-large',
    elevated: 'border border-border bg-surfaceElevated text-foreground shadow-medium',
  }

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
