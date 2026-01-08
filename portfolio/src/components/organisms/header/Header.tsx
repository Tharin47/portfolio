import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { ReactElement } from 'react'
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
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
        {showLogo && (
          <Link
            to="/"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
            aria-label="Home"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-white" />
              <div className="absolute inset-2 bg-white" />
            </div>
          </Link>
        )}
        <div className="md:hidden">
          <button
            type="button"
            onClick={handleMenuToggle}
            className="text-white hover:text-purple-400 transition-colors duration-200 focus:outline-none"
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
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-[#0a0a0f]/95 md:bg-transparent md:items-center md:gap-6 lg:gap-8 p-4 md:p-0`}
        >
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href)
            const isHashLink = item.href.startsWith('#')

            if (isHashLink) {
              return (
                <li key={item.label} className="py-2 md:py-0">
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block text-sm sm:text-base font-medium uppercase tracking-wide transition-colors duration-200 text-white hover:text-purple-400"
                  >
                    {item.label}
                  </a>
                </li>
              )
            }

            return (
              <li key={item.label} className="py-2 md:py-0">
                <Link
                  to={item.href}
                  onClick={handleNavClick}
                  className={`block text-sm sm:text-base font-medium uppercase tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white border-b-2 border-purple-500 pb-1'
                      : 'text-white hover:text-purple-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export { Header }

