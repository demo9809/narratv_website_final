'use client';

import React from 'react';
import { Section, Button } from '../../components/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Target, Heart, CheckCircle2, ArrowRight, MapPin, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Narratv Space",
            "description": "Narratv Space is a premium branding and advertising agency based in Calicut, Kerala. bridging the gap between local businesses and global markets.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Narratv Space",
              "alternateName": "Narrative Space",
              "location": {
                "@type": "Place",
                "name": "KINFRA Advanced Technology Park",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Calicut",
                  "addressRegion": "Kerala",
                  "addressCountry": "India"
                }
              }
            }
          })
        }}
      />

      {/* Intro - Dark Premium Hero */}
      <section className="relative bg-brand-black text-white pt-48 pb-32 overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-accent font-mono text-xs tracking-widest uppercase backdrop-blur-md flex items-center gap-2">
                <MapPin className="w-3 h-3" /> Est. 2018 • Calicut, Kerala
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Strategic Design for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Ambitious Brands.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
              Narratv Space (Narrative Space) is a strategy-first advertising agency. We bridge the gap between Kerala's heritage and global digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto / Philosophy */}
      <Section bgColor="white" className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-brand-black transform translate-x-4 translate-y-4 rounded-sm"></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
              alt="Narratv Space Advertising Agency Office Kerala"
              className="relative w-full h-full object-cover rounded-sm shadow-2xl z-10"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 z-20 bg-brand-accent text-white p-6 md:p-8 rounded-sm shadow-xl max-w-[200px] hidden md:block">
              <p className="text-3xl font-bold mb-1">8+</p>
              <p className="text-xs uppercase tracking-widest font-medium opacity-90">Years of Impact</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent"></span> Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-brand-black leading-tight">Clarity is the ultimate competitive advantage.</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                In a noisy digital world, features and benefits don't sell—trust does. We help businesses in Kerala find their unique voice and tell stories that resonate on a global level.
              </p>
              <p>
                We strip away the jargon and the bloat. No massive account teams, no endless meetings. Just senior creatives and strategists working directly with you to solve business problems through branding, video, and strategy.
              </p>
              <p className="font-medium text-brand-black border-l-4 border-brand-accent pl-4">
                We are not just a service provider; we are your external growth team. When you win, we win.
              </p>
            </div>


          </div>
        </div>
      </Section>


      {/* Core Values */}
      <Section bgColor="gray" className="relative">
        {/* Decorative bg element */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-200/50 to-transparent pointer-events-none"></div>

        <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Our Values</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">What drives us forward.</h3>
          <p className="text-gray-600 text-lg">We adhere to a set of core principles that guide our work, our relationships, and our growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: Target, title: "Strategy First", desc: "We never design without a purpose. Every pixel, every frame, and every word is backed by user research and business goals." },
            { icon: Award, title: "Excellence Always", desc: "Good enough is not enough. We push for international standards in every deliverable, whether it's a favicon or a film." },
            { icon: Heart, title: "People Centric", desc: "We build brands for humans, not algorithms. We treat our clients as partners and our audience with respect." }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl hover:shadow-brand-black/5 border-b-4 border-transparent hover:border-brand-accent transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-gray text-brand-black flex items-center justify-center rounded-full mb-8 group-hover:bg-brand-black group-hover:text-white transition-colors">
                <value.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Strength - Replaces Leadership Section */}
      <Section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent"></span> Our Strength
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">30+ Creative Minds.<br />Unified by Strategy.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We don't believe in the "jack of all trades" approach. Our agency is structured into specialized departments, each led by experts with years of experience. From high-end Video Production to Data-Driven Performance Marketing, we have the in-house talent to execute complex mandates without outsourcing.
            </p>

            {/* Specialized Departments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Brand Strategists",
                "Copywriting Wing",
                "Video Production",
                "AI Commercial Dept.",
                "Digital Marketing",
                "Performance Media"
              ].map((dept, idx) => (
                <div key={idx} className="group flex items-center gap-4 p-5 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-accent/20 transition-all duration-300 rounded-sm cursor-default">
                  <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-black group-hover:text-white" />
                  </div>
                  <span className="font-bold text-brand-black text-sm group-hover:text-brand-accent transition-colors">{dept}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Interested in joining our team?</p>
              <Link href="/careers" className="text-brand-black font-bold flex items-center gap-2 hover:gap-4 transition-all">
                See Career Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[600px] w-full bg-gray-100 rounded-sm overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Narratv Space Team in Calicut"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="border-l-4 border-brand-accent pl-6">
                <p className="text-white font-bold text-5xl mb-2">30+</p>
                <p className="text-gray-300 text-sm font-bold uppercase tracking-wider">Full-time Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="black" className="text-center relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter">Ready to tell your story?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join the ranks of ambitious brands transforming their narrative with Narratv Space.</p>
          <Link href="/contact">
            <Button variant="primary" mode="dark" className="px-12 py-5 text-lg" icon>
              Start Your Project
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default About;