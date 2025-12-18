'use client';
import React from 'react';
import { Button } from '../ui';
import { ArrowRight, Gauge, Check } from 'lucide-react';

export default function SpeedTestCTA() {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 md:p-12 rounded-sm border border-gray-800 relative overflow-hidden group">

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <Gauge size={14} />
                        <span>Performance Guarantee</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Is your website losing customers?</h3>
                    <p className="text-gray-400 mb-6">
                        Every second of load time drops conversion by 7%. We build sites that score 90+ on Google PageSpeed.
                    </p>
                    <div className="space-y-2 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={14} /></div>
                            <span className="text-sm font-medium">Sub-second load times</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={14} /></div>
                            <span className="text-sm font-medium">SEO Optimized Structure</span>
                        </div>
                    </div>

                    <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" mode="dark" className="group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                            Check Your Speed <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>

                <div className="hidden md:flex justify-end">
                    <div className="w-64 h-64 relative">
                        {/* Simulated Speedometer UI */}
                        <svg viewBox="0 0 100 50" className="w-full h-full text-gray-700">
                            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="10" className="drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                        </svg>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            <span className="text-5xl font-bold text-white block">98</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Score</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
