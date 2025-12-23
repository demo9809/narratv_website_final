import Link from 'next/link';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, Bookmark, ArrowRight, Quote } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/blogService';
import type { ContentBlock } from '../../../components/admin/BlockEditor';
import { SocialEmbed } from '../../../components/SocialEmbeds';

// Force dynamic rendering for fresh content
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

// Helper to extract Embed URL
const getEmbedUrl = (url: string | undefined) => {
  if (!url) return '';
  try {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let id = '';
      if (url.includes('v=')) {
        id = url.split('v=')[1].split('&')[0];
      } else {
        id = url.split('/').pop() || '';
      }
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('vimeo.com')) {
      const id = url.split('/').pop();
      return `https://player.vimeo.com/video/${id}`;
    }
  } catch (e) {
    return url;
  }
  return url;
}

export default async function InsightDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Narratv Space",
      "logo": {
        "@type": "ImageObject",
        "url": "https://narratv.space/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-brand-black text-white pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl z-10 relative">
          <Link href="/insights" className="inline-flex items-center text-gray-400 hover:text-brand-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-brand-accent text-brand-black font-bold text-xs uppercase px-3 py-1 tracking-widest">{post.category}</span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
              <div className="flex gap-4 text-gray-400">
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
      </section>

      {/* 2. MAIN CONTENT LAYOUT */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* LEFT: Sidebar (Sticky) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 space-y-12">
              {/* Key Takeaways Box */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-brand-cream p-8 border-t-4 border-brand-accent rounded-sm shadow-sm">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-brand-accent" /> Key Takeaways
                  </h3>
                  <ul className="space-y-4">
                    {post.keyTakeaways.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="text-brand-accent font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related CTA */}
              <div className="bg-brand-black text-white p-8 rounded-sm text-center">
                <h4 className="font-bold text-xl mb-4">Need help with this?</h4>
                <p className="text-gray-400 text-sm mb-6">Our strategy team in Kerala is ready to help you implement these insights.</p>
                <Link href="/contact">
                  <Button variant="primary" mode="light" className="w-full text-sm">Book a Call</Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT: Article Content */}
          <article className="lg:col-span-8 order-1 lg:order-2">

            {/* Intro Hook */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-brand-black">{post.introHeadline}</h2>
              <div
                className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed rich-text"
                dangerouslySetInnerHTML={{ __html: post.introContent }}
              />
            </div>

            {/* Dynamic Blocks Rendering */}
            {post.articleSections && post.articleSections.map((block: any, idx: number) => {
              // BACKWARD COMPATIBILITY: Classic Section { heading, content }
              if (!block.type && (block.heading || block.content)) {
                return (
                  <div key={idx} className="mb-12">
                    {block.heading && <h3 className="text-2xl font-bold mb-6 text-brand-black mt-8">{block.heading}</h3>}
                    {block.content && (
                      <div
                        className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed rich-text"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                      />
                    )}
                  </div>
                );
              }

              // NEW BLOCKS
              switch (block.type) {
                case 'heading':
                  const Tag = block.level || 'h2' as keyof JSX.IntrinsicElements;
                  // Map h1->h2 visually if needed, but keeping actual tag is good for SEO
                  const textSize = block.level === 'h1' ? 'text-4xl' : block.level === 'h2' ? 'text-3xl' : 'text-2xl';
                  return (
                    <Tag key={idx} className={`font-bold text-brand-black mt-12 mb-6 ${textSize}`}>
                      {block.content}
                    </Tag>
                  );

                case 'text':
                  return (
                    <div
                      key={idx}
                      className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed rich-text mb-8"
                      dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                  );

                case 'image':
                  return (
                    <figure key={idx} className="my-10">
                      <img src={block.url} alt={block.caption || 'Content Image'} className="w-full rounded-xl shadow-sm border border-gray-100" />
                      {block.caption && <figcaption className="text-center text-sm text-gray-500 mt-3 italic">{block.caption}</figcaption>}
                    </figure>
                  );

                case 'video':
                  return (
                    <div key={idx} className="my-10">
                      <div className="aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                        <iframe
                          src={getEmbedUrl(block.url)}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  );

                case 'embed':
                  const platform = block.platform || 'link';

                  return (
                    <div key={idx} className="my-10 flex justify-center w-full">
                      {['twitter', 'instagram', 'tiktok', 'facebook'].includes(platform) ? (
                        <div className={`w-full ${platform === 'twitter' ? 'max-w-[500px]' : platform === 'instagram' ? 'max-w-[400px]' : platform === 'tiktok' ? 'max-w-[325px]' : 'max-w-[550px]'}`}>
                          <SocialEmbed platform={platform} url={block.url || ''} />
                        </div>
                      ) : (
                        <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden w-full">
                          <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">
                            {block.platform || 'Link'} Embed
                          </div>
                          <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-bold underline break-all">
                            {block.url}
                          </a>
                          <p className="text-xs text-gray-400 mt-2">External content</p>
                        </div>
                      )}
                    </div>
                  );

                default:
                  return null;
              }
            })}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags && post.tags.map((tag: string) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </article>

        </div>
      </Section>
    </>
  );
}