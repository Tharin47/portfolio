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
      'bg-[var(--color-purple-tertiary)] text-[var(--color-text-primary)] hover:bg-[var(--color-purple-hover)] focus:ring-[var(--color-purple-tertiary)]',
    secondary:
      'bg-[var(--color-bg-tertiary)] border-2 border-[var(--color-purple-tertiary)] text-[var(--color-text-primary)] hover:bg-[var(--color-purple-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-purple-tertiary)] focus:ring-[var(--color-purple-tertiary)]',
    outline:
      'border-2 border-[var(--color-border-primary)] text-[var(--color-text-tertiary)] hover:bg-[var(--color-purple-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-purple-tertiary)] focus:ring-[var(--color-purple-tertiary)]',
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

