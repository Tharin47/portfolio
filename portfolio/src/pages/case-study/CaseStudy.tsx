import { useMemo } from 'react'
import type { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { CaseStudyDetail } from '@/types/case-study.types'
import { ImageZoomModal } from '@/components/molecules/image-zoom-modal'
import { FigmaEmbed } from '@/components/molecules/figma-embed'
import caseStudiesData from '@/data/case-studies.json'
import heroThumbnailStreetfood from '@/assets/hero-thumbnail-streetfood.webp'
import competitiveAnalysisStreet from '@/assets/competitive-analysis-street.webp'
import userFlowStreet from '@/assets/user-flow-street.webp'
import informationArchitectureStreet from '@/assets/information-architecture-street.webp'
import wireframesStreet from '@/assets/wireframes-street.webp'
import persona1Street from '@/assets/persona1-street.webp'
import persona2Street from '@/assets/persona2-street.webp'
import persona3Street from '@/assets/persona3-street.webp'
import persona4Street from '@/assets/persona4-street.webp'
import gallery0 from '@/assets/gallery0.webp'
import gallery1 from '@/assets/gallery1.webp'
import gallery2 from '@/assets/gallery2.webp'
import gallery3 from '@/assets/gallery3.webp'

const UserJourneySection = ({
  userJourney,
}: {
  userJourney: NonNullable<CaseStudyDetail['userJourney']>
}): ReactElement => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
        User Journey
      </h2>

      {/* Introduction */}
      <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 md:mb-12">
        {userJourney.introduction}
      </p>

      {/* Subsections */}
      <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
            Why this path?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            {userJourney.whyThisPath}
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
            How we tested it:
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            {userJourney.howWeTestedIt}
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
            What we discovered:
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            {userJourney.whatWeDiscovered?.map((discovery, index) => (
              <li
                key={index}
                className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
              >
                {discovery}
              </li>
            )) || []}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
            What we improved:
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            {userJourney.whatWeImproved?.map((improvement, index) => (
              <li
                key={index}
                className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
              >
                {improvement}
              </li>
            )) || []}
          </ul>
        </div>
      </div>

      {/* Journey Map Image */}
      {userJourney.journeyMapImage && (
        <ImageZoomModal imageSrc={userJourney.journeyMapImage} imageAlt="User Journey Map">
          <img
            src={userJourney.journeyMapImage}
            alt="User Journey Map"
            className="w-full h-auto rounded-xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </ImageZoomModal>
      )}
    </div>
  )
}

