import { motion } from 'framer-motion'

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-[480px]"
    >
      <p className="mb-5 text-[16px] font-semibold text-primary">Who we are</p>
      <h2 className="max-w-[480px] text-[48px] font-bold leading-[1.1] text-[#161E2E] sm:text-[56px]">
        Top #1 marketing agency in the world
      </h2>
      <p className="mt-7 max-w-[470px] text-[18px] leading-[1.8] text-[#6B7280]">
        We blend strategy, storytelling, and product-led thinking to help ambitious brands grow faster with clarity and confidence.
      </p>
      <button className="mt-8 flex h-[50px] items-center rounded-[8px] bg-[#161E2E] px-8 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#233041]">
        Get In Touch
      </button>
    </motion.div>
  )
}

export default AboutContent
