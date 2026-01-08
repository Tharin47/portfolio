import type { ReactElement } from 'react'
import type { CardProps } from './Card.types'

const Card = ({
  title,
  description,
  image,
  imageAlt,
  children,
  className = '',
  onClick,
}: CardProps): ReactElement => {
  const baseClasses =
    'bg-[#1a1a24] border border-gray-800 rounded-lg overflow-hidden transition-all duration-200 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20'

  const clickableClasses = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={`${baseClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e: React.KeyboardEvent<HTMLDivElement>): void => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {image && (
        <div className="w-full h-48 overflow-hidden bg-[#2a2a34]">
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {(title || description || children) && (
        <div className="p-4 sm:p-6">
          {title && (
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export { Card }

