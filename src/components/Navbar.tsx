import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/instruments', label: 'Instrumentation' },
    { path: '/services', label: 'Services' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/news', label: 'News' },
    { path: '/people', label: 'People' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-900 shadow-lg border-b border-gray-800'
            : 'bg-white shadow-subtle'
          : isDark
          ? 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img
              src="/images/logo.png"
              alt="Cheema Lab logo"
              className="h-10 w-auto object-contain"
            />
            <span className={`font-semibold hidden lg:inline ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Cheema Lab
            </span>
          </Link>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-2 py-1.5 rounded-md text-[15px] font-medium transition-colors whitespace-nowrap ${
                  isActive(path)
                    ? isDark
                      ? 'text-blue-400 bg-blue-950'
                      : 'text-blue-600 bg-blue-50'
                    : isDark
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-lg transition-colors shrink-0 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDark
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(path)
                    ? isDark
                      ? 'text-blue-400 bg-blue-950'
                      : 'text-blue-600 bg-blue-50'
                    : isDark
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
