'use client';

import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-6 right-6 z-[100] animate-in slide-in-from-top-5 fade-in duration-300">
            <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${type === 'success'
                    ? 'bg-white border-green-100 text-green-800'
                    : 'bg-white border-red-100 text-red-800'
                }`}>
                {type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                )}

                <p className="font-bold text-sm">{message}</p>

                <button onClick={onClose} className="ml-4 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
