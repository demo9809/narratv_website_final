'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
    '/assets/clients/logo3-01-1.webp',
    '/assets/clients/logo3-02-1.webp',
    '/assets/clients/logo3-03-1.webp',
    '/assets/clients/logo3-04-1.webp',
    '/assets/clients/logo3-05-1.webp',
    '/assets/clients/logo3-06-2.webp',
    '/assets/clients/logo3-07-1.webp',
    '/assets/clients/logo3-08-1.webp',
    '/assets/clients/logo3-09-1.webp',
    '/assets/clients/true-value.webp',
];

const ClientMarquee = () => {
    return (
        <section className="bg-white py-12 overflow-hidden">
            {/* Unified Container */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-center text-gray-400">
                        Trusted Partners
                    </h3>
                </div>

                {/* Marquee Content - Now constrained by parent container */}
                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex items-center flex-nowrap"
                            animate={{ x: "-50%" }}
                            transition={{
                                ease: "linear",
                                duration: 60,
                                repeat: Infinity,
                            }}
                            initial={{ x: "0%" }}
                            style={{ width: "fit-content" }}
                        >
                            {/* 4 sets of logos to ensure no gaps ever */}
                            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((logo, index) => (
                                <div
                                    key={index}
                                    className="relative w-32 h-16 md:w-40 md:h-24 flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110"
                                >
                                    <img
                                        src={logo}
                                        alt={`Client Logo`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientMarquee;
