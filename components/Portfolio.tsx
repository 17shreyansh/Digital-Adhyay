import { motion, useInView } from 'framer-motion';
import { ExternalLink, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Growth',
    category: 'SEO & Paid Ads',
    metric: '+340% Revenue',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Strategic optimization and targeted campaigns',
  },
  {
    title: 'Tech Startup Launch',
    category: 'Brand & Web Development',
    metric: '50K+ Users',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Complete brand identity and web presence',
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media Marketing',
    metric: '2M+ Impressions',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    description: 'Viral content strategy and engagement',
  },
  {
    title: 'SaaS Platform Scale',
    category: 'Growth Strategy',
    metric: '+180% Conversions',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    description: 'Full-funnel optimization and growth',
  },
  {
    title: 'Fashion Brand Relaunch',
    category: 'Branding & Design',
    metric: '+250% Engagement',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    description: 'Complete brand transformation',
  },
  {
    title: 'Local Business Boost',
    category: 'Local SEO',
    metric: '400% More Leads',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    description: 'Hyper-local marketing strategy',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
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
    <section id="portfolio" className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
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
              Case Studies
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Success{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Stories</span>
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
            Real results from brands that trusted us to transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-[#e50914] rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
                  >
                    <TrendingUp className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {project.metric}
                  </div>
                  <div className="text-white/80 text-center mb-4">
                    {project.description}
                  </div>
                  <motion.div
                    className="flex items-center gap-2 text-white"
                    whileHover={{ gap: 12 }}
                  >
                    <span className="text-sm font-medium">View Case Study</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

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
              <div className="p-8 relative">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs text-[#e50914] font-semibold tracking-widest uppercase bg-[#e50914]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl text-black mb-2 tracking-tight group-hover:text-[#e50914] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-1 bg-[#e50914] mt-4 origin-left"
                />
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
