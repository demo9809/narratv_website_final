import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';
import FAQ from '../../components/FAQ';
import { Check, Heart, Stethoscope, User, Activity, ShieldCheck, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Healthcare Digital Strategy & Patient Acquisition | Narratv Space',
    description: 'Building trust in the digital age. Narratv Space provides ethical, high-growth marketing strategies for hospitals, clinics, and wellness resorts in Kerala and the GCC.',
    keywords: ['Healthcare Marketing Agency', 'Medical Tourism Strategy', 'Clinic Branding', 'Patient Acquisition', 'Wellness Resort Marketing', 'Doctor Personal Branding'],
};

export default function HealthcarePage() {
    const specializedSolutions = [
        {
            title: "Medical Tourism Marketing (Kerala Focus)",
            icon: Globe,
            description: "Kerala is the global capital of wellness. We craft international campaigns targeting patients in the GCC, Europe, and the US for Ayurvedic treatments, dental tourism, and elective surgeries. We build the \"Destination Brand\"—convincing patients that the journey is worth the cure."
        },
        {
            title: "Aesthetic & Dental Clinic Branding",
            icon: Stethoscope,
            description: "For private practices in the GCC and India, competition is fierce. We treat your clinic like a luxury brand. We design high-end visual identities, patient experience collateral, and social media feeds that highlight results while maintaining professional dignity."
        },
        {
            title: "Doctor Personal Branding",
            icon: User,
            description: "Patients follow doctors, not just logos. We help leading consultants and surgeons build their personal brand on LinkedIn and Instagram. By establishing you as a thought leader through educational content and case studies, we drive direct appointments to your practice."
        },
        {
            title: "Ethical Patient Acquisition",
            icon: Activity,
            description: "We run compliant, high-performance ad campaigns to drive appointments. Whether it's for LASIK, hair transplants, or routine check-ups, we target intent-based keywords to ensure your booking calendar is full, optimizing for \"Cost Per Appointment\" (CPA)."
        }
    ];

    const whyChoosePoints = [
        {
            title: "Compliance & Ethics First",
            desc: "We understand the boundaries. We know the advertising regulations in the UAE (MOH/DHA) and India. We ensure your marketing is aggressive on growth but safe on compliance."
        },
        {
            title: "The \"Patient Journey\" Approach",
            desc: "We don't just look at clicks; we look at the experience. We audit your digital front desk—from website load speed to WhatsApp response time—to ensure you aren't losing patients due to digital friction."
        },
        {
            title: "Visualizing the Invisible",
            desc: "How do you show \"wellness\"? We use high-end video production and photography to capture the atmosphere of your facility, making potential patients feel safe and welcomed before they arrive."
        }
    ];

    const faqs = [
        {
            question: "How do you handle sensitive patient data?",
            answer: "We prioritize data privacy. Our lead generation systems are secure, and we advise on CRM integrations that comply with local data protection laws. We never use patient images without strict, documented consent."
        },
        {
            question: "Can you help us market Ayurveda to an international audience?",
            answer: "Yes. This is a core strength. We know how to translate traditional Ayurvedic concepts into modern wellness language that appeals to Western and Middle Eastern audiences, focusing on \"holistic health\" and \"preventative care.\""
        },
        {
            question: "Is social media actually useful for serious medical conditions?",
            answer: "Absolutely. It is where patients do their research. We create educational content—\"Explainer Videos\" and \"Doctor Q&As\"—that answer patient fears. This builds immense trust. When they are ready to book, they choose the doctor who educated them."
        },
        {
            question: "Why the name Narratv?",
            answer: "Because every patient has a story, and every treatment is a new chapter. We help you control the Narrative of your practice—shifting the perception from \"clinical and cold\" to \"caring and world-class.\""
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-brand-black text-white pt-40 pb-20 relative overflow-hidden">
                {/* Abstract Background Element - Medical Teal Hint */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#0891B2]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-10">
                        <div className="flex-1">
                            <span className="text-[#0891B2] font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                <Heart size={14} /> Healthcare & Medical Wellness
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                                Where Care Meets <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891B2] to-cyan-300">Connectivity.</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6">
                                Ethical Growth Strategies for Hospitals, Clinics, and Wellness Leaders.
                            </h2>
                            <div className="flex gap-4">
                                <Link href="#contact">
                                    <Button variant="primary" mode="light">Schedule a Strategy Session</Button>
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
                        <h2 className="text-4xl font-bold mb-6 text-brand-black leading-tight">Healthcare marketing is not about selling; it is about building trust.</h2>
                        <div className="w-20 h-1 bg-[#0891B2] mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            In an industry where decisions are life-changing, your digital presence must convey authority, empathy, and expertise. Narratv Space (pronounced Narrative) partners with medical institutions to bridge the gap between world-class care and the patients who need it.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From multi-specialty hospitals in Kochi to premium aesthetic clinics in Dubai, we navigate the complex intersection of medical ethics and digital growth. We help you tell the story of your care.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Specialized Solutions */}
            <Section className="bg-brand-gray">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Specialized Solutions for the Health Sector</h2>
                    <p className="text-gray-500">Ethical strategies for medical growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {specializedSolutions.map((solution, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#0891B2]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0891B2] group-hover:text-white transition-colors">
                                <solution.icon size={24} className="text-[#0891B2] group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why Choose Narratv - Healthcare */}
            <Section bgColor="black">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">Why Healthcare Leaders Choose Narratv</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {whyChoosePoints.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0891B2] to-transparent"></div>
                                <h3 className="text-xl font-bold text-[#0891B2] mt-6 mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">FAQs: Healthcare Marketing with Narratv</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-brand-cream text-center px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-black">Build Trust. Grow Your Practice.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Let’s create a digital presence as world-class as your medical care.</p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark" className="px-12 py-5 text-lg">Schedule a Strategy Session</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
