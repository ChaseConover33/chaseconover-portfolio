export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Company Name',
      location: 'Location',
      period: '2023 - Present',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Implemented new features and optimized existing codebase',
        // Add more bullet points
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
    },
    {
      title: 'Junior Developer',
      company: 'Previous Company',
      location: 'Location',
      period: '2021 - 2023',
      description: [
        'Built responsive web interfaces using modern JavaScript frameworks',
        'Participated in code reviews and agile development processes',
        'Fixed bugs and improved application performance',
      ],
      technologies: ['JavaScript', 'React', 'CSS', 'Git'],
    },
    // Add more experiences
  ]

  return (
    <section id="experience" className="section-padding bg-dark-surface">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work Experience
        </h2>
        <p className="text-dark-text-muted text-lg mb-12">
          My professional journey and the roles I've held
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-400/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 text-lg">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-dark-text-muted">{exp.period}</p>
                  <p className="text-dark-text-muted text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4 text-dark-text-muted">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-sm text-dark-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
