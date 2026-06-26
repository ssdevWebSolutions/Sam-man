import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FeatureGrid from './FeatureGrid'
import workingSvg from '../../assets/working.svg'

function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us" className="w-full bg-[#F8FFFC]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 py-[96px] sm:px-8 sm:py-[110px] lg:flex-row lg:items-center lg:gap-[80px] lg:px-10 lg:py-[120px]">
        <div className="w-full lg:w-[58%]">
          <motion.h2
            id="why-choose-us"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-14 max-w-[620px] text-[44px] font-bold leading-[1.2] text-[#161E2E] sm:text-[56px]"
          >
            Why top Ecommerce and startup companies choose us :
          </motion.h2>

          <FeatureGrid />

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.01, backgroundColor: '#00A766' }}
            className="mt-14 inline-flex h-[52px] items-center rounded-[8px] bg-primary px-8 text-[16px] font-semibold text-white transition-colors duration-300"
          >
            Let's Chat
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full lg:w-[42%]"
        >
          <div className="overflow-hidden rounded-[28px] bg-white">
            <img
              src={workingSvg}
              alt="Professional working on ecommerce website"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
