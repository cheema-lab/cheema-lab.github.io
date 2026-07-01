import { ArrowRight, Beaker, Users, BookOpen, Microscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/Card.tsx'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const { isDark } = useTheme()

  const featuredProjects = [
    {
      id: 1,
      title: 'Metabolomics in Radiation Biology',
      description: 'Understanding metabolic responses to radiation exposure and developing biomarkers for therapy outcome prediction.',
      icon: Beaker,
    },
    {
      id: 2,
      title: 'Cancer Metabolism',
      description: 'Investigating metabolic reprogramming in cancer cells to identify novel therapeutic targets and biomarkers.',
      icon: BookOpen,
    },
    {
      id: 3,
      title: 'Neurodegenerative Disease Research',
      description: 'Exploring metabolic dysfunction in neurodegeneration and identifying potential therapeutic interventions.',
      icon: Users,
    },
  ]

  const recentNews = [
    {
      id: 1,
      date: 'March 2024',
      title: 'New Publication in Nature Metabolism',
      excerpt: 'Our latest research on cancer metabolomics has been published in a top-tier journal.',
    },
    {
      id: 2,
      date: 'February 2024',
      title: 'Lab Members Win Research Awards',
      excerpt: 'Congratulations to our team for outstanding contributions to metabolomics research.',
    },
    {
      id: 3,
      date: 'January 2024',
      title: 'Grant Funding Awarded',
      excerpt: 'We are excited to announce our new NIH grant for metabolomics research platform development.',
    },
  ]

  const facilities = [
    { name: 'Mass Spectrometry & Analytical Pharmacology Shared Resource', icon: '📊' },
    { name: 'Metabolomics Shared Resource', icon: '⚗️' },
    { name: 'Center for Metabolomic Studies', icon: '🔬' },
    { name: 'Lombardi Comprehensive Cancer Center', icon: '🏥' },
    { name: 'Georgetown University Medical Center', icon: '🏛️' },
    { name: 'Department of Oncology', icon: '🎯' },
    { name: 'Department of Biochemistry', icon: '🧪' },
    { name: 'Georgetown University', icon: '🎓' },
  ]

  const instrumentations = [
    { name: 'Agilent', logo: 'AGI', color: 'from-green-600 to-green-700' },
    { name: 'Bruker', logo: 'BRK', color: 'from-blue-600 to-blue-700' },
    { name: 'Sciex', logo: 'SCI', color: 'from-orange-600 to-orange-700' },
    { name: 'Waters', logo: 'WAT', color: 'from-purple-600 to-purple-700' },
  ]

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>
      {/* Hero Section - Full Viewport */}
      <section className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}>
        {/* Elegant Aurora of Ions - Minimal with Underwater Glow */}
        
        {/* LC-MS Chromatogram Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="trace1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="trace2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Trace 1 */}
          <path
            d="
              M0 520
              C100 520 120 500 160 500
              C200 500 220 560 260 560
              C320 560 340 420 390 420
              C450 420 470 540 520 540
              C620 540 650 320 700 320
              C760 320 780 580 850 580
              C920 580 950 450 1020 500
              C1080 550 1100 370 1160 370
              C1240 370 1260 600 1330 600
              C1400 600 1450 520 1600 520
            "
            fill="none"
            stroke="url(#trace1)"
            strokeWidth="2"
            filter="url(#softGlow)"
            className="animate-chromatogram-1"
          />

          {/* Trace 2 */}
          <path
            d="
              M0 380
              C100 380 130 420 180 420
              C250 420 270 300 330 300
              C420 300 450 470 520 470
              C620 470 650 260 730 260
              C820 260 860 500 920 500
              C1010 500 1040 350 1110 350
              C1200 350 1240 430 1310 430
              C1380 430 1450 380 1600 380
            "
            fill="none"
            stroke="url(#trace2)"
            strokeWidth="1.5"
            filter="url(#softGlow)"
            className="animate-chromatogram-2"
          />

          {/* Floating ions */}
          <g className="animate-ion-1">
            <circle cx="350" cy="250" r="4" fill="#60A5FA" opacity="0.8" className="hidden sm:block"/>
          </g>

          <g className="animate-ion-2">
            <circle cx="1200" cy="320" r="5" fill="#60A5FA" opacity="0.7" className="hidden sm:block"/>
          </g>

          <g className="animate-ion-3">
            <circle cx="500" cy="700" r="4" fill="#3B82F6" opacity="0.6" className="hidden sm:block"/>
          </g>

          <g className="animate-ion-4">
            <circle cx="1050" cy="650" r="6" fill="#60A5FA" opacity="0.75" className="hidden sm:block"/>
          </g>
        </svg>
        
        
       {/* Original Background Graphic */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Subtle radial glow - brighter center, fades to edges */}
              <radialGradient id="ionGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor={isDark ? '#1E40AF' : '#3B82F6'} stopOpacity="0.08" />
                <stop offset="100%" stopColor={isDark ? '#1E40AF' : '#3B82F6'} stopOpacity="0" />
              </radialGradient>
              
              {/* Subtle bands of light - vertical gradients */}
              <linearGradient id="lightBand1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0" />
                <stop offset="50%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0.05" />
                <stop offset="100%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0" />
              </linearGradient>
              
              <linearGradient id="lightBand2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0" />
                <stop offset="50%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0.04" />
                <stop offset="100%" stopColor={isDark ? '#60A5FA' : '#93C5FD'} stopOpacity="0" />
              </linearGradient>
              
              {/* Subtle wave pattern for underwater effect */}
              <pattern id="waterWaves" x="0" y="0" width="120" height="40" patternUnits="userSpaceOnUse">
                <path d="M0,20 Q30,10 60,20 T120,20" stroke={isDark ? '#3B82F6' : '#60A5FA'} strokeWidth="0.2" fill="none" opacity="0.04" />
              </pattern>
            </defs>
            
            {/* Background glow */}
            <rect width="1200" height="800" fill="url(#ionGlow)" />
            
            {/* Subtle bands of light */}
            <rect x="150" y="0" width="300" height="800" fill="url(#lightBand1)" />
            <rect x="750" y="0" width="300" height="800" fill="url(#lightBand2)" />
            
            {/* Water wave overlay */}
            <rect width="1200" height="800" fill="url(#waterWaves)" />
            
            {/* Subtle connecting paths - almost invisible */}
            <line x1="250" y1="320" x2="400" y2="350" stroke={isDark ? '#3B82F6' : '#60A5FA'} strokeWidth="0.3" opacity="0.06" />
            <line x1="800" y1="370" x2="950" y2="340" stroke={isDark ? '#3B82F6' : '#60A5FA'} strokeWidth="0.3" opacity="0.06" />
            
            {/* Upper left ion - away from center text */}
            <g className="animate-node-float-1">
              <circle cx="250" cy="260" r="4" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.6"/>
            </g>
            <circle cx="200" cy="240" r="2" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.35" className="hidden sm:block"/>
            
            {/* Upper right ion - away from center text */}
            <g className="animate-node-float-2">
              <circle cx="950" cy="270" r="3" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.5"/>
            </g>
            <circle cx="1000" cy="240" r="2.5" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.4" className="hidden sm:block"/>
            
            {/* Center left ion - lower, away from text */}
            <g className="animate-node-float-3">
              <circle cx="300" cy="450" r="5" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.7"/>
            </g>
            <circle cx="280" cy="420" r="3" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.45" className="hidden sm:block"/>
            
            {/* Center right ion - lower, away from text */}
            <g className="animate-node-float-4">
              <circle cx="900" cy="450" r="4" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.6"/>
            </g>
            <circle cx="920" cy="430" r="3" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.4" className="hidden sm:block"/>
            
            {/* Lower left ions */}
            <circle cx="200" cy="580" r="2.5" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.35" className="hidden sm:block"/>
            <g className="animate-node-float-1">
              <circle cx="140" cy="620" r="3" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.5"/>
            </g>
            
            {/* Lower right ions */}
            <circle cx="1000" cy="570" r="2" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.3" className="hidden sm:block"/>
            <g className="animate-node-float-2">
              <circle cx="1060" cy="610" r="3" fill={isDark ? '#60A5FA' : '#3B82F6'} className="animate-pulse-glow hidden sm:block" opacity="0.5"/>
            </g>
            
            {/* Far edge ions - sparse */}
            <circle cx="160" cy="380" r="2" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.3" className="hidden sm:block"/>
            <circle cx="1040" cy="400" r="2" fill={isDark ? '#60A5FA' : '#3B82F6'} opacity="0.3" className="hidden sm:block"/>
      </svg>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Main Title - Cheema Lab Focus */}
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-950'
            }`}>
              Cheema <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Lab</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl sm:text-2xl max-w-4xl mx-auto mb-4 leading-relaxed font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Advanced Metabolomics Research Facility
            </p>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Cutting-edge analytical chemistry and metabolomics research in radiation biology, cancer metabolism, and neurodegenerative disease. State-of-the-art instruments and bioinformatics services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/research"
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                  isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Research <ArrowRight size={16} />
              </Link>
              <Link
                to="/instruments"
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                  isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Instruments <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                  isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Scroll Indicator */}
          <div className="flex justify-center">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("research-focus")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to Research Focus"
            className={`animate-bounce p-2 transition-colors hover:text-blue-500
              focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
              ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          </div>
          </div>
        </div>

        {/* Stats Section at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 divide-x divide-gray-300/20">
            <div className="text-center px-1 sm:px-2">
              <p className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                200+
              </p>
              <p className={`text-[10px] sm:text-base font-medium leading-tight ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Publications
              </p>
            </div>

            <div className="text-center px-1 sm:px-2">
              <p className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                250K+
              </p>
              <p className={`text-[10px] sm:text-base font-medium leading-tight ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Samples Analyzed
              </p>
            </div>

            <div className="text-center px-1 sm:px-2">
              <p className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                15+
              </p>
              <p className={`text-[10px] sm:text-base font-medium leading-tight ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Years Active
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section
        id="research-focus"
        className={`relative w-full min-h-screen flex items-center py-20 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-950'
                }`}
              >
                Our Research{' '}
                <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>
                  Focus
                </span>
              </h2>

              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                }`}
              >
                We are dedicated to understanding metabolic processes in human disease
                through rigorous scientific investigation and innovative analytical
                techniques.
              </p>

              <Link
                to="/research"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                  isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                View All Research Areas <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {featuredProjects.map((project) => {
                const IconComponent = project.icon
                return (
                  <Card
                    key={project.id}
                    className={`border-l-4 border-l-blue-600 ${
                      isDark ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`p-3 rounded-lg w-fit h-fit flex-shrink-0 ${
                          isDark ? 'bg-blue-950' : 'bg-blue-100'
                        }`}
                      >
                        <IconComponent
                          size={24}
                          className={isDark ? 'text-blue-400' : 'text-blue-600'}
                        />
                      </div>

                      <div>
                        <h3
                          className={`text-lg font-semibold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator (absolute so it does NOT shift layout) */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <button
            id="instrumentation"
            type="button"
            onClick={() =>
              document
                .getElementById('instrumentation')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            aria-label="Scroll to Instrumentation"
            className={`animate-bounce p-2 transition-colors hover:text-blue-500 focus:outline-none ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Instrumentation Section */}
      <section className={`relative w-full py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-950'}`}>
              Advanced <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Instrumentation</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              We utilize cutting-edge instrumentation from world-leading analytical chemistry vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {instrumentations.map((vendor, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl p-8 h-56 flex items-center justify-center transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-500'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${vendor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-center">
                  <Microscope size={40} className={`mx-auto mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{vendor.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/instruments"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                isDark
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View All Instrumentation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className={`relative w-full py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Associated Facilities"
            subtitle="We collaborate with world-class research institutions and advanced laboratory facilities."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilities.map((facility, idx) => (
              <Card key={idx} className={`text-center p-6 hover:shadow-lg transition-shadow ${isDark ? 'bg-gray-900 hover:border-blue-600' : 'bg-white hover:border-blue-600'}`}>
                <div className="text-5xl mb-3">{facility.icon}</div>
                <h3 className={`font-semibold text-sm leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>{facility.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={`relative w-full py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Updates"
            subtitle="Stay informed about our recent achievements, publications, and lab news."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentNews.map((news) => (
              <Card key={news.id} className={`flex flex-col border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{news.date}</p>
                <h3 className={`text-xl font-semibold mb-4 flex-grow ${isDark ? 'text-white' : 'text-gray-900'}`}>{news.title}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{news.excerpt}</p>
                <a href="/news" className={`font-semibold text-sm flex items-center group inline-w-fit ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}>
                  Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/news"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                isDark
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View All News <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative w-full py-20 bg-gradient-to-r from-blue-400 to-blue-500 text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Research Team
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            We're always looking for talented researchers and students passionate about metabolomics and advancing biomedical science.
          </p>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border border-white text-white hover:bg-white/10 transition-colors`}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
