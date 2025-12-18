import React from 'react';
import Link from 'next/link';
import { SERVICES } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, Check, ChevronDown, ArrowRight, Star, Grid } from 'lucide-react';
import { InteractiveElementType } from '../../../types';
import BrandAuditSlider from '../../../components/interactive/BrandAuditSlider';
import ROICalculator from '../../../components/interactive/ROICalculator';
import SpeedTestCTA from '../../../components/interactive/SpeedTestCTA';
import FAQ from '../../../components/FAQ';

// SEO: Generate Static Params for Export
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// SEO: Dynamic Metadata
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return null;

  // SEO: FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.details.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const renderInteractiveElement = (type?: InteractiveElementType) => {
    switch (type) {
      case 'BRAND_AUDIT_SLIDER':
        return <BrandAuditSlider />;
      case 'ROI_CALCULATOR':
        return <ROICalculator />;
      case 'SPEED_TEST_CTA':
        return <SpeedTestCTA />;
      default:
        return null;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO HEADER */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-black text-white overflow-hidden pt-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 animate-fade-in-up">
            <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-brand-accent mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">{service.details.tagline}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-8">
              {service.description}
            </p>
            <Link href="#contact">
              <Button variant="primary" mode="dark">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
          {/* Hero Image/Visual */}
          <div className="md:w-2/5 h-[400px] md:h-[600px] relative rounded-sm overflow-hidden hidden md:block">
            <img src={service.details.heroImage} className="w-full h-full object-cover opacity-80" alt={service.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY (Intro & Problem/Solution) */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-bold mb-6">{service.details.introHeadline}</h2>
            <div
              className="rich-text mb-12 prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: service.details.introContent }}
            />

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-gray-300">
                <h3 className="text-xl font-bold mb-4 text-brand-black">{service.details.problemTitle}</h3>
                <div className="prose prose-sm text-gray-600" dangerouslySetInnerHTML={{ __html: service.details.problemContent }} />
              </div>
              <div className="bg-brand-accent/5 p-8 rounded-sm border-t-4 border-brand-accent shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-brand-black">{service.details.solutionTitle}</h3>
                <div className="prose prose-sm text-gray-600" dangerouslySetInnerHTML={{ __html: service.details.solutionContent }} />
              </div>
            </div>

            {/* INTERACTIVE ELEMENT INJECTION */}
            {service.details.interactiveElement && (
              <div className="my-16">
                {renderInteractiveElement(service.details.interactiveElement)}
              </div>
            )}

            {/* SUB-SERVICES GRID */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Grid className="text-brand-accent" /> Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.details.subServices.map((sub, idx) => (
                  <div key={idx} className="border border-gray-200 p-6 rounded-sm hover:border-brand-accent transition-colors group">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-brand-accent">{sub.title}</h4>
                    <p className="text-gray-600 text-sm">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Content Block */}
            {service.details.seoContent && (
              <div className="mt-16 prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.details.seoContent }} />
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 h-fit sticky top-32 space-y-8">
            {/* Quick Contact Block */}
            <div className="bg-brand-black text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <h4 className="font-bold text-xl mb-4 relative z-10">Start your project</h4>
              <p className="text-sm text-gray-400 mb-6 relative z-10">Ready to transform your brand? Let's discuss your goals.</p>
              <Link href="/contact" className="relative z-10">
                <Button variant="primary" mode="dark" className="w-full">
                  Request Proposal
                </Button>
              </Link>
              <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                <a href="tel:+918714531301" className="text-brand-accent font-bold hover:text-white transition-colors flex items-center justify-center">
                  +91 87145 31301
                </a>
              </div>
            </div>

            {/* Deliverables Block */}
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Deliverables</h3>
              <ul className="space-y-3">
                {service.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Block */}
            <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Why Us?</h3>
              <ul className="space-y-3">
                {service.details.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                    <Star className="w-4 h-4 text-brand-accent mr-2 shrink-0 mt-0.5 fill-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>



      {/* 5. FAQ Section */}
      <Section className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <FAQ items={service.details.faq} />
        </div>
      </Section>

      {/* 6. CTA */}
      <section id="contact" className="py-24 bg-brand-black text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to elevate your {service.title}?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/contact">
            <Button variant="primary" mode="light" className="px-12 py-5 text-lg">
              Book Strategy Call
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" mode="dark" className="px-12 py-5 text-lg">
              View Case Studies
            </Button>
          </Link>
        </div>
      </section >
    </>
  );
}