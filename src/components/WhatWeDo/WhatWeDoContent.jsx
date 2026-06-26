import { motion } from 'framer-motion'
import designSvg from '../../assets/design.svg'
import FeatureGrid from './FeatureGrid'

function WhatWeDoContent() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[80px]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full lg:w-[45%]"
      >
        <img
          src={designSvg}
          alt="Abstract design illustration"
          className="w-full max-w-[430px] rounded-[28px] object-contain"
        />
      </motion.div>

      <div className="w-full lg:w-[55%]">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-14 max-w-[420px] text-[40px] font-bold leading-[1.15] text-[#161E2E] sm:text-[48px] lg:text-[52px]"
        >
          Good Design
          <br />
          Increases Sales
        </motion.h3>

        <FeatureGrid />
      </div>
    </div>
  )
}

export default WhatWeDoContent
