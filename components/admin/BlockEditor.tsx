'use client';

import React from 'react';
import { Trash2, MoveUp, MoveDown, Plus, Image as ImageIcon, Type, Video, Link as LinkIcon, Heading, Megaphone } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { supabase } from '../../lib/supabaseClient';

export type BlockType = 'heading' | 'text' | 'image' | 'video' | 'embed' | 'cta';

export interface ContentBlock {
    id: string;
    type: BlockType;
    content?: string;
    level?: 'h1' | 'h2' | 'h3';
    url?: string;
    caption?: string;
    platform?: 'youtube' | 'twitter' | 'instagram' | 'tiktok' | 'facebook';
    // CTA specific
    buttonText?: string;
    style?: 'light' | 'dark';
}

interface BlockEditorProps {
    blocks: ContentBlock[];
    setBlocks: (blocks: ContentBlock[]) => void;
}

export default function BlockEditor({ blocks, setBlocks }: BlockEditorProps) {

    const addBlock = (type: BlockType, index?: number) => {
        const newBlock: ContentBlock = {
            id: crypto.randomUUID(),
            type,
            content: '',
            level: 'h2', // Default for headings
            style: 'light' // Default for CTA
        };

        if (index !== undefined) {
            const newBlocks = [...blocks];
            newBlocks.splice(index + 1, 0, newBlock);
            setBlocks(newBlocks);
        } else {
            setBlocks([...blocks, newBlock]);
        }
    };

    const removeBlock = (id: string) => {
        setBlocks(blocks.filter(b => b.id !== id));
    };

    const moveBlock = (index: number, direction: 'up' | 'down') => {
        const newBlocks = [...blocks];
        if (direction === 'up' && index > 0) {
            [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
        } else if (direction === 'down' && index < newBlocks.length - 1) {
            [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
        }
        setBlocks(newBlocks);
    };

    const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
        setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b));
    };

    const handleImageUpload = async (file: File, blockId: string) => {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `block-${blockId}-${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(fileName);

            updateBlock(blockId, { url: publicUrl });
        } catch (error) {
            console.error('Error uploading block image:', error);
            alert('Error uploading image');
        }
    };

    // Helper component for block insertion buttons
    const QuickInsert = ({ index }: { index: number }) => (
        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity z-10 translate-y-1/2 flex justify-center pointer-events-none">
            {/* Only enable pointer events on the contents so we don't block clicks underneath when invisible */}
            <div className="bg-white shadow-lg border border-gray-100 rounded-full p-1 flex items-center gap-1 pointer-events-auto scale-90 hover:scale-100 transition-transform">
                <button type='button' onClick={() => addBlock('heading', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert Heading">
                    <Heading className="w-4 h-4" />
                </button>
                <button type='button' onClick={() => addBlock('text', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert Text">
                    <Type className="w-4 h-4" />
                </button>
                <button type='button' onClick={() => addBlock('image', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert Image">
                    <ImageIcon className="w-4 h-4" />
                </button>
                <button type='button' onClick={() => addBlock('video', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert Video">
                    <Video className="w-4 h-4" />
                </button>
                <button type='button' onClick={() => addBlock('embed', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert Embed">
                    <LinkIcon className="w-4 h-4" />
                </button>
                <button type='button' onClick={() => addBlock('cta', index)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-brand-black" title="Insert CTA">
                    <Megaphone className="w-4 h-4" />
                </button>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 -mx-4 px-4 shadow-sm mb-6 flex flex-wrap gap-2">
                <button type='button' onClick={() => addBlock('heading')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <Heading className="w-4 h-4" /> Heading
                </button>
                <button type='button' onClick={() => addBlock('text')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <Type className="w-4 h-4" /> Text
                </button>
                <button type='button' onClick={() => addBlock('image')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <ImageIcon className="w-4 h-4" /> Image
                </button>
                <button type='button' onClick={() => addBlock('video')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <Video className="w-4 h-4" /> Video
                </button>
                <button type='button' onClick={() => addBlock('embed')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <LinkIcon className="w-4 h-4" /> Embed
                </button>
                <button type='button' onClick={() => addBlock('cta')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                    <Megaphone className="w-4 h-4" /> CTA
                </button>
            </div>

            <div className="space-y-4 pb-24">
                {blocks.map((block, index) => (
                    <div key={block.id} className="relative group/block mb-8">
                        {/* Wrapper for hover effect logic */}
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-6 transition-all hover:border-gray-200 hover:shadow-sm">

                            {/* Block Controls */}
                            <div className="absolute right-4 top-4 flex items-center gap-2 opacity-10 group-hover/block:opacity-100 transition-opacity z-20">
                                <button type="button" onClick={() => moveBlock(index, 'up')} disabled={index === 0} className="p-1 hover:bg-gray-100 rounded text-gray-500 disabled:opacity-30">
                                    <MoveUp className="w-4 h-4" />
                                </button>
                                <button type="button" onClick={() => moveBlock(index, 'down')} disabled={index === blocks.length - 1} className="p-1 hover:bg-gray-100 rounded text-gray-500 disabled:opacity-30">
                                    <MoveDown className="w-4 h-4" />
                                </button>
                                <button type="button" onClick={() => removeBlock(block.id)} className="p-1 hover:bg-red-50 text-red-400 hover:text-red-500 rounded ml-2">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Block Label */}
                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 select-none bg-gray-50 px-2 py-1 rounded">
                                    {block.type} Block
                                </span>
                            </div>

                            {/* Block Content Inputs */}
                            {block.type === 'heading' && (
                                <div className="flex gap-4">
                                    <select
                                        value={block.level}
                                        onChange={(e) => updateBlock(block.id, { level: e.target.value as any })}
                                        className="p-3 border-2 border-gray-100 rounded-lg font-bold bg-gray-50 focus:border-brand-black focus:outline-none"
                                    >
                                        <option value="h1">H1</option>
                                        <option value="h2">H2</option>
                                        <option value="h3">H3</option>
                                    </select>
                                    <input
                                        type="text"
                                        value={block.content}
                                        onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                                        placeholder="Heading Text..."
                                        className="flex-1 p-3 border-2 border-gray-100 rounded-lg font-bold text-lg focus:border-brand-black focus:outline-none"
                                    />
                                </div>
                            )}

                            {block.type === 'text' && (
                                <div className="prose max-w-none border-2 border-gray-100 rounded-lg overflow-hidden focus-within:border-brand-black">
                                    <RichTextEditor
                                        value={block.content || ''}
                                        onChange={(val) => updateBlock(block.id, { content: val })}
                                    />
                                </div>
                            )}

                            {block.type === 'image' && (
                                <div className="space-y-4">
                                    {block.url ? (
                                        <div className="relative">
                                            <img src={block.url} alt="Block preview" className="w-full h-64 object-cover rounded-lg border border-gray-100" />
                                            <button
                                                type="button"
                                                onClick={() => updateBlock(block.id, { url: '' })}
                                                className="absolute top-2 right-2 bg-white/90 p-2 rounded-lg text-red-500 hover:text-red-600 font-bold text-xs shadow-sm"
                                            >
                                                Change Image
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <input
                                                type="file"
                                                onChange={(e) => e.target.files && handleImageUpload(e.target.files[0], block.id)}
                                                className="hidden"
                                                id={`file-${block.id}`}
                                                accept="image/*"
                                            />
                                            <label htmlFor={`file-${block.id}`} className="cursor-pointer flex flex-col items-center gap-2">
                                                <ImageIcon className="w-8 h-8 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-500">Click to upload image</span>
                                            </label>
                                        </div>
                                    )}
                                    <input
                                        type="text"
                                        value={block.caption || ''}
                                        onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                                        placeholder="Image Caption (optional)"
                                        className="w-full p-3 border-2 border-gray-100 rounded-lg text-sm text-gray-600 focus:border-brand-black focus:outline-none"
                                    />
                                </div>
                            )}

                            {block.type === 'video' && (
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={block.url || ''}
                                        onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                                        placeholder="Paste YouTube or Vimeo URL..."
                                        className="w-full p-3 border-2 border-gray-100 rounded-lg focus:border-brand-black focus:outline-none font-mono text-sm"
                                    />
                                    {block.url && (
                                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                                            Video Preview Placeholder (Save to view)
                                        </div>
                                    )}
                                </div>
                            )}

                            {block.type === 'embed' && (
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <select
                                            value={block.platform}
                                            onChange={(e) => updateBlock(block.id, { platform: e.target.value as any })}
                                            className="p-3 border-2 border-gray-100 rounded-lg font-bold bg-gray-50 focus:border-brand-black focus:outline-none"
                                        >
                                            <option value="twitter">Twitter / X</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="tiktok">TikTok</option>
                                        </select>
                                        <input
                                            type="text"
                                            value={block.url || ''}
                                            onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                                            placeholder="Paste Embed URL..."
                                            className="flex-1 p-3 border-2 border-gray-100 rounded-lg focus:border-brand-black focus:outline-none font-mono text-sm"
                                        />
                                    </div>
                                </div>
                            )}

                            {block.type === 'cta' && (
                                <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="flex gap-4">
                                        <select
                                            value={block.style || 'light'}
                                            onChange={(e) => updateBlock(block.id, { style: e.target.value as any })}
                                            className="p-3 border-2 border-gray-100 rounded-lg font-bold bg-white focus:border-brand-black focus:outline-none w-32"
                                        >
                                            <option value="light">Light</option>
                                            <option value="dark">Dark</option>
                                        </select>
                                        <input
                                            type="text"
                                            value={block.content || ''}
                                            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                                            placeholder="Headline (e.g., Want to transform your brand?)"
                                            className="flex-1 p-3 border-2 border-gray-100 rounded-lg font-bold focus:border-brand-black focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            value={block.buttonText || ''}
                                            onChange={(e) => updateBlock(block.id, { buttonText: e.target.value })}
                                            placeholder="Button Text (e.g., Reach out ->)"
                                            className="flex-1 p-3 border-2 border-gray-100 rounded-lg font-mono text-sm focus:border-brand-black focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            value={block.url || ''}
                                            onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                                            placeholder="Button URL (e.g., /contact)"
                                            className="flex-1 p-3 border-2 border-gray-100 rounded-lg font-mono text-sm focus:border-brand-black focus:outline-none"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Quick Insert Button Below Block */}
                        <QuickInsert index={index} />
                    </div>
                ))}

                <div className="border-t border-gray-100 pt-8 mt-8">
                    <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Add New Block</p>
                    <div className="flex flex-wrap gap-2">
                        <button type='button' onClick={() => addBlock('heading')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <Heading className="w-5 h-5" /> Heading
                        </button>
                        <button type='button' onClick={() => addBlock('text')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <Type className="w-5 h-5" /> Text
                        </button>
                        <button type='button' onClick={() => addBlock('image')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <ImageIcon className="w-5 h-5" /> Image
                        </button>
                        <button type='button' onClick={() => addBlock('video')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <Video className="w-5 h-5" /> Video
                        </button>
                        <button type='button' onClick={() => addBlock('embed')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <LinkIcon className="w-5 h-5" /> Embed
                        </button>
                        <button type='button' onClick={() => addBlock('cta')} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 hover:border-brand-black hover:shadow-md rounded-xl font-bold text-gray-700 transition-all">
                            <Megaphone className="w-5 h-5" /> CTA
                        </button>
                    </div>
                </div>

                {blocks.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">Start by adding a block above.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
