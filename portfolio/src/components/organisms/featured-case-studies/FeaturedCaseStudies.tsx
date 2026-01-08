import type { ReactElement } from 'react'
import { Button } from '@/components/atoms/button'
import type { FeaturedCaseStudiesProps } from './FeaturedCaseStudies.types'

const FeaturedCaseStudies = ({
  caseStudies,
}: FeaturedCaseStudiesProps): ReactElement => {
  return (
    <section
      id="case-studies"
      className="bg-[#0a0a0f]"
    >
      {caseStudies.map((caseStudy, index) => {
        const isEven = index % 2 === 0
        const imageOrder = isEven ? 'md:order-1' : 'md:order-2'
        const contentOrder = isEven ? 'md:order-2' : 'md:order-1'
        const hasBackground = index % 2 === 0
        const bgClass = hasBackground ? 'bg-[#0f0f15]' : 'bg-[#0a0a0f]'

        return (
          <div
            key={caseStudy.id}
            className={`${bgClass} w-full min-h-[70vh] md:h-screen py-8 md:py-0`}
          >
            <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-center justify-center px-4 sm:px-6 md:px-8">
              <div className={`w-full md:w-3/5 lg:w-2/3 order-1 ${imageOrder}`}>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a24] border border-gray-800">
                  {caseStudy.image ? (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1a1a24]">
                      <p className="text-gray-500 text-sm">Project Preview</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={`w-full md:w-2/5 lg:w-1/3 order-2 ${contentOrder} flex flex-col justify-center`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-3 sm:mb-4 leading-tight">
                  {caseStudy.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-2xl">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#1a1a24] border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {caseStudy.link && (
                  <Button
                    label="View Case Study"
                    href={caseStudy.link}
                    variant="outline"
                    size="md"
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export { FeaturedCaseStudies }

