import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white pt-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }} />
        
        {/* Floating Circles with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 border border-gray-200 rounded-full opacity-40"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
          className="absolute bottom-20 right-10 w-96 h-96 border border-gray-200 rounded-full opacity-30"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full opacity-20"
        />
        
        {/* Accent Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-1/4 w-2 h-2 bg-[#e50914] rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-[#e50914] rounded-full blur-sm"
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">


          {/* Main Headline */}
          <div className="mb-8 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm tracking-wide mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#e50914]" />
                <span className="text-gray-700">Digital Intelligence Redefined</span>
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="tracking-tight text-black"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-[1.1]">
                Empowering Brands
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]">
                Through Digital{' '}
                <span className="relative inline-block">
                  <span className="text-[#e50914]">Intelligence</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#e50914] origin-left"
                  />
                </span>
              </span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We help you grow <span className="text-black font-medium">smarter</span>, not just louder.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#e50914] hover:bg-[#c20812] text-white px-10 py-7 h-auto text-lg transition-all duration-300 shadow-2xl hover:shadow-[#e50914]/50 group relative overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-black text-black px-10 py-7 h-auto text-lg transition-all duration-300 hover:bg-gray-50"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20"
          >
            <div className="flex justify-center items-center gap-3">
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-4 h-4 bg-[#e50914] rounded-full"
                />
                <div className="w-3 h-3 bg-[#e50914] rounded-full relative z-10" />
              </div>
              <div className="text-sm text-gray-500 tracking-widest uppercase font-medium">
                Innovation in Motion
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2 bg-[#e50914] rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
