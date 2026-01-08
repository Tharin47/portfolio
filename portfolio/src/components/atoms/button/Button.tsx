import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import type { ButtonProps } from './Button.types'

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  href,
  to,
}: ButtonProps): ReactElement => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary:
      'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary:
      'bg-[#1a1a24] border-2 border-purple-600 text-white hover:bg-purple-600 hover:text-white hover:border-purple-600 focus:ring-purple-500',
    outline:
      'border-2 border-gray-600 text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 focus:ring-purple-500',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    )
  }

  if (href) {
    const isHashLink = href.startsWith('#')
    if (isHashLink) {
      return (
        <a href={href} className={className}>
          {label}
        </a>
      )
    }
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export { Button }

