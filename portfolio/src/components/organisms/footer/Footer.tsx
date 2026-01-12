import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
    <>
      <footer className="w-full border-t border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Left Section: Identity and Navigation */}
            <div className="flex flex-col gap-6">
              {/* Name and Title */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-1">
                  Tharindu Gunawardhana
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)]">
                  UX designer
                </p>
              </div>

              {/* Navigation Buttons */}
              <nav className="flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-sm sm:text-base"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
                <Link
                  to="/resume"
                  className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-sm sm:text-base"
                >
                  Resume
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      {/* Support Button - Fixed bottom left */}
      <button
        className="fixed bottom-6 left-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FFD700] hover:bg-[#FFC700] transition-colors shadow-lg flex items-center justify-center text-[var(--color-text-primary)] font-bold text-lg md:text-xl"
        aria-label="Support"
        onClick={() => {
          // Add support functionality here (e.g., open support modal, link to support page, etc.)
          console.log('Support clicked')
        }}
      >
        ?
      </button>
    </>
  )
}

export { Footer }

