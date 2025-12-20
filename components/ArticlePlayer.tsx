'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, X } from 'lucide-react';

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

    // Initialize & Chunk Text
    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            setSupported(true);

            const cleanText = textToRead.replace(/<[^>]*>/g, '');
            // Split by common sentence delimiters
            const rawChunks = cleanText.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [cleanText];

            // Add Title as first chunk, naturally
            const chunks = [
                `${title}.`,
                ...rawChunks.map(c => c.trim()).filter(c => c.length > 0)
            ];
            chunksRef.current = chunks;

            // Rough estimate: 150 words per minute. average 5 chars per word ? ~12 chars per second
            // More simple: chars / 15 (very rough)
            const totalChars = chunks.join('').length;
            setDurationEstimate(Math.ceil(totalChars / 15));
        }
    }, [title, textToRead]);

    // Load Voices (Prioritize Indian English)
    useEffect(() => {
        if (!supported) return;

        const loadVoices = () => {
            const available = window.speechSynthesis.getVoices();
            setVoices(available);

            // Priority: Indian English -> Google US -> Samantha -> Default
            const preferred = available.find(v => v.lang === 'en-IN' || v.name.includes('India')) ||
                available.find(v => v.name === 'Google US English') ||
                available.find(v => v.name === 'Samantha') ||
                available[0];

            if (preferred) setSelectedVoice(preferred);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, [supported]);

    // Clean up
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
            setProgress(100);
            setCurrentChunkIndex(0);
            return;
        }

        const text = chunksRef.current[index];
        const utterance = new SpeechSynthesisUtterance(text);

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.rate = rate; // User controlled speed
        utterance.pitch = 1.0;
        utterance.volume = 1;

        utterance.onend = () => {
            // Small natural pause between sentences
            timeoutRef.current = setTimeout(() => {
                if (isPlaying || (!isPaused && speechRef.current === utterance)) { // Double check state
                    setCurrentChunkIndex(prev => {
                        const next = prev + 1;
                        speakChunk(next);
                        return next;
                    });
                }
            }, 300);
        };

        // Note: Progress is based on Chunk Index for stability
        const total = chunksRef.current.length;
        // Calculate progress based on characters processed so far would be better but chunk index is safer for now
        setProgress((index / total) * 100);

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, [supported, selectedVoice, isPlaying, rate, isPaused]); // Added rate and isPaused

    const handlePlay = () => {
        if (!supported) return;

        if (isPaused) {
            // Resume logic: re-speak current chunk
            setIsPaused(false);
            setIsPlaying(true);
            speakChunk(currentChunkIndex);
            return;
        }

        if (isPlaying) {
            // Pause logic
            window.speechSynthesis.cancel();
            clearTimeout(timeoutRef.current!);
            setIsPaused(true);
            setIsPlaying(false);
            return;
        }

        // Start
        setIsPlaying(true);
        setIsPaused(false);
        speakChunk(currentChunkIndex);
    };

    const handleRewind = () => {
        // Go back ~1-2 chunks (approx 10s usually)
        window.speechSynthesis.cancel();
        clearTimeout(timeoutRef.current!);

        const newIndex = Math.max(0, currentChunkIndex - 1);
        setCurrentChunkIndex(newIndex);

        if (isPlaying) {
            speakChunk(newIndex);
        }
    };

    const handleForward = () => {
        // Skip ahead
        window.speechSynthesis.cancel();
        clearTimeout(timeoutRef.current!);

        const newIndex = Math.min(chunksRef.current.length - 1, currentChunkIndex + 1);
        setCurrentChunkIndex(newIndex);

        if (isPlaying) {
            speakChunk(newIndex);
        }
    };

    const toggleSpeed = () => {
        const newRate = rate === 1 ? 1.5 : (rate === 1.5 ? 2 : 1);
        setRate(newRate);
        // If playing, we need to restart current chunk to apply rate change
        if (isPlaying) {
            window.speechSynthesis.cancel();
            clearTimeout(timeoutRef.current!);
            speakChunk(currentChunkIndex);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!supported) return null;

    return (
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between gap-4">

                {/* Controls: Rewind | Play | Forward */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleRewind}
                        className="text-gray-500 hover:text-brand-black transition-colors"
                        title="Rewind (Previous Sentence)"
                    >
                        <RotateCcw className="w-5 h-5" />
                        <span className="sr-only">-10s</span>
                    </button>

                    <button
                        onClick={handlePlay}
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-all"
                    >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    <button
                        onClick={handleForward}
                        className="text-gray-500 hover:text-brand-black transition-colors"
                        title="Forward (Next Sentence)"
                    >
                        <RotateCw className="w-5 h-5" />
                        <span className="sr-only">+10s</span>
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 flex flex-col gap-1">
                    <div className="relative w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-brand-black transition-all duration-300 ease-linear w-full origin-left"
                            style={{ transform: `scaleX(${progress / 100})` }}
                        />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium font-mono">
                        {/* Simulated time based on progress % of estimate */}
                        <span>{formatTime((progress / 100) * durationEstimate)}</span>
                        <span>{formatTime(durationEstimate)}</span>
                    </div>
                </div>

                {/* Extra: Speed & Volume Icon */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleSpeed}
                        className="text-xs font-bold text-gray-500 hover:text-brand-black w-6 text-right"
                    >
                        {rate}x
                    </button>
                    <Volume2 className="w-4 h-4 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default ArticlePlayer;
