import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Server, MapPin, RefreshCw, Wifi, Activity, CheckCircle } from 'lucide-react';

export default function Network() {
  useSEO({
    title: 'Network Infrastructure — VoIP Cat Global POPs & Routing',
    description: 'Explore VoIP Cat carrier-grade network: global POP locations, automatic failover, redundant routing architecture and 99.99% uptime SLA.',
    keywords: 'VoIP network infrastructure, SIP POP locations, carrier routing, voice failover, telecom redundancy',
    canonical: 'https://voipcat.com/network',
  });

  const pops = [
    { region: 'Europe', city: 'Frankfurt, DE', type: 'Core POP', latency: '<5ms intra-EU' },
    { region: 'Europe', city: 'Amsterdam, NL', type: 'Core POP', latency: '<8ms intra-EU' },
    { region: 'North America', city: 'New York, US', type: 'Core POP', latency: '<3ms US East' },
    { region: 'North America', city: 'Los Angeles, US', type: 'Edge POP', latency: '<5ms US West' },
    { region: 'Asia Pacific', city: 'Singapore, SG', type: 'Core POP', latency: '<10ms APAC' },
    { region: 'Asia Pacific', city: 'Tokyo, JP', type: 'Edge POP', latency: '<15ms APAC' },
    { region: 'Middle East', city: 'Dubai, AE', type: 'Core POP', latency: '<8ms MENA' },
    { region: 'Africa', city: 'Cairo, EG', type: 'Edge POP', latency: '<12ms Africa' },
  ];

  const metrics = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '8', label: 'Global POPs' },
    { value: '<20ms', label: 'Avg Latency' },
    { value: '0.3s', label: 'Failover Time' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Global Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              CARRIER-GRADE <span className="text-primary">INFRASTRUCTURE</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Built on redundant carrier interconnects and globally distributed POPs, our network is engineered for production telecom workloads at any scale.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="bg-black py-12 border-b border-primary/10">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map(({ value, label }, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POP Map table */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter mb-10" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              POP <span className="text-primary">LOCATIONS</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    {['Region', 'City / Datacenter', 'POP Type', 'Latency'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs uppercase tracking-widest text-muted-foreground font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pops.map((pop, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium"><span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{pop.region}</span></td>
                      <td className="px-6 py-4 text-muted-foreground">{pop.city}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">{pop.type}</span></td>
                      <td className="px-6 py-4 text-muted-foreground font-mono">{pop.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Routing architecture */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ROUTING <span className="text-primary">ARCHITECTURE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: RefreshCw, title: 'Automatic Failover', desc: 'Sub-second rerouting around failed carriers. Our system monitors routes continuously and switches without manual intervention — transparent to your calls.' },
                { icon: Wifi,      title: 'Least-Cost Routing', desc: 'Dynamic LCR engine evaluates quality metrics (ASR, ACD, PDD) alongside cost on every call to select the optimal carrier path.' },
                { icon: Activity,  title: 'Real-Time Monitoring', desc: 'Every route is monitored 24/7. Alerts fire within 30 seconds of degradation. Our NOC team responds within 5 minutes for severity-1 events.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-black/40 rounded-xl border border-primary/20 p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-white font-bold mb-3 uppercase tracking-wide text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uptime SLA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 flex flex-col md:flex-row items-center gap-8">
              <CheckCircle className="w-16 h-16 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-2xl mb-3 uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>99.99% Uptime — Financially Backed SLA</h3>
                <p className="text-slate-400 leading-relaxed">Our SLA is not marketing copy. Downtime beyond our guarantee triggers automatic service credits. We put our revenue behind our reliability promise.</p>
              </div>
              <a href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Request SLA Docs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
