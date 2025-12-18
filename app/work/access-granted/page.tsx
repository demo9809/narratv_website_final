import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui';
import UnlockedPortfolioGallery from '@/components/UnlockedPortfolioGallery';

export const metadata = {
    title: 'Full Portfolio Access | Narratv Space',
    description: 'Confidential case studies and project archives.',
    robots: 'noindex, nofollow', // Ensure this page isn't indexed
};

export default function AccessGrantedPage() {
    // directory path
    const portfolioDir = path.join(process.cwd(), 'public/assets/portfolio');

    // Data structures
    type PortfolioCategory = {
        group: string;
        name: string;
        client?: string;
        description?: string;
        images: string[]
    };
    const categories: PortfolioCategory[] = [];

    // Helper: Format names (e.g. "branding-design" -> "Branding Design")
    const formatName = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // Helper: Is Image?
    const isImage = (file: string) => /\.(webp|png|jpg|jpeg)$/i.test(file);

    // Helper: Read Metadata
    const getMetadata = (dirPath: string) => {
        try {
            const infoPath = path.join(dirPath, 'info.json');
            if (fs.existsSync(infoPath)) {
                const data = fs.readFileSync(infoPath, 'utf-8');
                return JSON.parse(data);
            }
        } catch (e) {
            console.error('Error reading info.json', e);
        }
        return {};
    };

    try {
        if (fs.existsSync(portfolioDir)) {
            // 1. Scan Root for "Selected Works"
            const rootItems = fs.readdirSync(portfolioDir);
            const rootImages = rootItems
                .filter(item => {
                    const itemPath = path.join(portfolioDir, item);
                    return fs.statSync(itemPath).isFile() && isImage(item);
                })
                .map(file => `/assets/portfolio/${file}`);

            if (rootImages.length > 0) {
                const meta = getMetadata(portfolioDir);
                categories.push({
                    group: 'Selected Works',
                    name: 'General',
                    images: rootImages,
                    client: meta.client,
                    description: meta.description
                });
            }

            // 2. Scan Level 1 Folders (e.g. "Campaigns", "Branding")
            rootItems.forEach(folder => {
                const folderPath = path.join(portfolioDir, folder);
                if (fs.statSync(folderPath).isDirectory()) {
                    const groupName = formatName(folder);
                    const subItems = fs.readdirSync(folderPath);

                    // 2a. Files inside Level 1 (e.g. Campaigns/main.jpg) -> Group: Campaigns, Name: General
                    const directImages = subItems
                        .filter(item => {
                            const itemPath = path.join(folderPath, item);
                            return fs.statSync(itemPath).isFile() && isImage(item);
                        })
                        .map(file => `/assets/portfolio/${folder}/${file}`);

                    if (directImages.length > 0) {
                        const meta = getMetadata(folderPath);
                        categories.push({
                            group: groupName,
                            name: 'General',
                            images: directImages,
                            client: meta.client,
                            description: meta.description
                        });
                    }

                    // 2b. Folders inside Level 1 (e.g. Campaigns/Ramadan) -> Group: Campaigns, Name: Ramadan
                    subItems.forEach(subFolder => {
                        const subFolderPath = path.join(folderPath, subFolder);
                        if (fs.statSync(subFolderPath).isDirectory()) {
                            const subImages = fs.readdirSync(subFolderPath)
                                .filter(file => isImage(file))
                                .map(file => `/assets/portfolio/${folder}/${subFolder}/${file}`);

                            if (subImages.length > 0) {
                                const meta = getMetadata(subFolderPath);
                                categories.push({
                                    group: groupName,
                                    name: formatName(subFolder),
                                    images: subImages,
                                    client: meta.client,
                                    description: meta.description
                                });
                            }
                        }
                    });
                }
            });
        }
    } catch (err) {
        console.error('Error reading portfolio directory:', err);
    }

    return (
        <main className="bg-brand-black min-h-screen text-white pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-10">
                    <div>
                        <Link href="/" className="inline-flex items-center text-brand-accent mb-6 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                            Access <span className="text-brand-accent">Granted.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl font-light">
                            Welcome to our complete archive. These projects represent our specific strategies for growth, branding, and conversion.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Session Active
                    </div>
                </div>

                {/* Client Side Gallery with Filtering */}
                <UnlockedPortfolioGallery categories={categories} />

                {/* Footer Note */}
                <div className="mt-20 text-center border-t border-white/10 pt-10">
                    <p className="text-gray-500 text-sm mb-6">
                        Everything you see here is the intellectual property of Narratv Space and our partners. <br /> Please do not distribute without permission.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" mode="dark">Start Your Project</Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
