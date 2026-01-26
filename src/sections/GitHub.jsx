import { useState, useEffect } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaExternalLinkAlt } from 'react-icons/fa'

// Language color mapping
const languageColors = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#ed8b00',
  Go: '#00add8',
  Rust: '#000000',
  'C++': '#00599c',
  C: '#a8b9cc',
  PHP: '#777bb4',
  Ruby: '#cc342d',
  Swift: '#fa7343',
  Kotlin: '#7f52ff',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#4fc08d',
  React: '#61dafb',
  'C#': '#239120',
  Shell: '#89e051',
  Dart: '#00b4ab',
  Scala: '#dc322f',
  R: '#276dc3',
  MATLAB: '#e16737',
  'Objective-C': '#438eff',
  Perl: '#39457e',
  Lua: '#000080',
  Haskell: '#5d4f85',
  Clojure: '#db5855',
  Elixir: '#6e4a7e',
  Erlang: '#a90533',
  'F#': '#b845fc',
  OCaml: '#3be133',
  Julia: '#a270ba',
  Racket: '#3c5caa',
  Scheme: '#1e4a72',
  Prolog: '#74283c',
  Assembly: '#6e4c13',
  Makefile: '#427819',
  Dockerfile: '#384d54',
  PowerShell: '#012456',
  Groovy: '#4298b8',
  CoffeeScript: '#244776',
  TeX: '#3d6117',
  Vim: '#199f4b',
  Emacs: '#7f5ab6',
  'Jupyter Notebook': '#da5b0b',
  Markdown: '#083fa1',
  YAML: '#cb171e',
  JSON: '#000000',
  XML: '#005c9f',
  SVG: '#ffb13b',
  GraphQL: '#e10098',
  SQL: '#336791',
  PLpgSQL: '#336791',
  TSQL: '#336791',
  MySQL: '#4479a1',
  PostgreSQL: '#336791',
  MongoDB: '#47a248',
  Redis: '#dc382d',
  Elasticsearch: '#005571',
  Solr: '#d9411e',
  Cassandra: '#1287b1',
  Neo4j: '#008cc1',
  InfluxDB: '#22adf6',
  Prometheus: '#e6522c',
  Grafana: '#f46800',
  Kibana: '#005571',
  Logstash: '#005571',
  Beats: '#005571',
  Kafka: '#231f20',
  RabbitMQ: '#ff6600',
  Nginx: '#009639',
  Apache: '#d22128',
  Docker: '#2496ed',
  Kubernetes: '#326ce5',
  Terraform: '#623ce4',
  Ansible: '#ee0000',
  Puppet: '#ffae1a',
  Chef: '#f09820',
  Vagrant: '#1563ff',
  Packer: '#02a8ff',
  Consul: '#f24c53',
  Vault: '#000000',
  Nomad: '#00ca8e',
  'GitLab CI': '#e24329',
  'GitHub Actions': '#2088ff',
  Jenkins: '#d24939',
  Travis: '#3eaaaf',
  CircleCI: '#343434',
  'Azure DevOps': '#0078d4',
  'AWS CloudFormation': '#ff9900',
  'Google Cloud Build': '#4285f4',
  Firebase: '#ffca28',
  Heroku: '#430098',
  Vercel: '#000000',
  Netlify: '#00c7b7',
  Surge: '#ff5f5f',
  Zeit: '#000000',
  'Cloudflare Workers': '#f38020',
  'Cloudflare Pages': '#f38020',
  'Cloudflare R2': '#f38020',
  'Cloudflare KV': '#f38020',
  'Cloudflare Durable Objects': '#f38020',
  'Cloudflare Stream': '#f38020',
  'Cloudflare Images': '#f38020',
  'Cloudflare Analytics': '#f38020',
  'Cloudflare Access': '#f38020',
  'Cloudflare Gateway': '#f38020',
  'Cloudflare Zero Trust': '#f38020',
  'Cloudflare Tunnel': '#f38020',
  'Cloudflare WARP': '#f38020',
  'Cloudflare One': '#f38020',
  'Cloudflare Workers KV': '#f38020',
  'Cloudflare D1': '#f38020',
  'Cloudflare R2': '#f38020',
  'Cloudflare Images': '#f38020',
  'Cloudflare Stream': '#f38020',
  'Cloudflare Analytics': '#f38020',
  'Cloudflare Access': '#f38020',
  'Cloudflare Gateway': '#f38020',
  'Cloudflare Zero Trust': '#f38020',
  'Cloudflare Tunnel': '#f38020',
  'Cloudflare WARP': '#f38020',
  'Cloudflare One': '#f38020',
}

