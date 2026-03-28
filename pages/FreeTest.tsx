import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, MessageCircle, Globe, Zap, Shield, TrendingUp, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';

export default function FreeTest() {
  useSEO({
    title: 'Request Free VoIP Test Route | Premium SIP Trunks | VOIP CAT',
    description: 'Get high quality VoIP routes with a free test. Direct termination, CLI guaranteed, and 24/7 support. No commitment, instant activation.',
    keywords: 'free voip test, sip trunk test, wholesale voip test, free voip route, test voip quality',
    canonical: 'https://voipcat.com/free-test',
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Free Test Available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              GET HIGH QUALITY <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">VOIP ROUTES</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Premium SIP Trunks & Wholesale VoIP
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Direct routes – CLI guaranteed – Stable quality – 24/7 support
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white font-medium">
              <span className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> No commitment</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Instant activation</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Test before you buy</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  🌍 WHY CHOOSE <span className="text-primary">VOIPCAT?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    'Direct termination routes (no middle resellers)',
                    'High ASR & ACD',
                    'Low latency connections',
                    'CLI support for all major destinations',
                    'Fraud protection system'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-10 space-y-8 border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="text-center space-y-4 relative">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    🎯 REQUEST YOUR <span className="text-primary">FREE TEST</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Start testing our routes today and see the quality yourself. Fill the form below or contact us instantly.
                  </p>
                  <div className="pt-6">
                    <Button 
                      onClick={() => window.open('https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20test%20route.', '_blank')}
                      className="btn-glow w-full h-16 text-lg uppercase tracking-widest font-bold"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      [ FORM HERE ] - REQUEST NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-secondary dark:bg-black text-white">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                📲 CONTACT US <span className="text-primary">INSTANTLY</span>
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 border border-primary/40 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">⏱ Average response time: Less than 5 Minutes</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://wa.me/201557649136" target="_blank" rel="noopener noreferrer" className="card-elevated p-8 bg-white/5 border-white/10 hover:border-primary/50 text-center space-y-4 transition-all group">
                <MessageCircle className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>WhatsApp</h3>
                <p className="text-slate-400">+201557649136</p>
              </a>
              <a href="mailto:sales@voipcat.com" className="card-elevated p-8 bg-white/5 border-white/10 hover:border-primary/50 text-center space-y-4 transition-all group">
                <Globe className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Email</h3>
                <p className="text-slate-400">sales@voipcat.com</p>
              </a>
              <a href="https://t.me/VoipCat" target="_blank" rel="noopener noreferrer" className="card-elevated p-8 bg-white/5 border-white/10 hover:border-primary/50 text-center space-y-4 transition-all group">
                <Phone className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Telegram</h3>
                <p className="text-slate-400">@VoipCat</p>
              </a>
            </div>
          </div>
        </section>

        {/* Reseller CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  ⚡ READY TO SCALE YOUR VOIP BUSINESS?
                </h2>
                <p className="text-white/80 text-lg">
                  Join our reseller program and start earning today.
                </p>
              </div>
              <Link href="/voip-reseller#reseller-form">
                <Button className="bg-white text-primary hover:bg-slate-100 h-16 px-10 text-lg uppercase tracking-widest font-bold shadow-xl">
                  👉 Become a reseller now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
