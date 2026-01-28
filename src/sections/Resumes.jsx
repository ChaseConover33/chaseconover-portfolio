import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'

export default function Resumes() {
  const resumes = [
    {
      title: 'Java Developer Resume',
      description: 'Resume focused on Java development experience, enterprise applications, and backend systems.',
      version: 'Jan 2026',
      fileUrl: '/resumes/Java Developer Resume Jan 21.pdf',
      size: '85 KB',
    },
    {
      title: 'DevOps Engineer Resume',
      description: 'Resume highlighting my DevOps engineering experience, cloud infrastructure, CI/CD pipelines, and automation expertise.',
      version: 'Jan 2026',
      fileUrl: '/resumes/Dev Ops Resume Jan 21.pdf',
      size: '88 KB',
    },
    {
      title: 'Data Engineer Resume',
      description: 'Resume showcasing my data engineering expertise, ETL pipelines, data warehousing, and big data technologies.',
      version: 'Jan 2026',
      fileUrl: '/resumes/Chase Conover - Data Engineer Resume.pdf',
      size: '78 KB',
    },
  ]

  return (
    <section id="resumes" className="section-padding bg-dark-surface scroll-mt-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resumes
          </h2>
          <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
            Download my resume in PDF format. I maintain different versions
            tailored for various roles and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-400/10 rounded-lg group-hover:bg-blue-400/20 transition-colors">
                  <FaFilePdf className="w-6 h-6 text-blue-400" />
                </div>
                <span className="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs text-dark-text-muted">
                  {resume.version}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {resume.title}
              </h3>
              <p className="text-dark-text-muted text-sm mb-4">
                {resume.description}
              </p>
              <div className="flex items-center justify-between text-xs text-dark-text-muted mb-4">
                <span>PDF • {resume.size}</span>
              </div>
              <div className="flex gap-3">
                <a
                  href={resume.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-sm"
                >
                  <FaDownload className="w-4 h-4" />
                  Download
                </a>
                <a
                  href={resume.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-bg border border-dark-border rounded-lg hover:border-blue-400/50 transition-colors text-sm"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-dark-card border border-dark-border rounded-lg p-6">
            <p className="text-dark-text-muted mb-2">
              Need a different format or have questions?
            </p>
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