export default function GitHub() {
  const [githubStats, setGithubStats] = useState({
    username: 'ChaseConover33',
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    languages: [],
    pinnedRepos: [],
    loading: true,
  })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          'https://api.github.com/users/ChaseConover33'
        )
        const userData = await userResponse.json()

        // Fetch repositories
        const reposResponse = await fetch(
          'https://api.github.com/users/ChaseConover33/repos?sort=updated&per_page=100'
        )
        const repos = await reposResponse.json()

        // Calculate stats
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)

        // Calculate language distribution
        const languageCount = {}
        repos.forEach((repo) => {
          if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1
          }
        })

        const totalReposWithLanguages = Object.values(languageCount).reduce(
          (sum, count) => sum + count,
          0
        )

        const languages = Object.entries(languageCount)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalReposWithLanguages) * 100),
            color: languageColors[name] || '#6e7681',
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5)

        // Get pinned repos (first 6 most recent/starred repos)
        const pinnedRepos = repos
          .sort((a, b) => {
            // Sort by stars first, then by updated date
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return new Date(b.updated_at) - new Date(a.updated_at)
          })
          .slice(0, 6)
          .map((repo) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || 'N/A',
            languageColor: languageColors[repo.language] || '#6e7681',
            url: repo.html_url,
            topics: repo.topics || [],
          }))

        setGithubStats({
          username: userData.login,
          totalRepos: userData.public_repos,
          totalStars,
          totalForks,
          languages,
          pinnedRepos,
          loading: false,
        })
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
        setGithubStats((prev) => ({ ...prev, loading: false }))
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <section id="github" className="section-padding bg-dark-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaGithub className="w-10 h-10 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              GitHub Profile
            </h2>
          </div>
          <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
            Explore my open-source contributions, projects, and code. I believe
            in sharing knowledge and building in public.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
            <FaGithub className="w-8 h-8 text-white mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">
              {githubStats.loading ? '...' : githubStats.totalRepos}
            </p>
            <p className="text-sm text-dark-text-muted mt-1">Public Repositories</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
            <FaStar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">
              {githubStats.loading ? '...' : githubStats.totalStars}
            </p>
            <p className="text-sm text-dark-text-muted mt-1">Total Stars</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
            <FaCodeBranch className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">
              {githubStats.loading ? '...' : githubStats.totalForks}
            </p>
            <p className="text-sm text-dark-text-muted mt-1">Total Forks</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
            <FaEye className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">
              {githubStats.loading ? '...' : githubStats.totalStars.toLocaleString()}
            </p>
            <p className="text-sm text-dark-text-muted mt-1">Total Stars Received</p>
          </div>
        </div>

        {/* Language Distribution */}
        {githubStats.languages.length > 0 && (
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">
              Language Distribution
            </h3>
            {githubStats.loading ? (
              <p className="text-dark-text-muted">Loading language data...</p>
            ) : (
              <div className="space-y-4">
                {githubStats.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-dark-text font-medium">{lang.name}</span>
                      </div>
                      <span className="text-dark-text-muted text-sm">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Pinned Repositories */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            {githubStats.pinnedRepos.length > 0
              ? 'Featured Repositories'
              : 'Repositories'}
          </h3>
          {githubStats.loading ? (
            <p className="text-dark-text-muted text-center py-8">
              Loading repositories...
            </p>
          ) : githubStats.pinnedRepos.length === 0 ? (
            <div className="bg-dark-card border border-dark-border rounded-lg p-12 text-center">
              <FaGithub className="w-16 h-16 text-dark-text-muted mx-auto mb-4 opacity-50" />
              <p className="text-dark-text-muted text-lg mb-2">
                No public repositories yet
              </p>
              <p className="text-dark-text-muted text-sm">
                Start building and your repositories will appear here automatically!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubStats.pinnedRepos.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-dark-text-muted group-hover:text-white transition-colors" />
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <FaExternalLinkAlt className="w-4 h-4 text-dark-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-dark-text-muted text-sm mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 mb-4 text-xs text-dark-text-muted">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs text-dark-text"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-2 py-1 text-xs text-dark-text-muted">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              </a>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${githubStats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-blue-400/50 transition-colors font-medium text-white"
          >
            <FaGithub className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
