import { useState } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'wouter';

/**
 * Header Component - Cyber Tech Design
 * Features: Sticky navigation, responsive mobile menu, services dropdown, smooth transitions
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    {
      label: 'Services',
      href: '#',
      children: [
        { label: 'Cloud PBX', href: '/cloud-pbx' },
        { label: 'SIP Trunk', href: '/sip-trunk' },
        { label: 'Wholesale VoIP', href: '/wholesale-voip' },
        { label: 'VoIP API', href: '/voip-api' },
        { label: 'VoIP Reseller', href: '/voip-reseller' },
      ],
    },
    { label: 'Rates', href: '/voip-rates' },
    { label: 'Articles', href: '/articles' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

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
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg -z-10"></div>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP CAT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </a>
                )
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Contact
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors uppercase tracking-widest flex items-center justify-between"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-6">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors uppercase tracking-widest"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors uppercase tracking-widest"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )
              ))}
              <div className="flex gap-2 px-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-foreground" />
                  ) : (
                    <Sun className="w-5 h-5 text-foreground" />
                  )}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-md uppercase tracking-wider text-xs transition-colors"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VoIP%20Cat."
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
