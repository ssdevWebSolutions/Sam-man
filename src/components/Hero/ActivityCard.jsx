import { motion } from 'framer-motion'
import userActivitySvg from '../../assets/useractivity.svg'

function ActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.45 }}
      className="absolute bottom-[55px] left-[100px] z-30 w-[190px] rounded-[20px] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
    >
      <img src={userActivitySvg} alt="User activity illustration" className="h-auto w-full rounded-[14px] object-cover" />
    </motion.div>
  )
}

export default ActivityCard
