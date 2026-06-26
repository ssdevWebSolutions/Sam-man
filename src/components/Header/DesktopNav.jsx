import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function DesktopNav({ items }) {
  return (
    <nav className="hidden lg:block" aria-label="Primary navigation">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.04,
            },
          },
        }}
        className="flex items-center gap-10"
      >
        {items.map((item) => (
          <motion.li
            key={item.label}
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            className="relative"
          >
            <a
              href={item.href}
              className="group relative flex items-center gap-1 text-[16px] font-medium leading-none text-foreground transition-colors duration-250 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>{item.label}</span>
              {item.items ? <ChevronDown size={14} strokeWidth={1.7} className="transition-transform duration-250 group-hover:rotate-180" /> : null}
              <span className="absolute inset-x-0 -bottom-[6px] h-[1px] origin-center scale-x-0 bg-primary transition-transform duration-250 group-hover:scale-x-100" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default DesktopNav
