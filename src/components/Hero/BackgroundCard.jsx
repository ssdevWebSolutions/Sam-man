import { motion } from 'framer-motion'

function BackgroundCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute left-[150px] top-[80px] z-0 h-[470px] w-[360px] rounded-[28px] bg-primary"
    />
  )
}

export default BackgroundCard
