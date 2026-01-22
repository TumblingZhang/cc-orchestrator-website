import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { Button } from '../ui/Button'

const navLinks = [
  { href: '#agents', label: 'Agents' },
  { href: '#demo', label: 'Demo' },
  { href: '#workflow', label: 'Workflow' },
]

export function Navigation() {
  const { scrollDirection, scrollY } = useScrollDirection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isVisible = scrollDirection === 'up' || scrollY < 100

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass px-4 md:px-6 py-3"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-6 md:gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-heading font-bold text-xl gradient-text"
          >
            CC
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <Button
            size="sm"
            className="hidden md:block"
            onClick={() => scrollToSection('#demo')}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              data-testid="mobile-drawer"
              className="fixed top-0 right-0 h-full w-64 glass-dark z-50 md:hidden p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                className="absolute top-4 right-4 p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <nav className="mt-16 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-white/80 hover:text-white transition-colors text-lg font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}

                <Button
                  className="mt-4"
                  onClick={() => scrollToSection('#demo')}
                >
                  Get Started
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
