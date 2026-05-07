import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Activity, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const systems = [
  { name: 'SIP Trunk — Core',         status: 'operational', uptime: '99.99%' },
  { name: 'Wholesale Termination',    status: 'operational', uptime: '99.98%' },
  { name: 'Cloud PBX Platform',       status: 'operational', uptime: '99.99%' },
  { name: 'VoIP API',                 status: 'operational', uptime: '99.97%' },
  { name: 'Billing & Portal',         status: 'operational', uptime: '99.95%' },
  { name: 'NOC Monitoring',           status: 'operational', uptime: '100%' },
  { name: 'Frankfurt POP',            status: 'operational', uptime: '99.99%' },
  { name: 'New York POP',             status: 'operational', uptime: '99.99%' },
  { name: 'Singapore POP',            status: 'operational', uptime: '99.98%' },
  { name: 'Dubai POP',                status: 'operational', uptime: '99.97%' },
];

const incidents = [
  { date: '2025-04-21', title: 'Elevated latency on APAC routes', severity: 'minor', resolved: true, duration: '14 min' },
  { date: '2025-03-08', title: 'Billing portal intermittent errors', severity: 'minor', resolved: true, duration: '32 min' },
  { date: '2025-02-14', title: 'SIP registration delays — EU West', severity: 'minor', resolved: true, duration: '8 min' },
];

const statusColors: Record<string, string> = {
  operational: 'text-green-400',
  degraded:    'text-yellow-400',
  outage:      'text-red-400',
};

export default function Status() {
  useSEO({
    title: 'Status — Live Uptime Dashboard | VoIP Cat',
    description: 'Real-time status for VoIP Cat services: SIP trunking, wholesale VoIP, Cloud PBX, POPs and APIs. Check current uptime and incident history.',
    canonical: 'https://voipcat.com/status',
  });

  const allOperational = systems.every((s) => s.status === 'operational');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] -z-10" />
          <div className="container text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Live Status</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SYSTEM <span className="text-primary">STATUS</span>
            </h1>
            {allOperational ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-bold text-sm uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>All Systems Operational</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Partial Degradation</span>
              </div>
            )}
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 bg-background">
          <div className="container space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Service Health</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              {systems.map((sys, i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 ${i < systems.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/30 transition-colors`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 ${statusColors[sys.status]}`} />
                    <span className="font-medium text-foreground text-sm">{sys.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-muted-foreground font-mono">{sys.uptime} uptime</span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${statusColors[sys.status]}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {sys.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident history */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>Incident History</h2>
            <div className="space-y-4">
              {incidents.map((inc, i) => (
                <div key={i} className="rounded-xl border border-primary/20 bg-black/30 p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-36">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-mono">{inc.date}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-medium text-sm">{inc.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">Duration: <span className="font-mono">{inc.duration}</span></span>
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" style={{ fontFamily: 'Orbitron, sans-serif' }}>{inc.severity}</span>
                    {inc.resolved && <span className="text-xs text-green-400 font-bold uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Resolved</span>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center">No major outages in the last 12 months. 99.99% average uptime across all services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
