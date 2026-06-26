import { motion } from 'framer-motion'
import productSvg from '../../assets/product.svg'

function ProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
      className="absolute bottom-[64px] right-[84px] z-30 w-[220px] rounded-[20px] border border-white/80 bg-white p-2 shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
    >
      <img src={productSvg} alt="Product analytics card illustration" className="h-auto w-full rounded-[14px] object-cover" />
    </motion.div>
  )
}

export default ProductCard
