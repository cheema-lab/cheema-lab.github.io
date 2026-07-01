import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Research from './pages/Research.tsx'
import Services from './pages/Services.tsx'
import Instruments from './pages/Instruments.tsx'
import People from './pages/People.tsx'
import Publications from './pages/Publications.tsx'
import News from './pages/News.tsx'
import Contact from './pages/Contact.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppContent() {
  const { isDark } = useTheme()

  return (
    <Router>
      <ScrollToTop />
      <div className={`flex flex-col min-h-screen text-gray-900 dark:text-gray-100 ${isDark ? 'dark' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/services" element={<Services />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
