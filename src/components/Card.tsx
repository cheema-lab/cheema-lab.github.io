import { useTheme } from '../context/ThemeContext'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const { isDark } = useTheme()

  const hoverClasses = hover ? 'hover:shadow-soft transition-all duration-300' : ''
  const darkHoverClasses = hover && isDark ? 'hover:shadow-xl hover:border-t-gray-600 hover:border-r-gray-600 hover:border-b-gray-600' : ''

  return (
    <div
      className={`rounded-2xl p-6 shadow-subtle ${
        isDark 
          ? `bg-gray-800 shadow-lg border border-gray-700 ${darkHoverClasses}` 
          : `bg-white ${hoverClasses}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
