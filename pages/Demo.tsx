import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { PhoneCall, Wifi, Lock, ArrowRight, LogIn } from 'lucide-react';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

export default function Demo() {
  useSEO({
    title: 'Live WebRTC Demo — Make a Real Call From Your Browser | VOIP CAT',
    description: 'Try VoIP Cat quality right now. Make a real call directly from your browser using WebRTC — no downloads, no signup. Hear carrier-grade HD voice for yourself.',
    keywords: 'WebRTC demo, VoIP demo, free VoIP call, test VoIP quality, browser phone call, SIP WebRTC demo',
    canonical: 'https://voipcat.com/demo',
  });

  const features = [
    { icon: Wifi,     label: 'HD Voice Quality',   desc: 'Wideband audio — hear the difference instantly' },
    { icon: Lock,     label: 'TLS Encrypted',       desc: 'All signalling and media encrypted end-to-end' },
    { icon: PhoneCall,label: '190+ Countries',      desc: 'Same routes your production calls will use' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        <section className="py-12 md:py-20 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="container text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Live Demo — No Signup Needed</span>
            </div>
            <h1 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              HEAR THE <span className="text-primary">QUALITY</span> YOURSELF
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto">
              Make a real VoIP call directly from your browser. No app, no downloads, no commitment. This is the exact network your production calls will run on.
            </p>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Embedded softphone */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(0,163,255,0.1)] bg-black" style={{ height: '640px' }}>
                  <iframe
                    src="https://phone.voipcat.com/demo.html"
                    className="w-full h-full"
                    title="VoIP Cat WebRTC Softphone Demo"
                    allow="microphone; camera; autoplay"
                    style={{ border: 'none' }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your browser will ask for microphone permission — required for voice calls.
                </p>
              </div>

              {/* Side info */}
              <div className="space-y-5">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-card border border-border rounded-xl p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 space-y-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>Like what you hear?</p>
                  <p className="text-xs text-muted-foreground">Create a free account and get your own SIP credentials in under 60 seconds.</p>
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="btn-glow w-full gap-2 uppercase tracking-widest text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      <LogIn className="w-4 h-4" /> Create Free Account <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The softphone above connects to the same carrier-grade infrastructure used by our production clients. Call quality, ASR, latency — all identical to what you'll get on a live account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
