import { motion } from 'framer-motion'

function FeatureItem({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.08 * index, ease: 'easeOut' }}
      className="max-w-[280px]"
    >
      <div className="mb-5 flex h-8 w-8 items-center justify-center">
        <img src={feature.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
      </div>
      <h3 className="text-[24px] font-semibold leading-tight text-[#161E2E]">{feature.title}</h3>
      <p className="mt-3 text-[17px] leading-[1.7] text-[#6B7280]">{feature.description}</p>
    </motion.div>
  )
}

export default FeatureItem
