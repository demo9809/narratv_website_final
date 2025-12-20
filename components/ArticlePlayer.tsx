'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2 } from 'lucide-react';

interface ArticlePlayerProps {
    title: string;
    textToRead: string;
}

const ArticlePlayer: React.FC<ArticlePlayerProps> = ({ title, textToRead }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [supported, setSupported] = useState(false);
    const [progress, setProgress] = useState(0); // Primitive progress tracking
    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            setSupported(true);
        }
    }, []);

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const handlePlay = () => {
        if (!supported) return;

        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            return;
        }

        if (isPlaying) {
            window.speechSynthesis.pause();
            setIsPaused(true);
            setIsPlaying(false);
            return;
        }

        // Start new
        const cleanText = textToRead.replace(/<[^>]*>/g, ''); // Strip HTML tags primarily
        const utterance = new SpeechSynthesisUtterance(`${title}. ${cleanText}`);

        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
            setProgress(0);
        };

        utterance.onboundary = (event) => {
            // Very basic progress estimation based on char index
            const length = title.length + cleanText.length;
            const current = event.charIndex;
            setProgress(Math.min((current / length) * 100, 100));
        };

        speechRef.current = utterance;
        window.speechSynthesis.cancel(); // Cancel any previous
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
    };

    const handleStop = () => {
        if (!supported) return;
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
    };

    if (!supported) return null;

    return (
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 w-fit">
            <div className="flex items-center gap-2">
                <button
                    onClick={handlePlay}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-accent text-brand-black hover:scale-105 transition-transform"
                    aria-label={isPlaying ? "Pause Article" : "Listen to Article"}
                >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                {(isPlaying || isPaused) && (
                    <button
                        onClick={handleStop}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                        aria-label="Stop Article"
                    >
                        <Square className="w-3 h-3 fill-current" />
                    </button>
                )}
            </div>

            <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    {isPlaying ? 'Now Playing' : isPaused ? 'Paused' : 'Listen to Article'}
                </span>
                {(isPlaying || isPaused) && (
                    <div className="w-20 h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                        <div
                            className="h-full bg-brand-accent transition-all duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticlePlayer;
