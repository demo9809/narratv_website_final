'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Layers, Zap, Users, ArrowUpRight, Play, Star } from 'lucide-react';
import { Section, Button } from '../components/ui';
import { PROJECTS, SERVICES } from '../constants';
import ClientMarquee from '../components/ClientMarquee';

const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(PROJECTS[0].id);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "Narratv Space",
    "alternateName": "Narrative Space",
    "image": "https://narratv.co/logo.png",
    "@id": "https://narratv.co",
    "url": "https://narratv.co",
    "telephone": "+918714531301",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No. 6, Ground Floor, KINFRA Advanced Technology Park, Ramanattukara",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "postalCode": "673631",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.1793,
      "longitude": 75.8677
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black text-white pt-20">

        {/* Interactive Spotlight Background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(243, 121, 93, 0.08), transparent 40%)`
          }}
        />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '3rem' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-brand-accent"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-brand-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase"
              >
                Advertising Agency in Kerala
              </motion.span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12 mix-blend-normal relative">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block"
              >
                Narratv
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
              >
                Space.
              </motion.span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 right-0 md:right-32 w-24 h-24 md:w-40 md:h-40 border border-brand-accent/20 rounded-full flex items-center justify-center pointer-events-none"
              >
                <div className="w-2 h-2 bg-brand-accent rounded-full absolute top-0 left-1/2 -translate-x-1/2" />
              </motion.div>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed"
              >
                <span className="text-white font-medium">Narratv Space</span> (pronounced <em>Narrative Space</em>) is a strategy-driven advertising agency based in Calicut. We build premium brands for Kerala, the Middle East, and Europe through Branding, Video Production, and Digital Marketing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link href="/contact">
                  <Button variant="primary" mode="dark" className="w-full sm:w-auto px-10 py-5 text-sm group" icon>
                    Start Project
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" mode="dark" className="w-full sm:w-auto px-10 py-5 text-sm hover:border-brand-accent hover:text-brand-accent transition-colors">
                    Our Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ambient Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none mix-blend-overlay"></div>

        {/* Floating Abstract Element */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[-10%] md:right-10 w-[400px] h-[400px] bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-[80px] pointer-events-none"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent overflow-hidden relative">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* 1.5 CLIENTS MARQUEE */}
      <ClientMarquee />

      {/* 2. STICKY SCROLL - GLOBAL REACH */}
      <section className="bg-white py-24 md:py-40 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Sticky Left Content */}
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span> Global Reach
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 text-brand-black leading-tight tracking-tight">
                  Local Roots. <br />Global Standards.
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed mb-12">
                  Headquartered in KINFRA Park, <strong>Calicut (Kozhikode)</strong>, we bring world-class strategy to brands in Kochi, Dubai, and London. We combine the cultural depth of Kerala with global design aesthetics.
                </p>

                <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-10">
                  <div>
                    <span className="block text-5xl font-bold mb-2 tracking-tighter">15+</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Countries Served</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-bold mb-2 tracking-tighter">50+</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Premium Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Right Content */}
            <div className="lg:w-7/12 flex flex-col gap-8">
              {[
                { icon: Globe, title: "International Clients", desc: "We understand the nuances of cross-border branding, serving businesses across UAE, UK, and India." },
                { icon: Zap, title: "Agile Execution", desc: "Speed matters. Our workflows are designed for the digital age, delivering high-quality assets without the bloat." },
                { icon: Layers, title: "Strategic Depth", desc: "We don't just make things look pretty. We make them work. Every pixel is backed by data and market research." },
                { icon: Users, title: "Senior Talent", desc: "No junior account managers. You work directly with our senior creatives and strategists from day one." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-brand-cream p-10 md:p-14 rounded-sm border border-transparent hover:border-brand-accent transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/5"
                >
                  <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-black group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-brand-black">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK - INTERACTIVE LIST */}
      <section className="bg-brand-black min-h-screen py-32 flex flex-col justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="flex justify-between items-end mb-24">
            <div>
              <span className="text-brand-accent font-mono text-xs tracking-widest uppercase mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Recent Work</h2>
            </div>
            <Link href="/work" className="hidden md:block group">
              <div className="flex items-center gap-4 text-white">
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand-accent transition-colors">View All Case Studies</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Project List */}
            <div className="lg:col-span-6 space-y-2">
              {PROJECTS.slice(0, 5).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveProject(project.id)}
                  className={`group relative py-8 border-b border-white/10 cursor-pointer transition-all duration-300 ${activeProject === project.id ? 'pl-8 border-white/40' : 'hover:pl-4 hover:border-white/20'}`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-accent transition-all duration-300 ${activeProject === project.id ? 'opacity-100 h-full' : 'opacity-0 h-0'}`} />

                  <div className="flex justify-between items-center">
                    <h3 className={`text-3xl md:text-4xl font-bold transition-colors ${activeProject === project.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-600 hidden md:block">0{index + 1}</span>
                  </div>
                  <p className={`mt-2 text-sm uppercase tracking-widest transition-colors ${activeProject === project.id ? 'text-brand-accent' : 'text-gray-600'}`}>
                    {project.category}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image Preview Area */}
            <div className="lg:col-span-6 sticky top-32 hidden lg:block h-[600px]">
              <div className="relative w-full h-full rounded-sm overflow-hidden bg-gray-900 shadow-2xl">
                <AnimatePresence mode="wait">
                  {PROJECTS.map((project) => (
                    activeProject === project.id && (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-8 left-8 right-8">
                          <p className="text-gray-300 text-lg line-clamp-2 mb-6">{project.overview}</p>
                          <Link href="/work" className="inline-flex items-center gap-2 text-white font-bold border-b border-brand-accent pb-1 hover:gap-4 transition-all">
                            View Project <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES - ELEGANT GRID */}
      <Section bgColor="gray" className="py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">Capabilities designed <br />for growth.</h3>
            <p className="text-xl text-gray-600">Full-spectrum advertising and digital services. From Calicut to the world.</p>
          </div>
          <Link href="/services" className="hidden md:block">
            <Button variant="outline" mode="light" icon>View All Services</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((item, index) => (
            <Link key={item.id} href={`/services/${item.slug}`} className="group block bg-white p-10 h-full border border-transparent hover:border-brand-accent/20 hover:shadow-2xl hover:shadow-brand-black/5 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-6 h-6 text-brand-accent" />
              </div>

              <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-black group-hover:border-brand-black group-hover:text-white transition-all duration-300">
                <span className="font-mono text-sm font-bold">0{index + 1}</span>
              </div>

              <h4 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-accent transition-colors">{item.title}</h4>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.includes.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-gray-50 px-2 py-1 text-gray-500 rounded-sm">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5. METHODOLOGY */}
      <Section className="bg-white py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-black mb-6 tracking-tight">Our Methodology</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">How we move from chaos to clarity.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 md:-translate-x-1/2" />

            {[
              { title: "Audit", desc: "We assess your current metrics, sales data, and brand perception to establish a baseline." },
              { title: "Analyze", desc: "We look outward at the market, competitors, and cultural trends impacting your sector." },
              { title: "Synthesize", desc: "We combine internal truths with external realities to form a unique strategic position." },
              { title: "Roadmap", desc: "We deliver a phased plan of action for creative and marketing execution." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0"
              >

                {/* Left Box (Desktop) */}
                <div className={`hidden md:block w-1/2 px-12 ${idx % 2 === 0 ? 'text-right' : 'opacity-0'}`}>
                  {idx % 2 === 0 && (
                    <div className="group">
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-accent transition-colors duration-300">{step.title}</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center md:-translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-white border-[3px] border-brand-black rounded-full shadow-[0_0_0_4px_white] group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Right Box (Desktop) */}
                <div className={`hidden md:block w-1/2 px-12 ${idx % 2 !== 0 ? 'text-left' : 'opacity-0'}`}>
                  {idx % 2 !== 0 && (
                    <div className="group">
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-accent transition-colors duration-300">{step.title}</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Mobile Content */}
                <div className="md:hidden pl-12 w-full pt-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
  </svg>
);

export default Home;