import { motion } from 'framer-motion'

function LogoItem({ logo, index }) {
  const isPrimary = logo.primary

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 0.6, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ opacity: 1, y: -2, scale: 1.01 }}
      className="flex items-center justify-center"
    >
      <img
        src={logo.image}
        alt={logo.alt}
        className={`h-6 w-auto object-contain transition-all duration-250 md:h-7 ${
          isPrimary ? 'opacity-100' : 'opacity-60'
        }`}
      />
    </motion.li>
  )
}

export default LogoItem
