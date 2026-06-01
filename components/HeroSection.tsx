import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, CheckCircle2, Globe2, Zap, Shield, Clock } from 'lucide-react';
import { useLocation } from 'wouter';
import { PORTAL_URL } from '@/lib/portal';

/**
 * Hero Section — Enterprise Telecom Positioning
 * Task 1: Carrier-grade headline, trust metrics row, CTA hierarchy, social proof
 */
export default function HeroSection() {
  const [, setLocation] = useLocation();

  const trustMetrics = [
    { icon: CheckCircle2, value: '99.99%',    label: 'Uptime SLA' },
    { icon: Globe2,       value: '190+',      label: 'Destinations' },
    { icon: Clock,        value: '24/7',      label: 'NOC Support' },
    { icon: Zap,          value: 'Real-Time', label: 'Route Switching' },
    { icon: Shield,       value: 'Grade A',   label: 'SIP Encryption' },
  ];

  return (
    <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-28">
      {/* Background ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT: Copy */}
          <div className="fade-in-up space-y-8">
            {/* Credibility badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Carrier-Grade Infrastructure
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                CARRIER-GRADE{' '}
                <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">SIP TRUNKING</span>
                {' '}&amp; WHOLESALE VOICE INFRASTRUCTURE
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                Scale global voice operations with premium A-Z routing. Enterprise SIP trunks, wholesale termination, Cloud PBX, WebRTC softphone, and Android app — built on redundant carrier-grade POPs across 6 continents.
              </p>
            </div>

            {/* CTA Hierarchy: Primary → Secondary → Tertiary */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Button
                onClick={() => setLocation('/free-test')}
                className="btn-glow flex items-center gap-3 group h-14 px-8 uppercase tracking-wider text-sm"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                <MessageCircle className="w-5 h-5" />
                Start Free Test Route
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm backdrop-blur-sm"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                onClick={() => window.open(PORTAL_URL, '_blank', 'noopener,noreferrer')}
              >
                View Live Rates
              </Button>
              <a
                href="https://wa.me/201557649136?text=Hi%2C%20I%20need%20enterprise%20pricing."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 h-14 px-6 uppercase tracking-wider text-sm"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  Get Pricing
                </Button>
              </a>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Trusted by carriers &amp; enterprises in 60+ countries
            </p>
          </div>

          {/* RIGHT: Infrastructure visual */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,163,255,0.2)] border border-primary/20">
              <img
                src="/images/hero-voip-communication.jpg"
                alt="Carrier-Grade VoIP Infrastructure"
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            </div>

            {/* Floating live-status card */}
            <div className="absolute -bottom-8 -left-8 bg-secondary/90 backdrop-blur-xl rounded-xl shadow-2xl p-5 border border-primary/30 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 uppercase tracking-widest font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  All Systems Operational
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <div className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>99.99%</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">Uptime SLA</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <div className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>190+</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST METRICS ROW */}
        <div className="mt-20 pt-10 border-t border-primary/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {trustMetrics.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
