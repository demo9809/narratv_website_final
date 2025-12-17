import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { PROJECTS, BLOG_POSTS } from '../../constants';
import { Project, BlogPost } from '../../types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dxwubp9a';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-05-03';

export const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!builder || !source) return '';
  return builder.image(source).url();
}

// --- FETCHING FUNCTIONS ---

export async function getProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      client,
      category,
      tags,
      "imageUrl": mainImage.asset->url,
      overview,
      results
    }`;

    const sanityProjects = await client.fetch(query);
    
    // Fallback: If CMS is empty or returns no projects, use hardcoded data.
    // This ensures generateStaticParams creates paths for the demo content.
    if (!sanityProjects || sanityProjects.length === 0) {
      return PROJECTS;
    }

    // Filter out projects that might have been created without a slug
    const validProjects = sanityProjects.filter((p: any) => p.slug);
    
    if (validProjects.length === 0) return PROJECTS;

    return validProjects.map((p: any) => ({
      ...p,
      id: p._id
    }));
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return PROJECTS; // Fallback on error
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      client,
      category,
      tags,
      "imageUrl": mainImage.asset->url,
      overview,
      results,
      "gallery": gallery[].asset->url
    }`;

    const project = await client.fetch(query, { slug });

    if (!project) {
        return PROJECTS.find(p => p.slug === slug);
    }

    return {
      ...project,
      id: project._id
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return PROJECTS.find(p => p.slug === slug);
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "imageUrl": mainImage.asset->url,
      category,
      "date": publishedAt,
      readTime,
      author,
      authorRole
    }`;

    const sanityPosts = await client.fetch(query);
    
    if (!sanityPosts || sanityPosts.length === 0) return BLOG_POSTS;

    return sanityPosts.map((p: any) => ({
      ...p,
      id: p._id,
      date: new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }));
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return BLOG_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      seoTitle,
      seoDescription,
      excerpt,
      introHeadline,
      introContent,
      keyTakeaways,
      "articleSections": sections[] {
        heading,
        content
      },
      quote,
      category,
      "date": publishedAt,
      "imageUrl": mainImage.asset->url,
      readTime,
      author,
      authorRole,
      tags
    }`;

    const post = await client.fetch(query, { slug });
    
    if (!post) {
      return BLOG_POSTS.find(p => p.slug === slug);
    }

    return {
      ...post,
      id: post._id,
      date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return BLOG_POSTS.find(p => p.slug === slug);
  }
}