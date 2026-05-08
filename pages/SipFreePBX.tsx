import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Terminal } from 'lucide-react';
import { useLocation } from 'wouter';

export default function SipFreePBX() {
  useSEO({
    title: 'FreePBX SIP Trunk — VoIP Cat for FreePBX & Asterisk | VoIP Cat',
    description: 'Premium SIP trunking for FreePBX and Asterisk. PJSIP and chan_sip support, HD voice, T.38 fax, 99.99% uptime. Sample configs included. Free test route.',
    keywords: 'FreePBX SIP trunk, Asterisk SIP provider, FreePBX VoIP, PJSIP trunk, chan_sip trunk, Asterisk trunk configuration',
    canonical: 'https://voipcat.com/sip-trunk/freepbx',
  });

  const [, setLocation] = useLocation();

  const sipConf = `[voipcat]
type=friend
host=sip.voipcat.com
username=YOUR_ACCOUNT_ID
secret=YOUR_PASSWORD
fromuser=YOUR_DID
fromdomain=sip.voipcat.com
insecure=port,invite
allow=ulaw,alaw,g729
qualify=yes
nat=force_rport,comedia`;

  const pjsipConf = `[voipcat-auth]
type=auth
auth_type=userpass
username=YOUR_ACCOUNT_ID
password=YOUR_PASSWORD

[voipcat-endpoint]
type=endpoint
transport=transport-udp
context=from-trunk
allow=ulaw,alaw,g729
outbound_auth=voipcat-auth
aors=voipcat-aor

[voipcat-aor]
type=aor
contact=sip:sip.voipcat.com`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>FreePBX SIP Trunk</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SIP TRUNK FOR <span className="text-primary">FREEPBX</span> &amp; ASTERISK
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Carrier-grade VoIP termination with full PJSIP and chan_sip support. Sample configs included — go live in under 30 minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setLocation('/free-test')} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Free Test Route <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Code examples */}
        <section className="py-20 bg-background">
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SAMPLE <span className="text-primary">CONFIGURATIONS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[{ label: 'chan_sip — sip.conf', code: sipConf, color: 'text-green-400' },
                { label: 'PJSIP — pjsip.conf', code: pjsipConf, color: 'text-blue-300' }
              ].map(({ label, code, color }, i) => (
                <div key={i} className="rounded-xl bg-black border border-primary/20 overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/10 bg-primary/5">
                    <span className="text-xs text-slate-500 font-mono">{label}</span>
                  </div>
                  <pre className={`p-5 text-xs font-mono leading-relaxed overflow-x-auto ${color}`}>{code}</pre>
                </div>
              ))}
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['FreePBX 15, 16, 17', 'Asterisk 18, 19, 20', 'PJSIP & chan_sip', 'HD Voice', 'T.38 Fax', 'SIP TLS / SRTP', '99.99% SLA', 'Free Test Route'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center space-y-5">
              <h2 className="text-2xl text-white font-bold uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Test Before You Commit</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Free test route with 10 minutes of outbound calls — no credit card, provisioned instantly.</p>
              <button onClick={() => setLocation('/free-test')} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Request Free Test <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
