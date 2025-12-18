import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Globe, RefreshCw, Building, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Narratv Space Kerala | The Strategic Creative Consultancy for Kochi & Calicut',
    description: 'Redefining Kerala’s business landscape. Narratv Space brings global-standard branding and digital strategy to Kochi and Calicut’s leading builders, hospitals, and legacy brands.',
    keywords: ['Branding Agency Kerala', 'Digital Marketing Company Kochi', 'Advertising Agency Calicut', 'Premium Web Design Kerala', 'Rebranding Services Kerala'],
};

export default function KeralaPage() {
    const coreServices = [
        {
            title: "Modernizing Family Legacies (Rebranding)",
            icon: RefreshCw,
            description: "Many of Kerala’s giants have logos from the 1980s. We execute sensitive, powerful \"Brand Refreshes.\" We modernize your visual identity to appeal to the new generation of customers while carefully preserving the trust your father and grandfather built."
        },
        {
            title: "Real Estate & Builder Marketing",
            icon: Building,
            description: "The skyline in Kochi and Calicut is changing. We move beyond generic \"For Sale\" ads. We build \"Project Brands.\" From luxury brochures to cinematic walkthrough videos and high-intent lead generation, we help you sell out premium apartments before the foundation is even laid."
        },
        {
            title: "Medical Tourism & Wellness Digital Strategy",
            icon: HeartPulse,
            description: "Kerala is the world’s wellness capital. We help hospitals and Ayurvedic resorts attract international patients. We build trust-driven websites and content funnels that convince a patient in Europe or the Gulf to choose your facility for their treatment."
        }
    ];

    const whyChoosePoints = [
        {
            title: "Global Exposure, Local Access",
            desc: "We bring the experience of working with international brands back home. You get Dubai-quality strategy without having to leave the state."
        },
        {
            title: "We Speak Your Business Language",
            desc: "We understand the unique dynamics of the Kerala market—the importance of personal relationships, the \"word-of-mouth\" factor, and the specific buying behavior of the Malayali consumer."
        },
        {
            title: "Premium Positioning",
            desc: "We don't compete on price; we compete on value. If you are looking for the cheapest option, we aren't it. If you are looking for the best investment for your brand, we are the only choice."
        }
    ];

    const faqs = [
        {
            question: "Do you have offices in Kochi and Calicut?",
            answer: "We are headquartered in Calicut with a strong active presence in Kochi. We believe in face-to-face relationships. Our team is available for boardroom strategy sessions and on-site consultations to ensure your vision is perfectly understood."
        },
        {
            question: "Are your services expensive compared to local freelancers?",
            answer: "We are priced for value, not low cost. Hiring a freelancer or a low-cost agency often results in wasted budget and poor brand perception. We position ourselves as a premium partner for businesses serious about growth. Our clients view our fees as an investment that yields high returns, not an expense."
        },
        {
            question: "Do you handle social media management?",
            answer: "Yes, but strategically. We don't just post for the sake of posting. We manage the digital presence of premium brands, ensuring that every Reel, Story, and Post contributes to building authority and driving sales."
        },
        {
            question: "Can you help us launch a new product in the Kerala market?",
            answer: "Absolutely. Kerala is a unique test market. We handle the entire \"Go-to-Market\" strategy, including influencer collaborations, digital ad campaigns, and launch event branding to ensure your product makes a noise from Day 1."
        },
        {
            question: "What’s with the name Narratv (pronounced Narrative)?",
            answer: "Kerala loves a good story. We are the storytellers for your business. \"Narratv\" is the modern, efficient way to say we control the Narrative. We ensure your brand's story is told clearly, boldly, and profitably."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element - Kerala Green Hint */}
                <div className="absolute top-1/4 left-[-5%] w-[800px] h-[800px] bg-[#00A651]/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Globe size={14} /> Kerala / India
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                World-Class Strategy. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-green-300">Home-Grown Roots.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                Elevating Kerala’s Businesses from Local Leaders to Global Brands.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Schedule a Meeting</Button>
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
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Why Kerala’s Top Tier Chooses Narratv</h2>
                        <div className="w-20 h-1 bg-brand-accent mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Kerala is a land of legacy. From the trading heritage of Calicut to the metro speed of Kochi, businesses here are built on trust and history. But to survive the next generation, heritage needs a modern voice. Narratv Space (pronounced Narrative) is the bridge between your past success and your future growth.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are not a typical "social media agency" that just posts festival greetings. We are a strategic consultancy. We partner with Kerala’s top-tier builders, hospital chains, gold retailers, and family business groups to modernize their brands, increase their valuation, and dominate the digital space with the same quality found in Dubai or London.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        {whyChoosePoints.map((point, idx) => (
                            <div key={idx} className={`bg-gray-50 p-8 rounded-sm border-l-4 ${idx % 2 === 0 ? 'border-brand-accent' : 'border-[#00A651]'}`}>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Specialized Services for the Kerala Market</h2>
                    <p className="text-gray-500">Modern solutions for the state's leading industries.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                                <service.icon size={24} className="text-[#00A651] group-hover:text-white" />
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
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Partnering with Narratv in Kerala</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Lead the Market.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Stop competing with the noise. Start setting the standard. Let’s discuss your brand’s future over a coffee.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Schedule a Meeting</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
