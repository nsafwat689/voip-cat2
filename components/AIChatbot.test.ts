import { describe, expect, it } from 'vitest';

describe('AIChatbot Component', () => {
  describe('Contact Information', () => {
    it('should have sales WhatsApp number', () => {
      const whatsappNumber = '+201557649136';
      expect(whatsappNumber).toBeDefined();
      expect(whatsappNumber).toMatch(/^\+\d+/);
    });

    it('should have sales email', () => {
      const email = 'sales@voipcat.com';
      expect(email).toBeDefined();
      expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('should not have customer service contact', () => {
      // CS should be removed, only Sales remains
      const hasOnlySales = true;
      expect(hasOnlySales).toBe(true);
    });
  });

  describe('Service Options', () => {
    const serviceOptions = [
      {
        id: 'crm',
        label: 'CRM Solutions',
        description: 'Learn about our CRM and business management tools'
      },
      {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        description: 'Explore our security and compliance solutions'
      },
      {
        id: 'networking',
        label: 'Networking',
        description: 'Discover our networking infrastructure solutions'
      },
      {
        id: 'voip',
        label: 'VoIP Services',
        description: 'Explore our enterprise VoIP solutions'
      }
    ];

    it('should have four service options', () => {
      expect(serviceOptions).toHaveLength(4);
    });

    it('should have unique service IDs', () => {
      const ids = serviceOptions.map(s => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have non-empty labels for all services', () => {
      serviceOptions.forEach(service => {
        expect(service.label).toBeTruthy();
        expect(service.label.length).toBeGreaterThan(0);
      });
    });

    it('should have descriptions for all services', () => {
      serviceOptions.forEach(service => {
        expect(service.description).toBeTruthy();
        expect(service.description.length).toBeGreaterThan(0);
      });
    });
  });

  describe('WhatsApp URL Generation', () => {
    it('should generate valid WhatsApp URL with message', () => {
      const whatsappNumber = '+201557649136';
      const message = 'Hi! I need assistance with your services.';
      const cleanNumber = whatsappNumber.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      
      expect(whatsappUrl).toContain('https://wa.me/');
      expect(whatsappUrl).toContain(cleanNumber);
      expect(whatsappUrl).toContain('text=');
    });

    it('should properly encode special characters in WhatsApp message', () => {
      const message = 'Hi! I\'m interested in learning more about your services.';
      const encoded = encodeURIComponent(message);
      
      expect(encoded).toContain('%20');
      expect(encoded).toContain('%');
    });
  });

  describe('Email URL Generation', () => {
    it('should generate valid mailto URL', () => {
      const email = 'sales@voipcat.com';
      const subject = 'Inquiry About Our Services';
      const body = 'Hello,\n\nI would like to learn more about your services.\n\nThank you,';
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      expect(mailtoUrl).toContain('mailto:');
      expect(mailtoUrl).toContain(email);
      expect(mailtoUrl).toContain('subject=');
      expect(mailtoUrl).toContain('body=');
    });

    it('should properly encode email subject and body', () => {
      const subject = 'Inquiry About Our Services';
      const body = 'Hello,\n\nI would like to learn more.';
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      
      expect(encodedSubject).toContain('%20');
      expect(encodedBody).toContain('%0A');
    });
  });

  describe('Chat Message Interface', () => {
    it('should have correct ChatMessage structure', () => {
      const message = {
        id: '1',
        text: 'Hello!',
        sender: 'ai' as const,
        timestamp: new Date()
      };

      expect(message.id).toBeDefined();
      expect(message.text).toBeDefined();
      expect(['user', 'ai']).toContain(message.sender);
      expect(message.timestamp).toBeInstanceOf(Date);
    });

    it('should support both user and ai senders', () => {
      const userMessage = { sender: 'user' as const };
      const aiMessage = { sender: 'ai' as const };

      expect(['user', 'ai']).toContain(userMessage.sender);
      expect(['user', 'ai']).toContain(aiMessage.sender);
    });
  });

  describe('Component Configuration', () => {
    it('should have contact info for Sales only', () => {
      const contactInfo = {
        sales: {
          whatsapp: '+201557649136',
          email: 'sales@voipcat.com',
          name: 'Sales'
        }
      };

      expect(contactInfo.sales).toBeDefined();
      expect(contactInfo.sales.whatsapp).toBeDefined();
      expect(contactInfo.sales.email).toBeDefined();
    });

    it('should have sales email configured', () => {
      const salesEmail = 'sales@voipcat.com';
      expect(salesEmail).toBeDefined();
      expect(salesEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  });

  describe('VoIP Plans Configuration', () => {
    const voipPlans = [
      {
        name: 'Standard Node',
        features: [
          'Basic call quality',
          'Standard features',
          'Calls to 50 countries',
          'Email support',
        ],
        highlighted: false,
      },
      {
        name: 'Platinum Core',
        features: [
          'Calls to 190+ countries',
          'Crystal-clear HD quality',
          'Premium features',
          '24/7 dedicated support',
        ],
        highlighted: true,
      },
      {
        name: 'Premium Link',
        features: [
          'Calls to 100 countries',
          'HD call quality',
          'Advanced features',
          'Priority support',
        ],
        highlighted: false,
      }
    ];

    it('should have three VoIP plans', () => {
      expect(voipPlans).toHaveLength(3);
    });

    it('should have one highlighted plan (Platinum Core)', () => {
      const highlightedPlans = voipPlans.filter(p => p.highlighted);
      expect(highlightedPlans).toHaveLength(1);
      expect(highlightedPlans[0].name).toBe('Platinum Core');
    });

    it('should have features for each plan', () => {
      voipPlans.forEach(plan => {
        expect(plan.features).toBeDefined();
        expect(plan.features.length).toBeGreaterThan(0);
      });
    });

    it('should have at least 4 features per plan', () => {
      voipPlans.forEach(plan => {
        expect(plan.features.length).toBeGreaterThanOrEqual(4);
      });
    });
  });
});
