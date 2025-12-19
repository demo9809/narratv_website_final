"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle, Phone } from 'lucide-react';
import { Button } from './ui';
import { COUNTRY_CODES } from '../constants/countries';
import { sanitizePhoneNumber, isValidPhonePattern } from '../utils/phone-validation';



interface PortfolioRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

export default function PortfolioRequestModal({ isOpen, onClose, onSuccess }: PortfolioRequestModalProps) {
    // ... (state vars same)
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(4);



    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        // ... (prev code same)
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!isValidPhonePattern(phone)) {
            setError('Please enter a valid phone number.');
            setLoading(false);
            return;
        }

        try {
            // ... (api call same)
            const response = await fetch('/api/send-portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, company, phone: `${countryCode} ${phone}` }),
            });
            // ... (rest of error handling same)
            let data;
            const responseText = await response.text();

            try {
                data = JSON.parse(responseText);
            } catch (e) {
                // ...
            }

            if (!response.ok) {
                // ...
                setLoading(false);
                return;
            }
        } catch (error: any) {
            // ...
            setLoading(false);
            return;
        }

        // SUCCESS BLOCK
        setLoading(false);
        setSubmitted(true);

        // IMMEDIATE PERSISTENCE
        if (typeof window !== 'undefined') {
            localStorage.setItem('portfolio_access', 'true');
        }
        if (onSuccess) onSuccess();

        // Redirect after showing success message briefly
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            router.push('/work/access-granted');

            // Reset...
            setName('');
            setCompany('');
            setPhone('');
            setEmail('');
            setError('');
        }, 3000);
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
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Access Granted</h3>
                                <p className="text-gray-500 max-w-xs mx-auto mb-8 font-light">
                                    Redirecting to private portfolio in <span className="font-bold text-brand-black">{countdown}s</span>...
                                </p>
                                <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "100%" }}
                                        animate={{ width: "0%" }}
                                        transition={{ duration: 4, ease: "linear" }}
                                        className="h-full bg-brand-accent"
                                    />
                                </div>
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
                                                {/* Custom Arrow */}
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                            <div className="relative flex-1">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => {
                                                        const val = sanitizePhoneNumber(e.target.value);
                                                        if (val.length <= 15) setPhone(val);
                                                    }}
                                                    placeholder="98765 43210"
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
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
