'use client';

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { Section, Button } from '../../../components/ui';
import { useRouter } from 'next/navigation';
import RichTextEditor from '../../../components/admin/RichTextEditor';
import { Trash2, Save, Plus, ArrowLeft } from 'lucide-react';
import Toast from '../../../components/ui/Toast';

interface ArticleSection {
    heading: string;
    content: string;
}

export default function CreateBlogPost() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [toast, setToast] = useState<{ show: boolean, message: string, type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });
    const [isCustomCategory, setIsCustomCategory] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        seoTitle: '',
        seoDescription: '',
        category: 'Performance',
        excerpt: '',
        introHeadline: '',
        introContent: '',
        author: 'Sarah Jenkins', // Default
        authorRole: 'Head of Digital Growth',
        readTime: '5 min read',
        tags: '' // Comma separated
    });

    // Complex state for dynamic sections
    const [articleSections, setArticleSections] = useState<ArticleSection[]>([]);
    const [keyTakeaways, setKeyTakeaways] = useState<string[]>(['']); // Start with one empty takeaway

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from title
        if (name === 'title') {
            const generatedSlug = value.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-');
            setFormData(prev => ({ ...prev, slug: generatedSlug, title: value }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    // --- Dynamic Sections Logic ---
    const addSection = () => {
        setArticleSections([...articleSections, { heading: '', content: '' }]);
    };

    const updateSection = (index: number, field: keyof ArticleSection, value: string) => {
        const newSections = [...articleSections];
        newSections[index][field] = value;
        setArticleSections(newSections);
    };

    const removeSection = (index: number) => {
        const newSections = [...articleSections];
        newSections.splice(index, 1);
        setArticleSections(newSections);
    };

    // --- Dynamic Key Takeaways Logic ---
    const handleTakeawayChange = (index: number, value: string) => {
        const newTakeways = [...keyTakeaways];
        newTakeways[index] = value;
        setKeyTakeaways(newTakeways);
    };

    const addTakeaway = () => setKeyTakeaways([...keyTakeaways, '']);
    const removeTakeaway = (index: number) => {
        const newTakeaways = [...keyTakeaways];
        newTakeaways.splice(index, 1);
        setKeyTakeaways(newTakeaways);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check for Supabase Configuration
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
            setToast({ show: true, message: 'CONFIGURATION ERROR: Supabase Credentials are missing.', type: 'error' });
            return;
        }

        setLoading(true);

        try {
            let imageUrl = '';

            // 1. Upload Image if exists
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${formData.slug}-${Date.now()}.${fileExt}`;
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('blog-images')
                    .upload(fileName, imageFile);

                if (uploadError) throw uploadError;

                // Get Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('blog-images')
                    .getPublicUrl(fileName);

                imageUrl = publicUrl;
            }

            // 2. Insert Data
            const { error: insertError } = await supabase
                .from('blogs')
                .insert([
                    {
                        title: formData.title,
                        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
                        seo_title: formData.seoTitle,
                        seo_description: formData.seoDescription,
                        category: formData.category,
                        excerpt: formData.excerpt,
                        intro_headline: formData.introHeadline,
                        intro_content: formData.introContent, // HTML from Rich Text
                        author: formData.author,
                        author_role: formData.authorRole,
                        read_time: formData.readTime,
                        image_url: imageUrl,
                        date: new Date().toISOString(), // Today
                        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),

                        // Complex Objects
                        key_takeaways: keyTakeaways.filter(t => t.trim() !== ''),
                        article_sections: articleSections,
                        // Quote removed as per request
                    }
                ]);

            if (insertError) throw insertError;

            setToast({ show: true, message: 'Blog Post Published Successfully!', type: 'success' });

            // Redirect after success
            setTimeout(() => {
                router.push('/admin');
            }, 1000);

        } catch (error: any) {
            console.error('Error creating post:', error);
            setToast({ show: true, message: `Error: ${error.message}`, type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-10 max-w-5xl mx-auto">
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.show}
                onClose={() => setToast(prev => ({ ...prev, show: false }))}
            />

            <div className="mb-6">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-black transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </button>
            </div>

            <h1 className="text-3xl font-black mb-8 tracking-tight">Write New Blog Post</h1>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* Main Info */}
                <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="font-bold text-lg mb-6 uppercase tracking-widest text-gray-400 border-b pb-2">1. Core Details</h2>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Title</label>
                        <input required name="title" value={formData.title} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none transition-colors font-bold text-lg" placeholder="e.g. The Future of AI" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Slug</label>
                            <input required name="slug" value={formData.slug} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 font-mono text-sm text-gray-600" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Category</label>
                            <select
                                name="category"
                                value={isCustomCategory ? 'custom' : formData.category}
                                onChange={(e) => {
                                    if (e.target.value === 'custom') {
                                        setIsCustomCategory(true);
                                        setFormData(prev => ({ ...prev, category: '' }));
                                    } else {
                                        setIsCustomCategory(false);
                                        setFormData(prev => ({ ...prev, category: e.target.value }));
                                    }
                                }}
                                className="w-full p-4 border-2 border-gray-100 rounded-xl bg-white focus:border-brand-black focus:outline-none appearance-none"
                            >
                                <option value="Performance">Performance</option>
                                <option value="Branding">Branding</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Video">Video</option>
                                <option value="custom" className="font-bold text-brand-accent">+ Limitless Custom Category</option>
                            </select>
                            {isCustomCategory && (
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Enter new category name..."
                                    value={formData.category}
                                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                    className="w-full mt-2 p-3 border-2 border-brand-accent/50 rounded-xl bg-brand-accent/5 focus:border-brand-accent focus:outline-none text-brand-black font-bold animate-in fade-in slide-in-from-top-1"
                                />
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Banner Image</label>
                        <input type="file" onChange={handleImageChange} className="w-full p-3 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer" accept="image/*" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Author Name</label>
                            <input name="author" value={formData.author} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Author Role</label>
                            <input name="authorRole" value={formData.authorRole} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Tags (comma separated)</label>
                        <input name="tags" value={formData.tags} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none" placeholder="Marketing, Kerala, Trends" />
                    </div>
                </div>

                {/* SEO */}
                <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="font-bold text-lg mb-6 uppercase tracking-widest text-gray-400 border-b pb-2">2. SEO Settings</h2>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">SEO Title</label>
                        <input name="seoTitle" value={formData.seoTitle} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none" placeholder="Defaults to main title if empty" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">SEO Description</label>
                        <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl h-24 focus:border-brand-black focus:outline-none resize-none" placeholder="Meta description for Google results..." />
                    </div>
                </div>

                {/* Introduction */}
                <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="font-bold text-lg mb-6 uppercase tracking-widest text-gray-400 border-b pb-2">3. Content Start</h2>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Excerpt (Summary)</label>
                        <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl h-32 focus:border-brand-black focus:outline-none resize-none" placeholder="Short summary displayed on the card..." />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Intro Headline (Hook)</label>
                        <input required name="introHeadline" value={formData.introHeadline} onChange={handleChange} className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none" placeholder="e.g. The rules of the game have changed." />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Intro Content</label>
                        <div className="prose max-w-none border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-brand-black transition-colors">
                            <RichTextEditor
                                value={formData.introContent}
                                onChange={(val) => setFormData(prev => ({ ...prev, introContent: val }))}
                                placeholder="Write the introduction here..."
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-4">Key Takeaways</label>
                        {keyTakeaways.map((takeaway, idx) => (
                            <div key={idx} className="flex gap-3 mb-3">
                                <input
                                    value={takeaway}
                                    onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                                    className="flex-1 p-3 border-2 border-gray-100 rounded-xl focus:border-brand-black focus:outline-none"
                                    placeholder={`Takeaway ${idx + 1}`}
                                />
                                <button type="button" onClick={() => removeTakeaway(idx)} className="text-red-400 hover:text-red-600 font-bold px-3 bg-red-50 rounded-xl transition-colors">×</button>
                            </div>
                        ))}
                        <button type="button" onClick={addTakeaway} className="flex items-center gap-2 text-xs font-bold text-brand-black bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            <Plus className="w-3 h-3" /> Add Takeaway
                        </button>
                    </div>
                </div>

                {/* Dynamic Article Sections */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg uppercase tracking-widest text-gray-400">4. Article Sections</h2>
                        <button type="button" onClick={addSection} className="flex items-center gap-2 bg-brand-black text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors text-sm">
                            <Plus className="w-4 h-4" /> Add Section
                        </button>
                    </div>

                    {articleSections.map((section, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group">
                            <button
                                type="button"
                                onClick={() => removeSection(index)}
                                className="absolute top-6 right-6 text-gray-300 hover:text-red-500 font-bold transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Section Heading</label>
                                    <input
                                        value={section.heading}
                                        onChange={(e) => updateSection(index, 'heading', e.target.value)}
                                        className="w-full p-4 border-2 border-gray-100 rounded-xl font-bold text-xl focus:border-brand-black focus:outline-none"
                                        placeholder={`Section ${index + 1} Heading`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Section Content</label>
                                    <div className="prose max-w-none border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-brand-black transition-colors">
                                        <RichTextEditor
                                            value={section.content}
                                            onChange={(val) => updateSection(index, 'content', val)}
                                            placeholder="Write this section's content..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {articleSections.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
                            <p className="font-bold">No sections yet</p>
                            <p className="text-sm">Click "+ Add Section" to start building your article.</p>
                        </div>
                    )}
                </div>

                <div className="pt-6 sticky bottom-6 z-40">
                    <div className="bg-white/80 backdrop-blur-md p-4 border border-gray-200 shadow-2xl rounded-2xl flex justify-between items-center gap-4">
                        <span className="text-xs font-bold text-gray-400 pl-2">
                            {loading ? 'Saving to Database...' : 'Ready to Publish'}
                        </span>
                        <Button type="submit" disabled={loading} className="flex items-center gap-2 !px-10 !py-3 !text-base !bg-brand-accent !text-brand-black hover:!bg-white hover:!text-brand-black border border-transparent hover:border-brand-black">
                            {loading ? 'Publishing...' : <><Save className="w-4 h-4" /> Publish Post</>}
                        </Button>
                    </div>
                </div>

            </form>
        </div>
    );
}
