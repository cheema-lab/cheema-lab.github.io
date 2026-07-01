import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ScrollToTopButton() {
  const { isDark } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110 ${
            isDark
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          aria-label="Return to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}
