/**
 * Lead capture for the US auto-dialer registration form.
 *
 * Order matters: the Google Sheet is the destination Nour asked for, but a
 * tripped Apps Script quota must never lose a carrier lead. So we always try
 * the sheet, always try the mail copy, and only report failure to the visitor
 * when BOTH miss — the form then shows them the WhatsApp fallback.
 */

// Our own capture service on the portal (voipcat-leads.service, proxied by the
// phone.voipcat.com vhost). It writes the lead to disk before it answers, then
// mails sales and appends to the Google Sheet. Keeping the Mailgun key and the
// Apps Script URL on a box we control means no secret ships in this repo and no
// environment variable has to be set for the form to work.
const CAPTURE_URL = process.env.LEAD_CAPTURE_URL || 'https://phone.voipcat.com/lead-capture';

const MIN_FILL_MS = 8000;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const seen = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  seen.push(now);
  hits.set(ip, seen);
  if (hits.size > 5000) hits.clear();
  return seen.length > MAX_PER_IP;
}

const FIELDS: [string, string][] = [
  ['legalName', 'Legal name'], ['tradingName', 'Trading name'], ['country', 'Country'],
  ['entityType', 'Entity type'], ['address', 'Address'], ['website', 'Website'],
  ['yearsTrading', 'Years trading'], ['ein', 'EIN'], ['fcc499', 'FCC 499 Filer ID'],
  ['rmd', 'RMD'], ['ocn', 'OCN'], ['stirShaken', 'STIR/SHAKEN'], ['spcToken', 'SPC token'],
  ['stateLicence', 'State licences'], ['businessType', 'Business type'],
  ['contactName', 'Contact name'], ['jobTitle', 'Job title'], ['email', 'Email'],
  ['phone', 'Phone'], ['messenger', 'Messenger'], ['timezone', 'Timezone'],
  ['signallingIps', 'Signalling IPs'], ['mediaIps', 'Media IPs'],
  ['switchPlatform', 'Switch'], ['dialerPlatform', 'Dialer'], ['transport', 'Transport'],
  ['srtp', 'Encryption'], ['codecs', 'Codecs'], ['dtmf', 'DTMF'], ['registration', 'Connection'],
  ['cliSource', 'CLI source'], ['cliPassthrough', 'CLI passthrough'], ['cnam', 'CNAM'],
  ['didCount', 'DID count'], ['concurrentCalls', 'Concurrent calls'], ['cps', 'CPS'],
  ['acd', 'ACD'], ['asr', 'ASR'], ['monthlyMinutes', 'Monthly minutes'],
  ['peakHours', 'Peak hours'], ['destinations', 'Destinations'], ['trafficType', 'Traffic type'],
  ['amd', 'AMD'], ['currentProvider', 'Current provider'], ['currentRate', 'Current rate'],
  ['billingIncrement', 'Billing increment'], ['startDate', 'Start date'], ['notes', 'Notes'],
];

const flat = (v: unknown) => Array.isArray(v) ? v.join(', ') : v == null ? '' : String(v);

async function capture(record: unknown): Promise<boolean> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 12000);
  try {
    const r = await fetch(CAPTURE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
      signal: ctl.signal,
    });
    return r.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  // Bot gates. All three answer with 200 so a scraper learns nothing from the
  // response, but nothing is stored or sent.
  if (flat(body.company_url_alt).trim()) return res.status(200).json({ ok: true });
  if (Number(body._elapsedMs || 0) < MIN_FILL_MS) return res.status(200).json({ ok: true });
  if (rateLimited(ip)) return res.status(200).json({ ok: true });

  for (const f of ['legalName', 'contactName', 'email', 'phone']) {
    if (!flat(body[f]).trim()) return res.status(400).json({ error: `Missing ${f}` });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(flat(body.email))) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const meta = {
    'Received': new Date().toISOString(),
    'IP': ip,
    'Page': flat(body._page),
    'Referrer': flat(body._referrer) || '(direct)',
    'User agent': String(req.headers['user-agent'] || ''),
    'Consent': body.consent === true ? 'Yes — accurate info + contact authorised' : 'No',
  };

  const record = { ...Object.fromEntries(FIELDS.map(([k]) => [k, flat(body[k])])), ...meta };

  if (!(await capture(record))) {
    console.error('[signup] capture service unreachable', { legalName: flat(body.legalName), email: flat(body.email) });
    return res.status(502).json({ error: 'We could not reach our systems. Please contact us directly — your details were not saved.' });
  }

  console.log('[signup] captured', { legalName: flat(body.legalName) });
  return res.status(200).json({ ok: true });
}
