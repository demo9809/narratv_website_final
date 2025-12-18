'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXTS = [
    {
        highlight: "Global Brands",
        context: "in Kerala.",
        color: "text-brand-accent"
    },
    {
        highlight: "Digital Growth",
        context: "for GCC.",
        color: "text-blue-400"
    },
    {
        highlight: "Strategic Design",
        context: "for Scale.",
        color: "text-green-400"
    },
    {
        highlight: "Visual Stories",
        context: "that Sell.",
        color: "text-purple-400"
    }
];

export default function HeroTextSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[1.2em] overflow-hidden inline-flex flex-col justify-end align-bottom relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="flex items-center gap-3 md:gap-4 whitespace-nowrap"
                >
                    <span className={`font-bold ${TEXTS[index].color}`}>
                        {TEXTS[index].highlight}
                    </span>
                    <span className="text-white">
                        {TEXTS[index].context}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
