import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Phone, Globe, Shield, Server, Zap, Users, Headphones } from 'lucide-react';
import { Link } from 'wouter';

export default function SipTrunk() {
  useSEO({
    title: 'SIP Trunk Provider | Enterprise SIP Trunking Service | VOIP CAT',
    description: 'VoIP Cat offers reliable SIP trunk services for businesses of all sizes. Reduce costs by up to 60%, get unlimited channels, and enjoy crystal-clear HD voice quality. Free test available.',
    keywords: 'SIP trunk provider, SIP trunking service, SIP trunk, business SIP, enterprise SIP trunk, SIP trunk pricing, VoIP SIP trunk',
    canonical: 'https://voipcat.com/sip-trunk',
  });

  const features = [
    { icon: Globe, title: 'Global Coverage', desc: 'SIP trunks with coverage in 190+ countries. Local and international DIDs available.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'TLS/SRTP encryption, fraud detection, and DDoS protection on all SIP trunks.' },
    { icon: Zap, title: 'Instant Setup', desc: 'Get your SIP trunk provisioned in minutes. No hardware required, no technician visits.' },
    { icon: Users, title: 'Unlimited Channels', desc: 'Scale your concurrent calls as needed. No per-channel fees on enterprise plans.' },
    { icon: Server, title: 'Redundant Infrastructure', desc: 'Geo-redundant SIP proxies with automatic failover. 99.9% uptime SLA guaranteed.' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support team available around the clock via WhatsApp, email, and phone.' },
  ];

  const useCases = [
    { title: 'Call Centers', desc: 'High-volume SIP trunks optimized for call center operations with advanced routing and real-time monitoring.' },
    { title: 'Multi-Office Businesses', desc: 'Connect multiple office locations with a single SIP trunk. Centralize your communications and reduce costs.' },
    { title: 'PBX Integration', desc: 'Compatible with Asterisk, FreePBX, 3CX, and all major PBX systems. Easy plug-and-play setup.' },
    { title: 'UCaaS Providers', desc: 'White-label SIP trunking for Unified Communications providers. API access and bulk provisioning available.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    SIP Trunking
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  SIP <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">TRUNK</span> PROVIDER
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Enterprise-grade SIP trunking with crystal-clear HD voice, global coverage, and industry-leading reliability. Save up to 60% compared to traditional phone lines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20your%20SIP%20trunk%20services." target="_blank" rel="noopener noreferrer">
                    <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Get Free Test <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link href="/voip-rates">
                    <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      View Rates
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.2)] border border-primary/20">
                  <img src="/images/voip-network.jpg" alt="SIP Trunk Network Infrastructure" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                WHY CHOOSE OUR <span className="text-primary">SIP TRUNKS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Reliable, scalable, and cost-effective SIP trunking built for modern businesses.</p>
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

        {/* Use Cases */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SIP TRUNK <span className="text-primary">USE CASES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, index) => (
                <div key={index} className="card-elevated p-8 space-y-3">
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary dark:bg-black">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              READY TO <span className="text-primary">GET STARTED</span>?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Contact us for a free test route and see the difference premium SIP trunking makes. No contracts, no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20test%20your%20SIP%20trunk%20service." target="_blank" rel="noopener noreferrer">
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
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/cloud-pbx" className="text-primary hover:underline">Cloud PBX</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-reseller" className="text-primary hover:underline">Become a Reseller</Link>
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
