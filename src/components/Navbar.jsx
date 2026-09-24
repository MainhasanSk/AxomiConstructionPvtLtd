import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-lg overflow-hidden border border-gold-500/40 p-0.5 shadow-gold-sm transition-transform duration-300 group-hover:scale-105 bg-navy-900">
                <img
                  src="/logo.jpg"
                  alt="Axomi Construction Private Limited Official Logo"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center leading-none">
                  {/* AX in Metallic Magenta with Gold Bevel */}
                  <span className="font-display font-black text-xl sm:text-2xl tracking-wide text-axomi-logo">
                    AX
                  </span>

                  {/* Iconic Custom 'O' from the uploaded logo with gold rim, magenta ring & green growth bars */}
                  <span className="relative inline-flex items-center justify-center w-[17px] h-[17px] sm:w-[21px] sm:h-[21px] mx-[2px] rounded-full p-[1.5px] bg-gradient-to-b from-[#F5CD4F] via-[#D4AF37] to-[#B89224] shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    <span className="w-full h-full rounded-full p-[2px] bg-gradient-to-b from-[#FF457E] to-[#880833] flex items-center justify-center">
                      <span className="w-full h-full rounded-full bg-[#050B18] flex items-center justify-center p-[2px] border border-emerald-500/40">
                        {/* Green growth bars & arrow */}
                        <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
                          <rect x="2.5" y="9" width="2.2" height="5" rx="0.5" fill="#22C55E" />
                          <rect x="6" y="6" width="2.2" height="8" rx="0.5" fill="#22C55E" />
                          <rect x="9.5" y="3.5" width="2.2" height="10.5" rx="0.5" fill="#4ADE80" />
                          <path d="M7 4L12.5 2L13 7.5" stroke="#4ADE80" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </span>

                  {/* MI in Metallic Magenta with Gold Bevel */}
                  <span className="font-display font-black text-xl sm:text-2xl tracking-wide text-axomi-logo">
                    MI
                  </span>
                </div>

                <span className="text-[9px] sm:text-[10px] font-black text-axomi-logo-sub uppercase mt-1 leading-none">
                  CONSTRUCTION PVT. LTD.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors duration-200 tracking-wide relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Direct Phone */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold-400 transition-colors"
                title="Direct Phone Contact"
              >
                <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Phone size={13} />
                </div>
                <span>{companyData.phones[0].display}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Get a Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md bg-navy-850 text-gold-400 border border-gold-500/30 hover:bg-navy-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-gold-500/30 px-6 pt-5 pb-6 mt-3 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-gold-400 py-1.5 border-b border-slate-800/80"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-md text-center text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-gold-sm"
              >
                Get a Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${companyData.phones[0].tel}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-navy-800 border border-slate-700 text-xs font-semibold text-white"
                >
                  <Phone size={13} className="text-gold-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={companyData.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
