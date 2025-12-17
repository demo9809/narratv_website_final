import React from 'react';
import { PROJECTS } from '../../constants';
import WorkFeed from '../../components/WorkFeed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work | Narratv Space',
  description: 'A dedicated showcase of our branding, video production, and digital marketing projects in Kerala and Dubai.',
};

// This is a Server Component
export default function Portfolio() {
  const projects = PROJECTS;

  return (
    <>
      <section className="bg-brand-black text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Selected Work</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of projects where strategy met creativity to produce tangible business results.
            </p>
          </div>
        </div>
      </section>

      {/* Pass fetched data to the client component for filtering */}
      <WorkFeed projects={projects} />
    </>
  );
};