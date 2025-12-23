'use client';

import React from 'react';
import { Tweet } from 'react-tweet';
import { InstagramEmbed, TikTokEmbed, FacebookEmbed } from 'react-social-media-embed';

interface SocialEmbedProps {
    platform: string;
    url: string;
}

export const SocialEmbed = ({ platform, url }: SocialEmbedProps) => {
    // Helper to extract Tweet ID
    const getTweetId = (url: string) => {
        if (!url) return '';
        const match = url.match(/\/status\/(\d+)/);
        return match ? match[1] : url.split('/').pop() || '';
    };

    if (platform === 'twitter') {
        const id = getTweetId(url);
        if (!id) return null;
        // Tweet component handles its own client-side logic or server-side hydration
        return <Tweet id={id} />;
    }

    if (platform === 'instagram') {
        return <InstagramEmbed url={url} width="100%" />;
    }

    if (platform === 'tiktok') {
        return <TikTokEmbed url={url} width="100%" />;
    }

    if (platform === 'facebook') {
        return <FacebookEmbed url={url} width="100%" />;
    }

    return null;
};
