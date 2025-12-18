'use client';
import React, { useState } from 'react';
import { Button } from '../ui';

export default function BrandAuditSlider() {
    const [value, setValue] = useState(5);

    const getAuditMessage = (val: number) => {
        if (val < 4) return "Your brand might be confusing customers. Without consistency, you are competing on price alone.";
        if (val < 8) return "You have a decent foundation, but you are leaving money on the table. A strategic refresh could unlock premium pricing.";
        return "Your brand is strong! Now it's about amplification and consistency across new channels.";
    };

    return (
        <div className="bg-brand-cream text-brand-black p-10 rounded-sm shadow-xl">
            <h3 className="text-3xl font-bold mb-2">Self-Audit: Brand Consistency</h3>
            <p className="text-gray-600 mb-8">On a scale of 1-10, how consistent is your brand across all touchpoints (Website, Social, Print)?</p>

            <div className="mb-8">
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mt-2 text-gray-400">
                    <span>Inconsistent</span>
                    <span>Consistent</span>
                </div>
            </div>

            <div className="text-center mb-8">
                <span className="inline-block bg-brand-black text-white text-4xl font-bold px-6 py-2 rounded-sm mb-4">
                    {value}/10
                </span>
                <p className="text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                    {getAuditMessage(value)}
                </p>
            </div>

            <div className="text-center">
                <Button variant="primary" mode="dark">Get a Professional Audit</Button>
            </div>
        </div>
    );
}
