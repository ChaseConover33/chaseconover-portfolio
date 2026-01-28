import { FaGraduationCap, FaAward, FaCalendar } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      school: 'Virginia Tech',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      minor: 'Cyber Security',
      location: 'Blacksburg, Virginia',
      period: 'August 2018 - May 2022',
      honors: 'Cum Laude',
      description: [
        'Relevant coursework: Computer Systems (C), Data Structures and Algorithms I, II, & III (Java), Principles of Network Architecture, Principles of Computer Security, Secure Computing Capstone, Combinatorics, Data and Algorithm Analysis, Discrete Mathematics',
        'Focused on building strong foundations in software engineering, algorithms, and cybersecurity principles',
        'Completed Secure Computing Capstone project demonstrating practical application of security concepts',
      ],
      achievements: [
        'Cum Laude',
      ],
    },
  ]

  return (
    <section id="education" className="section-padding bg-dark-surface scroll-mt-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaGraduationCap className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Education
            </h2>
          </div>
          <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
            My academic background and educational achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 hover:border-blue-400/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-blue-400 text-xl font-medium mb-1">
                    {edu.major}
                    {edu.minor && (
                      <span className="text-dark-text-muted text-lg font-normal">
                        {' '}• Minor in {edu.minor}
                      </span>
                    )}
                  </p>
                  <p className="text-dark-text-muted text-lg">{edu.school}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-dark-text-muted mb-2 md:justify-end">
                    <FaCalendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-dark-text-muted text-sm">{edu.location}</p>
                  {edu.honors && (
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full">
                      <span className="text-blue-400 text-sm font-medium">
                        {edu.honors}
                      </span>
                    </div>
                  )}
                  {edu.gpa && (
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full">
                      <span className="text-blue-400 text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {edu.description && edu.description.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaAward className="w-5 h-5 text-yellow-400" />
                    Highlights
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-dark-text-muted">
                    {edu.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Achievements & Awards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
