import { motion } from 'framer-motion'
import customerSvg from '../../assets/customer.svg'
import FeatureGrid from './FeatureGrid'

function GoogleAdsContent() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[80px]">
      <div className="w-full lg:w-[55%]">
        <motion.h2
          id="google-ads-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-14 max-w-[430px] text-[40px] font-bold leading-[1.15] text-[#161E2E] sm:text-[48px] lg:text-[56px]"
        >
          Get More Customers
          <br />
          with Google Ads
        </motion.h2>

        <FeatureGrid />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full lg:w-[45%]"
      >
        <img
          src={customerSvg}
          alt="Marketing team working on Google Ads campaigns"
          className="w-full max-w-[460px] rounded-[28px] object-contain"
        />
      </motion.div>
    </div>
  )
}

export default GoogleAdsContent
