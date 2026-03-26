import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * VoIP Plans Section - Cyber Tech Design
 * Features: Three-tier pricing with feature lists, comparison layout, internal links
 */
export default function PlansSection() {
  const [, setLocation] = useLocation();

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
      ],
      highlighted: false,
    },
    {
      name: 'Platinum Core',
      icon: Globe,
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium routes with high ASR',
        '24/7 dedicated support',
        'Full CLI pass-through',
      ],
      highlighted: true,
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
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-20 md:py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            VOIP <span className="text-primary">RATES</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Competitive VoIP termination rates for businesses, carriers, and resellers. All plans include CLI support and premium routes.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-500 group ${
                  plan.highlighted
                    ? 'md:scale-110 bg-slate-900  border-2 border-primary shadow-[0_0_40px_rgba(0,163,255,0.2)] z-10'
                    : 'bg-card border border-border hover:border-primary/30'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,163,255,0.5)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Most Popular
                  </div>
                )}

                <div className="p-10 space-y-8 h-full flex flex-col">
                  {/* Plan Name & Icon */}
                  <div className="space-y-4 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-12 ${
                      plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-primary/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <h3 className={`text-xl font-bold uppercase tracking-wider ${plan.highlighted ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-4">
                        <div className={`mt-1 p-0.5 rounded-full ${plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'}`}>
                          <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                        </div>
                        <span className={`text-sm font-medium ${plan.highlighted ? 'text-slate-300' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => {
                      let sheetUrl = googleSheetLinks.standard;
                      if (plan.name === 'Platinum Core') sheetUrl = googleSheetLinks.platinum;
                      if (plan.name === 'Premium Link') sheetUrl = googleSheetLinks.premium;
                      window.open(sheetUrl, '_blank');
                    }}
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Need custom rates for high volume? Looking for wholesale pricing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => setLocation('/voip-rates')}
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              View Full Rate Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20a%20free%20test%20route.', '_blank')}
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Request Free Test Route
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
