import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  John Doe
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Full-stack developer passionate about creating beautiful, functional web applications. I specialize in
                React, Next.js, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-100 font-medium rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-blue-400">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-purple-400">20+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  )
}
