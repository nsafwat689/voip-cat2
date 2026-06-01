import { TrendingUp, ArrowRight, Building2, Globe2, PhoneCall } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Case Studies Section — Task 4
 * Replaces generic testimonials with 3 telecom case studies.
 * Each: client type, problem, solution, measurable result.
 */
export default function CaseStudiesSection() {
  const [, setLocation] = useLocation();

  const cases = [
    {
      icon: Globe2,
      tag: 'Wholesale Carrier',
      client: 'Tier-2 European Carrier',
      problem: 'High per-minute costs on LATAM routes driving down margins. Legacy provider with poor ASR and no real-time reporting.',
      solution: 'Migrated A-Z termination to VoIP Cat premium routing with direct interconnects to Tier-1 carriers across 14 LATAM markets.',
      result: 'Reduced routing costs by 31% while increasing ASR by 12% within the first 30 days of cutover.',
      stat: '31%',
      statLabel: 'Cost Reduction',
      accent: 'border-blue-500/40 bg-blue-500/5',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: PhoneCall,
      tag: 'SIP Trunk',
      client: 'Regional BPO / Call Center',
      problem: '400-seat contact center experiencing 8–12% call drop rate due to poor SIP trunk quality. Losing clients over audio issues.',
      solution: 'Deployed redundant SIP trunks with automatic failover across dual POPs. Implemented HD voice codecs and QoS prioritization.',
      result: 'Drop rate fell from 11% to under 0.3%. MOS score improved from 3.2 to 4.5. Zero downtime in 18 months of operation.',
      stat: '97%',
      statLabel: 'Drop Rate Reduction',
      accent: 'border-emerald-500/40 bg-emerald-500/5',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Building2,
      tag: 'Cloud PBX',
      client: 'Multi-site Enterprise (Healthcare)',
      problem: '12 locations running on aging on-prem PBX infrastructure. High maintenance costs, no remote work support, no call analytics.',
      solution: 'Full migration to VoIP Cat Cloud PBX with DID numbers for each site, unified dial plan, and real-time analytics dashboard.',
      result: 'Eliminated $180K/year in hardware maintenance. Enabled remote work for 600+ staff. Provisioning time from 2 weeks to 4 hours.',
      stat: '$180K',
      statLabel: 'Annual Savings',
      accent: 'border-violet-500/40 bg-violet-500/5',
      tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            CLIENT <span className="text-primary">CASE STUDIES</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real deployments. Measurable outcomes. Here's what enterprise clients achieved after switching to VoIP Cat infrastructure.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className={`relative rounded-2xl border ${c.accent} p-8 flex flex-col group hover:scale-[1.02] transition-transform duration-300`}>
                {/* Tag + icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${c.tagColor}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {c.tag}
                  </span>
                  <Icon className="w-6 h-6 text-slate-600" />
                </div>

                {/* Client */}
                <h3 className="text-white font-bold text-base mb-5 uppercase tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {c.client}
                </h3>

                {/* Problem → Solution → Result */}
                <div className="space-y-4 flex-grow text-sm leading-relaxed">
                  <div>
                    <div className="text-slate-500 uppercase text-[10px] tracking-widest mb-1 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Challenge</div>
                    <p className="text-slate-300">{c.problem}</p>
                  </div>
                  <div>
                    <div className="text-slate-500 uppercase text-[10px] tracking-widest mb-1 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Solution</div>
                    <p className="text-slate-300">{c.solution}</p>
                  </div>
                </div>

                {/* Result highlight */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{c.stat}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5" style={{ fontFamily: 'Orbitron, sans-serif' }}>{c.statLabel}</div>
                  </div>
                  <div className="text-slate-400 text-xs max-w-[55%] text-right leading-snug italic">
                    "{c.result}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => setLocation('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary/10 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Discuss Your Use Case <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
