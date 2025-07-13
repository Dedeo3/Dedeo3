import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 font-medium">
                About
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with a love for clean code, innovative solutions, and continuous learning.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I started my journey in web development 5 years ago, driven by curiosity and a passion for creating
                  digital experiences that make a difference. What began as a hobby quickly evolved into a career I'm
                  truly passionate about.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with diverse teams and clients, from
                  early-stage startups to established enterprises. Each project has taught me something new and
                  reinforced my belief in the power of technology to solve real problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community through blog posts and mentoring.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About me"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What I Do Best</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
                <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
                <p className="text-gray-600">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                <p className="text-gray-600">Figma, Adobe Creative Suite, Prototyping</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Leadership</h3>
                <p className="text-gray-600">Project Management, Mentoring, Agile</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies I Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Tailwind CSS",
                "Figma",
                "Git",
                "Docker",
                "AWS",
              ].map((tech) => (
                <div key={tech} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
