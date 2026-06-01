import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { Calculator, ArrowRight, TrendingDown, Share2, Check, LogIn } from 'lucide-react';
import { PORTAL_URL } from '@/lib/portal';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

// Typical market rates (conservative industry averages, well above VoIP Cat)
const DESTINATIONS = [
  { label: 'Saudi Arabia (+966)',  market: 0.045, vc: 0.020 },
  { label: 'UAE (+971)',           market: 0.040, vc: 0.018 },
  { label: 'United States (+1)',   market: 0.015, vc: 0.004 },
  { label: 'United Kingdom (+44)', market: 0.018, vc: 0.006 },
  { label: 'India (+91)',          market: 0.022, vc: 0.009 },
  { label: 'Egypt (+20)',          market: 0.030, vc: 0.012 },
  { label: 'Qatar (+974)',         market: 0.070, vc: 0.036 },
  { label: 'Kuwait (+965)',        market: 0.065, vc: 0.032 },
  { label: 'Yemen (+967)',         market: 0.080, vc: 0.035 },
  { label: 'Syria (+963)',         market: 0.085, vc: 0.038 },
  { label: 'Germany (+49)',        market: 0.020, vc: 0.007 },
  { label: 'Nigeria (+234)',       market: 0.060, vc: 0.025 },
  { label: 'Turkey (+90)',         market: 0.075, vc: 0.036 },
  { label: 'Australia (+61)',      market: 0.025, vc: 0.010 },
  { label: 'Pakistan (+92)',       market: 0.035, vc: 0.014 },
  { label: 'Canada (+1)',          market: 0.015, vc: 0.004 },
  { label: 'France (+33)',         market: 0.020, vc: 0.007 },
  { label: 'Iraq (+964)',          market: 0.090, vc: 0.040 },
];

const BILLING = [
  { label: 'Per-minute (60/60)', divisor: 1 },
  { label: 'Per-second (1/1)',   divisor: 60 },
  { label: '6-second blocks',    divisor: 10 },
];

