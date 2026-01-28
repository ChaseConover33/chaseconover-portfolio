import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa'

export default function Projects() {
  // Add your projects here when ready
  // Format:
  // {
  //   title: 'Project Name',
  //   description: 'Project description',
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   githubUrl: 'https://github.com/ChaseConover33/project-name',
  //   liveUrl: 'https://project-demo.com',
  //   featured: true, // Set to true for featured projects
  // }
  const projects = []

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding scroll-mt-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills, problem-solving
            abilities, and passion for building impactful software solutions.
          </p>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div className="bg-dark-card border border-dark-border rounded-lg p-12 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-400/10 rounded-full mb-6">
              <FaRocket className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-dark-text-muted text-lg max-w-md mx-auto mb-6">
              I'm currently working on exciting projects that I'll be showcasing here soon. 
              Check back later to see my latest work!
            </p>
            <a
              href="https://github.com/ChaseConover33"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
            >
              <FaGithub className="w-5 h-5" />
              View My GitHub
            </a>
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="space-y-24 mb-24">
                {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                  <div className="relative bg-dark-card border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-blue-400/10 to-purple-500/10 flex items-center justify-center">
                      <FaCode className="w-16 h-16 text-blue-400/30" />
                      {/* Replace with actual project image */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`order-1 space-y-4 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-green-400/10 text-green-400 text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-dark-text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-sm text-dark-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border text-white rounded-lg hover:border-blue-400/50 transition-colors font-medium"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
                ))}
              </div>
            )}

            {/* Other Projects Grid */}
            {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More Projects
              </h3>
              <p className="text-dark-text-muted">
                Additional projects showcasing various technologies and domains
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400/10 to-purple-500/10 flex items-center justify-center">
                    <FaCode className="w-12 h-12 text-blue-400/30" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-dark-text-muted text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs text-dark-text"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-dark-text-muted">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-dark-text-muted hover:text-white transition-colors"
                      >
                        <FaGithub className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

            {/* Call to Action */}
            {projects.length > 0 && (
              <div className="mt-16 text-center">
                <p className="text-dark-text-muted mb-4">
                  Want to see more? Check out my GitHub for additional projects and
                  contributions.
                </p>
                <a
                  href="https://github.com/ChaseConover33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-blue-400/50 transition-colors font-medium text-white"
                >
                  <FaGithub className="w-5 h-5" />
                  View All Projects on GitHub
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
