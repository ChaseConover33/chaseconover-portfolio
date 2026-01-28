import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BlogPostViewer from '../components/BlogPostViewer'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  const blogPosts = [
    {
      title: 'Designing Scalable Systems: Lessons from Production',
      excerpt:
        'Key principles and patterns I\'ve learned while architecting large-scale systems. Real-world examples of handling millions of requests, database optimization, and distributed system challenges.',
      date: 'January 24, 2026',
      readTime: '12 min read',
      category: 'System Design',
      slug: 'designing-scalable-systems',
    },
    {
      title: 'Optimizing CI/CD Pipelines for Faster Deployments',
      excerpt:
        'Strategies for reducing build times, improving test coverage, and implementing effective deployment strategies. How we cut deployment time by 60% while maintaining quality.',
      date: 'January 18, 2026',
      readTime: '10 min read',
      category: 'DevOps',
      slug: 'optimizing-cicd-pipelines',
    },
    {
      title: 'My Journey into Software Development',
      excerpt:
        'Reflecting on my path to becoming a software developer, the challenges I faced, and the lessons I learned along the way.',
      date: 'January 15, 2026',
      readTime: '6 min read',
      category: 'Career',
      slug: 'journey-into-software-development',
    },
  ]

  return (
    <section id="blog" className="section-padding bg-dark-surface scroll-mt-20">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Blog
        </h2>
        <p className="text-dark-text-muted text-lg mb-12">
          Thoughts, tutorials, and insights on software development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              onClick={() => setSelectedPost(post.slug)}
              className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-dark-text-muted text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-dark-text-muted mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                <span>Read more</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </article>
          ))}
        </div>

        {/* Optional: Link to full blog if hosted elsewhere */}
        <div className="mt-12 text-center">
          <p className="text-dark-text-muted mb-4">
            More posts coming soon! Check back regularly for updates.
          </p>
        </div>
      </div>
      {selectedPost && (
        <BlogPostViewer slug={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  )
}
