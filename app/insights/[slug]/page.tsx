import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, Bookmark, Share2, ArrowRight, Quote } from 'lucide-react';
import { notFound } from 'next/navigation';

// SEO: Generate Static Params for Export
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

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
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent/50">
                {post.authorImage ? (
                  <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-accent to-purple-600" />
                )}
              </div>
              <div>
                <p className="font-bold text-white text-lg">{post.author}</p>
                <p className="text-brand-accent text-xs uppercase tracking-widest">{post.authorRole}</p>
              </div>
              <div className="ml-auto flex gap-4 text-gray-400">
                <p className="hidden md:block">{post.date}</p>
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
                    {post.keyTakeaways.map((item, idx) => (
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

            {/* Dynamic Sections */}
            {post.articleSections && post.articleSections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-brand-black mt-8">{section.heading}</h3>
                <div
                  className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed rich-text"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}

            {/* Quote Break */}
            {post.quote && (
              <div className="my-16 relative">
                <Quote className="w-12 h-12 text-brand-accent/20 absolute -top-6 -left-6" />
                <blockquote className="text-3xl font-bold text-brand-black leading-tight relative z-10 pl-6 border-l-4 border-brand-accent">
                  "{post.quote.text}"
                </blockquote>
                <cite className="block mt-4 text-gray-500 font-medium not-italic">— {post.quote.author}</cite>
              </div>
            )}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags && post.tags.map(tag => (
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