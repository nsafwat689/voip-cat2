import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

/**
 * Calendly Integration — Task 16
 * Inline embed for technical consultation scheduling.
 * Replace CALENDLY_URL with your actual Calendly link.
 */
const CALENDLY_URL = 'https://calendly.com/sales-voipcat/30min';

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Book a Consultation
            </span>
          </div>
          <h2 className="text-3xl text-foreground font-bold uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            SCHEDULE A <span className="text-primary">TECHNICAL CALL</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Speak directly with our VoIP engineers. 30-minute technical consultation — free, no commitment.
          </p>
        </div>

        {/* Calendly inline embed */}
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-border shadow-lg"
          data-url={CALENDLY_URL}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  );
}
