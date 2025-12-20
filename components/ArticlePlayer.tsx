'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Square, Volume2, Settings2 } from 'lucide-react';

interface ArticlePlayerProps {
    title: string;
    textToRead: string;
}

const ArticlePlayer: React.FC<ArticlePlayerProps> = ({ title, textToRead }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [supported, setSupported] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentChunk, setCurrentChunk] = useState(0);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
    const chunksRef = useRef<string[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize Support & Parse Text
    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            setSupported(true);

            // Prepare chunks (split by punctuation for natural pauses)
            // We explicitly look for periods, question marks, exclamation marks followed by space or newline
            const cleanText = textToRead.replace(/<[^>]*>/g, '');
            const rawChunks = cleanText.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [cleanText];

            // Clean up chunks and add the title as the first chunk
            chunksRef.current = [
                `Title: ${title}.`,
                ...rawChunks.map(c => c.trim()).filter(c => c.length > 0)
            ];
        }
    }, [title, textToRead]);

    // Load Voices
    useEffect(() => {
        if (!supported) return;

        const loadVoices = () => {
            const available = window.speechSynthesis.getVoices();
            setVoices(available);

            // Smart Voice Selection (Priority: Google US -> Samantha -> Microsoft Zira -> First English)
            const preferred = available.find(v => v.name === 'Google US English') ||
                available.find(v => v.name === 'Samantha') ||
                available.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
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

    // Cleanup
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
            setCurrentChunk(0);
            return;
        }

        const text = chunksRef.current[index];
        const utterance = new SpeechSynthesisUtterance(text);

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // "Article" feel settings
        utterance.rate = 0.95; // Slightly slower for comprehension
        utterance.pitch = 1.0;
        utterance.volume = 1;

        utterance.onend = () => {
            // Natural pause between chunks (sentences)
            timeoutRef.current = setTimeout(() => {
                if (isPlaying) { // Only continue if still playing
                    setCurrentChunk(prev => prev + 1);
                    speakChunk(index + 1);
                }
            }, 400); // 400ms pause
        };

        // Update Progress
        const total = chunksRef.current.length;
        setProgress((index / total) * 100);

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, [supported, selectedVoice, isPlaying]);

    const handlePlay = () => {
        if (!supported) return;

        if (isPaused) {
            // If paused, we actually just resume processing from current chunk
            setIsPaused(false);
            setIsPlaying(true);
            speakChunk(currentChunk);
            return;
        }

        if (isPlaying) {
            // Pause behavior: Cancel current speech but keep index
            window.speechSynthesis.cancel();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsPlaying(false);
            setIsPaused(true);
            return;
        }

        // Start fresh
        setIsPlaying(true);
        setIsPaused(false);
        setCurrentChunk(0);
        speakChunk(0);
    };

    const handleStop = () => {
        if (!supported) return;
        window.speechSynthesis.cancel();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
        setCurrentChunk(0);
    };

    const changeVoice = () => {
        // Loop through available English voices for simplicity if user clicks (hidden feature for now)
        const enVoices = voices.filter(v => v.lang.startsWith('en'));
        const idx = enVoices.findIndex(v => v === selectedVoice);
        const next = enVoices[(idx + 1) % enVoices.length];
        setSelectedVoice(next);

        // Feedback
        window.speechSynthesis.cancel();
        if (isPlaying) {
            // Restart current chunk with new voice
            speakChunk(currentChunk);
        }
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

            <div className="flex flex-col min-w-[120px]">
                <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                        <Volume2 className="w-3 h-3" />
                        {isPlaying ? 'Now Playing' : isPaused ? 'Paused' : 'Listen'}
                    </span>
                    {voices.length > 0 && (isPlaying || isPaused) && (
                        <button onClick={changeVoice} className="text-[10px] text-brand-accent/80 hover:text-brand-accent uppercase tracking-widest truncate max-w-[80px]" title="Change Voice">
                            {selectedVoice?.name.slice(0, 10)}...
                        </button>
                    )}
                </div>

                {(isPlaying || isPaused) && (
                    <div className="w-full h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
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
