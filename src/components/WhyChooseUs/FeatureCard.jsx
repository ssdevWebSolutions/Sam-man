import { motion } from 'framer-motion'

function FeatureCard({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      className="rounded-[20px] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="mb-5 flex h-8 w-8 items-center justify-center">
        <img src={feature.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
      </div>
      <h3 className="text-[24px] font-semibold leading-tight text-[#161E2E]">{feature.title}</h3>
      <p className="mt-3 text-[17px] leading-[1.7] text-[#6B7280]">{feature.description}</p>
    </motion.div>
  )
}

export default FeatureCard
