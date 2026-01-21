import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap } from 'lucide-react';

/**
 * Hero Section - Cyber Tech Design
 * Layout: Asymmetric split with content on left, image on right
 * Features: Tech-inspired background, glowing buttons, smooth animations
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-28">
      {/* Cyber background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Next-Gen Communication
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white leading-tight tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                GLOBAL <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">VOIP</span> SOLUTIONS
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                Experience the future of voice. VoIP Cat delivers ultra-reliable, high-definition communication services to 190+ countries with circuit-level precision.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button className="btn-glow flex items-center gap-3 group h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Choose Your Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm backdrop-blur-sm"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Contact Us
              </Button>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-primary/20">
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>10+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Years Tech</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>190+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Nodes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>99.9%</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.2)] border border-primary/20">
              {/* Image Container with gradient overlay */}
              <img
                src="/images/hero-voip-communication.jpg"
                alt="VoIP Communication"
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              
              {/* Circuit line decorative element */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-10 left-0 w-20 h-[1px] bg-primary"></div>
                <div className="absolute top-10 left-20 w-[1px] h-20 bg-primary"></div>
              </div>
            </div>

            {/* Floating tech card */}
            <div className="absolute -bottom-8 -left-8 bg-secondary/90 backdrop-blur-xl rounded-xl shadow-2xl p-5 border border-primary/30 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>Neural Voice</div>
                  <div className="text-[10px] text-primary/80 uppercase tracking-widest mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>HD Crystal Clear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
