"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui';
import { CONTACT_DETAILS } from '../types';
import { COUNTRY_CODES } from '../constants/countries';

interface ContactSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactSidebar({ isOpen, onClose }: ContactSidebarProps) {
    const [step, setStep] = useState<'info' | 'form'>('info'); // 'info' shows huge phone number + CTA to form. 'form' shows the inputs.
    // Actually, user said "side bar with form AND phone number". So let's show both.

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone: `${countryCode} ${phone}`,
                    formType: 'callback',
                    message: 'User requested a call back via Desktop Sidebar.'
                }),
            });

            const responseText = await response.text();
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                console.error('JSON Parse Error:', e);
            }

            if (!response.ok) {
                const errorMsg = data?.errors?.[0]?.error || data?.error || 'Failed to submit request';
                throw new Error(errorMsg);
            }

            setLoading(false);
            setSubmitted(true);

            setTimeout(() => {
                onClose();
                setSubmitted(false);
                setName('');
                setPhone('');
                setEmail('');
                setError('');
            }, 3000);

        } catch (error: any) {
            console.error('Submission error:', error);
            setError(error.message || 'An unexpected error occurred.');
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl flex flex-col overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-brand-accent rounded-sm"></div>
                                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Contact Us</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1">
                            {/* Direct Contact Section */}
                            <div className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Speak to a Strategist</h3>
                                <a
                                    href={`tel:${CONTACT_DETAILS.phone}`}
                                    className="flex items-center gap-4 text-3xl md:text-3xl font-black text-brand-black hover:text-brand-accent transition-colors mb-3 tracking-tighter"
                                >
                                    {CONTACT_DETAILS.phone}
                                </a>
                                <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Available 9am - 6pm IST
                                </p>
                            </div>

                            {/* Callback Form */}
                            <div className="relative">
                                {submitted ? (
                                    <div className="text-center py-10 bg-green-50 rounded-2xl border border-green-100">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                        >
                                            <CheckCircle className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received</h3>
                                        <p className="text-gray-600 px-4">
                                            We'll call you back shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Call</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Prefer us to call you? Enter your details and we'll be in touch within minutes.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="group">
                                                <input
                                                    type="text"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Your Name"
                                                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-brand-accent outline-none transition-all text-brand-black placeholder-gray-400 font-medium text-lg"
                                                />
                                            </div>

                                            <div className="group flex gap-4">
                                                <div className="w-24 border-b border-gray-200">
                                                    <select
                                                        value={countryCode}
                                                        onChange={(e) => setCountryCode(e.target.value)}
                                                        className="w-full h-full bg-transparent border-none outline-none text-base font-bold text-brand-black cursor-pointer appearance-none py-3"
                                                    >
                                                        {COUNTRY_CODES.map((c, i) => (
                                                            <option key={`${c.country}-${i}`} value={c.code} className="text-black">
                                                                {c.flag} {c.code}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Phone Number"
                                                    className="flex-1 px-0 py-3 bg-transparent border-b border-gray-200 focus:border-brand-accent outline-none transition-all text-brand-black placeholder-gray-400 font-medium text-lg"
                                                />
                                            </div>

                                            <div className="group">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Business Email (Optional)"
                                                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-brand-accent outline-none transition-all text-brand-black placeholder-gray-400 font-medium text-lg"
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <Button
                                                    variant="primary"
                                                    mode="dark"
                                                    disabled={loading}
                                                    type="submit"
                                                    className="w-full justify-center py-4 !bg-brand-black !text-white hover:!bg-brand-accent transition-colors flex items-center gap-2 group text-base"
                                                >
                                                    {loading ? 'Sending Request...' : 'Call Me Now'}
                                                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                                </Button>
                                            </div>


                                            {error && (
                                                <div className="bg-red-50 text-red-600 text-xs p-3 rounded text-center font-medium">
                                                    {error}
                                                </div>
                                            )}
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                            <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center gap-3 text-gray-500 hover:text-brand-black transition-colors text-sm font-medium">
                                <Mail className="w-4 h-4" />
                                {CONTACT_DETAILS.email}
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
