'use client';

import { motion } from 'framer-motion';
import { Rocket, Twitter, Linkedin, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-white rounded-full" />
      </div>

      {/* Red Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e50914] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a 
                href="#" 
                className="flex items-center gap-3 mb-6 group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#e50914] to-[#c20812] rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <Rocket className="w-7 h-7 text-white relative z-10" />
                </motion.div>
                <span className="text-2xl tracking-tight">
                  Digital <span className="font-semibold">Adhyay</span>
                </span>
              </motion.a>
              
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
                Empowering brands through digital intelligence. We transform businesses with innovative strategies and data-driven solutions.
              </p>
              
              {/* Newsletter */}
              <div className="max-w-md">
                <div className="text-lg mb-4">Subscribe to our newsletter</div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#e50914] transition-colors duration-300"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#e50914] hover:bg-[#c20812] px-6 rounded-xl transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl mb-6 font-medium">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-[#e50914] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <motion.span
                        className="w-0 h-px bg-[#e50914] group-hover:w-4 transition-all duration-300"
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl mb-6 font-medium">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-white transition-colors duration-300">
                  digitaladhyay@gmail.com
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  +91 85959 48615
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Murshadpur CNG Pump, Greater Noida
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <div className="text-lg mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-[#e50914] rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#e50914]"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider with Gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#e50914] to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span>© {currentYear} Digital Adhyay.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2 w-2 h-2 bg-[#e50914] rounded-full"
              />
            </motion.div>
            
            <div className="flex gap-8">
              <motion.a 
                href="#" 
                className="hover:text-[#e50914] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-[#e50914] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-[#e50914] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
