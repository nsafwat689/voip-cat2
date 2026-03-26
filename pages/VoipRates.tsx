import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Phone, Globe, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'wouter';

export default function VoipRates() {
  useSEO({
    title: 'VoIP Rates & Pricing | Affordable International Calling | VOIP CAT',
    description: 'Check VoIP Cat\'s competitive VoIP rates for international calling to 190+ countries. CLI supported, premium routes, and 24/7 support. Request a free test route today.',
    keywords: 'VoIP rates, international calling rates, VoIP pricing, cheap VoIP calls, wholesale VoIP rates, SIP trunk pricing, call rates',
    canonical: 'https://voipcat.com/voip-rates',
  });

  const googleSheetLinks = {
    standard: 'https://docs.google.com/spreadsheets/d/15jVmJOYjHPSYJLQnxA4yeJ5fBrw_LESr7z0TIzPcTQg/edit?pli=1&gid=0#gid=0',
    platinum: 'https://docs.google.com/spreadsheets/d/10ZffoibimILTRMbZLtzvjrMWrM3nQLkO8o8SLOnOZiM/edit?gid=0#gid=0',
    premium: 'https://docs.google.com/spreadsheets/d/17LeHQSR6jpvNZVsRiAhotEMB4ItymN3Fmqa0bWZAE8w/edit?gid=0#gid=0',
  };

  const plans = [
    {
      name: 'Standard Node',
      icon: Zap,
      features: [
        'Basic call quality',
        'Standard features',
        'Calls to 50 countries',
        'Email support',
        'CLI supported',
        'Pay-as-you-go billing',
      ],
      highlighted: false,
      link: googleSheetLinks.standard,
    },
    {
      name: 'Platinum Core',
      icon: Globe,
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium routes',
        '24/7 dedicated support',
        'CLI supported',
        'Volume discounts available',
      ],
      highlighted: true,
      link: googleSheetLinks.platinum,
    },
    {
      name: 'Premium Link',
      icon: Shield,
      features: [
        'Calls to 100 countries',
        'HD call quality',
        'Advanced features',
        'Priority support',
        'CLI supported',
        'Custom routing options',
      ],
      highlighted: false,
      link: googleSheetLinks.premium,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Competitive Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">RATES</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transparent, competitive pricing for international VoIP calls to 190+ countries. No hidden fees, no contracts. CLI supported on all routes.
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl transition-all duration-500 group ${
                      plan.highlighted
                        ? 'md:scale-110 border-2 border-primary shadow-[0_0_40px_rgba(0,163,255,0.2)] z-10'
                        : 'bg-card border border-border hover:border-primary/30'
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,163,255,0.5)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Recommended
                      </div>
                    )}
                    <div className="p-10 space-y-8 h-full flex flex-col">
                      <div className="space-y-4 text-center">
                        <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-12 ${
                          plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-primary/10'
                        }`}>
                          <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                        </div>
                        <h3 className={`text-xl font-bold uppercase tracking-wider ${plan.highlighted ? 'text-foreground' : 'text-foreground'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {plan.name}
                        </h3>
                      </div>
                      <div className="space-y-4 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-4">
                            <div className={`mt-1 p-0.5 rounded-full ${plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'}`}>
                              <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => window.open(plan.link, '_blank')}
                        className={`w-full h-14 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
                          plan.highlighted
                            ? 'btn-glow'
                            : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
                        }`}
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        View Rates
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                WHY CHOOSE OUR <span className="text-primary">RATES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center space-y-4">
                <Phone className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>CLI Supported</h3>
                <p className="text-sm text-muted-foreground">Full Caller Line Identification on all routes. Your caller ID is always displayed correctly.</p>
              </div>
              <div className="card-elevated p-8 text-center space-y-4">
                <Globe className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>Premium Routes</h3>
                <p className="text-sm text-muted-foreground">Tier-1 carrier routes with the highest ASR and ACD. Crystal-clear quality guaranteed.</p>
              </div>
              <div className="card-elevated p-8 text-center space-y-4">
                <Shield className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock technical support. We monitor routes 24/7 to ensure maximum uptime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary dark:bg-black">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              REQUEST A <span className="text-primary">FREE TEST</span> ROUTE
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Not sure about the quality? Request a free test route and experience our premium VoIP quality before committing. No obligations, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20test%20route." target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Request Free Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> No contracts</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> No setup fees</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Free test available</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk Services</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/cloud-pbx" className="text-primary hover:underline">Cloud PBX Solutions</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-reseller" className="text-primary hover:underline">Become a Reseller</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-api" className="text-primary hover:underline">VoIP API</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
