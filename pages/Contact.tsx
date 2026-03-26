import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Get in Touch | VOIP CAT',
    description: 'Contact VoIP Cat for enterprise VoIP solutions, SIP trunking, wholesale VoIP, and more. Available 24/7 via WhatsApp, email, and phone. Free test routes available.',
    keywords: 'contact VoIP Cat, VoIP support, VoIP sales, get in touch, VoIP help',
    canonical: 'https://voipcat.com/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi VoIP Cat!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/201557649136?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      details: '+20 155 764 9136',
      subtext: 'Fastest response — Available 24/7',
      href: 'https://wa.me/201557649136?text=Hello%20VoIP%20Cat',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      details: 'sales.voipcat@gmail.com',
      subtext: 'We reply within 2 hours',
      href: 'mailto:sales.voipcat@gmail.com',
      external: false,
    },
    {
      icon: Phone,
      label: 'Phone',
      details: '+20 155 764 9136',
      subtext: 'Mon-Fri: 9AM - 8PM | Sat: 10AM - 4PM',
      href: 'tel:+201557649136',
      external: false,
    },
    {
      icon: MapPin,
      label: 'Office',
      details: '251 Mercer St, New York, NY 10012, USA',
      subtext: 'Visit by appointment',
      href: '#',
      external: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              GET IN <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">TOUCH</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have questions about our VoIP services? Need a free test route? Our team is available 24/7 to help you get started.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Available 24/7</span>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="card-elevated p-6 space-y-4 group hover:border-primary transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>{method.label}</h3>
                      <p className="text-sm text-primary font-semibold mt-1">{method.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.subtext}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  SEND US A <span className="text-primary">MESSAGE</span>
                </h2>
                <p className="text-muted-foreground">Fill out the form below and we will get back to you as soon as possible.</p>
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
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Phone</label>
                      <input type="tel" placeholder="+1234567890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Subject</label>
                      <input type="text" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>Message</label>
                    <textarea placeholder="Tell us about your needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" required />
                  </div>
                  <Button type="submit" className="w-full h-14 btn-glow uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-background">
          <div className="container text-center">
            <p className="text-muted-foreground mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/voip-rates" className="text-primary hover:underline">VoIP Rates</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-reseller" className="text-primary hover:underline">Reseller Program</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-api" className="text-primary hover:underline">VoIP API</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/cloud-pbx" className="text-primary hover:underline">Cloud PBX</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
