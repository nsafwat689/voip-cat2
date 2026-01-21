import { useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { organizationSchema, serviceSchema, websiteSchema, localBusinessSchema, aggregateRatingSchema, injectStructuredData } from '@/utils/structuredData';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CloudPBXSection from '@/components/CloudPBXSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


/**
 * Home Page - VoipCat Website
 * Optimized for global SEO with comprehensive structured data
 * Modern Enterprise Blue Design System
 * Sections: Hero, About, Cloud PBX, Plans, Testimonials, Contact, Footer
 */
export default function Home() {
  useSEO({
    title: 'Enterprise VoIP & Business Communication Solutions | VOIP CAT',
    description: 'Transform your business communications worldwide with VOIP Cat\'s enterprise-grade VoIP solutions. Crystal-clear voice quality, cloud PBX, hosted PBX, business phone systems, unified communications, and call management. Global VoIP provider with 99.9% uptime guarantee and 190+ nodes.',
    keywords: 'enterprise VoIP, business phone systems, cloud PBX, unified communications, VoIP security, hosted PBX, business communication, digital transformation, global VoIP provider, SIP trunking, cloud telephony',
    canonical: 'https://voipcat.com',
    ogImage: 'https://voipcat.com/images/og-image.png',
    ogType: 'website',
    author: 'VOIP CAT',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  });

  useEffect(() => {
    injectStructuredData(organizationSchema);
    injectStructuredData(websiteSchema);
    injectStructuredData(localBusinessSchema);
    injectStructuredData(aggregateRatingSchema);
    serviceSchema.forEach(schema => injectStructuredData(schema));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow" role="main">
        <HeroSection />
        <AboutSection />
        <CloudPBXSection />
        <PlansSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
