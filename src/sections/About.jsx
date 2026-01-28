import { FaArrowDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const highlights = [
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Building scalable software solutions',
    },
    {
      number: '20+',
      label: 'Projects Completed',
      description: 'From startups to enterprise applications',
    },
    {
      number: '140+',
      label: 'LeetCode Problems',
      description: 'Sharpening algorithmic thinking',
    },
    {
      number: '100%',
      label: 'Dedicated',
      description: 'Committed to excellence and growth',
    },
  ]

  return (
    <section id="about" className="section-padding min-h-screen flex items-center scroll-mt-20" style={{ paddingTop: '140px' }}>
      <div className="container-max">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-full mb-4">
              <span className="text-blue-400 text-sm font-medium">
                Senior Software Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Chase Conover
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-text-muted leading-relaxed">
              A passionate{' '}
              <span className="text-white font-semibold">
                Senior Software Developer
              </span>{' '}
              with a proven track record of architecting and delivering
              high-impact solutions that drive business value.
            </p>
            <p className="text-lg text-dark-text-muted leading-relaxed">
              I specialize in building scalable, maintainable applications using
              modern technologies. With expertise spanning full-stack
              development, cloud architecture, and system design, I bring a
              holistic approach to software engineering. My passion lies in
              solving complex problems, mentoring teams, and continuously
              evolving with the ever-changing tech landscape.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                'Full-Stack Development',
                'System Architecture',
                'Cloud Solutions',
                'Team Leadership',
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-dark-text hover:border-blue-400/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium inline-flex items-center gap-2"
              >
                Get In Touch
                <FaArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#resumes"
                className="px-6 py-3 bg-dark-card border border-dark-border text-white rounded-lg hover:border-blue-400/50 transition-colors font-medium"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full bg-dark-card border-2 border-dark-border rounded-full overflow-hidden">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Chase Conover"
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  onError={(e) => {
                    // Fallback to initials if image doesn't exist
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 z-30 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl lg:text-8xl text-blue-400 font-bold z-10" style={{ display: 'none' }}>
                  CC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {highlight.number}
              </p>
              <p className="text-white font-semibold mb-1">{highlight.label}</p>
              <p className="text-dark-text-muted text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
