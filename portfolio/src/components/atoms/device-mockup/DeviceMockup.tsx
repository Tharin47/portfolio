import type { ReactElement } from 'react'
import { PhoneMockup, DesktopMockup } from '@codinix/device-mockup'
import type { DeviceMockupProps } from './DeviceMockup.types'

const DeviceMockup = ({
  image,
  alt,
  device = 'mobile',
  className = '',
}: DeviceMockupProps): ReactElement => {
  const isMobile = device === 'mobile'

  return (
    <div className={className}>
      {isMobile ? (
        <PhoneMockup>
          {image ? (
            <img
              src={image}
              alt={alt || 'Device mockup'}
              className="w-full h-full object-contain"
              style={{ width: '100%', height: '100%', display: 'block' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] text-sm">
              {alt || 'Mockup'}
            </div>
          )}
        </PhoneMockup>
      ) : (
        <DesktopMockup>
          {image ? (
            <img
              src={image}
              alt={alt || 'Web mockup'}
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%', display: 'block' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] text-sm">
              {alt || 'Mockup'}
            </div>
          )}
        </DesktopMockup>
      )}
    </div>
  )
}

export { DeviceMockup }

