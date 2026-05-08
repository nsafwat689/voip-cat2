import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, Check, ArrowRight, BarChart2, Shield } from 'lucide-react';

export default function PremiumRouting() {
  useSEO({
    title: 'Premium Voice Routing — High ASR CLI Routes | VoIP Cat',
    description: 'Premium VoIP routing with guaranteed CLI, high ASR, and real-time route switching. Carrier-grade quality for enterprises and wholesale carriers.',
    keywords: 'premium VoIP routing, CLI routing, high ASR routes, voice quality routing, wholesale premium routes',
    canonical: 'https://voipcat.com/premium-routing',
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="container max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Premium Routing</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              PREMIUM <span className="text-primary">VOICE ROUTING</span> — MAXIMUM ASR
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our premium routing tier delivers the highest possible ASR with guaranteed CLI — for enterprises and carriers that can't afford quality issues.
            </p>
            <a href="https://wa.me/201557649136?text=Hi%2C%20I%20need%20premium%20routing%20access." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Request Access <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: BarChart2, title: 'Highest ASR',    desc: 'Direct carrier interconnects with no multi-hop routing. ASR typically 95–99% on major destinations.' },
                { icon: Check,     title: 'CLI Guaranteed', desc: 'Caller ID delivered intact on all routes. Essential for contact centres and regulated industries.' },
                { icon: Shield,    title: 'Anti-Fraud',     desc: 'Premium tier includes enhanced fraud monitoring with automatic suspension of suspicious patterns.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 uppercase tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
