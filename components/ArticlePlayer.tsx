'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Settings2, X, Volume2, Check } from 'lucide-react';

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

    // Voice State
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
    const [showSettings, setShowSettings] = useState(false);

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

            const totalChars = chunks.join('').length;
            setDurationEstimate(Math.ceil(totalChars / 14));
        }
    }, [title, textToRead]);

    // Load Voices & Persist
    useEffect(() => {
        if (!supported) return;

        const loadVoices = () => {
            const available = window.speechSynthesis.getVoices().sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (a.lang.startsWith('en') && !b.lang.startsWith('en')) return -1;
                if (!a.lang.startsWith('en') && b.lang.startsWith('en')) return 1;
                return aName.localeCompare(bName);
            });
            setVoices(available);

            // 1. Try saved voice
            const savedName = localStorage.getItem('narratv_voice_name');
            if (savedName) {
                const saved = available.find(v => v.name === savedName);
                if (saved) {
                    setSelectedVoice(saved);
                    return;
                }
            }

            // 2. Default Priority
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

    const handleVoiceSelect = (voice: SpeechSynthesisVoice) => {
        setSelectedVoice(voice);
        localStorage.setItem('narratv_voice_name', voice.name);
        setShowSettings(false); // Close menu

        // Feedback: Speak logic with new voice if playing
        if (isPlaying || isPaused) {
            window.speechSynthesis.cancel();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            speakChunk(currentChunkIndex);
        }
    };

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

        utterance.rate = 0.9 * rate;
        utterance.pitch = 1.05;
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
        <div className="relative mb-8 animate-fade-in-up">
            {/* Main Player Pill */}
            <div className="inline-flex items-center gap-3 bg-brand-black text-white rounded-full px-4 py-2 border border-white/10 shadow-xl backdrop-blur-md relative z-20">

                {/* Play/Pause */}
                <button
                    onClick={handlePlay}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-brand-black hover:scale-105 transition-all"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                {/* Info */}
                <div className="flex flex-col w-32 md:w-48 gap-1">
                    <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-gray-400">
                        <span className="truncate max-w-[80px]">{selectedVoice ? selectedVoice.name.replace('Google', '').replace('English', '') : 'Loading...'}</span>
                        <span>{Math.round((progress / 100) * durationEstimate / 60)}m left</span>
                    </div>
                    <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-brand-accent transition-all duration-300 ease-linear w-full origin-left"
                            style={{ transform: `scaleX(${progress / 100})` }}
                        />
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1 border-l border-white/10 pl-3">
                    <button onClick={handleRewind} className="p-1.5 hover:text-brand-accent transition-colors">
                        <RotateCcw className="w-4 h-4" />
                    </button>
                    <button onClick={handleForward} className="p-1.5 hover:text-brand-accent transition-colors">
                        <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className={`p-1.5 transition-colors ${showSettings ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
                    >
                        <Settings2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Voice Selector Dropdown (Absolute) */}
            {showSettings && (
                <div className="absolute top-full left-0 mt-2 w-72 max-h-80 overflow-y-auto bg-brand-black border border-white/20 rounded-xl shadow-2xl p-2 z-30 custom-scrollbar">
                    <div className="flex justify-between items-center px-3 py-2 border-b border-white/10 mb-2 sticky top-0 bg-brand-black/95 backdrop-blur z-10">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Voice</span>
                        <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-white">
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                    <div className="space-y-1">
                        {voices.map((voice) => (
                            <button
                                key={voice.name}
                                onClick={() => handleVoiceSelect(voice)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between group transition-colors ${selectedVoice?.name === voice.name
                                        ? 'bg-brand-accent text-brand-black font-bold'
                                        : 'text-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                <div className="truncate pr-2">
                                    <span className="block truncate">{voice.name}</span>
                                    <span className={`text-[9px] uppercase tracking-wider ${selectedVoice?.name === voice.name ? 'text-brand-black/70' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                        {voice.lang}
                                    </span>
                                </div>
                                {selectedVoice?.name === voice.name && <Check className="w-3 h-3 flex-shrink-0" />}
                            </button>
                        ))}
                        {voices.length === 0 && (
                            <div className="text-center py-4 text-gray-500 text-xs">
                                Loading voices...
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticlePlayer;
