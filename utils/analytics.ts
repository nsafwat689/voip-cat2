/**
 * Analytics Stack — Task 20
 * Lightweight event tracking layer. Sends to PostHog (if configured).
 * Structured conversion events for lead tracking.
 *
 * Setup:
 *  1. Set VITE_POSTHOG_KEY in .env
 *  2. Call initAnalytics() once in main.tsx
 *  3. Use trackEvent() anywhere in the app
 */

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, props?: Record<string, unknown>) => void;
      identify: (id: string, props?: Record<string, unknown>) => void;
      init: (key: string, options?: Record<string, unknown>) => void;
    };
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────
export function initAnalytics() {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key) return;

  // Dynamically load PostHog snippet
  const script = document.createElement('script');
  script.innerHTML = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+" (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('${key}', {api_host: 'https://app.posthog.com', capture_pageview: true, capture_pageleave: true});
  `;
  document.head.appendChild(script);
}

// ─── Core event tracker ──────────────────────────────────────────────────────
export function trackEvent(event: string, props?: Record<string, unknown>) {
  try {
    if (window.posthog) window.posthog.capture(event, props);
    // Also fire a GA4-style dataLayer push if GTM is used
    if ((window as any).dataLayer) (window as any).dataLayer.push({ event, ...props });
  } catch {}
}

// ─── Conversion events ───────────────────────────────────────────────────────
export const track = {
  freeTestRequest:    (source: string) => trackEvent('free_test_request',    { source }),
  whatsappClick:      (page: string)   => trackEvent('whatsapp_click',       { page }),
  pricingView:        ()               => trackEvent('pricing_view'),
  contactFormSubmit:  (type: string)   => trackEvent('contact_form_submit',  { type }),
  navClick:           (label: string)  => trackEvent('nav_click',            { label }),
  caseStudyView:      (name: string)   => trackEvent('case_study_view',      { name }),
  pageScroll50:       (page: string)   => trackEvent('scroll_50_pct',        { page }),
  pageScroll90:       (page: string)   => trackEvent('scroll_90_pct',        { page }),
};
