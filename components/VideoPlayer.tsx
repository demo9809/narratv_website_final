'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
    url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Helpers to extract ID and Thumbnail
    const getVideoId = (url: string) => {
        if (!url) return '';
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            if (url.includes('v=')) return url.split('v=')[1].split('&')[0];
            return url.split('/').pop() || '';
        }
        return '';
    };

    const getThumbnailUrl = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

    const getEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&controls=0&showinfo=0&iv_load_policy=3`;

    const videoId = getVideoId(url);
    const thumbnailUrl = getThumbnailUrl(videoId);
    const embedUrl = getEmbedUrl(videoId);

    // If not YouTube, fallback to basic iframe (or extend for Vimeo later)
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');

    if (!isYouTube) {
        return (
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                <iframe
                    src={url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black relative group my-10">
            {!isPlaying ? (
                <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
                    aria-label="Play Video"
                >
                    {/* Thumbnail Image */}
                    <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 ease-out"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Play Button */}
                    <div className="absolute w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-accent group-hover:text-white">
                        <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                </button>
            ) : (
                <div className="relative w-full h-full group">
                    <iframe
                        src={embedUrl}
                        className="w-full h-full pointer-events-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    {/* Transparent overlay to capture clicks and prevent hover passing to YouTube */}
                    <button
                        onClick={() => setIsPlaying(false)}
                        className="absolute inset-0 w-full h-full cursor-pointer z-10 focus:outline-none"
                        title="Click to Stop"
                        aria-label="Stop Video"
                    />
                </div>
            )}
        </div>
    );
}
