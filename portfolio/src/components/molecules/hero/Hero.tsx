import type { ReactElement } from 'react'
import { Orb } from '@/components/atoms/orb'
import type { HeroProps } from './Hero.types'

const Hero = ({
  name,
  valueProposition,
  intro,
}: HeroProps): ReactElement => {
  const description = valueProposition || intro

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative mx-auto"
    >
      <div
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a0f"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="hidden md:block w-px h-40 bg-gray-500 shrink-0 self-start mt-2" />
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 text-center md:text-left font-normal">
              {name}
            </h1>
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-sans text-left">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }

