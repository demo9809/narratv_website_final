import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Globe, Layout, Building2, Smartphone, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Narratv Space Riyadh | Strategic Branding & Digital Growth for the Kingdom',
    description: 'Partnering with visionary Saudi brands to drive the digital future. We provide premium branding, performance marketing, and creative strategy aligned with Vision 2030 goals.',
    keywords: ['Digital Marketing Agency Riyadh', 'Branding Agency Saudi Arabia', 'Vision 2030 Marketing', 'Creative Agency KSA', 'Advertising Riyadh'],
};

export default function RiyadhPage() {
    const coreServices = [
        {
            title: "Localization & Cultural Strategy",
            icon: Globe,
            description: "Saudi Arabia is unique. A campaign that works in Dubai or London will not necessarily work in Riyadh. We don't just translate English to Arabic; we \"Arabize\" concepts. We ensure your brand speaks the dialect of the modern Saudi consumer—respecting tradition while embracing the future."
        },
        {
            title: "Snapchat & TikTok Performance",
            icon: Smartphone,
            description: "KSA has some of the highest social media penetration rates in the world, specifically on Snapchat and TikTok. We are experts in vertical video strategy and paid acquisition on these platforms, ensuring your brand captures attention where the Saudi youth spend their time."
        },
        {
            title: "Corporate & Government Branding",
            icon: Building2,
            description: "Trust and authority are the currency of the Kingdom. We specialize in creating high-fidelity corporate identities for contracting firms, logistics giants, and government initiatives that need to project stability, innovation, and Vision 2030 alignment."
        }
    ];

    const whyChoosePoints = [
        {
            title: "Understanding the Transformation",
            desc: "We understand the shift from an oil-based economy to a diverse, experience-based economy. Our strategies are designed for sectors like Tourism, Entertainment, and Fintech."
        },
        {
            title: "Agility & Speed",
            desc: "The Saudi market moves fast. Our digital-first structure allows us to deploy campaigns and assets faster than traditional, bloated agencies."
        },
        {
            title: "Data-Backed Creativity",
            desc: "We don't guess what works in the Kingdom. We use data to drive decisions, ensuring your marketing budget delivers measurable ROI."
        }
    ];

    const faqs = [
        {
            question: "Do you have experience with the Saudi dialect and culture?",
            answer: "Yes. We understand the nuances between the regions—how a consumer in Jeddah differs from one in Riyadh. We ensure all Arabic copy and creative direction is culturally vetted to be impactful, respectful, and native."
        },
        {
            question: "Can you handle large-scale video production for Saudi projects?",
            answer: "Absolutely. We manage high-end production logistics. Whether you need coverage for a Riyadh Season event or a corporate film for a contracting firm, we coordinate the crew, strategy, and post-production to deliver broadcast-quality assets."
        },
        {
            question: "How does your remote/hybrid model benefit Saudi clients?",
            answer: "It offers you \"Global Quality at Smart Efficiency.\" You get access to international-standard strategy and design talent without the excessive retainer fees of a physical office in the Diplomatic Quarter. We are fully set up for remote collaboration, with regular visits for key milestones."
        },
        {
            question: "Do you work with Government or Semi-Government entities?",
            answer: "Yes. We are equipped to handle the rigorous brand guidelines and compliance requirements of government sectors. We understand the need for discretion, security, and absolute precision in communication."
        },
        {
            question: "Why \"Narratv\"?",
            answer: "Because the Kingdom is writing a new story. We are here to help you write yours. Narratv (pronounced Narrative) is about structure, purpose, and clear communication—exactly what modern Saudi businesses need."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-1/4 left-[-10%] w-[800px] h-[800px] bg-[#006C35]/10 rounded-full blur-[120px] pointer-events-none" /> {/* Saudi Green Hint */}

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Globe size={14} /> Kingdom of Saudi Arabia
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                Digital Excellence for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">New Saudi Era.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                We Build Brands Ready for Vision 2030.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Schedule a Consultation</Button>
                                </Link>
                                <Link href="/work">
                                    <Button variant="outline" mode="light">View KSA Portfolio</Button>
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
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Why KSA Leaders Choose Narratv</h2>
                        <div className="w-20 h-1 bg-brand-accent mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            The Kingdom is not just changing; it is transforming at a speed the world has never seen. From the giga-projects of Neom to the bustling startups of Riyadh, the market demands a new caliber of creative partner. Narratv Space (pronounced Narrative) is that partner.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We move beyond traditional advertising. We help Saudi government entities, family groups, and emerging tech unicorns build brands that command respect on the global stage while retaining deep cultural roots. We are the architects of your digital narrative in a transforming Kingdom.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        {whyChoosePoints.map((point, idx) => (
                            <div key={idx} className={`bg-gray-50 p-8 rounded-sm border-l-4 ${idx % 2 === 0 ? 'border-brand-accent' : 'border-brand-black'}`}>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Strategic Services for the Saudi Market</h2>
                    <p className="text-gray-500">Tailored solutions for the unique demands of the Kingdom.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#006C35]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#006C35] group-hover:text-white transition-colors">
                                <service.icon size={24} className="text-[#006C35] group-hover:text-white" />
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
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Partnering with Narratv in Saudi Arabia</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Be Part of the Transformation.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Your brand belongs in the future of the Kingdom. Let’s build it together.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Schedule a Consultation</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
