'use client'

import { motion } from 'framer-motion'
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Clock } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card, CardContent } from '../../../components/ui/card'

export default function SEOPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors to your website through improved search rankings.'
    },
    {
      icon: Target,
      title: 'Better Targeting',
      description: 'Reach customers actively searching for your products or services.'
    },
    {
      icon: BarChart3,
      title: 'Higher ROI',
      description: 'SEO provides long-term value with sustainable traffic growth.'
    }
  ]

  const process = [
    {
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance and competitor research.',
      duration: '1-2 weeks'
    },
    {
      title: 'Keyword Research',
      description: 'Identify high-value keywords that your target audience is searching for.',
      duration: '1 week'
    },
    {
      title: 'On-Page Optimization',
      description: 'Optimize your website content, meta tags, and technical elements.',
      duration: '2-4 weeks'
    },
    {
      title: 'Content Strategy',
      description: 'Create and optimize content that ranks well and engages your audience.',
      duration: 'Ongoing'
    }
  ]

  const packages = [
    {
      name: 'Starter SEO',
      price: '₹25,000',
      period: '/month',
      features: [
        'Keyword research (up to 20 keywords)',
        'On-page optimization (5 pages)',
        'Technical SEO audit',
        'Monthly reporting',
        'Google Analytics setup'
      ],
      popular: false
    },
    {
      name: 'Professional SEO',
      price: '₹45,000',
      period: '/month',
      features: [
        'Keyword research (up to 50 keywords)',
        'On-page optimization (15 pages)',
        'Technical SEO optimization',
        'Content creation (4 articles/month)',
        'Link building (10 links/month)',
        'Bi-weekly reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '₹85,000',
      period: '/month',
      features: [
        'Unlimited keyword research',
        'Full website optimization',
        'Advanced technical SEO',
        'Content creation (8 articles/month)',
        'Aggressive link building',
        'Weekly reporting'
      ],
      popular: false
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-600 font-semibold">SEO Services</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Search Engine <span className="text-blue-600">Optimization</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dominate search results and drive organic traffic with our comprehensive SEO strategies. 
                We help your business rank higher, attract more customers, and grow sustainably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Get SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">SEO Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Organic Traffic</span>
                    <span className="text-2xl font-bold">+285%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Keyword Rankings</span>
                    <span className="text-2xl font-bold">+150%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Conversion Rate</span>
                    <span className="text-2xl font-bold">+65%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why SEO Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO is one of the most cost-effective ways to drive qualified traffic and grow your business online.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to improving your search engine rankings and driving organic growth.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="flex items-center gap-2 text-blue-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{step.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SEO Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business needs and budget.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  pkg.popular ? 'ring-2 ring-blue-600' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-gray-600">{pkg.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free SEO audit and discover how we can improve your search rankings.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 h-auto text-lg font-semibold"
            >
              Get Free SEO Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}