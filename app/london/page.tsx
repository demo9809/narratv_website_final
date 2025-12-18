import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Globe, Ghost, Rocket, ShoppingBag, Clock, ShieldCheck, Languages } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Narratv Space UK | The Strategic Creative Extension for British Brands',
    description: 'London quality at smart economy rates. Narratv Space acts as the agile, strategic partner for UK startups and agencies, delivering premium branding and digital growth without the overhead.',
    keywords: ['Creative Agency London', 'White Label Marketing UK', 'Digital Agency Manchester', 'Startup Marketing Agency London', 'Outsourcing Creative Services'],
};

export default function LondonPage() {
    const coreServices = [
        {
            title: "White Label Creative Support (For Agencies)",
            icon: Ghost,
            description: "London agencies are often over-serviced and under-resourced. We act as your \"Ghost Team.\" We handle the heavy lifting—branding projects, UI/UX design, SEO execution, and motion graphics—under your banner. You keep the client relationship; we deliver the work. Seamless, confidential, and reliable."
        },
        {
            title: "Growth Marketing for SaaS & Tech Startups",
            icon: Rocket,
            description: "From Shoreditch to Manchester, the UK tech scene is booming. We specialize in \"Go-to-Market\" strategies for B2B SaaS and Fintech products. We build the landing pages, the explainer videos, and the LinkedIn lead-gen funnels that allow you to scale rapidly and secure your Series A."
        },
        {
            title: "E-commerce Optimization",
            icon: ShoppingBag,
            description: "The British high street is online. We build and optimize high-conversion stores for UK D2C brands. We focus on speed, mobile UX, and integration with UK-specific logistics and payment providers (Shopify & WooCommerce), ensuring you capture the sophisticated British shopper."
        }
    ];

    const whyChoosePoints = [
        {
            title: "The \"Smart Economy\" Advantage",
            desc: "You get Senior-level creative strategy for the cost of a Junior hire in London. It’s not about being \"cheap\"; it’s about being smart with your burn rate."
        },
        {
            title: "Time Zone Productivity",
            desc: "We turn your downtime into uptime. While the UK sleeps, our teams in India are executing. You wake up to progress, not problems."
        },
        {
            title: "Native Communication",
            desc: "No language barriers. No cultural disconnects. We understand the nuances of British English, humor, and business etiquette, ensuring smooth collaboration from day one."
        }
    ];

    const faqs = [
        {
            question: "How do we collaborate given the time difference?",
            answer: "We view the time difference as a feature, not a bug. Our overlap hours (UK Morning / India Afternoon) are dedicated to meetings and strategy. The rest of the day is focused execution. This \"Follow the Sun\" model often means we deliver faster than local teams."
        },
        {
            question: "Is my data and IP secure with an offshore partner?",
            answer: "Absolutely. We operate under strict NDAs and UK-GDPR compliance standards. For our White Label agency partners, we guarantee complete confidentiality—your clients will never know we exist unless you want them to."
        },
        {
            question: "Can you handle \"British English\" copywriting?",
            answer: "Yes. We know that \"flavor\" has a 'u' and that tone matters. Our copywriters are proficient in British English spelling and idiom. For high-stakes campaigns, we can also collaborate with UK-based editors to polish the final nuance."
        },
        {
            question: "Do I have a dedicated account manager?",
            answer: "Yes. You won't be shouting into a void. You will have a dedicated Project Lead who acts as your single point of contact, managing the internal creative team and ensuring deadlines are hit."
        },
        {
            question: "Why the name Narratv (pronounced Narrative)?",
            answer: "Because in a market as crowded as the UK, if you don't control the story, you lose. We cut the vowels to keep it efficient, but we build the full Narrative for your business."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element - Royal Blue Hint */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00247D]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Globe size={14} /> London / United Kingdom
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                London Quality. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00247D] to-blue-400">Global Agility.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                The "Extended Team" for UK Brands and Agencies.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Book a Discovery Call</Button>
                                </Link>
                                <Link href="/work">
                                    <Button variant="outline" mode="light">View Portfolio</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro / Philosophy */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Why UK Businesses Choose Narratv</h2>
                        <div className="w-20 h-1 bg-brand-accent mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            The UK market is demanding. Budgets are tighter, deadlines are shorter, but the expectation for world-class creativity hasn't dropped. Narratv Space (pronounced Narrative) solves this equation.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are not just an outsourcing vendor; we are your strategic partner. We provide UK startups, SMEs, and over-capacity agencies with a high-performance creative team that operates on your rhythm but without the London price tag. We combine British strategic standards with the speed and efficiency of a global delivery model.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        {whyChoosePoints.map((point, idx) => (
                            <div key={idx} className={`bg-gray-50 p-8 rounded-sm border-l-4 ${idx % 2 === 0 ? 'border-brand-accent' : 'border-[#00247D]'}`}>
                                <h3 className="font-bold text-xl mb-2 text-brand-black">{point.title}</h3>
                                <p className="text-gray-600">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Core Services */}
            <Section className="bg-brand-gray">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Strategic Services for the UK Market</h2>
                    <p className="text-gray-500">Agile solutions for the fast-paced British digital landscape.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#00247D]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00247D] group-hover:text-white transition-colors">
                                <service.icon size={24} className="text-[#00247D] group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Partnering with Narratv in the UK</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Scale Smarter, Not Harder.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Get the creative firepower you need without the overhead. Let’s extend your team.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Book a Discovery Call</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
