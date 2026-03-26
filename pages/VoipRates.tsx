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
    <div className="min-h-screen flex flex-col bg-secondary dark:bg-black">
      <Header />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
          <div className="container">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Competitive Pricing
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-tight"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                VOIP <span className="text-primary">RATES</span>
              </h1>
              <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
                Transparent, competitive pricing for international VoIP calls to 190+ countries. No hidden fees, no contracts. CLI supported on all routes.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-16 md:py-24 bg-secondary dark:bg-black relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative rounded-xl border p-6 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                      plan.highlighted
                        ? 'border-primary/50 bg-primary/10'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {/* Highlight Badge */}
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span
                          className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                          Recommended
                        </span>
                      </div>
                    )}

                    {/* Plan Name & Icon */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-primary/20' : 'bg-white/10'}`}>
                        <Icon className={`w-5 h-5 ${plan.highlighted ? 'text-primary' : 'text-slate-300'}`} />
                      </div>
                      <h3
                        className="text-base font-bold text-white"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-2 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="p-0.5 rounded-full bg-primary/20">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

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
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-secondary dark:bg-black relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h2
                className="text-2xl md:text-4xl text-white uppercase tracking-tighter"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                WHY CHOOSE OUR <span className="text-primary">RATES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Phone,
                  title: 'CLI Supported',
                  desc: 'Full Caller Line Identification on all routes. Your caller ID is always displayed correctly.',
                },
                {
                  icon: Star,
                  title: 'Premium Routes',
                  desc: 'Tier-1 carrier routes with the highest ASR and ACD. Crystal-clear quality guaranteed.',
                },
                {
                  icon: Zap,
                  title: '24/7 Support',
                  desc: 'Round-the-clock technical support. We monitor routes 24/7 to ensure maximum uptime.',
                },
              ].map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3
                      className="text-base font-bold text-white"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary dark:bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h2
                className="text-2xl md:text-4xl text-white uppercase tracking-tighter"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                REQUEST A <span className="text-primary">FREE TEST</span> ROUTE
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Not sure about the quality? Request a free test route and experience our premium VoIP quality before committing. No obligations, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20test%20route."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-glow h-12 px-8 uppercase tracking-widest text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Request Free Test
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="h-12 px-8 uppercase tracking-widest text-xs font-bold border-primary/50 text-primary hover:bg-primary/10"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-2">
                {['No contracts', 'No setup fees', 'Free test available'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 bg-secondary dark:bg-black border-t border-white/10">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <Link href="/sip-trunk" className="hover:text-primary transition-colors">SIP Trunk Services</Link>
              <span className="text-white/20">|</span>
              <Link href="/wholesale-voip" className="hover:text-primary transition-colors">Wholesale VoIP</Link>
              <span className="text-white/20">|</span>
              <Link href="/cloud-pbx" className="hover:text-primary transition-colors">Cloud PBX Solutions</Link>
              <span className="text-white/20">|</span>
              <Link href="/voip-reseller" className="hover:text-primary transition-colors">Become a Reseller</Link>
              <span className="text-white/20">|</span>
              <Link href="/voip-api" className="hover:text-primary transition-colors">VoIP API</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
