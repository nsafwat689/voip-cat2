import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Phone, Zap, Shield } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Sip3CX() {
  useSEO({
    title: '3CX SIP Trunk — Carrier-Grade VoIP for 3CX PBX | VoIP Cat',
    description: 'Connect your 3CX PBX to the PSTN with VoIP Cat SIP trunks. HD voice, 99.99% uptime, instant provisioning. Works with 3CX v16, v18, v20. Free test route available.',
    keywords: '3CX SIP trunk, 3CX VoIP provider, 3CX hosted, SIP trunk 3CX setup, 3CX trunk configuration',
    canonical: 'https://voipcat.com/sip-trunk/3cx',
  });

  const [, setLocation] = useLocation();

  const steps = [
    { step: '01', title: 'Create a Trunk', desc: 'In 3CX admin, go to SIP Trunks → Add SIP Trunk → Generic.' },
    { step: '02', title: 'Enter Credentials', desc: 'Paste your VoIP Cat SIP server, username, and password from the portal.' },
    { step: '03', title: 'Assign DIDs', desc: 'Map your DID numbers to inbound rules in the 3CX dashboard.' },
    { step: '04', title: 'Test & Go Live', desc: 'Place a test call — HD audio confirmed, trunk live in under 60 minutes.' },
  ];

  const features = [
    '3CX v16, v18, v20 compatible',
    'HD Voice G.711 / G.729 / Opus',
    'TLS + SRTP encryption',
    'Inbound & outbound DID routing',
    'Emergency (E911/999) support',
    'T.38 fax passthrough',
    'Real-time call monitoring',
    '99.99% uptime SLA',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>3CX SIP Trunk</span>
              </div>
              <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                CARRIER-GRADE <span className="text-primary">SIP TRUNK</span> FOR 3CX PBX
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Connect your 3CX phone system to the PSTN with VoIP Cat SIP trunks. HD voice, instant provisioning, and a 99.99% uptime SLA — configured in under 60 minutes.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => setLocation('/free-test')} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Start Free Test <ArrowRight className="w-4 h-4" />
                </button>
                <a href="https://wa.me/201557649136?text=Hi%2C%20I%20need%20a%203CX%20SIP%20trunk." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl text-foreground font-bold uppercase tracking-tighter mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  EVERYTHING YOU NEED FOR <span className="text-primary">3CX</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[{ icon: Zap, title: '60-Minute Setup', desc: 'Credentials delivered instantly. Follow our 3CX config guide and you\'re live in under an hour.' },
                  { icon: Shield, title: 'Encrypted by Default', desc: 'All 3CX trunks use SIP TLS signalling and SRTP media encryption. No extra config required.' },
                  { icon: Phone, title: 'Local DIDs in 60+ Countries', desc: 'Get local numbers for any country and route them directly to 3CX extensions or ring groups.' }
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{title}</div>
                      <div className="text-sm text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Setup steps */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="text-3xl text-white font-bold uppercase tracking-tighter text-center mb-12" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SETUP IN <span className="text-primary">4 STEPS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-black/40 rounded-xl border border-primary/20 p-6 text-center">
                  <div className="text-4xl font-bold text-primary/30 mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{step}</div>
                  <div className="text-white font-bold mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>{title}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center space-y-5">
              <h2 className="text-2xl text-foreground font-bold uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Ready to Connect Your 3CX?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Request a free test route — provisioned in minutes, no credit card required.</p>
              <button onClick={() => setLocation('/free-test')} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Free Test Route <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
