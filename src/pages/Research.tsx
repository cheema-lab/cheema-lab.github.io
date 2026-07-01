import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Card from '../components/Card.tsx'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

export default function Research() {
  const { isDark } = useTheme()
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const researchAreas = [
    {
      id: 1,
      title: 'Radiation Biology & Metabolomics',
      shortDescription: 'Understanding metabolic responses to ionizing radiation.',
      fullDescription: `Our research explores how ionizing radiation affects cellular metabolism across various tissues. We employ advanced metabolomics techniques to identify biomarkers that predict radiation response and inform personalized therapeutic strategies. Our findings have implications for cancer therapy optimization and radiation protection.`,
      highlights: [
        'Radiation-induced metabolic reprogramming',
        'Biomarker discovery for treatment prediction',
        'Tissue-specific metabolic responses',
        'Long-term metabolic effects of exposure',
      ],
    },
    {
      id: 2,
      title: 'Cancer Metabolism & Therapeutics',
      shortDescription: 'Investigating metabolic vulnerabilities in cancer cells.',
      fullDescription: `Cancer cells exhibit dramatically altered metabolism compared to normal tissues. We use metabolomics to identify metabolic dependencies and vulnerabilities that can be exploited therapeutically. Our research spans various cancer types and explores the metabolic basis of treatment resistance.`,
      highlights: [
        'Tumor microenvironment metabolomics',
        'Metabolic basis of drug resistance',
        'Metabolic biomarkers for prognosis',
        'Novel therapeutic target identification',
      ],
    },
    {
      id: 3,
      title: 'Neurodegenerative Disease Research',
      shortDescription: 'Exploring metabolic dysfunction in neurological disorders.',
      fullDescription: `Neurodegenerative diseases are associated with profound metabolic dysfunction. We investigate how metabolic dysregulation contributes to neuronal loss and disease progression. Our research aims to identify metabolic biomarkers for early detection and novel intervention strategies.`,
      highlights: [
        'Neuroinflammatory metabolomics',
        'Age-related metabolic changes',
        'Neuroprotective metabolic pathways',
        'Biomarkers for disease staging',
      ],
    },
    {
      id: 4,
      title: 'Computational Metabolomics',
      shortDescription: 'Developing advanced analytical and bioinformatic tools.',
      fullDescription: `We develop and implement cutting-edge computational methods for metabolomics data analysis. Our bioinformatic pipelines enable systems-level understanding of metabolic networks. We focus on integrating multi-omics data to provide comprehensive insights into disease mechanisms.`,
      highlights: [
        'Machine learning for biomarker discovery',
        'Metabolic pathway analysis',
        'Multi-omics integration',
        'Network pharmacology approaches',
      ],
    },
  ]

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

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
            Scientific Discovery
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Explore Our Research</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our lab focuses on applying metabolomics to understand disease mechanisms and develop new therapeutic approaches. We combine advanced analytical chemistry with systems biology and computational approaches.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Research Focus Areas" subtitle="Click on any area to expand and learn more." centered={true} />

          <div className="space-y-4">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className={`border rounded-xl overflow-hidden hover:border-opacity-100 transition-colors ${
                  isDark 
                    ? 'border-gray-700 hover:border-gray-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleExpanded(area.id)}
                  className={`w-full p-6 hover:transition-colors text-left flex justify-between items-start ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {area.title}
                    </h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{area.shortDescription}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expandedId === area.id ? 'rotate-180' : ''
                    } ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  />
                </button>

                {expandedId === area.id && (
                  <div className={`px-6 pt-4 pb-6 border-t ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {area.fullDescription}
                    </p>
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Focus Areas:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Our Methodology"
            subtitle="We employ state-of-the-art techniques in metabolomics and systems biology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mass Spectrometry',
                description: 'Advanced LC-MS/MS and GC-MS platforms for comprehensive metabolite profiling.',
              },
              {
                title: 'NMR Spectroscopy',
                description: 'High-resolution NMR for structure elucidation and quantitative analysis.',
              },
              {
                title: 'Bioinformatics',
                description: 'Custom pipelines for data processing, quality control, and statistical analysis.',
              },
              {
                title: 'Systems Biology',
                description: 'Integration of metabolomics data with genomics and proteomics.',
              },
              {
                title: 'Statistical Analysis',
                description: 'Advanced multivariate and univariate statistical methods.',
              },
              {
                title: 'Network Analysis',
                description: 'Metabolic pathway mapping and network-based biomarker discovery.',
              },
            ].map((method, idx) => (
              <Card key={idx}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{method.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Key Collaborations"
            subtitle="We work with leading research institutions and clinical centers worldwide."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                institution: 'Georgetown University',
                description: 'Primary institutional affiliation with support from multiple departments.',
              },
              {
                institution: 'Lombardi Comprehensive Cancer Center',
                description: 'Leading cancer research and clinical care facility.',
              },
              {
                institution: 'National Institutes of Health',
                description: 'Collaborative research programs and grant funding.',
              },
              {
                institution: 'International Partners',
                description: 'Collaborations with metabolomics centers across Europe and Asia.',
              },
            ].map((collab, idx) => (
              <Card key={idx}>
                <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{collab.institution}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{collab.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
