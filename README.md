# Chase Conover - Professional Portfolio Website

A modern, professional portfolio website designed to showcase your expertise as a senior software developer. Built to catch employers' eyes and help you land more job interviews.

## Features

- 🎨 **Modern Dark Theme** - Professional, eye-catching design
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast Performance** - Built with React + Vite
- 🎯 **Smooth Navigation** - Intuitive scrolling with active section highlighting
- 💼 **Work Experience** - Detailed professional history
- 🚀 **Projects Showcase** - Featured and additional projects with live demos
- 💻 **GitHub Integration** - Stats, pinned repos, and language distribution
- 🧮 **LeetCode Profile** - Problems solved, ratings, and achievements
- 📄 **Resume Downloads** - Multiple resume versions in PDF format
- 🛠️ **Skills Section** - Comprehensive technical skills with proficiency levels
- 📝 **Blog Section** - Showcase your thoughts and technical articles
- 📧 **Contact Section** - Easy ways for employers to reach you

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd /Users/chaseconover/Documents/Code/chaseconover-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Customization Guide

### 1. About Section (`src/sections/About.jsx`)
- Update the introduction text to reflect your experience
- Replace the "CC" placeholder with your photo
- Update the stats (years of experience, projects, LeetCode problems)
- Modify the highlight tags to match your expertise

### 2. Skills Section (`src/sections/Skills.jsx`)
- Update skill categories and individual skills
- Adjust proficiency levels (0-100%)
- Add or remove technologies based on your expertise
- Update the additional technologies list

### 3. Experience Section (`src/sections/Experience.jsx`)
- Add your work experience entries
- Update job titles, companies, locations, and dates
- Write compelling descriptions of your achievements
- List relevant technologies for each role

### 4. Projects Section (`src/sections/Projects.jsx`)
- Add your featured projects (mark with `featured: true`)
- Add additional projects
- Update GitHub URLs and live demo links
- Replace placeholder images with actual project screenshots
- Update technology stacks for each project

### 5. GitHub Section (`src/sections/GitHub.jsx`)
- Update `username` with your GitHub username
- Update stats (repos, stars, forks, contributions)
- Modify language distribution percentages
- Update pinned repositories with your actual repos
- Replace placeholder repo data with real GitHub data
- **Tip**: Consider using GitHub API to fetch real-time data

### 6. LeetCode Section (`src/sections/LeetCode.jsx`)
- Update all stats with your actual LeetCode data:
  - Total problems solved
  - Easy/Medium/Hard breakdown
  - Acceptance rate
  - Global ranking
  - Contest rating
- Update badges and achievements
- Add your recent problems solved
- Update top problem topics
- Replace the LeetCode profile URL

### 7. Resumes Section (`src/sections/Resumes.jsx`)
- Add your resume PDF files to `public/resumes/` directory
- Update resume file paths
- Add preview images if desired
- Update resume descriptions and versions

### 8. Blog Section (`src/sections/Blog.jsx`)
- Add your actual blog posts
- Update dates, categories, and descriptions
- Link to your blog posts (if hosted elsewhere)
- Update read times

### 9. Contact Section (`src/sections/Contact.jsx`)
- Update all social media links:
  - GitHub URL
  - LeetCode URL
  - LinkedIn URL
  - Email address

### 10. Footer (`src/components/Footer.jsx`)
- Update social media links to match Contact section

### 11. Header (`src/components/Header.jsx`)
- Navigation items are automatically generated from sections
- Update your name if needed

### 12. SEO & Meta Tags (`index.html`)
- Update meta description
- Add Open Graph image (`/og-image.jpg`)
- Update keywords
- Customize title tag

### Quick Find & Replace Checklist

Search for these placeholders and replace them:
- `YOUR_USERNAME` - Your GitHub username
- `your.email@example.com` - Your email
- `YOUR_USERNAME` (in LeetCode URLs) - Your LeetCode username
- `/resumes/...` - Paths to your resume PDFs
- Project URLs - Your actual project demo links

## Deployment

### AWS Deployment Options

1. **AWS Amplify** (Recommended for React apps):
   - Connect your GitHub repository
   - Amplify will automatically build and deploy

2. **AWS S3 + CloudFront**:
   - Build the project: `npm run build`
   - Upload `dist` folder to S3 bucket
   - Configure CloudFront for CDN

3. **AWS EC2**:
   - Set up a web server (nginx/Apache)
   - Serve the built files from `dist` directory

### Home Server Deployment

- Build the project: `npm run build`
- Serve the `dist` directory using nginx, Apache, or any static file server
- Configure your domain to point to your server

## License

This project is open source and available under the MIT License.
