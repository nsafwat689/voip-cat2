import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Mail, MessageSquare, ArrowLeft, Check, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ServiceOption {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface VoIPPlan {
  name: string;
  icon: React.ReactNode;
  features: string[];
  highlighted: boolean;
  googleSheetLink: string;
}

// Contact information configuration - Sales only
const CONTACT_INFO = {
  sales: {
    whatsapp: '+201557649136',
    email: 'sales.voipcat@gmail.com',
    name: 'Sales'
  }
};

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'sip-trunk',
    label: 'SIP Trunking',
    description: 'Enterprise-grade SIP trunks with HD voice and global coverage',
    icon: <Phone className="w-4 h-4" />
  },
  {
    id: 'wholesale',
    label: 'Wholesale VoIP',
    description: 'High-volume voice termination with competitive A-Z rates',
    icon: <Globe className="w-4 h-4" />
  },
  {
    id: 'cloud-pbx',
    label: 'Cloud PBX',
    description: 'Hosted phone systems with auto-attendant and call routing',
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    id: 'voip-rates',
    label: 'VoIP Rates & Plans',
    description: 'View our competitive rates for 190+ countries',
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 'reseller',
    label: 'VoIP Reseller Program',
    description: 'Start your own VoIP business with our white-label solution',
    icon: <ShieldCheck className="w-4 h-4" />
  }
];

const VOIP_PLANS: VoIPPlan[] = [
  {
    name: 'Standard Node',
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Basic call quality',
      'Standard features',
      'Calls to 50 countries',
      'Email support',
    ],
    highlighted: false,
    googleSheetLink: 'https://docs.google.com/spreadsheets/d/15jVmJOYjHPSYJLQnxA4yeJ5fBrw_LESr7z0TIzPcTQg/edit?pli=1&gid=0#gid=0'
  },
  {
    name: 'Platinum Core',
    icon: <Globe className="w-6 h-6" />,
    features: [
      'Calls to 190+ countries',
      'Crystal-clear HD quality',
      'Premium features',
      '24/7 dedicated support',
    ],
    highlighted: true,
    googleSheetLink: 'https://docs.google.com/spreadsheets/d/10ZffoibimILTRMbZLtzvjrMWrM3nQLkO8o8SLOnOZiM/edit?gid=0#gid=0'
  },
  {
    name: 'Premium Link',
    icon: <ShieldCheck className="w-6 h-6" />,
    features: [
      'Calls to 100 countries',
      'HD call quality',
      'Advanced features',
      'Priority support',
    ],
    highlighted: false,
    googleSheetLink: 'https://docs.google.com/spreadsheets/d/17LeHQSR6jpvNZVsRiAhotEMB4ItymN3Fmqa0bWZAE8w/edit?gid=0#gid=0'
  }
];

