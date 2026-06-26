import { motion } from 'framer-motion'
import personSvg from '../../assets/person.svg'

function PersonImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.12, duration: 0.5, ease: 'easeOut' }}
      className="absolute bottom-[10px] left-[140px] z-20 h-[670px] w-[390px] overflow-visible bg-transparent shadow-none"
    >
      <img src={personSvg} alt="Person illustration" className="h-full w-full object-contain object-left-bottom" />
    </motion.div>
  )
}

export default PersonImage
