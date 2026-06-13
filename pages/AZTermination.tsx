import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PORTAL_URL } from '@/lib/portal';
import { Globe2, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { useLocation } from 'wouter';

export default function AZTermination() {
  useSEO({
    title: 'A-Z Voice Termination — Wholesale VoIP to 190+ Countries | VoIP Cat',
    description: 'Premium A-Z wholesale voice termination to 190+ countries. CLI routes, high ASR, competitive rates, real-time CDR. Carrier-grade interconnects. Free test available.',
    keywords: 'A-Z termination, wholesale voice termination, VoIP termination, international voice termination, wholesale VoIP rates',
    canonical: 'https://voipcat.com/a-z-termination',
  });

  const [, setLocation] = useLocation();

  const regions = [
    { name: 'Western Europe', destinations: 32, avgRate: '$0.006/min', asrRange: '95–99%' },
    { name: 'Middle East',    destinations: 18, avgRate: '$0.018/min', asrRange: '90–97%' },
    { name: 'North America',  destinations: 4,  avgRate: '$0.004/min', asrRange: '97–99%' },
    { name: 'Asia Pacific',   destinations: 38, avgRate: '$0.010/min', asrRange: '88–96%' },
    { name: 'Latin America',  destinations: 28, avgRate: '$0.013/min', asrRange: '85–95%' },
    { name: 'Africa',         destinations: 54, avgRate: '$0.022/min', asrRange: '80–92%' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Globe2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>A-Z Termination</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              WHOLESALE A-Z VOICE <span className="text-primary">TERMINATION</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Premium voice routes to 190+ countries. CLI guaranteed, high ASR, real-time CDR, and competitive wholesale rates backed by a carrier-grade SLA.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/201038450546?text=Hi%2C%20I%20need%20A-Z%20termination%20rates." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Rate Sheet <ArrowRight className="w-4 h-4" />
              </a>
              <button onClick={() => setLocation('/voip-rates')} className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                View Live Rates
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container space-y-10">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
              {[{ v: '190+', l: 'Countries' }, { v: 'CLI', l: 'Guaranteed' }, { v: '99.99%', l: 'Uptime SLA' }].map(({ v, l }) => (
                <div key={l} className="p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{v}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{l}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              COVERAGE BY <span className="text-primary">REGION</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    {['Region', 'Destinations', 'Avg Rate', 'Typical ASR'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs uppercase tracking-widest text-muted-foreground font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {regions.map((r, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary" />{r.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{r.destinations}</td>
                      <td className="px-6 py-4 text-muted-foreground font-mono">{r.avgRate}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md border border-green-500/20">{r.asrRange}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">
              Average rates are indicative and vary by route, volume and CLI/NCLI. Live, account-specific pricing updates in real time inside the portal — <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">log in for live rates</a>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ icon: TrendingUp, t: 'LCR Optimised', d: 'Our LCR engine balances cost and quality on every call — you get the best route automatically.' },
                { icon: Zap,        t: 'Real-Time CDR',  d: 'Instant call detail records via API or portal. Export to CSV, JSON, or your billing system.' },
                { icon: Globe2,     t: 'CLI / NCLI',     d: 'Both CLI and NCLI routes available per destination. Verified caller ID across all routes.' },
              ].map(({ icon: Icon, t, d }, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-bold text-foreground mb-2">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
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
