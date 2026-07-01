import { Mail, MapPin, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${
      isDark 
        ? 'bg-gray-900 text-gray-300 border-gray-800' 
        : 'bg-gray-50 text-gray-600 border-gray-200'
    } border-t`}>
      <div className="container max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Cheema Lab</h3>
            <p className="text-sm leading-relaxed">
              Exploring and understanding metabolomics data in radiation biology, cancer, and neurodegenerative disease research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/research" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  Research
                </a>
              </li>
              <li>
                <a href="/publications" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  Publications
                </a>
              </li>
              <li>
                <a href="/news" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  News
                </a>
              </li>
              <li>
                <a href="/contact" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <ul className="text-sm space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Georgetown University Medical Center<br />Washington, D.C.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:amrita.cheema@georgetown.edu" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  amrita.cheema@georgetown.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:metabolomics@georgetown.edu" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  metabolomics@georgetown.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:+1202687" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
                  +1 (202) 687-0451
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              © {currentYear} Cheema Lab. All rights reserved.
            </p>
            <p className={`text-sm mt-4 md:mt-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Georgetown University | Lombardi Comprehensive Cancer Center
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
