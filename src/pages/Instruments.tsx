import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

// Vendor accent styles — full class strings so Tailwind JIT picks them up
const vendorBadge: Record<string, { dark: string; light: string }> = {
  Waters:       { dark: 'bg-purple-950 text-purple-300 border-purple-700',  light: 'bg-purple-100 text-purple-700 border-purple-200' },
  Bruker:       { dark: 'bg-blue-950  text-blue-300   border-blue-700',    light: 'bg-blue-100  text-blue-700   border-blue-200'   },
  Sciex:        { dark: 'bg-orange-950 text-orange-200 border-orange-400',  light: 'bg-orange-100 text-orange-700 border-orange-200' },
  Agilent:      { dark: 'bg-red-950   text-red-300    border-red-700',     light: 'bg-red-100   text-red-700    border-red-200'    },
  ThermoFisher: { dark: 'bg-green-950 text-green-300  border-green-700',   light: 'bg-green-100 text-green-700  border-green-200'  },
  Varian:       { dark: 'bg-slate-800 text-slate-300  border-slate-600',   light: 'bg-slate-100 text-slate-700  border-slate-200'  },
  OMNI:         { dark: 'bg-violet-950 text-violet-300 border-violet-700',  light: 'bg-violet-100 text-violet-700 border-violet-200' },
}

const vendorAccent: Record<string, { dark: string; light: string }> = {
  Waters:       { dark: 'border-l-purple-500',  light: 'border-l-purple-400'  },
  Bruker:       { dark: 'border-l-blue-500',    light: 'border-l-blue-400'    },
  Sciex:        { dark: 'border-l-orange-400',  light: 'border-l-orange-400'  },
  Agilent:      { dark: 'border-l-red-500',     light: 'border-l-red-400'     },
  ThermoFisher: { dark: 'border-l-green-500',   light: 'border-l-green-400'   },
  Varian:       { dark: 'border-l-slate-500',   light: 'border-l-slate-400'   },
}

