'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/ui';
import PortfolioRequestModal from '../../../components/PortfolioRequestModal';
import { motion } from 'framer-motion';

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

export default function ProjectDetail() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  return (
    <>
      <section className="bg-brand-black min-h-screen py-32 flex flex-col justify-center items-center relative overflow-hidden text-center px-6">

        {/* Scrolling Portfolio Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="flex gap-4 sm:gap-6 justify-center h-[150%] -translate-y-1/4 rotate-[-6deg] scale-110">
            {/* Column 1 - Scroll Up */}
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex flex-col gap-4 sm:gap-6 w-1/3 sm:w-1/4"
            >
              {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].map((src, i) => (
                <div key={`col1-${i}`} className="w-full aspect-[9/14] relative rounded-md overflow-hidden brightness-50 hover:brightness-100 transition-all duration-700">
                  <img src={src} alt="Portfolio" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>

            {/* Column 2 - Scroll Down */}
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="flex flex-col gap-4 sm:gap-6 w-1/3 sm:w-1/4 pt-20"
            >
              {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].reverse().map((src, i) => (
                <div key={`col2-${i}`} className="w-full aspect-[9/14] relative rounded-md overflow-hidden brightness-50 hover:brightness-100 transition-all duration-700">
                  <img src={src} alt="Portfolio" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>

            {/* Column 3 - Scroll Up */}
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
              className="flex flex-col gap-4 sm:gap-6 w-1/3 sm:w-1/4"
            >
              {[...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES].slice(5).map((src, i) => (
                <div key={`col3-${i}`} className="w-full aspect-[9/14] relative rounded-md overflow-hidden brightness-50 hover:brightness-100 transition-all duration-700">
                  <img src={src} alt="Portfolio" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black via-brand-black/70 to-brand-black pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-brand-black/20 backdrop-blur-[1px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto pt-20">
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
            To view this case study, please request access.
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

      <PortfolioRequestModal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
      />
    </>
  );
}