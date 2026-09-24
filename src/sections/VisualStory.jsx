import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function VisualStory({ onOpenConsultation }) {
  return (
    <section className="relative py-28 overflow-hidden bg-navy-950">
      {/* Background Cinematic Construction Image with Dark Navy Blend */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Axomi-Work.jpg"
          alt="Axomi Construction Pavilion Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/80"></div>
        <div className="absolute inset-0 bg-blueprint opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
              Axomi Construction Corporate Vision
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            Your Vision. <br />
            <span className="text-gold-gradient">Our Construction.</span> <br />
            A Better Future.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            From the initial foundation footing to the final architectural detailing, Axomi Construction Private Limited delivers structural safety, disciplined project management, and generational craftsmanship across Assam.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-glow transition-all duration-300"
            >
              <span>Start Your Construction Conversation</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={`tel:${companyData.phones[0].tel}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-gold-500/50 bg-navy-900/80 transition-colors"
            >
              <Phone size={14} className="text-gold-400" />
              <span>Direct: {companyData.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
