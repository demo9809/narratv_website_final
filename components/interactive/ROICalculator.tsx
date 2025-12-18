'use client';
import React, { useState } from 'react';
import { Button } from '../ui';

export default function ROICalculator() {
    const [traffic, setTraffic] = useState(10000);
    const [conversionRate, setConversionRate] = useState(1.5);
    const [aov, setAov] = useState(2500);

    const calculateRevenue = (cv: number) => {
        return Math.floor(traffic * (cv / 100) * aov);
    };

    const currentRevenue = calculateRevenue(conversionRate);
    const improvedRevenue = calculateRevenue(conversionRate + 1);
    const difference = improvedRevenue - currentRevenue;

    return (
        <div className="bg-brand-black text-white p-8 rounded-sm border border-brand-accent/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Ecommerce ROI Calculator</h3>
            <p className="text-gray-400 mb-8 text-center text-sm">See how a small UX improvement impacts your bottom line.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-accent mb-2">Monthly Traffic</label>
                    <input
                        type="number"
                        value={traffic}
                        onChange={(e) => setTraffic(Number(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 p-3 rounded-sm text-white focus:border-brand-accent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-accent mb-2">Conversion Rate (%)</label>
                    <input
                        type="number"
                        step="0.1"
                        value={conversionRate}
                        onChange={(e) => setConversionRate(Number(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 p-3 rounded-sm text-white focus:border-brand-accent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-accent mb-2">Avg. Order Value (₹)</label>
                    <input
                        type="number"
                        value={aov}
                        onChange={(e) => setAov(Number(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 p-3 rounded-sm text-white focus:border-brand-accent outline-none"
                    />
                </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-sm border-l-4 border-brand-accent">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm">Current Monthly Revenue</p>
                        <p className="text-2xl font-bold">₹{currentRevenue.toLocaleString()}</p>
                    </div>
                    <div className="hidden md:block text-brand-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-brand-accent text-sm font-bold">With just +1% Conversion</p>
                        <p className="text-3xl font-bold text-white">₹{improvedRevenue.toLocaleString()}</p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                    <p className="text-green-400 font-bold">+₹{difference.toLocaleString()} Extra Revenue / Month</p>
                </div>
            </div>

            <div className="text-center mt-8">
                <Button variant="primary" mode="light">Start Optimization Project</Button>
            </div>
        </div>
    );
}
