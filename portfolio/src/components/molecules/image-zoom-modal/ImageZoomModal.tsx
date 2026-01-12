import { useState } from 'react'
import type { ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageZoomModalProps {
  imageSrc: string
  imageAlt: string
  children: ReactElement
}

const ImageZoomModal = ({ imageSrc, imageAlt, children }: ImageZoomModalProps): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setIsModalOpen(true)}
      >
        {children}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors bg-[var(--color-bg-primary)] rounded-full p-2 shadow-lg"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { ImageZoomModal }

