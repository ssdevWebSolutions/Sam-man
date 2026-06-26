import { motion } from 'framer-motion'
import StatisticItem from './StatisticItem'
import { statistics } from './statistics'

function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className="w-full bg-white py-[100px] sm:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto flex min-h-[280px] max-w-[1120px] flex-col rounded-[20px] bg-[#161E2E] px-8 py-10 sm:px-12 sm:py-12 lg:px-[72px] lg:py-[64px]"
        >
          <h2
            id="statistics-heading"
            className="mx-auto mb-14 text-center text-[30px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]"
          >
            The proofs is in the numbers
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((item, index) => (
              <StatisticItem key={item.label} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
