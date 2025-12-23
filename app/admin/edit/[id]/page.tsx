'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabaseClient';
import { Section, Button } from '../../../../components/ui';
import { useRouter } from 'next/navigation';
import RichTextEditor from '../../../../components/admin/RichTextEditor';

interface ArticleSection {
    heading: string;
    content: string;
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = params;
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
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
        author: '',
        authorRole: '',
        readTime: '',
        tags: '',
        imageUrl: ''
    });

    const [articleSections, setArticleSections] = useState<ArticleSection[]>([]);
    const [keyTakeaways, setKeyTakeaways] = useState<string[]>([]);

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            if (data) {
                setFormData({
                    title: data.title || '',
                    slug: data.slug || '',
                    seoTitle: data.seo_title || '',
                    seoDescription: data.seo_description || '',
                    category: data.category || 'Performance',
                    excerpt: data.excerpt || '',
                    introHeadline: data.intro_headline || '',
                    introContent: data.intro_content || '',
                    author: data.author || '',
                    authorRole: data.author_role || '',
                    readTime: data.read_time || '',
                    tags: (data.tags || []).join(', '),
                    imageUrl: data.image_url || ''
                });
                setArticleSections(data.article_sections || []);
                setKeyTakeaways(data.key_takeaways || []);
            }
        } catch (error) {
            console.error('Error fetching post:', error);
            alert('Could not fetch post details.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
        setSubmitting(true);

        try {
            let imageUrl = formData.imageUrl;

            // 1. Upload New Image if exists
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${formData.slug}-${Date.now()}.${fileExt}`;
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('blog-images')
                    .upload(fileName, imageFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('blog-images')
                    .getPublicUrl(fileName);

                imageUrl = publicUrl;
            }

            // 2. Update Data
            const { error: updateError } = await supabase
                .from('blogs')
                .update({
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
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
                    key_takeaways: keyTakeaways.filter(t => t.trim() !== ''),
                    article_sections: articleSections,
                })
                .eq('id', id);

            if (updateError) throw updateError;

            alert('Blog Post Updated Successfully!');
            router.push('/admin');

        } catch (error: any) {
            console.error('Error updating post:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="text-center pt-40">Loading Editor...</div>;

    return (
        <Section className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Edit Blog Post</h1>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Main Info */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">1. Core Details</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">Title</label>
                            <input required name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-accent focus:outline-none" />
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
                            <label className="block text-sm font-bold mb-2">Banner Image (Leave empty to keep current)</label>
                            {formData.imageUrl && <div className="mb-2"><img src={formData.imageUrl} className="h-20 w-auto rounded border" alt="Current" /></div>}
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
                            <input name="tags" value={formData.tags} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">2. SEO</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Title</label>
                            <input name="seoTitle" value={formData.seoTitle} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">SEO Description</label>
                            <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} className="w-full p-3 border rounded-lg h-20" />
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="font-bold text-xl mb-4 text-brand-accent">3. Introduction & Takeaways</h2>
                        <div>
                            <label className="block text-sm font-bold mb-2">Excerpt (Summary)</label>
                            <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} className="w-full p-3 border rounded-lg h-24" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Headline (Hook)</label>
                            <input required name="introHeadline" value={formData.introHeadline} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Intro Content</label>
                            <div className="prose max-w-none">
                                <RichTextEditor
                                    value={formData.introContent}
                                    onChange={(val) => setFormData(prev => ({ ...prev, introContent: val }))}
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
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Section Content</label>
                                        <RichTextEditor
                                            value={section.content}
                                            onChange={(val) => updateSection(index, 'content', val)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 sticky bottom-6 bg-white/80 backdrop-blur-sm p-4 border-t shadow-2xl rounded-xl z-50">
                        <Button type="submit" disabled={submitting} className="w-full text-lg py-4">
                            {submitting ? 'Updating...' : '💾 Save Changes'}
                        </Button>
                    </div>

                </form>
            </div>
        </Section>
    );
}
