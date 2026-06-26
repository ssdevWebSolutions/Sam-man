import { motion } from 'framer-motion'
import StrategyCard from './StrategyCard'
import { strategyData } from './strategyData'

function MarketingStrategies() {
  return (
    <section className="w-full bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto mb-[72px] max-w-[700px] text-center"
        >
          <h2 className="text-[44px] font-bold leading-[1.2] text-[#161E2E] sm:text-[56px]">
            Why you need multiple
            <br />
            marketing strategies
          </h2>
          <p className="mt-6 text-[20px] leading-[1.8] text-[#6B7280]">
            Choose your best ecommerce store
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {strategyData.map((card, index) => (
            <StrategyCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketingStrategies
