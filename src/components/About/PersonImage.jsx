import { motion } from 'framer-motion'
import personSvg from '../../assets/person-2.svg'

function PersonImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="absolute left-[-30px] top-[58px] z-20 h-[400px] w-[330px] overflow-visible"
    >
      <img src={personSvg} alt="Person illustration" className="h-full w-full object-contain object-left-bottom" />
    </motion.div>
  )
}

export default PersonImage
