import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'wouter';


export default function VoipRates() {
  useSEO({
    title: 'VoIP Rates & Pricing | Affordable International Calling | VOIP CAT',
    description: 'Check VoIP Cat\'s competitive VoIP rates for international calling to 190+ countries. CLI supported, premium routes, and 24/7 support. Request a free test route today.',
    keywords: 'VoIP rates, international calling rates, VoIP pricing, cheap VoIP calls, wholesale VoIP rates, SIP trunk pricing, call rates',
    canonical: 'https://voipcat.com/voip-rates',
  });


  const googleSheetLinks = {
    standard: 'https://docs.google.com/spreadsheets/d/15jVmJOYjHPSYJLQnxA4yeJ5fBrw_LESr7z0TIzPcTQg/edit?pli=1&gid=0#gid=0',
    platinum: 'https://docs.google.com/spreadsheets/d/10ZffoibimILTRMbZLtzvjrMWrM3nQLkO8o8SLOnOZiM/edit?gid=0#gid=0',
    premium: 'https://docs.google.com/spreadsheets/d/17LeHQSR6jpvNZVsRiAhotEMB4ItymN3Fmqa0bWZAE8w/edit?gid=0#gid=0',
  };


  const plans = [
    {
      name: 'Standard Node',
      icon: Zap,
      features: [
        'Basic call quality',
        'Standard features',
        'Calls to 50 countries',
        'Email support',
        'CLI supported',
        'Pay-as-you-go billing',
      ],
      highlighted: false,
      link: googleSheetLinks.standard,
    },
    {
      name: 'Platinum Core',
      icon: Globe,
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium routes',
        '24/7 dedicated support',
        'CLI supported',
        'Volume discounts available',
      ],
      highlighted: true,
      link: googleSheetLinks.platinum,
    },
    {
      name: 'Premium Link',
      icon: ShieldCheck,
      features: [
        'Calls to 100 countries',
        'HD call quality',
        'Advanced features',
        'Priority support',
        'CLI supported',
        'Custom routing options',
      ],
      highlighted: false,
      link: googleSheetLinks.premium,
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
