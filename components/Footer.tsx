import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Footer Component - Cyber Tech Design
 * Features: Multi-column link layout with all service pages, social icons, copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Articles', href: '/articles' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Cloud PBX', href: '/cloud-pbx' },
      { label: 'SIP Trunk', href: '/sip-trunk' },
      { label: 'Wholesale VoIP', href: '/wholesale-voip' },
      { label: 'VoIP API', href: '/voip-api' },
      { label: 'VoIP Reseller', href: '/voip-reseller' },
      { label: 'VoIP Rates', href: '/voip-rates' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Free Test Route', href: 'https://wa.me/201557649136?text=Hi%2C%20I%20would%20like%20a%20free%20test%20route.', external: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/voipcat', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/people/VoipCat/61583844607938/', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/voipcat', label: 'Twitter' },
  ];

  return (
    <footer className="bg-background text-white py-16 md:py-20 border-t border-primary/20">
      <div className="container">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/logo-fox.jpg"
                  alt="VoIP Cat Logo"
                  className="h-10 w-auto rounded-md border border-primary/30"
                />
                <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-md -z-10"></div>
              </div>
              <span className="font-bold text-xl tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>VOIP CAT</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Enterprise-grade VoIP solutions for businesses worldwide. SIP trunking, wholesale voice termination, Cloud PBX, and more. Available 24/7.
            </p>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Email: <a href="mailto:support@voipcat.com" className="text-primary hover:underline">support@voipcat.com</a></p>
              <p>WhatsApp: <a href="https://wa.me/201557649136" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+20 155 764 9136</a></p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </a>
                  ) : link.href.startsWith('/') ? (
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-slate-500 text-xs uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            &copy; {currentYear} VoIP Cat. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/40 hover:bg-primary/10 transition-all flex items-center justify-center group"
                  title={social.label}
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
