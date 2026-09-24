import React, { useState } from 'react';
import { Home, Building2, Layers, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    "01": Home,
    "02": Building2,
    "03": Layers,
    "04": ShieldCheck
  };

  return (
    <section id="services" className="py-24 relative bg-navy-900 border-t border-b border-slate-800/80">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-15 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              What We Do
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Construction Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Solutions designed around your vision, requirements, and project goals.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyData.services.map((service) => {
            const Icon = iconMap[service.id] || Building2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-navy-850/80 border border-slate-700/60 overflow-hidden shadow-xl transition-all duration-400 hover:border-gold-500/50 hover:shadow-gold-glow flex flex-col justify-between"
              >
                {/* Top Image Preview */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-navy-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>

                  {/* Number Badge & Icon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/85 backdrop-blur-md border border-gold-500/40">
                    <span className="font-mono font-bold text-xs text-gold-400">{service.id}</span>
                    <span className="w-1 h-3 bg-gold-500/50 rounded-full"></span>
                    <Icon size={14} className="text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gold-400/90 leading-snug">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Check size={13} className="text-gold-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gold accent line & CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Axomi Standards
                    </span>
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
                    >
                      <span>Discuss Scope</span>
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
