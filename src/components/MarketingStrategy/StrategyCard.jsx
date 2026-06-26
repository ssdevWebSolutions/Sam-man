import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function StrategyCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
    >
      <img src={card.image} alt={card.title} className="h-[240px] w-full object-cover" />
      <div className="p-7">
        <p className="text-[16px] font-semibold text-primary">{card.category}</p>
        <h3 className="mt-4 text-[28px] font-bold leading-[1.25] text-[#161E2E]">{card.title}</h3>
        <p className="mt-5 text-[17px] leading-[1.8] text-[#6B7280]">{card.description}</p>
        <button className="mt-9 inline-flex h-[52px] items-center rounded-[8px] bg-primary px-8 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#00A766]">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.article>
  )
}

export default StrategyCard
