import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ChaseConover33', // Replace with your GitHub
      color: 'hover:text-gray-300',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      href: 'https://leetcode.com/u/ChaseConover/', // Replace with your LeetCode
      color: 'hover:text-orange-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/chase-conover/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:chase.f.conover@gmail.com',
      color: 'hover:text-red-400',
    },
  ]

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-dark-text-muted text-sm">
            © {currentYear} Chase Conover. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-dark-text-muted ${link.color} transition-colors`}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
