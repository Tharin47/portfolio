import type { ReactElement } from 'react'
import gallery0 from '@/assets/gallery0.webp'
import gallery1 from '@/assets/gallery1.webp'
import gallery2 from '@/assets/gallery2.webp'
import heroThumbnailStreetfood from '@/assets/hero-thumbnail-streetfood.webp'

interface CaseStudyThumbnailProps {
  images?: string[]
}

const CaseStudyThumbnail = ({
  images,
}: CaseStudyThumbnailProps): ReactElement => {
  // Use provided images or default to gallery images
  const thumbnailImages = images || [
    heroThumbnailStreetfood,
    gallery0,
    gallery1,
  ]

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Light green background */}
      <div className="absolute inset-0 bg-[#e8f5e9] rounded-2xl"></div>

      {/* Phone mockups container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6">
        {/* Left: Large phone (main screen) */}
        <div className="flex-shrink-0 w-[35%] md:w-[40%] max-w-[200px]">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative bg-black rounded-[2rem] p-2 md:p-2.5 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-2xl z-10"></div>
              {/* Screen */}
              <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/16]">
                <img
                  src={thumbnailImages[0]}
                  alt="StreetBite App Screen 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Two smaller phones stacked */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-shrink-0 w-[30%] md:w-[35%] max-w-[160px]">
          {/* Top phone */}
          <div className="relative">
            <div className="relative bg-black rounded-[1.75rem] p-1.5 md:p-2 shadow-xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 bg-black rounded-b-xl z-10"></div>
              {/* Screen */}
              <div className="bg-white rounded-[1.25rem] overflow-hidden aspect-[9/16]">
                <img
                  src={thumbnailImages[1] || gallery0}
                  alt="StreetBite App Screen 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom phone */}
          <div className="relative">
            <div className="relative bg-black rounded-[1.75rem] p-1.5 md:p-2 shadow-xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 bg-black rounded-b-xl z-10"></div>
              {/* Screen */}
              <div className="bg-white rounded-[1.25rem] overflow-hidden aspect-[9/16]">
                <img
                  src={thumbnailImages[2] || gallery1}
                  alt="StreetBite App Screen 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CaseStudyThumbnail }

