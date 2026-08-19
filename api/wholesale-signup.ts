/**
 * Lead capture for the US auto-dialer registration form.
 *
 * Order matters: the Google Sheet is the destination Nour asked for, but a
 * tripped Apps Script quota must never lose a carrier lead. So we always try
 * the sheet, always try the mail copy, and only report failure to the visitor
 * when BOTH miss — the form then shows them the WhatsApp fallback.
 */

const SHEET_URL = process.env.SIGNUP_SHEET_WEBHOOK || '';
const SHEET_SECRET = process.env.SIGNUP_SHEET_SECRET || '';
const MAILGUN_KEY = process.env.MAILGUN_API_KEY || '';
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || 'voipcat.com';
const NOTIFY = process.env.SIGNUP_NOTIFY_TO || 'sales.voipcat@gmail.com';

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

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function mailBody(d: Record<string, unknown>, meta: Record<string, string>) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${esc(k)}</td>` +
    `<td style="padding:6px 0;color:#0f172a;white-space:pre-wrap">${esc(v)}</td></tr>`;
  const rows = FIELDS.filter(([k]) => flat(d[k]).trim()).map(([k, label]) => row(label, flat(d[k]))).join('');
  const metaRows = Object.entries(meta).map(([k, v]) => row(k, v)).join('');
  return `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px">
<h2 style="margin:0 0 4px">US auto-dialer traffic registration</h2>
<p style="margin:0 0 18px;color:#64748b">${esc(flat(d.legalName))} — ${esc(flat(d.contactName))} &lt;${esc(flat(d.email))}&gt;</p>
<table style="border-collapse:collapse">${rows}</table>
<h3 style="margin:24px 0 4px;font-size:13px;color:#64748b">Submission</h3>
<table style="border-collapse:collapse">${metaRows}</table></div>`;
}

async function toSheet(payload: unknown): Promise<boolean> {
  if (!SHEET_URL) return false;
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 8000);
  try {
    const r = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: SHEET_SECRET, payload }),
      signal: ctl.signal,
    });
    return r.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
}

async function toMail(html: string, subject: string): Promise<boolean> {
  if (!MAILGUN_KEY) return false;
  const form = new URLSearchParams({
    from: `VoIP Cat Website <sales@${MAILGUN_DOMAIN}>`,
    to: NOTIFY,
    subject,
    html,
  });
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 8000);
  try {
    const r = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`api:${MAILGUN_KEY}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form,
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
  const subject = `US traffic registration — ${flat(body.legalName)} (${flat(body.cps) || '?'} CPS, ${flat(body.concurrentCalls) || '?'} CC)`;

  const [sheetOk, mailOk] = await Promise.all([
    toSheet(record),
    toMail(mailBody(body, meta), subject),
  ]);

  if (!sheetOk && !mailOk) {
    console.error('[signup] BOTH destinations failed', { legalName: flat(body.legalName), email: flat(body.email) });
    return res.status(502).json({ error: 'We could not reach our systems. Please contact us directly — your details were not saved.' });
  }

  console.log('[signup] captured', { legalName: flat(body.legalName), sheetOk, mailOk });
  return res.status(200).json({ ok: true });
}
