import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// --- BUTTONS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  mode?: 'light' | 'dark';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  mode = 'light',
  children, 
  className = '', 
  icon = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border";
  
  let variantStyles = "";

  if (variant === 'primary') {
    if (mode === 'light') {
      variantStyles = "bg-brand-black text-white border-brand-black hover:bg-brand-accent hover:border-brand-accent hover:text-white";
    } else {
      variantStyles = "bg-white text-brand-black border-white hover:bg-brand-accent hover:border-brand-accent hover:text-white";
    }
  } else if (variant === 'secondary') {
    variantStyles = "bg-brand-gray text-brand-black border-transparent hover:bg-gray-200";
  } else if (variant === 'outline') {
    if (mode === 'light') {
      variantStyles = "bg-transparent text-brand-black border-brand-black hover:bg-brand-black hover:text-white";
    } else {
      variantStyles = "bg-transparent text-white border-white hover:bg-white hover:text-brand-black";
    }
  } else if (variant === 'text') {
    if (mode === 'light') {
       variantStyles = "bg-transparent text-brand-black border-transparent hover:text-brand-accent px-0 py-0";
    } else {
       variantStyles = "bg-transparent text-white border-transparent hover:text-brand-accent px-0 py-0";
    }
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

// --- SECTION WRAPPER ---
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'black';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  bgColor = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white text-brand-black',
    gray: 'bg-brand-gray text-brand-black',
    black: 'bg-brand-black text-white',
  };

  return (
    <section id={id} className={`py-24 md:py-36 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

// --- PROJECT CARD ---
interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  id: string;
  slug?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageUrl, id, slug, className = '' }) => {
  // Fallback to /work if slug is missing, but preferably we want the slug.
  const href = slug ? `/work/${slug}` : '/work';

  return (
    <Link href={href} className={`group block relative overflow-hidden ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="mt-6 flex justify-between items-end border-b border-gray-200 pb-4 group-hover:border-brand-black transition-colors">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{category}</p>
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand-accent transition-colors duration-300">{title}</h3>
        </div>
        <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           <ArrowRight className="w-6 h-6 text-brand-accent" />
        </div>
      </div>
    </Link>
  );
};