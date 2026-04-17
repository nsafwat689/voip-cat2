import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Zap, Globe } from 'lucide-react';

/**
 * VoIP Plans Section - Cyber Tech Design
 * Features: Three-tier pricing with feature lists, comparison layout
 */
export default function PlansSection() {
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
      ],
      highlighted: false,
    },
    {
      name: 'Platinum Core',
      icon: Globe,
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium features',
        '24/7 dedicated support',
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
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.02)_0%,transparent_60%)]" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <span className="text-xs font-bold tracking-widest text-primary uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>VoIP Pricing</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <span className="text-foreground">VOIP</span>{' '}
          <span className="text-primary">RATES</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Select your communication tier for global connectivity.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-500 group hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-slate-900 border-primary/50'
                  : 'bg-slate-700 border-primary/10'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,163,255,0.5)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Recommended
                </div>
              )}

              {/* Plan Name & Icon */}
              <div className="p-10 space-y-8 h-full flex flex-col">
                <div className="space-y-4 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-12 ${
                    plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-primary/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                  </div>
                  <h3 className={`text-xl font-bold uppercase tracking-wider ${plan.highlighted ? 'text-white' : 'text-slate-200'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
                      <span className={`text-sm font-medium ${plan.highlighted ? 'text-slate-300' : 'text-slate-400'}`}>
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
    </section>
  );
}
