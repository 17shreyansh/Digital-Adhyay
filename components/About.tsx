import { motion, useInView } from 'framer-motion';
import { Target, TrendingUp, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Aman Jha',
    role: 'Founder & CEO',
    description: 'Aman Jha, founder of Digital Adhyay, combines his expertise in marketing and technology to help businesses strengthen their online presence and drive digital growth.',
    avatar: 'AJ',
  },
  {
    name: 'Shreyans Kumar',
    role: 'Web Developer',
    description: 'Expert web developer specializing in modern technologies and creating seamless digital experiences that drive business results.',
    avatar: 'SK',
  },
];

const features = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We leverage cutting-edge strategies and technologies to keep your brand ahead of the curve.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Driven',
    description: 'Data-backed decisions and measurable results that scale your business sustainably.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Clear communication, honest reporting, and partnerships built on mutual success.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm tracking-wide text-gray-600 uppercase">
              Our Foundation
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Who We{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Are</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#e50914] origin-left"
              />
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Digital Adhyay is a forward-thinking digital marketing agency dedicated to empowering brands through intelligent strategies and innovative solutions.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h3 className="text-4xl sm:text-5xl mb-12 text-center text-black tracking-tight">
            Meet Our{' '}
            <span className="text-[#e50914]">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 bg-white border border-gray-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="absolute top-0 left-0 right-0 h-1 bg-[#e50914] origin-left"
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10">{member.avatar}</span>
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-black mb-2">{member.name}</h4>
                    <p className="text-[#e50914] font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="p-10 bg-white border border-gray-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 h-full group relative overflow-hidden">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-[#e50914] origin-left"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    {/* Icon Background Shimmer */}
                    <motion.div
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <div className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <feature.icon className="w-10 h-10 text-white relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl mb-4 text-black tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Number Indicator */}
                <div className="absolute top-8 right-8 text-8xl font-bold text-gray-100 group-hover:text-[#e50914]/10 transition-colors duration-500">
                  0{index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
