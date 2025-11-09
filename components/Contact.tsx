import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'digitaladhyay@gmail.com',
    href: 'mailto:digitaladhyay@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 85959 48615',
    href: 'tel:+918595948615',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Murshadpur CNG Pump, Greater Noida',
    href: '#',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
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
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black tracking-tight">
            Let's Talk{' '}
            <span className="relative inline-block">
              <span className="text-[#e50914]">Growth</span>
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
            Ready to transform your digital presence? Get in touch with our team.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <Card className="p-10 bg-white border-2 border-gray-200/60 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e50914] via-black to-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full bg-white" />
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block mb-3 text-black">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/20 transition-all duration-300 h-14 px-4"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block mb-3 text-black">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/20 transition-all duration-300 h-14 px-4"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="company" className="block mb-3 text-black">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/20 transition-all duration-300 h-14 px-4"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block mb-3 text-black">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/20 transition-all duration-300 resize-none p-4"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-[#e50914] hover:bg-black text-white py-7 h-auto text-lg transition-all duration-300 shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black to-gray-800"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl mb-4 text-black tracking-tight">
                Connect With Us
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                We're here to help your brand reach new heights. Let's discuss how we can accelerate your growth.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-5 p-6 bg-white border-2 border-gray-200/60 hover:border-[#e50914] rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 group-hover:from-[#e50914] group-hover:to-[#c20812] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-black text-lg group-hover:text-[#e50914] transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-gradient-to-br from-black via-gray-800 to-black border-0 shadow-2xl relative overflow-hidden group">
                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[#e50914]" />
                    <div className="text-white text-xl">Business Hours</div>
                  </div>
                  <div className="text-gray-300 leading-relaxed">
                    <div className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                    <div>Saturday - Sunday: Closed</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
