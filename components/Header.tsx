import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

/**
 * Header — Task 5: Navigation Restructure
 * Mega-menu with Solutions / Infrastructure / Resources / Company groupings.
 * Added: Network, Coverage, Security, Developers, Integrations, Status, Case Studies.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const navGroups = [
    {
      label: 'Solutions',
      children: [
        { label: 'SIP Trunking',    href: '/sip-trunk',      desc: 'Connect your PBX to the PSTN' },
        { label: 'Wholesale VoIP',  href: '/wholesale-voip', desc: 'A-Z termination to 190+ countries' },
        { label: 'Cloud PBX',       href: '/cloud-pbx',      desc: 'Hosted phone system' },
        { label: 'VoIP API',        href: '/voip-api',       desc: 'Programmable voice at scale' },
        { label: 'VoIP Reseller',   href: '/voip-reseller',  desc: 'White-label your own VoIP brand' },
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
      label: 'Resources',
      children: [
        { label: 'Case Studies',   href: '/#case-studies', desc: 'Real-world results' },
        { label: 'Articles',       href: '/articles',       desc: 'Expert VoIP guides' },
        { label: 'FAQ',            href: '/faq',            desc: 'Common questions answered' },
        { label: 'VoIP Rates',     href: '/voip-rates',     desc: 'Live route pricing' },
        { label: 'Developers',     href: '/developers',     desc: 'API docs & SIP examples' },
        { label: 'Integrations',   href: '/integrations',   desc: '3CX, FreePBX, Asterisk & more' },
      ],
    },
    {
      label: 'Company',
      children: [
        { label: 'About',   href: '/#about',   desc: 'Our story & team' },
        { label: 'Contact', href: '/contact',  desc: 'Talk to a specialist' },
      ],
    },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const t = setTimeout(() => setActiveDropdown(null), 150);
    setDropdownTimeout(t);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/images/logo-fox.jpg"
                alt="VoIP Cat Logo"
                className="h-12 w-auto rounded-lg shadow-sm border border-primary/20"
              />
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg -z-10" />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP CAT
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest rounded-md hover:bg-primary/5"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {group.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === group.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter(group.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {group.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex flex-col px-4 py-3 hover:bg-muted hover:text-primary transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary">{child.label}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/free-test"
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Free Test
            </Link>
            <a
              href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VoIP%20Cat."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-glow uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pt-2 max-h-[70vh] overflow-y-auto">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest text-muted-foreground font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {group.label}
                  </div>
                  {group.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex gap-2 px-4 pt-4 border-t border-border mt-2">
                <Link
                  href="/free-test"
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Test
                </Link>
                <a
                  href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20started."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full btn-glow uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
