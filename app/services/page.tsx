'use client'

import { motion } from 'framer-motion'
import { Search, Megaphone, Palette, Code, BarChart3, Smartphone, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ppc',
      icon: Megaphone,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize your ROI with targeted PPC campaigns across Google, Facebook, and other platforms.',
      features: ['Campaign Strategy', 'Ad Creation', 'Bid Management', 'Performance Tracking'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'social-media',
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience through strategic social media campaigns.',
      features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Social Advertising'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'web-design',
      icon: Palette,
      title: 'Web Design & Development',
      description: 'Create stunning, user-friendly websites that convert visitors into customers.',
      features: ['Responsive Design', 'UX/UI Optimization', 'E-commerce Solutions', 'CMS Integration'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Custom Development',
      description: 'Build powerful web applications and custom solutions tailored to your business needs.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Performance Optimization'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed reporting.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Performance Reports', 'ROI Analysis'],
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and competitive landscape.'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Our team creates a comprehensive strategy and designs tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed throughout the process.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuous monitoring and optimization to ensure maximum performance and ROI.'
    }
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
              Our <span className="text-[#e50914]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth 
              and maximize your online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#e50914]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full bg-[#e50914] hover:bg-[#c20812] text-white group-hover:bg-gray-900 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#e50914] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Digital Adhyay?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine strategic thinking with creative execution to deliver 
                results that matter to your business.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Proven Results',
                    description: '500+ successful projects with measurable ROI improvements'
                  },
                  {
                    title: 'Expert Team',
                    description: 'Certified professionals with years of industry experience'
                  },
                  {
                    title: 'Custom Solutions',
                    description: 'Tailored strategies that fit your unique business needs'
                  },
                  {
                    title: 'Transparent Reporting',
                    description: 'Regular updates and detailed analytics on campaign performance'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-6 h-6 bg-[#e50914] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#e50914] to-[#c20812] rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">98%</div>
                  <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Our clients consistently rate our services as exceptional, 
                    with most becoming long-term partners.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e50914] to-[#c20812] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a custom strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#e50914] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#e50914] px-8 py-6 h-auto text-lg font-semibold"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}