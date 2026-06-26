import { motion } from 'framer-motion'
import provenSvg from '../../assets/proven.svg'

function ProvenStrategy() {
  return (
    <section className="w-full bg-[#161E2E] py-[120px]">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 sm:px-8 lg:grid-cols-[48%_52%] lg:items-center lg:gap-[80px] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full"
        >
          <img src={provenSvg} alt="Illustration showing a proven strategy" className="w-full max-w-[560px] rounded-[18px] object-contain" />
        </motion.div>

        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-7 max-w-[480px] text-[40px] font-bold leading-[1.2] text-white sm:text-[48px] lg:text-[56px]"
          >
            Our Proven Strategy for
            Growing Your Sales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="max-w-[460px] text-[18px] leading-[1.8] text-white/80 sm:text-[20px]"
          >
            A focused approach to align your offer, message, and marketing actions so growth becomes measurable and sustainable.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default ProvenStrategy
