import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, AlertTriangle, Wifi, Activity, Eye } from 'lucide-react';

export default function Security() {
  useSEO({
    title: 'Security — SIP Encryption, Fraud Prevention & DDoS Protection | VoIP Cat',
    description: 'Enterprise VoIP security: SIP TLS encryption, anti-fraud engine, DDoS protection, and 24/7 abuse monitoring. Grade A telecom security posture.',
    keywords: 'SIP security, SIP encryption, VoIP fraud prevention, DDoS protection, telecom security',
    canonical: 'https://voipcat.com/security',
  });

  const features = [
    {
      icon: Lock,
      title: 'SIP TLS & SRTP Encryption',
      desc: 'All SIP signalling is transported over TLS 1.3. Media streams are encrypted with SRTP to prevent eavesdropping. No unencrypted call legs on our network.',
      badge: 'Grade A',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: AlertTriangle,
      title: 'Anti-Fraud Engine',
      desc: 'Real-time IRSF and toll fraud detection. Pattern recognition flags anomalous call volumes, destination changes, and off-hours spikes within seconds. Automatic blocking with human review.',
      badge: 'Real-Time',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Shield,
      title: 'DDoS Mitigation',
      desc: 'Always-on volumetric attack scrubbing at the edge. Our network absorbs multi-Gbps UDP floods before they reach your infrastructure. SIP-layer flood protection included.',
      badge: 'Always On',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    },
    {
      icon: Eye,
      title: 'Abuse Handling',
      desc: 'Dedicated abuse team processes reports 24/7. STIR/SHAKEN attestation support to combat caller ID spoofing. Robocall and SPIT blocking at the carrier level.',
      badge: '24/7',
      badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: Activity,
      title: 'Continuous Monitoring',
      desc: 'Every call leg is instrumented. Anomaly detection models run continuously against call detail records. Security events trigger automated responses and NOC alerts.',
      badge: 'Automated',
      badgeColor: 'text-primary bg-primary/10 border-primary/20',
    },
    {
      icon: Wifi,
      title: 'Network Segmentation',
      desc: 'Customer traffic runs in isolated VRFs. There is no lateral movement path between accounts. Our control plane is air-gapped from the media plane.',
      badge: 'Isolated',
      badgeColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Enterprise Security</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              TELECOM <span className="text-primary">SECURITY</span> AT CARRIER GRADE
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              We treat security as infrastructure, not a feature. Every layer of our stack is hardened against modern VoIP attack vectors.
            </p>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(({ icon: Icon, title, desc, badge, badgeColor }, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md border ${badgeColor}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>{badge}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center space-y-5">
              <h2 className="text-2xl text-white font-bold uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Need a Security Briefing?</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Our security team can walk you through our controls, share documentation, and answer compliance questions for your organization.</p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Request Security Briefing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
