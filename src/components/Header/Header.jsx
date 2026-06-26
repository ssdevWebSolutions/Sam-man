import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu } from 'lucide-react'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'
import { navigationItems } from './navigation'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="sticky top-0 z-40 border-b border-border/70 bg-background"
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <DesktopNav items={navigationItems} />
          </div>

          <div className="flex items-center justify-end">
            <motion.a
              href="#"
              whileHover={{ scale: 1.005, y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="hidden h-12 min-w-[232px] items-center justify-center gap-2 whitespace-nowrap rounded-[8px] bg-primary px-6 py-3 text-[15px] font-semibold leading-none text-white transition-colors duration-300 hover:bg-primary-hover lg:inline-flex"
            >
              Get your free website review
              <ArrowRight size={15} />
            </motion.a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-border/80 bg-transparent text-foreground transition-colors hover:bg-surfaceElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
