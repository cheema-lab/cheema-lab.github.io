import { Mail, ExternalLink } from 'lucide-react'
import Card from '../components/Card.tsx'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

export default function People() {
  const { isDark } = useTheme()
  
  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Helper function to get a color based on name hash
  const getAvatarColor = (name: string) => {
    const colors = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600',
      'from-emerald-400 to-emerald-600',
      'from-amber-400 to-amber-600',
      'from-cyan-400 to-cyan-600',
      'from-indigo-400 to-indigo-600',
      'from-rose-400 to-rose-600',
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
  }

  const piData = {
    name: 'Dr. Amrita K. Cheema',
    title: 'Principal Investigator',
    email: 'akc27@georgetown.edu',
    bio: `Dr. Amrita K. Cheema is the Director of the Metabolomics Shared Resource at the Lombardi Comprehensive Cancer Center and an Associate Professor in the Department of Oncology at Georgetown University Medical Center. She has pioneered the application of metabolomics to understand cancer metabolism, radiation biology, and neurodegenerative diseases.`,
    education: [
      'Ph.D. in Chemistry, University of Mumbai',
      'Postdoctoral Fellowship, National Institutes of Health',
    ],
    expertise: [
      'Metabolomics',
      'Mass Spectrometry',
      'Cancer Biology',
      'Radiation Biology',
      'Systems Biology',
    ],
  }

  const teamMembers = [
    {
      id: 1,
      name: 'Shivani Bansal, Ph.D.',
      title: 'Research Instructor',
      email: 'sm3451@georgetown.edu',
      expertise: ['Radiation Metabolomics', 'Biomarker Discovery', 'Mass Spectrometry'],
    },
    {
      id: 2,
      name: 'Baldev Singh, Ph.D.',
      title: 'Research Instructor',
      email: 'bs1126@georgetown.edu',
      expertise: ['Radiation Biology', 'Metabolomics', 'Data Analysis'],
    },
    {
      id: 3,
      name: 'Jeyalakshmi Kandhavelu, Ph.D.',
      title: 'Staff Scientist',
      email: 'jk2341@georgetown.edu',
      expertise: ['Cancer Biology', 'Clinical Proteomics', 'Mass Spectrometry', 'Biomarker Discovery'],
    },
    {
      id: 4,
      name: 'Meth Jayatilake, M.S.',
      title: 'Staff Scientist',
      email: 'mmj61@georgetown.edu',
      expertise: ['Untargeted Metabolomics', 'Biomarker Discovery', 'Data Analysis'],
    },
    {
      id: 5,
      name: 'Yoel Sanchez Araujo, Ph.D.',
      title: 'Staff Scientist',
      email: 'ys1179@georgetown.edu',
      expertise: ['Bioinformatics', 'Data Analysis', 'Predictive Modeling', 'Machine Learning'],
    },
    {
      id: 6,
      name: 'Pritha Bose, Ph.D.',
      title: 'Staff Scientist',
      email: 'pb1045@georgetown.edu',
      expertise: ['Cancer Biology', 'Animal Models', 'Nanoparticle Engineering'],
    },
    {
      id: 7,
      name: 'Satinder Kaur, M.S.',
      title: 'Staff Scientist',
      email: 'sk2463@georgetown.edu',
      expertise: ['Targeted Metabolomics', 'Proteomics'],
    },
    {
      id: 8,
      name: 'Sunain Deol, M.S.',
      title: 'Research Assistant',
      email: 'skd74@georgetown.edu',
      expertise: ['Cell Culture', 'Animal Models', 'Microscopy', 'Scientific Writing'],
    },
    {
      id: 9,
      name: 'Patricia Vedamony, B.S.',
      title: 'Research Associate',
      email: 'pv249@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization', 'Statistics', 'R Programming'],
    },
    {
      id: 10,
      name: 'Yanjun (Ray) Zhang, M.S.',
      title: 'Biochemistry Ph.D. Candidate',
      email: 'yz843@georgetown.edu',
      expertise: ['Data Analysis', 'Machine Learning', 'Python', 'Statistical Modeling'],
    },
    {
      id: 11,
      name: 'Sampada Rawat, MBA',
      title: 'Program Manager',
      email: 'sr1582@georgetown.edu',
      expertise: ['Data Analysis', 'Project Management', 'Reporting', 'Visualization'],
    },
    {
      id: 12,
      name: 'Daniel Burbano',
      title: 'Undergraduate Intern',
      email: 'metabolomics@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization', 'Bioinformatics', 'Database Design'],
    },
    {
      id: 13,
      name: 'Sai Charan Chaduruvelly',
      title: 'Undergraduate Intern',
      email: 'metabolomics@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization', 'Statistics', 'Machine Learning'],
    },
    {
      id: 14,
      name: 'Angela ?',
      title: 'Undergraduate Intern',
      email: 'metabolomics@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization'],
    },
    {
      id: 15,
      name: 'Christian ?',
      title: 'RISE Undergraduate Intern',
      email: 'metabolomics@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization'],
    },
    {
      id: 16,
      name: 'Zain ?',
      title: 'RISE Undergraduate Intern',
      email: 'metabolomics@georgetown.edu',
      expertise: ['Data Analysis', 'Visualization'],
    },
  ]

  const alumni = [
    {
      name: 'Shu Wang',
      graduated: '2026',
      currentPosition: '?',
    },
    {
      name: 'Person',
      graduated: 'Year',
      currentPosition: 'Title',
    },
    {
      name: 'Person',
      graduated: 'Year',
      currentPosition: 'Title',
    },
  ]

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
            The Team
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Team</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Meet the talented researchers and scientists who drive our groundbreaking metabolomics research.
          </p>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Principal Investigator" />

          <Card className="max-w-6xl mx-auto border-l-4 border-l-blue-600">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Placeholder for image */}
              <div className="flex items-start justify-center md:justify-start flex-shrink-0">
                <div className={`w-40 h-40 bg-gradient-to-br rounded-2xl flex items-center justify-center ${
                  isDark ? 'from-blue-900 to-blue-800' : 'from-blue-200 to-blue-100'
                }`}>
                  <div className={`text-4xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>AKC</div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{piData.name}</h3>
                <p className={`text-lg font-medium mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{piData.title}</p>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{piData.bio}</p>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h4>
                  <ul className="space-y-2">
                    {piData.education.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className={isDark ? 'text-gray-400' : 'text-gray-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {piData.expertise.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark ? 'bg-blue-950 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${piData.email}`}
                  className={isDark ? 'inline-flex items-center text-blue-400 hover:text-blue-300 font-medium' : 'inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'}
                >
                  <Mail size={18} className="mr-2" />
                  {piData.email}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Members */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader title="Lab Members" subtitle="Talented researchers advancing metabolomics science" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className={`border-l-4 border-l-blue-600 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="flex items-start gap-4 mb-4">
                  {/* Headshot */}
                  <div className={`w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center flex-shrink-0 ${
                    getAvatarColor(member.name)
                  }`}>
                    <span className="text-xl font-bold text-white">
                      {getInitials(member.name)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{member.title}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className={`inline-flex items-center text-sm font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    >
                      <Mail size={16} className="mr-2" />
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Expertise Tags */}
                {member.expertise && member.expertise.length > 0 && (
                  <div className="mb-4">
                    {/* <h4 className={`font-semibold mb-3 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Expertise and Interests</h4>  Title for Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? 'bg-blue-950 text-blue-400' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <SectionHeader title="Alumni" subtitle="Celebrating the careers of our former team members" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {alumni.map((alum, idx) => (
              <Card key={idx} className={`border-l-4 border-l-gray-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{alum.name}</h3>
                  <p className={`text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{alum.currentPosition}</p>
                  <p className={`text-xs font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Graduated {alum.graduated}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className={`py-10 md:py-14 bg-gradient-to-br ${
        isDark ? 'from-blue-950 to-gray-900' : 'from-blue-50 to-gray-50'
      }`}>
        <div className="container max-w-8xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Join Our Team</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We're always looking for motivated researchers and students interested in metabolomics and systems biology. Whether you're interested in postdoctoral positions, graduate opportunities, or undergraduate research, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                isDark ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Contact Us <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href="https://careers.georgetown.edu"
              className={`inline-flex items-center justify-center px-6 py-3 border-2 rounded-lg font-medium transition-colors ${
                isDark ? 'border-gray-700 text-gray-100 hover:border-gray-600 hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Open Positions <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
