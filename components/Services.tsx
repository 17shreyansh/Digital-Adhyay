import { motion, useInView } from 'framer-motion';
import { Search, Share2, MousePointerClick, Code, Palette } from 'lucide-react';
import { Card } from './ui/card';
import { useRef } from 'react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Strategic search engine optimization to improve your visibility, drive organic traffic, and dominate search results.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build authentic connections and grow your audience with data-driven social media strategies that convert.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MousePointerClick,
    title: 'Paid Advertising',
    description: 'Maximize ROI with precision-targeted campaigns across Google Ads, Meta, and other high-performance platforms.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that deliver exceptional user experiences and drive conversions.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Palette,
    title: 'Brand Strategy',
    description: 'Craft compelling brand identities that resonate with your audience and stand out in competitive markets.',
    color: 'from-pink-500 to-pink-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-white relative">
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
              What We Do
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Our{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Services</span>
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
            Comprehensive digital solutions tailored to accelerate your brand's growth and market presence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              <Card className="p-10 bg-white border-2 border-gray-200/60 hover:border-[#e50914] shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Top accent line with animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e50914] to-black origin-left"
                />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 relative overflow-hidden"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-500 relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl mb-4 text-black tracking-tight group-hover:text-[#e50914] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="mt-6 flex items-center gap-2 text-[#e50914] font-medium"
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Corner Number */}
                <div className="absolute bottom-6 right-6 text-7xl font-bold text-gray-100 group-hover:text-[#e50914]/10 transition-colors duration-500">
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
