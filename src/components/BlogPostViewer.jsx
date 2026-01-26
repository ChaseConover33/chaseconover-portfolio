import { FaArrowLeft, FaCalendar, FaClock, FaTimes } from 'react-icons/fa'

// Blog post content
export const blogPosts = {
  'designing-scalable-systems': {
    title: 'Designing Scalable Systems: Lessons from Production',
    date: 'January 24, 2026',
    readTime: '12 min read',
    category: 'System Design',
    content: `
      <p class="mb-4 text-lg text-dark-text-muted">
        Over the years, I've had the privilege of architecting and scaling systems that handle millions of requests daily. 
        The journey from a simple monolithic application to a distributed, highly available system is filled with lessons 
        that can't be learned from textbooks alone.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Foundation: Understanding Your Requirements</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Before diving into any architectural decisions, it's crucial to understand your actual requirements. I've seen 
        teams over-engineer solutions for problems they don't have, and I've also seen teams under-engineer and pay the 
        price later. The key is finding the right balance.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Start by asking the right questions: What's your expected traffic? What are your latency requirements? What's 
        your acceptable downtime? These answers will guide your architectural decisions. For a system expecting 1000 
        requests per second, a simple load-balanced setup might suffice. For 100,000 requests per second, you'll need 
        a completely different approach involving caching layers, database sharding, and potentially event-driven 
        architectures.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Database Design: The Backbone of Scalability</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        One of the most critical decisions in system design is your database strategy. Early in my career, I learned the 
        hard way that a poorly designed database schema can become a bottleneck that no amount of horizontal scaling 
        can fix. Normalization is important, but denormalization for read performance is equally crucial in high-traffic 
        scenarios.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        I've implemented various strategies including read replicas for scaling read operations, database sharding for 
        distributing write load, and caching layers using Redis to reduce database pressure. The key is understanding 
        your read-to-write ratio. If you have 100 reads for every write, investing in read replicas and aggressive 
        caching makes sense. If writes are your bottleneck, you might need to consider event sourcing or CQRS patterns.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Microservices: When and Why</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Microservices aren't always the answer, but when done right, they can provide incredible scalability and 
        maintainability. The decision to break a monolith should be driven by clear boundaries and independent scaling 
        needs, not just because it's the "modern" approach.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        In one project, we successfully migrated from a monolithic Java application to microservices, reducing 
        deployment time from hours to minutes and allowing independent scaling of different components. However, this 
        came with increased complexity in monitoring, distributed tracing, and service communication. The trade-offs 
        are real, and they need to be carefully considered.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Caching Strategies That Actually Work</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Caching is often the quickest win for improving system performance, but it's also one of the most misunderstood 
        aspects of system design. I've implemented multi-layer caching strategies that include browser caching, CDN 
        caching, application-level caching, and database query caching.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The most effective approach I've found is a combination of Redis for hot data and Memcached for session storage. 
        Implementing cache invalidation strategies that balance freshness with performance is an art form. Too aggressive, 
        and you lose the benefits. Too conservative, and you serve stale data.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Monitoring and Observability</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        A system isn't truly scalable if you can't understand what's happening inside it. I've set up comprehensive 
        monitoring using tools like Prometheus, Grafana, and distributed tracing with Jaeger. The key metrics to track 
        include request latency (p50, p95, p99), error rates, throughput, and resource utilization.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Real-time alerting is crucial. I've configured alerts that trigger before users notice issues, allowing proactive 
        scaling and problem resolution. This requires understanding your system's normal behavior patterns and setting 
        intelligent thresholds.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Lessons Learned</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The most important lesson I've learned is that scalability is not just about handling more traffic—it's about 
        doing so efficiently, reliably, and maintainably. Every architectural decision has trade-offs, and understanding 
        these trade-offs is what separates good architects from great ones.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Start simple, measure everything, and scale based on actual needs rather than anticipated ones. The best system 
        design is the one that solves your specific problem elegantly, not the one that uses the most buzzwords.
      </p>
    `,
  },
  'optimizing-cicd-pipelines': {
    title: 'Optimizing CI/CD Pipelines for Faster Deployments',
    date: 'January 18, 2026',
    readTime: '10 min read',
    category: 'DevOps',
    content: `
      <p class="mb-4 text-lg text-dark-text-muted">
        In today's fast-paced development environment, the speed and reliability of your CI/CD pipeline can make or break 
        your team's productivity. Over the past few years, I've optimized multiple CI/CD pipelines, reducing deployment 
        times by up to 60% while maintaining and even improving code quality.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Starting Point: Understanding Your Bottlenecks</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Before optimizing anything, you need to understand where time is being spent. I've used pipeline analytics to 
        identify that in one project, 70% of our build time was spent running tests, 20% on dependency installation, 
        and only 10% on actual compilation. This insight completely changed our optimization strategy.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Start by instrumenting your pipeline to track time spent in each stage. Most CI/CD platforms provide this 
        information, but you might need to add custom timing logs. Once you know where time is being wasted, you can 
        target your optimizations effectively.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Parallelization: The Low-Hanging Fruit</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        One of the easiest wins is running tasks in parallel. I've restructured pipelines to run unit tests, integration 
        tests, linting, and security scans simultaneously instead of sequentially. This alone can cut pipeline time in half.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        However, parallelization requires careful dependency management. You need to ensure that tasks that can run in 
        parallel don't depend on each other, and that shared resources (like test databases) are properly managed to avoid 
        conflicts.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Dependency Caching: Saving Minutes Per Build</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Dependency installation can be a significant time sink, especially for projects with large dependency trees. 
        I've implemented caching strategies for npm, Maven, Gradle, and Docker layers that have reduced dependency 
        installation time from 5-10 minutes to 30-60 seconds.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The key is using cache keys that invalidate appropriately. For example, cache based on your dependency lock 
        files (package-lock.json, pom.xml, etc.) so the cache only rebuilds when dependencies actually change. I've also 
        implemented multi-stage Docker builds with layer caching to dramatically speed up container builds.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Test Optimization: Running Only What's Necessary</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Not all tests need to run on every commit. I've implemented test selection strategies that run only tests 
        affected by changed code. For Java projects, this might mean using tools that analyze code changes and run 
        only relevant test suites. For JavaScript projects, tools like Jest's changed files mode can significantly 
        reduce test execution time.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        I've also separated tests into fast and slow categories, running fast tests (unit tests) on every commit and 
        slower tests (integration, E2E) only on pull requests or main branch merges. This provides quick feedback for 
        developers while still maintaining comprehensive test coverage.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Infrastructure as Code: Consistency and Speed</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Using Infrastructure as Code (IaC) tools like Terraform or CloudFormation has been transformative. Not only 
        does it ensure consistency across environments, but it also allows for faster environment provisioning and 
        easier rollbacks.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        I've set up pipelines that can spin up complete test environments in minutes, run comprehensive integration 
        tests, and tear down the environment automatically. This eliminates the "works on my machine" problem and provides 
        confidence that deployments will work in production.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Deployment Strategies: Zero-Downtime Deployments</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Modern deployment strategies like blue-green deployments, canary releases, and rolling updates have become 
        essential for maintaining high availability. I've implemented these strategies using Kubernetes, allowing 
        deployments with zero downtime and instant rollback capabilities.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The key is automation. Manual deployment steps are error-prone and slow. By automating the entire process, 
        from code commit to production deployment, we've reduced deployment time from hours to minutes and eliminated 
        human error from the equation.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Results and Impact</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The optimizations I've implemented have resulted in deployment times dropping from 45 minutes to under 15 minutes, 
        with some pipelines now completing in under 5 minutes for simple changes. This has dramatically improved developer 
        productivity and reduced the time between identifying a bug and deploying a fix.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        More importantly, these optimizations haven't come at the cost of quality. In fact, by running tests more 
        frequently and catching issues earlier, we've actually improved code quality and reduced production incidents.
      </p>
    `,
  },
  'journey-into-software-development': {
    title: 'My Journey into Software Development',
    date: 'January 15, 2026',
    readTime: '6 min read',
    category: 'Career',
    content: `
      <p class="mb-4 text-lg text-dark-text-muted">
        Looking back at my journey into software development, I realize it wasn't a straight path. It was filled with 
        challenges, learning opportunities, and moments of both frustration and triumph. If you're starting your own 
        journey or considering a career change, I hope sharing my experience can provide some insight and encouragement.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Beginning: Curiosity and Problem-Solving</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        My interest in software development started with a simple curiosity about how things work. I was always the 
        person who wanted to understand not just what a program did, but how it did it. This curiosity led me to 
        start learning programming basics, initially through online tutorials and free resources.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The first "aha" moment came when I wrote a simple script that automated a repetitive task I was doing manually. 
        The feeling of solving a problem with code was addictive, and I knew I wanted to do more of this. However, 
        I quickly realized that there was a vast difference between writing a simple script and building real software 
        applications.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Learning Curve: Embracing the Struggle</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The learning curve in software development is steep, and I won't pretend it wasn't challenging. There were 
        countless nights spent debugging code, moments of frustration when nothing seemed to work, and times when I 
        questioned whether I was cut out for this field.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        What kept me going was the community. The software development community is incredibly supportive, and I found 
        mentors, online forums, and fellow learners who were always willing to help. I learned that asking questions 
        and admitting you don't know something isn't a weakness—it's a strength. Every senior developer I've met has 
        stories about times they were stuck and had to ask for help.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Building Real Projects: The Turning Point</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        The real growth happened when I moved from tutorials to building actual projects. Tutorials teach you syntax 
        and concepts, but building projects teaches you problem-solving, debugging, and how to work with real-world 
        constraints. My first significant project was far from perfect, but it taught me more than any tutorial ever could.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        I started contributing to open-source projects, which was intimidating at first but incredibly rewarding. 
        Reading other people's code, understanding different coding styles, and contributing to projects used by 
        thousands of people gave me confidence and real-world experience.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Specialization: Finding My Path</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        As I gained experience, I discovered that software development is a broad field with many specializations. 
        I explored different areas—frontend development, backend systems, DevOps, data engineering—and found that 
        I enjoyed the challenge of building scalable systems and optimizing infrastructure.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        This exploration wasn't wasted time. Understanding different aspects of software development has made me a 
        better developer overall. I can communicate more effectively with team members in different roles and understand 
        how my work fits into the bigger picture.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Continuous Learning: The Only Constant</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        One thing I've learned is that software development is a field of continuous learning. Technologies change, 
        best practices evolve, and new tools emerge regularly. What worked yesterday might not be the best approach 
        today. This constant evolution is both challenging and exciting.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        I've made it a habit to dedicate time each week to learning something new, whether it's a new programming 
        language, a framework, or a concept like system design. This continuous learning has been essential for my 
        growth and has kept my work interesting and engaging.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Lessons for Aspiring Developers</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        If I could give advice to someone starting their journey, it would be this: start building, don't wait until 
        you feel "ready." You'll never feel completely ready, and the best learning happens when you're solving real 
        problems. Build projects, contribute to open source, write about what you're learning, and don't be afraid 
        to make mistakes.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        Also, remember that everyone's journey is different. Don't compare your progress to others. Focus on your own 
        growth, celebrate small wins, and keep pushing forward. The path to becoming a skilled developer is a marathon, 
        not a sprint.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Looking Forward</h2>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        As I continue my journey, I'm excited about the future of software development. New technologies like AI, 
        cloud computing, and distributed systems are creating new opportunities and challenges. The field continues 
        to evolve, and I'm grateful to be part of a community that's always pushing boundaries and solving interesting 
        problems.
      </p>
      <p class="mb-4 text-dark-text-muted leading-relaxed">
        My journey into software development has been challenging, rewarding, and ongoing. I'm still learning every 
        day, and I hope to continue growing and contributing to this amazing field for years to come.
      </p>
    `,
  },
}

export default function BlogPostViewer({ slug, onClose }) {
  const post = blogPosts[slug]

  if (!post) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-bg">
      <div className="min-h-screen">
        <div className="container-max max-w-4xl mx-auto section-padding pt-32">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </button>
            <button
              onClick={onClose}
              className="text-dark-text-muted hover:text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <article>
            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex items-center gap-6 text-dark-text-muted mb-8">
              <div className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
