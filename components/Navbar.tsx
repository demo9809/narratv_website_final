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
import ContactSidebar from './ContactSidebar';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false); // Mobile Only
  const [isCallPopoverOpen, setIsCallPopoverOpen] = useState(false); // Mobile Only
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false); // Desktop Only
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
            {/* Desktop Actions */}
            <div className="flex items-center gap-6 ml-6 border-l border-white/20 pl-6 h-8">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Narratv%20Team%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-brand-accent transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Call Toggle - Desktop (Sidebar) */}
              <button
                onClick={() => setIsContactSidebarOpen(true)}
                className="transition-colors text-gray-300 hover:text-brand-accent hidden md:block"
              >
                <Phone className="w-5 h-5" />
              </button>

              {/* Call Toggle - Mobile (Popover) */}
              <button
                onClick={() => setIsCallPopoverOpen(!isCallPopoverOpen)}
                className={`transition-colors md:hidden ${isCallPopoverOpen ? 'text-brand-accent' : 'text-gray-300 hover:text-brand-accent'}`}
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>

            <Link href="/contact">
              <Button variant="primary" mode="dark" className="ml-6 !px-6 !py-2.5 text-xs">Let's Talk</Button>
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Narratv%20Team%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-brand-accent transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
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

      <ContactSidebar
        isOpen={isContactSidebarOpen}
        onClose={() => setIsContactSidebarOpen(false)}
      />

      {/* Call Popover Logic (Mobile Only) */}
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
                <h4 className="font-bold text-lg mb-1">Speak to a strategist</h4>
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