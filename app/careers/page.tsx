'use client';

import React, { useState } from 'react';
import { Section, Button } from '../../components/ui';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Zap, UploadCloud, MapPin, Clock } from 'lucide-react';

const OPEN_POSITIONS = [
  {
    id: 1,
    title: "Senior Brand Designer",
    department: "Design",
    location: "Calicut / Hybrid",
    type: "Full-time",
    description: "We are looking for a visionary designer who can translate complex strategies into compelling visual identities. You will lead branding projects for international clients."
  },
  {
    id: 2,
    title: "Creative Copywriter",
    department: "Content",
    location: "Remote / Kochi",
    type: "Contract",
    description: "You thrive on wordplay and precision. You will craft tone-of-voice guidelines, campaign headlines, and high-conversion web copy."
  },
  {
    id: 3,
    title: "Account Manager",
    department: "Client Services",
    location: "Dubai / Calicut",
    type: "Full-time",
    description: "The bridge between our creative team and our clients. You ensure projects run smoothly, deadlines are met, and expectations are exceeded."
  }
];

const Careers: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application received! We will review your portfolio and get back to you.');
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="max-w-4xl"
           >
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-brand-accent"></div>
               <span className="text-brand-accent font-mono text-sm tracking-widest uppercase">Careers at Narratv</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Join the Narrative.</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              We are a team of dreamers, strategists, and creators. We don't just fill positions; we add distinct voices to our collective story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture / Perks */}
      <Section bgColor="white">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-50 rounded-sm">
               <Users className="w-10 h-10 text-brand-accent mb-6" />
               <h3 className="text-xl font-bold mb-3">Global Exposure</h3>
               <p className="text-gray-600">Work on projects for clients in Dubai, London, and New York from our base in Kerala.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-sm">
               <Zap className="w-10 h-10 text-brand-accent mb-6" />
               <h3 className="text-xl font-bold mb-3">Creative Autonomy</h3>
               <p className="text-gray-600">We despise micromanagement. We hire adults and trust them to do world-class work.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-sm">
               <Briefcase className="w-10 h-10 text-brand-accent mb-6" />
               <h3 className="text-xl font-bold mb-3">Hybrid Culture</h3>
               <p className="text-gray-600">Whether you prefer deep work at home or brainstorming in our Calicut studio, we support you.</p>
            </div>
         </div>
      </Section>

      {/* Open Positions */}
      <Section bgColor="gray" id="openings">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
             {OPEN_POSITIONS.map((job) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-brand-accent group cursor-pointer"
                  onClick={() => {
                    setSelectedRole(job.title);
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                   <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{job.title}</h3>
                      <span className="bg-brand-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit">{job.department}</span>
                   </div>
                   <p className="text-gray-600 mb-6 max-w-2xl">{job.description}</p>
                   <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                         <MapPin className="w-4 h-4" /> {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                         <Clock className="w-4 h-4" /> {job.type}
                      </div>
                      <div className="ml-auto text-brand-accent font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                         Apply Now <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section bgColor="black" id="application-form">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
               <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Apply Now</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Show us what you've got.</h2>
               <p className="text-gray-400">Don't see your role above? We are always looking for exceptional talent. Pitch us your dream role.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#111] p-8 md:p-12 rounded-sm border border-white/10">
               <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                        <input type="text" required className="w-full bg-brand-black border border-white/10 p-4 text-white focus:border-brand-accent outline-none transition-colors rounded-sm" placeholder="John Doe" />
                     </div>
                     <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input type="email" required className="w-full bg-brand-black border border-white/10 p-4 text-white focus:border-brand-accent outline-none transition-colors rounded-sm" placeholder="john@example.com" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Position</label>
                        <select 
                           value={selectedRole} 
                           onChange={(e) => setSelectedRole(e.target.value)}
                           className="w-full bg-brand-black border border-white/10 p-4 text-white focus:border-brand-accent outline-none transition-colors rounded-sm appearance-none"
                        >
                           <option value="">General Application</option>
                           {OPEN_POSITIONS.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                        </select>
                     </div>
                     <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Portfolio / LinkedIn URL</label>
                        <input type="url" required className="w-full bg-brand-black border border-white/10 p-4 text-white focus:border-brand-accent outline-none transition-colors rounded-sm" placeholder="https://" />
                     </div>
                  </div>

                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Resume / CV</label>
                     <div className="w-full bg-brand-black border border-dashed border-white/20 p-8 text-center rounded-sm hover:border-brand-accent transition-colors cursor-pointer group-hover:bg-white/5">
                        <UploadCloud className="w-8 h-8 text-gray-500 mx-auto mb-2 group-hover:text-white transition-colors" />
                        <span className="text-gray-400 text-sm">Click to upload or drag and drop</span>
                     </div>
                  </div>

                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Why Narratv?</label>
                     <textarea rows={4} className="w-full bg-brand-black border border-white/10 p-4 text-white focus:border-brand-accent outline-none transition-colors rounded-sm" placeholder="Tell us why you want to join the team..."></textarea>
                  </div>

                  <div className="pt-4">
                     <Button variant="primary" mode="dark" type="submit" disabled={isSubmitting} className="w-full py-5 text-lg">
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                     </Button>
                  </div>
               </div>
            </form>
         </div>
      </Section>
    </>
  );
};

export default Careers;