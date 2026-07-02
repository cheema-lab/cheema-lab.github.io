import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const subjectLabels: Record<string, string> = {
    collaboration: 'Research Collaboration',
    inquiry: 'Research Inquiry',
    position: 'Career Opportunity',
    media: 'Media Inquiry',
    other: 'Other',
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subjectLabel = subjectLabels[formData.subject] ?? formData.subject
    const emailSubject = `[Cheema Lab] ${subjectLabel} — from ${formData.name}`
    const emailBody =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${subjectLabel}\n\n` +
      `Message:\n${formData.message}`
    const mailto = `mailto:metabolomics@georgetown.edu?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailto
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'akc27@georgetown.edu',
      link: 'mailto:akc27@georgetown.edu',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (202) 687-0451',
      link: 'tel:+12026870451',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Georgetown University Medical Center\nWashington, D.C.',
      link: null,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Appointment via Email\nMonday – Friday\n9 AM – 5 PM EST',
      link: null,
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
            Get In Touch
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get in touch with the Cheema Lab. We're always interested in discussing collaborations, research inquiries, or providing support for your analytical needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container max-w-8xl mx-auto mb-16">
          <SectionHeader title="Get in Touch" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, content, link }, idx) => (
              <Card key={idx} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-950' : 'bg-blue-100'}`}>
                    <Icon size={28} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                </div>
                <h3 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                {link ? (
                  <a href={link} className={`transition-colors whitespace-pre-line ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
                    {content}
                  </a>
                ) : (
                  <p className={`whitespace-pre-line text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{content}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="h-fit">
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h2>

              {submitted && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  isDark ? 'bg-green-950 border-green-700 text-green-400' : 'bg-green-100 border-green-400 text-green-700'
                }`}>
                  Your email client should have opened with a pre-filled message to <strong>metabolomics@georgetown.edu</strong>. Please review and send it to complete your inquiry.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="inquiry">Research Inquiry</option>
                    <option value="position">Career Opportunity</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                * Required fields. We will get back to you soon.
              </p>
            </Card>

            {/* Info Card */}
            <div className="flex flex-col justify-center space-y-6">
              <Card>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Metabolomics Shared Resource</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  The Metabolomics Shared Resource at the Lombardi Comprehensive Cancer Center provides cutting-edge metabolomics analysis services and expertise to the Georgetown research community and external collaborators.
                </p>
                <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  <li>✓ Advanced Mass Spectrometry</li>
                  <li>✓ NMR Spectroscopy</li>
                  <li>✓ Bioinformatics Analysis</li>
                  <li>✓ Study Design Consultation</li>
                </ul>
              </Card>

              <Card className={`bg-gradient-to-br ${
                isDark ? 'from-gray-800 to-gray-900' : 'from-blue-50 to-gray-50'
              }`}>
                <h3 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://lombardi.georgetown.edu" target="_blank" rel="noopener noreferrer" className={isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}>
                      Lombardi Comprehensive Cancer Center
                    </a>
                  </li>
                  <li>
                    <a href="https://georgetown.edu" target="_blank" rel="noopener noreferrer" className={isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}>
                      Georgetown University
                    </a>
                  </li>
                  <li>
                    <a href="https://gumc.georgetown.edu/" target="_blank" rel="noopener noreferrer" className={isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}>
                      Georgetown University Medical Center
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={`h-96 relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gray-200'
      }`}>
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
          isDark ? 'from-gray-900 to-gray-800' : 'from-gray-200 to-gray-300'
        }`}>
          <div className="text-center">
            <MapPin size={48} className={`mx-auto mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Georgetown University Medical Center</p>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Washington, D.C.</p>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
