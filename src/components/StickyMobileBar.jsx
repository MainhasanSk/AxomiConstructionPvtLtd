import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function StickyMobileBar({ onOpenConsultation }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-lg border-t border-gold-500/25 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${companyData.phones[0].tel}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-navy-850 hover:bg-navy-800 border border-slate-700/60 text-slate-200 transition-colors active:scale-95"
        >
          <Phone size={16} className="text-gold-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={companyData.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 transition-colors active:scale-95"
        >
          <MessageSquare size={16} className="text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Enquire CTA */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold shadow-gold-sm transition-transform active:scale-95"
        >
          <Calendar size={16} className="text-navy-950 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider">Enquire</span>
        </button>
      </div>
    </div>
  );
}