const GallerySection = (): ReactElement => {
  const galleryImages = [gallery0, gallery1, gallery2, gallery3]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex flex-wrap justify-evenly items-center gap-6 md:gap-8 lg:gap-12">
        {galleryImages.map((galleryImage, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={galleryImage}
              alt={`Gallery image ${index + 1}`}
              className="h-auto w-auto max-w-[240px] rounded-3xl shadow-2xl scale-120"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile: Swiper Slider */}
      <div className="md:hidden overflow-visible">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          className="!pb-0 !overflow-visible"
          style={{
            overflow: 'visible',
          }}
        >
          {galleryImages.map((galleryImage, index) => (
            <SwiperSlide
              key={index}
              className="!flex !justify-center !items-center !h-auto !overflow-visible"
              style={{
                height: 'auto',
                overflow: 'visible',
              }}
            >
              <div className="w-full flex justify-center items-center overflow-visible">
                <img
                  src={galleryImage}
                  alt={`Gallery image ${index + 1}`}
                  className="w-auto h-auto max-w-[240px] rounded-3xl shadow-2xl scale-120"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination - Below Carousel */}
        <div className="swiper-pagination-custom flex justify-center items-center gap-2 mt-6"></div>
      </div>
    </div>
  )
}

const WireframesGallerySection = ({ images }: { images: string[] }): ReactElement => {
  // Map image paths to imported images
  const getImageSrc = (imagePath: string) => {
    if (imagePath.includes('wireframes-street')) {
      return wireframesStreet
    }
    return imagePath
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
      {/* Desktop: 3-Column Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {images.map((image, index) => {
          const imageSrc = getImageSrc(image)
          return (
            <div key={index} className="flex justify-center">
              <ImageZoomModal imageSrc={imageSrc} imageAlt={`Wireframe ${index + 1}`}>
                <img
                  src={imageSrc}
                  alt={`Wireframe ${index + 1}`}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </ImageZoomModal>
            </div>
          )
        })}
      </div>

      {/* Mobile: Swiper Slider */}
      <div className="md:hidden overflow-visible">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-wireframes',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          className="!pb-0 !overflow-visible"
          style={{
            overflow: 'visible',
          }}
        >
          {images.map((image, index) => {
            const imageSrc = getImageSrc(image)
            return (
              <SwiperSlide
                key={index}
                className="!flex !justify-center !items-center !h-auto !overflow-visible"
                style={{
                  height: 'auto',
                  overflow: 'visible',
                }}
              >
                <div className="w-full flex justify-center items-center overflow-visible">
                  <ImageZoomModal imageSrc={imageSrc} imageAlt={`Wireframe ${index + 1}`}>
                    <img
                      src={imageSrc}
                      alt={`Wireframe ${index + 1}`}
                      className="w-auto h-auto max-w-[240px] rounded-3xl shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </ImageZoomModal>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        {/* Custom Pagination - Below Carousel */}
        <div className="swiper-pagination-wireframes flex justify-center items-center gap-2 mt-6"></div>
      </div>
    </div>
  )
}

const CaseStudy = (): ReactElement => {
  const { id } = useParams<{ id: string }>()

  const caseStudy = useMemo<CaseStudyDetail | null>(() => {
    if (!id) return null
    const found = caseStudiesData.caseStudies.find((cs) => cs.id === id)
    if (!found) return null
    return {
      id: found.id,
      title: found.title,
      description: found.description,
      mockups: found.mockups,
      sections: found.sections,
      hero: found.hero,
      overview: found.overview,
      problemSolution: found.problemSolution,
      projectGoals: found.projectGoals,
      interviews: found.interviews,
      findingsInsights: found.findingsInsights,
      userPersonas: found.userPersonas,
      userQuotes: found.userQuotes,
      personasInfo: found.personasInfo,
      userJourney: found.userJourney,
      competitiveResearch: found.competitiveResearch,
      userFlow: found.userFlow,
      informationArchitecture: found.informationArchitecture,
      wireframes: found.wireframes,
      uiDesign: found.uiDesign,
      figmaPrototype: found.figmaPrototype,
      usabilityTesting: found.usabilityTesting,
      conclusion: found.conclusion,
      learningsAndNextSteps: found.learningsAndNextSteps,
    }
  }, [id])

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center">
        <div className="text-[var(--color-text-primary)] text-xl">Case study not found</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)]">
      <section className="w-full py-12 md:py-20">
        {/* Case Study Hero Section */}
        {caseStudy.hero && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6 md:space-y-8 pt-8 md:pt-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.hero.outcome}
                </p>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 border-t border-[var(--color-border-primary)]">
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Platform
                    </p>
                    <p className="text-sm sm:text-base text-[var(--color-text-primary)]">
                      {caseStudy.hero.platform}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Your Role
                    </p>
                    <p className="text-sm sm:text-base text-[var(--color-text-primary)]">
                      {caseStudy.hero.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Duration
                    </p>
                    <p className="text-sm sm:text-base text-[var(--color-text-primary)]">
                      {caseStudy.hero.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Tools
                    </p>
                    <p className="text-sm sm:text-base text-[var(--color-text-primary)]">
                      {caseStudy.hero.tools.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
                  <img
                    src={
                      caseStudy.id === '1'
                        ? heroThumbnailStreetfood
                        : caseStudy.hero?.heroImage || ''
                    }
                    alt={caseStudy.title}
                    className="w-full h-auto rounded-3xl shadow-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overview Section */}
        {caseStudy.overview && caseStudy.overview.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Overview
            </h2>
            <div className="space-y-4 md:space-y-6">
              {caseStudy.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Problem & Solution Section */}
        {caseStudy.problemSolution && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Problem Column */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                  Problem
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {caseStudy.problemSolution.problem.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      {paragraph.split('**').map((part, i) => {
                        // Handle bold text marked with **
                        if (i % 2 === 1) {
                          return (
                            <strong key={i} className="font-semibold">
                              {part}
                            </strong>
                          )
                        }
                        return <span key={i}>{part}</span>
                      })}
                    </p>
                  ))}
                </div>
              </div>

              {/* Solution Column */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                  Solution
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {caseStudy.problemSolution.solution.paragraphs
                    .filter((p) => !p.includes('Each feature directly supports'))
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        {paragraph.split('**').map((part, i) => {
                          // Handle bold text marked with **
                          if (i % 2 === 1) {
                            return (
                              <strong key={i} className="font-semibold">
                                {part}
                              </strong>
                            )
                          }
                          return <span key={i}>{part}</span>
                        })}
                      </p>
                    ))}
                  {caseStudy.problemSolution.solution.features &&
                    caseStudy.problemSolution.solution.features.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed ml-4">
                        {caseStudy.problemSolution.solution.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  {caseStudy.problemSolution.solution.paragraphs
                    .filter((p) => p.includes('Each feature directly supports'))
                    .map((paragraph, index) => (
                      <p
                        key={`final-${index}`}
                        className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        {paragraph.split('**').map((part, i) => {
                          // Handle bold text marked with **
                          if (i % 2 === 1) {
                            return (
                              <strong key={i} className="font-semibold">
                                {part}
                              </strong>
                            )
                          }
                          return <span key={i}>{part}</span>
                        })}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {caseStudy.id === '1' && <GallerySection />}

        {/* Project Goals Section */}
        {caseStudy.projectGoals && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Project goals
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 md:mb-16 max-w-4xl">
              {caseStudy.projectGoals.introduction}
            </p>

            {/* Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20">
              {caseStudy.projectGoals.goals.map((goal, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                    GOAL {goal.number}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] leading-tight">
                    {goal.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Role
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-text-primary)]">
                  {caseStudy.projectGoals.details.role}
                </p>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Tools
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-text-primary)]">
                  {Array.isArray(caseStudy.projectGoals.details.tools)
                    ? caseStudy.projectGoals.details.tools.join(', ')
                    : caseStudy.projectGoals.details.tools}
                </p>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Team
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-text-primary)]">
                  {caseStudy.projectGoals.details.team}
                </p>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Timeline
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-text-primary)]">
                  {caseStudy.projectGoals.details.timeline}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Design Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8 md:mb-12">
            Design Process
          </h2>

          {/* Process Flow */}
          <div className="w-full py-8 md:py-12">
            {/* Desktop: Horizontal Layout */}
            <div className="hidden md:flex items-start justify-center">
              {[
                { number: 1, label: 'Empathize' },
                { number: 2, label: 'Define' },
                { number: 3, label: 'Ideate' },
                { number: 4, label: 'Prototype' },
                { number: 5, label: 'Test' },
                { number: 6, label: 'Implement' },
              ].map((step, index, array) => (
                <div key={step.number} className="flex items-start">
                  {/* Step Circle Container */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] flex items-center justify-center mb-3 relative z-10">
                      <span className="text-lg lg:text-xl font-semibold text-[var(--color-text-primary)]">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-base lg:text-lg font-medium text-[var(--color-text-primary)] whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>

                  {/* Connector Line - Aligned to circle center */}
                  {index < array.length - 1 && (
                    <div
                      className="flex items-center self-center"
                      style={{
                        marginLeft: '8px',
                        marginRight: '8px',
                        marginTop: '32px',
                      }}
                    >
                      <div className="h-0.5 bg-[var(--color-border-primary)] min-w-[30px] max-w-[60px] w-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: Vertical Layout */}
            <div className="md:hidden flex flex-col items-center gap-6">
              {[
                { number: 1, label: 'Empathize' },
                { number: 2, label: 'Define' },
                { number: 3, label: 'Ideate' },
                { number: 4, label: 'Prototype' },
                { number: 5, label: 'Test' },
                { number: 6, label: 'Implement' },
              ].map((step, index, array) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] flex items-center justify-center mb-3">
                      <span className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-base font-medium text-[var(--color-text-primary)]">
                      {step.label}
                    </span>
                  </div>

                  {/* Connector Line - Vertical */}
                  {index < array.length - 1 && (
                    <div className="w-0.5 h-8 bg-[var(--color-border-primary)] mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interviews Section */}
        {caseStudy.interviews && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Interviews
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {caseStudy.interviews.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph.split('**').map((part, i) => {
                    // Handle bold text marked with **
                    if (i % 2 === 1) {
                      return (
                        <strong key={i} className="font-semibold">
                          {part}
                        </strong>
                      )
                    }
                    return <span key={i}>{part}</span>
                  })}
                </p>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-[var(--color-border-primary)] mb-8 md:mb-12"></div>

            {/* Objectives */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                Objectives behind the questions
              </h3>
              <ul className="space-y-3 md:space-y-4 list-disc list-inside">
                {caseStudy.interviews.objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* User Quotes Section */}
        {caseStudy.userQuotes && (
          <div className="w-full py-12 md:py-16 mb-24 md:mb-32 bg-[var(--color-bg-secondary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {caseStudy.userQuotes.quotes.map((quoteItem) => (
                  <div
                    key={quoteItem.number}
                    className="relative bg-[var(--color-bg-primary)] rounded-2xl p-6 md:p-8 shadow-lg"
                  >
                    {/* Large Background Number */}
                    <div className="absolute top-4 right-4 text-[120px] md:text-[140px] font-bold text-[var(--color-bg-secondary)] opacity-20 leading-none">
                      {quoteItem.number.toString().padStart(2, '0')}
                    </div>

                    {/* Quotation Mark Icon */}
                    <div className="relative z-10 mb-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[var(--color-text-muted)]"
                      >
                        <path
                          d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <p className="relative z-10 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      "{quoteItem.quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Findings & Insights Section */}
        {caseStudy.findingsInsights && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8 md:mb-12">
              Findings & Insights
            </h2>

            {/* Findings Subsection */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                Findings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {caseStudy.findingsInsights.findings.map((finding, index) => (
                  <div key={index}>
                    <h4 className="text-xs sm:text-sm font-normal text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      FINDING {index + 1}
                    </h4>
                    <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4 leading-tight">
                      {finding.title}
                    </h5>
                    <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights Subsection */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {caseStudy.findingsInsights.insights.map((insight, index) => (
                  <div key={index}>
                    <h4 className="text-xs sm:text-sm font-normal text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      INSIGHT {index + 1}
                    </h4>
                    <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4 leading-tight">
                      {insight.title}
                    </h5>
                    <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      {insight.description.split('**').map((part, i) => {
                        // Handle bold text marked with **
                        if (i % 2 === 1) {
                          return (
                            <strong key={i} className="font-semibold">
                              {part}
                            </strong>
                          )
                        }
                        return <span key={i}>{part}</span>
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Personas Info Section */}
        {caseStudy.personasInfo && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Personas
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {caseStudy.personasInfo.introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph.split('**').map((part, i) => {
                    // Handle bold text marked with **
                    if (i % 2 === 1) {
                      return (
                        <strong key={i} className="font-semibold">
                          {part}
                        </strong>
                      )
                    }
                    return <span key={i}>{part}</span>
                  })}
                </p>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-[var(--color-border-primary)] mb-8 md:mb-12"></div>

            {/* Subsections */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
                  Why personas?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.personasInfo.whyPersonas}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
                  Data used
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.personasInfo.dataUsed}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
                  Included for each persona
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.personasInfo.includedForEach}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
                  Impact on design
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.personasInfo.impactOnDesign}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 md:mb-4">
                  Used during
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.personasInfo.usedDuring}
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Persona Images Section */}
        {caseStudy.id === '1' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="space-y-4 md:space-y-6">
                <img
                  src={persona1Street}
                  alt="Persona 1"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <img
                  src={persona2Street}
                  alt="Persona 2"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <img
                  src={persona3Street}
                  alt="Persona 3"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <img
                  src={persona4Street}
                  alt="Persona 4"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>

            {/* Mobile: Swiper Slider */}
            <div className="md:hidden overflow-visible">
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-persona',
                  bulletClass: 'swiper-pagination-bullet-custom',
                  bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                }}
                className="!pb-0 !overflow-visible"
                style={{
                  overflow: 'visible',
                }}
              >
                <SwiperSlide
                  className="!flex !justify-center !items-center !h-auto !overflow-visible"
                  style={{
                    height: 'auto',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-full flex justify-center items-center overflow-visible">
                    <img
                      src={persona1Street}
                      alt="Persona 1"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="!flex !justify-center !items-center !h-auto !overflow-visible"
                  style={{
                    height: 'auto',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-full flex justify-center items-center overflow-visible">
                    <img
                      src={persona2Street}
                      alt="Persona 2"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="!flex !justify-center !items-center !h-auto !overflow-visible"
                  style={{
                    height: 'auto',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-full flex justify-center items-center overflow-visible">
                    <img
                      src={persona3Street}
                      alt="Persona 3"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="!flex !justify-center !items-center !h-auto !overflow-visible"
                  style={{
                    height: 'auto',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-full flex justify-center items-center overflow-visible">
                    <img
                      src={persona4Street}
                      alt="Persona 4"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Custom Pagination - Below Carousel */}
              <div className="swiper-pagination-persona flex justify-center items-center gap-2 mt-6"></div>
            </div>
          </div>
        )}

        {/* User Journey Section */}
        {caseStudy.userJourney && <UserJourneySection userJourney={caseStudy.userJourney} />}

        {/* Competitive Research Section */}
        {caseStudy.competitiveResearch && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              {caseStudy.competitiveResearch.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 md:mb-12 max-w-4xl">
              {caseStudy.competitiveResearch.description}
            </p>

            {/* Image */}
            <img
              src={competitiveAnalysisStreet}
              alt="Competitive Analysis"
              className="w-full h-auto rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        )}

        {/* User Flow Section */}
        {caseStudy.userFlow && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              {caseStudy.userFlow.title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {caseStudy.userFlow.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Image */}
            <div className="relative">
              <ImageZoomModal imageSrc={userFlowStreet} imageAlt="User Flow">
                <img
                  src={userFlowStreet}
                  alt="User Flow"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </ImageZoomModal>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] text-center mt-4">
                User Flow
              </p>
            </div>
          </div>
        )}

        {/* Information Architecture Section */}
        {caseStudy.informationArchitecture && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="relative">
              <ImageZoomModal
                imageSrc={informationArchitectureStreet}
                imageAlt="Information Architecture"
              >
                <img
                  src={informationArchitectureStreet}
                  alt="Information Architecture"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </ImageZoomModal>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] text-center mt-4">
                Information Architecture
              </p>
            </div>
          </div>
        )}

        {/* Wireframes Section */}
        {caseStudy.wireframes && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
                  {caseStudy.wireframes.title}
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {caseStudy.wireframes.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: Wireframe Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <ImageZoomModal imageSrc={wireframesStreet} imageAlt="Wireframes ">
                  <img
                    src={wireframesStreet}
                    alt="Wireframes"
                    className="w-full h-auto max-w-[200px] md:max-w-[240px] lg:max-w-[280px] rounded-3xl shadow-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </ImageZoomModal>
              </div>
            </div>
          </div>
        )}

        {/* Wireframes Gallery Section */}
        {caseStudy.wireframes?.gallery && caseStudy.wireframes.gallery.length > 0 && (
          <WireframesGallerySection images={caseStudy.wireframes.gallery} />
        )}

        {/* UI Design Section */}
        {caseStudy.uiDesign && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
                  {caseStudy.uiDesign.title}
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {caseStudy.uiDesign.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: UI Design Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <ImageZoomModal imageSrc={heroThumbnailStreetfood} imageAlt="UI Design">
                  <img
                    src={heroThumbnailStreetfood}
                    alt="UI Design"
                    className="w-full h-auto max-w-[200px] md:max-w-[240px] lg:max-w-[280px] rounded-3xl shadow-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </ImageZoomModal>
              </div>
            </div>
          </div>
        )}

        {/* Figma Prototype Section */}
        {caseStudy.figmaPrototype && (
          <div className="w-full mb-24 md:mb-32">
            <div className=" mx-auto px-4 sm:px-6 md:px-8">
              <FigmaEmbed
                url={caseStudy.figmaPrototype.url}
                title={caseStudy.figmaPrototype.title}
              />
            </div>
          </div>
        )}

        {/* Usability Testing Section */}
        {caseStudy.usabilityTesting && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Usability Testing
            </h2>
            <div className="space-y-6 md:space-y-8">
              {caseStudy.usabilityTesting.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Methodology
                  </h3>
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
                      <strong className="text-[var(--color-text-primary)]">Participants:</strong>{' '}
                      {caseStudy.usabilityTesting.methodology.participants}
                    </p>
                    <div>
                      <strong className="text-[var(--color-text-primary)]">Tasks:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {caseStudy.usabilityTesting.methodology.tasks.map((task, index) => (
                          <li
                            key={index}
                            className="text-base sm:text-lg text-[var(--color-text-secondary)]"
                          >
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-[var(--color-text-primary)]">Observations:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {caseStudy.usabilityTesting.methodology.observations.map((obs, index) => (
                          <li
                            key={index}
                            className="text-base sm:text-lg text-[var(--color-text-secondary)]"
                          >
                            {obs}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-[var(--color-text-primary)]">Feedback:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {caseStudy.usabilityTesting.methodology.feedback.map((fb, index) => (
                          <li
                            key={index}
                            className="text-base sm:text-lg text-[var(--color-text-secondary)]"
                          >
                            {fb}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Key Findings
                  </h3>
                  <ul className="space-y-3 list-disc list-inside">
                    {caseStudy.usabilityTesting.keyFindings.map((finding, index) => (
                      <li
                        key={index}
                        className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion Section */}
        {caseStudy.conclusion && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
              Conclusion
            </h2>
            <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              {caseStudy.conclusion.summary.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {caseStudy.conclusion.metrics && caseStudy.conclusion.metrics.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {caseStudy.conclusion.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-6 md:p-8 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-purple-primary)] mb-3 md:mb-4">
                      {metric.value}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)]">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Learnings & Next Steps Section */}
        {caseStudy.learningsAndNextSteps && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
              {/* Left: Learnings */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                  Learnings
                </h2>
                <ol className="space-y-4 md:space-y-6">
                  {caseStudy.learningsAndNextSteps.learnings.map((learning, index) => (
                    <li key={index} className="space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                        {index + 1}. {learning.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                        {learning.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right: Next Steps */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
                  Next Steps
                </h2>
                <ol className="space-y-4 md:space-y-6">
                  {caseStudy.learningsAndNextSteps.nextSteps.map((step, index) => (
                    <li key={index} className="space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Call to Action */}
            {caseStudy.learningsAndNextSteps.cta && (
              <div className="text-center mt-12 md:mt-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                  {caseStudy.learningsAndNextSteps.cta.heading}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)]">
                  {caseStudy.learningsAndNextSteps.cta.subtitle}
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export { CaseStudy }
