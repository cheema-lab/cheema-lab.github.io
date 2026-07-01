import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Target, Droplets, BarChart3, CheckCircle } from 'lucide-react'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

export default function Services() {
  const { isDark } = useTheme()

  const workflowSteps = [
    { step: '01', title: 'Consultation', desc: 'Project scoping & experimental design' },
    { step: '02', title: 'Sample Preparation', desc: 'Extraction & preparation protocols' },
    { step: '03', title: 'LC-MS Analysis', desc: 'Data acquisition on optimized platforms' },
    { step: '04', title: 'Data Processing', desc: 'Peak detection, alignment & annotation' },
    { step: '05', title: 'Statistical Analysis', desc: 'Multivariate & univariate approaches' },
    { step: '06', title: 'Reporting', desc: 'Pathway analysis & final deliverables' },
  ]

  const services = [
    {
      id: 'untargeted',
      icon: FlaskConical,
      label: 'DISCOVERY',
      title: 'Untargeted Metabolomics',
      tagline: 'Hypothesis-free global profiling to reveal the complete metabolic landscape',
      headerGradientDark: 'from-blue-950/60 to-gray-900',
      headerGradientLight: 'from-blue-50 to-white',
      borderDark: 'border-blue-500/20',
      borderLight: 'border-blue-200',
      iconBgDark: 'bg-blue-900',
      iconBgLight: 'bg-blue-100',
      iconColorDark: 'text-blue-400',
      iconColorLight: 'text-blue-600',
      labelColorDark: 'text-blue-400',
      labelColorLight: 'text-blue-600',
      sections: [
        {
          heading: 'Discovery Workflows',
          points: [
            'Hypothesis-free global metabolite profiling',
            'Positive and negative ionization mode acquisition',
            'Data-independent (MSe / DIA) and DDA approaches',
            'HILIC and reversed-phase complementary LC coverage',
          ],
        },
        {
          heading: 'LC-MS Methods',
          points: [
            'UPLC coupled high-resolution QTOF mass spectrometry',
            'Ion mobility separation (timsTOF) for isomer disambiguation',
            'Optimized gradients for polar and non-polar metabolites',
            'Multi-mode detection for comprehensive coverage',
          ],
        },
        {
          heading: 'Coverage',
          points: [
            'Thousands of metabolic features detected per sample',
            'Amino acids, nucleotides, organic acids, lipids & xenobiotics',
            'Database searching: HMDB, METLIN, MZCloud, LipidMaps',
            'Level 1–3 metabolite annotation confidence tiers',
          ],
        },
        {
          heading: 'Typical Deliverables',
          points: [
            'Annotated feature matrix with peak areas',
            'PCA, PLS-DA, and volcano plots',
            'Pathway enrichment analysis (MetaboAnalyst / KEGG)',
            'Summary report with biological interpretation',
          ],
        },
      ],
    },
    {
      id: 'targeted',
      icon: Target,
      label: 'QUANTITATION',
      title: 'Targeted Metabolomics',
      tagline: 'Validated, absolute quantification with clinical-grade precision',
      headerGradientDark: 'from-purple-950/60 to-gray-900',
      headerGradientLight: 'from-purple-50 to-white',
      borderDark: 'border-purple-500/20',
      borderLight: 'border-purple-200',
      iconBgDark: 'bg-purple-900',
      iconBgLight: 'bg-purple-100',
      iconColorDark: 'text-purple-400',
      iconColorLight: 'text-purple-600',
      labelColorDark: 'text-purple-400',
      labelColorLight: 'text-purple-600',
      sections: [
        {
          heading: 'Available Panels',
          points: [
            'Amino acids & derivatives (20+ metabolites)',
            'TCA cycle intermediates & organic acids',
            'Nucleotides & nucleosides',
            'Acylcarnitines & fatty acids',
            'Eicosanoids & bioactive lipid mediators',
            'Custom panel development on request',
          ],
        },
        {
          heading: 'Quantification Approaches',
          points: [
            'Multiple reaction monitoring (MRM) on Sciex QTRAP',
            'Stable isotope-labeled internal standards',
            'Absolute quantification with 7-point calibration curves',
            'Dynamic MRM for high-throughput expanded panels',
          ],
        },
        {
          heading: 'Validation Procedures',
          points: [
            'Intra- and inter-day precision & accuracy',
            'Matrix-matched calibration & recovery studies',
            'Linearity, dynamic range & LLOQ determination',
            'Analyte stability under relevant storage conditions',
            'FDA / EMA bioanalytical guidance compliance',
          ],
        },
      ],
    },
    {
      id: 'lipidomics',
      icon: Droplets,
      label: 'QUANTITATION',
      title: 'Targeted Lipidomics',
      tagline: 'Comprehensive lipidome characterization — from structural annotation to absolute quantification',
      headerGradientDark: 'from-teal-950/60 to-gray-900',
      headerGradientLight: 'from-teal-50 to-white',
      borderDark: 'border-teal-500/20',
      borderLight: 'border-teal-200',
      iconBgDark: 'bg-teal-900',
      iconBgLight: 'bg-teal-100',
      iconColorDark: 'text-teal-400',
      iconColorLight: 'text-teal-600',
      labelColorDark: 'text-teal-400',
      labelColorLight: 'text-teal-600',
      sections: [
        {
          heading: 'Lipid Classes Measured',
          points: [
            'Glycerophospholipids (PC, PE, PS, PI, PG, PA, LPC, LPE)',
            'Sphingolipids (ceramides, SM, hexosylceramides)',
            'Glycerolipids (TG, DG, MG) & ether lipids',
            'Fatty acids & acylcarnitines',
            'Sterols (cholesterol, cholesteryl esters)',
            'Eicosanoids, oxylipins & pro-resolving mediators',
          ],
        },
        {
          heading: 'Untargeted Options',
          points: [
            'Global lipidome profiling with high-resolution QTOF',
            'Lipid class and molecular species annotation',
            'LipidMaps & HMDB-Lipids database searching',
            'Differential lipidomics across biological conditions',
          ],
        },
        {
          heading: 'Targeted Options',
          points: [
            'Quantitative sphingolipid & eicosanoid panels (QTRAP)',
            'Stable isotope dilution for accurate quantification',
            'Ion mobility for structural isomer differentiation',
            'High-throughput processing via automated platforms',
          ],
        },
      ],
    },
  ]

    const bioinfoCapabilities = [
    'Differential abundance analysis',
    'Regression Modeling',
    'Predictive Modeling & Machine Learning',
    'Analysis of Large-Scale Cohorts ',
    'Pathway Enrichment & Network Analysis',
    'Normalization, Batch-Effect Correction',
    'Longitudinal & repeated-measures analysis',
    'Multi-Omics Integration',
    ]

  const sampleTypes = [
    {
      category: 'Biofluids',
      icon: '🧪',
      samples: ['Plasma', 'Serum', 'Whole Blood', 'Urine', 'Cerebrospinal Fluid', 'Saliva', 'Cell Culture Media'],
    },
    {
      category: 'Cells & Extracellular Vesicles',
      icon: '🔬',
      samples: ['Cell Lines', 'Primary Cells', 'Macrophages', 'Exosomes / Extracellular Vesicles', 'Organoids', 'Stem Cells'],
    },
    {
      category: 'Tissues',
      icon: '❤️',
      samples: [
        'Brain', 'Kidney', 'Heart', 'Lung', 'Liver', 'Spleen',
        'Adipose', 'Bone Marrow', 'Jejunum', 'Intestine',
      ],
    },
  ]

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>

      {/* Hero */}
      <section className={`pt-24 pb-6 md:pb-8 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-950'
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}>
        <div className="container max-w-7xl mx-auto">
          <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Analytical Services
          </p>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Metabolomics Services
          </h1>
          <p className={`text-lg leading-relaxed mb-8 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            From discovery-driven untargeted profiling to clinically validated quantitative panels — end-to-end metabolomics services across diverse biological matrices and disease areas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/instruments"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                isDark
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Explore Our Instruments <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border transition-colors ${
                isDark
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className={`py-8 md:py-12 border-b ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Our Workflow"
            subtitle="A rigorous, end-to-end process — from sample receipt to biological insight."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative">
                {/* Connector */}
                {idx < workflowSteps.length - 1 && (
                  <div className={`hidden lg:block absolute top-7 left-1/2 w-full h-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
                )}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-base font-bold mb-3 z-10 ring-4 ${
                  isDark
                    ? 'bg-blue-600 text-white ring-gray-900'
                    : 'bg-blue-600 text-white ring-gray-50'
                }`}>
                  {step.step}
                </div>
                <h3 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Service Offerings"
            subtitle="Specialized capabilities across untargeted discovery, targeted quantification, and lipidomics."
          />

          <div className="space-y-10">
            {services.map((svc) => {
              const IconComponent = svc.icon
              const colCount = svc.sections.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
              return (
                <div
                  key={svc.id}
                  className={`rounded-2xl overflow-hidden border ${isDark ? svc.borderDark : svc.borderLight}`}
                >
                  {/* Service Header Band */}
                  <div className={`px-8 py-6 bg-gradient-to-r border-b ${
                    isDark
                      ? `${svc.headerGradientDark} ${svc.borderDark}`
                      : `${svc.headerGradientLight} ${svc.borderLight}`
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl shrink-0 ${isDark ? svc.iconBgDark : svc.iconBgLight}`}>
                        <IconComponent size={28} className={isDark ? svc.iconColorDark : svc.iconColorLight} />
                      </div>
                      <div>
                        <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${isDark ? svc.labelColorDark : svc.labelColorLight}`}>
                          {svc.label}
                        </p>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{svc.title}</h3>
                        <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{svc.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className={`p-8 grid grid-cols-1 md:grid-cols-2 ${colCount} gap-8 ${isDark ? 'bg-gray-900/60' : 'bg-white'}`}>
                    {svc.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className={`font-semibold text-xs uppercase tracking-wider mb-3 pb-2 border-b ${
                          isDark ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-100'
                        }`}>
                          {section.heading}
                        </h4>
                        <ul className="space-y-2">
                          {section.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-2.5">
                              <CheckCircle
                                size={14}
                                className={`mt-0.5 shrink-0 ${isDark ? svc.iconColorDark : svc.iconColorLight}`}
                              />
                              <span className={`text-sm leading-snug ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bioinformatics */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Data Science
              </p>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Bioinformatics &amp; Data Analysis
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Raw mass spectrometry data becomes biological insight through our comprehensive computational analysis pipeline. We deliver rigorous statistical analysis, pathway enrichment, and multi-omics integration to maximize the scientific value of every experiment.
              </p>
              <Link
                to="/research"
                className={`inline-flex items-center gap-2 font-medium text-sm ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                See Our Computational Research <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bioinfoCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-4 rounded-xl border ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <BarChart3 size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`text-sm leading-snug ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Types */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Sample Types We Work With"
            subtitle="Extensive experience across a diverse range of biological matrices."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleTypes.map((group, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.samples.map((sample, sidx) => (
                    <span
                      key={sidx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {sample}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Instruments */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curious About Our Analytical Platforms?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Explore the state-of-the-art mass spectrometers, liquid handlers, and supporting equipment that power our services.
          </p>
          <Link
            to="/instruments"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
          >
            View Our Instrumentation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
