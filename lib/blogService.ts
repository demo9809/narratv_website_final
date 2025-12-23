import { supabase } from './supabaseClient';
import { BLOG_POSTS } from '../constants';
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
            return BLOG_POSTS; // Fallback to static only
        }

        const dbPosts = (data || []).map(mapDbToPost);

        // Merge DB posts with Static posts
        // Filter out static posts if they have the same slug as a DB post (DB takes precedence)
        const dbSlugs = new Set(dbPosts.map(p => p.slug));
        const filteredStaticPosts = BLOG_POSTS.filter(p => !dbSlugs.has(p.slug));

        return [...dbPosts, ...filteredStaticPosts].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    } catch (err) {
        console.error('Unexpected error fetching posts:', err);
        return BLOG_POSTS;
    }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    // 1. Try DB first
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

    if (data) {
        return mapDbToPost(data);
    }

    // 2. Fallback to Static
    return BLOG_POSTS.find(p => p.slug === slug);
};
