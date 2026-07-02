import { useState } from 'react'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import Card from '../components/Card.tsx'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

type ExternalLink = {
  label: string
  url: string
}

type NewsItem = {
  id: number
  date: string
  category: string
  title: string
  excerpt: string
  content: string
  links?: ExternalLink[]
  image?: string
}

export default function News() {
  const { isDark } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(10)
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: 'January 16, 2026',
      category: 'Publications',
      links: [
        { label: 'Publication', url: 'https://doi.org/10.1038/s41392-025-02559-3' },
        { label: 'Press Release', url: 'https://lombardi.georgetown.edu/news-release/reversing-immune-suppression-in-pancreatic-cancer-could-lead-to-novel-therapies/' },
        { label: 'News Article - The Hoya', url: 'https://thehoya.com/news/lombardi-lab-advances-pancreatic-cancer-treatment-research/' },
        { label: 'News Article - SciTechDaily', url: 'https://scitechdaily.com/pancreatic-cancer-sends-secret-signals-that-sabotage-immune-cells/' }
      ],
      title: 'New Study Published in Nature Signal Transduction and Targeted Therapy',
      excerpt:
        'Our latest research on metabolic reprogramming in radiation-resistant tumors has been published in Nature Metabolism, highlighting new therapeutic opportunities.',
      content:
        'In a unique finding, researchers at Georgetown\'s Lombardi Comprehensive Cancer Center discovered that when pancreatic cancer cells send out tiny particles that are packed with certain microRNA molecules, nearby immune cells called macrophages are reprogrammed to help the tumor grow instead of engaging in their regular role of fighting the tumor.',
    },
    {
      id: 2,
      date: 'March 1, 2024',
      category: 'Events',
      title: 'Lab Members Receive Research Excellence Awards',
      excerpt:
        'Congratulations to Dr. Sarah Johnson and James Wilson for receiving the Georgetown University Research Excellence Awards.',
      content:
        'These awards recognize outstanding contributions to research and mentorship. Dr. Johnson was recognized for her innovative work in cancer metabolism, while James was honored for his biomarker discovery efforts.',
    },
    {
      id: 3,
      date: 'February 10, 2024',
      category: 'Grants',
      title: 'NIH Grant Awarded for Metabolomics Platform Development',
      excerpt:
        'We are excited to announce a new $2.5M NIH grant to develop advanced metabolomics analysis platform.',
      content:
        'This 5-year grant will support the development of cutting-edge computational tools for integrated multi-omics analysis. The platform will be made available to the broader research community.',
    },
    {
      id: 4,
      date: 'January 20, 2024',
      category: 'Conferences',
      title: 'Lab Presents at ASMS Conference',
      excerpt:
        'Our team presented 5 research posters at the American Society for Mass Spectrometry annual meeting in Denver.',
      content:
        'The presentations covered topics ranging from radiation metabolomics to neuroinflammatory markers. Our work received significant interest from the metabolomics community.',
    },
    {
      id: 5,
      date: 'December 15, 2023',
      category: 'Innovations',
      title: 'New Partnership with International Research Consortium',
      excerpt:
        'Cheema Lab joins the International Metabolomics Consortium for Cancer Research.',
      content:
        'This collaboration will facilitate data sharing and joint research initiatives with leading cancer research centers worldwide, accelerating our understanding of metabolic changes in cancer.',
    },
    {
      id: 6,
      date: 'November 5, 2023',
      category: 'News',
      title: 'Featured in Georgetown University Newsletter',
      excerpt:
        'Our lab\'s research on metabolomics and personalized medicine was featured in the latest issue of the Georgetown University Research Newsletter.',
      content:
        'The article highlights the potential of metabolomics to revolutionize cancer treatment and prevention through personalized therapeutic approaches.',
    },
  ]

  const categories = [...new Set(newsItems.map((item) => item.category))]
  const filterCategories = [...new Set(newsItems.map((item) => item.category))]
  const filteredNews = selectedCategory ? newsItems.filter(n => n.category === selectedCategory) : newsItems
  const displayedNews = filteredNews.slice(0, visibleCount)

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>
      {/* Header */}
      <section className={`pt-24 pb-6 md:pb-8 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
          : 'bg-gradient-to-br from-blue-50 to-gray-50'
      }`}>
        <div className="container max-w-7xl mx-auto">
          <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Lab Updates
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>News & Updates</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Stay informed about the latest developments, publications, and achievements from the Cheema Lab.
          </p>
        </div>
      </section>

      {/* News Highlights */}
      <section className={`py-8 md:py-10 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Lab Highlights" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const count = newsItems.filter((item) => item.category === category).length
              return (
                <Card key={category} className="text-center">
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{category}</h3>
                  <p className={`text-3xl font-bold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{count}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>items in this category</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Recent Updates" centered={true} />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => { setSelectedCategory(null); setVisibleCount(10); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(selectedCategory === cat ? null : cat); setVisibleCount(10); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {displayedNews.map((news) => (
              <Card key={news.id} className="hover:shadow-medium transition-shadow">
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full rounded-lg object-cover max-h-52 mb-4"
                  />
                )}
                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="flex-grow">

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className={`flex items-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        <Calendar size={16} className="mr-2" />
                        {news.date}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark ? 'bg-blue-950 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {news.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      {news.excerpt}
                    </p>

                    {/* External Links */}
                    {news.links && news.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {news.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                            }`}
                          >
                            <ExternalLink size={14} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Expandable Content */}
                    <details className="group">
                      <summary className={`cursor-pointer flex items-center font-medium list-none ${
                        isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}>
                        <span className="group-open:hidden">Read More</span>
                        <span className="hidden group-open:inline">Show Less</span>

                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform group-open:rotate-90"
                        />
                      </summary>

                      <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                          {news.content}
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {visibleCount < filteredNews.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 5)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Load More ({filteredNews.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={`py-8 md:py-12 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stay Updated</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Subscribe to our newsletter for the latest updates on publications and research developments.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for subscribing!')
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={`flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'border-gray-300'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
