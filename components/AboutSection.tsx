import { Globe, Users, Zap, Shield } from 'lucide-react';

/**
 * About Section - Cyber Tech Design
 * Features: Stats grid, icon cards, tech accents
 */
export default function AboutSection() {
  const stats = [
    { number: '10+', label: 'Years Tech' },
    { number: '190+', label: 'Global Nodes' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Neural Support' },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Mesh Network',
      description: 'Connect with anyone, anywhere in the world with our extensive network spanning over 190 countries.',
    },
    {
      icon: Zap,
      title: 'Neural Voice Quality',
      description: 'Experience premium HD voice quality with our advanced VoIP technology and optimized network infrastructure.',
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Enterprise-grade security and 99.9% uptime guarantee ensure your communications are always protected.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ABOUT <span className="text-primary">VOIP CAT</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Pioneering the future of digital communication since 2015.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl text-foreground leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                10+ YEARS OF <span className="text-primary">COMMUNICATION</span> EXCELLENCE
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Since 2015, VoIP Cat has been at the forefront of Voice over IP technology, providing businesses and individuals with reliable, crystal-clear VoIP services across the globe.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our mission is to deliver premium VoIP solutions at affordable prices without compromising on quality. With our robust infrastructure and dedicated support team, we ensure seamless communication for all our clients.
              </p>
            </div>
            
            {/* Stats Grid for Mobile/Tablet inside content */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-elevated p-6 border-primary/10 bg-primary/5 backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Graphic Area */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src="/images/global-network.jpg" 
                alt="Global Network" 
                className="w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative circuit element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl -z-10"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-elevated p-8 space-y-6 group hover:bg-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
