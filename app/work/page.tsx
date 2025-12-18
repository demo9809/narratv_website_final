'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui';
import PortfolioRequestModal from '../../components/PortfolioRequestModal';
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

import { useRouter } from 'next/navigation';

export default function Portfolio() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="bg-brand-black min-h-screen py-32 flex flex-col justify-center items-center relative overflow-hidden text-center px-6">
        {/* ... (background content skipped for brevity) ... */}

        <div className="relative z-10 max-w-4xl mx-auto pt-20">
          {/* ... */}
          <Button
            variant="primary"
            mode="dark"
            className="!px-12 !py-6 text-lg !bg-brand-accent !border-brand-accent !text-white hover:!bg-brand-accent/90 shadow-[0_0_40px_-10px_rgba(243,121,93,0.3)] hover:shadow-[0_0_60px_-10px_rgba(243,121,93,0.5)] active:scale-95 transition-all duration-300"
            onClick={() => {
              console.log("Unlock Clicked. LocalStorage:", typeof window !== 'undefined' ? localStorage.getItem('portfolio_access') : 'N/A');
              if (typeof window !== 'undefined' && localStorage.getItem('portfolio_access') === 'true') {
                router.push('/work/access-granted');
              } else {
                setIsPortfolioModalOpen(true);
              }
            }}
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
};