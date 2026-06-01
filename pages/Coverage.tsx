import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { PORTAL_URL } from '@/lib/portal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe2, Search, Phone, Star } from 'lucide-react';

const countries = [
  // North America
  { name: 'United States',         code: 'US', region: 'North America', did: true,  premium: true,  rate: '$0.004/min', slug: 'united-states' },
  { name: 'Canada',                code: 'CA', region: 'North America', did: true,  premium: true,  rate: '$0.004/min', slug: 'canada' },
  // Europe
  { name: 'United Kingdom',        code: 'GB', region: 'Europe',        did: true,  premium: true,  rate: '$0.006/min', slug: 'united-kingdom' },
  { name: 'Germany',               code: 'DE', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'germany' },
  { name: 'France',                code: 'FR', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'france' },
  { name: 'Netherlands',           code: 'NL', region: 'Europe',        did: true,  premium: true,  rate: '$0.006/min', slug: 'netherlands' },
  { name: 'Spain',                 code: 'ES', region: 'Europe',        did: true,  premium: true,  rate: '$0.008/min', slug: 'spain' },
  { name: 'Italy',                 code: 'IT', region: 'Europe',        did: true,  premium: true,  rate: '$0.008/min', slug: 'italy' },
  { name: 'Portugal',              code: 'PT', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'portugal' },
  { name: 'Belgium',               code: 'BE', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'belgium' },
  { name: 'Switzerland',           code: 'CH', region: 'Europe',        did: true,  premium: true,  rate: '$0.009/min', slug: 'switzerland' },
  { name: 'Austria',               code: 'AT', region: 'Europe',        did: true,  premium: true,  rate: '$0.008/min', slug: 'austria' },
  { name: 'Sweden',                code: 'SE', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'sweden' },
  { name: 'Norway',                code: 'NO', region: 'Europe',        did: true,  premium: true,  rate: '$0.008/min', slug: 'norway' },
  { name: 'Denmark',               code: 'DK', region: 'Europe',        did: true,  premium: true,  rate: '$0.007/min', slug: 'denmark' },
  { name: 'Poland',                code: 'PL', region: 'Europe',        did: true,  premium: true,  rate: '$0.006/min', slug: 'poland' },
  { name: 'Russia',                code: 'RU', region: 'Europe',        did: true,  premium: true,  rate: '$0.012/min', slug: 'russia' },
  { name: 'Turkey',                code: 'TR', region: 'Europe',        did: true,  premium: true,  rate: '$0.036/min', slug: 'turkey' },
  // Middle East
  { name: 'United Arab Emirates',  code: 'AE', region: 'Middle East',   did: true,  premium: true,  rate: '$0.018/min', slug: 'uae' },
  { name: 'Saudi Arabia',          code: 'SA', region: 'Middle East',   did: false, premium: true,  rate: '$0.020/min', slug: 'saudi-arabia' },
  { name: 'Qatar',                 code: 'QA', region: 'Middle East',   did: false, premium: true,  rate: '$0.036/min', slug: 'qatar' },
  { name: 'Kuwait',                code: 'KW', region: 'Middle East',   did: false, premium: true,  rate: '$0.032/min', slug: 'kuwait' },
  { name: 'Bahrain',               code: 'BH', region: 'Middle East',   did: false, premium: true,  rate: '$0.030/min', slug: 'bahrain' },
  { name: 'Oman',                  code: 'OM', region: 'Middle East',   did: false, premium: true,  rate: '$0.030/min', slug: 'oman' },
  { name: 'Jordan',                code: 'JO', region: 'Middle East',   did: false, premium: false, rate: '$0.025/min', slug: 'jordan' },
  { name: 'Iraq',                  code: 'IQ', region: 'Middle East',   did: false, premium: false, rate: '$0.040/min', slug: 'iraq' },
  { name: 'Yemen',                 code: 'YE', region: 'Middle East',   did: false, premium: false, rate: '$0.035/min', slug: 'yemen' },
  { name: 'Syria',                 code: 'SY', region: 'Middle East',   did: false, premium: false, rate: '$0.038/min', slug: 'syria' },
  { name: 'Lebanon',               code: 'LB', region: 'Middle East',   did: false, premium: false, rate: '$0.025/min', slug: 'lebanon' },
  // Asia Pacific
  { name: 'India',                 code: 'IN', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.009/min', slug: 'india' },
  { name: 'Australia',             code: 'AU', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.010/min', slug: 'australia' },
  { name: 'Singapore',             code: 'SG', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.011/min', slug: 'singapore' },
  { name: 'Japan',                 code: 'JP', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.012/min', slug: 'japan' },
  { name: 'Malaysia',              code: 'MY', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.010/min', slug: 'malaysia' },
  { name: 'Thailand',              code: 'TH', region: 'Asia Pacific',  did: true,  premium: true,  rate: '$0.007/min', slug: 'thailand' },
  { name: 'China',                 code: 'CN', region: 'Asia Pacific',  did: false, premium: true,  rate: '$0.008/min', slug: 'china' },
  { name: 'Indonesia',             code: 'ID', region: 'Asia Pacific',  did: false, premium: false, rate: '$0.012/min', slug: 'indonesia' },
  { name: 'Philippines',           code: 'PH', region: 'Asia Pacific',  did: false, premium: false, rate: '$0.013/min', slug: 'philippines' },
  { name: 'Pakistan',              code: 'PK', region: 'Asia Pacific',  did: false, premium: false, rate: '$0.014/min', slug: 'pakistan' },
  { name: 'Bangladesh',            code: 'BD', region: 'Asia Pacific',  did: false, premium: false, rate: '$0.016/min', slug: 'bangladesh' },
  // Africa
  { name: 'Egypt',                 code: 'EG', region: 'Africa',        did: true,  premium: true,  rate: '$0.012/min', slug: 'egypt' },
  { name: 'South Africa',          code: 'ZA', region: 'Africa',        did: true,  premium: true,  rate: '$0.014/min', slug: 'south-africa' },
  { name: 'Nigeria',               code: 'NG', region: 'Africa',        did: false, premium: false, rate: '$0.025/min', slug: 'nigeria' },
  { name: 'Kenya',                 code: 'KE', region: 'Africa',        did: false, premium: false, rate: '$0.018/min', slug: 'kenya' },
  { name: 'Ghana',                 code: 'GH', region: 'Africa',        did: false, premium: false, rate: '$0.022/min', slug: 'ghana' },
  // Latin America
  { name: 'Brazil',                code: 'BR', region: 'Latin America', did: true,  premium: true,  rate: '$0.015/min', slug: 'brazil' },
  { name: 'Mexico',                code: 'MX', region: 'Latin America', did: true,  premium: false, rate: '$0.012/min', slug: 'mexico' },
  { name: 'Argentina',             code: 'AR', region: 'Latin America', did: false, premium: false, rate: '$0.014/min', slug: 'argentina' },
  { name: 'Colombia',              code: 'CO', region: 'Latin America', did: false, premium: false, rate: '$0.013/min', slug: 'colombia' },
  { name: 'Chile',                 code: 'CL', region: 'Latin America', did: false, premium: false, rate: '$0.015/min', slug: 'chile' },
];

const regions = ['All', 'North America', 'Europe', 'Middle East', 'Asia Pacific', 'Africa', 'Latin America'];

export default function Coverage() {
  useSEO({
    title: 'Coverage — 190+ Countries | VoIP Cat',
    description: 'VoIP Cat covers 190+ countries with DID numbers, premium voice routes, and wholesale termination. Search destinations and rates.',
    keywords: 'VoIP coverage, DID numbers, international voice routes, wholesale termination countries',
    canonical: 'https://voipcat.com/coverage',
  });

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');

  const filtered = countries.filter((c) =>
    (region === 'All' || c.region === region) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="container text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Globe2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Global Coverage</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              190+ <span className="text-primary">COUNTRIES</span> COVERED
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">
              Premium A-Z termination, local DID numbers, and carrier-grade routes worldwide.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-black py-10 border-b border-primary/10">
          <div className="container grid grid-cols-3 gap-8 text-center">
            {[{ v: '190+', l: 'Countries' }, { v: '5,000+', l: 'DID Regions' }, { v: 'Premium', l: 'Route Quality' }].map(({ v, l }) => (
              <div key={l}>
                <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{v}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Search & filter */}
        <section className="py-16 bg-background">
          <div className="container space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-bold transition-colors border ${
                      region === r ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    {['Country', 'Region', 'DID Available', 'Premium Route', 'Est. Rate'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs uppercase tracking-widest text-muted-foreground font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => window.location.href = `/voip/${c.slug}`}>
                      <td className="px-6 py-4 font-medium">
                        <span className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="hover:text-primary transition-colors">{c.name}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{c.region}</td>
                      <td className="px-6 py-4">{c.did ? <span className="text-green-400 text-xs font-bold">✓ Yes</span> : <span className="text-slate-500 text-xs">—</span>}</td>
                      <td className="px-6 py-4">{c.premium ? <span className="flex items-center gap-1 text-primary text-xs font-bold"><Star className="w-3 h-3" />Premium</span> : <span className="text-slate-500 text-xs">Standard</span>}</td>
                      <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{c.rate}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">No countries match your search.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center">Showing {filtered.length} of {countries.length} featured destinations (190+ total). Est. rates are indicative — live, account-specific pricing is in your <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">portal</a>. <a href="/contact" className="text-primary underline">Contact us</a> for unlisted routes.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
