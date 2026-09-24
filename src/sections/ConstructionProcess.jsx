import React from 'react';
import { MessageSquare, Calendar, Compass, HardHat, CheckCircle2, KeyRound } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ConstructionProcess({ onOpenConsultation }) {
  const stepIcons = [
    MessageSquare,
    Calendar,
    Compass,
    HardHat,
    CheckCircle2,
    KeyRound
  ];

  return (
    <section id="process" className="py-24 relative bg-navy-900 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              Clear Workflow
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            From Vision to Reality
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A structured, transparent six-stage construction methodology ensuring zero ambiguity from initial sketch to final keys.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {companyData.processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || HardHat;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-navy-850/80 border border-slate-800 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-gold-500/50 hover:bg-navy-800/90 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono font-black text-2xl sm:text-3xl text-gold-400/90 group-hover:text-gold-300 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400/80 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="uppercase tracking-wider font-semibold">Stage {idx + 1} of 6</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Ready to initiate Step 01 with our civil engineers?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
          >
            <span>Book Your Initial Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
