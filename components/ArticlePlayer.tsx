'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Settings2, X, Volume2 } from 'lucide-react';

interface ArticlePlayerProps {
    title: string;
    textToRead: string;
}

const ArticlePlayer: React.FC<ArticlePlayerProps> = ({ title, textToRead }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [supported, setSupported] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
    const [rate, setRate] = useState(1);
    const [durationEstimate, setDurationEstimate] = useState(0);

    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
    const chunksRef = useRef<string[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isPlayingRef = useRef(false);

    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            setSupported(true);

            const cleanText = textToRead.replace(/<[^>]*>/g, '');
            const rawChunks = cleanText.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [cleanText];

            const chunks = [
                `${title}.`,
                ...rawChunks.map(c => c.trim()).filter(c => c.length > 0)
            ];
            chunksRef.current = chunks;

            // Roughly 14 chars per second at 0.9 rate
            const totalChars = chunks.join('').length;
            setDurationEstimate(Math.ceil(totalChars / 14));
        }
    }, [title, textToRead]);

    // Load Voices (Premium US)
    useEffect(() => {
        if (!supported) return;

        const loadVoices = () => {
            const available = window.speechSynthesis.getVoices();
            setVoices(available);

            const preferred = available.find(v => v.name === 'Google US English') ||
                available.find(v => v.name === 'Samantha') ||
                available.find(v => v.lang === 'en-US') ||
                available[0];

            if (preferred) setSelectedVoice(preferred);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, [supported]);

    useEffect(() => {
        return () => {
            if (supported) {
                window.speechSynthesis.cancel();
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }
        };
    }, [supported]);

    const speakChunk = useCallback((index: number) => {
        if (index >= chunksRef.current.length || !supported) {
            setIsPlaying(false);
            setIsPaused(false);
            isPlayingRef.current = false;
            setProgress(100);
            setCurrentChunkIndex(0);
            return;
        }

        window.speechSynthesis.cancel();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const text = chunksRef.current[index];
        const utterance = new SpeechSynthesisUtterance(text);

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // Tuned for less robotic feel
        utterance.rate = 0.9 * rate; // Base 0.9, multiplied by user preference
        utterance.pitch = 1.05; // Slightly higher pitch often sounds clearer
        utterance.volume = 1;

        utterance.onend = () => {
            timeoutRef.current = setTimeout(() => {
                if (isPlayingRef.current) {
                    const nextIndex = index + 1;
                    setCurrentChunkIndex(nextIndex);
                    speakChunk(nextIndex);
                }
            }, 400);
        };

        const total = chunksRef.current.length;
        setProgress((index / total) * 100);

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, [supported, selectedVoice, rate]);

    const handlePlay = () => {
        if (!supported) return;

        if (isPaused) {
            setIsPaused(false);
            setIsPlaying(true);
            speakChunk(currentChunkIndex);
            return;
        }

        if (isPlaying) {
            window.speechSynthesis.cancel();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsPaused(true);
            setIsPlaying(false);
            return;
        }

        setIsPlaying(true);
        setIsPaused(false);
        speakChunk(currentChunkIndex);
    };

    const handleRewind = () => {
        const newIndex = Math.max(0, currentChunkIndex - 1);
        setCurrentChunkIndex(newIndex);
        if (isPlaying) {
            speakChunk(newIndex);
        }
    };

    const handleForward = () => {
        const newIndex = Math.min(chunksRef.current.length - 1, currentChunkIndex + 1);
        setCurrentChunkIndex(newIndex);
        if (isPlaying) {
            speakChunk(newIndex);
        }
    };

    const toggleSpeed = () => {
        const newRate = rate === 1 ? 1.5 : (rate === 1.5 ? 2 : 1);
        setRate(newRate);
        if (isPlaying) {
            speakChunk(currentChunkIndex);
        }
    };

    if (!supported) return null;

    return (
        // Compact Dark Pill Design
        <div className="inline-flex items-center gap-3 bg-brand-black text-white rounded-full px-4 py-2 border border-white/10 shadow-xl backdrop-blur-md mb-8 animate-fade-in-up">

            {/* Play/Pause (Primary) */}
            <button
                onClick={handlePlay}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-brand-black hover:scale-105 transition-all"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            {/* Progress & Label */}
            <div className="flex flex-col w-32 md:w-48 gap-1">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-gray-400">
                    <span>{isPlaying ? 'Now Playing' : 'Listen to Article'}</span>
                    <span>{Math.round((progress / 100) * durationEstimate / 60)}m left</span>
                </div>
                <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-brand-accent transition-all duration-300 ease-linear w-full origin-left"
                        style={{ transform: `scaleX(${progress / 100})` }}
                    />
                </div>
            </div>

            {/* Secondary Controls (Hidden on very small screens if needed, but useful) */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-3">
                <button onClick={handleRewind} className="p-1.5 hover:text-brand-accent transition-colors" title="-10s">
                    <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={handleForward} className="p-1.5 hover:text-brand-accent transition-colors" title="+10s">
                    <RotateCw className="w-4 h-4" />
                </button>
                <button onClick={toggleSpeed} className="ml-1 text-[10px] font-bold bg-white/10 px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors w-8 text-center">
                    {rate}x
                </button>
            </div>

        </div>
    );
};

export default ArticlePlayer;
