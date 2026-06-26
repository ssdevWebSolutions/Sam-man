import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Logo from './Logo'
import { navigationItems } from './navigation'

function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 lg:hidden"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-border/70 bg-background p-6"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-border/70 text-foreground transition-colors hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
              }}
              aria-label="Mobile navigation"
              className="mt-8 flex flex-1 flex-col gap-2"
            >
              {navigationItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                  onClick={onClose}
                  className="rounded-[8px] px-3 py-3 text-[16px] font-medium text-foreground transition-colors hover:bg-surfaceElevated hover:text-primary"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-primary-hover"
            >
              Get your free website review
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileMenu
