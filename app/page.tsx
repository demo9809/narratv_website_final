'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Layers, Zap, Users, ArrowUpRight, Play, Star } from 'lucide-react';
import { Section, Button } from '../components/ui';
import { PROJECTS, SERVICES } from '../constants';
import ClientMarquee from '../components/ClientMarquee';
import HeroTextSlider from '../components/HeroTextSlider';
import PortfolioRequestModal from '../components/PortfolioRequestModal';

const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(PROJECTS[0].id);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  const PORTFOLIO_IMAGES = [
    "/assets/portfolio/portfolio-01.webp",
    "/assets/portfolio/portfolio-02.webp",
    "/assets/portfolio/portfolio-03.webp",
    "/assets/portfolio/portfolio-05.webp",
    "/assets/portfolio/portfolio-06.webp",
    "/assets/portfolio/portfolio-07.webp",
    "/assets/portfolio/portfolio-08.webp",
    "/assets/portfolio/portfolio-09.webp",
    "/assets/portfolio/portfolio-10.webp",
    "/assets/portfolio/portfolio-12.webp",
    "/assets/portfolio/portfolio-13.webp",
    "/assets/portfolio/portfolio-14.webp",
    "/assets/portfolio/portfolio-15.webp",
    "/assets/portfolio/portfolio-16.webp",
    "/assets/portfolio/portfolio-17.webp",
    "/assets/portfolio/portfolio-18.webp",
  ];
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
      <PortfolioRequestModal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
      />
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
                Narrative
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-3xl text-gray-400 max-w-3xl font-light leading-relaxed"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span>We are building</span>
                  <HeroTextSlider />
                </div>
                <p className="mt-4 text-base md:text-xl text-gray-500 max-w-xl">
                  Narratv Space is a strategy-first agency bridging the gap between Calicut's heritage and global design standards.
                </p>
              </motion.div>

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
                <Button
                  onClick={() => setIsPortfolioModalOpen(true)}
                  variant="outline"
                  mode="dark"
                  className="w-full sm:w-auto px-10 py-5 text-sm hover:border-brand-accent hover:text-brand-accent transition-colors"
                >
                  Our Portfolio
                </Button>
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

      {/* 3. LOCKED WORK SECTION */}
      <section className="bg-brand-black min-h-[85vh] py-32 flex flex-col justify-center items-center relative overflow-hidden text-center px-6">

        {/* Scrolling Portfolio Background - 3 Row Horizontal Marquee */}
        <div className="absolute inset-0 z-0 opacity-60 flex flex-col justify-center gap-8 -rotate-3 scale-110">

          {/* Row 1 - Left */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap w-max pl-6"
          >
            {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].map((src, i) => (
              <div key={`row1-${i}`} className="h-[35vh] w-auto aspect-[auto] relative rounded-lg overflow-hidden brightness-90 hover:brightness-110 transition-all duration-700 grayscale-[20%] hover:grayscale-0 shrink-0">
                <img src={src} alt="Portfolio" className="h-full w-auto object-contain" />
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Right (Opposite) */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap w-max pl-6"
          >
            {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].reverse().map((src, i) => (
              <div key={`row2-${i}`} className="h-[35vh] w-auto aspect-[auto] relative rounded-lg overflow-hidden brightness-90 hover:brightness-110 transition-all duration-700 grayscale-[20%] hover:grayscale-0 shrink-0">
                <img src={src} alt="Portfolio" className="h-full w-auto object-contain" />
              </div>
            ))}
          </motion.div>

          {/* Row 3 - Left */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap w-max pl-6"
          >
            {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].slice(5).map((src, i) => (
              <div key={`row3-${i}`} className="h-[35vh] w-auto aspect-[auto] relative rounded-lg overflow-hidden brightness-90 hover:brightness-110 transition-all duration-700 grayscale-[20%] hover:grayscale-0 shrink-0">
                <img src={src} alt="Portfolio" className="h-full w-auto object-contain" />
              </div>
            ))}
          </motion.div>

        </div>

        {/* Gradient Overlay - Increased Density */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-brand-black/90 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-brand-black/30 backdrop-blur-[2px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 border border-white/10 rounded-full px-5 py-2 bg-black/40 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/90">Curated Access</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Public Results. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Private Strategies.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            In a world of oversharing, we value discretion. Our most transformative work protects our partners' competitive edge. Request access to view our complete, confidential case studies.
          </p>

          <Button
            variant="primary"
            mode="dark"
            className="!px-12 !py-6 text-lg !bg-brand-accent !border-brand-accent !text-white hover:!bg-brand-accent/90 shadow-[0_0_40px_-10px_rgba(243,121,93,0.3)] hover:shadow-[0_0_60px_-10px_rgba(243,121,93,0.5)] active:scale-95 transition-all duration-300"
            onClick={() => setIsPortfolioModalOpen(true)}
            icon
          >
            Unlock Full Portfolio
          </Button>
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