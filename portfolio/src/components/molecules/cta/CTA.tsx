import type { ReactElement } from 'react'
import { Button } from '@/components/atoms/button'
import type { CTAProps } from './CTA.types'

const CTA = ({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTAProps): ReactElement => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-tertiary)] mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            label={primaryAction.label}
            href={primaryAction.href}
            variant="primary"
            size="lg"
          />
          {secondaryAction && (
            <Button
              label={secondaryAction.label}
              href={secondaryAction.href}
              variant="outline"
              size="lg"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export { CTA }

