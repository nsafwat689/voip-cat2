import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { DollarSign, TrendingUp, Share2, Check, Users, ArrowRight } from 'lucide-react';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

export default function ResellerCalculator() {
  useSEO({
    title: 'VoIP Reseller Earnings Calculator — How Much Can You Make? | VOIP CAT',
    description: 'Calculate your monthly income as a VoIP Cat reseller. Enter your call volume and markup — see your earnings instantly. White-label VoIP reseller program.',
    keywords: 'VoIP reseller earnings, reseller income calculator, VoIP reseller program, wholesale VoIP reseller, VoIP business income',
    canonical: 'https://voipcat.com/reseller-calculator',
  });

  const [minutes, setMinutes] = useState(100000);
  const [markup, setMarkup] = useState(0.006);
  const [accounts, setAccounts] = useState(10);
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const monthly = minutes * markup;
    const annual = monthly * 12;
    const perAccount = accounts > 0 ? monthly / accounts : 0;
    return { monthly, annual, perAccount };
  }, [minutes, markup, accounts]);

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 3, maximumFractionDigits: 3 });

  const share = () => {
    navigator.clipboard.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const presets = [
    { label: 'Starter',    minutes: 50000,   accounts: 5,   markup: 0.005 },
    { label: 'Growing',    minutes: 250000,  accounts: 25,  markup: 0.006 },
    { label: 'Established',minutes: 1000000, accounts: 80,  markup: 0.007 },
    { label: 'Enterprise', minutes: 5000000, accounts: 300, markup: 0.008 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Reseller Earnings Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              HOW MUCH WILL YOU <span className="text-primary">EARN?</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Set your own markup over VoIP Cat wholesale rates. Your clients pay your price. You keep the margin. We handle the infrastructure.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-5xl">

            {/* Presets */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {presets.map(p => (
                <button key={p.label} onClick={() => { setMinutes(p.minutes); setAccounts(p.accounts); setMarkup(p.markup); }}
                  className="px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {p.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Inputs */}
              <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Monthly minutes</label>
                    <span className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>{minutes.toLocaleString()}</span>
                  </div>
                  <input type="range" min={10000} max={10000000} step={10000} value={minutes} onChange={e => setMinutes(Number(e.target.value))}
                    className="w-full accent-primary h-2 cursor-pointer" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10K min</span><span>10M min</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Your markup per minute</label>
                    <span className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmtD(markup)}</span>
                  </div>
                  <input type="range" min={0.002} max={0.020} step={0.001} value={markup} onChange={e => setMarkup(Number(e.target.value))}
                    className="w-full accent-primary h-2 cursor-pointer" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0.002 (tight margin)</span><span>$0.020 (premium)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Number of client accounts</label>
                    <span className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>{accounts}</span>
                  </div>
                  <input type="range" min={1} max={500} step={1} value={accounts} onChange={e => setAccounts(Number(e.target.value))}
                    className="w-full accent-primary h-2 cursor-pointer" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 account</span><span>500 accounts</span>
                  </div>
                </div>

                {/* What you get */}
                <div className="border-t border-border pt-6 space-y-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>What's included in your reseller account</p>
                  {[
                    'Your own branded portal for clients',
                    'Automated billing — clients top up, you earn',
                    'Full CDR access and reporting',
                    'White-label branding — your name, your identity',
                    '24/7 technical support from VoIP Cat',
                    'Access to 190+ country routes from day one',
                  ].map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 text-center space-y-2">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Monthly earnings</p>
                  <p className="text-4xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmt(calc.monthly)}</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 text-center space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Annual earnings</p>
                  <p className="text-3xl font-bold text-green-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmt(calc.annual)}</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 text-center space-y-2">
                  <Users className="w-5 h-5 text-muted-foreground mx-auto" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Avg. per account/mo</p>
                  <p className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmt(calc.perAccount)}</p>
                </div>

                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="btn-glow w-full h-12 gap-2 uppercase tracking-widest text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Start Earning <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>

                <button onClick={share} className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/50 rounded-xl transition-colors">
                  {copied ? <><Check className="w-4 h-4 text-green-400" /> Copied!</> : <><Share2 className="w-4 h-4" /> Share</>}
                </button>

                <p className="text-xs text-center text-muted-foreground">Earnings shown are gross margin on call volume. Actual rates vary by destination.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
