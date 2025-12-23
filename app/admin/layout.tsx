'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Settings, ExternalLink, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        };

        checkUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    const menuItems = [
        { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { label: 'Create Post', path: '/admin/create', icon: FileText },
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-brand-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verifying Access...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full left-0 top-0 flex flex-col z-50 shadow-sm">
                <div className="p-8 border-b border-gray-100">
                    <Link href="/admin">
                        <h1 className="font-black text-2xl tracking-tighter text-brand-black">
                            NARRATV<span className="text-brand-accent">.</span>
                        </h1>
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Admin Panel</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${isActive
                                    ? 'bg-brand-black text-white shadow-lg shadow-brand-black/20'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-brand-black'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-brand-accent' : 'text-gray-400'}`} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100 space-y-2">
                    <Link
                        href="/insights"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-brand-accent transition-all"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View Website
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-red-400 hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}

