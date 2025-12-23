import { supabase } from './supabaseClient';
import { BlogPost } from '../types';

// Helper to map DB result to BlogPost type
const mapDbToPost = (dbPost: any): BlogPost => {
    return {
        id: dbPost.id,
        slug: dbPost.slug,
        title: dbPost.title,
        seoTitle: dbPost.seo_title,
        seoDescription: dbPost.seo_description,
        excerpt: dbPost.excerpt,
        introHeadline: dbPost.intro_headline,
        introContent: dbPost.intro_content,
        keyTakeaways: dbPost.key_takeaways || [],
        articleSections: dbPost.article_sections || [],
        quote: dbPost.quote || undefined,
        category: dbPost.category,
        date: dbPost.date,
        imageUrl: dbPost.image_url,
        readTime: dbPost.read_time,
        author: dbPost.author,
        authorRole: dbPost.author_role,
        tags: dbPost.tags || []
    };
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error('Error fetching from Supabase:', error);
            return []; // Return empty array on error instead of static data
        }

        return (data || []).map(mapDbToPost);

    } catch (err) {
        console.error('Unexpected error fetching posts:', err);
        return [];
    }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

    if (data) {
        return mapDbToPost(data);
    }

    return undefined;
};
