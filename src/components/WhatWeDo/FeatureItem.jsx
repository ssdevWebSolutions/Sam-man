import { motion } from 'framer-motion'
import tickSvg from '../../assets/tick.svg'

function FeatureItem({ feature, index }) {
  const content = (
    <div className="max-w-[280px]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#F4FBF8]">
        <img src={tickSvg} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
      </div>
      <h3 className="text-[24px] font-semibold leading-[1.3] text-[#161E2E] sm:text-[28px]">
        {feature.title}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.8] text-[#6B7280] sm:text-[18px]">
        {feature.description}
      </p>
    </div>
  )

  if (feature.highlighted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
        whileHover={{ y: -4, scale: 1.01 }}
        className="rounded-[20px] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
      >
        {content}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {content}
    </motion.div>
  )
}

export default FeatureItem
