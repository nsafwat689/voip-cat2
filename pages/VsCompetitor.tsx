import { useParams } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { Check, X, ArrowRight, LogIn, Zap } from 'lucide-react';

const REGISTER_URL = 'https://portal.voipcat.com/mbilling/#/register';

const COMPETITORS: Record<string, {
  name: string; slug: string; tagline: string;
  features: { label: string; vc: boolean | string; them: boolean | string }[];
  verdict: string;
}> = {
  twilio: {
    name: 'Twilio', slug: 'twilio',
    tagline: 'VoIP Cat vs Twilio: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',           vc: true,              them: false },
      { label: 'Wholesale A-Z termination',    vc: true,              them: 'Programmable only' },
      { label: 'Minimum monthly commitment',   vc: 'None',            them: '$0 but usage minimums apply' },
      { label: 'CLI / Caller ID on all routes',vc: true,              them: 'Route dependent' },
      { label: 'High-volume reseller program', vc: true,              them: false },
      { label: 'Self-service signup',          vc: true,              them: true },
      { label: 'Free test route',              vc: true,              them: 'Credit-based trial only' },
      { label: '24/7 NOC support',             vc: true,              them: 'Enterprise plan only' },
      { label: 'Middle East & Africa routes',  vc: 'Premium, direct', them: 'Limited, high cost' },
      { label: 'Typical cost per minute (US)', vc: '$0.004',          them: '$0.0085+' },
      { label: 'White-label reseller portal',  vc: true,              them: false },
      { label: 'Real-time CDR dashboard',      vc: true,              them: true },
    ],
    verdict: 'Twilio is a developer platform built for programmable communications — it excels at SMS, voice APIs, and building apps. VoIP Cat is built for businesses that need high-volume voice termination, wholesale routing, and a reseller program at carrier-grade scale with significantly lower per-minute costs. If you\'re a call center, ITSP, or reseller — VoIP Cat delivers far better economics.',
  },
  vonage: {
    name: 'Vonage', slug: 'vonage',
    tagline: 'VoIP Cat vs Vonage: SIP Trunking and Wholesale VoIP Comparison (2026)',
    features: [
      { label: 'Per-second billing',           vc: true,              them: false },
      { label: 'Wholesale reseller program',   vc: true,              them: 'Limited' },
      { label: 'CLI / Caller ID guaranteed',   vc: true,              them: 'Not always' },
      { label: 'A-Z termination 190+ countries',vc: true,             them: true },
      { label: 'Free test route, no credit card',vc: true,            them: false },
      { label: 'Real-time CDR / billing',      vc: true,              them: true },
      { label: 'Contracts / commitments',      vc: 'None',            them: 'Annual contracts common' },
      { label: '24/7 support for all plans',   vc: true,              them: 'Paid tiers only' },
      { label: 'Middle East route quality',    vc: 'Premium, direct', them: 'Standard' },
      { label: 'Typical cost per minute (UK)', vc: '$0.006',          them: '$0.018+' },
      { label: 'White-label solution',         vc: true,              them: false },
      { label: 'Android / WebRTC softphone',   vc: true,              them: 'Via Vonage app' },
    ],
    verdict: 'Vonage offers a solid UCaaS platform with many consumer and SMB features. However, for wholesale buyers, carriers, and resellers needing direct A-Z termination with per-second billing and no contracts, VoIP Cat is purpose-built for that use case — and typically 50–70% cheaper per minute on high-traffic routes.',
  },
  telnyx: {
    name: 'Telnyx', slug: 'telnyx',
    tagline: 'VoIP Cat vs Telnyx: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',            vc: true,              them: true },
      { label: 'Wholesale A-Z termination',     vc: true,              them: true },
      { label: 'Middle East & Africa routes',   vc: 'Premium, direct', them: 'Standard' },
      { label: 'Free test route (no credit)',   vc: true,              them: 'Credit required' },
      { label: 'White-label reseller program',  vc: true,              them: false },
      { label: 'CLI guaranteed routes',         vc: true,              them: 'Route dependent' },
      { label: '24/7 dedicated NOC support',    vc: true,              them: 'Standard support' },
      { label: 'High-volume custom pricing',    vc: true,              them: 'Self-serve rates only' },
      { label: 'Minimum deposit / commitment',  vc: 'None',            them: '$15 minimum deposit' },
      { label: 'Typical cost per min (MENA)',   vc: 'Lower',           them: 'Standard market' },
      { label: 'Android + WebRTC app',          vc: true,              them: false },
      { label: 'Automated billing for clients', vc: true,              them: false },
    ],
    verdict: 'Telnyx is a strong technical platform with good API capabilities and per-second billing. Where VoIP Cat stands apart is the white-label reseller infrastructure, dedicated Middle East and Africa routes with direct carrier agreements, and the ability to get a test route with zero deposit. For resellers and high-volume MENA-focused operations, VoIP Cat is the sharper choice.',
  },
  bandwidth: {
    name: 'Bandwidth', slug: 'bandwidth',
    tagline: 'VoIP Cat vs Bandwidth: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',              vc: true,              them: false },
      { label: 'SMB & reseller access',           vc: true,              them: 'Enterprise-only' },
      { label: 'Self-service signup',             vc: true,              them: 'Sales-assisted onboarding' },
      { label: 'Free test route, no credit card', vc: true,              them: false },
      { label: 'White-label reseller program',    vc: true,              them: false },
      { label: 'No contracts / commitments',      vc: 'None',            them: 'Enterprise contracts required' },
      { label: 'Middle East & Africa routes',     vc: 'Premium, direct', them: 'US-focused, limited MENA' },
      { label: '24/7 NOC support',                vc: true,              them: 'Enterprise SLA only' },
      { label: 'CLI guaranteed routes',           vc: true,              them: 'Route dependent' },
      { label: 'Typical cost per minute (US)',    vc: '$0.004',          them: 'Custom enterprise rates' },
      { label: 'A-Z global termination',          vc: true,              them: 'US/Canada focus' },
      { label: 'Real-time CDR dashboard',         vc: true,              them: true },
    ],
    verdict: 'Bandwidth.com is a Tier-1 US carrier built for large enterprise and platform clients — its onboarding is complex, access is gated behind sales teams, and it has no SMB or reseller path. VoIP Cat fills that gap with instant self-service access, per-second billing, and a white-label reseller program designed for ITSPs and growing businesses. If you need global reach beyond North America, VoIP Cat\'s MENA direct routes add further value Bandwidth simply cannot match.',
  },
  ringcentral: {
    name: 'RingCentral', slug: 'ringcentral',
    tagline: 'VoIP Cat vs RingCentral: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',              vc: true,              them: false },
      { label: 'Wholesale A-Z termination',       vc: true,              them: 'UCaaS only, no wholesale' },
      { label: 'White-label reseller program',    vc: true,              them: false },
      { label: 'No annual contracts',             vc: 'None',            them: 'Annual contracts standard' },
      { label: 'Free test route, no credit card', vc: true,              them: false },
      { label: 'CLI guaranteed routes',           vc: true,              them: 'Not applicable (UCaaS)' },
      { label: '24/7 NOC support',                vc: true,              them: 'Business hours standard' },
      { label: 'Middle East & Africa routes',     vc: 'Premium, direct', them: 'Limited, high cost' },
      { label: 'Typical cost per minute (intl)',  vc: '$0.004–$0.008',   them: '$0.03–$0.10+' },
      { label: 'Carrier-grade SIP trunking',      vc: true,              them: 'SIP Connect add-on only' },
      { label: 'High-volume custom pricing',      vc: true,              them: false },
      { label: 'Real-time CDR / billing',         vc: true,              them: 'Basic call logs only' },
    ],
    verdict: 'RingCentral is a UCaaS platform built for corporate phone systems — it is not a wholesale VoIP provider and has no reseller program or A-Z termination offering. VoIP Cat is purpose-built for carriers, ITSPs, and resellers who need per-second billing, direct global routes, and the ability to white-label the service to their own customers. Switching from RingCentral to VoIP Cat for outbound termination typically cuts international call costs by 60–80%.',
  },
  '8x8': {
    name: '8x8', slug: '8x8',
    tagline: 'VoIP Cat vs 8x8: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',              vc: true,              them: false },
      { label: 'Wholesale A-Z termination',       vc: true,              them: 'UCaaS/CCaaS only' },
      { label: 'White-label reseller program',    vc: true,              them: false },
      { label: 'No per-seat pricing',             vc: true,              them: 'Per-seat model ($28–$140/seat)' },
      { label: 'Free test route, no credit card', vc: true,              them: false },
      { label: 'No contracts / commitments',      vc: 'None',            them: 'Annual plans required' },
      { label: 'Middle East & Africa routes',     vc: 'Premium, direct', them: 'Limited MENA coverage' },
      { label: '24/7 NOC support',                vc: true,              them: 'Premium tiers only' },
      { label: 'CLI guaranteed routes',           vc: true,              them: 'Not applicable (UCaaS)' },
      { label: 'High-volume custom pricing',      vc: true,              them: false },
      { label: 'Carrier-grade SIP trunking',      vc: true,              them: 'SIP trunking add-on, limited' },
      { label: 'Real-time CDR dashboard',         vc: true,              them: 'Basic analytics only' },
    ],
    verdict: '8x8 is a contact-center and UCaaS vendor — its economics are per-seat and its infrastructure is not designed for wholesale voice termination or reseller use. VoIP Cat offers a completely different value proposition: per-second billing, carrier-grade A-Z routes, and a white-label reseller portal that lets you build your own VoIP business. For businesses evaluating 8x8 for call termination costs, VoIP Cat will almost always be dramatically cheaper.',
  },
  signalwire: {
    name: 'SignalWire', slug: 'signalwire',
    tagline: 'VoIP Cat vs SignalWire: Wholesale VoIP and SIP Trunking Comparison (2026)',
    features: [
      { label: 'Per-second billing',              vc: true,              them: 'Per-minute billing' },
      { label: 'Free test route, no credit card', vc: true,              them: 'Credit deposit required' },
      { label: 'White-label reseller program',    vc: true,              them: false },
      { label: 'Dedicated 24/7 NOC support',      vc: true,              them: 'Community + ticket support' },
      { label: 'No minimum deposit',              vc: 'None',            them: 'Prepaid deposit required' },
      { label: 'Middle East & Africa routes',     vc: 'Premium, direct', them: 'Standard, limited MENA' },
      { label: 'CLI guaranteed routes',           vc: true,              them: 'Route dependent' },
      { label: 'Wholesale A-Z termination',       vc: true,              them: 'CPaaS focus, not wholesale' },
      { label: 'No contracts / commitments',      vc: 'None',            them: 'Pay-as-you-go but deposit locked' },
      { label: 'High-volume custom pricing',      vc: true,              them: 'Self-serve rates only' },
      { label: 'Android + WebRTC softphone',      vc: true,              them: false },
      { label: 'Automated billing for clients',   vc: true,              them: false },
    ],
    verdict: 'SignalWire is a developer-focused CPaaS platform — excellent for building real-time communication apps, but not designed as a wholesale VoIP or reseller solution. VoIP Cat provides what SignalWire lacks: a white-label reseller portal, no upfront deposit to test routes, a dedicated 24/7 NOC, and direct carrier agreements in the Middle East and Africa. Resellers and ITSPs choosing between the two will find VoIP Cat\'s commercial model far better suited to their needs.',
  },
};

