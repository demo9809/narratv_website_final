'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white relative overflow-hidden font-sans">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Light Leak */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                {/* Bottom Left Light Leak */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container px-6 text-center relative z-10 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mb-10 flex justify-center"
                >
                    <div className="relative group">
                        {/* Large Emoji Display */}
                        <div className="text-9xl filter drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-default">
                            😔
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
                        404 error!
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-12 font-light">
                        Sorry, there’s nothing here.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="group w-full sm:w-auto px-8 py-4 bg-white text-brand-black font-bold rounded-lg hover:bg-brand-gray transition-all flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Footer Technical details */}
            <div className="absolute bottom-8 left-0 w-full text-center">
                <p className="text-[10px] text-gray-700 font-mono tracking-widest uppercase opacity-50">
                    ERR_NOT_FOUND // NARRATV_SPACE
                </p>
            </div>
        </div>
    );
}
