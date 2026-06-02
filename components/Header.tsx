import { useState, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import { PORTAL_URL } from '@/lib/portal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollTo = useCallback((id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location === '/') {
      doScroll();
    } else {
      setLocation('/');
      setTimeout(doScroll, 400);
    }
    setMobileMenuOpen(false);
  }, [location, setLocation]);

  const navGroups = [
    {
      label: 'Solutions',
      children: [
        { label: 'SIP Trunking',   href: '/sip-trunk',      desc: 'Connect your PBX to the PSTN' },
        { label: 'Wholesale VoIP', href: '/wholesale-voip', desc: 'A-Z termination to 190+ countries' },
        { label: 'Cloud PBX',      href: '/cloud-pbx',      desc: 'Hosted phone system' },
        { label: 'VoIP API',       href: '/voip-api',       desc: 'Programmable voice at scale' },
        { label: 'VoIP Reseller',  href: '/voip-reseller',  desc: 'White-label your own VoIP brand' },
      ],
    },
    {
      label: 'Infrastructure',
      children: [
        { label: 'Network',    href: '/network',   desc: 'POPs, routing, failover architecture' },
        { label: 'Coverage',   href: '/coverage',  desc: 'Countries, DIDs, premium routes' },
        { label: 'Security',   href: '/security',  desc: 'SIP encryption, fraud prevention' },
        { label: 'Status',     href: '/status',    desc: 'Live uptime & incident reports' },
      ],
    },
    {
      label: 'Tools',
      badge: 'New',
      children: [
        { label: 'Live WebRTC Demo',    href: '/demo',                desc: 'Make a real call from your browser now' },
        { label: 'Savings Calculator',  href: '/calculator',          desc: 'See how much you save vs market rates' },
        { label: 'Reseller Calculator', href: '/reseller-calculator', desc: 'Project your monthly reseller earnings' },
        { label: 'vs Twilio',       href: '/vs/twilio',       desc: 'Feature & price comparison' },
        { label: 'vs Vonage',       href: '/vs/vonage',       desc: 'Feature & price comparison' },
        { label: 'vs Telnyx',       href: '/vs/telnyx',       desc: 'Feature & price comparison' },
        { label: 'vs RingCentral',  href: '/vs/ringcentral',  desc: 'Feature & price comparison' },
        { label: 'vs 8x8',          href: '/vs/8x8',          desc: 'Feature & price comparison' },
        { label: 'vs Bandwidth',    href: '/vs/bandwidth',    desc: 'Feature & price comparison' },
      ],
    },
    {
      label: 'Resources',
      children: [
        { label: 'Articles',     href: '/articles',    desc: 'Expert VoIP guides' },
        { label: 'Case Studies', href: 'case-studies', desc: 'Real-world results', anchor: true },
        { label: 'FAQ',          href: '/faq',         desc: 'Common questions answered' },
        { label: 'Live Rates',   href: PORTAL_URL,     desc: 'Log in to your portal for live pricing' },
        { label: 'Developers',   href: '/developers',  desc: 'API docs & SIP examples' },
        { label: 'Integrations', href: '/integrations',desc: '3CX, FreePBX, Asterisk & more' },
      ],
    },
    {
      label: 'Company',
      children: [
        { label: 'About',   href: 'about',    desc: 'Our story & team', anchor: true },
        { label: 'Contact', href: '/contact', desc: 'Talk to a specialist' },
      ],
    },
  ];

  // Renders a single dropdown item (shared by desktop and mobile)
  const renderItem = (child: any, extraClass = '', onClick?: () => void) => {
    const base = 'flex flex-col px-4 py-3 hover:bg-muted hover:text-primary transition-colors cursor-pointer';
    const cls = base + (extraClass ? ' ' + extraClass : '');
    const inner = (
      <>
        <span className="text-sm font-semibold text-foreground hover:text-primary">{child.label}</span>
        <span className="text-xs text-muted-foreground mt-0.5">{child.desc}</span>
      </>
    );
    if (child.anchor) {
      return (
        <button key={child.label} className={cls + ' w-full text-left'} onClick={() => { scrollTo(child.href); onClick?.(); }}>
          {inner}
        </button>
      );
    }
    if (child.href.startsWith('http')) {
      return (
        <a key={child.label} href={child.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
          {inner}
        </a>
      );
    }
    return (
      <Link key={child.label} href={child.href} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20 py-2">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <img src="/images/logo-fox.jpg" alt="VoIP Cat Logo"
                className="h-12 w-auto rounded-lg shadow-sm border border-primary/20" />
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg -z-10" />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline tracking-wider"
              style={{ fontFamily: 'Orbitron, sans-serif' }}>VOIP CAT</span>
          </Link>

          {/* Desktop nav — pure CSS hover, zero JS timers */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/"
              className="flex items-center px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest rounded-md hover:bg-primary/5"
              style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Home
            </Link>

            {navGroups.map((group) => (
              /* group/[name] scopes the CSS hover so nested groups don't bleed */
              <div key={group.label} className="relative group/dd">

                {/* Trigger button */}
                <button
                  className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary group-hover/dd:text-primary transition-colors uppercase tracking-widest rounded-md hover:bg-primary/5 group-hover/dd:bg-primary/5"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {group.label}
                  {(group as any).badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold bg-primary text-white rounded-full uppercase tracking-wide leading-none">
                      {(group as any).badge}
                    </span>
                  )}
                  {/* Chevron rotates on CSS hover — no JS needed */}
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover/dd:rotate-180" />
                </button>

                {/*
                  Dropdown panel:
                  - invisible + pointer-events-none by default
                  - group-hover/dd:visible + pointer-events-auto on hover
                  - pt-1 creates a transparent bridge so the mouse doesn't "fall"
                    between button and panel, keeping :hover true the whole time
                  - CSS :hover considers ALL descendants (even absolute ones),
                    so the group stays "hovered" while mouse is anywhere in here
                */}
                <div className="absolute top-full left-0 w-64 z-50 pt-1
                                invisible opacity-0 pointer-events-none
                                group-hover/dd:visible group-hover/dd:opacity-100 group-hover/dd:pointer-events-auto
                                transition-all duration-150">
                  <div className="w-full bg-card border border-border rounded-xl shadow-2xl py-2">
                    {group.children.map((child) => renderItem(child))}
                  </div>
                </div>

              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/free-test"
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Free Test
            </Link>
            <a href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VoIP%20Cat."
              target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow uppercase tracking-wider text-xs"
                style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile menu — simple accordion, no hover needed */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pt-2 max-h-[70vh] overflow-y-auto">
              <Link href="/"
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors uppercase tracking-widest"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest text-muted-foreground font-bold"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {group.label}
                    {(group as any).badge && (
                      <span className="ml-2 px-1.5 py-0.5 text-[9px] font-bold bg-primary text-white rounded-full">
                        {(group as any).badge}
                      </span>
                    )}
                  </div>
                  {group.children.map((child) => {
                    const mClass = 'block px-6 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors';
                    return renderItem(child, mClass, () => setMobileMenuOpen(false));
                  })}
                </div>
              ))}
              <div className="flex gap-2 px-4 pt-4 border-t border-border mt-2">
                <Link href="/free-test"
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}>
                  Free Test
                </Link>
                <a href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20started."
                  target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full btn-glow uppercase tracking-wider text-xs"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
