'use client';

import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui';
import { Lock } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Force refresh to update auth state in other components
            router.refresh();
            router.push('/admin');
        } catch (error: any) {
            alert('Login Failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-black tracking-tight text-gray-900">Admin Login</h1>
                    <p className="text-gray-500 text-sm mt-2">Enter your credentials to access the studio.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none transition-colors"
                            placeholder="you@narratv.space"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full text-lg py-4">
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-xs text-gray-400">
                    <p>Protected Area. Authorized Personnel Only.</p>
                </div>
            </div>
        </div>
    );
}