const val = (v: boolean | string) => {
  if (v === true) return <Check className="w-5 h-5 text-green-400" />;
  if (v === false) return <X className="w-5 h-5 text-red-400/70" />;
  return <span className="text-xs text-muted-foreground">{v}</span>;
};

export default function VsCompetitor() {
  const params = useParams<{ competitor: string }>();
  const comp = COMPETITORS[params.competitor || ''];

  if (!comp) return null;

  useSEO({
    title: `${comp.tagline} | VoIP Cat`,
    description: `Detailed comparison of VoIP Cat vs ${comp.name} for SIP trunking, wholesale VoIP, and reseller programs. See which is cheaper and better for your business in 2026.`,
    keywords: `VoIP Cat vs ${comp.name}, ${comp.name} alternative, best SIP trunk provider, wholesale VoIP comparison`,
    canonical: `https://voipcat.com/vs/${comp.slug}`,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>2026 Comparison</span>
            </div>
            <h1 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP CAT <span className="text-primary">VS</span> {comp.name.toUpperCase()}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              An honest, feature-by-feature comparison for businesses choosing a SIP trunking and wholesale VoIP provider.
            </p>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow h-13 px-8 gap-2 uppercase tracking-widest text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <LogIn className="w-4 h-4" /> Try VoIP Cat Free <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs text-muted-foreground font-bold uppercase tracking-widest w-1/2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Feature</th>
                    <th className="px-6 py-4 text-center text-xs text-primary font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>VoIP Cat</th>
                    <th className="px-6 py-4 text-center text-xs text-muted-foreground font-bold uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{comp.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.features.map((f, i) => (
                    <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-muted/10' : ''}`}>
                      <td className="px-6 py-4 text-foreground font-medium">{f.label}</td>
                      <td className="px-6 py-4 text-center">{val(f.vc)}</td>
                      <td className="px-6 py-4 text-center">{val(f.them)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 p-8 bg-card border border-border rounded-2xl space-y-4">
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                The Verdict
              </h2>
              <p className="text-muted-foreground leading-relaxed">{comp.verdict}</p>
            </div>

            <div className="mt-10 text-center space-y-4">
              <p className="text-muted-foreground">See for yourself — no credit card, credentials in 60 seconds.</p>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow h-14 px-10 gap-2 uppercase tracking-widest text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <LogIn className="w-4 h-4" /> Create Free VoIP Cat Account
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
