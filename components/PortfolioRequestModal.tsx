"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle, Phone } from 'lucide-react';
import { Button } from './ui';

interface PortfolioRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PortfolioRequestModal({ isOpen, onClose }: PortfolioRequestModalProps) {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/send-portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, company, phone }), // Send full data
            });

            let data;
            const responseText = await response.text();

            try {
                data = JSON.parse(responseText);
            } catch (e) {
                console.error('JSON Parse Error:', e);
                // Show raw server error (potentially HTML)
                throw new Error(`Server Error: ${responseText.slice(0, 100)}...`);
            }

            if (!response.ok) {
                // If API returns error
                let errorMessage = 'Failed to send request.';
                if (data?.errors && Array.isArray(data.errors)) {
                    errorMessage = data.errors.map((e: any) => `${e.type}: ${e.error}`).join(' | ');
                } else if (data?.error) {
                    errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
                }

                setError(errorMessage);
                setLoading(false);
                return;
            }

        } catch (error: any) {
            console.error('Failed to send email:', error);
            setError(`Debug: ${error.message || String(error)}`);
            setLoading(false);
            return;
        }

        // Simulate API delay for UX (minimum 1.5s) if fast, but we essentially wait for API above
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);


            // Redirect after showing success message briefly
            setTimeout(() => {
                // Set persistence flag so user doesn't need to request again
                if (typeof window !== 'undefined') {
                    localStorage.setItem('portfolio_access', 'true');
                }

                onClose();
                setSubmitted(false);
                router.push('/work/access-granted');


                // Reset form
                setName('');
                setCompany('');
                setPhone('');
                setEmail('');
                setError('');
            }, 3000); // Increased delay so user reads message
        }, 500);
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
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {submitted ? (
                            <div className="text-center py-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <CheckCircle className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
                                <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                                    We have received your details. Our team will share the confidential portfolio access via <strong className="text-brand-black">WhatsApp</strong> or <strong className="text-brand-black">Email</strong> shortly.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-6">
                                    <span className="text-brand-accent font-bold text-xs tracking-widest uppercase block mb-2">Private Access</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Full Portfolio</h3>
                                    <p className="text-gray-500 text-sm">
                                        Enter your work email to receive a curated PDF of our latest case studies and agency credentials.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
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
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                required
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="Acme Inc."
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone / WhatsApp
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+91 98765 43210"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Business Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
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
                                        {loading ? 'Sending Request...' : 'Get Portfolio Access'}
                                    </Button>

                                    {error && (
                                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium mt-4">
                                            {error}
                                        </div>
                                    )}

                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        Protected by NDA. For client confidentiality, some work is shared only upon request.
                                    </p>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
