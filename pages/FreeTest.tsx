import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Zap, ArrowRight, MessageCircle, LogIn, Clock, Shield, Globe2, PhoneCall } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { PORTAL_URL } from '@/lib/portal';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

export default function FreeTest() {
  useSEO({
    title: 'Free VoIP Test Route — Instant Signup | VOIP CAT',
    description: 'Get a free VoIP test route instantly. Sign up in 60 seconds, configure your SIP credentials, and start testing to 190+ countries. No credit card, no commitment.',
    keywords: 'free voip test, sip trunk test, wholesale voip test, free voip route, test voip quality, instant voip signup',
    canonical: 'https://voipcat.com/free-test',
  });

  const steps = [
    { n: '01', title: 'Create your free account', desc: 'Sign up at the portal in under 60 seconds. Name, email, password — done.' },
    { n: '02', title: 'Get your SIP credentials', desc: 'Username, password, and SIP server address appear immediately on your dashboard.' },
    { n: '03', title: 'Configure & test', desc: 'Point your PBX, softphone, or dialler at our server and make calls to any destination.' },
  ];

  const reasons = [
    'Direct Tier-1 routes — no intermediate resellers',
    'CLI guaranteed on all supported destinations',
    'High ASR & ACD — real carrier-grade quality',
    'Per-second billing — pay only for what you use',
    'Real-time CDRs in your dashboard from first call',
    'Automatic failover across redundant POPs',
    '24/7 NOC support if you hit any issue',
    '190+ country coverage including Middle East & Africa',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-20 md:py-32">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
          <div className="container text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Instant Activation — No Credit Card
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              TEST CARRIER-GRADE <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">VOIP QUALITY</span><br />IN UNDER 5 MINUTES
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Sign up free, get SIP credentials instantly, and route your first call to 190+ countries — no commitment, no waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow h-16 px-10 text-base uppercase tracking-widest font-bold gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <LogIn className="w-5 h-5" />
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`https://wa.me/201557649136?text=${encodeURIComponent('Hi, I want to request a free VoIP test route.')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-16 px-8 border-primary/50 text-primary hover:bg-primary/10 uppercase tracking-widest text-sm gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <MessageCircle className="w-5 h-5" />
                  Talk to Sales First
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              {['No credit card required', 'Credentials in 60 seconds', 'Cancel anytime'].map(t => (
                <span key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                HOW IT <span className="text-primary">WORKS</span>
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground max-w-xl mx-auto">Three steps — under 5 minutes total.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-primary/20" style={{ left: '20%', right: '20%' }} />
              {steps.map((s) => (
                <div key={s.n} className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{s.n}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground uppercase tracking-wider mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow h-14 px-10 uppercase tracking-widest text-sm gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <LogIn className="w-4 h-4" /> Start Now — It's Free
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why VoIP Cat */}
        <section className="py-20 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  WHY TEST WITH <span className="text-primary">VOIP CAT?</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We don't hide quality behind a sales call. Test the real network — the same routes your production traffic will use.
                </p>
                <div className="space-y-3">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-slate-300 text-sm">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live portal preview card */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,163,255,0.1)] space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-green-400 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Portal — Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe2,    label: '190+',       sub: 'Destinations' },
                    { icon: Clock,     label: '< 60s',      sub: 'To get credentials' },
                    { icon: Shield,    label: '99.99%',     sub: 'Uptime SLA' },
                    { icon: PhoneCall, label: 'Per-second', sub: 'Billing' },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
                    </div>
                  ))}
                </div>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="btn-glow w-full h-14 uppercase tracking-widest text-sm gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <LogIn className="w-4 h-4" /> Create Free Account
                  </Button>
                </a>
                <p className="text-xs text-center text-slate-500">Already have an account? <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Log in →</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for enterprise */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container text-center space-y-6">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Need a Custom Route or Enterprise Volume?
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">Talk to our team directly for custom wholesale pricing, dedicated routes, or high-volume agreements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`https://wa.me/201557649136?text=${encodeURIComponent('Hi, I need enterprise VoIP pricing.')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Sales
                </Button>
              </a>
              <a href="mailto:sales@voipcat.com">
                <Button variant="outline" className="border-border hover:border-primary/50 gap-2">
                  <Zap className="w-4 h-4" /> sales@voipcat.com
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
