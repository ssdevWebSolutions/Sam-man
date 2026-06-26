import { motion } from 'framer-motion'
import dashboardSvg from '../../assets/dashboard.svg'

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.14, duration: 0.45 }}
      className="absolute bottom-[74px] right-[-68px] z-10 w-[210px] rounded-[20px] border border-white/60 bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
    >
      <img src={dashboardSvg} alt="Dashboard analytics illustration" className="h-auto w-full rounded-[14px] object-cover" />
    </motion.div>
  )
}

export default DashboardCard
