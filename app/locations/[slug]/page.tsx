import React from 'react';
import Link from 'next/link';
import { LOCATIONS } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, MapPin, Globe } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        slug: loc.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) return { title: 'Location Not Found' };

    return {
        title: location.seoTitle,
        description: location.seoDescription,
    };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const location = LOCATIONS.find((l) => l.slug === slug);

    if (!location) return notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Narratv Space ${location.name}`,
        "image": "https://narratv.co/logo.png",
        "url": `https://narratv.co/locations/${location.slug}`,
        "telephone": "+918714531301",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": location.name,
            "addressRegion": location.geoFocus,
            "addressCountry": location.geoFocus === 'GCC' ? 'UAE' : 'IN'
        },
        "description": location.seoDescription
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className="bg-brand-black text-white pt-40 pb-20">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-brand-accent mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Global Site
                    </Link>
                    <div className="flex flex-col md:flex-row items-end gap-8">
                        <div className="flex-1">
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                                <Globe size={14} /> Narratv Space {location.name}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
                                {location.heroHeadline}
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                {location.heroSubhead}
                            </p>
                        </div>
                        <div>
                            <Link href="#contact">
                                <Button variant="primary" mode="light" className="whitespace-nowrap">
                                    {location.ctaText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-brand-black">Why {location.name}?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {location.description}
                        </p>
                        <div className="bg-brand-cream p-8 rounded-sm">
                            <h3 className="font-bold mb-6">Regional Advantages</h3>
                            <ul className="space-y-4">
                                {location.whyUsPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-medium text-gray-800">
                                        <Check className="text-brand-accent" size={20} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="h-full">
                        {/* Map or Image Placeholder */}
                        <div className="bg-gray-100 rounded-sm overflow-hidden h-full min-h-[400px] relative">
                            {location.mapEmbedUrl ? (
                                <iframe
                                    src={location.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-400 p-8 text-center bg-gray-900">
                                    <Globe size={64} className="mb-4 opacity-50" />
                                    <p>{location.geoFocus === 'Global' ? 'Global Operations Center' : 'Regional Hub'}</p>
                                </div>
                            )}

                            {location.officeAddress && (
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-sm shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Office Address</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{location.officeAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section id="contact" className="bg-brand-gray py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's build your legacy in {location.name}.</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="primary" mode="dark">Start a Project</Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" mode="dark">Explore Services</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
