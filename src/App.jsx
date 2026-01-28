import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import GitHub from './sections/GitHub'
import LeetCode from './sections/LeetCode'
import Resumes from './sections/Resumes'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'experience',
        'education',
        'skills',
        'projects',
        'github',
        'leetcode',
        'resumes',
        'blog',
        'contact',
      ]
      
      // Get header height to match scroll offset
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight + 10 : 110
      const scrollPosition = window.scrollY + headerHeight

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Also check on initial load
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header activeSection={activeSection} />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <GitHub />
        <LeetCode />
        <Resumes />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
