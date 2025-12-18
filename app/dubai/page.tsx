import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Globe, MapPin, Zap, ShoppingBag, Palette } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Narratv Space Dubai | Strategic Branding & Digital Performance for the GCC',
    description: 'Narratv Space brings global creative strategy to Dubai. We are the growth partner for UAE brands, specializing in premium identity, performance marketing, and digital transformation.',
    keywords: ['Digital Marketing Agency Dubai', 'Branding Agency Dubai', 'Creative Agency GCC', 'Performance Marketing UAE'],
};

export default function DubaiPage() {
    const coreServices = [
        {
            title: "Premium Branding & Identity",
            icon: Palette,
            description: "Stand out in a saturated market. We craft distinct visual identities for luxury startups, holding groups, and government entities. From logo design to comprehensive brand guidelines, we ensure your business looks the part."
        },
        {
            title: "Performance Marketing (ROI Focused)",
            icon: Zap,
            description: "Stop wasting Dirhams on broad targeting. We engineer high-precision campaigns on Google, Meta, Snapchat, and TikTok designed to generate qualified leads for high-ticket industries (Real Estate, B2B, Automotive)."
        },
        {
            title: "E-commerce Growth",
            icon: ShoppingBag,
            description: "Dubai is the shopping capital of the region. We build robust Shopify and WooCommerce stores integrated with regional payment gateways (Tabby, Tamara, Telr) to capture the booming online retail demand."
        }
    ];

    const bridgingGapPoints = [
        {
            title: "Cost-Efficiency",
            desc: "Premium output without the inflated overheads of a traditional Sheikh Zayed Road agency."
        },
        {
            title: "Availability",
            desc: "We work on your time zone. We are available for Zoom strategy sessions, WhatsApp support, and regular reporting cycles aligned with the Dubai work week (Mon-Fri)."
        }
    ];

    const faqs = [
        {
            question: "Are you physically located in Dubai?",
            answer: "We operate as a digital-first agency with a strong operational focus on the GCC. While our production HQ is in India, we frequently travel to Dubai for major project kick-offs, shoots, and strategy workshops. This model allows us to offer global-tier work at a competitive rate."
        },
        {
            question: "Can I pay in AED (Dirhams)?",
            answer: "Yes. We accept international bank transfers in multiple currencies including AED, USD, and GBP. We ensure a seamless invoicing process compliant with international business standards."
        },
        {
            question: "Do you understand the cultural sensitivities of the UAE market?",
            answer: "Absolutely. We have extensive experience working with GCC clients. We understand the importance of cultural relevance, modesty in advertising, and the specific tone required to speak to both local and expat audiences effectively."
        },
        {
            question: "Why is the agency spelled \"Narratv\" but pronounced \"Narrative\"?",
            answer: "Great question. We believe in efficiency and distinctiveness—removing the unnecessary to focus on what matters. \"Narratv\" is our unique identifier in the digital space, but our mission is to build your brand's narrative. When you search for us, remember: we are the team that shapes your story."
        },
        {
            question: "How do we get started?",
            answer: "It starts with a Discovery Call. We don’t pitch generic decks. We audit your current digital presence and come back with a tailored roadmap for your growth in the UAE market."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Globe size={14} /> GCC / MENA Region
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                We Build Brands That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Dominate the Dubai Skyline.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                Global Strategy, Local Impact. The Creative Partner for Visionary UAE Businesses.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Book Your Strategy Call</Button>
                                </Link>
                                <Link href="/work">
                                    <Button variant="outline" mode="light">View GCC Portfolio</Button>
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
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Why Leading UAE Brands Choose Narratv</h2>
                        <div className="w-20 h-1 bg-brand-accent mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Dubai is not a market for the quiet. It is a hyper-competitive ecosystem where only the strongest brands survive. At Narratv Space (pronounced Narrative), we provide the strategic edge required to cut through the noise.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are not just another digital agency in Business Bay or JLT executing tasks. We are your off-site strategic headquarters. We combine the agility of an independent studio with the rigorous standards of a global consultancy, helping Dubai’s real estate, hospitality, and tech leaders scale their revenue and reputation.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-brand-accent">
                            <h3 className="font-bold text-xl mb-2 text-brand-black">Strategy Over Noise</h3>
                            <p className="text-gray-600">In a city of "viral trends," we focus on long-term brand equity and sustainable CAC (Customer Acquisition Cost).</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-brand-black">
                            <h3 className="font-bold text-xl mb-2 text-brand-black">GCC Nuance, Global Standard</h3>
                            <p className="text-gray-600">We understand the local consumer psychology—from the expat communities to the Emirati demographic—while delivering design and code that meets London and New York standards.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-brand-accent">
                            <h3 className="font-bold text-xl mb-2 text-brand-black">Revenue-First Approach</h3>
                            <p className="text-gray-600">Whether it’s a luxury real estate launch or an e-commerce scale-up, our creativity is accountable to your P&L.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Services */}
            <Section className="bg-brand-gray">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Our Core Services for the Dubai Market</h2>
                    <p className="text-gray-500">Tailored solutions for the unique demands of the UAE economy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Hybrid Model */}
            <Section bgColor="black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Bridging the Gap: Your Extended Team</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg">
                            We operate with a hybrid model that maximizes efficiency for our GCC clients. With our strategic HQ in India and dedicated focus on the UAE market, we offer:
                        </p>
                        <div className="space-y-6">
                            {bridgingGapPoints.map((point, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                                        <Check className="text-brand-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                                        <p className="text-gray-400 text-sm">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[600px] w-full bg-white/5 rounded-sm overflow-hidden flex items-center justify-center">
                        {/* Abstract Map Representation */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-8 mb-8 opacity-50">
                                <span className="text-6xl font-black">DXB</span>
                                <div className="w-24 h-[1px] bg-white border-t border-dashed"></div>
                                <span className="text-6xl font-black">CCJ</span>
                            </div>
                            <p className="text-brand-accent uppercase tracking-[0.3em] text-xs">Seamless Cross-Border Operation</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Working with Narratv in Dubai</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Ready to Scale in Dubai?</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Don’t settle for average in a world-class city. Let’s build a brand that commands attention.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Book Your Strategy Call</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
