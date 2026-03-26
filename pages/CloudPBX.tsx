import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Phone, Cloud, Shield, Zap, Users, Settings, Headphones } from 'lucide-react';
import { Link } from 'wouter';

export default function CloudPBX() {
  useSEO({
    title: 'Cloud PBX Solutions | Hosted PBX Phone System | VOIP CAT',
    description: 'VoIP Cat Cloud PBX: scalable hosted phone systems for businesses of all sizes. Auto-attendant, call routing, voicemail, and more. Plans starting at $75/month.',
    keywords: 'cloud PBX, hosted PBX, cloud phone system, hosted phone system, virtual PBX, business phone system, PBX provider',
    canonical: 'https://voipcat.com/cloud-pbx',
  });

  const plans = [
    { name: 'Golden Node', price: 75, calls: 8, desc: 'Perfect for small offices and SOHO environments.' },
    { name: 'Diamond Core', price: 119, calls: 40, desc: 'Ideal for growing businesses with moderate call volumes.' },
    { name: 'Platinum Link', price: 199, calls: 80, desc: 'Designed for call centers and enterprise-level operations.', popular: true },
    { name: 'Enterprise Mesh', price: null, calls: null, desc: 'Custom solution for large-scale communication needs.' },
  ];

  const features = [
    { icon: Phone, title: 'Auto-Attendant', desc: 'Professional IVR menus that route callers to the right department automatically.' },
    { icon: Users, title: 'Extension Management', desc: 'Easily add, remove, and manage extensions for your entire team.' },
    { icon: Cloud, title: 'Voicemail to Email', desc: 'Receive voicemail messages as audio attachments directly in your email inbox.' },
    { icon: Settings, title: 'Call Routing', desc: 'Advanced call routing rules including time-based, skill-based, and geographic routing.' },
    { icon: Shield, title: 'Call Recording', desc: 'Record calls for quality assurance, training, and compliance purposes.' },
    { icon: Headphones, title: 'Conference Bridge', desc: 'Host multi-party conference calls with HD audio quality.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Cloud Phone System
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  CLOUD <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">PBX</span> SOLUTIONS
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Replace your outdated phone system with a modern Cloud PBX. Get enterprise features at a fraction of the cost — auto-attendant, call routing, voicemail, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20your%20Cloud%20PBX%20solutions." target="_blank" rel="noopener noreferrer">
                    <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Get Started <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.2)] border border-primary/20">
                  <img src="/images/cloud-pbx.jpg" alt="Cloud PBX Phone System" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                CLOUD PBX <span className="text-primary">PLANS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Scalable phone systems for every size organization. All plans include auto-attendant, voicemail, and 24/7 support.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative rounded-2xl transition-all duration-500 group ${plan.popular ? 'lg:scale-110 border-2 border-primary shadow-[0_0_30px_rgba(0,163,255,0.2)] z-10' : 'bg-card border border-border hover:border-primary/30'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Most Popular</div>
                  )}
                  <div className="p-8 space-y-6">
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>{plan.name}</h3>
                    {plan.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>${plan.price}</span>
                        <span className="text-slate-500 text-xs uppercase tracking-widest">/month</span>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Custom Pricing</div>
                    )}
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                    {plan.calls && (
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-medium">Up to {plan.calls} concurrent calls</span>
                      </div>
                    )}
                    {!plan.calls && (
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-medium">Unlimited concurrent calls</span>
                      </div>
                    )}
                    <a href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20the%20Cloud%20PBX%20plan." target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full h-12 uppercase tracking-widest text-[10px] font-bold ${plan.popular ? 'btn-glow' : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {plan.price ? 'Get This Plan' : 'Contact Sales'}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                INCLUDED <span className="text-primary">FEATURES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-elevated p-8 space-y-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary dark:bg-black">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              UPGRADE YOUR <span className="text-primary">PHONE SYSTEM</span> TODAY
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Contact us for a free consultation and demo. See how Cloud PBX can transform your business communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20a%20Cloud%20PBX%20demo." target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Request Demo <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/voip-rates" className="text-primary hover:underline">VoIP Rates</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
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
