import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Zap, Globe, Clock, LogIn, FlaskConical } from 'lucide-react';
import { Link } from 'wouter';
import { PORTAL_URL } from '@/lib/portal';

/**
 * VoIP Rates — rates are NEVER listed on the marketing site. They change
 * constantly and live (per-account, per-route) inside the customer portal.
 * This page exists for SEO + intent capture and routes visitors to either
 * log in to the portal (live rates) or request a free test route.
 */
export default function VoipRates() {
  useSEO({
    title: 'VoIP Rates & Live Pricing | Log In to Your Portal | VOIP CAT',
    description: "VoIP Cat rates are live and account-specific inside your portal — A-Z termination to 190+ countries, per-second billing, CLI supported. Log in for live pricing or request a free test route.",
    keywords: 'VoIP rates, live VoIP pricing, wholesale VoIP rates, SIP trunk pricing, A-Z termination rates, per-second billing, VoIP rate sheet',
    canonical: 'https://voipcat.com/voip-rates',
  });

  const highlights = [
    { icon: Globe, title: '190+ Destinations', desc: 'A-Z voice termination with premium and standard routes worldwide.' },
    { icon: Clock, title: 'Per-Second Billing', desc: 'Pay only for what you use — no per-minute rounding, no minimum charges.' },
    { icon: ShieldCheck, title: 'CLI Supported', desc: 'Genuine CLI on supported routes, with high ASR and real-time CDRs.' },
    { icon: Zap, title: 'Volume Pricing', desc: 'Better rates as you scale — custom wholesale pricing for high traffic.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-background relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('/images/carbon-fibre.png')] opacity-5 -z-10"></div>

          <div className="container">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h1
                className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                LIVE <span className="text-primary">RATES</span>
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Our rates update constantly and are tailored to your account, volume and routes — so live pricing lives where it stays accurate: <span className="text-primary font-bold">inside your portal</span>.
              </p>
            </div>

            {/* Primary CTA card */}
            <div className="max-w-3xl mx-auto mb-16 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                See your live pricing
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Log in to the customer portal for real-time rates across every destination, your balance, CDRs and rate-sheet downloads. New here? Start with a free test route — no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-glow w-full sm:w-auto h-14 px-8 uppercase tracking-widest text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <LogIn className="w-5 h-5 mr-2" />
                    Log In to Portal
                  </Button>
                </a>
                <Link href="/free-test">
                  <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-primary/50 text-primary hover:bg-primary/10 uppercase tracking-widest text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <FlaskConical className="w-5 h-5 mr-2" />
                    Get Free Test Route
                  </Button>
                </Link>
              </div>
            </div>

            {/* What's included */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center space-y-6">
              <p className="text-muted-foreground max-w-xl mx-auto">
                Need custom rates for high volume or a specific destination? Talk to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/201038450546?text=Hi%2C%20I%20would%20like%20a%20free%20test%20route%20and%20live%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Request Rates on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
