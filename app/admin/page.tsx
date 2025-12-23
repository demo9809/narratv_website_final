'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { BlogPost } from '../../types';
import Link from 'next/link';
import { Section, Button } from '../../components/ui';

export default function AdminDashboard() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            if (data) setPosts(data as any); // Cast for now as Supabase types might vary slightly
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section className="min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                        <p className="text-gray-500">Manage your blog posts</p>
                    </div>
                    <Link href="/admin/create">
                        <Button>+ Create New Post</Button>
                    </Link>
                </div>

                {loading ? (
                    <div className="text-center py-20 animate-pulse">Loading posts...</div>
                ) : (
                    <div className="bg-white border rounded-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                                <tr>
                                    <th className="p-4 border-b">Title</th>
                                    <th className="p-4 border-b">Category</th>
                                    <th className="p-4 border-b">Date</th>
                                    <th className="p-4 border-b text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {posts.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-gray-400">
                                            No posts found. Start writing!
                                        </td>
                                    </tr>
                                ) : (
                                    posts.map((post) => (
                                        <tr key={post.id} className="hover:bg-gray-50">
                                            <td className="p-4 font-medium">{post.title}</td>
                                            <td className="p-4 text-sm text-gray-500">{post.category}</td>
                                            <td className="p-4 text-sm text-gray-500">{post.date}</td>
                                            <td className="p-4 text-right">
                                                <span className="text-xs text-brand-accent cursor-not-allowed opacity-50">Edit (Coming Soon)</span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Section>
    );
}
