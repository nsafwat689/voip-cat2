import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, DollarSign, Users, Headphones, BarChart3, Globe, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function VoipReseller() {
  useSEO({
    title: 'VoIP Reseller Program | Start Your Own VoIP Business | VOIP CAT',
    description: 'Start your own VoIP business with VoIP Cat\'s reseller program. White-label solutions, competitive margins, full technical support, and no upfront investment required.',
    keywords: 'VoIP reseller, VoIP reseller program, start VoIP business, white label VoIP, VoIP business opportunity, resell VoIP services',
    canonical: 'https://voipcat.com/voip-reseller',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I want to join the VoIP reseller program.\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/201557649136?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  const benefits = [
    { icon: DollarSign, title: 'High Margins', desc: 'Set your own pricing and enjoy generous profit margins. No caps on how much you can earn.' },
    { icon: Globe, title: 'White-Label Solution', desc: 'Brand our services as your own. Your customers see your brand, not ours.' },
    { icon: Headphones, title: 'Full Support', desc: 'We handle the technical infrastructure. You focus on sales and customer relationships.' },
    { icon: Zap, title: 'No Upfront Investment', desc: 'Start reselling immediately with zero upfront costs. Pay only for what your customers use.' },
    { icon: Users, title: 'Customer Portal', desc: 'Give your customers their own management portal for self-service account management.' },
    { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track your revenue, usage, and customer activity in real-time through our reseller dashboard.' },
  ];

  const steps = [
    { num: '01', title: 'Sign Up', desc: 'Fill out the reseller application form below. Our team will review and approve your account within 24 hours.' },
    { num: '02', title: 'Get Configured', desc: 'We set up your white-label portal, configure your routes, and provide all the tools you need to start selling.' },
    { num: '03', title: 'Start Selling', desc: 'Begin offering VoIP services to your customers under your own brand. We handle all the backend infrastructure.' },
    { num: '04', title: 'Earn & Grow', desc: 'Collect payments from your customers, keep the margin, and scale your business with our support.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Partner Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              START YOUR OWN <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">VOIP BUSINESS</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Join our reseller program and start offering premium VoIP services under your own brand. No technical expertise required — we handle the infrastructure, you handle the sales.
            </p>
            <a href="#reseller-form">
              <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm mx-auto" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Apply Now <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                RESELLER <span className="text-primary">BENEFITS</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="card-elevated p-8 space-y-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                HOW IT <span className="text-primary">WORKS</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary/30" style={{ fontFamily: 'Orbitron, sans-serif' }}>{step.num}</div>
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section id="reseller-form" className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  RESELLER <span className="text-primary">APPLICATION</span>
                </h2>
                <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              <div className="card-elevated p-8 md:p-12 border-primary/20 bg-primary/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Full Name</label>
                      <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Email</label>
                      <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Company Name</label>
                      <input type="text" placeholder="Your company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Phone</label>
                      <input type="tel" placeholder="+1234567890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Message</label>
                    <textarea placeholder="Tell us about your business..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                  </div>
                  <Button type="submit" className="w-full h-14 btn-glow uppercase tracking-[0.2em] text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/voip-rates" className="text-primary hover:underline">Check VoIP Rates</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk Services</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-api" className="text-primary hover:underline">VoIP API</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
