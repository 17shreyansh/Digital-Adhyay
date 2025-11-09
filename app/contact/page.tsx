'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'

function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'digitaladhyay@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 85959 48615',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Ansal Golf Link 1 CE 126',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM'
    }
  ]

  const services = [
    'SEO Optimization',
    'PPC Advertising',
    'Social Media Marketing',
    'Web Design & Development',
    'Content Marketing',
    'Analytics & Reporting'
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-[#e50914]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to take your digital presence to the next level? Let's discuss your project 
              and create a strategy that drives real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-[#e50914] font-semibold mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#e50914]" />
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input 
                          placeholder="John" 
                          className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input 
                          placeholder="Doe" 
                          className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+91 85959 48615" 
                        className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input 
                        placeholder="Your Company" 
                        className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914]">
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914]">
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                        <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                        <option value="above-5l">Above ₹5,00,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        className="border-gray-300 focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#e50914] hover:bg-[#c20812] text-white py-6 h-auto text-lg font-semibold"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Start Something Great Together
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're here to help you achieve your digital goals. Whether you need a complete 
                  digital strategy or specific services, our team is ready to create solutions 
                  that drive real results.
                </p>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#e50914] to-[#c20812] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Free consultation and project analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Custom strategies tailored to your business</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Transparent pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Regular reporting and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, feel free to call us directly.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      className="border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How long does it take to see results?',
                answer: 'Results vary by service. SEO typically shows improvements in 3-6 months, while PPC campaigns can generate leads within days of launch.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. We have packages designed specifically for small businesses.'
              },
              {
                question: 'What makes Digital Adhyay different?',
                answer: 'Our data-driven approach, transparent reporting, and focus on ROI set us apart. We treat your business goals as our own.'
              },
              {
                question: 'Do you provide monthly reports?',
                answer: 'Yes, we provide detailed monthly reports showing key metrics, progress, and recommendations for all our services.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage