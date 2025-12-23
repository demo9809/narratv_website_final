'use client';

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { Section, Button } from '../../../components/ui';
import { useRouter } from 'next/navigation';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from title
        if (name === 'title') {
            const generatedSlug = value.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-');
            setFormData(prev => ({ ...prev, slug: generatedSlug, title: value })); // Ensure title is also updated
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                        slug: formData.slug,
                        seo_title: formData.seoTitle,
                        seo_description: formData.seoDescription,
                        category: formData.category,
                        excerpt: formData.excerpt,
                        intro_headline: formData.introHeadline,
                        intro_content: formData.introContent,
                        author: formData.author,
                        author_role: formData.authorRole,
                        read_time: formData.readTime,
                        image_url: imageUrl,
                        date: new Date().toISOString(), // Today
                        tags: formData.tags.split(',').map(tag => tag.trim()), // Simple array
                        // Defaults for complex fields for now to prevent errors
                        key_takeaways: ["Takeaway 1 (Edit in DB)", "Takeaway 2"],
                        article_sections: [],
                        quote: { text: "Quote text placeholder", author: "Author" }
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
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Write New Blog Post</h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Main Info */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                        <h2 className="font-bold text-xl mb-4">Core Details</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">Title</label>
                            <input required name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="e.g. The Future of AI" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Slug (Auto-generated)</label>
                                <input required name="slug" value={formData.slug} onChange={handleChange} className="w-full p-3 border rounded-lg bg-gray-100" />
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
                    </div>

                    {/* SEO */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                        <h2 className="font-bold text-xl mb-4">SEO</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Title</label>
                            <input name="seoTitle" value={formData.seoTitle} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Description</label>
                            <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} className="w-full p-3 border rounded-lg h-24" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                        <h2 className="font-bold text-xl mb-4">Content</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">Excerpt</label>
                            <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} className="w-full p-3 border rounded-lg h-24" placeholder="Short summary for the card..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Headline (Hook)</label>
                            <input required name="introHeadline" value={formData.introHeadline} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Content (HTML allowed)</label>
                            <textarea required name="introContent" value={formData.introContent} onChange={handleChange} className="w-full p-3 border rounded-lg h-40 font-mono text-sm" placeholder="<p>First paragraph...</p>" />
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Publishing...' : 'Publish Blog Post'}
                        </Button>
                    </div>

                </form>
            </div>
        </Section>
    );
}
