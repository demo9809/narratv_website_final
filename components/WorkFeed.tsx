'use client';

import React, { useState } from 'react';
import { ProjectCard } from './ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface WorkFeedProps {
  projects: Project[];
}

const WorkFeed: React.FC<WorkFeedProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('All');
  
  // Extract unique categories safely
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-6 md:px-12 max-w-7xl py-20 pb-32">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
              filter === cat 
                ? 'bg-brand-black text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <ProjectCard 
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                slug={project.slug}
              />
              <div className="mt-4 border-t border-gray-100 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Results</span>
                    <p className="text-sm font-medium">{project.results}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Client</span>
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          No projects found in this category.
        </div>
      )}
    </div>
  );
};

export default WorkFeed;