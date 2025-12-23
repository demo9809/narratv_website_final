'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { BlogPost } from '../../types';
import Link from 'next/link';
import { Eye, Edit2, Trash2, Plus } from 'lucide-react';

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
            if (data) setPosts(data as any);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const deletePost = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;

        try {
            const { error } = await supabase.from('blogs').delete().eq('id', id);
            if (error) throw error;
            setPosts(posts.filter(p => p.id !== id));
        } catch (error: any) {
            console.error('Error deleting post:', error);
            alert('Error deleting post: ' + error.message);
        }
    };

    return (
        <div className="p-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Overview</h1>
                    <p className="text-gray-500 mt-1">Manage, edit, and track your blog content.</p>
                </div>
                <Link href="/admin/create" className="group">
                    <button className="flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-accent hover:text-brand-black transition-all shadow-lg hover:shadow-brand-accent/20">
                        <Plus className="w-5 h-5" />
                        Create New Post
                    </button>
                </Link>
            </div>

            {/* Stats Cards (Optional Polish) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Posts</span>
                    <span className="text-4xl font-black text-brand-black">{posts.length}</span>
                </div>
            </div>

            {/* Table */}
            {loading ? (
                <div className="bg-white p-20 text-center rounded-2xl border border-gray-100 shadow-sm">
                    <div className="animate-spin w-8 h-8 border-4 border-brand-accent border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-400 font-medium">Syncing with database...</p>
                </div>
            ) : (
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-widest w-1/3">Article Title</th>
                                <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                                <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Published</th>
                                <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {posts.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-12 text-center text-gray-400">
                                        No posts found. Create your first one!
                                    </td>
                                </tr>
                            ) : (
                                posts.map((post) => (
                                    <tr key={post.id} className="group hover:bg-gray-50/50 transition-colors">
                                        <td className="p-6">
                                            <div className="font-bold text-gray-900 group-hover:text-brand-accent transition-colors">{post.title}</div>
                                            <div className="text-xs text-gray-400 mt-1 font-mono">{post.slug}</div>
                                        </td>
                                        <td className="p-6">
                                            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="p-6 text-sm text-gray-500 font-medium">{post.date}</td>
                                        <td className="p-6 text-right">
                                            <div className="flex gap-2 justify-end">
                                                <Link
                                                    href={`/insights/${post.slug}`}
                                                    target="_blank"
                                                    className="p-2 text-gray-400 hover:text-brand-accent hover:bg-brand-accent/10 rounded-lg transition-all"
                                                    title="Preview Live"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </Link>

                                                <Link
                                                    href={`/admin/edit/${post.id}`}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-5 h-5" />
                                                </Link>

                                                <button
                                                    onClick={() => deletePost(post.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
