import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative solutions and beautiful user
            experiences. Here's my story.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-8 mb-16">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey into web development started 5 years ago when I built my first website. What began as
                curiosity quickly turned into a passion for creating digital experiences that make a difference.
              </p>
              <p>
                I specialize in full-stack development, with expertise in modern JavaScript frameworks, backend
                technologies, and cloud platforms. I love solving complex problems and turning ideas into reality
                through clean, efficient code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Full-Stack Development</h3>
              <p className="text-gray-300">
                Building complete web applications from frontend to backend with modern technologies.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-gray-300">
                Creating intuitive and beautiful user interfaces that provide excellent user experiences.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-gray-300">
                Optimizing applications for speed, scalability, and exceptional performance.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-gray-100 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
