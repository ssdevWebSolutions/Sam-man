import { motion } from 'framer-motion'

function DecorativeCircles() {
  return (
    <div className="absolute inset-0">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="absolute bottom-[40px] left-[0px] h-[78px] w-[78px] rounded-full border-[4px] border-primary"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
        className="absolute right-[24px] top-[16px] h-[22px] w-[22px] rounded-full border-[4px] border-primary"
      />
    </div>
  )
}

export default DecorativeCircles
