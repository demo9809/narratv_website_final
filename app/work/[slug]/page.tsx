import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '../../../constants';
import { Section, Button } from '../../../components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate params for static export
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Narratv Space Work`,
    description: project.overview,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      {/* 1. HERO HEADER */}
      <section className="bg-brand-black text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-brand-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Link>
          <div className="max-w-4xl">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-12">
              {project.title}
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Client</p>
                <p className="text-lg font-bold">{project.client}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Service</p>
                <p className="text-lg font-bold">{project.category}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.map((tag: string) => (
                    <span key={tag} className="text-sm border border-white/20 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN VISUAL */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-gray-900 overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* 3. CASE STUDY CONTENT */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Overview - Left */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-6">Overview</h3>
            <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          {/* Results - Right */}
          <div className="lg:col-span-5">
            <div className="bg-brand-cream p-10 rounded-sm border-l-4 border-brand-accent">
              <h3 className="text-2xl font-bold mb-6">The Outcome</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {project.results}
              </p>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Services Delivered</p>
                <ul className="grid grid-cols-1 gap-2">
                  {project.tags?.map((tag: string, i: number) => (
                    <li key={i} className="flex items-center text-brand-black font-bold">
                      <ArrowRight className="w-4 h-4 text-brand-accent mr-2" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. GALLERY (If exists) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-brand-gray py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img: string, idx: number) => (
                <div key={idx} className={`relative rounded-sm overflow-hidden shadow-lg ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <img src={img} alt={`${project.title} gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. NEXT PROJECT CTA */}
      <Section bgColor="black" className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to build your legacy?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/contact">
            <Button variant="primary" mode="dark" className="px-12 py-5">Start a Project</Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" mode="dark" className="px-12 py-5">View More Work</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}