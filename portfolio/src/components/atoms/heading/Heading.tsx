import type { ReactElement } from 'react'
import type { HeadingProps } from './Heading.types'

const Heading = ({
  level = 1,
  children,
  className = '',
}: HeadingProps): ReactElement => {
  const baseClasses = 'font-bold text-white'

  const levelClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  }

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  )
}

export { Heading }

