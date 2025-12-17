'use client';

import React from 'react';
import { Section, Button } from '../../components/ui';
import { SERVICES } from '../../constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <>
      <section className="bg-brand-black text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="max-w-4xl"
           >
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Creative Agency Services in Kerala</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              We offer a comprehensive suite of creative services designed to elevate your brand. From Branding in Calicut to Ad Campaigns in Dubai, we deliver world-class narratives.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-white pb-20 pt-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-gray-100 p-8 md:p-12 group hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500 rounded-sm bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                   <ArrowRight className="w-8 h-8 text-brand-accent -rotate-45" />
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="text-brand-accent font-mono text-sm mb-4 block">0{index + 1}</span>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                     <Button variant="text" className="text-brand-black group-hover:text-brand-accent" icon>
                        Explore Service
                     </Button>
                  </Link>
                </div>

                <div className="lg:col-span-3 border-l border-gray-100 pl-8 hidden lg:block">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Includes</h3>
                  <ul className="space-y-2">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 truncate">
                        {item}
                      </li>
                    ))}
                    {service.includes.length > 3 && (
                      <li className="text-sm text-gray-400 italic">+ more</li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-brand-black text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a tailored solution?</h3>
              <p className="text-gray-400">We specialize in cross-market strategies for brands scaling globally.</p>
            </div>
            <Link href="/contact">
              <Button variant="primary" className="bg-white text-black hover:bg-brand-accent hover:text-white border-none">Get a Proposal</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;