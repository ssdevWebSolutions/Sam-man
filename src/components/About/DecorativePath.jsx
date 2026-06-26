import { motion } from 'framer-motion'

function DecorativePath() {
  return (
    <motion.svg
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      viewBox="0 0 500 500"
      className="absolute left-[-94px] top-[90px] h-[420px] w-[920px] -rotate-8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 358C108 315 138 244 195 200C258 152 336 118 408 94"
        stroke="#00B871"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

export default DecorativePath
