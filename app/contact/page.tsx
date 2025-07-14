import Link from "next/link"
import { Mail, Instagram, MessageCircle, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say
            hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-300">Let's discuss your project</p>
              </div>
            </div>
            <Link
              href="mailto:john.doe@example.com"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              john.doe@example.com
            </Link>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-300">Call me directly</p>
              </div>
            </div>
            <Link href="tel:+1234567890" className="text-green-400 hover:text-green-300 transition-colors font-medium">
              +1 (234) 567-890
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <Link href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors">Instagram</p>
            </Link>

            {/* WhatsApp */}
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors">WhatsApp</p>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Location */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>Based in San Francisco, CA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
