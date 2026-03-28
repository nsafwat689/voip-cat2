import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Globe, Shield, Zap, TrendingUp, Server, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';

export default function WholesaleVoip() {
  useSEO({
    title: 'Wholesale VoIP Provider | Bulk Voice Termination | VOIP CAT',
    description: 'VoIP Cat offers wholesale VoIP termination with competitive rates to 190+ countries. High-volume voice termination, CLI routes, premium quality, and 24/7 NOC support.',
    keywords: 'wholesale VoIP, wholesale VoIP provider, voice termination, bulk VoIP, VoIP termination, wholesale SIP, A-Z termination',
    canonical: 'https://voipcat.com/wholesale-voip',
  });

  const features = [
    { icon: Globe, title: 'A-Z Termination', desc: 'Complete A-Z voice termination coverage with routes to 190+ countries. Direct interconnects with Tier-1 carriers worldwide.' },
    { icon: TrendingUp, title: 'Competitive Rates', desc: 'Industry-leading wholesale rates with volume-based discounts. The more you send, the more you save.' },
    { icon: Shield, title: 'CLI Routes', desc: 'Full CLI pass-through on all routes. Ensure your caller ID is always displayed correctly for maximum answer rates.' },
    { icon: Server, title: 'Redundant Network', desc: 'Multiple POPs across the globe with automatic failover. 99.9% uptime SLA backed by our enterprise infrastructure.' },
    { icon: BarChart3, title: 'Real-Time CDR', desc: 'Access detailed call records in real-time. Monitor ASR, ACD, and PDD metrics through our online portal.' },
    { icon: Zap, title: 'Fast Provisioning', desc: 'Get connected within hours. Our team provisions your account and routes quickly so you can start sending traffic immediately.' },
  ];

  const stats = [
    { value: '190+', label: 'Countries' },
    { value: '10B+', label: 'Minutes/Year' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'NOC Support' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Wholesale Voice
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              WHOLESALE <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">VOIP</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              High-quality wholesale voice termination at competitive rates. Direct carrier interconnects, CLI routes, and enterprise-grade reliability for carriers and resellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20wholesale%20VoIP%20termination." target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/voip-rates">
                <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  View Rates
                </Button>
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary/20">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                WHOLESALE <span className="text-primary">FEATURES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-elevated p-8 space-y-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                WHO WE <span className="text-primary">SERVE</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['VoIP Carriers', 'ITSPs & Resellers', 'Call Centers', 'Telecom Operators'].map((item, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary dark:bg-black">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              START SENDING <span className="text-primary">TRAFFIC TODAY</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Request a free test and experience our wholesale VoIP quality. We offer competitive rates and flexible payment terms for qualified partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/free-test" target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Request Free Test <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/voip-rates" className="text-primary hover:underline">Check VoIP Rates</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk Services</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-reseller" className="text-primary hover:underline">Become a Reseller</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-api" className="text-primary hover:underline">VoIP API</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
