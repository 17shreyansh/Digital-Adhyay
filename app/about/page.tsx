'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'

function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Every campaign is built on data-driven insights and strategic thinking.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our success. We work as an extension of your team.'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We deliver exceptional results that exceed expectations.'
    }
  ]

  const team = [
    {
      name: 'Aman Jha',
      role: 'Founder & CEO',
      bio: 'Aman Jha, founder of Digital Adhyay, combines his expertise in marketing and technology to help businesses strengthen their online presence and drive digital growth.'
    },
    {
      name: 'Shreyans Kumar',
      role: 'Web Developer',
      bio: 'Expert web developer specializing in modern technologies and creating seamless digital experiences that drive business results.'
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
              About <span className="text-[#e50914]">Digital Adhyay</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of digital strategists, creatives, and technologists 
              passionate about helping brands thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#e50914] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Digital Adhyay began with a simple mission: to help 
                businesses navigate the complex digital landscape with intelligence and strategy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What started as a small team of passionate digital marketers has grown 
                into a full-service agency that combines creativity with data-driven insights 
                to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4">
                {[
                  'Data-driven approach to every campaign',
                  'Transparent reporting and communication',
                  'Continuous learning and adaptation',
                  'Long-term partnership mindset'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#e50914]" />
                    <span className="text-gray-700">{item}</span>
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
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    To empower businesses with intelligent digital strategies that 
                    drive sustainable growth and meaningful connections with their audience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Digital Adhyay's success.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-[#e50914] rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[#e50914] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#e50914] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage