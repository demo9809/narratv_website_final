"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle, Phone, Clock } from 'lucide-react';
import { Button } from './ui';
import { COUNTRY_CODES } from '../constants/countries';

interface CallbackRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CallbackRequestModal({ isOpen, onClose }: CallbackRequestModalProps) {
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
                    message: 'User requested a call back via the mobile menu.'
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

            // SUCCESS BLOCK
            setLoading(false);
            setSubmitted(true);

            // Close after showing success message briefly
            setTimeout(() => {
                onClose();
                setSubmitted(false);
                // Reset form
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
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl z-10 overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {submitted ? (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received</h3>
                                <p className="text-gray-500 max-w-xs mx-auto mb-8 font-light">
                                    We'll call you back shortly.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-5 h-5 text-brand-accent" />
                                        <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">Quick Response</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Call Back</h3>
                                    <p className="text-gray-500 text-sm">
                                        Enter your details and our team will contact you within a few minutes.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-brand-black"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <div className="relative flex">
                                            <div className="relative">
                                                <select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    className="appearance-none h-full pl-3 pr-8 bg-gray-50 border border-gray-200 border-r-0 rounded-l-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-sm font-medium text-gray-900 cursor-pointer min-w-[100px]"
                                                >
                                                    {COUNTRY_CODES.map((c, i) => (
                                                        <option key={`${c.country}-${i}`} value={c.code}>
                                                            {c.flag} {c.country} ({c.code})
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="relative flex-1">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="98765 43210"
                                                    className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-brand-black"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email (Optional)
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-brand-black"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        variant="primary"
                                        mode="dark"
                                        disabled={loading}
                                        type="submit"
                                        className="w-full justify-center py-3 !bg-brand-accent !text-white !border-brand-accent hover:!bg-brand-accent/90"
                                    >
                                        {loading ? 'Sending Request...' : 'Call Me Back'}
                                    </Button>

                                    {error && (
                                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium mt-4">
                                            {error}
                                        </div>
                                    )}
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
