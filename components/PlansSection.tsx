import { Button } from '@/components/ui/button';
import { Check, Zap, Globe, Server, Building2 } from 'lucide-react';
import { PORTAL_URL } from '@/lib/portal';

/**
 * Pricing / Plans Section — Task 10 Rebuild
 * Split into: SIP Trunk / Wholesale / PBX / Enterprise
 * Each shows: SLA, support level, onboarding, CPS limits, deployment time
 */
export default function PlansSection() {
  const plans = [
    {
      name: 'SIP Trunk',
      icon: Zap,
      badge: 'Most Popular',
      badgeColor: 'bg-primary text-white',
      price: 'From $0.004/min',
      deployment: '< 1 hour',
      sla: '99.99% Uptime',
      support: 'Email + Chat',
      onboarding: 'Self-service wizard',
      cps: 'Up to 30 CPS',
      features: [
        'HD Voice (G.711 / G.729)',
        'Compatible with 3CX, FreePBX, Asterisk',
        'Local & toll-free DIDs available',
        'Real-time call statistics',
        'Automatic failover',
        'SIP TLS encryption',
      ],
      highlighted: false,
      cta: 'https://wa.me/201557649136?text=Hi%2C%20I%20need%20SIP%20Trunk%20pricing.',
    },
    {
      name: 'Wholesale VoIP',
      icon: Globe,
      badge: 'Carrier Grade',
      badgeColor: 'bg-emerald-500 text-white',
      price: 'Volume-based rates',
      deployment: 'Same day',
      sla: '99.99% Uptime',
      support: '24/7 NOC + Dedicated AM',
      onboarding: 'Assisted integration',
      cps: 'Up to 500 CPS',
      features: [
        'A-Z termination to 190+ countries',
        'CLI / NCLI routes',
        'Premium & standard tier routes',
        'Real-time ASR / ACD analytics',
        'CDR export & billing API',
        'Anti-fraud monitoring',
      ],
      highlighted: true,
      cta: 'https://wa.me/201557649136?text=Hi%2C%20I%20need%20Wholesale%20VoIP%20pricing.',
    },
    {
      name: 'Cloud PBX',
      icon: Server,
      badge: 'All-Inclusive',
      badgeColor: 'bg-violet-500 text-white',
      price: 'Per seat / month',
      deployment: '< 4 hours',
      sla: '99.99% Uptime',
      support: '24/7 Technical Support',
      onboarding: 'White-glove setup',
      cps: 'Unlimited extensions',
      features: [
        'Auto-attendant & IVR',
        'Call recording & transcription',
        'Voicemail-to-email',
        'Call queues & ring groups',
        'Mobile & desktop softphone',
        'Analytics dashboard',
      ],
      highlighted: false,
      cta: 'https://wa.me/201557649136?text=Hi%2C%20I%20need%20Cloud%20PBX%20pricing.',
    },
    {
      name: 'Enterprise',
      icon: Building2,
      badge: 'Custom',
      badgeColor: 'bg-slate-700 text-white',
      price: 'Custom pricing',
      deployment: 'Negotiable',
      sla: 'Custom SLA',
      support: 'Dedicated TAM + NOC',
      onboarding: 'Full project managed',
      cps: 'Unlimited / custom',
      features: [
        'Dedicated infrastructure',
        'Custom route agreements',
        'Multi-region redundancy',
        'On-premise or hybrid options',
        'STIR/SHAKEN + regulatory support',
        'Custom SLA with financial backing',
      ],
      highlighted: false,
      cta: 'https://wa.me/201557649136?text=Hi%2C%20I%20need%20Enterprise%20VoIP%20pricing.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.03)_0%,transparent_60%)]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-xs font-bold tracking-widest text-primary uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TRANSPARENT <span className="text-primary">PLANS</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan for your use case. All plans include carrier-grade infrastructure and our SLA guarantee.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'border-primary bg-primary/5 shadow-[0_0_40px_rgba(0,163,255,0.15)]'
                    : 'border-border bg-card hover:border-primary/40'
                }`}
              >
                {/* Badge */}
                <div className="px-6 pt-6">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${plan.badgeColor} mb-4`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {plan.badge}
                  </span>
                </div>

                {/* Plan header */}
                <div className="px-6 pb-6 border-b border-border space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/10 border-primary/20'}`}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground uppercase tracking-wide text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>{plan.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{plan.price}</div>
                  {plan.price.includes('/min') && (
                    <p className="text-[11px] text-muted-foreground">
                      Indicative — <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">log in</a> for live rates
                    </p>
                  )}
                </div>

                {/* Specs */}
                <div className="px-6 py-4 border-b border-border space-y-2 text-xs">
                  {[
                    { label: 'SLA',         value: plan.sla },
                    { label: 'Support',     value: plan.support },
                    { label: 'Onboarding',  value: plan.onboarding },
                    { label: 'CPS Limit',   value: plan.cps },
                    { label: 'Go-live',     value: plan.deployment },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-2">
                      <span className="text-muted-foreground uppercase tracking-widest font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</span>
                      <span className="text-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="px-6 py-5 flex-grow space-y-3">
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a href={plan.cta} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full uppercase tracking-wider text-xs ${plan.highlighted ? 'btn-glow' : ''}`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          All plans include SIP TLS encryption, anti-fraud monitoring, and 99.99% uptime SLA. Volume discounts available. <a href="/contact" className="text-primary underline">Contact us</a> for custom requirements.
        </p>
      </div>
    </section>
  );
}
