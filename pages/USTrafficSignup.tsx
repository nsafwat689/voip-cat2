import { useState, useRef, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useSEO } from '@/hooks/useSEO';
import {
  ArrowRight, ArrowLeft, Check, Building2, Server, Gauge,
  ShieldCheck, Loader2, AlertCircle, MessageCircle,
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/201038450546?text=' +
  encodeURIComponent('Hi, I am registering US auto-dialer traffic with VoIP Cat.');

const STEPS = [
  { id: 0, label: 'Company & Compliance', icon: Building2 },
  { id: 1, label: 'Technical Profile',    icon: Server },
  { id: 2, label: 'Traffic Profile',      icon: Gauge },
];

const SWITCHES = ['FreeSWITCH', 'Asterisk', 'Kamailio', 'OpenSIPS', 'Sansay', 'Ribbon / Sonus', 'Cisco', 'Class-4 (other)', 'Other'];
const DIALERS  = ['ViciDial', 'Predictive dialer (other)', 'Progressive / power dialer', 'Preview dialer', 'Manual agents', 'Conversational AI', 'Other'];
const CODECS   = ['G.711 µ-law', 'G.711 A-law', 'G.729', 'Opus'];
const DESTS    = ['US 48 states', 'Alaska / Hawaii', 'US toll-free', 'Canada', 'Puerto Rico'];
const ENTITIES = ['LLC', 'Corporation (Inc.)', 'Partnership', 'Sole proprietor', 'Foreign entity'];

type Data = Record<string, string | string[] | boolean>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function USTrafficSignup() {
  useSEO({
    title: 'US Auto-Dialer Traffic Registration | Wholesale SIP — VOIP CAT',
    description: 'Register high-volume US auto-dialer traffic with VoIP Cat. Direct Tier-1 US termination, CLI passthrough, high CPS. Submit your compliance and technical profile and our carrier team will contact you.',
    keywords: 'us auto dialer termination, wholesale us voip, high cps sip trunk, call center termination usa, fcc 499 voip carrier, robocall mitigation sip provider',
    canonical: 'https://voipcat.com/us-traffic-signup',
  });

  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({ codecs: [], destinations: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const openedAt = useRef(Date.now());

  const set = (k: string, v: string | string[] | boolean) => {
    setData(d => ({ ...d, [k]: v }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  // Functional update, not a read of `data` — two chip clicks inside one React
  // batch would both see the same stale array and the first selection would be lost.
  const toggle = (k: string, v: string) => {
    setData(d => {
      const cur = (d[k] as string[]) || [];
      return { ...d, [k]: cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v] };
    });
  };

  const required: Record<number, string[]> = useMemo(() => ({
    0: ['legalName', 'country', 'address', 'contactName', 'email', 'phone'],
    1: ['signallingIps', 'switchPlatform'],
    2: ['concurrentCalls', 'cps', 'acd', 'monthlyMinutes', 'consent'],
  }), []);

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    for (const f of required[s]) {
      const v = data[f];
      if (f === 'consent') { if (v !== true) e[f] = 'Required to proceed'; continue; }
      if (!v || (typeof v === 'string' && !v.trim())) e[f] = 'Required';
    }
    if (s === 0 && data.email && !EMAIL_RE.test(String(data.email))) e.email = 'Enter a valid business email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(step)) setStep(s => Math.min(s + 1, 2)); };
  const back = () => setStep(s => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validate(2)) return;
    setState('sending');
    try {
      const res = await fetch('/api/wholesale-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _elapsedMs: Date.now() - openedAt.current,
          _page: window.location.href,
          _referrer: document.referrer || '',
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `HTTP ${res.status}`);
      setState('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Submission failed');
      setState('error');
    }
  };

  if (state === 'done') return <ThankYou />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">

        <section className="relative overflow-hidden bg-secondary dark:bg-black py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10" />
          <div className="container text-center space-y-6">
            <img src="/images/logo-fox.jpg" alt="VoIP Cat"
                 className="w-20 h-20 mx-auto rounded-2xl object-cover ring-2 ring-primary/40 shadow-[0_0_40px_rgba(0,163,255,0.35)]" />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                US Auto-Dialer Traffic — Carrier Registration
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl text-white uppercase tracking-tighter leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              REGISTER YOUR <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]">US TRAFFIC</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              High-volume US termination for auto-dialers and contact centres — direct Tier-1 routes,
              CLI passthrough, high CPS. Complete the profile below and our carrier team contacts you
              with routes and pricing.
            </p>
            <p className="text-sm text-slate-400">
              This form is for wholesale and dialer traffic only. Retail and low-volume customers should
              use the <a href="/free-test" className="text-primary underline underline-offset-4">free test route</a> instead.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-4xl">

            {/* Stepper */}
            <div className="flex items-center justify-between mb-12">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const active = i === step, done = i < step;
                return (
                  <div key={s.id} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                        done ? 'bg-primary border-primary text-white'
                        : active ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-card border-border text-muted-foreground'}`}>
                        {done ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <span className={`text-[11px] uppercase tracking-wider text-center max-w-[100px] ${
                        active || done ? 'text-foreground font-bold' : 'text-muted-foreground'}`}
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>{s.label}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-3 mb-6 ${done ? 'bg-primary' : 'bg-border'}`} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              {step === 0 && <StepCompany data={data} set={set} errors={errors} />}
              {step === 1 && <StepTechnical data={data} set={set} toggle={toggle} errors={errors} />}
              {step === 2 && <StepTraffic data={data} set={set} toggle={toggle} errors={errors} />}

              {/* Honeypot — hidden from humans, harvested by bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label htmlFor="company_url_alt">Leave this field empty</label>
                <input id="company_url_alt" name="company_url_alt" type="text" tabIndex={-1}
                       autoComplete="off" value={String(data.company_url_alt || '')}
                       onChange={e => set('company_url_alt', e.target.value)} />
              </div>

              {state === 'error' && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold text-destructive">We could not submit the form.</p>
                    <p className="text-muted-foreground mt-1">{errMsg}</p>
                    <p className="text-muted-foreground mt-2">
                      Send it to us directly instead —{' '}
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">WhatsApp</a>
                      {' '}or{' '}
                      <a href="mailto:sales@voipcat.com?subject=US%20auto-dialer%20traffic%20registration" className="text-primary underline underline-offset-4">sales@voipcat.com</a>.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between mt-10 pt-8 border-t border-border">
                {step > 0 ? (
                  <Button variant="outline" onClick={back} disabled={state === 'sending'}
                          className="h-13 px-7 gap-2 uppercase tracking-widest text-xs"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                ) : <span />}

                {step < 2 ? (
                  <Button onClick={next} className="btn-glow h-13 px-9 gap-2 uppercase tracking-widest text-xs"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Continue <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button onClick={submit} disabled={state === 'sending'}
                          className="btn-glow h-13 px-9 gap-2 uppercase tracking-widest text-xs"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {state === 'sending'
                      ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                      : <>Submit Registration <ArrowRight className="w-4 h-4" /></>}
                  </Button>
                )}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Prefer to talk first?{' '}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="text-primary inline-flex items-center gap-1.5 underline underline-offset-4">
                <MessageCircle className="w-4 h-4" /> Message our carrier desk
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ── shared field primitives ────────────────────────────────────────────── */

function Field({ id, label, hint, required, error, children }: {
  id: string; label: string; hint?: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}

function Txt({ id, value, set, error, ...rest }: {
  id: string; value: Data; set: (k: string, v: string) => void; error?: string;
  type?: string; placeholder?: string; autoComplete?: string;
}) {
  return (
    <Input id={id} value={String(value[id] || '')}
           onChange={e => set(id, e.target.value)}
           aria-invalid={!!error}
           className={error ? 'border-destructive focus-visible:ring-destructive/40' : ''}
           {...rest} />
  );
}

function Sel({ id, value, set, options, error, placeholder }: {
  id: string; value: Data; set: (k: string, v: string) => void; options: string[];
  error?: string; placeholder: string;
}) {
  // A select's prompt is a real option, so ::placeholder never touches it — it
  // has to be greyed by hand while nothing is chosen, or it reads as an answer.
  const empty = !value[id];
  return (
    <select id={id} value={String(value[id] || '')} onChange={e => set(id, e.target.value)}
            aria-invalid={!!error}
            className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs
                        outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring
                        md:text-sm ${error ? 'border-destructive' : 'border-input'}`}
            style={empty ? { color: 'var(--placeholder)' } : undefined}>
      <option value="" style={{ color: 'var(--placeholder)' }}>{placeholder}</option>
      {options.map(o => <option key={o} value={o} style={{ color: 'var(--foreground)' }}>{o}</option>)}
    </select>
  );
}

function ChipGroup({ label, name, options, value, toggle }: {
  label: string; name: string; options: string[]; value: Data; toggle: (k: string, v: string) => void;
}) {
  const sel = (value[name] as string[]) || [];
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map(o => {
          const on = sel.includes(o);
          return (
            <button key={o} type="button" onClick={() => toggle(name, o)} aria-pressed={on}
                    className={`px-3.5 py-2 rounded-lg border text-sm transition-colors
                      ${on ? 'bg-primary/10 border-primary text-primary font-medium'
                           : 'bg-transparent border-border text-muted-foreground hover:border-primary/40'}`}>
              {on && <Check className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}{o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SectionTitle({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl text-foreground uppercase tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        {children}
      </h2>
      <div className="h-1 w-12 bg-primary rounded-full mt-2" />
      {note && <p className="text-sm text-muted-foreground mt-3">{note}</p>}
    </div>
  );
}

/* ── step 1 — company & compliance ──────────────────────────────────────── */

function StepCompany({ data, set, errors }: { data: Data; set: (k: string, v: string) => void; errors: Record<string, string> }) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle note="The legal entity we would contract with, exactly as registered.">Company</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="legalName" label="Legal company name" required error={errors.legalName}>
            <Txt id="legalName" value={data} set={set} error={errors.legalName} placeholder="Acme Communications LLC" />
          </Field>
          <Field id="tradingName" label="Trading name / DBA">
            <Txt id="tradingName" value={data} set={set} placeholder="If different from legal name" />
          </Field>
          <Field id="country" label="Country of registration" required error={errors.country}>
            <Txt id="country" value={data} set={set} error={errors.country} placeholder="United States" autoComplete="country-name" />
          </Field>
          <Field id="entityType" label="Entity type">
            <Sel id="entityType" value={data} set={set} options={ENTITIES} placeholder="Select entity type" />
          </Field>
          <div className="md:col-span-2">
            <Field id="address" label="Registered address" required error={errors.address}>
              <Textarea id="address" rows={2} value={String(data.address || '')}
                        onChange={e => set('address', e.target.value)}
                        aria-invalid={!!errors.address}
                        className={errors.address ? 'border-destructive' : ''}
                        placeholder="Street, city, state, ZIP" />
            </Field>
          </div>
          <Field id="website" label="Website">
            <Txt id="website" value={data} set={set} placeholder="https://" />
          </Field>
          <Field id="yearsTrading" label="Years in operation">
            <Txt id="yearsTrading" value={data} set={set} placeholder="e.g. 6" />
          </Field>
        </div>
      </div>

      <div>
        <SectionTitle note="US regulatory identifiers. Leave blank anything that does not apply to you — it will not block your registration, but supplying it moves you straight to a live route.">
          Compliance & registration
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="ein" label="EIN / Federal Tax ID" hint="Nine digits, e.g. 12-3456789">
            <Txt id="ein" value={data} set={set} placeholder="12-3456789" />
          </Field>
          <Field id="fcc499" label="FCC Form 499 Filer ID" hint="Six digits from your 499-A / 499-Q filing">
            <Txt id="fcc499" value={data} set={set} placeholder="831234" />
          </Field>
          <Field id="rmd" label="Robocall Mitigation Database (RMD) entry" hint="Your RMD listing name or ID, if you are listed">
            <Txt id="rmd" value={data} set={set} placeholder="RMD listing / ID" />
          </Field>
          <Field id="ocn" label="OCN / Operating Company Number">
            <Txt id="ocn" value={data} set={set} placeholder="If you hold one" />
          </Field>
          <Field id="stirShaken" label="STIR/SHAKEN — do you sign your traffic?">
            <Sel id="stirShaken" value={data} set={set} placeholder="Select"
                 options={['Yes — A attestation', 'Yes — B attestation', 'Yes — C attestation', 'No — we do not sign', 'Not sure']} />
          </Field>
          <Field id="spcToken" label="SPC token / certificate holder">
            <Txt id="spcToken" value={data} set={set} placeholder="If you hold an SPC token" />
          </Field>
          <Field id="stateLicence" label="State licences / PUC registrations">
            <Txt id="stateLicence" value={data} set={set} placeholder="States where you are registered" />
          </Field>
          <Field id="businessType" label="What is your business?">
            <Sel id="businessType" value={data} set={set} placeholder="Select"
                 options={['Contact centre / BPO', 'Carrier / wholesale', 'Lead generation', 'Debt collection', 'Insurance / health', 'Solar / home services', 'Reseller', 'Other']} />
          </Field>
        </div>
      </div>

      <div>
        <SectionTitle>Primary contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="contactName" label="Full name" required error={errors.contactName}>
            <Txt id="contactName" value={data} set={set} error={errors.contactName} autoComplete="name" placeholder="Jane Doe" />
          </Field>
          <Field id="jobTitle" label="Job title">
            <Txt id="jobTitle" value={data} set={set} placeholder="Head of Telecom" />
          </Field>
          <Field id="email" label="Business email" required error={errors.email}
                 hint="We reply to this address — please use your company domain.">
            <Txt id="email" value={data} set={set} error={errors.email} type="email" autoComplete="email" placeholder="jane@company.com" />
          </Field>
          <Field id="phone" label="Phone" required error={errors.phone}>
            <Txt id="phone" value={data} set={set} error={errors.phone} type="tel" autoComplete="tel" placeholder="+1 555 000 0000" />
          </Field>
          <Field id="messenger" label="WhatsApp / Telegram / Skype">
            <Txt id="messenger" value={data} set={set} placeholder="Fastest way to reach you" />
          </Field>
          <Field id="timezone" label="Timezone & best hours to call">
            <Txt id="timezone" value={data} set={set} placeholder="EST, 9am–6pm" />
          </Field>
        </div>
      </div>
    </div>
  );
}

/* ── step 2 — technical ─────────────────────────────────────────────────── */

function StepTechnical({ data, set, toggle, errors }: {
  data: Data; set: (k: string, v: string) => void; toggle: (k: string, v: string) => void; errors: Record<string, string>;
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle note="We authorise your traffic by IP. Give us every address that will send us SIP.">
          Signalling & media
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Field id="signallingIps" label="Signalling IP address(es)" required error={errors.signallingIps}
                   hint="One per line. Public IPs only — no NAT addresses.">
              <Textarea id="signallingIps" rows={3} value={String(data.signallingIps || '')}
                        onChange={e => set('signallingIps', e.target.value)}
                        aria-invalid={!!errors.signallingIps}
                        className={`font-mono text-sm ${errors.signallingIps ? 'border-destructive' : ''}`}
                        placeholder={'203.0.113.10\n203.0.113.11'} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field id="mediaIps" label="Media / RTP IP range(s)" hint="If your RTP leaves a different address or subnet than your signalling.">
              <Textarea id="mediaIps" rows={2} value={String(data.mediaIps || '')}
                        onChange={e => set('mediaIps', e.target.value)}
                        className="font-mono text-sm" placeholder="203.0.113.0/24" />
            </Field>
          </div>
          <Field id="switchPlatform" label="Softswitch / PBX platform" required error={errors.switchPlatform}>
            <Sel id="switchPlatform" value={data} set={set} options={SWITCHES} error={errors.switchPlatform} placeholder="Select platform" />
          </Field>
          <Field id="dialerPlatform" label="Dialer platform">
            <Sel id="dialerPlatform" value={data} set={set} options={DIALERS} placeholder="Select dialer" />
          </Field>
          <Field id="transport" label="SIP transport">
            <Sel id="transport" value={data} set={set} placeholder="Select transport"
                 options={['UDP', 'TCP', 'TLS', 'UDP + TLS']} />
          </Field>
          <Field id="srtp" label="Media encryption">
            <Sel id="srtp" value={data} set={set} placeholder="Select" options={['RTP (none)', 'SRTP required', 'Either']} />
          </Field>
          <div className="md:col-span-2">
            <ChipGroup label="Codecs you send" name="codecs" options={CODECS} value={data} toggle={toggle} />
          </div>
          <Field id="dtmf" label="DTMF method">
            <Sel id="dtmf" value={data} set={set} placeholder="Select" options={['RFC 2833', 'SIP INFO', 'In-band']} />
          </Field>
          <Field id="registration" label="Connection type">
            <Sel id="registration" value={data} set={set} placeholder="Select"
                 options={['IP authentication', 'SIP registration', 'Either']} />
          </Field>
        </div>
      </div>

      <div>
        <SectionTitle note="Tell us how you present caller ID — this drives which route we put you on.">Caller ID</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="cliSource" label="Where do your caller IDs come from?">
            <Sel id="cliSource" value={data} set={set} placeholder="Select"
                 options={['We own the DIDs', 'DIDs rented from another provider', 'We need VoIP Cat to supply DIDs', 'Mixed']} />
          </Field>
          <Field id="cliPassthrough" label="Do you require CLI passthrough?">
            <Sel id="cliPassthrough" value={data} set={set} placeholder="Select"
                 options={['Yes — pass my CLI unchanged', 'No — substitute is fine', 'Depends on destination']} />
          </Field>
          <Field id="cnam" label="Do you need CNAM on your DIDs?">
            <Sel id="cnam" value={data} set={set} placeholder="Select" options={['Yes', 'No', 'Later']} />
          </Field>
          <Field id="didCount" label="How many caller IDs do you rotate?">
            <Txt id="didCount" value={data} set={set} placeholder="e.g. 500" />
          </Field>
        </div>
      </div>
    </div>
  );
}

/* ── step 3 — traffic ───────────────────────────────────────────────────── */

function StepTraffic({ data, set, toggle, errors }: {
  data: Data; set: (k: string, v: string | boolean) => void; toggle: (k: string, v: string) => void; errors: Record<string, string>;
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle note="Real numbers, not aspirations — we size your ports and CPS limit from these.">
          Volume & quality
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="concurrentCalls" label="Concurrent calls (CC) required" required error={errors.concurrentCalls}>
            <Txt id="concurrentCalls" value={data} set={set as (k: string, v: string) => void} error={errors.concurrentCalls} placeholder="e.g. 300" />
          </Field>
          <Field id="cps" label="Calls per second (CPS) required" required error={errors.cps}>
            <Txt id="cps" value={data} set={set as (k: string, v: string) => void} error={errors.cps} placeholder="e.g. 25" />
          </Field>
          <Field id="acd" label="Expected ACD (minutes)" required error={errors.acd}
                 hint="Average call duration on your current route.">
            <Txt id="acd" value={data} set={set as (k: string, v: string) => void} error={errors.acd} placeholder="e.g. 1.8" />
          </Field>
          <Field id="asr" label="Expected ASR (%)" hint="Answer-seizure ratio you currently achieve.">
            <Txt id="asr" value={data} set={set as (k: string, v: string) => void} placeholder="e.g. 12" />
          </Field>
          <Field id="monthlyMinutes" label="Monthly minutes" required error={errors.monthlyMinutes}>
            <Txt id="monthlyMinutes" value={data} set={set as (k: string, v: string) => void} error={errors.monthlyMinutes} placeholder="e.g. 2,000,000" />
          </Field>
          <Field id="peakHours" label="Peak dialing hours (their local time)">
            <Txt id="peakHours" value={data} set={set as (k: string, v: string) => void} placeholder="e.g. 9am–8pm ET" />
          </Field>
          <div className="md:col-span-2">
            <ChipGroup label="Destinations you terminate to" name="destinations" options={DESTS} value={data} toggle={toggle} />
          </div>
          <Field id="trafficType" label="Traffic type">
            <Sel id="trafficType" value={data} set={set as (k: string, v: string) => void} placeholder="Select"
                 options={['Outbound auto-dialer', 'Outbound manual / preview', 'Inbound', 'Mixed inbound + outbound', 'Conversational AI']} />
          </Field>
          <Field id="amd" label="Do you use answering-machine detection?">
            <Sel id="amd" value={data} set={set as (k: string, v: string) => void} placeholder="Select" options={['Yes', 'No', 'Testing it']} />
          </Field>
        </div>
      </div>

      <div>
        <SectionTitle note="Optional, and it stays between us. It tells us instantly whether we can beat what you have.">
          Current setup
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Field id="currentProvider" label="Current provider(s)">
            <Txt id="currentProvider" value={data} set={set as (k: string, v: string) => void} placeholder="Who carries this traffic today" />
          </Field>
          <Field id="currentRate" label="Current rate (USD/min)">
            <Txt id="currentRate" value={data} set={set as (k: string, v: string) => void} placeholder="e.g. 0.0042" />
          </Field>
          <Field id="billingIncrement" label="Billing increment expected">
            <Sel id="billingIncrement" value={data} set={set as (k: string, v: string) => void} placeholder="Select"
                 options={['1/1 (per second)', '6/6', '30/6', '60/60', 'Flexible']} />
          </Field>
          <Field id="startDate" label="When do you want to go live?">
            <Sel id="startDate" value={data} set={set as (k: string, v: string) => void} placeholder="Select"
                 options={['Immediately', 'Within a week', 'Within a month', 'Evaluating for later']} />
          </Field>
          <div className="md:col-span-2">
            <Field id="notes" label="Anything else we should know">
              <Textarea id="notes" rows={4} value={String(data.notes || '')}
                        onChange={e => set('notes', e.target.value)}
                        placeholder="Route requirements, problems with your current carrier, test plan, contract terms…" />
            </Field>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-start gap-3">
          <Checkbox id="consent" checked={data.consent === true}
                    onCheckedChange={v => set('consent', v === true)}
                    aria-invalid={!!errors.consent} className="mt-0.5" />
          <div className="space-y-1">
            <Label htmlFor="consent" className="text-sm font-medium leading-relaxed cursor-pointer">
              I confirm the information above is accurate, and I authorise VoIP Cat to contact me about
              routes, pricing and interconnection.<span className="text-primary ml-1">*</span>
            </Label>
            <p className="text-xs text-muted-foreground">
              Your details go to our carrier team only. We do not sell or share them.
            </p>
            {errors.consent && <p className="text-xs text-destructive font-medium">{errors.consent}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── thank you ──────────────────────────────────────────────────────────── */

function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container max-w-xl text-center space-y-7">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
            <Check className="w-9 h-9 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl text-foreground uppercase tracking-tighter"
              style={{ fontFamily: 'Orbitron, sans-serif' }}>
            REGISTRATION <span className="text-primary">RECEIVED</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Our carrier team has your profile. Expect a reply within one business day with routes,
            pricing and the IPs to point your switch at.
          </p>
          <p className="text-sm text-muted-foreground">
            If it is urgent, message the carrier desk directly and quote your company name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow h-13 px-8 gap-2 uppercase tracking-widest text-xs"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <MessageCircle className="w-4 h-4" /> Message carrier desk
              </Button>
            </a>
            <a href="/">
              <Button variant="outline" className="h-13 px-8 uppercase tracking-widest text-xs"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Back to site
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
