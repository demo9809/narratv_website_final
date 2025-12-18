// Forced Re-deploy: 2025-12-18 T15:37 (Cache Buster)
import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Narratv Space | Advertising Agency Kerala | Branding & Digital Marketing',
  description: 'Narratv Space (Narrative Space) is a strategic advertising agency in Calicut, Kerala. We specialize in Branding, Ad Campaigns, Video Production, and Digital Marketing for clients in Kochi, UAE, and India.',
  keywords: [
    'Advertising Agency Kerala',
    'Narrative Space Calicut',
    'Narratv Space',
    'Branding Agency Calicut',
    'Digital Marketing Agency Kochi',
    'Video Production House Kerala',
    'Creative Agency India',
    'Social Media Marketing Calicut'
  ],
  openGraph: {
    title: 'Narratv Space | Advertising Agency Kerala',
    description: 'Strategic branding and advertising. Based in Calicut, serving Kerala, Middle East, and Europe.',
    url: 'https://narratv.co/',
    siteName: 'Narratv Space',
    images: [
      {
        url: 'https://narratv.co/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narratv Space | Advertising Agency Kerala',
    description: 'Transforming brands through strategy and storytelling. Narrative Space.',
    images: ['https://narratv.co/og-image.jpg'],
  },
  icons: {
    icon: '/assets/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Narratv Space",
    "alternateName": "Narrative Space",
    "description": "Strategic Advertising and Digital Marketing Agency based in Kerala.",
    "url": "https://narratv.co",
    "logo": "https://narratv.co/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918714531301",
      "contactType": "customer service",
      "areaServed": ["IN", "AE", "GB"],
      "availableLanguage": ["en", "ml"]
    },
    "sameAs": [
      "https://www.instagram.com/narratvspace",
      "https://www.linkedin.com/company/narratvspace"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-brand-black selection:bg-brand-accent selection:text-white`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}