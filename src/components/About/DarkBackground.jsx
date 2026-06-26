import { motion } from 'framer-motion'

function DarkBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="absolute left-[80px] top-[98px] h-[360px] w-[260px] rounded-[28px] bg-[#161E2E]"
    />
  )
}

export default DarkBackground