export default function SavingsCalculator() {
  useSEO({
    title: 'VoIP Cost Savings Calculator — How Much Could You Save? | VOIP CAT',
    description: 'Calculate exactly how much you could save switching to VoIP Cat. Enter your monthly minutes and destinations and see your potential annual savings instantly.',
    keywords: 'VoIP cost calculator, VoIP savings, SIP trunk cost comparison, reduce telecom costs, VoIP pricing calculator',
    canonical: 'https://voipcat.com/calculator',
  });

  const [rows, setRows] = useState([
    { dest: 0, minutes: 10000 },
    { dest: 1, minutes: 5000 },
    { dest: 2, minutes: 8000 },
  ]);
  const [billing, setBilling] = useState(0);
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    return rows.map(r => {
      const d = DESTINATIONS[r.dest];
      const minutes = r.minutes;
      const bMult = BILLING[billing].divisor === 1 ? 1 : 1; // per-second always wins
      // Per-minute: ceil(duration). Per-second: exact. We model: market is per-min, vc is per-second
      const marketCost = minutes * d.market; // market: per-minute
      const vcCost = billing === 0
        ? minutes * d.vc          // per-minute
        : minutes * d.vc * 0.88;  // per-second ~12% cheaper on avg call mix
      return { ...d, minutes, marketCost, vcCost, saved: marketCost - vcCost };
    });
  }, [rows, billing]);

  const totalMarket = results.reduce((a, r) => a + r.marketCost, 0);
  const totalVC = results.reduce((a, r) => a + r.vcCost, 0);
  const totalSaved = totalMarket - totalVC;
  const pctSaved = totalMarket > 0 ? (totalSaved / totalMarket) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const addRow = () => setRows(r => [...r, { dest: 3, minutes: 5000 }]);
  const removeRow = (i: number) => setRows(r => r.filter((_, j) => j !== i));
  const updateRow = (i: number, key: 'dest' | 'minutes', val: number) =>
    setRows(r => r.map((row, j) => j === i ? { ...row, [key]: val } : row));

  const share = () => {
    navigator.clipboard.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>VoIP Savings Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              HOW MUCH COULD YOU <span className="text-primary">SAVE?</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Enter your monthly call volume and destinations. See instantly what you'd pay with VoIP Cat vs. typical market rates.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Calculator inputs */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <h2 className="text-sm font-bold text-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Your Call Destinations</h2>

                  {rows.map((row, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <select
                        value={row.dest}
                        onChange={e => updateRow(i, 'dest', Number(e.target.value))}
                        className="flex-1 bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50"
                      >
                        {DESTINATIONS.map((d, j) => <option key={j} value={j}>{d.label}</option>)}
                      </select>
                      <div className="relative">
                        <input
                          type="number"
                          min={100}
                          step={1000}
                          value={row.minutes}
                          onChange={e => updateRow(i, 'minutes', Number(e.target.value))}
                          className="w-36 bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 text-right pr-14"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">min/mo</span>
                      </div>
                      {rows.length > 1 && (
                        <button onClick={() => removeRow(i)} className="text-muted-foreground hover:text-red-400 transition-colors text-lg leading-none">×</button>
                      )}
                    </div>
                  ))}

                  {rows.length < 6 && (
                    <button onClick={addRow} className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors">
                      + Add destination
                    </button>
                  )}

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Billing model comparison</p>
                    <div className="flex flex-wrap gap-2">
                      {BILLING.map((b, j) => (
                        <button key={j} onClick={() => setBilling(j)}
                          className={`px-3 py-1.5 rounded-lg text-xs border font-medium transition-colors ${billing === j ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}>
                          {b.label}
                        </button>
                      ))}
                    </div>
                    {billing > 0 && <p className="text-xs text-primary mt-2">✓ VoIP Cat uses per-second billing — you save an additional ~12% vs per-minute competitors</p>}
                  </div>
                </div>

                {/* Row breakdown */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 border-b border-border">
                      <tr>
                        {['Destination', 'Minutes', 'Market cost', 'VoIP Cat', 'Saved'].map(h => (
                          <th key={h} className="px-4 py-3 text-left text-xs text-muted-foreground font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr key={i} className="border-b border-border last:border-0">
                          <td className="px-4 py-3 text-foreground font-medium">{r.label}</td>
                          <td className="px-4 py-3 text-muted-foreground">{r.minutes.toLocaleString()}</td>
                          <td className="px-4 py-3 text-muted-foreground">{fmt(r.marketCost)}</td>
                          <td className="px-4 py-3 text-primary font-medium">{fmt(r.vcCost)}</td>
                          <td className="px-4 py-3 text-green-400 font-bold">{fmt(r.saved)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Results sidebar */}
              <div className="space-y-4">
                <div className="bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 text-center space-y-2">
                  <TrendingDown className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Monthly savings</p>
                  <p className="text-4xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmt(totalSaved)}</p>
                  <p className="text-sm text-muted-foreground">({pctSaved.toFixed(0)}% cheaper)</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Annual savings</p>
                  <p className="text-3xl font-bold text-green-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>{fmt(totalSaved * 12)}</p>
                  <p className="text-xs text-muted-foreground">vs. typical market rates</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market total/mo</span>
                    <span className="text-foreground font-medium">{fmt(totalMarket)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">VoIP Cat total/mo</span>
                    <span className="text-primary font-bold">{fmt(totalVC)}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-green-400">You save/mo</span>
                    <span className="text-green-400">{fmt(totalSaved)}</span>
                  </div>
                </div>

                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="btn-glow w-full h-12 gap-2 uppercase tracking-widest text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <LogIn className="w-4 h-4" /> Start Saving Now
                  </Button>
                </a>

                <button onClick={share} className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/50 rounded-xl transition-colors">
                  {copied ? <><Check className="w-4 h-4 text-green-400" /> Link copied!</> : <><Share2 className="w-4 h-4" /> Share this calculation</>}
                </button>

                <p className="text-xs text-center text-muted-foreground px-2">
                  Market rates based on industry averages. VoIP Cat rates are indicative — <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">log in for your live rates</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-t border-primary/10">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl text-white font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Ready to stop overpaying?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">Create your free account in 60 seconds and start routing calls at VoIP Cat rates today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow h-13 px-8 gap-2 uppercase tracking-widest text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <LogIn className="w-4 h-4" /> Create Free Account <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
