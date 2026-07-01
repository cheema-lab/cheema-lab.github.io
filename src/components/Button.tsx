import { useTheme } from '../context/ThemeContext'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  external?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  external = false,
}: ButtonProps) {
  const { isDark } = useTheme()

  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 inline-block'

  const variants = {
    primary: isDark 
      ? 'bg-blue-700 text-white hover:bg-blue-600'
      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-subtle hover:shadow-soft',
    secondary: isDark
      ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
      : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: isDark
      ? 'border-2 border-gray-600 text-gray-100 hover:border-gray-500 hover:bg-gray-800'
      : 'border-2 border-gray-300 text-gray-900 hover:border-gray-300 hover:bg-gray-50',
    white: isDark
      ? 'bg-gray-900 text-white hover:bg-gray-800'
      : 'bg-white text-black hover:bg-gray-200 shadow-subtle hover:shadow-soft',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClass}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}
