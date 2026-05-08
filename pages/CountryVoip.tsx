import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe2, Phone, Check, ArrowRight } from 'lucide-react';
import { useParams, useLocation } from 'wouter';

// Country data map — add more as needed
const countryData: Record<string, {
  name: string; code: string; region: string;
  rate: string; did: boolean; prefix: string;
  description: string;
}> = {
  'united-states': { name: 'United States', code: 'US', region: 'North America', rate: '$0.004/min', did: true, prefix: '+1', description: 'Premium SIP trunking and wholesale VoIP termination for the United States. Local DIDs, toll-free numbers, and 99.99% uptime.' },
  'united-kingdom': { name: 'United Kingdom', code: 'GB', region: 'Europe', rate: '$0.006/min', did: true, prefix: '+44', description: 'VoIP termination for the UK with local geographic and non-geographic DIDs. London, Manchester, Birmingham numbers available.' },
  'germany': { name: 'Germany', code: 'DE', region: 'Europe', rate: '$0.007/min', did: true, prefix: '+49', description: 'German SIP trunk and VoIP termination. Local DIDs for Berlin, Munich, Hamburg and 200+ cities. BNetzA compliant.' },
  'uae': { name: 'United Arab Emirates', code: 'AE', region: 'Middle East', rate: '$0.018/min', did: true, prefix: '+971', description: 'VoIP termination and SIP trunking for UAE. Dubai and Abu Dhabi DIDs. Premium routing with TRA-compliant infrastructure.' },
  'saudi-arabia': { name: 'Saudi Arabia', code: 'SA', region: 'Middle East', rate: '$0.020/min', did: false, prefix: '+966', description: 'Premium wholesale voice termination to Saudi Arabia. High ASR routes with real-time monitoring and failover.' },
  'india': { name: 'India', code: 'IN', region: 'Asia Pacific', rate: '$0.009/min', did: true, prefix: '+91', description: 'SIP trunking and VoIP termination for India. Coverage across all telecom circles with TRAI-compliant infrastructure.' },
  'egypt': { name: 'Egypt', code: 'EG', region: 'Africa', rate: '$0.012/min', did: true, prefix: '+20', description: 'VoIP termination and SIP trunk for Egypt. Cairo and Alexandria DIDs. NTRA-compliant routing.' },
  'brazil': { name: 'Brazil', code: 'BR', region: 'Latin America', rate: '$0.015/min', did: true, prefix: '+55', description: 'Wholesale VoIP termination and SIP trunking for Brazil. Coverage across all ANATEL regions.' },
};

export default function CountryVoip() {
  const params = useParams<{ country: string }>();
  const [, setLocation] = useLocation();
  const country = countryData[params.country || ''];

  if (!country) {
    setLocation('/coverage');
    return null;
  }

  useSEO({
    title: `VoIP Termination ${country.name} — SIP Trunk & DID Numbers | VoIP Cat`,
    description: country.description,
    keywords: `VoIP ${country.name}, SIP trunk ${country.name}, ${country.name} VoIP provider, ${country.name} DID numbers, ${country.prefix} termination`,
    canonical: `https://voipcat.com/voip/${params.country}`,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="container max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Globe2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{country.region}</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP TERMINATION <span className="text-primary">{country.name.toUpperCase()}</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">{country.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/201557649136?text=Hi%2C%20I%20need%20VoIP%20termination%20for%20${encodeURIComponent(country.name)}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get {country.name} Rates <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{country.rate}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Est. Rate</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{country.prefix}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Country Code</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{country.did ? '✓' : '—'}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>DID Numbers</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['HD Voice Quality', 'CLI Guaranteed', '99.99% SLA', 'Free Test Route',
                'Real-Time CDR', 'Anti-Fraud',   'SIP Encryption', '24/7 NOC'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
