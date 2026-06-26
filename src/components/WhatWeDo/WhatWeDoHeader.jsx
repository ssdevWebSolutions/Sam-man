import { motion } from 'framer-motion'

function WhatWeDoHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto mb-[90px] max-w-[720px] text-center"
    >
      <h2 id="what-we-do-heading" className="mb-5 text-[48px] font-bold leading-tight text-[#161E2E] sm:text-[56px]">
        What We Do
      </h2>
      <p className="text-[18px] leading-[1.8] text-[#6B7280] sm:text-[20px]">
        We are flexible and cope with multiple tasks to make you a leader in the market.
      </p>
    </motion.div>
  )
}

export default WhatWeDoHeader
