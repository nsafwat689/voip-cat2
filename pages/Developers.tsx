import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code, Terminal, Webhook, Key, ArrowRight } from 'lucide-react';

const sipExample = `; Asterisk sip.conf
[voipcat-trunk]
type=peer
host=sip.voipcat.com
username=YOUR_ACCOUNT_ID
secret=YOUR_SIP_PASSWORD
fromuser=YOUR_DID
fromdomain=sip.voipcat.com
insecure=port,invite
codec=allow=ulaw,alaw,g729
qualify=yes`;

const apiExample = `// Initiate outbound call via REST API
const response = await fetch('https://api.voipcat.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: '+12125550100',
    to:   '+447700900000',
    webhook_url: 'https://yourapp.com/webhooks/voipcat',
  }),
});
const call = await response.json();
console.log(call.call_id); // "call_abc123"`;

const webhookExample = `// POST https://yourapp.com/webhooks/voipcat
{
  "event":    "call.answered",
  "call_id":  "call_abc123",
  "from":     "+12125550100",
  "to":       "+447700900000",
  "duration": 0,
  "timestamp": "2025-05-07T12:00:00Z"
}`;

export default function Developers() {
  useSEO({
    title: 'Developers Portal — API Docs, SIP Examples & Webhooks | VoIP Cat',
    description: 'VoIP Cat developer documentation: REST API reference, SIP trunk configuration examples, webhook events, and authentication.',
    keywords: 'VoIP API, SIP trunk configuration, VoIP REST API, SIP examples, webhook VoIP',
    canonical: 'https://voipcat.com/developers',
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Developers</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              BUILD ON <span className="text-primary">VOIP CAT</span>
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">
              REST API, SIP trunk configuration examples, webhook events, and authentication — everything you need to integrate voice into your stack.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Get API Key <Key className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Quick start tabs */}
        <section className="py-20 bg-background">
          <div className="container space-y-16">

            {/* SIP Config */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>SIP Trunk Configuration</h2>
              </div>
              <div className="rounded-xl bg-black border border-primary/20 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/10 bg-primary/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">sip.conf — Asterisk</span>
                </div>
                <pre className="p-6 text-green-400 text-xs font-mono leading-relaxed overflow-x-auto">{sipExample}</pre>
              </div>
            </div>

            {/* REST API */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>REST API — Make a Call</h2>
              </div>
              <div className="rounded-xl bg-black border border-primary/20 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/10 bg-primary/5">
                  <span className="text-xs text-slate-500 font-mono">JavaScript / Node.js</span>
                </div>
                <pre className="p-6 text-blue-300 text-xs font-mono leading-relaxed overflow-x-auto">{apiExample}</pre>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {[
                  { method: 'POST', path: '/v1/calls', desc: 'Initiate outbound call' },
                  { method: 'GET',  path: '/v1/calls/:id', desc: 'Get call status' },
                  { method: 'DELETE', path: '/v1/calls/:id', desc: 'Hangup active call' },
                ].map(({ method, path, desc }, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${method === 'GET' ? 'bg-blue-500/10 text-blue-400' : method === 'POST' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>{method}</span>
                    <div className="font-mono text-xs text-foreground mt-2">{path}</div>
                    <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Webhooks */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Webhook className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Webhook Events</h2>
              </div>
              <div className="rounded-xl bg-black border border-primary/20 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/10 bg-primary/5">
                  <span className="text-xs text-slate-500 font-mono">call.answered — JSON payload</span>
                </div>
                <pre className="p-6 text-yellow-300 text-xs font-mono leading-relaxed overflow-x-auto">{webhookExample}</pre>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['call.initiated','call.answered','call.completed','call.failed','call.recording_ready'].map((evt) => (
                  <span key={evt} className="px-3 py-1 bg-muted text-muted-foreground rounded-md font-mono text-xs border border-border">{evt}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Auth section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 flex flex-col md:flex-row items-center gap-8">
              <Key className="w-14 h-14 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-xl mb-2 uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Authentication</h3>
                <p className="text-slate-400 text-sm leading-relaxed">All API requests require a Bearer token in the Authorization header. Generate your API key from the customer portal or contact our team. Tokens are scoped per-environment (sandbox / production).</p>
              </div>
              <a href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Access <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
