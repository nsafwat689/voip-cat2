import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PORTAL_URL } from '@/lib/portal';
import { Globe2, Phone, Check, ArrowRight, BookOpen, Calculator, Zap } from 'lucide-react';
import { useParams, useLocation } from 'wouter';
import { countryServiceSchema, breadcrumbSchema, injectStructuredData } from '@/utils/structuredData';

// Country data map — 50 key VoIP destinations for SEO
const countryData: Record<string, {
  name: string; code: string; region: string;
  rate: string; did: boolean; prefix: string;
  description: string;
}> = {
  'united-states':    { name: 'United States',         code: 'US', region: 'North America', rate: '$0.004/min', did: true,  prefix: '+1',    description: 'Premium SIP trunking and wholesale VoIP termination for the United States. Local DIDs, toll-free numbers, and 99.99% uptime SLA.' },
  'united-kingdom':   { name: 'United Kingdom',         code: 'GB', region: 'Europe',        rate: '$0.006/min', did: true,  prefix: '+44',   description: 'VoIP termination for the UK with local geographic and non-geographic DIDs. London, Manchester, Birmingham numbers available.' },
  'germany':          { name: 'Germany',                code: 'DE', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+49',   description: 'German SIP trunk and VoIP termination. Local DIDs for Berlin, Munich, Hamburg and 200+ cities. BNetzA compliant.' },
  'uae':              { name: 'United Arab Emirates',   code: 'AE', region: 'Middle East',   rate: '$0.018/min', did: true,  prefix: '+971',  description: 'VoIP termination and SIP trunking for UAE. Dubai and Abu Dhabi DIDs. Premium routing with TRA-compliant infrastructure.' },
  'saudi-arabia':     { name: 'Saudi Arabia',           code: 'SA', region: 'Middle East',   rate: '$0.020/min', did: false, prefix: '+966',  description: 'Premium wholesale voice termination to Saudi Arabia. High ASR routes with real-time monitoring and automatic failover.' },
  'india':            { name: 'India',                  code: 'IN', region: 'Asia Pacific',  rate: '$0.009/min', did: true,  prefix: '+91',   description: 'SIP trunking and VoIP termination for India. Coverage across all telecom circles with TRAI-compliant infrastructure.' },
  'egypt':            { name: 'Egypt',                  code: 'EG', region: 'Africa',        rate: '$0.012/min', did: true,  prefix: '+20',   description: 'VoIP termination and SIP trunk for Egypt. Cairo and Alexandria DIDs. NTRA-compliant routing.' },
  'brazil':           { name: 'Brazil',                 code: 'BR', region: 'Latin America', rate: '$0.015/min', did: true,  prefix: '+55',   description: 'Wholesale VoIP termination and SIP trunking for Brazil. Coverage across all ANATEL regions with premium routes.' },
  'canada':           { name: 'Canada',                 code: 'CA', region: 'North America', rate: '$0.004/min', did: true,  prefix: '+1',    description: 'SIP trunking and VoIP termination for Canada. Local DIDs for Toronto, Vancouver, Montreal and all major cities.' },
  'australia':        { name: 'Australia',              code: 'AU', region: 'Asia Pacific',  rate: '$0.010/min', did: true,  prefix: '+61',   description: 'VoIP termination for Australia. Sydney, Melbourne, Brisbane DIDs. ACMA-compliant carrier-grade routing.' },
  'france':           { name: 'France',                 code: 'FR', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+33',   description: 'VoIP termination and SIP trunking for France. Paris and regional DIDs. ARCEP-compliant infrastructure.' },
  'netherlands':      { name: 'Netherlands',            code: 'NL', region: 'Europe',        rate: '$0.006/min', did: true,  prefix: '+31',   description: 'Premium SIP trunking for the Netherlands. Amsterdam and national DIDs. ACM-compliant with HD voice quality.' },
  'spain':            { name: 'Spain',                  code: 'ES', region: 'Europe',        rate: '$0.008/min', did: true,  prefix: '+34',   description: 'VoIP termination for Spain. Madrid, Barcelona, Valencia DIDs. CNMC-compliant carrier routing.' },
  'italy':            { name: 'Italy',                  code: 'IT', region: 'Europe',        rate: '$0.008/min', did: true,  prefix: '+39',   description: 'SIP trunking and VoIP termination for Italy. Rome and Milan DIDs. AGCOM-compliant with premium routes.' },
  'russia':           { name: 'Russia',                 code: 'RU', region: 'Europe',        rate: '$0.012/min', did: true,  prefix: '+7',    description: 'Wholesale VoIP termination to Russia. Moscow and St. Petersburg DIDs. High ASR routes with CLI delivery.' },
  'turkey':           { name: 'Turkey',                 code: 'TR', region: 'Europe',        rate: '$0.036/min', did: true,  prefix: '+90',   description: 'VoIP termination for Turkey. Istanbul and Ankara DIDs. BTK-compliant routing with premium CLI routes.' },
  'poland':           { name: 'Poland',                 code: 'PL', region: 'Europe',        rate: '$0.006/min', did: true,  prefix: '+48',   description: 'SIP trunking and VoIP termination for Poland. Warsaw, Kraków, Wrocław DIDs. UKE-compliant carrier routing.' },
  'portugal':         { name: 'Portugal',               code: 'PT', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+351',  description: 'VoIP termination for Portugal. Lisbon and Porto DIDs. ANACOM-compliant with premium routes.' },
  'sweden':           { name: 'Sweden',                 code: 'SE', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+46',   description: 'SIP trunking for Sweden. Stockholm, Gothenburg, Malmö DIDs. PTS-compliant carrier-grade routing.' },
  'norway':           { name: 'Norway',                 code: 'NO', region: 'Europe',        rate: '$0.008/min', did: true,  prefix: '+47',   description: 'VoIP termination for Norway. Oslo and national DIDs. Nkom-compliant with HD voice quality.' },
  'denmark':          { name: 'Denmark',                code: 'DK', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+45',   description: 'SIP trunking for Denmark. Copenhagen and national DIDs. ERST-compliant carrier routing.' },
  'switzerland':      { name: 'Switzerland',            code: 'CH', region: 'Europe',        rate: '$0.009/min', did: true,  prefix: '+41',   description: 'VoIP termination for Switzerland. Zurich, Geneva, Bern DIDs. BAKOM-compliant premium routing.' },
  'austria':          { name: 'Austria',                code: 'AT', region: 'Europe',        rate: '$0.008/min', did: true,  prefix: '+43',   description: 'SIP trunking for Austria. Vienna and national DIDs. RTR-compliant carrier infrastructure.' },
  'belgium':          { name: 'Belgium',                code: 'BE', region: 'Europe',        rate: '$0.007/min', did: true,  prefix: '+32',   description: 'VoIP termination for Belgium. Brussels, Antwerp, Ghent DIDs. BIPT-compliant routing.' },
  'qatar':            { name: 'Qatar',                  code: 'QA', region: 'Middle East',   rate: '$0.036/min', did: false, prefix: '+974',  description: 'Premium wholesale voice termination to Qatar. Doha routes with high ASR and real-time CDR monitoring.' },
  'kuwait':           { name: 'Kuwait',                 code: 'KW', region: 'Middle East',   rate: '$0.032/min', did: false, prefix: '+965',  description: 'VoIP termination to Kuwait. High-quality routes with CLI support and automatic failover.' },
  'bahrain':          { name: 'Bahrain',                code: 'BH', region: 'Middle East',   rate: '$0.030/min', did: false, prefix: '+973',  description: 'Wholesale VoIP termination to Bahrain. Manama routes with premium CLI delivery and real-time monitoring.' },
  'oman':             { name: 'Oman',                   code: 'OM', region: 'Middle East',   rate: '$0.030/min', did: false, prefix: '+968',  description: 'VoIP termination to Oman. Muscat routes with high ASR, CLI support and carrier-grade infrastructure.' },
  'jordan':           { name: 'Jordan',                 code: 'JO', region: 'Middle East',   rate: '$0.025/min', did: false, prefix: '+962',  description: 'Wholesale voice termination to Jordan. Amman routes with premium and standard CLI options.' },
  'iraq':             { name: 'Iraq',                   code: 'IQ', region: 'Middle East',   rate: '$0.040/min', did: false, prefix: '+964',  description: 'VoIP termination to Iraq. Baghdad and Erbil routes. High ASR with real-time failover.' },
  'yemen':            { name: 'Yemen',                  code: 'YE', region: 'Middle East',   rate: '$0.035/min', did: false, prefix: '+967',  description: 'Wholesale voice termination to Yemen. Best-effort premium routes with CLI delivery.' },
  'syria':            { name: 'Syria',                  code: 'SY', region: 'Middle East',   rate: '$0.038/min', did: false, prefix: '+963',  description: 'VoIP termination to Syria. Damascus routes with CLI support and real-time CDR.' },
  'lebanon':          { name: 'Lebanon',                code: 'LB', region: 'Middle East',   rate: '$0.025/min', did: false, prefix: '+961',  description: 'Wholesale VoIP termination to Lebanon. Beirut routes with premium CLI delivery.' },
  'pakistan':         { name: 'Pakistan',               code: 'PK', region: 'Asia Pacific',  rate: '$0.014/min', did: false, prefix: '+92',   description: 'VoIP termination for Pakistan. Karachi, Lahore, Islamabad routes with high ASR and CLI support.' },
  'bangladesh':       { name: 'Bangladesh',             code: 'BD', region: 'Asia Pacific',  rate: '$0.016/min', did: false, prefix: '+880',  description: 'Wholesale VoIP termination to Bangladesh. Dhaka routes with competitive rates and CLI delivery.' },
  'indonesia':        { name: 'Indonesia',              code: 'ID', region: 'Asia Pacific',  rate: '$0.012/min', did: false, prefix: '+62',   description: 'VoIP termination for Indonesia. Jakarta and national routes with CLI support and failover.' },
  'philippines':      { name: 'Philippines',            code: 'PH', region: 'Asia Pacific',  rate: '$0.013/min', did: false, prefix: '+63',   description: 'Wholesale VoIP termination for the Philippines. Manila and national routes with CLI delivery.' },
  'thailand':         { name: 'Thailand',               code: 'TH', region: 'Asia Pacific',  rate: '$0.007/min', did: true,  prefix: '+66',   description: 'SIP trunking and VoIP termination for Thailand. Bangkok and national DIDs with premium routing.' },
  'singapore':        { name: 'Singapore',              code: 'SG', region: 'Asia Pacific',  rate: '$0.011/min', did: true,  prefix: '+65',   description: 'Premium SIP trunking for Singapore. Local DIDs with IDA-compliant carrier-grade routing and HD voice.' },
  'malaysia':         { name: 'Malaysia',               code: 'MY', region: 'Asia Pacific',  rate: '$0.010/min', did: true,  prefix: '+60',   description: 'VoIP termination for Malaysia. Kuala Lumpur and national DIDs with MCMC-compliant routing.' },
  'nigeria':          { name: 'Nigeria',                code: 'NG', region: 'Africa',        rate: '$0.025/min', did: false, prefix: '+234',  description: 'Wholesale VoIP termination to Nigeria. Lagos and Abuja routes with competitive rates and CLI support.' },
  'south-africa':     { name: 'South Africa',           code: 'ZA', region: 'Africa',        rate: '$0.014/min', did: true,  prefix: '+27',   description: 'VoIP termination for South Africa. Johannesburg, Cape Town, Durban DIDs with ICASA-compliant routing.' },
  'kenya':            { name: 'Kenya',                  code: 'KE', region: 'Africa',        rate: '$0.018/min', did: false, prefix: '+254',  description: 'Wholesale VoIP termination to Kenya. Nairobi routes with CLI delivery and real-time monitoring.' },
  'ghana':            { name: 'Ghana',                  code: 'GH', region: 'Africa',        rate: '$0.022/min', did: false, prefix: '+233',  description: 'VoIP termination to Ghana. Accra routes with competitive wholesale rates and CLI support.' },
  'mexico':           { name: 'Mexico',                 code: 'MX', region: 'Latin America', rate: '$0.012/min', did: true,  prefix: '+52',   description: 'SIP trunking and VoIP termination for Mexico. Mexico City, Guadalajara, Monterrey DIDs with IFT-compliant routing.' },
  'argentina':        { name: 'Argentina',              code: 'AR', region: 'Latin America', rate: '$0.014/min', did: false, prefix: '+54',   description: 'Wholesale VoIP termination to Argentina. Buenos Aires routes with CLI delivery and competitive rates.' },
  'colombia':         { name: 'Colombia',               code: 'CO', region: 'Latin America', rate: '$0.013/min', did: false, prefix: '+57',   description: 'VoIP termination for Colombia. Bogotá, Medellín routes with CLI support and real-time CDR.' },
  'chile':            { name: 'Chile',                  code: 'CL', region: 'Latin America', rate: '$0.015/min', did: false, prefix: '+56',   description: 'Wholesale voice termination to Chile. Santiago routes with premium CLI delivery and failover.' },
  'china':            { name: 'China',                  code: 'CN', region: 'Asia Pacific',  rate: '$0.008/min', did: false, prefix: '+86',   description: 'VoIP termination to China. Beijing, Shanghai, Guangzhou routes with high ASR and CLI support.' },
  'japan':            { name: 'Japan',                  code: 'JP', region: 'Asia Pacific',  rate: '$0.012/min', did: true,  prefix: '+81',   description: 'SIP trunking for Japan. Tokyo, Osaka, Nagoya DIDs with MIC-compliant carrier-grade infrastructure.' },
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

  injectStructuredData(countryServiceSchema({
    name: country.name, description: country.description,
    rate: country.rate, prefix: country.prefix, slug: params.country || '',
  }));
  injectStructuredData(breadcrumbSchema([
    { name: 'Home',     url: 'https://voipcat.com' },
    { name: 'Coverage', url: 'https://voipcat.com/coverage' },
    { name: `VoIP ${country.name}`, url: `https://voipcat.com/voip/${params.country}` },
  ]));

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

            <p className="text-xs text-muted-foreground text-center mb-12">
              Rate shown is indicative and account-specific. Your live pricing updates in real time inside the portal — <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">log in for live rates</a>.
            </p>

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

        {/* Related Services */}
        <section className="py-16 bg-black border-t border-primary/10">
          <div className="container">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Related <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Phone,      label: 'SIP Trunk',       desc: 'Connect your PBX to ' + country.name,         href: '/sip-trunk' },
                { icon: Globe2,     label: 'Wholesale VoIP',  desc: 'High-volume termination to ' + country.name,  href: '/wholesale-voip' },
                { icon: Calculator, label: 'Cost Calculator', desc: 'Compare your current rates vs VoIP Cat',       href: '/calculator' },
                { icon: Zap,        label: 'Free Test Route', desc: 'Test our quality to ' + country.name + ' now', href: '/free-test' },
              ].map(({ icon: Icon, label, desc, href }) => (
                <button
                  key={href}
                  onClick={() => setLocation(href)}
                  className="flex items-start gap-3 p-5 bg-card border border-border hover:border-primary/50 rounded-xl text-left group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Related Reading */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Related Guides
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'How to Set Up SIP Trunk on 3CX', href: '/articles/sip-trunk-setup-3cx' },
                { label: 'How to Set Up SIP Trunk on FreePBX', href: '/articles/sip-trunk-setup-freepbx' },
                { label: 'Wholesale VoIP Guide', href: '/articles/wholesale-voip-guide' },
                { label: 'A-Z Termination Explained', href: '/articles/a-z-termination-guide' },
                { label: 'VoIP Fraud Prevention', href: '/articles/voip-fraud-prevention' },
                { label: 'SIP Trunk vs PRI', href: '/articles/sip-trunk-vs-pri' },
              ].map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => setLocation(href)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary text-sm text-muted-foreground transition-all"
                >
                  <ArrowRight className="w-3 h-3" />{label}
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
