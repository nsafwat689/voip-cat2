import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Globe2, Zap, Shield, Clock, Phone, Wifi, Lock, Smartphone, Code2, LogIn, PhoneCall } from 'lucide-react';
import { useLocation } from 'wouter';
import { PORTAL_URL } from '@/lib/portal';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

// Floating icons: icon, position (top/left as %), animation delay, size, label
const FLOAT_ICONS = [
  { Icon: Globe2,    top: 8,  left: 10, delay: 0,    size: 22, label: '190+ Countries',   dur: 6 },
  { Icon: Phone,     top: 5,  left: 42, delay: 0.8,  size: 20, label: 'SIP Trunk',        dur: 7 },
  { Icon: Wifi,      top: 12, left: 70, delay: 1.6,  size: 18, label: 'WebRTC',           dur: 5 },
  { Icon: Shield,    top: 45, left: 5,  delay: 2.1,  size: 18, label: 'Encrypted',        dur: 8 },
  { Icon: Clock,     top: 18, left: 85, delay: 0.4,  size: 16, label: 'Per-Second',       dur: 6.5 },
  { Icon: Smartphone,top: 55, left: 88, delay: 1.2,  size: 18, label: 'Android App',      dur: 7.5 },
  { Icon: Code2,     top: 62, left: 2,  delay: 2.5,  size: 16, label: 'VoIP API',         dur: 5.5 },
  { Icon: Lock,      top: 30, left: 95, delay: 1.8,  size: 14, label: 'TLS/SRTP',         dur: 9 },
  { Icon: Zap,       top: 75, left: 78, delay: 0.6,  size: 16, label: '99.99% SLA',       dur: 6 },
];

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
      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-14px) rotate(3deg); }
          66%      { transform: translateY(7px) rotate(-2deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          40%      { transform: translateY(10px) rotate(-4deg); }
          70%      { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-18px) scale(1.05); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 8px 2px rgba(0,163,255,0.35); }
          50%      { box-shadow: 0 0 22px 6px rgba(0,163,255,0.7); }
        }
        @keyframes registerPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,163,255,0.5), 0 0 30px 4px rgba(0,163,255,0.3); }
          50%      { box-shadow: 0 0 0 12px rgba(0,163,255,0), 0 0 50px 10px rgba(0,163,255,0.5); }
        }
        @keyframes demoPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.4), 0 0 25px 4px rgba(0,255,136,0.25); }
          50%      { box-shadow: 0 0 0 10px rgba(0,255,136,0), 0 0 45px 10px rgba(0,255,136,0.45); }
        }
        .float-icon-a { animation: floatA var(--dur,6s) ease-in-out infinite; }
        .float-icon-b { animation: floatB var(--dur,7s) ease-in-out infinite; }
        .float-icon-c { animation: floatC var(--dur,5.5s) ease-in-out infinite; }
        .glow-icon    { animation: glowPulse 2.5s ease-in-out infinite; }
        .btn-register { animation: registerPulse 2.2s ease-in-out infinite; }
        .btn-demo     { animation: demoPulse 2.6s ease-in-out infinite; }
      `}</style>

      {/* Background ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-10 -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT: Copy + CTAs */}
          <div className="fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Carrier-Grade Infrastructure
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

            {/* PRIMARY CTAs — demo + register as the two main characters */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Demo — green glow */}
              <button
                onClick={() => setLocation('/demo')}
                className="btn-demo relative inline-flex items-center justify-center gap-3 h-16 px-8 rounded-xl font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:scale-105 active:scale-100"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: 'linear-gradient(135deg, #00b359 0%, #007a3d 100%)',
                  border: '1px solid rgba(0,255,136,0.4)',
                }}
              >
                <PhoneCall className="w-5 h-5" />
                Try Live Demo
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                </span>
              </button>

              {/* Register — electric blue glow */}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-register relative inline-flex items-center justify-center gap-3 h-16 px-8 rounded-xl font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:scale-105 active:scale-100"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: 'linear-gradient(135deg, #0085d4 0%, #005a9e 100%)',
                  border: '1px solid rgba(0,163,255,0.5)',
                }}
              >
                <LogIn className="w-5 h-5" />
                Register Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Credentials in 60s</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />190+ countries</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Free test route</span>
            </div>

            <p className="text-xs text-slate-600 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Trusted by carriers &amp; enterprises in 60+ countries
            </p>
          </div>

          {/* RIGHT: Floating icons + hero image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>

            {/* Floating glowing icons — fill the dark space ABOVE the hero image */}
            <div className="absolute inset-0 -top-8 pointer-events-none" style={{ zIndex: 10 }}>
              {FLOAT_ICONS.map(({ Icon, top, left, delay, size, label, dur }, i) => {
                const animClass = i % 3 === 0 ? 'float-icon-a' : i % 3 === 1 ? 'float-icon-b' : 'float-icon-c';
                return (
                  <div
                    key={label}
                    className={`absolute flex flex-col items-center gap-1 ${animClass}`}
                    style={{
                      top: `${top}%`,
                      left: `${left}%`,
                      animationDelay: `${delay}s`,
                      ['--dur' as any]: `${dur}s`,
                    }}
                  >
                    <div
                      className="glow-icon rounded-xl flex items-center justify-center bg-black/60 backdrop-blur-sm border border-primary/40"
                      style={{
                        width: size + 16,
                        height: size + 16,
                        animationDelay: `${delay + 0.3}s`,
                      }}
                    >
                      <Icon style={{ width: size, height: size }} className="text-primary" />
                    </div>
                    <span
                      className="text-[8px] text-primary/70 uppercase tracking-widest whitespace-nowrap font-bold px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-sm"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,163,255,0.2)] border border-primary/20" style={{ marginTop: '80px' }}>
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
        <div className="mt-28 pt-10 border-t border-primary/20">
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
