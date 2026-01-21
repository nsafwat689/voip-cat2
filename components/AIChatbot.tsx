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
    email: 'sales@voipcat.com',
    name: 'Sales'
  }
};

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'crm',
    label: 'CRM Solutions',
    description: 'Learn about our CRM and business management tools',
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    description: 'Explore our security and compliance solutions',
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    id: 'networking',
    label: 'Networking',
    description: 'Discover our networking infrastructure solutions',
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    id: 'voip',
    label: 'VoIP Services',
    description: 'Explore our enterprise VoIP solutions',
    icon: <Phone className="w-4 h-4" />
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

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showVoIPDetails, setShowVoIPDetails] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! 👋 I\'m your AI assistant. How can I help you today? Please select a service below to get started.',
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
        let aiResponseText = '';
        if (serviceId === 'voip') {
          aiResponseText = `Great! You've selected ${service.label}. Below you can see our VoIP plans and pricing options. Choose a plan to view detailed rates, or contact our Sales team for more information.`;
          setShowVoIPDetails(true);
        } else {
          aiResponseText = `Great! You've selected ${service.label}. To get more information or speak with our Sales team about ${service.label}, please use the contact options below.`;
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
    const message = `Hi! I'm interested in learning more about your services. Please assist me.`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const contact = CONTACT_INFO.sales;
    const subject = `Inquiry About Our Services`;
    const body = `Hello,\n\nI would like to learn more about your services.\n\nThank you,`;
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
        text: 'Hello! 👋 I\'m your AI assistant. How can I help you today? Please select a service below to get started.',
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
                  <h3 className="text-white font-semibold text-sm">Service Assistant</h3>
                  <p className="text-white/80 text-xs">Select a service to get started</p>
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
              <div className="border-t border-border p-3 space-y-2 bg-muted/30 max-h-48 overflow-y-auto">
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
            {showVoIPDetails && selectedService === 'voip' && (
              <div className="border-t border-border p-3 space-y-3 bg-muted/30 max-h-64 overflow-y-auto">
                <p className="text-xs font-semibold text-foreground/70 px-1">VoIP Plans:</p>
                <div className="space-y-2">
                  {VOIP_PLANS.map((plan, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`p-2 rounded-lg border transition-all ${
                        plan.highlighted
                          ? 'bg-primary/10 border-primary/50'
                          : 'bg-background border-border hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-start gap-2 flex-1">
                          <div className={`text-lg mt-0.5 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`}>
                            {plan.icon}
                          </div>
                          <div className="flex-1">
                            <p className={`text-xs font-semibold ${plan.highlighted ? 'text-primary' : 'text-foreground'}`}>
                              {plan.name}
                              {plan.highlighted && <span className="ml-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded">Recommended</span>}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-6 space-y-1 mb-2">
                        {plan.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-1.5">
                            <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-foreground/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => handleViewRates(plan.googleSheetLink)}
                        size="sm"
                        className="w-full h-7 text-xs"
                        variant={plan.highlighted ? 'default' : 'outline'}
                      >
                        View Rates
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Options */}
            <div className="border-t border-border p-3 space-y-2 bg-muted/30">
              <p className="text-xs font-semibold text-foreground/70 px-1">Contact Our Sales Team:</p>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleWhatsAppContact}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs h-8 flex items-center justify-center gap-1"
                  size="sm"
                >
                  <Phone className="w-3 h-3" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleEmailContact}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 flex items-center justify-center gap-1"
                  size="sm"
                >
                  <Mail className="w-3 h-3" />
                  Email
                </Button>
              </div>

              {/* Back Button */}
              {selectedService && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full text-xs h-8"
                  size="sm"
                >
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  Back to Services
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
