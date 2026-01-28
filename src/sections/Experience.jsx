import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'JPMorgan Chase',
      location: 'Wilmington, DE',
      period: 'July 2022 – September 2025',
      description: [
        'Designed and implemented high-performance Java Spring Boot microservices and RESTful web services for the Chase Mobile Banking App, supporting critical wallet, payment, and funding operations (Zelle, PayChaseCard, PayChaseAuto, United) at enterprise scale, processing hundreds of thousands of transactions per day',
        'Architected, maintained, and optimized 20+ Terraform-managed AWS environments supporting large-scale Java Spring Boot platform, including IAM, EKS, ECS, Lambda, EC2, Aurora, VPCs, and load balancers, enabling reliable multi-region deployments across DEV, UAT, and PROD',
        'Led migration from EKS to ECS, simplifying platform operations and improving cost efficiency by ~20% in lower environments through automated lightswitch schedules and Spot Instances, while replacing App Mesh with ALB-based routing',
        'Built custom post-deployment testing framework using AWS Lambda, ECS, and Spinnaker, orchestrating Lambda-driven workflows to provision and tear down ad-hoc ECS tasks for acceptance testing, enabling reusable, environment-agnostic deployment workflows',
        'Planned and executed 20+ multi-region production deployments of enterprise Java Spring Boot microservices, coordinating pre-deployment approvals, communications, and post-deployment validation, while managing change and incident workflows via ServiceNow',
        'Established comprehensive Spring Boot testing strategy, authoring unit, integration, acceptance, and end-to-end tests using Mockito, H2, Rest Assured, and WireMock, simulating 20+ downstream services and enforcing high testing standards',
        'Served as Scrum Master for 8-person Agile team, driving end-to-end planning, sprint execution, and delivery while mentoring junior developers and coordinating CI/CD pipelines (Jenkins, Spinnaker) and Docker deployments',
        'Implemented monitoring and observability using Datadog and Splunk, creating custom dashboards and deploying Datadog agents via Terraform, serving as key on-call engineer to reduce MTTR and improve platform reliability',
        'Designed least-privilege IAM roles and policies using reusable Terraform modules for 8+ microservices, implemented secure production database access via hardened EC2 jumphosts, and managed Route 53 DNS, TLS certificates, and Secrets Manager',
        'Presented and drove technical solutions for senior stakeholders and cross-functional teams, translating complex Java Spring Boot and cloud architecture decisions into actionable outcomes, including PostgreSQL connectivity solutions and API contract redesigns',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'AWS',
        'Terraform',
        'Kafka',
        'PostgreSQL',
        'Docker',
        'ECS',
        'EKS',
        'Kubernetes',
        'Jenkins',
        'Spinnaker',
        'Datadog',
        'Splunk',
        'Python',
        'Bash',
        'Mockito',
        'Rest Assured',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-dark-surface scroll-mt-20">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work Experience
        </h2>
        <p className="text-dark-text-muted text-lg mb-12">
          My professional journey and the roles I've held
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems.has(index)
            const displayItems = isExpanded
              ? exp.description
              : exp.description.slice(0, 3)

            return (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-400/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
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
                  {displayItems.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.description.length > 3 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4 font-medium"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Less</span>
                        <FaChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Show {exp.description.length - 3} More</span>
                        <FaChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
