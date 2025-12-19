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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className="group flex flex-col gap-6"
            >
              <Link href={`/insights/${post.slug}`} className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 block relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-brand-accent mb-4 uppercase">
                  <span>{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{post.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <Link href={`/insights/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:text-brand-accent transition-colors cursor-pointer text-gray-900">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-start">
                  <Link href={`/insights/${post.slug}`} className="font-bold text-sm text-brand-black hover:text-brand-accent transition-colors flex items-center gap-2">
                    READ ARTICLE <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};