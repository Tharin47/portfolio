import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactElement } from 'react'
import { ThemeToggle } from '@/components/atoms/theme-toggle'
import type { HeaderProps } from './Header.types'

const Header = ({
  navItems = [
    { label: 'Portfolio', href: '/' },
    { label: 'Resume', href: '/resume' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Writing', href: '#writing' },
    { label: 'About', href: '/about' },
  ],
  showLogo = true,
}: HeaderProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (): void => {
    setIsMenuOpen(false)
  }

  const isActiveRoute = (href: string): boolean => {
    if (href.startsWith('#')) {
      return false
    }
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={
        isScrolled
          ? {
              boxShadow: '0 2px 12px rgba(96, 165, 250, 0.4), 0 1px 4px rgba(96, 165, 250, 0.3)',
            }
          : undefined
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between relative">
        {showLogo && (
          <Link
            to="/"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0"
            aria-label="Home"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-[var(--color-text-primary)]" />
              <div className="absolute inset-2 bg-[var(--color-text-primary)]" />
            </div>
          </Link>
        )}
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8 ml-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href)
              const isHashLink = item.href.startsWith('#')

              if (isHashLink) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-sm sm:text-base font-medium uppercase tracking-wide transition-colors duration-200 text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)] whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              }

              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`block text-sm sm:text-base font-medium uppercase tracking-wide transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-[var(--color-text-primary)] border-b-2 border-[var(--color-purple-tertiary)] pb-1'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Full Screen Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[var(--color-bg-primary)] z-50 md:hidden"
                onClick={handleMenuToggle}
              >
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="h-full w-full bg-[var(--color-bg-primary)] flex flex-col items-center justify-center gap-8 p-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    type="button"
                    onClick={handleMenuToggle}
                    className="absolute top-6 right-6 text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)] transition-colors duration-200 focus:outline-none p-2"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center justify-center gap-8"
                  >
                    {navItems.map((item, index) => {
                      const isActive = isActiveRoute(item.href)
                      const isHashLink = item.href.startsWith('#')

                      return (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {isHashLink ? (
                            <a
                              href={item.href}
                              onClick={handleNavClick}
                              className={`block text-2xl font-medium uppercase tracking-wide transition-colors duration-200 text-center ${
                                isActive
                                  ? 'text-[var(--color-purple-secondary)]'
                                  : 'text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)]'
                              }`}
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              onClick={handleNavClick}
                              className={`block text-2xl font-medium uppercase tracking-wide transition-colors duration-200 text-center ${
                                isActive
                                  ? 'text-[var(--color-purple-secondary)]'
                                  : 'text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="text-[var(--color-text-primary)] hover:text-[var(--color-purple-secondary)] transition-colors duration-200 focus:outline-none p-1"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }

