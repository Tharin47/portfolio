import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactElement } from 'react'

const Loader = ({ onComplete }: { onComplete?: () => void }): ReactElement => {
  const [showLogo, setShowLogo] = useState(true)
  const [showText, setShowText] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const fullText = 'Loading Portfolio...'

  useEffect(() => {
    // Prevent scrolling and overflow during loading
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      // Restore scrolling after loader completes
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    // Show logo rotation for 1.5 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(false)
      setShowText(true)
    }, 1500)

    return () => clearTimeout(logoTimer)
  }, [])

  useEffect(() => {
    if (!showText) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Wait a bit after typing completes, then call onComplete
        setTimeout(() => {
          setIsComplete(true)
          if (onComplete) {
            setTimeout(() => {
              onComplete()
            }, 500)
          }
        }, 1000)
      }
    }, 50) // Typing speed

    return () => clearInterval(typingInterval)
  }, [showText, fullText, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg-primary)] overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Logo with rotation */}
            <AnimatePresence mode="wait">
              {showLogo && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    rotate: {
                      duration: 1.5,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-white" />
                    <div className="absolute inset-2 bg-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Typing animation */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] font-mono text-center">
                    {displayedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      className="inline-block ml-1"
                    >
                      |
                    </motion.span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Loader }

