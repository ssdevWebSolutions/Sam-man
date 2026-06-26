import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
import { features } from './features'

function FeatureGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="grid gap-10 sm:grid-cols-2"
    >
      {features.map((feature, index) => (
        <FeatureItem key={feature.title} feature={feature} index={index} />
      ))}
    </motion.div>
  )
}

export default FeatureGrid
