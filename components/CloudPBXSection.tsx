import { Button } from '@/components/ui/button';
import { Check, Cpu, Layers, Server, Shield, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Cloud PBX Section - Cyber Tech Design
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
    <section id="cloud-pbx" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Cyber background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            CLOUD <span className="text-primary">PBX</span> SOLUTIONS
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Scalable hosted phone systems for businesses of every size. Auto-attendant, call recording, voicemail-to-email, and more — all included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-500 group ${
                  plan.highlighted
                    ? 'lg:scale-110 bg-background border-2 border-primary shadow-[0_0_30px_rgba(0,163,255,0.2)] z-10'
                    : 'bg-card/5 border border-primary/10 hover:border-primary/30 backdrop-blur-sm'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,163,255,0.5)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Most Popular
                  </div>
                )}

                <div className="p-8 space-y-8">
                  {/* Plan Name & Icon */}
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      plan.highlighted ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-primary/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold uppercase tracking-wider ${plan.highlighted ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {plan.name}
                      </h3>
                      {plan.price && (
                        <div className="flex items-baseline gap-1 mt-2">
                          <span className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            ${plan.price}
                          </span>
                          <span className="text-slate-500 text-xs uppercase tracking-widest">
                            {plan.period}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed h-16 ${plan.highlighted ? 'text-slate-400' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>

                  {/* Feature */}
                  <div className={`flex items-center gap-3 py-5 border-t border-b ${plan.highlighted ? 'border-primary/20' : 'border-primary/10'}`}>
                    <div className={`p-0.5 rounded-full ${plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlighted ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {plan.feature}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => {
                      if (plan.isEnterprise) {
                        setLocation('/contact');
                      } else {
                        window.open('https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20the%20' + encodeURIComponent(plan.name) + '%20Cloud%20PBX%20plan.', '_blank');
                      }
                    }}
                    className={`w-full h-12 uppercase tracking-widest text-[10px] font-bold transition-all duration-300 ${
                      plan.highlighted
                        ? 'btn-glow'
                        : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
                    }`}
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {plan.isEnterprise ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link to full Cloud PBX page */}
        <div className="mt-16 text-center">
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
