import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, Download, Code, Palette, Music, Gamepad2, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import purpleButterflies from './assets/purple_butterflies.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const skills = [
    { name: 'HTML', level: 'Intermediate', icon: Code },
    { name: 'CSS', level: 'Intermediate', icon: Palette },
    { name: 'JavaScript', level: 'Basic', icon: Code },
    { name: 'Python', level: 'Basic', icon: Code },
    { name: 'Bootstrap', level: 'Intermediate', icon: Code },
    { name: 'C#', level: 'Basic', icon: Code }
  ]

  const interests = [
    { name: 'Gaming', icon: Gamepad2, description: 'Exploring new game developments and gaming platforms' },
    { name: 'AI & Prompt Engineering', icon: Brain, description: 'Understanding AI potential and prompt engineering' },
    { name: 'Music Production', icon: Music, description: 'Creating music through digital tools' },
    { name: 'Virtual Reality', icon: Zap, description: 'Exploring immersive VR experiences' }
  ]

  const projects = [
    {
      title: 'Global Tech Accelerator',
      description: 'Frontend Developer Internship - Building modern web applications',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      status: 'Current'
    },
    {
      title: 'Web Development Certification',
      description: 'Comprehensive web development program covering modern frameworks',
      tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
      status: 'Completed'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-lavender-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Isabella-Alexis McCollum
            </motion.h1>
            <div className="flex gap-4">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className="capitalize"
                >
                  {section}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-20">
          <img src={purpleButterflies} alt="Purple Butterflies" className="w-32 h-32" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              Frontend Developer & Tech Enthusiast
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Hey there! I'm a 20-year-old tech enthusiast currently studying Computer Informatics at Rowan University. 
              I'm passionate about building cool stuff that makes a real difference!
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-lg text-gray-600">Let's connect and build something amazing together!</p>
<<<<<<< HEAD
              <h3 className="text-3xl font-bold text-center mb-12 text-purple-800">My Resume</h3>
=======
              <p className="text-lg text-purple-600 font-semibold">isabellaalexis.g.mccollum@gmail.com</p>
>>>>>>> 5dd68477 (Initial commit of correct website)
              <div className="flex gap-4 flex-wrap justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => window.open('https://filebin.net/1753399550744791168/Glamous2025Resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Glamorous Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  onClick={() => window.open('https://filebin.net/1753400138802244272/ATS_resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download ATS Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-800">About Me</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-700">My Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    My journey into tech kicked off with Python back in 2020, and I even dabbled in JavaScript during high school. 
                    But seriously, 2024 has been a game-changer! I've been soaking up so much knowledge about web development, 
                    from mastering HTML and CSS to getting cozy with APIs and the ADIA framework.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-700">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-600">Rowan University</h4>
                      <p className="text-gray-600">Computer Informatics • 2023-2027 or 2028 (On Going)</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-600">Visiting Student</h4>
                      <p className="text-gray-600">Rowan College Of South Jersey, Gloucester, NJ • Summer 2025 - Till beginning of Spring 2026</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-600">Cherokee High School</h4>
                      <p className="text-gray-600">High School Diploma • 2019-2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-800">Skills & Interests</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-700">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <skill.icon className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-purple-800">{skill.name}</p>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-700">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.name}
                        className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <interest.icon className="h-6 w-6 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-purple-800">{interest.name}</h4>
                          <p className="text-sm text-gray-600">{interest.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-800">Projects & Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-purple-700">{project.title}</CardTitle>
                        <Badge variant={project.status === 'Current' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-purple-600 border-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-800">Let's Connect!</h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-8">
                I want to make a big impact in the tech world by being skilled, always learning, and always being kind. 
                I'm eager to join a forward-thinking team that shares my passion for technology and innovation!
              </p>
              <div className="flex justify-center gap-6">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Mail className="mr-2 h-4 w-4" />
                  isabellaalexis.g.mccollum@gmail.com
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('https://www.linkedin.com/in/isabella-alexis-grant-mccollum', '_blank')}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('https://github.com/WolfTechXD', '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-purple-100 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-600">
            © 2025 Isabella-Alexis Grant McCollum. Built with React and lots of ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

