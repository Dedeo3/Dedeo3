import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, MessageCircle, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-900 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" type="text" placeholder="John" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" type="text" placeholder="Doe" className="w-full" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" placeholder="Project Inquiry" className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={6} className="w-full" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Drop me a line anytime</p>
                    <Link
                      href="mailto:alex.johnson@example.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      alex.johnson@example.com
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call me for urgent matters</p>
                    <Link href="tel:+1234567890" className="text-green-600 hover:text-green-700 font-medium">
                      +1 (234) 567-890
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 mb-2">Based in</p>
                    <p className="text-purple-600 font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow Me On Social Media</h3>

                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
                    <Link
                      href="https://instagram.com/alexjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
                    <Link
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-md font-semibold text-gray-900 mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="mailto:alex.johnson@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Message
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response Guaranteed</h3>
              <p className="text-gray-600">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via
                WhatsApp or phone.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
