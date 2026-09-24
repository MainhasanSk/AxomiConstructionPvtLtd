import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, Shield } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 p-0.5 shadow-gold-sm bg-navy-900">
                <img
                  src="/logo.jpg"
                  alt="Axomi Construction Logo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white tracking-wider">
                  AXOMI
                </h3>
                <p className="text-[10px] font-semibold text-gold-400 uppercase tracking-widest">
                  CONSTRUCTION PRIVATE LIMITED
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-white tracking-wide">
                "{companyData.tagline}"
              </p>
              <p className="text-xs text-gold-400 font-medium">
                Your Vision | Our Construction • A Better Future
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional civil engineering, residential, commercial construction, and project management solutions with unwavering commitment to structural durability and quality craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={14} className="text-gold-400 shrink-0" />
              <span>Assam, India</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Axomi</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-400 transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold-400 transition-colors">Construction Process</a>
              </li>
              <li>
                <a href="#team" className="hover:text-gold-400 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Construction Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">01</span>
                <span>Residential Construction & Villas</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">02</span>
                <span>Commercial Complexes & Auditoriums</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">03</span>
                <span>Comprehensive Project Management</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">04</span>
                <span>RCC Framing, Masonry & Site Supervision</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">05</span>
                <span>Interior Architecture & Acoustic Systems</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/40 text-xs text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Phone size={13} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Primary Inquiries</span>
                  <span className="font-semibold text-gold-300">{companyData.phones[0].display}</span>
                </div>
              </a>

              <a
                href={`tel:${companyData.phones[1].tel}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/40 text-xs text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Phone size={13} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Direct Line</span>
                  <span className="font-semibold text-gold-300">{companyData.phones[1].display}</span>
                </div>
              </a>

              <a
                href={companyData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare size={14} />
                <span>Chat on Official WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Axomi Construction Private Limited. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Assam, India
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
