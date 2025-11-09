import { motion, useInView } from 'framer-motion';
import { ExternalLink, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const projects = [
  {
    title: 'Kaunsa Hostel',
    category: 'Live Project',
    metric: 'Live Project',
    image: '/KaunsaHostel.png',
    description: 'Complete hostel booking platform with modern UI',
    url: 'https://kaunsahostel.com/',
  },
  {
    title: 'Srikanada Education',
    category: 'Live Project',
    metric: 'Live Project',
    image: '/edu.png',
    description: 'Modern educational website with course management',
    url: 'https://srikanadaeducation.com/',
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

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 bg-white relative">
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
              Our Work
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Featured{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Projects</span>
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
            Explore our live projects and see how we bring digital visions to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200/60 hover:border-[#e50914] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Top accent line with animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e50914] to-black origin-left"
              />

              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />

              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                


                {/* Corner Badge */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <ExternalLink className="w-6 h-6 text-black" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs text-[#e50914] font-semibold tracking-widest uppercase bg-[#e50914]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl text-black mb-2 tracking-tight group-hover:text-[#e50914] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="mt-6 flex items-center gap-2 text-[#e50914] font-medium"
                >
                  <span>Visit website</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-1 bg-[#e50914] mt-4 origin-left"
                />
              </div>

              {/* Corner Number */}
              <div className="absolute bottom-6 right-6 text-7xl font-bold text-gray-100 group-hover:text-[#e50914]/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
