import React from 'react';
import { Section, Button } from '../../components/ui';
import { BLOG_POSTS } from '../../constants';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | Narratv Space | Branding & Marketing Strategy',
  description: 'Deep dives into branding, performance marketing, and video production trends in Kerala and the Middle East.',
};

export default function Insights() {
  const posts = BLOG_POSTS;

  return (
    <>
      <section className="bg-brand-black text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Insights</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Thoughts on branding, culture, and the future of digital from our strategy team in Kerala and Dubai.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className="group flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0"
            >
              <Link href={`/insights/${post.slug}`} className="w-full md:w-1/3 aspect-[3/2] overflow-hidden rounded-sm bg-gray-200 block">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="font-semibold text-brand-accent uppercase tracking-widest text-xs">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/insights/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 group-hover:text-brand-accent transition-colors cursor-pointer">{post.title}</h2>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`}>
                  <Button variant="text" className="group-hover:translate-x-2 transition-transform">Read Article</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};