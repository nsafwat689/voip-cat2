import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Puzzle, ArrowRight } from 'lucide-react';

const integrations = [
  { name: '3CX',      category: 'PBX',  desc: 'Native SIP trunk support. Deploy in under 30 minutes with our 3CX configuration wizard.',         docs: '/articles' },
  { name: 'FreePBX',  category: 'PBX',  desc: 'Full compatibility with FreePBX trunk configuration. Supports PJSIP and chan_sip.',                docs: '/articles' },
  { name: 'Asterisk', category: 'PBX',  desc: 'Tested with Asterisk 18, 19, 20. Includes sample dialplan and SIP.conf templates.',               docs: '/articles' },
  { name: 'HubSpot',  category: 'CRM',  desc: 'Log calls directly in HubSpot CRM. Auto-create contacts from inbound calls.',                     docs: '/contact' },
  { name: 'Zoho CRM', category: 'CRM',  desc: 'Click-to-call and call logging for Zoho CRM users via our VoIP API.',                             docs: '/contact' },
  { name: 'Salesforce', category: 'CRM', desc: 'CTI integration for Salesforce Service Cloud. Inbound screen-pop and call disposition logging.',  docs: '/contact' },
  { name: 'MicroSIP', category: 'Softphone', desc: 'Pre-configured profiles for MicroSIP softphone. One-click import.',                          docs: '/articles' },
  { name: 'Zoiper',   category: 'Softphone', desc: 'Configuration profiles for Zoiper 5 desktop and mobile clients.',                            docs: '/articles' },
];

const categories = ['All', 'PBX', 'CRM', 'Softphone'];

export default function Integrations() {
  useSEO({
    title: 'Integrations — 3CX, FreePBX, Asterisk, HubSpot & More | VoIP Cat',
    description: 'VoIP Cat integrates with 3CX, FreePBX, Asterisk, Zoho CRM, Salesforce, HubSpot and more. Enterprise-grade SIP trunk compatibility.',
    keywords: '3CX SIP trunk, FreePBX VoIP, Asterisk provider, HubSpot VoIP integration',
    canonical: 'https://voipcat.com/integrations',
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Puzzle className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Integrations</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              WORKS WITH YOUR <span className="text-primary">STACK</span>
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">
              Compatible with the most popular PBX platforms, CRMs, and softphones. Set up in minutes, not days.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map(({ name, category, desc, docs }, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center">
                      <Puzzle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-muted rounded-md text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{category}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                  <a href={docs} className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                    View Docs <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center space-y-4">
              <h2 className="text-2xl text-white font-bold uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Don't See Your Platform?</h2>
              <p className="text-slate-400">If it speaks SIP, it works with VoIP Cat. Contact us for custom integration support.</p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Contact Engineering Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
