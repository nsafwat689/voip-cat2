import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ShieldCheck, Zap, Globe, TrendingDown, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function VoipRates() {
  useSEO({
    title: 'VoIP Rates & Pricing | Affordable International Calling | VOIP CAT',
    description: 'Check VoIP Cat\'s competitive VoIP rates for international calling to 190+ countries. Per-second billing, CLI supported, premium routes, and 24/7 support. Request a free test route today.',
    keywords: 'VoIP rates, international calling rates, VoIP pricing, cheap VoIP calls, wholesale VoIP rates, SIP trunk pricing, call rates, per-second billing',
    canonical: 'https://voipcat.com/voip-rates',
  });

  const googleSheetLinks = {
    standard: 'https://docs.google.com/spreadsheets/d/15jVmJOYjHPSYJLQnxA4yeJ5fBrw_LESr7z0TIzPcTQg/edit?pli=1&gid=0#gid=0',
    platinum: 'https://docs.google.com/spreadsheets/d/10ZffoibimILTRMbZLtzvjrMWrM3nQLkO8o8SLOnOZiM/edit?gid=0#gid=0',
    premium: 'https://docs.google.com/spreadsheets/d/17LeHQSR6jpvNZVsRiAhotEMB4ItymN3Fmqa0bWZAE8w/edit?gid=0#gid=0',
  };

  const sampleRates = [
    { country: 'United States', rate: '$0.006/min', flag: '🇺🇸', region: 'North America' },
    { country: 'Canada', rate: '$0.004/min', flag: '🇨🇦', region: 'North America' },
    { country: 'United Kingdom', rate: '$0.019/min', flag: '🇬🇧', region: 'Europe' },
    { country: 'France', rate: '$0.05/min', flag: '🇫🇷', region: 'Europe' },
    { country: 'Saudi Arabia', rate: '$0.132/min', flag: '🇸🇦', region: 'Middle East' },
    { country: 'Qatar', rate: '$0.336/min', flag: '🇶🇦', region: 'Middle East' },
    { country: 'Russia', rate: '$0.12/min', flag: '🇷🇺', region: 'Europe/Asia' },
    { country: 'Thailand', rate: '$0.07/min', flag: '🇹🇭', region: 'Asia' },
    { country: 'Turkey', rate: '$0.36/min', flag: '🇹🇷', region: 'Europe/Asia' },
  ];

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
        'Per-second billing',
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
        'Per-second billing',
      ],
      highlighted: true,
      link: googleSheetLinks.platinum,
    },
    {
      name: 'Premium Link',
      icon: ShieldCheck,
      features: [
        'Calls to 100 countries',
        'HD call quality',
        'Advanced features',
        'Priority support',
        'CLI supported',
        'Per-second billing',
      ],
      highlighted: false,
      link: googleSheetLinks.premium,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section id="rates" className="py-20 md:py-32 bg-background relative">
          {/* Background accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 -z-10"></div>

          <div className="container">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-24 space-y-4">
              <h2
                className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                VOIP <span className="text-primary">RATES</span>
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Competitive VoIP termination rates for businesses, carriers, and resellers. All plans include CLI support, premium routes, and <span className="text-primary font-bold">per-second billing</span>.
              </p>
            </div>

            {/* Per-Second Billing Highlight */}
            <div className="mb-16 p-6 md:p-8 bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/30 rounded-2xl">
              <div className="flex items-center gap-4 justify-center">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    ⏱️ Per-Second Billing
                  </h3>
                  <p className="text-muted-foreground">
                    Pay only for what you use. We charge per second, not per minute, so you save money on every call. No hidden fees, no minimum charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl transition-all duration-500 group ${
                      plan.highlighted
                        ? 'md:scale-110 bg-[#003D5C]  border-2 border-primary shadow-[0_0_40px_rgba(0,163,255,0.2)] z-10'
                        : 'bg-card border border-border hover:border-primary/30'
                    }`}
                  >
                    {/* Highlight Badge */}
                    {plan.highlighted && (
                      <div
                        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,163,255,0.5)]"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        Recommended
                      </div>
                    )}

                    {/* Plan Name & Icon */}
                    <div className="p-10 space-y-8 h-full flex flex-col">
                      <div className="space-y-4 text-center">
                        <div
                          className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-12 ${
                            plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-primary/10'
                          }`}
                        >
                          <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                        </div>
                        <h3
                          className={`text-xl font-bold uppercase tracking-wider ${plan.highlighted ? 'text-white' : 'text-foreground'}`}
                          style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                          {plan.name}
                        </h3>
                      </div>

                      {/* Features List */}
                      <div className="space-y-4 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-4">
                            <div
                              className={`mt-1 p-0.5 rounded-full ${
                                plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                              }`}
                            >
                              <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                            </div>
                            <span
                              className={`text-sm font-medium ${
                                plan.highlighted ? 'text-slate-300' : 'text-muted-foreground'
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
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

            {/* Sample Rates Section */}
            <div className="py-16 md:py-20 border-t border-border">
              <div className="text-center mb-12 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <TrendingDown className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Sample <span className="text-primary">Rates</span>
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Competitive rates for popular destinations worldwide. All rates are per-second billing — you only pay for the time you use.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleRates.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{item.flag}</div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {item.country}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 mb-2">
                          {item.region}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          {item.rate}
                        </p>
                      </div>
                      <div className="text-primary/30 group-hover:text-primary/60 transition-colors flex-shrink-0">
                        <TrendingDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
                <p className="text-muted-foreground mb-4">
                  These are sample rates from our premium routes. Actual rates may vary based on volume, destination type, and service plan. All calls are billed per second for maximum savings.
                </p>
                <p className="text-sm text-primary font-semibold">
                  📊 View the complete rate sheet for all 190+ destinations
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center space-y-6">
              <p className="text-muted-foreground max-w-xl mx-auto">
                Need custom rates for high volume? Looking for wholesale pricing?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20a%20free%20test%20route."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Request Free Test Route
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
