import { MessageCircle, DollarSign, FlaskConical } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Mobile Sticky CTA Bar — Task 3
 * Three actions: Free Test, WhatsApp Sales, Get Pricing.
 * Visible only on mobile (hidden md:hidden on desktop).
 */
export default function MobileStickyCTA() {
  const [, setLocation] = useLocation();

  const actions = [
    {
      icon: FlaskConical,
      label: 'Free Test',
      onClick: () => setLocation('/free-test'),
      className: 'bg-primary text-white',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/201557649136?text=Hi%2C%20I%20want%20to%20start%20a%20free%20VoIP%20test.',
      className: 'bg-green-500 text-white',
    },
    {
      icon: DollarSign,
      label: 'Pricing',
      onClick: () => setLocation('/voip-rates'),
      className: 'bg-secondary text-primary border border-primary/40',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-primary/20 safe-area-pb">
      <div className="flex items-stretch divide-x divide-primary/20">
        {actions.map(({ icon: Icon, label, onClick, href, className }, i) => {
          const inner = (
            <div className={`flex flex-col items-center justify-center gap-1 py-3 w-full ${className} transition-opacity active:opacity-70`}>
              <Icon className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</span>
            </div>
          );
          if (href) {
            return (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="flex-1">
                {inner}
              </a>
            );
          }
          return (
            <button key={i} onClick={onClick} className="flex-1">
              {inner}
            </button>
          );
        })}
      </div>
    </div>
  );
}
