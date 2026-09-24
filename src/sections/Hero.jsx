import React from 'react';
import { ArrowRight, Phone, MessageSquare, Compass, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onOpenConsultation, onOpenEstimator }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-navy-950"
    >
      {/* Background Architectural Blueprint Grid & Cinematic Gradient */}
      <div className="absolute inset-0 bg-blueprint opacity-35 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-hero pointer-events-none"></div>

      {/* Decorative Gold Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 shadow-gold-sm">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                AXOMI CONSTRUCTION PRIVATE LIMITED
              </span>
            </div>

            {/* Main Tagline & Company Name */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                BUILDING <br />
                <span className="text-gold-gradient">TOMORROW</span> <br />
                TOGETHER.
              </h1>

              <div className="flex items-center gap-3 pt-1">
                <div className="h-0.5 w-12 bg-gradient-to-r from-gold-400 to-transparent"></div>
                <p className="font-display font-semibold text-base sm:text-xl text-slate-200 tracking-wide">
                  Your Vision <span className="text-gold-400">|</span> Our Construction
                </p>
              </div>
            </div>

            {/* Supporting Description & Trust Line */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              At Axomi Construction Private Limited, every project begins with a vision and is shaped through thoughtful planning, quality execution, and a commitment to delivering work that stands the test of time.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 bg-navy-900/60 p-3 rounded-lg border border-slate-800/80 max-w-lg">
              <ShieldCheck size={18} className="text-gold-400 shrink-0" />
              <span>
                <strong className="text-slate-200">{companyData.trustLine}</strong> — Residential, Commercial & Project Management.
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide text-white bg-navy-900/90 hover:bg-navy-850 border border-slate-700 hover:border-gold-500/50 transition-all duration-300"
              >
                <span>View Our Work</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md text-xs font-semibold text-gold-300 hover:text-gold-200 transition-colors"
                title="Calculate preliminary project scope and timeline"
              >
                <Compass size={16} />
                <span className="underline underline-offset-4 decoration-gold-500/50">Project Estimator</span>
              </button>
            </div>

            {/* Direct Phone Numbers on Hero */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-lg">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Direct Contact:</span>
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 font-semibold transition-colors"
              >
                <Phone size={13} className="text-gold-400" />
                <span>{companyData.phones[0].display}</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`tel:${companyData.phones[1].tel}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 font-semibold transition-colors"
              >
                <Phone size={13} className="text-gold-400" />
                <span>{companyData.phones[1].display}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column - Custom Crafted Showcase with Authentic Logo & Project */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Architectural Frame */}
              <div className="relative p-2 rounded-2xl bg-gradient-to-b from-gold-500/30 via-slate-800/40 to-gold-500/10 backdrop-blur-md shadow-2xl">
                {/* Main Visual Image (Real Project Elevation) */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-navy-900 border border-slate-700/60 group">
                  <img
                    src="/axomi-design.jpg"
                    alt="Axomi Construction Residential Project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30"></div>

                  {/* Top Badge: Verified Project Design */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-navy-950/85 backdrop-blur-md border border-gold-500/40">
                    <Building2 size={13} className="text-gold-400" />
                    <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                      Architectural Elevation
                    </span>
                  </div>

                  {/* Floating Logo Badge in Bottom Corner */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md border border-gold-500/30 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 p-0.5 bg-navy-900 shrink-0">
                        <img
                          src="/logo.jpg"
                          alt="Axomi Construction Official 3D Crest"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="font-display font-black text-sm text-white tracking-wide">
                            AXOMI CONSTRUCTION
                          </h2>
                        </div>
                        <p className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold">
                          A Better Future • Assam, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engineering Quality Stamp */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3 rounded-xl bg-navy-900/95 border border-gold-500/50 shadow-gold-sm backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <CheckCircle2 size={17} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Engineering Standard
                  </span>
                  <span className="text-xs font-bold text-white">
                    Verified Civil Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
