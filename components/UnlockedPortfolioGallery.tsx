'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type PortfolioCategory = {
    group: string;
    name: string;
    client?: string;
    description?: string;
    images: string[];
};

interface UnlockedPortfolioGalleryProps {
    categories: PortfolioCategory[];
}

export default function UnlockedPortfolioGallery({ categories }: UnlockedPortfolioGalleryProps) {
    const [activeFilter, setActiveFilter] = useState('All');

    // Collect unique groups for filter chips
    // Ensure "Selected Works" (if exists) is first, others sorted alphabetically
    const groups = Array.from(new Set(categories.map(c => c.group))).sort((a, b) => {
        if (a === 'Selected Works') return -1;
        if (b === 'Selected Works') return 1;
        return a.localeCompare(b);
    });

    const filters = ['All', ...groups];

    // Determine which categories to show based on group
    const displayedCategories = activeFilter === 'All'
        ? categories
        : categories.filter(c => c.group === activeFilter);

    return (
        <div className="space-y-12">
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 border ${activeFilter === filter
                            ? 'bg-brand-accent border-brand-accent text-white shadow-[0_0_20px_-5px_rgba(243,121,93,0.5)]'
                            : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid Content */}
            <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {displayedCategories.map((category, catIndex) => {
                            // Determine display title
                            let displayTitle = category.name;

                            // If "General" sub-category, usually implies the main bucket for that group
                            if (category.name === 'General') {
                                displayTitle = category.group; // e.g. "Selected Works" or "Campaigns"
                            } else if (activeFilter === 'All') {
                                // In "All" view, give context: "Campaigns: Ramadan"
                                displayTitle = `${category.group}: ${category.name}`;
                            }

                            return (
                                <div key={`${category.group}-${category.name}`} className="mb-16 last:mb-0">
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold flex items-center gap-4 text-white/90 mb-2">
                                            <span className="w-8 h-[1px] bg-brand-accent"></span>
                                            {displayTitle}
                                        </h2>

                                        {/* Metadata Display */}
                                        {(category.client || category.description) && (
                                            <div className="ml-12">
                                                {category.client && (
                                                    <span className="inline-block text-xs font-mono text-brand-accent border border-brand-accent/30 px-2 py-1 rounded mb-2">
                                                        {category.client}
                                                    </span>
                                                )}
                                                {category.description && (
                                                    <p className="text-gray-400 text-sm max-w-2xl font-light leading-relaxed">
                                                        {category.description}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                                        {category.images.map((src, imgIndex) => (
                                            <div
                                                key={`${category.group}-${category.name}-${imgIndex}`}
                                                className="break-inside-avoid relative group rounded-lg overflow-hidden bg-brand-gray"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`${category.name} Item ${imgIndex + 1}`}
                                                    className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">Confidential</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
