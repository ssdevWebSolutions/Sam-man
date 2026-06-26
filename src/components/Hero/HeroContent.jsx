import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="max-w-[560px]"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="mb-5 text-[16px] font-semibold uppercase tracking-[0.18em] text-primary"
      >
        Award winning company
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        className="text-[36px] font-bold leading-[1.05] text-foreground sm:text-[48px] lg:text-[64px]"
      >
        Digital marketing agency and design. We grow your business online
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.5 }}
        className="mt-6 max-w-[480px] text-[16px] leading-7 text-muted-foreground sm:text-[18px]"
      >
        We create smart strategy, polished product experiences, and growth systems that help ambitious brands stand out.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        className="mt-8 inline-flex h-[52px] items-center gap-2 rounded-[8px] bg-primary px-8 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-primary-hover"
      >
        Start a project
        <ArrowRight size={16} />
      </motion.a>
    </motion.div>
  )
}

export default HeroContent
