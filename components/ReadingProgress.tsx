'use client';

import React, { useEffect, useState } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight > 0) {
                const percentage = (scrollTop / docHeight) * 100;
                setProgress(Math.min(100, Math.max(0, percentage)));
            }
        };

        window.addEventListener('scroll', updateProgress);
        // Initial call
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div
                className="h-full bg-brand-accent transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
