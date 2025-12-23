'use client';

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { Section, Button } from '../../../components/ui';
import { useRouter } from 'next/navigation';
import RichTextEditor from '../../../components/admin/RichTextEditor';

interface ArticleSection {
    heading: string;
    content: string;
}

export default function CreateBlogPost() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);

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
            alert('CONFIGURATION ERROR: Supabase Credentials are missing.\n\nIf you are running locally: Make sure .env.local exists and restart your server.\nIf you are on Vercel: Go to Project Settings > Environment Variables and add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
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
                        quote: { text: "", author: "" } // Optional placeholder for now
                    }
                ]);

            if (insertError) throw insertError;

            alert('Blog Post Created Successfully!');
            router.push('/admin');

        } catch (error: any) {
            console.error('Error creating post:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Write New Blog Post</h1>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Main Info */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">1. Core Details</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">Title</label>
                            <input required name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-accent focus:outline-none" placeholder="e.g. The Future of AI" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Slug</label>
                                <input required name="slug" value={formData.slug} onChange={handleChange} className="w-full p-3 border rounded-lg bg-gray-100 font-mono text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Category</label>
                                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border rounded-lg">
                                    <option value="Performance">Performance</option>
                                    <option value="Branding">Branding</option>
                                    <option value="Strategy">Strategy</option>
                                    <option value="Video">Video</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Banner Image</label>
                            <input type="file" onChange={handleImageChange} className="w-full p-3 border rounded-lg bg-white" accept="image/*" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Author Name</label>
                                <input name="author" value={formData.author} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Author Role</label>
                                <input name="authorRole" value={formData.authorRole} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Tags (comma separated)</label>
                            <input name="tags" value={formData.tags} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Marketing, Kerala, Trends" />
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">2. SEO</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Title</label>
                            <input name="seoTitle" value={formData.seoTitle} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Defaults to main title if empty" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Description</label>
                            <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} className="w-full p-3 border rounded-lg h-20" placeholder="Meta description for Google results..." />
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">3. Introduction & Takeaways</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">Excerpt (Summary)</label>
                            <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} className="w-full p-3 border rounded-lg h-24" placeholder="Short summary displayed on the card..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Headline (Hook)</label>
                            <input required name="introHeadline" value={formData.introHeadline} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="e.g. The rules of the game have changed." />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Content</label>
                            <div className="prose max-w-none">
                                <RichTextEditor
                                    value={formData.introContent}
                                    onChange={(val) => setFormData(prev => ({ ...prev, introContent: val }))}
                                    placeholder="Write the introduction here..."
                                />
                            </div>
                        </div>

                        <div className="pt-8">
                            <label className="block text-sm font-bold mb-2">Key Takeaways</label>
                            {keyTakeaways.map((takeaway, idx) => (
                                <div key={idx} className="flex gap-2 mb-2">
                                    <input
                                        value={takeaway}
                                        onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                                        className="flex-1 p-2 border rounded"
                                        placeholder={`Takeaway ${idx + 1}`}
                                    />
                                    <button type="button" onClick={() => removeTakeaway(idx)} className="text-red-500 font-bold px-2">×</button>
                                </div>
                            ))}
                            <button type="button" onClick={addTakeaway} className="text-sm text-brand-accent font-bold mt-2">+ Add Takeaway</button>
                        </div>
                    </div>

                    {/* Dynamic Article Sections */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">4. Article Sections</h2>
                            <Button type="button" onClick={addSection}>+ Add Section</Button>
                        </div>

                        {articleSections.map((section, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 relative">
                                <button
                                    type="button"
                                    onClick={() => removeSection(index)}
                                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 font-bold"
                                >
                                    Remove Section
                                </button>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Section Heading</label>
                                        <input
                                            value={section.heading}
                                            onChange={(e) => updateSection(index, 'heading', e.target.value)}
                                            className="w-full p-3 border rounded-lg font-bold text-lg"
                                            placeholder={`Section ${index + 1} Heading`}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Section Content</label>
                                        <RichTextEditor
                                            value={section.content}
                                            onChange={(val) => updateSection(index, 'content', val)}
                                            placeholder="Write this section's content..."
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {articleSections.length === 0 && (
                            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-400">
                                No sections added yet. Click "+ Add Section" to start writing the body.
                            </div>
                        )}
                    </div>

                    <div className="pt-6 sticky bottom-6 bg-white/80 backdrop-blur-sm p-4 border-t shadow-2xl rounded-xl z-50">
                        <Button type="submit" disabled={loading} className="w-full text-lg py-4">
                            {loading ? 'Publishing...' : '🚀 Publish Blog Post'}
                        </Button>
                    </div>

                </form>
            </div>
        </Section>
    );
}
