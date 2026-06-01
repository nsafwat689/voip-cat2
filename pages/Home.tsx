import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useSEO } from '@/hooks/useSEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { organizationSchema, serviceSchema, websiteSchema, injectStructuredData } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Globe, Server, Code, Users, Smartphone, MonitorSmartphone } from 'lucide-react';
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

function ConnectStrip() {
  const ways = [
    { icon: Phone,           label: 'SIP Trunk',      desc: 'Connect any PBX or platform',   href: '/sip-trunk' },
    { icon: MonitorSmartphone, label: 'WebRTC',        desc: 'Call from any browser, zero install', href: '/free-test' },
    { icon: Smartphone,      label: 'Android App',    desc: 'VoIP Cat Phone on Google Play',  href: 'https://phone.voipcat.com' },
  ];
  return (
    <div className="bg-black/60 border-y border-primary/15">
      <div className="container">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-primary/15">
          {ways.map(({ icon: Icon, label, desc, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
               rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
    { icon: Smartphone, title: 'WebRTC & Mobile App',  description: 'Call from any browser with our WebRTC softphone, or download the VoIP Cat Android app — no hardware needed.', link: 'https://phone.voipcat.com' },
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
                onClick={() => service.link.startsWith('http') ? window.open(service.link, '_blank', 'noopener,noreferrer') : setLocation(service.link)}
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
        <EnterpriseTrustSection />
        <Separator />
        <ServicesOverview />
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
