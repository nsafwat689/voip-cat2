import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { useSEO } from '@/hooks/useSEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { organizationSchema, serviceSchema, websiteSchema, injectStructuredData } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Globe, Server, Code, Users, Smartphone, MonitorSmartphone, Calculator, DollarSign, PhoneCall, Zap } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EnterpriseTrustSection from '@/components/EnterpriseTrustSection';
import AboutSection from '@/components/AboutSection';
import CloudPBXSection from '@/components/CloudPBXSection';
import PlansSection from '@/components/PlansSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Separator = () => <div className="border-t border-white/10" />;

function useCountUp(target: number, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
}

function LiveStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const calls   = useCountUp(2847,  1800, visible);
  const minutes = useCountUp(6200000, 2200, visible);
  const countries = useCountUp(190, 1400, visible);
  const accounts = useCountUp(1400, 2000, visible);
  const fmt = (n: number) => n >= 1000000 ? (n / 1000000).toFixed(1) + 'M' : n >= 1000 ? (n / 1000).toFixed(0) + 'K' : String(n);
  const stats = [
    { value: fmt(calls),    label: 'Active calls right now', pulse: true },
    { value: fmt(minutes),  label: 'Minutes connected this month', pulse: false },
    { value: `${countries}+`, label: 'Countries covered', pulse: false },
    { value: `${fmt(accounts)}+`, label: 'Active accounts', pulse: false },
  ];
  return (
    <div ref={ref} className="bg-black border-y border-primary/10">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label, pulse }) => (
            <div key={label} className="space-y-1">
              <div className="flex items-center justify-center gap-2">
                {pulse && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" /></span>}
                <span className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value}</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConnectStrip() {
  const ways = [
    { icon: Phone,           label: 'SIP Trunk',      desc: 'Connect any PBX or platform',   href: '/sip-trunk' },
    { icon: MonitorSmartphone, label: 'Live Demo',      desc: 'Call from your browser right now', href: '/demo' },
    { icon: Smartphone,      label: 'Android App',    desc: 'Download VoIP Cat Phone APK',    href: '/VoipCatPhone-v1.2.apk' },
  ];
  return (
    <div className="bg-black/60 border-y border-primary/15">
      <div className="container">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-primary/15">
          {ways.map(({ icon: Icon, label, desc, href }) => (
            <a key={label} href={href}
               target={href.startsWith('http') ? '_blank' : undefined}
               rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
               download={href.endsWith('.apk') ? 'VoipCatPhone-v1.2.apk' : undefined}
               className="flex items-center gap-4 flex-1 px-6 py-5 hover:bg-primary/5 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-white text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {label}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
}

function ServicesOverview() {
  const [, setLocation] = useLocation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    { icon: Phone,    title: 'SIP Trunking',   description: 'Connect your PBX to the PSTN with reliable, affordable SIP trunks. Compatible with 3CX, Asterisk, FreePBX, and more.', link: '/sip-trunk' },
    { icon: Globe,    title: 'Wholesale VoIP',  description: 'A-Z voice termination to 190+ countries. Premium routes with high ASR, CLI support, and competitive rates for carriers.', link: '/wholesale-voip' },
    { icon: Server,   title: 'Cloud PBX',       description: 'Full-featured hosted phone system. Auto-attendant, call recording, voicemail-to-email — all in the cloud.', link: '/cloud-pbx' },
    { icon: Code,     title: 'VoIP API',        description: 'Integrate voice calling into your applications with our developer-friendly REST API. Programmable voice at scale.', link: '/voip-api' },
    { icon: Users,      title: 'VoIP Reseller',        description: 'Start your own VoIP business. White-label solutions, custom branding, and dedicated support for resellers.', link: '/voip-reseller' },
    { icon: Smartphone, title: 'WebRTC & Mobile App',  description: 'Call from any browser with our WebRTC softphone, or download the VoIP Cat Android app — no hardware needed.', link: '/VoipCatPhone-v1.2.apk' },
  ];

  return (
    <section ref={ref} className={`py-20 md:py-32 bg-background relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Complete VoIP solutions for businesses, carriers, and resellers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index}
                onClick={() => {
                  if (service.link.endsWith('.apk')) { const a = document.createElement('a'); a.href = service.link; a.download = 'VoipCatPhone-v1.2.apk'; a.click(); }
                  else if (service.link.startsWith('http')) { window.open(service.link, '_blank', 'noopener,noreferrer'); }
                  else { setLocation(service.link); }
                }}
                className={`bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ToolsShowcase() {
  const [, setLocation] = useLocation();
  const { ref, isVisible } = useScrollAnimation();

  const tools = [
    {
      icon: PhoneCall,
      badge: 'Live',
      badgeColor: 'bg-green-500',
      title: 'WebRTC Demo',
      desc: 'Make a real call from your browser right now. No signup, no download — hear the quality yourself.',
      cta: 'Try It Now',
      href: '/demo',
      accent: 'border-green-500/30 hover:border-green-500/60',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
    },
    {
      icon: Calculator,
      badge: 'Free Tool',
      badgeColor: 'bg-primary',
      title: 'Savings Calculator',
      desc: 'Enter your current call volume and destinations. See exactly how much you save switching to VoIP Cat.',
      cta: 'Calculate Savings',
      href: '/calculator',
      accent: 'border-primary/30 hover:border-primary/60',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: DollarSign,
      badge: 'Resellers',
      badgeColor: 'bg-emerald-600',
      title: 'Earnings Calculator',
      desc: 'Project your monthly income as a VoIP reseller. Slide the volume, set your markup, see your revenue.',
      cta: 'Project Earnings',
      href: '/reseller-calculator',
      accent: 'border-emerald-500/30 hover:border-emerald-500/60',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Zap,
      badge: 'Compare',
      badgeColor: 'bg-violet-600',
      title: 'vs. Competitors',
      desc: 'Honest feature-by-feature comparisons: VoIP Cat vs Twilio, Vonage, and Telnyx. See why we win.',
      cta: 'See Comparisons',
      href: '/vs/twilio',
      accent: 'border-violet-500/30 hover:border-violet-500/60',
      iconBg: 'bg-violet-500/10',
      iconColor: 'text-violet-400',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] -z-10" />
      <div className="container">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Free Tools
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TRY BEFORE YOU <span className="text-primary">COMMIT</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to make an informed decision — calculators, live demos, and competitor comparisons. All free, all instant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                onClick={() => t.href.startsWith('http') ? window.open(t.href, '_blank', 'noopener,noreferrer') : setLocation(t.href)}
                className={`relative bg-card border ${t.accent} rounded-2xl p-8 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms', transition: 'all 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease' }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 ${t.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${t.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>{t.title}</h3>
                      <span className={`px-2 py-0.5 text-[10px] font-bold ${t.badgeColor} text-white rounded-full uppercase tracking-wide`}>{t.badge}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.desc}</p>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {t.cta} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({
    title: 'VoIP Cat — SIP Trunking, WebRTC Softphone & Wholesale VoIP',
    description: 'Carrier-grade SIP trunking, wholesale A-Z termination to 190+ countries, Cloud PBX, WebRTC softphone, and Android app. 99.99% uptime, per-second billing, free test route.',
    keywords: 'SIP trunking, wholesale VoIP, Cloud PBX, VoIP provider, A-Z termination, WebRTC softphone, VoIP Android app, carrier-grade VoIP, voice termination',
    canonical: 'https://voipcat.com',
    ogImage: 'https://voipcat.com/images/og-image.png',
  });

  useEffect(() => {
    injectStructuredData(organizationSchema);
    injectStructuredData(websiteSchema);
    serviceSchema.forEach(schema => injectStructuredData(schema));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ConnectStrip />
        <LiveStatsBar />
        <EnterpriseTrustSection />
        <Separator />
        <ServicesOverview />
        <Separator />
        <AnimatedSection><ToolsShowcase /></AnimatedSection>
        <Separator />
        <AnimatedSection><AboutSection /></AnimatedSection>
        <Separator />
        <AnimatedSection><CloudPBXSection /></AnimatedSection>
        <Separator />
        <AnimatedSection><PlansSection /></AnimatedSection>
        <Separator />
        {/* Task 4: Case Studies replaces Testimonials */}
        <AnimatedSection><CaseStudiesSection /></AnimatedSection>
        <Separator />
        <AnimatedSection><ContactSection /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
