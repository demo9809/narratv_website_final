'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Headphones } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { CONTACT_DETAILS } from '../types';
import { Button } from './ui';
import PortfolioRequestModal from './PortfolioRequestModal';
import CallbackRequestModal from './CallbackRequestModal';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isCallPopoverOpen, setIsCallPopoverOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path === '/work') {
      e.preventDefault();
      setIsPortfolioModalOpen(true);
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
          ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50 relative group">
            <div className="relative w-32 h-8 md:w-40 md:h-10">
              <img
                src="/assets/logo-white.png"
                alt="Narratv Space"
                className="object-contain w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact">
              <Button variant="primary" mode="dark" className="ml-6 !px-6 !py-2.5 text-xs">Let's Talk</Button>
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-brand-accent transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>

            {/* Call Toggle */}
            <button
              onClick={() => setIsCallPopoverOpen(!isCallPopoverOpen)}
              className={`transition-colors ${isCallPopoverOpen ? 'text-brand-accent' : 'text-white hover:text-brand-accent'}`}
            >
              <Phone className="w-6 h-6" />
            </button>

            {/* Hamburger */}
            <button
              className="z-50 relative text-white hover:text-brand-accent transition-colors ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-5xl font-bold tracking-tighter ${isActive ? 'text-brand-accent' : 'text-white'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-8">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" mode="dark" className="w-full text-xl py-6">Start a Project</Button>
            </Link>
          </div>
        </div>
      </div>

      <PortfolioRequestModal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
      />

      <CallbackRequestModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      {/* Call Popover Logic */}
      <AnimatePresence>
        {isCallPopoverOpen && (
          <>
            <div className="fixed inset-0 z-[45]" onClick={() => setIsCallPopoverOpen(false)}></div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-20 right-4 z-[50] bg-white text-brand-black p-4 rounded-lg shadow-2xl w-80 md:hidden border border-gray-100"
            >
              <div className="mb-4">
                <h4 className="font-bold text-lg mb-1">Talk to a sales advisor</h4>
                <p className="text-gray-500 text-xs mb-3">Available 9am - 6pm IST</p>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="flex items-center gap-2 text-brand-accent font-bold text-lg hover:underline">
                  <Phone className="w-5 h-5" />
                  {CONTACT_DETAILS.phone}
                </a>
              </div>

              <div className="bg-gray-50 p-3 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => { setIsCallPopoverOpen(false); setIsCallbackModalOpen(true); }}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Headphones className="w-4 h-4" />
                    Request a call back
                  </div>
                  <span className="text-gray-400 text-xs">&rarr;</span>
                </div>
                <p className="text-gray-500 text-xs">Call backs typically happen in a few minutes.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;