"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === idx
                            ? 'border-brand-black/10 bg-white shadow-lg'
                            : 'border-transparent bg-gray-50 hover:bg-white hover:shadow-sm'
                        }`}
                >
                    <button
                        onClick={() => toggleIndex(idx)}
                        className="w-full flex justify-between items-center p-6 text-left group"
                    >
                        <span className={`font-bold text-lg pr-8 transition-colors ${activeIndex === idx ? 'text-brand-accent' : 'text-brand-black group-hover:text-brand-accent'
                            }`}>
                            {item.question}
                        </span>
                        <span className={`shrink-0 p-2 rounded-full transition-colors ${activeIndex === idx
                                ? 'bg-brand-accent text-white'
                                : 'bg-gray-200 text-gray-500 group-hover:bg-brand-accent/10 group-hover:text-brand-accent'
                            }`}>
                            {activeIndex === idx ? (
                                <Minus className="w-4 h-4" />
                            ) : (
                                <Plus className="w-4 h-4" />
                            )}
                        </span>
                    </button>

                    <AnimatePresence>
                        {activeIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="h-px w-full bg-gray-100 mb-4" />
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
