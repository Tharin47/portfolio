import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactElement } from 'react'
import { Button } from '@/components/atoms/button'
import { CaseStudyThumbnail } from '@/components/molecules/case-study-thumbnail'
import type { FeaturedCaseStudiesProps } from './FeaturedCaseStudies.types'

interface CaseStudyItemProps {
  caseStudy: {
    id: string
    title: string
    description: string
    image?: string
    tags: string[]
    link?: string
  }
  index: number
}

const CaseStudyItem = ({ caseStudy, index }: CaseStudyItemProps): ReactElement => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const isEven = index % 2 === 0
  const imageOrder = isEven ? 'md:order-1' : 'md:order-2'
  const contentOrder = isEven ? 'md:order-2' : 'md:order-1'
  const hasBackground = index % 2 === 0
  const bgClass = hasBackground ? 'bg-[var(--color-bg-secondary)]' : 'bg-[var(--color-bg-primary)]'

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${bgClass} w-full min-h-[70vh] md:h-screen py-8 md:py-0`}
    >

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          variants={imageVariants}
          className={`w-full md:w-3/5 lg:w-2/3 order-1 ${imageOrder}`}
        >
          {caseStudy.id === '1' ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CaseStudyThumbnail />
            </motion.div>
          ) : (
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-bg-tertiary)] border border-[var(--color-border-secondary)]">
              {caseStudy.image ? (
                <motion.img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[var(--color-bg-tertiary)]">
                  <p className="text-[var(--color-text-muted)] text-sm">Project Preview</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`w-full md:w-2/5 lg:w-1/3 order-2 ${contentOrder} flex flex-col justify-center`}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-3 sm:mb-4 leading-tight"
          >
            {caseStudy.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[var(--color-text-tertiary)] mb-4 sm:mb-6 leading-relaxed max-w-2xl"
          >
            {caseStudy.description}
          </motion.p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {caseStudy.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                custom={tagIndex}
                variants={tagVariants}
                className="px-3 py-1.5 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] text-[var(--color-text-tertiary)] rounded-full text-sm font-medium hover:border-[var(--color-purple-tertiary)] hover:text-[var(--color-purple-secondary)] transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          {caseStudy.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                label={caseStudy.link === '/other-projects' ? 'View Projects' : 'View Case Study'}
                to={caseStudy.link}
                variant="outline"
                size="md"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

const FeaturedCaseStudies = ({
  caseStudies,
}: FeaturedCaseStudiesProps): ReactElement => {
  return (
    <section
      id="case-studies"
      className="bg-[var(--color-bg-primary)]"
    >
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyItem key={caseStudy.id} caseStudy={caseStudy} index={index} />
      ))}
    </section>
  )
}

export { FeaturedCaseStudies }

