import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

/**
 * Floating Sales CTA — Task 15
 * WhatsApp + Telegram floating buttons. Mobile-first.
 */
export default function FloatingSalesCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-28 md:bottom-28 right-4 md:right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* WhatsApp */}
          <a
            href="https://wa.me/201557649136?text=Hi%2C%20I%27m%20interested%20in%20VoIP%20Cat%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-colors font-bold text-sm whitespace-nowrap"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Sales
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/voipcat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-[#2AABEE] text-white rounded-xl shadow-lg hover:bg-[#229ED9] transition-colors font-bold text-sm whitespace-nowrap"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <Send className="w-5 h-5" />
            Telegram
          </a>
        </div>
      )}
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center hover:bg-primary/80 transition-all active:scale-95"
        aria-label={open ? 'Close chat options' : 'Open chat options'}
      >
        {open
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
}
