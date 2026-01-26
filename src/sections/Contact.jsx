import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ChaseConover33', // Replace with your GitHub
      description: 'Check out my code and projects',
      color: 'hover:text-gray-300 hover:border-gray-300',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      href: 'https://leetcode.com/u/ChaseConover/', // Replace with your LeetCode
      description: 'View my coding challenges and solutions',
      color: 'hover:text-orange-400 hover:border-orange-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/chase-conover/',
      description: 'Connect with me professionally',
      color: 'hover:text-blue-400 hover:border-blue-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:chase.f.conover@gmail.com',
      description: 'Send me a message',
      color: 'hover:text-red-400 hover:border-red-400',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-dark-text-muted text-lg mb-12">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-dark-card border border-dark-border rounded-lg p-6 transition-all duration-300 ${link.color} group`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <Icon className="w-8 h-8 text-dark-text-muted group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white">
                      {link.name}
                    </h3>
                    <p className="text-dark-text-muted text-sm text-center">
                      {link.description}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-dark-text-muted mb-6">
              Whether you have a project in mind, a job opportunity, or just want
              to say hello, I'd love to hear from you!
            </p>
            <a
              href="mailto:chase.f.conover@gmail.com"
              className="inline-block px-8 py-3 bg-blue-400 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
