import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Building, LayoutTemplate, Video, Users, BarChart3, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Real Estate Marketing for Visionary Developers | Narratv Space',
    description: 'We turn blueprints into sold-out communities. Narratv Space specializes in project branding, high-intent lead generation, and 3D visualization for real estate developers in the GCC and India.',
    keywords: ['Real Estate Marketing Agency', 'Property Branding', 'Off-Plan Lead Generation', 'Real Estate Videography', 'Luxury Property Marketing'],
};

export default function RealEstatePage() {
    const specializedSolutions = [
        {
            title: "Project Branding & Identity",
            icon: LayoutTemplate,
            description: "A project without a story is just concrete. We craft distinct identities for new developments—naming, logo design, brochure conceptualization, and \"lifestyle\" narratives. We ensure your project feels like a destination, creating an emotional hook that justifies premium pricing."
        },
        {
            title: "High-Intent Lead Generation (Performance)",
            icon: BarChart3,
            description: "Stop wasting budget on window shoppers. We engineer precision ad campaigns on Meta, Google, and LinkedIn targeting high-net-worth individuals (HNWIs) and NRIs. Our focus is on CPL (Cost Per Lead) and Lead Quality—delivering prospects who are actually ready to book."
        },
        {
            title: "3D Visualization & Cinematic Video",
            icon: Video,
            description: "In the off-plan market, the visual is everything. We produce photorealistic 3D renders, immersive fly-through animations, and lifestyle video productions that allow potential buyers to \"live\" in the home before the first brick is laid."
        },
        {
            title: "CRM Integration & Sales Enablement",
            icon: Users,
            description: "Marketing shouldn't stop at the click. We integrate our campaigns directly with your CRM (Salesforce, Zoho, HubSpot), ensuring leads are routed instantly to your sales team. We also design high-conversion sales decks and digital brochures that help your agents close the deal."
        }
    ];

    const regionalExpertise = [
        {
            title: "For GCC Developers (Dubai/Riyadh)",
            desc: "We understand the \"Off-Plan\" economy. We create hype-driven launch campaigns designed to sell out phases in record time, aligned with the luxury standards of the UAE and Saudi market."
        },
        {
            title: "For Kerala Builders",
            desc: "We know the NRI mindset. We build campaigns specifically targeting Malayalis in the Gulf, Europe, and the US, focusing on trust, heritage, and investment security."
        },
        {
            title: "For UK Estate Agents",
            desc: "We provide high-end content production and \"white label\" marketing support to help agencies stand out in a crowded London property market."
        }
    ];

    const faqs = [
        {
            question: "How do you ensure lead quality?",
            answer: "We use rigorous pre-qualification techniques. Instead of easy \"one-click\" forms, we build custom lead forms that ask specific questions (Budget, Timeline, Investment vs. End-Use). This adds positive friction, filtering out time-wasters and delivering serious investors to your sales team."
        },
        {
            question: "Can you handle the launch event marketing for a new project?",
            answer: "Yes. A project launch is a critical moment. We handle the entire \"Go-to-Market\" sequence: teaser campaigns, influencer invitations, event branding, and live social coverage to generate maximum FOMO (Fear Of Missing Out)."
        },
        {
            question: "Do you do architectural walkthroughs and 3D rendering?",
            answer: "Yes. We have specialized partners and in-house talent for 3D visualization. We can turn your CAD drawings into hyper-realistic images and videos that are essential for selling off-plan properties."
        },
        {
            question: "Why choose Narratv over a niche real estate agency?",
            answer: "Niche agencies often rinse and repeat the same templates for every builder. We bring a \"Brand-First\" approach. We apply strategies from luxury fashion and tech to real estate, ensuring your project stands out as a unique brand rather than just another building in the catalogue."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element - Luxury Gold Hint */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-[#C5A059] font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Building size={14} /> Real Estate & Property Development
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                We Don’t Just Sell <br /> Square Footage. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-yellow-200">We Sell Aspirations.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                The Strategic Marketing Partner for Premium Builders & Developers.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Discuss Your Next Project</Button>
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
                    <div className="lg:col-span-12 max-w-4xl">
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">In a market flooded with generic ads, the developers who win are the ones who build a brand.</h2>
                        <div className="w-20 h-1 bg-[#C5A059] mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            In a market flooded with generic "For Sale" ads and stock imagery, the developers who win are the ones who build a brand, not just a building. At Narratv Space (pronounced Narrative), we specialize in the art and science of property marketing.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From luxury high-rises in Dubai Marina to premium gated communities in Kochi and giga-projects in Saudi Arabia, we provide the end-to-end strategic firepower needed to move inventory fast. We bridge the gap between architectural vision and commercial reality.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Specialized Solutions */}
            <Section className="bg-brand-gray">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Specialized Solutions for the Property Sector</h2>
                    <p className="text-gray-500">End-to-end marketing infrastructure for developers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {specializedSolutions.map((solution, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                                <solution.icon size={24} className="text-[#C5A059] group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Regional Expertise */}
            <Section bgColor="black">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">Regional Expertise: One Agency, Three Markets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {regionalExpertise.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent"></div>
                                <h3 className="text-xl font-bold text-[#C5A059] mt-6 mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Real Estate Marketing with Narratv</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Turn Blueprints into Bookings.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Your project deserves a world-class launch. Let’s build the narrative that sells.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Discuss Your Next Project</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
