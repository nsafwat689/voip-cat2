import { Button } from '@/components/ui/button';
import { Check, Cpu, Layers, Server, Shield, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Cloud PBX Section - Light Mode Version
 * Features: Pricing cards with hover elevation, feature highlights, working CTAs
 */
export default function CloudPBXSection() {
  const [, setLocation] = useLocation();

  const plans = [
    {
      name: 'Golden Node',
      icon: Layers,
      price: 75,
      period: '/month',
      description: 'Perfect for small offices and SOHO environments. Full-featured Cloud PBX at an affordable price.',
      feature: 'Up to 8 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Diamond Core',
      icon: Cpu,
      price: 119,
      period: '/month',
      description: 'Ideal for growing businesses. Enhanced performance with advanced call management features.',
      feature: 'Up to 40 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Platinum Link',
      icon: Server,
      price: 199,
      period: '/month',
      description: 'Built for call centers and enterprises. Maximum capacity with premium route quality.',
      feature: 'Up to 80 concurrent calls',
      highlighted: true,
    },
    {
      name: 'Enterprise Mesh',
      icon: Shield,
      description: 'Custom solution for large-scale operations. Dedicated infrastructure, SLA guarantees, and personalized support.',
      feature: 'Unlimited concurrent calls',
      highlighted: false,
      isEnterprise: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Hosted Phone Systems
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cloud PBX Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Scalable hosted phone systems for businesses of every size. Auto-attendant, call recording, voicemail-to-email, and more — all included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl border p-6 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border bg-card'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name & Icon */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-primary/10' : 'bg-muted'}`}>
                    <Icon className={`w-5 h-5 ${plan.highlighted ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                {plan.price && (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {plan.description}
                </p>

                {/* Feature */}
                <div className="flex items-center gap-2">
                  <div className="p-0.5 rounded-full bg-primary/10">
                    <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-primary'}`} />
                  </div>
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    {plan.feature}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    if (plan.isEnterprise) {
                      setLocation('/contact');
                    } else {
                      window.open(
                        'https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20the%20' +
                          encodeURIComponent(plan.name) +
                          '%20Cloud%20PBX%20plan.',
                        '_blank'
                      );
                    }
                  }}
                  className={`w-full mt-auto ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-background border border-border text-foreground hover:bg-muted'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.isEnterprise ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom link to full Cloud PBX page */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => setLocation('/cloud-pbx')}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            Learn More About Cloud PBX
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
