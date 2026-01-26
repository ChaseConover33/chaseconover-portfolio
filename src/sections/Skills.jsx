import { FaCode, FaServer, FaTools, FaCloud, FaDatabase } from 'react-icons/fa'

const proficiencyLevels = {
  Expert: 'bg-green-400 text-green-900',
  Advanced: 'bg-blue-400 text-blue-900',
  Intermediate: 'bg-yellow-400 text-yellow-900',
  Beginner: 'bg-orange-400 text-orange-900',
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      skills: [
        { name: 'Java', level: 'Expert' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'Express.js', level: 'Intermediate' },
      ],
    },
    {
      title: 'Data Engineering',
      icon: FaDatabase,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      skills: [
        { name: 'SQL', level: 'Advanced' },
        { name: 'ETL Pipelines', level: 'Advanced' },
        { name: 'Data Warehousing', level: 'Intermediate' },
        { name: 'Apache Spark', level: 'Intermediate' },
        { name: 'Airflow', level: 'Intermediate' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: FaCloud,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'Terraform', level: 'Intermediate' },
        { name: 'Git', level: 'Expert' },
        { name: 'Linux', level: 'Advanced' },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: FaTools,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'GitHub Actions', level: 'Intermediate' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains. Continuously learning and expanding my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className="bg-dark-card border border-dark-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-dark-text font-medium flex-1">
                        {skill.name}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${proficiencyLevels[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 bg-dark-card border border-dark-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Vite',
              'Jest',
              'Postman',
              'VS Code',
              'IntelliJ IDEA',
              'Maven',
              'Gradle',
              'REST APIs',
              'Microservices',
              'Agile/Scrum',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-dark-text text-sm hover:border-blue-400/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
