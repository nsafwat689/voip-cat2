import { Button } from '@/components/ui/button';
import { Check, Cpu, Layers, Server, Shield } from 'lucide-react';

/**
 * Cloud PBX Section - Cyber Tech Design
 * Features: Pricing cards with hover elevation, feature highlights
 */
export default function CloudPBXSection() {
  const plans = [
    {
      name: 'Golden Node',
      icon: Layers,
      price: 75,
      period: '/month',
      description: 'Just getting started? The Golden Cloud PBX is the best choice for SOHO environments.',
      feature: 'Up to 8 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Diamond Core',
      icon: Cpu,
      price: 119,
      period: '/month',
      description: 'Need additional performance? The Diamond Cloud PBX is the right choice for your business.',
      feature: 'Up to 40 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Platinum Link',
      icon: Server,
      price: 199,
      period: '/month',
      description: 'Operating a bigger call center? The Platinum Cloud PBX was designed for enterprise-level call volumes.',
      feature: 'Up to 80 concurrent calls',
      highlighted: true,
    },
    {
      name: 'Enterprise Mesh',
      icon: Shield,
      description: 'Custom solution for large-scale communication needs. Contact our sales team for personalized pricing and features.',
      feature: 'Unlimited concurrent calls',
      highlighted: false,
      isEnterprise: true,
    },
  ];

  return (
    <section id="cloud-pbx" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
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
            Scalable neural phone systems for every size organization.
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
                    ? 'lg:scale-110 bg-secondary border-2 border-primary shadow-[0_0_30px_rgba(0,163,255,0.2)] z-10'
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
                      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfX9dCZ4ORDBXUnhKk4b0Nvd-EfPZasC6ysrTKGPUjc5qYreA/viewform';
                      const whatsappUrl = 'https://wa.me/201557649136?text=Hello%20VoIP%20Cat,%20I%20am%20interested%20in%20the%20Enterprise%20Mesh%20plan.';
                      window.open(plan.isEnterprise ? whatsappUrl : formUrl, '_blank');
                    }}
                    className={`w-full h-12 uppercase tracking-widest text-[10px] font-bold transition-all duration-300 ${
                      plan.highlighted
                        ? 'btn-glow'
                        : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
                    }`}
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {plan.isEnterprise ? 'Contact Sales' : 'Get This Plan'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
