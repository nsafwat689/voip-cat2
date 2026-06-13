import { Server, Shield, Activity, MapPin, RefreshCw, Lock, AlertTriangle, Wifi, CheckCircle, HeadphonesIcon, BarChart2 } from 'lucide-react';

/**
 * Enterprise Trust Section — Task 2
 * Dark premium infrastructure style. Three pillars: Infrastructure, Security, Reliability.
 */
export default function EnterpriseTrustSection() {
  const pillars = [
    {
      id: 'infrastructure',
      icon: Server,
      title: 'Infrastructure',
      subtitle: 'Carrier-Grade Network',
      color: 'from-blue-500/20 to-blue-900/5',
      border: 'border-blue-500/30',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      features: [
        { icon: MapPin,    label: 'Global POP Locations',       desc: 'Points of presence on 6 continents for low-latency routing' },
        { icon: RefreshCw, label: 'Automatic Failover',         desc: 'Sub-second route switching — zero manual intervention' },
        { icon: Wifi,      label: 'Routing Redundancy',         desc: 'N+1 redundant architecture across all transit paths' },
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      subtitle: 'Enterprise Protection',
      color: 'from-emerald-500/20 to-emerald-900/5',
      border: 'border-emerald-500/30',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      features: [
        { icon: Lock,         label: 'SIP TLS Encryption',      desc: 'Transport-layer encryption for all signalling & media' },
        { icon: AlertTriangle,label: 'Anti-Fraud Engine',       desc: 'Real-time pattern detection blocks IRSF & toll fraud' },
        { icon: Shield,       label: 'DDoS Protection',         desc: 'Always-on volumetric attack mitigation at the edge' },
      ],
    },
    {
      id: 'reliability',
      icon: Activity,
      title: 'Reliability',
      subtitle: '99.99% Uptime SLA',
      color: 'from-violet-500/20 to-violet-900/5',
      border: 'border-violet-500/30',
      iconBg: 'bg-violet-500/10',
      iconColor: 'text-violet-400',
      features: [
        { icon: CheckCircle,      label: 'Uptime SLA Guarantee',  desc: 'Contractual 99.99% availability with financial backing' },
        { icon: BarChart2,        label: '24/7 Monitoring',        desc: 'Continuous network observability with instant alerting' },
        { icon: HeadphonesIcon,   label: 'NOC Support',            desc: 'Dedicated Network Operations Center engineers around the clock' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[200px] -z-10" />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Enterprise-Grade Foundation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            BUILT FOR <span className="text-primary">CARRIERS</span> &amp; ENTERPRISES
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every layer of our stack is engineered for the demands of production telecom workloads — not retrofitted, built from the ground up.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`relative rounded-2xl border ${pillar.border} bg-gradient-to-b ${pillar.color} p-8 group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Pillar header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 ${pillar.iconBg} rounded-xl border ${pillar.border} flex items-center justify-center`}>
                    <PillarIcon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg uppercase tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {pillar.title}
                    </div>
                    <div className={`text-xs uppercase tracking-widest mt-0.5 ${pillar.iconColor}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {pillar.features.map(({ icon: FeatIcon, label, desc }, j) => (
                    <div key={j} className="flex gap-4">
                      <div className={`w-9 h-9 ${pillar.iconBg} rounded-lg border ${pillar.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <FeatIcon className={`w-4 h-4 ${pillar.iconColor}`} />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">{label}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <PillarIcon className="w-24 h-24 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Ready to stress-test our infrastructure?
            </div>
            <div className="text-slate-400 text-sm">Request a free test route — provisioned in under 60 minutes.</div>
          </div>
          <a
            href="https://wa.me/201038450546?text=Hi%2C%20I%20want%20to%20test%20VoIP%20Cat%20infrastructure."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Request Test Route
          </a>
        </div>
      </div>
    </section>
  );
}
