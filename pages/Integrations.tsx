import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Puzzle, ArrowRight } from 'lucide-react';
import { pageServiceSchema, breadcrumbSchema, injectStructuredData } from '@/utils/structuredData';

type Category = 'All' | 'PBX' | 'Softphone' | 'CRM';

interface Integration {
  name: string;
  category: Exclude<Category, 'All'>;
  desc: string;
  guideHref?: string;
}

const integrations: Integration[] = [
  // PBX
  {
    name: '3CX',
    category: 'PBX',
    desc: 'Native SIP trunk support. Deploy in under 30 minutes with our 3CX configuration wizard.',
    guideHref: '/articles/sip-trunk-setup-3cx',
  },
  {
    name: 'FreePBX',
    category: 'PBX',
    desc: 'Full compatibility with FreePBX trunk configuration. Supports PJSIP and chan_sip.',
    guideHref: '/articles/sip-trunk-setup-freepbx',
  },
  {
    name: 'Asterisk',
    category: 'PBX',
    desc: 'Tested with Asterisk 18, 19, 20. Includes sample dialplan and SIP.conf templates.',
    guideHref: '/articles/sip-trunk-setup-freepbx',
  },
  {
    name: 'FusionPBX',
    category: 'PBX',
    desc: 'Full multi-tenant PBX. SIP trunk works natively with FusionPBX routing tables.',
  },
  {
    name: 'VitalPBX',
    category: 'PBX',
    desc: 'Enterprise PBX with built-in SIP trunk wizard. Compatible with all VoIP Cat endpoints.',
  },
  {
    name: 'FreeSwitch',
    category: 'PBX',
    desc: 'Carrier-grade soft-switch. Used by large call centers and carriers worldwide.',
  },
  {
    name: 'MagnusBilling',
    category: 'PBX',
    desc: 'Self-hosted billing and routing for VoIP resellers. Native VoIP Cat support.',
  },
  {
    name: 'Issabel',
    category: 'PBX',
    desc: 'Open-source Asterisk distribution with web GUI. Trunk setup in under 10 minutes.',
  },
  {
    name: 'Yeastar',
    category: 'PBX',
    desc: 'Hardware and cloud PBX with SIP trunk support. Auto-provisioning available.',
  },
  // Softphones
  {
    name: 'MicroSIP',
    category: 'Softphone',
    desc: 'Pre-configured profiles for MicroSIP softphone. One-click import.',
  },
  {
    name: 'Zoiper',
    category: 'Softphone',
    desc: 'Configuration profiles for Zoiper 5 desktop and mobile clients.',
  },
  {
    name: 'Linphone',
    category: 'Softphone',
    desc: 'Open-source SIP softphone for desktop and mobile. TLS/SRTP supported.',
  },
  {
    name: 'Blink',
    category: 'Softphone',
    desc: 'Advanced SIP client supporting multiple accounts and HD video calling.',
  },
  {
    name: 'Grandstream Wave',
    category: 'Softphone',
    desc: 'Free softphone app for iOS and Android from Grandstream.',
  },
  {
    name: 'Telephone (Mac)',
    category: 'Softphone',
    desc: 'Native macOS SIP client. Simple setup with VoIP Cat SIP credentials.',
  },
  // CRM
  {
    name: 'HubSpot',
    category: 'CRM',
    desc: 'Log calls directly in HubSpot CRM. Auto-create contacts from inbound calls.',
  },
  {
    name: 'Zoho CRM',
    category: 'CRM',
    desc: 'Click-to-call and call logging for Zoho CRM users via our VoIP API.',
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    desc: 'CTI integration for Salesforce Service Cloud. Inbound screen-pop and call disposition logging.',
  },
  {
    name: 'Freshdesk',
    category: 'CRM',
    desc: 'Call center integration for Freshdesk tickets. Inbound call-to-ticket creation.',
  },
  {
    name: 'Pipedrive',
    category: 'CRM',
    desc: 'Click-to-call and call logging for Pipedrive CRM via VoIP API.',
  },
];

const CATEGORIES: Category[] = ['All', 'PBX', 'Softphone', 'CRM'];

export default function Integrations() {
  useSEO({
    title: 'Integrations — 3CX, FreePBX, FusionPBX, HubSpot & 20+ Platforms | VoIP Cat',
    description: 'VoIP Cat integrates with 3CX, FreePBX, Asterisk, FusionPBX, HubSpot, Salesforce, and 20+ platforms. Enterprise-grade SIP trunk compatibility.',
    keywords: '3CX SIP trunk, FreePBX VoIP, Asterisk provider, HubSpot VoIP integration, FusionPBX, VitalPBX, Issabel, Linphone',
    canonical: 'https://voipcat.com/integrations',
  });

  useEffect(() => {
    injectStructuredData(
      pageServiceSchema(
        'VoIP Integrations',
        'VoIP Cat integrates with 3CX, FreePBX, Asterisk, FusionPBX, HubSpot, Salesforce, and 20+ platforms.',
        'https://voipcat.com/integrations',
      ),
    );
    injectStructuredData(
      breadcrumbSchema([
        { name: 'Home', url: 'https://voipcat.com' },
        { name: 'Integrations', url: 'https://voipcat.com/integrations' },
      ]),
    );
  }, []);

  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

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
              <span
                className="text-xs font-bold text-primary uppercase tracking-widest"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Integrations
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl text-white uppercase tracking-tighter"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              WORKS WITH YOUR <span className="text-primary">STACK</span>
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">
              Compatible with 20+ PBX platforms, CRMs, and softphones. Set up in minutes, not days.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
                  }`}
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span className="ml-2 opacity-60 text-xs">
                      ({integrations.filter((i) => i.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(({ name, category, desc, guideHref }) => (
                <div
                  key={name}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center">
                      <Puzzle className="w-6 h-6 text-primary" />
                    </div>
                    <span
                      className="text-xs font-bold px-2 py-1 bg-muted rounded-md text-muted-foreground uppercase tracking-widest"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {category}
                    </span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{desc}</p>
                  {guideHref && (
                    <div className="mt-5 pt-4 border-t border-border">
                      <Link
                        href={guideHref}
                        className="inline-flex items-center gap-1.5 text-primary text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        Setup Guide
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center space-y-4">
              <h2
                className="text-2xl text-white font-bold uppercase"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Don't See Your Platform?
              </h2>
              <p className="text-slate-400">
                If it speaks SIP, it works with VoIP Cat. Contact us for custom integration support.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
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
