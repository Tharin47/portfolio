import { useMemo } from 'react'
import type { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import type { FreelanceProject } from '@/types/freelance-project.types'
import { FigmaEmbed } from '@/components/molecules/figma-embed'
import freelanceProjectsData from '@/data/freelance-projects.json'
import amaraHome from '@/assets/amara/Home.png'
import amaraShop from '@/assets/amara/Shop.png'
import amaraSingleProduct from '@/assets/amara/Single Product.png'
import amaraRingSelection from '@/assets/amara/Ring Selection Page.png'
import amaraRingSelectionGem from '@/assets/amara/Ring Selection Page Gem.png'
import amaraRingCustomization from '@/assets/amara/Ring Customization Page.png'
import amaraRingCustomizationGem from '@/assets/amara/Ring Customization Page - gem.png'

const assetMap: Record<string, string> = {
  'amara/Home.png': amaraHome,
  'amara/Shop.png': amaraShop,
  'amara/Single Product.png': amaraSingleProduct,
  'amara/Ring Selection Page.png': amaraRingSelection,
  'amara/Ring Selection Page Gem.png': amaraRingSelectionGem,
  'amara/Ring Customization Page.png': amaraRingCustomization,
  'amara/Ring Customization Page - gem.png': amaraRingCustomizationGem,
}

const FreelanceProjects = (): ReactElement => {
  const projects = useMemo<FreelanceProject[]>(() => {
    return (freelanceProjectsData.projects || []).map((project) => ({
      ...project,
      gallery: project.gallery?.map((img) => assetMap[img] || img) || [],
    }))
  }, [])

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
            Other Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Selected works highlighting design experiments, prototypes, and side projects created
            across various industries.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-24 md:pb-32">
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, projectIndex) => (
            <div key={project.id} className="space-y-12 md:space-y-16">
              {/* Project Title and Description */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center  font-bold text-[var(--color-text-primary)]">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-center text-[var(--color-text-secondary)] leading-relaxed max-w-4xl">
                  {project.description}
                </p>
              </div>

              {/* Gallery Slider */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-12 md:mb-16">
                  {/* Browser Frame */}
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border-primary)] shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    {/* Browser Header */}
                    <div className="bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border-primary)] px-4 py-3 flex items-center gap-2">
                      {/* Browser Controls (Traffic Lights) */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      {/* Browser Address Bar */}
                      <div className="flex-1 bg-[var(--color-bg-primary)] rounded text-xs text-[var(--color-text-muted)] border border-[var(--color-border-primary)] truncate">
                        {project.title}
                      </div>
                    </div>
                    {/* Browser Content - Swiper */}
                    <div className="bg-white overflow-hidden h-[300px] md:h-[700px] lg:h-[700px]">
                      <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                          clickable: true,
                          el: `.swiper-pagination-project-${projectIndex}`,
                          bulletClass: 'swiper-pagination-bullet-custom',
                          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 1,
                          },
                        }}
                        className="!pb-0 h-full"
                      >
                        {project.gallery.map((image, imageIndex) => (
                          <SwiperSlide key={imageIndex} className="!h-full">
                            <div className="w-full h-full overflow-y-auto overflow-x-hidden">
                              <img
                                src={image}
                                alt={`${project.title} - Image ${imageIndex + 1}`}
                                className="w-full h-auto"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = 'none'
                                }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* Custom Pagination */}
                  <div
                    className={`swiper-pagination-custom swiper-pagination-project-${projectIndex} mt-8`}
                  ></div>
                </div>
              )}

              {/* Figma Embed */}
              {project.figmaPrototype && (
                <div className="w-screen md:px-20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <FigmaEmbed
                    url={project.figmaPrototype.url}
                    title={project.figmaPrototype.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export { FreelanceProjects }
