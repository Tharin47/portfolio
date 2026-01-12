import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Orb } from '@/components/atoms/orb'
import type { HeroProps } from './Hero.types'

const Hero = ({
  name,
  valueProposition,
  intro,
}: HeroProps): ReactElement => {
  const description = valueProposition || intro

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const nameWords = name.split(' ')
  const [bgColor, setBgColor] = useState<string>('#ffffff')
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true)

  useEffect(() => {
    const updateBgColor = (): void => {
      const computedColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-bg-primary')
        .trim()
      setBgColor(computedColor || '#ffffff')
    }

    updateBgColor()
    const observer = new MutationObserver(updateBgColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor={bgColor}
        />
      </motion.div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex flex-col items-center px-12">
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-4 font-sans"
            >
              Portfolio
            </motion.p>
            <h1 className="text-2xl sm:text-6xl font-serif text-[var(--color-text-primary)] mb-6 font-normal">
              {nameWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.div
              variants={itemVariants}
              className="w-24 h-px bg-[var(--color-border-secondary)] mb-6"
            />
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-sans"
              >
                {description.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + index * 0.03,
                    }}
                    className="inline-block mr-1"
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.p>
            )}
          </div>
        </motion.div>
        {/* Scroll Down Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                y: -20,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                delay: 1.5, 
                duration: 0.8,
              }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }}
          >
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              View Work
            </span>
            <motion.svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--color-text-muted)]"
            >
              <motion.rect
                x="2"
                y="2"
                width="20"
                height="36"
                rx="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 2 }}
              />
              <motion.circle
                cx="12"
                cy="10"
                r="3"
                fill="currentColor"
                animate={{ cy: [10, 26, 10] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.svg>
          </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export { Hero }

