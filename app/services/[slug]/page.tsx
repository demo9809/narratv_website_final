import React from 'react';
import Link from 'next/link';
import { SERVICES } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, Check, ChevronDown, ArrowRight, Star } from 'lucide-react';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-brand-black text-white overflow-hidden pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-brand-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="animate-fade-in-up">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">{service.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 max-w-4xl">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-brand-accent/20 to-transparent" />
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <Section className="bg-white pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-bold mb-6">{service.details.introHeadline}</h2>
            
            {/* Intro Content */}
            <div 
              className="rich-text mb-12 prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: service.details.introContent }} 
            />

            {/* Problem & Solution */}
            <div className="my-12 grid gap-8">
              <div className="bg-gray-50 p-8 rounded-sm">
                 <h3 className="text-xl font-bold mb-4 text-brand-black">{service.details.problemTitle}</h3>
                 <div className="prose prose-neutral max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: service.details.problemContent }} />
              </div>
              <div className="bg-brand-accent/5 p-8 rounded-sm border-l-4 border-brand-accent">
                 <h3 className="text-xl font-bold mb-4 text-brand-black">{service.details.solutionTitle}</h3>
                 <div className="prose prose-neutral max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: service.details.solutionContent }} />
              </div>
            </div>

            {/* Benefits List (Visual) */}
            <div className="mb-12 bg-brand-cream p-8 rounded-sm">
               <h3 className="text-xl font-bold mb-6 text-brand-black mt-0">Why Choose Narratv Space?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                       <Check className="w-5 h-5 text-brand-accent mr-3 shrink-0 mt-1" />
                       <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 h-fit sticky top-32 space-y-8">
             {/* Quick Contact Block */}
            <div className="bg-brand-black text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
               <h4 className="font-bold text-xl mb-4 relative z-10">Start your project</h4>
               <p className="text-sm text-gray-400 mb-6 relative z-10">Ready to transform your brand? Let's discuss your goals.</p>
               <Link href="/contact" className="relative z-10">
                  <Button variant="primary" mode="light" className="w-full">
                    Request Proposal
                  </Button>
               </Link>
               <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                  <a href="tel:+918714531301" className="text-brand-accent font-bold hover:text-white transition-colors flex items-center justify-center">
                    +91 87145 31301
                  </a>
               </div>
            </div>

            {/* Deliverables Block (Moved from main content) */}
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Key Deliverables</h3>
              <div className="flex flex-wrap gap-2">
                {service.details.deliverables.map((item, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-wide">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* NEW: Methodology Section (Zig Zag Design) */}
      <Section className="bg-white pt-10 pb-32 overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-brand-black mb-6 tracking-tight">Our Methodology</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">How we move from chaos to clarity.</p>
           </div>

           <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 md:-translate-x-1/2" />

              {service.details.processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
                   
                   {/* Left Side (Text for Even, Empty for Odd) */}
                   <div className={`md:w-1/2 px-12 md:text-right ${idx % 2 !== 0 ? 'md:order-1' : 'md:order-1'}`}>
                      {idx % 2 === 0 && (
                        <div className="md:pr-8">
                           <h3 className="text-3xl font-bold mb-4 text-brand-black">{step.title}</h3>
                           <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      )}
                   </div>

                   {/* Center Dot */}
                   <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center md:-translate-x-1/2 z-10 md:order-2">
                      <div className="w-5 h-5 bg-white border-[4px] border-brand-black rounded-full shadow-[0_0_0_4px_white] group-hover:scale-125 group-hover:border-brand-accent transition-all duration-300" />
                   </div>

                   {/* Right Side (Text for Odd, Empty for Even) */}
                   <div className={`md:w-1/2 px-12 md:text-left ${idx % 2 !== 0 ? 'md:order-3' : 'md:order-3'}`}>
                      {idx % 2 !== 0 && (
                        <div className="md:pl-8">
                           <h3 className="text-3xl font-bold mb-4 text-brand-black">{step.title}</h3>
                           <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      )}
                   </div>

                   {/* Mobile Layout Override */}
                   <div className="md:hidden pl-16 w-full pt-1">
                      {idx % 2 !== 0 && (
                         <>
                           <h3 className="text-2xl font-bold mb-2 text-brand-black">{step.title}</h3>
                           <p className="text-gray-600 leading-relaxed">{step.description}</p>
                         </>
                      )}
                      {idx % 2 === 0 && (
                         <>
                           <h3 className="text-2xl font-bold mb-2 text-brand-black">{step.title}</h3>
                           <p className="text-gray-600 leading-relaxed">{step.description}</p>
                         </>
                      )}
                   </div>

                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* Visual Break Image */}
      <section className="h-[50vh] w-full overflow-hidden">
        <img src={service.details.heroImage} alt={`${service.title} Agency Kerala`} className="w-full h-full object-cover" />
      </section>

      {/* FAQ Section */}
      <Section bgColor="gray">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {service.details.faq && service.details.faq.map((item, idx) => (
               <details key={idx} className="group bg-white p-6 rounded-sm cursor-pointer shadow-sm open:shadow-md transition-all">
                 <summary className="flex justify-between items-center font-bold text-lg list-none">
                   {item.question}
                   <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                 </summary>
                 <p className="mt-4 text-gray-600 leading-relaxed">
                   {item.answer}
                 </p>
               </details>
             ))}
           </div>
         </div>
      </Section>

      {/* CTA */}
      <Section bgColor="black" className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Not sure if {service.title} is right for you?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">We customize every engagement. Let's discuss your specific needs in Kerala or Dubai.</p>
        <Link href="/contact">
           <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-10 py-4">
             Schedule a Consultation
           </Button>
        </Link>
      </Section>
    </>
  );
}