const categoryColor: Record<string, { dark: string; light: string }> = {
  'Chromatography': { dark: 'bg-amber-950/80 text-amber-100 border-amber-500', light: 'bg-amber-100 text-amber-700 border-amber-200' },
  'Metabolic Flux': { dark: 'bg-emerald-950 text-emerald-300 border-emerald-700', light: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  'Quality Control': { dark: 'bg-cyan-950 text-cyan-300 border-cyan-700', light: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  'Automation': { dark: 'bg-indigo-950 text-indigo-300 border-indigo-700', light: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  'Structural Analysis': { dark: 'bg-rose-950 text-rose-300 border-rose-700', light: 'bg-rose-100 text-rose-700 border-rose-200' },
  'Sample Preparation': { dark: 'bg-violet-950 text-violet-300 border-violet-700', light: 'bg-violet-100 text-violet-700 border-violet-200' },
}

const categoryAccent: Record<string, { dark: string; light: string }> = {
  'Chromatography': { dark: 'border-l-amber-400', light: 'border-l-amber-400' },
  'Metabolic Flux': { dark: 'border-l-emerald-500', light: 'border-l-emerald-400' },
  'Quality Control': { dark: 'border-l-cyan-500', light: 'border-l-cyan-400' },
  'Automation': { dark: 'border-l-indigo-500', light: 'border-l-indigo-400' },
  'Structural Analysis': { dark: 'border-l-rose-500', light: 'border-l-rose-400' },
  'Sample Preparation': { dark: 'border-l-violet-500', light: 'border-l-violet-400' },
}

interface MSInstrument {
  name: string
  vendor: string
  type: string
  description: string
  specs: string[]
  applications: string[]
}

interface SupportInstrument {
  name: string
  vendor: string
  category: string
  description: string
}

const hrmsInstruments: MSInstrument[] = [
  {
    name: 'Waters Xevo G3',
    vendor: 'Waters',
    type: 'Quadrupole Time-of-Flight (QTOF)',
    description: 'Latest-generation Waters QTOF — primary platform for high-coverage untargeted metabolomics and lipidomics.',
    specs: [
      'Broadened Dynamic Range For Complex Matrices',
      'High-Resolution Accurate Mass (> 30,000 FWHM)',
      'SONAR Data-Independent Acquisition',
      'UPLC Coupled For Rapid, Efficient Separations',
    ],
    applications: ['Untargeted Metabolomics', 'Low-Abundance Detection', 'Biomarker Discovery'],
  },
  {
    name: 'Waters Xevo G2-S',
    vendor: 'Waters',
    type: 'Quadrupole Time-of-Flight (QTOF)',
    description: 'High-sensitivity QTOF with SONAR DIA capability for comprehensive untargeted profiling and metabolite ID.',
    specs: [
      'StepWave Ion Transfer Technology',
      'MSe Data-Independent Acquisition (DIA)',
      'UPLC-Coupled Analysis',
      '< 5 PPM Mass Accuracy',
    ],
    applications: ['Untargeted Metabolomics', 'Untargeted Lipidomics', 'Metabolite Identification'],
  },
  {
    name: 'Waters Xevo G2',
    vendor: 'Waters',
    type: 'Quadrupole Time-of-Flight (QTOF)',
    description: 'Proven QTOF platform for accurate-mass MS/MS and global metabolic profiling studies.',
    specs: [
      'Accurate-mass MS/MS fragmentation',
      'Broad dynamic range detection',
      'UPLC-Coupled Analysis',
      'TOFMS, MSe, and MS/MS Acquisition Modes',
    ],
    applications: ['Untargeted Profiling','High-Throughput Profiling', 'Biomarker Discovery', 'Pathway Analysis'],
  },
  {
    name: 'Bruker timsTOF HT',
    vendor: 'Bruker',
    type: 'TIMS-QTOF (Ion Mobility QTOF)',
    description: 'Next-generation trapped ion mobility QTOF for isomer-resolved metabolomics and high-sensitivity nanoLC workflows.',
    specs: [
      'Trapped Ion Mobility Separation (TIMS)',
      '100 Hz PASEF MS/MS Acquisition',
      'High-Sensitivity nanoLC Coupling',
      'CCS Values For Structural Annotation',
    ],
    applications: ['Ion Mobility Metabolomics', 'Lipid Isomer Separation', 'High-Sensitivity Profiling'],
  },
]

const targetedInstruments: MSInstrument[] = [
  {
    name: 'Sciex 7500 QTRAP (×2)',
    vendor: 'Sciex',
    type: 'Triple Quadrupole / Linear Ion Trap',
    description: 'Dual Sciex 7500 QTRAPs — the highest-sensitivity QTRAP platform available, powering our clinical metabolomics panels.',
    specs: [
      'Femtomolar-level sensitivity',
      'MRM, Enhanced product ion (EPI) scanning',
      'IonDrive Turbo V source technology',
      'Optimized for complex biological matrices',
    ],
    applications: ['Targeted Metabolomics', 'Targeted Lipidomics', 'Clinical Biomarker Panels', 'Oxylipins Quantitation', 'Amino Acid Quantitation', 'Lipid Mediators Quantitation', 'Biocrates AbsoluteIDQ® Panels'],
  },
  {
    name: 'Sciex 5500 QTRAP',
    vendor: 'Sciex',
    type: 'Triple Quadrupole / Linear Ion Trap',
    description: 'Robust, high-throughput QTRAP for eicosanoid, acylcarnitine, and broad targeted metabolomics workflows.',
    specs: [
      'Wide dynamic range MRM acquisition',
      'EPI acquisition',
      'Scheduled MRM for panel expansion',
      'Excellent matrix tolerance',
    ],
    applications: ['Targeted Metabolomics', 'Targeted Lipidomics', 'Clinical Biomarker Panels', 'Oxylipins Quantitation', 'Amino Acid Quantitation', 'Lipid Mediators Quantitation', 'Biocrates AbsoluteIDQ® Panels'],
  },
  {
    name: 'Waters TQ-S Triple Quadrupole',
    vendor: 'Waters',
    type: 'Triple Quadrupole Mass Spectrometer',
    description: "Waters' premier triple quadrupole — favored for PK/PD bioanalysis and validated targeted method development.",
    specs: [
      'StepWave ion guide for high sensitivity',
      'High-speed MRM acquisition',
      'Excellent matrix tolerance and robustness',
      'UPLC-coupled for fast chromatography',
    ],
    applications: ['PK/PD Studies', 'Bioanalytical Development', 'Drug & Metabolite Quantification', 'Biocrates AbsoluteIDQ® p180', 'Biocrates AbsoluteIDQ® Bile Acids', 'Small Molecule Quantitation'],
  },
]

const supportingEquipment: SupportInstrument[] = [
  {
    name: 'Agilent 1260 Infinity II HPLC',
    vendor: 'Agilent',
    category: 'Chromatography',
    description: 'High-performance LC system for method development, fraction collection, and sample preparation workflows.',
  },
  {
    name: 'Agilent Seahorse XF Flex Analyzer',
    vendor: 'Agilent',
    category: 'Metabolic Flux',
    description: 'New generation platform for 3D real-time mitochondrial respiration and glycolytic flux measurements with configurable assay formats.',
  },
  {
    name: 'Agilent Seahorse XFe96 Analyzer',
    vendor: 'Agilent',
    category: 'Metabolic Flux',
    description: 'Real-time 96-well measurement of oxygen consumption rate (OCR) and extracellular acidification rate (ECAR) in live cells.',
  },
  {
    name: 'ThermoFisher NanoDrop',
    vendor: 'ThermoFisher',
    category: 'Quality Control',
    description: 'Micro-volume spectrophotometer for rapid nucleic acid and protein quantification in sample QC workflows.',
  },
  {
    name: 'ThermoFisher KingFisher Flex (×2)',
    vendor: 'ThermoFisher',
    category: 'Automation',
    description: 'Automated magnetic bead-based nucleic acid and protein purification for high-throughput sample processing.',
  },
  {
    name: 'Waters Andrew+ Liquid Handler (x2)',
    vendor: 'Waters',
    category: 'Automation',
    description: 'Robotic liquid handling for automated sample preparation, dilution series, and plate-format metabolomics workflows.',
  },
  {
    name: 'OMNI Prep Automated Homogenizer',
    vendor: 'OMNI',
    category: 'Sample Preparation',
    description: 'Automated tissue and cell homogenization system for high-throughput sample preparation and lysis workflows.',
  },
  {
    name: 'Varian 400 MHz NMR',
    vendor: 'Varian',
    category: 'Structural Analysis',
    description: '400 MHz nuclear magnetic resonance spectrometer for structural elucidation and metabolite identification.',
  },
]

const legacyInstruments = [
    { name: 'Bruker timsTOF Pro 2', type: 'Ion Mobility QTOF' },
    { name: 'Agilent GC-TOF MS', type: 'Gas Chromatography TOF' },
    { name: 'Waters TQ-S', type: 'Triple Quadrupole MS' },
    { name: 'Waters Synapt G2', type: 'Ion Mobility QTOF' },
]

function MSCard({ instrument, isDark }: { instrument: MSInstrument; isDark: boolean }) {
  const badge = vendorBadge[instrument.vendor] ?? vendorBadge['Varian']
  const accent = vendorAccent[instrument.vendor] ?? vendorAccent['Varian']

  return (
    <div className={`rounded-xl overflow-hidden border-l-4 border border-r border-b border-t ${
      isDark
        ? `${accent.dark} bg-gray-800/60 border-r-gray-700 border-b-gray-700 border-t-gray-700`
        : `${accent.light} bg-white border-r-gray-200 border-b-gray-200 border-t-gray-200`
    }`}>
      <div className="p-6">
        {/* Vendor + Type */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${isDark ? badge.dark : badge.light}`}>
            {instrument.vendor}
          </span>
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{instrument.type}</span>
        </div>

        {/* Name */}
        <h3 className={`text-lg font-bold mb-2 leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {instrument.name}
        </h3>
        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {instrument.description}
        </p>

        {/* Specs */}
        <div className="mb-4">
          <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Key Specifications
          </p>
          <ul className="space-y-1.5">
            {instrument.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={13} className={`mt-0.5 shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
                <span className={`text-xs leading-snug ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div className="flex flex-wrap gap-1.5">
          {instrument.applications.map((app, i) => (
            <span
              key={i}
              className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {app}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SupportCard({ instrument, isDark }: { instrument: SupportInstrument; isDark: boolean }) {
  const categoryBadge = categoryColor[instrument.category] ?? categoryColor['Quality Control']
  const accent = categoryAccent[instrument.category] ?? categoryAccent['Quality Control']

  return (
    <div className={`rounded-xl p-5 border-l-4 border border-r border-b border-t ${
      isDark
        ? `${accent.dark} bg-gray-800/60 border-r-gray-700 border-b-gray-700 border-t-gray-700`
        : `${accent.light} bg-white border-r-gray-200 border-b-gray-200 border-t-gray-200`
    }`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className={`text-sm font-semibold leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {instrument.name}
        </h3>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${isDark ? categoryBadge.dark : categoryBadge.light}`}>
          {instrument.category}
        </span>
      </div>
      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {instrument.description}
      </p>
    </div>
  )
}

export default function Instruments() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>

      {/* Hero */}
      <section className={`pt-24 pb-6 md:pb-8 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-blue-50 to-gray-50'
      }`}>
        <div className="container max-w-7xl mx-auto">
          <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            State-of-the-Art Platforms
          </p>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Instrumentation
          </h1>
          <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our facility houses a comprehensive suite of mass spectrometers, metabolic flux analyzers, and automated sample-handling systems — enabling high-throughput discovery and clinical-grade quantitative metabolomics.
          </p>
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            View Our Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Untargeted / HRMS Platforms */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="High-Resolution Mass Spectrometry"
            subtitle="QTOF platforms used primarily for untargeted metabolomics and lipidomics discovery workflows."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {hrmsInstruments.map((inst, i) => (
              <MSCard key={i} instrument={inst} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Targeted Platforms */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Targeted Quantification Platforms"
            subtitle="Triple quadrupole and QTRAP instruments for validated quantitative panels and PK/PD bioanalysis."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetedInstruments.map((inst, i) => (
              <MSCard key={i} instrument={inst} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Equipment */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader
            title="Supporting Equipment"
            subtitle="Complementary platforms for metabolic flux analysis, sample automation, structural elucidation, and quality control."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {supportingEquipment.map((inst, i) => (
              <SupportCard key={i} instrument={inst} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Instruments */}
      <section className={`py-8 md:py-10 border-t ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
        <div className="container max-w-8xl mx-auto">
          <div className="mb-8">
            <h2 className={`text-xl font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Legacy Instruments</h2>
            <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Previously operated platforms — listed for reference.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {legacyInstruments.map((inst, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                  isDark ? 'border-gray-800 bg-gray-900 text-gray-500' : 'border-gray-200 bg-white text-gray-400'
                }`}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{inst.name}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{inst.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Services */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start a Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Learn about the full range of metabolomics services powered by these platforms.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-blue-700 font-medium text-sm hover:bg-blue-50 transition-colors"
            >
              View Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
