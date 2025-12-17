"use client";

import React, { useState } from 'react';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DETAILS } from '../types';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.a
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: 0.05 }}
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g,'')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
              >
                <span className="font-bold text-sm tracking-wide">WhatsApp</span>
                <MessageCircle className="w-5 h-5 fill-current" />
              </motion.a>
              
              <motion.a
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex items-center gap-3 bg-white text-brand-black px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
              >
                <span className="font-bold text-sm tracking-wide">Call Now</span>
                <Phone className="w-5 h-5 fill-brand-black group-hover:fill-brand-accent transition-colors" />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-2 border-white/10 backdrop-blur-sm ${isOpen ? 'bg-brand-black rotate-45' : 'bg-brand-accent animate-pulse-slow'}`}
        >
          {isOpen ? <X className="w-6 h-6 md:w-8 md:h-8 text-white" /> : <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;