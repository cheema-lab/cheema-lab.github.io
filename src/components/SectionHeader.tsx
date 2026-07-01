import { useTheme } from '../context/ThemeContext'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true 
}: SectionHeaderProps) {
  const { isDark } = useTheme()

  return (
    <div className={`mb-6 md:mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
