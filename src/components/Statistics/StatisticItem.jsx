import { motion } from 'framer-motion'
import upwardArrow from '../../assets/upwardarrow.svg'

function StatisticItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-[42px] font-bold leading-none text-white sm:text-[48px] lg:text-[54px]">
          {item.value}
        </span>
        <img src={upwardArrow} alt="" aria-hidden="true" className="h-8 w-8 sm:h-8 sm:w-8 lg:h-8 lg:w-8" />
      </div>
      <p className="mt-4 text-[16px] font-medium leading-none text-white/80 sm:text-[18px]">
        {item.label}
      </p>
    </motion.div>
  )
}

export default StatisticItem
