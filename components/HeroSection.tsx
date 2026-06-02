import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Globe2, Zap, Shield, Clock, LogIn, PhoneCall, Smartphone } from 'lucide-react';
import { useLocation } from 'wouter';
import { PORTAL_URL } from '@/lib/portal';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

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
      <style>{`
        @keyframes registerPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,163,255,0.5), 0 0 30px 4px rgba(0,163,255,0.3); }
          50%      { box-shadow: 0 0 0 12px rgba(0,163,255,0), 0 0 50px 10px rgba(0,163,255,0.5); }
        }
        @keyframes demoPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.4), 0 0 25px 4px rgba(0,255,136,0.25); }
          50%      { box-shadow: 0 0 0 10px rgba(0,255,136,0), 0 0 45px 10px rgba(0,255,136,0.45); }
        }
        .btn-register { animation: registerPulse 2.2s ease-in-out infinite; }
        .btn-demo     { animation: demoPulse 2.6s ease-in-out infinite; }
      `}</style>

      {/* Background ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-10 -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT: Copy */}
          <div className="fade-in-up space-y-8 md:pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SIP Trunking · WebRTC · Android App
              </span>
            </div>

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

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400 uppercase tracking-wider pt-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Credentials in 60s</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />190+ countries</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Free test route</span>
            </div>

            <p className="text-xs text-slate-600 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Trusted by carriers &amp; enterprises in 60+ countries
            </p>
          </div>

          {/* RIGHT: CTAs above image */}
          <div className="relative fade-in-up space-y-5" style={{ animationDelay: '0.2s' }}>

            {/* CTAs — dominant, glowing, above the image */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Demo — green glow */}
              <button
                onClick={() => setLocation('/demo')}
                className="btn-demo relative flex-1 inline-flex items-center justify-center gap-3 h-16 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:scale-105 active:scale-100"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: 'linear-gradient(135deg, #00b359 0%, #007a3d 100%)',
                  border: '1px solid rgba(0,255,136,0.4)',
                }}
              >
                <PhoneCall className="w-5 h-5 flex-shrink-0" />
                Try Live Demo
                {/* Live indicator dot */}
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                </span>
              </button>

              {/* Register — electric blue glow */}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-register flex-1 inline-flex items-center justify-center gap-3 h-16 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:scale-105 active:scale-100"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: 'linear-gradient(135deg, #0085d4 0%, #005a9e 100%)',
                  border: '1px solid rgba(0,163,255,0.5)',
                }}
              >
                <LogIn className="w-5 h-5 flex-shrink-0" />
                Register Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Android app — tertiary CTA */}
            <div className="flex items-center gap-4">
              <a
                href="/VoipCatPhone-v1.2.apk"
                download="VoipCatPhone-v1.2.apk"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
              >
                <Smartphone className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Download Android App
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-slate-700 text-xs">·</span>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors group"
              >
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" /></span>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Try WebRTC Free — no signup
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Hero image */}
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
        <div className="mt-24 pt-10 border-t border-primary/20">
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
