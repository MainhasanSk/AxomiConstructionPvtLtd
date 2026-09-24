import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `*New Construction Consultation Request*\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'Not provided'}\nEmail: ${formData.email || 'N/A'}\nProject Type: ${formData.projectType}\nProject Location: ${formData.location || 'Assam, India'}\nProject Details: ${formData.message || 'I would like to consult Axomi Construction regarding a new project.'}`;
    window.open(`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-900 border-t border-slate-800/80">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Phone Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                  Connect Directly
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Let's Talk About Your Project
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Connect directly with our leadership and civil engineering team. We are ready to review your architectural concepts, land dimensions, and construction timelines.
              </p>
            </div>

            {/* Direct Phone Contact Cards */}
            <div className="space-y-3.5">
              {/* Phone 1 */}
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-slate-700/80 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Primary Contact Line
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors">
                    {companyData.phones[0].display}
                  </span>
                  <span className="text-[11px] text-slate-400 block">Click to call immediately</span>
                </div>
              </a>

              {/* Phone 2 */}
              <a
                href={`tel:${companyData.phones[1].tel}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-slate-700/80 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Line
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors">
                    {companyData.phones[1].display}
                  </span>
                  <span className="text-[11px] text-slate-400 block">Click to call immediately</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={companyData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-950/60 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                      Instant Messaging
                    </span>
                    <span className="font-display font-bold text-base text-white">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-emerald-400/80 block">Quick project inquiry</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-300 group-hover:translate-x-1 transition-transform">
                  Open →
                </span>
              </a>
            </div>

            {/* Verified Location Card */}
            <div className="p-4 rounded-xl bg-navy-850/60 border border-slate-800 flex items-start gap-3">
              <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Operating Location</span>
                <p className="text-xs text-slate-400">
                  Assam, India • On-site operations across regional residential & commercial sites.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Request a Consultation
                  </h3>
                  <p className="text-xs text-gold-400">
                    Submit your parameters for a detailed discussion
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Sparkles size={16} />
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Thank You, {formData.name || 'Valued Client'}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your project details have been recorded. Our civil engineering team will reach out directly at {formData.phone || 'your phone number'}.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-colors"
                    >
                      <MessageSquare size={16} />
                      <span>Send to Official WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center py-3 px-5 rounded-md text-xs font-semibold text-slate-300 bg-navy-900 hover:bg-navy-800 border border-slate-700 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Interior Architecture & Execution">Interior Architecture & Execution</option>
                        <option value="Civil Structure & Masonry">Civil Structure & Masonry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Guwahati / Nalbari / Barpeta / Assam"
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Approximate plot size, number of storeys, preferred construction timeline, or specific requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 resize-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-sm transition-all duration-300"
                    >
                      <Send size={15} />
                      <span>Request a Consultation</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
