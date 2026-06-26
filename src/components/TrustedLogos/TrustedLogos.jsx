import { motion } from 'framer-motion'
import { logos } from './logos'
import LogoItem from './LogoItem'

function TrustedLogos() {
  return (
    <motion.section
      aria-label="Trusted by leading companies"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-[#F7FCFA]"
    >
      <div className="mx-auto flex min-h-[90px] max-w-[1280px] items-center justify-center px-6 py-4 sm:px-8 lg:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 md:gap-x-10 lg:gap-x-14">
          {logos.map((logo, index) => (
            <LogoItem key={logo.name} logo={logo} index={index} />
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default TrustedLogos