const SERVICE_RESPONSES: Record<string, string> = {
  'sip-trunk': 'Our SIP Trunking service offers enterprise-grade voice connectivity with HD quality, coverage to 190+ countries, TLS/SRTP encryption, and 99.9% uptime SLA. Compatible with Asterisk, FreePBX, 3CX, and all major PBX systems. Save up to 60% compared to traditional phone lines. Would you like a free test route?',
  'wholesale': 'Our Wholesale VoIP service provides high-quality A-Z voice termination with competitive rates, CLI routes, real-time CDR access, and 99.9% uptime SLA. We serve carriers, ITSPs, resellers, and call centers. Contact our sales team for volume pricing.',
  'cloud-pbx': 'Our Cloud PBX solutions include auto-attendant, call routing, voicemail-to-email, call recording, and conference calling. Plans start at $75/month for up to 8 concurrent calls, with enterprise plans supporting unlimited calls. No hardware required!',
  'voip-rates': 'We offer competitive VoIP rates for calls to 190+ countries. Below you can see our rate plans. All plans include CLI support, premium routes, and 24/7 technical support. Volume discounts are available for high-traffic customers.',
  'reseller': 'Our VoIP Reseller Program lets you start your own VoIP business with zero upfront investment. You get white-label branding, high profit margins, a customer management portal, and full technical support from our team. Apply today and start earning!',
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showVoIPDetails, setShowVoIPDetails] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I\'m your VoIP Cat assistant. How can I help you today? Select a service below to learn more.',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = SERVICE_OPTIONS.find(s => s.id === serviceId);
    
    if (service) {
      // Add user selection as message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: `I'm interested in: ${service.label}`,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage]);

      // Add AI response
      setTimeout(() => {
        const aiResponseText = SERVICE_RESPONSES[serviceId] || `Great choice! Contact our sales team to learn more about ${service.label}.`;
        
        if (serviceId === 'voip-rates') {
          setShowVoIPDetails(true);
        }

        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: aiResponseText,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 300);
    }
  };

  const handleWhatsAppContact = () => {
    const contact = CONTACT_INFO.sales;
    const service = SERVICE_OPTIONS.find(s => s.id === selectedService);
    const serviceName = service ? service.label : 'VoIP services';
    const message = `Hi! I'm interested in your ${serviceName}. Please assist me.`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const contact = CONTACT_INFO.sales;
    const service = SERVICE_OPTIONS.find(s => s.id === selectedService);
    const serviceName = service ? service.label : 'VoIP services';
    const subject = `Inquiry About ${serviceName}`;
    const body = `Hello,\n\nI would like to learn more about your ${serviceName}.\n\nThank you,`;
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleViewRates = (googleSheetLink: string) => {
    window.open(googleSheetLink, '_blank');
  };

  const handleReset = () => {
    setSelectedService(null);
    setShowVoIPDetails(false);
    setMessages([
      {
        id: '1',
        text: 'Hello! I\'m your VoIP Cat assistant. How can I help you today? Select a service below to learn more.',
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            aria-label="Open chat"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary/20"
            />
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-24px)] h-[600px] max-h-[calc(100vh-120px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">VoIP Cat Assistant</h3>
                  <p className="text-white/80 text-xs">Available 24/7 — Select a service</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Service Options Section */}
            {!selectedService && (
              <div className="border-t border-border p-3 space-y-2 bg-muted/30 max-h-56 overflow-y-auto">
                <p className="text-xs font-semibold text-foreground/70 px-1">Select a Service:</p>
                {SERVICE_OPTIONS.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleServiceSelect(service.id)}
                    className="w-full text-left p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-start gap-2">
                      <div className="text-primary mt-0.5">{service.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{service.label}</p>
                        <p className="text-xs text-foreground/60">{service.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {/* VoIP Plans Section */}
            {showVoIPDetails && selectedService === 'voip-rates' && (
              <div className="border-t border-border p-3 space-y-2 bg-muted/30 max-h-64 overflow-y-auto">
                <p className="text-xs font-semibold text-foreground/70 px-1">VoIP Rate Plans:</p>
                {VOIP_PLANS.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-lg border ${
                      plan.highlighted 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-background'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary">{plan.icon}</div>
                      <h4 className="font-semibold text-sm text-foreground">{plan.name}</h4>
                      {plan.highlighted && (
                        <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">Recommended</span>
                      )}
                    </div>
                    <ul className="space-y-1 mb-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-1.5 text-xs text-foreground/70">
                          <Check className="w-3 h-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      onClick={() => handleViewRates(plan.googleSheetLink)}
                      className={`w-full text-xs ${
                        plan.highlighted 
                          ? 'bg-primary hover:bg-primary/90 text-white' 
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      View Rates
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Contact Options (shown after service selection) */}
            {selectedService && (
              <div className="border-t border-border p-3 space-y-2 bg-muted/30">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs gap-1"
                  >
                    <Phone className="w-3 h-3" /> WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleEmailContact}
                    variant="outline"
                    className="flex-1 text-xs gap-1"
                  >
                    <Mail className="w-3 h-3" /> Email
                  </Button>
                </div>
                <Button
                  size="sm"
                  onClick={handleReset}
                  variant="ghost"
                  className="w-full text-xs gap-1 text-foreground/60"
                >
                  <ArrowLeft className="w-3 h-3" /> Back to Services
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
