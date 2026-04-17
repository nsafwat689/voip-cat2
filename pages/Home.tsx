import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useSEO } from '@/hooks/useSEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { organizationSchema, serviceSchema, websiteSchema, injectStructuredData } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Globe, Server, Code, Users, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CloudPBXSection from '@/components/CloudPBXSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


const Separator = () => <div className="border-t border-white/20" />;

/**
 * Services Overview Section - Links to all service pages
 */
function ServicesOverview() {
  const [, setLocation] = useLocation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Phone,
      title: 'SIP Trunking',
      description: 'Connect your PBX to the PSTN with reliable, affordable SIP trunks. Compatible with 3CX, Asterisk, FreePBX, and more.',
      link: '/sip-trunk',
    },
    {
      icon: Globe,
      title: 'Wholesale VoIP',
      description: 'A-Z voice termination to 190+ countries. Premium routes with high ASR, CLI support, and competitive rates for carriers.',
      link: '/wholesale-voip',
    },
    {
      icon: Server,
      title: 'Cloud PBX',
      description: 'Full-featured hosted phone system. Auto-attendant, call recording, voicemail-to-email — all in the cloud.',
      link: '/cloud-pbx',
    },
    {
      icon: Code,
      title: 'VoIP API',
      description: 'Integrate voice calling into your applications with our developer-friendly REST API. Programmable voice at scale.',
      link: '/voip-api',
    },
    {
      icon: Users,
      title: 'VoIP Reseller',
      description: 'Start your own VoIP business. White-label solutions, custom branding, and dedicated support for resellers.',
      link: '/voip-reseller',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Hub',
      description: 'Expert guides on VoIP technology, SIP trunking, PBX setup, and more. Learn from our team of specialists.',
      link: '/articles',
    },
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 md:py-32 bg-background relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Complete VoIP solutions for businesses, carriers, and resellers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => setLocation(service.link)}
                className={`bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
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

/**
 * Animated Section Wrapper
 */
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Home Page - VoipCat Website
 * Modern Enterprise Blue Design System
 * Sections: Hero, Services, About, Cloud PBX, Plans, Testimonials, Contact, Footer
 */
export default function Home() {
  useSEO({
    title: 'VoIP Cat - SIP Trunking, Wholesale VoIP & Cloud PBX Solutions',
    description: 'Enterprise VoIP solutions: SIP trunking, wholesale VoIP termination to 190+ countries, Cloud PBX, and VoIP API. Competitive rates, 99.9% uptime, 24/7 support. Free test route available.',
    keywords: 'VoIP provider, SIP trunk, wholesale VoIP, Cloud PBX, VoIP rates, VoIP reseller, voice termination, A-Z routes, call center VoIP, business phone system',
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
        <Separator />
        <ServicesOverview />
        <Separator />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <Separator />
        <AnimatedSection>
          <CloudPBXSection />
        </AnimatedSection>
        <Separator />
        <AnimatedSection>
          <PlansSection />
        </AnimatedSection>
        <Separator />
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <Separator />
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
