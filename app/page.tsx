'use client'

import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export default function HomePage() {
  return (
    <div className="bg-white antialiased">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}