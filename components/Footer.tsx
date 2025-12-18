import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { CONTACT_DETAILS } from '../types';
import { Button } from './ui';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-32 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">
              Let's build your<br />
              <span className="text-brand-accent">legacy.</span>
            </h2>
            <Link href="/contact">
              <Button variant="primary" mode="dark" icon>
                Start a Conversation
              </Button>
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Sitemap</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="text-lg text-gray-300 hover:text-brand-accent transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/careers" className="text-lg text-gray-300 hover:text-brand-accent transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Locations</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/dubai" className="text-lg text-gray-300 hover:text-brand-accent transition-colors group flex items-center gap-2">
                  Dubai <span className="text-xs text-brand-accent border border-brand-accent px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">UAE</span>
                </Link>
              </li>
              <li>
                <Link href="/riyadh" className="text-lg text-gray-300 hover:text-brand-accent transition-colors group flex items-center gap-2">
                  Riyadh <span className="text-xs text-[#006C35] border border-[#006C35] px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">KSA</span>
                </Link>
              </li>
              <li>
                <Link href="/doha" className="text-lg text-gray-300 hover:text-brand-accent transition-colors group flex items-center gap-2">
                  Doha <span className="text-xs text-[#8A1538] border border-[#8A1538] px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">QATAR</span>
                </Link>
              </li>
              <li>
                <Link href="/london" className="text-lg text-gray-300 hover:text-brand-accent transition-colors group flex items-center gap-2">
                  London <span className="text-xs text-[#00247D] border border-[#00247D] px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">UK</span>
                </Link>
              </li>
              <li>
                <Link href="/kerala" className="text-lg text-gray-300 hover:text-brand-accent transition-colors group flex items-center gap-2">
                  Kerala <span className="text-xs text-[#00A651] border border-[#00A651] px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">INDIA</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Industries</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/real-estate" className="text-lg text-gray-300 hover:text-brand-accent transition-colors">Real Estate</Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-lg text-gray-300 hover:text-brand-accent transition-colors">Healthcare & Wellness</Link>
              </li>
              <li>
                <span className="text-lg text-gray-600 cursor-not-allowed">Fintech (Soon)</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Email</span>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_DETAILS.email}</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Phone</span>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_DETAILS.phone}</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Studio</span>
                  <address className="not-italic text-gray-300 leading-relaxed">
                    KINFRA Advanced Tech Park,<br />
                    Calicut, Kerala 673631
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-gray-900 pt-8">
          <p>&copy; {new Date().getFullYear()} Narratv Space. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;