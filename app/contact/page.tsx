'use client';
// Force Vercel Re-deploy: Update Contact Feedback UI

import React, { useState } from 'react';
import { Section, Button } from '../../components/ui';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_DETAILS } from '../../types';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'general' | 'project'>('project');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    services: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Handle select element which doesn't have an id attribute in standard way sometimes, but here we can rely on id or name
    // The select for budget needs an id or name.
    setFormData(prev => ({ ...prev, [id || 'budget']: value }));
  };

  // Special handler for select since it didn't have an ID in original code
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, budget: e.target.value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      if (response.ok) {
        alert('Message sent! We will be in touch shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          services: [],
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-brand-black text-white pt-40 pb-20 min-h-[60vh] flex flex-col justify-center relative">
        {/* Background accent for consistency */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-brand-accent/10 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-accent"></div>
              <span className="text-brand-accent font-mono text-sm tracking-widest uppercase">Contact Us</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">Start the <br />Conversation.</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
              From our studio in Calicut to boardrooms in Dubai and London. Let's discuss how we can elevate your brand on the global stage.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-brand-black pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

            {/* Left Column - Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#111] p-8 rounded-sm border border-white/10 hover:border-brand-accent transition-colors duration-500">
                <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-accent" /> Email
                </h3>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-400 hover:text-white text-lg transition-colors block mb-2">{CONTACT_DETAILS.email}</a>
                <p className="text-sm text-gray-600">For new business and general inquiries.</p>
              </div>

              <div className="bg-[#111] p-8 rounded-sm border border-white/10 hover:border-brand-accent transition-colors duration-500">
                <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-accent" /> Phone & WhatsApp
                </h3>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-gray-400 hover:text-white text-lg transition-colors block mb-2">{CONTACT_DETAILS.phone}</a>
                <p className="text-sm text-gray-600">Mon-Fri, 9am - 6pm IST</p>
              </div>

              <div className="bg-[#111] p-8 rounded-sm border border-white/10 hover:border-brand-accent transition-colors duration-500">
                <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent" /> Studio
                </h3>
                <address className="not-italic text-gray-400 text-lg leading-relaxed mb-4">
                  Room No. 6, Ground Floor,<br />
                  KINFRA Advanced Technology Park,<br />
                  Ramanattukara - Calicut, Kerala 673631
                </address>
                <a href={CONTACT_DETAILS.mapsLink} target="_blank" rel="noreferrer" className="text-brand-accent text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">View on Google Maps &rarr;</a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-8">
              <div className="bg-white text-brand-black p-8 md:p-12 rounded-sm shadow-2xl">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6">Send a message</h2>
                  <div className="flex gap-8 border-b border-gray-200">
                    <button
                      onClick={() => setFormType('project')}
                      className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${formType === 'project' ? 'border-brand-accent text-brand-black' : 'border-transparent text-gray-400 hover:text-brand-black'
                        }`}
                    >
                      Start a Project
                    </button>
                    <button
                      onClick={() => setFormType('general')}
                      className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${formType === 'general' ? 'border-brand-accent text-brand-black' : 'border-transparent text-gray-400 hover:text-brand-black'
                        }`}
                    >
                      General Inquiry
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative">
                      <input
                        type="text"
                        required
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg placeholder-transparent text-brand-black"
                        placeholder="Name"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-accent">Name</label>
                    </div>
                    <div className="group relative">
                      <input
                        type="email"
                        required
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg placeholder-transparent text-brand-black"
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-accent">Email</label>
                    </div>
                  </div>

                  {formType === 'project' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg placeholder-transparent text-brand-black"
                            placeholder="Phone / WhatsApp"
                          />
                          <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-accent">Phone / WhatsApp</label>
                        </div>
                        <div className="group relative">
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg placeholder-transparent text-brand-black"
                            placeholder="Company"
                          />
                          <label htmlFor="company" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-accent">Company</label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                          <select
                            onChange={handleSelectChange}
                            value={formData.budget}
                            className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg appearance-none rounded-none text-brand-black"
                          >
                            <option value="" disabled>Select Budget</option>
                            <option value="10k-25k">$10k - $25k</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="100k+">$100k+</option>
                          </select>
                          <label className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-focus:text-brand-accent">Budget Range</label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-4">Services Needed</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {['Strategy', 'Branding', 'Ad Campaigns', 'Video', 'Marketing', 'Content'].map(s => (
                            <label key={s} className="flex items-center gap-3 p-4 border border-gray-200 rounded-sm cursor-pointer hover:border-brand-accent transition-all hover:bg-gray-50 group">
                              <input
                                type="checkbox"
                                checked={formData.services.includes(s)}
                                onChange={() => handleCheckboxChange(s)}
                                className="w-4 h-4 text-brand-accent focus:ring-brand-accent border-gray-300 rounded"
                              />
                              <span className="text-sm font-medium group-hover:text-brand-accent transition-colors text-brand-black">{s}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="group relative">
                    <textarea
                      rows={4}
                      required
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-accent outline-none transition-all text-lg resize-none placeholder-transparent text-brand-black"
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-accent">Project Details / Message</label>
                  </div>

                  <div className="pt-8">
                    <Button variant="primary" mode="light" type="submit" disabled={isSubmitting} className="w-full md:w-auto px-12 py-5 text-lg" icon>
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;