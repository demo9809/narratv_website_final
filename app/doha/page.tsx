import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Globe, Building2, Wallet, Gem } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Narratv Space Qatar | Premium Branding for Doha’s Elite & Corporate Sectors',
    description: 'Elevating Qatar’s business landscape with world-class strategy. Narratv Space specializes in corporate branding, fintech marketing, and luxury digital experiences for the Doha market.',
    keywords: ['Branding Agency Qatar', 'Corporate Branding Doha', 'Luxury Marketing Agency', 'Fintech Marketing Qatar', 'Digital Strategy Doha'],
};

export default function DohaPage() {
    const coreServices = [
        {
            title: "Corporate & Family Office Branding",
            icon: Building2,
            description: "In Doha, reputation is everything. We specialize in \"Legacy Branding\" for major holding groups and Family Offices. We create visual identities and corporate narratives that project stability, heritage, and future-forward vision, ensuring your group commands respect across the GCC and Europe."
        },
        {
            title: "Fintech & Tech Marketing",
            icon: Wallet,
            description: "As Qatar cements itself as a fintech hub, we provide the specialized marketing needed to launch digital financial products. From user-friendly UI/UX design to trust-building content strategies, we help complex tech platforms acquire users and secure investment."
        },
        {
            title: "Luxury & Hospitality Experiences",
            icon: Gem,
            description: "We understand the language of luxury. Whether it’s a boutique hotel in Msheireb or a high-end retail concept, we craft digital experiences that feel exclusive. Our aesthetic approach is minimalist, premium, and designed to appeal to high-net-worth clientele."
        }
    ];

    const whyChoosePoints = [
        {
            title: "Discretion & Professionalism",
            desc: "We understand the privacy and discretion required when working with high-profile entities and government-aligned projects in Qatar."
        },
        {
            title: "Global Design Standards",
            desc: "We bring a design sensibility that aligns with global capitals like London and New York, ensuring your brand sits comfortably alongside international competitors."
        },
        {
            title: "Strategic Depth",
            desc: "We don't just design logos; we solve business problems. We analyze your market position within the Qatar National Vision 2030 framework to ensure long-term relevance."
        }
    ];

    const faqs = [
        {
            question: "Do you have experience with high-end corporate clients?",
            answer: "Yes. Our agency structure is built to serve premium B2B and corporate clients. We have stringent quality control processes that ensure every deliverable—from a business card to a corporate website—is flawless."
        },
        {
            question: "Can you help us rebrand without losing our heritage?",
            answer: "This is our specialty. We call it a \"Brand Evolution.\" We modernize your visual identity to compete in the digital age while carefully preserving the core elements and colors that represent your history and reputation in the local market."
        },
        {
            question: "How do you handle Arabic content for the Qatari market?",
            answer: "We prioritize \"Formal Arabic\" (Fusha) for corporate communications to ensure dignity and professionalism, while utilizing appropriate local nuances for B2C social media campaigns. We ensure your brand sounds as prestigious in Arabic as it does in English."
        },
        {
            question: "Why use a digital-first agency instead of a local Doha agency?",
            answer: "Agility and Perspective. Local agencies can often become echo chambers. We bring a fresh, international perspective to your brand while maintaining the operational efficiency and cost-effectiveness of a modern, digital-first team."
        },
        {
            question: "What is the story behind the name Narratv?",
            answer: "It stands for the bigger picture. In a market like Qatar, where every business has a history, we are the custodians of your Narrative (pronounced Narrative). We structure your story so the world listens."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element - Qatar Maroon Hint */}
                <div className="absolute top-1/4 right-[-5%] w-[800px] h-[800px] bg-[#8A1538]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Globe size={14} /> Doha / Qatar
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                Sophisticated Strategy for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Doha’s Leading Brands.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                Precision, Prestige, and Performance. The Digital Partner for Qatar.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Request a Proposal</Button>
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
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Why Doha’s C-Suite Chooses Narratv</h2>
                        <div className="w-20 h-1 bg-brand-accent mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Qatar is a market defined by uncompromising standards. In a landscape driven by prestigious family offices, rapid fintech innovation, and world-class hospitality, "good enough" is not an option. Narratv Space (pronounced Narrative) brings a level of strategic rigor and visual elegance that matches the ambition of the nation.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We partner with Doha’s corporate leaders and emerging disruptors to build brands that convey trust, authority, and global relevance. We are not here to make noise; we are here to craft your legacy.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        {whyChoosePoints.map((point, idx) => (
                            <div key={idx} className={`bg-gray-50 p-8 rounded-sm border-l-4 ${idx % 2 === 0 ? 'border-brand-accent' : 'border-[#8A1538]'}`}>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Bespoke Services for the Qatar Market</h2>
                    <p className="text-gray-500">Tailored solutions for the unique demands of the Qatari economy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#8A1538]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8A1538] group-hover:text-white transition-colors">
                                <service.icon size={24} className="text-[#8A1538] group-hover:text-white" />
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
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Working with Narratv in Qatar</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Elevate Your Presence.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Precision strategy for brands that demand the best. Let’s discuss your vision.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Request a Proposal</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
