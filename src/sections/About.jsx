import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Award, Users } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function About({ onOpenConsultation }) {
  const principles = [
    {
      title: "Quality-Focused Execution",
      desc: "Strict adherence to civil engineering specifications, certified reinforcement, and durable materials."
    },
    {
      title: "Professional Project Management",
      desc: "Structured milestone tracking, clear timelines, and disciplined on-site supervision at every phase."
    },
    {
      title: "Client-Focused Approach",
      desc: "Designing and building spaces tailored to your functional needs, aesthetic taste, and long-term vision."
    },
    {
      title: "Attention to Detail",
      desc: "Careful precision in structural alignment, brickwork geometry, surface plastering, and architectural finishes."
    },
    {
      title: "Reliable Construction Practices",
      desc: "Transparent coordination, ethical procurement, and robust engineering built for generational longevity."
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 py-14 sm:py-24 relative overflow-hidden bg-navy-950">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Real Company Photograph (Team at Corporate Office) */}
          <div className="lg:col-span-6 space-y-3">
            {/* Photo Box - 100% Unobstructed, Bright, and Fully Visible */}
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 p-2 sm:p-2.5 bg-gradient-to-b from-navy-800 to-navy-900 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-navy-950">
                <img
                  src="/teamaxomi2.jpg"
                  alt="Axomi Construction Team at Head Office"
                  className="w-full h-auto block rounded-lg aspect-[4/3] object-contain sm:object-cover bg-navy-950"
                />
              </div>
            </div>

            {/* Dedicated Text Card Cleanly Below The Photo */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-navy-900/95 border border-slate-700/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Headquarters & Project Office
                  </span>
                  <span className="text-[11px] sm:text-xs text-gold-400 font-medium">
                    Axomi Construction Private Limited
                  </span>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/40">
                  Active Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Approach */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                  About Axomi
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Building More Than Structures.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Axomi Construction Private Limited, every project begins with a vision and is shaped through thoughtful planning, quality execution, and a commitment to delivering work that stands the test of time.
            </p>

            {/* Principles Checklist */}
            <div className="space-y-3.5 pt-2">
              {principles.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
              >
                <span>Know More About Our Services</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={onOpenConsultation}
                className="text-xs font-semibold text-slate-300 hover:text-gold-400 underline underline-offset-4 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
