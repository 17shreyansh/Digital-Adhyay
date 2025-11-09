import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO, TechnoVision India',
    content: 'Digital Adhyay ne hamare business ko completely transform kar diya. Unki strategic approach aur data-driven insights se humein 6 months mein 300% qualified leads increase mile.',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Patel',
    role: 'Founder, StartupHub Mumbai',
    content: 'Working with Digital Adhyay has been exceptional. Their team perfectly understands the Indian market dynamics and delivers campaigns that consistently exceed expectations.',
    rating: 5,
    avatar: 'PP',
  },
  {
    name: 'Vikram Singh',
    role: 'Marketing Director, Desi Brands Co.',
    content: 'The level of professionalism aur expertise outstanding hai. They don\'t just execute—they think strategically and become true partners in your digital growth journey.',
    rating: 5,
    avatar: 'VS',
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 bg-white relative">
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
              Client Reviews
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Client{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Testimonials</span>
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
            Trusted by forward-thinking companies around the globe.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Card className="p-10 bg-white border-2 border-gray-200/60 hover:border-[#e50914] shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                >
                  <Quote className="w-24 h-24 text-[#e50914]" />
                </motion.div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 + 0.5 }}
                      >
                        <Star className="w-5 h-5 fill-[#e50914] text-[#e50914]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg relative">
                    <span className="text-[#e50914] text-3xl absolute -left-2 -top-2">"</span>
                    <span className="ml-4">{testimonial.content}</span>
                    <span className="text-[#e50914] text-3xl">"</span>
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center text-white font-semibold shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10">{testimonial.avatar}</span>
                    </motion.div>
                    <div>
                      <div className="text-black font-medium text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#e50914] origin-left"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
