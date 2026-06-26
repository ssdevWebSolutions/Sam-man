import { motion } from 'framer-motion'
import userActivitySvg from '../../assets/useractivity.svg'

function UserActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
      className="absolute left-[-48px] top-[42px] z-10 w-[220px] rounded-[20px] border border-white/80 bg-white p-2 shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
    >
      <img src={userActivitySvg} alt="User activity card illustration" className="h-auto w-full rounded-[14px] object-cover" />
    </motion.div>
  )
}

export default UserActivityCard
