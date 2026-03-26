import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';




/**
 * VoIP Plans Section - Cyber Tech Design
 * Features: Three-tier pricing with feature lists, comparison layout, internal links
 */
export default function PlansSection() {
  const [, setLocation] = useLocation();




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
      ],
      highlighted: false,
    },
    {
      name: 'Platinum Core',
      icon: Globe,
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium routes with high ASR',
        '24/7 dedicated support',
        'Full CLI pass-through',
      ],
      highlighted: true,
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
      ],
      highlighted: false,
    },
  ];




  return (
    <section id="plans" className="py-20 md:py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 -z-10"></div>




      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
