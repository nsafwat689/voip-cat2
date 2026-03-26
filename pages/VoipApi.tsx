import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Shield, Zap, Server, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function VoipApi() {
  useSEO({
    title: 'VoIP API | Programmable Voice & SIP API | VOIP CAT',
    description: 'Integrate VoIP into your applications with VoIP Cat\'s powerful API. Programmable voice, SIP trunking API, call control, and real-time analytics. RESTful API with comprehensive documentation.',
    keywords: 'VoIP API, programmable voice API, SIP API, voice API, call API, telephony API, communication API',
    canonical: 'https://voipcat.com/voip-api',
  });

  const features = [
    { icon: Code, title: 'RESTful API', desc: 'Clean, well-documented RESTful API with JSON responses. Easy to integrate with any programming language or platform.' },
    { icon: Zap, title: 'Real-Time Events', desc: 'Webhooks for real-time call events, CDR delivery, and status notifications. Build responsive voice applications.' },
    { icon: Globe, title: 'Global Reach', desc: 'Make and receive calls to 190+ countries through our API. Provision DIDs and manage routes programmatically.' },
    { icon: Shield, title: 'Secure by Default', desc: 'API key authentication, TLS encryption, IP whitelisting, and rate limiting. Enterprise-grade security built in.' },
    { icon: Server, title: 'High Availability', desc: '99.9% API uptime with geo-redundant endpoints. Automatic failover ensures your applications stay connected.' },
    { icon: Clock, title: 'Low Latency', desc: 'Sub-100ms API response times. Optimized for real-time voice applications and high-throughput scenarios.' },
  ];

  const codeExample = `// Make a call using VoIP Cat API
const response = await fetch('https://api.voipcat.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: '+12025551234',
    to: '+442071234567',
    codec: 'G.711',
    callback_url: 'https://your-app.com/webhook'
  })
});

const call = await response.json();
console.log('Call SID:', call.sid);`;

  const apiEndpoints = [
    { method: 'POST', path: '/v1/calls', desc: 'Initiate an outbound call' },
    { method: 'GET', path: '/v1/calls/{sid}', desc: 'Get call details and status' },
    { method: 'POST', path: '/v1/sip/trunks', desc: 'Create a new SIP trunk' },
    { method: 'GET', path: '/v1/rates/{country}', desc: 'Get rates for a country' },
    { method: 'GET', path: '/v1/cdr', desc: 'Retrieve call detail records' },
    { method: 'POST', path: '/v1/dids', desc: 'Provision a new DID number' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Developer API
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  VOIP <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">API</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Build powerful voice applications with our programmable VoIP API. Make calls, manage SIP trunks, provision DIDs, and access real-time analytics — all through a simple RESTful interface.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20your%20VoIP%20API." target="_blank" rel="noopener noreferrer">
                    <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Get API Access <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Code Preview */}
              <div className="hidden md:block">
                <div className="bg-[#0d1117] rounded-2xl border border-primary/20 shadow-[0_0_50px_rgba(0,163,255,0.1)] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-primary/10">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-slate-500 ml-2">example.js</span>
                  </div>
                  <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                API <span className="text-primary">FEATURES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-elevated p-8 space-y-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Endpoints Preview */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-foreground uppercase tracking-tighter mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                API <span className="text-primary">ENDPOINTS</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="card-elevated p-4 flex items-center gap-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-md ${
                    endpoint.method === 'POST' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'
                  }`} style={{ fontFamily: 'Orbitron, sans-serif' }}>{endpoint.method}</span>
                  <code className="text-sm text-foreground font-mono">{endpoint.path}</code>
                  <span className="text-sm text-muted-foreground ml-auto hidden sm:inline">{endpoint.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary dark:bg-black">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl text-white uppercase tracking-tighter mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              READY TO <span className="text-primary">BUILD</span>?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Get API access and start building voice applications today. Our team is ready to help you integrate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20API%20access%20for%20VoIP%20integration." target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow flex items-center gap-3 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Get API Key <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 h-14 px-8 uppercase tracking-wider text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Talk to a Developer
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/voip-rates" className="text-primary hover:underline">Check VoIP Rates</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/sip-trunk" className="text-primary hover:underline">SIP Trunk Services</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/wholesale-voip" className="text-primary hover:underline">Wholesale VoIP</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/voip-reseller" className="text-primary hover:underline">Become a Reseller</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
