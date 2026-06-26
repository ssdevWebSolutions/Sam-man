import { motion } from 'framer-motion'
import productSvg from '../../assets/product.svg'

function ProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.16, duration: 0.45 }}
      className="absolute  right-[-130px] top-[-20px] z-10 w-[290px] rounded-[20px] border border-white/60 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
    >
      <img src={productSvg} alt="Product analytics illustration" className="h-auto w-full rounded-[14px] object-cover" />
    </motion.div>
  )
}

export default ProductCard
