'use client';

import React, { useEffect, useState } from 'react';
import { Link as LinkIcon, List } from 'lucide-react';

interface TOCProps {
    blocks: any[];
}

export default function TableOfContents({ blocks }: TOCProps) {
    const [activeId, setActiveId] = useState<string>('');

    // Extract headings
    const headings = blocks.filter(b => b.type === 'heading' || b.heading); // Support new blocks and old sections

    if (headings.length === 0) return null;

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Adjust for fixed header
            window.scrollBy(0, -100);
        }
    };

    // Generate IDs for headings if they don't have them
    // Note: ideally we do this on the server/render side, but for now we'll match by content string match
    // A robust solution would be to add IDs to the H tags in the main render loop.
    // Let's assume the main render loop adds IDs. We need to sync that update.

    return (
        <div className="hidden lg:block">
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                <List className="w-4 h-4" /> Contents
            </h3>
            <ul className="space-y-4 border-l-2 border-gray-100">
                {headings.map((heading, idx) => {
                    const text = heading.content || heading.heading;
                    const id = `heading-${idx}`;

                    return (
                        <li key={idx} className="-ml-[2px]">
                            <button
                                onClick={() => scrollToHeading(id)}
                                className="text-sm text-gray-500 hover:text-brand-black hover:border-brand-black border-l-2 border-transparent pl-4 transition-all text-left block w-full py-1 leading-relaxed"
                            >
                                {text}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
