import React from 'react';
import Link from 'next/link';
import { SERVICES, PROJECTS } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, ArrowUpRight, Check, Star, Grid as GridIcon, Phone, Minus, Plus } from 'lucide-react';
import { InteractiveElementType, Project } from '../../../types';
import BrandAuditSlider from '../../../components/interactive/BrandAuditSlider';
import ROICalculator from '../../../components/interactive/ROICalculator';
import SpeedTestCTA from '../../../components/interactive/SpeedTestCTA';
import FAQ from '../../../components/FAQ';

// SEO: Generate Static Params
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// SEO: Metadata
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

  // Filter Related Projects
  const relatedProjects = PROJECTS.filter(p => p.category === service.category).slice(0, 3);

  // Schema
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
      case 'BRAND_AUDIT_SLIDER': return <BrandAuditSlider />;
      case 'ROI_CALCULATOR': return <ROICalculator />;
      case 'SPEED_TEST_CTA': return <SpeedTestCTA />;
      default: return null;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION (Dark - Original Style) */}
      <section className="relative min-h-[80vh] flex items-end pb-20 bg-brand-black text-white pt-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors group">
            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center mr-3 group-hover:border-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                <span className="text-brand-accent font-medium tracking-widest uppercase text-sm">{service.category}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                {service.details.tagline} &mdash; {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO & PHILOSOPHY (Light Theme) */}
      <section className="py-24 bg-white text-brand-black">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-gray-900">
                {service.details.introHeadline}
              </h2>
            </div>
            <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.details.introContent }} />
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID (Light Theme - Gray Background) */}
      <section className="py-24 bg-gray-50 text-brand-black">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Capabilities</h2>
            <div className="hidden md:block text-gray-500 text-sm font-medium">
              Comprehensive solutions for growth.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.details.subServices.map((sub, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 rounded-xl md:aspect-square flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-gray-300 font-mono text-xs font-bold">0{idx + 1}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-accent transition-colors">{sub.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{sub.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES (Light Theme) */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-white text-brand-black overflow-hidden border-t border-gray-100">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-brand-accent font-bold font-mono text-sm tracking-widest uppercase mb-2 block">Proven Results</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <Link href="/work">
                <Button variant="outline" mode="light" className="hover:!bg-brand-black hover:!text-white">
                  View All Work
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <Link href={`/work/${project.slug}`} key={project.id} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{project.tags.join(' / ')}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. IMPACT / WHY CHOOSE US (Dark to Stand Out) */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why leading brands trust us with their {service.title}</h2>
              <div className="space-y-4">
                {service.details.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start p-4 border-b border-white/10">
                    <Star className="w-5 h-5 text-brand-accent mr-4 shrink-0 mt-0.5 fill-brand-accent" />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Abstract Stats Visual */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white/5 p-8 rounded-2xl flex flex-col justify-center border border-white/5 backdrop-blur-sm">
                  <span className="text-4xl md:text-5xl font-bold text-white mb-2">98%</span>
                  <span className="text-gray-400 text-sm">Client Retention Rate</span>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl flex flex-col justify-center border border-white/5 mt-8 backdrop-blur-sm">
                  <span className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">50+</span>
                  <span className="text-gray-400 text-sm">Global Awards</span>
                </div>
                <div className="bg-brand-accent p-8 rounded-2xl flex flex-col justify-center text-black col-span-2 shadow-[0_0_30px_rgba(255,51,102,0.3)]">
                  <span className="text-xl font-bold mb-2">Let's create impact.</span>
                  <span className="text-black/70 text-sm font-medium">Our strategies are built for measurable growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE & PROBLEM/SOL (Light Theme) */}
      <section className="py-24 bg-white text-gray-900 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {service.details.interactiveElement && (
            <div className="mb-24">
              {renderInteractiveElement(service.details.interactiveElement)}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
              <h3 className="text-xl text-gray-500 mb-4 font-mono uppercase tracking-widest font-bold">{service.details.problemTitle}</h3>
              <div className="prose prose-p:text-gray-600 prose-gray" dangerouslySetInnerHTML={{ __html: service.details.problemContent }} />
            </div>
            <div className="bg-black text-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-xl text-brand-accent mb-4 font-mono uppercase tracking-widest font-bold">{service.details.solutionTitle}</h3>
              <div className="prose prose-p:text-gray-300 prose-invert prose-p:font-medium" dangerouslySetInnerHTML={{ __html: service.details.solutionContent }} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <Section className="bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Freqently Asked</h2>
          <FAQ items={service.details.faq} />
        </div>
      </Section>

      {/* 8. FOOTER CTA */}
      <section className="py-32 bg-brand-black text-center px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter">
            Ready to scale?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how our {service.title} services can transform your business.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button variant="primary" mode="dark" className="!bg-brand-accent !text-black hover:!bg-white px-10 py-6 text-xl h-auto">
                Book Strategy Call
              </Button>
            </Link>
            <a href={`tel:${'8714531301'}`} className="flex items-center justify-center gap-3 px-10 py-6 text-xl font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all">
              <Phone className="w-5 h-5" />
              +91 87145 31301
            </a>
          </div>
        </div>
      </section>
    </>
  );
}