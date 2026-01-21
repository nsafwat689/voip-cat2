export interface KnowledgeItem {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['voip', 'voice over ip', 'phone system', 'business phone'],
    response: 'Our enterprise-grade VoIP solutions provide crystal-clear voice communication over the internet. We offer hosted PBX, mobile apps, and advanced features like auto-attendants and call routing. Our VoIP systems integrate seamlessly with your existing business tools. Would you like to know more about our VoIP plans or features?',
    category: 'VoIP'
  },
  {
    keywords: ['security', 'secure', 'encryption', 'srtp', 'tls'],
    response: 'We prioritize the security of your communications. Our VoIP services include end-to-end encryption using SRTP and TLS, protecting your calls from eavesdropping. We also implement robust network security measures and fraud detection. How can we help secure your business communications?',
    category: 'Security'
  },
  {
    keywords: ['network', 'internet', 'bandwidth', 'speed', 'connection'],
    response: 'A stable internet connection is key to high-quality VoIP. Our systems are optimized for low-latency performance. We recommend a dedicated VLAN for voice traffic to ensure the best call quality. What are your current network specifications?',
    category: 'Technical'
  },
  {
    keywords: ['pricing', 'cost', 'price', 'plan', 'subscription'],
    response: 'We offer flexible pricing tiers for our VoIP services. Our plans start from competitive monthly rates per user, with options for small businesses to large enterprises. We also provide custom packages for high-volume users. Would you like a personalized quote?',
    category: 'Pricing'
  },
  {
    keywords: ['setup', 'implementation', 'install', 'onboarding', 'porting'],
    response: 'Setting up our VoIP system is quick and easy. We can port your existing phone numbers and have your team up and running in days. We provide comprehensive onboarding support and training for your staff. Are you looking to switch from a traditional landline?',
    category: 'Setup'
  },
  {
    keywords: ['support', 'help', 'assistance', 'customer service', 'contact'],
    response: 'We offer 24/7/365 customer support through multiple channels including phone, email, and live chat. Our technical team is always ready to assist with any issues or configuration needs. How can our support team assist you today?',
    category: 'Support'
  },
  {
    keywords: ['integration', 'api', 'crm', 'connect', 'integrate'],
    response: 'Our VoIP platform supports extensive integrations with popular CRM and business applications. We offer pre-built connectors and a robust API for custom integrations, ensuring your communication data flows seamlessly across your tools.',
    category: 'Integration'
  },
  {
    keywords: ['compliance', '911', 'e911', 'regulation', 'standard'],
    response: 'We maintain compliance with major industry standards and provide E911 services for all our users. Our platform includes features to help you meet regulatory requirements for business communications. Do you have specific compliance needs?',
    category: 'Compliance'
  },
  {
    keywords: ['reliability', 'uptime', 'sla', 'availability'],
    response: 'We guarantee 99.9% uptime for our VoIP services, backed by a robust Service Level Agreement (SLA). Our global infrastructure is redundant and distributed across multiple data centers to ensure your business stays connected.',
    category: 'Reliability'
  },
  {
    keywords: ['training', 'learn', 'education', 'tutorial', 'guide'],
    response: 'We provide comprehensive training resources, including user guides, video tutorials, and live training sessions. We want to ensure your team can leverage all the advanced features of our VoIP system effectively.',
    category: 'Training'
  },
  {
    keywords: ['article', 'knowledge', 'blog', 'resource', 'information'],
    response: 'Our Knowledge Hub features detailed articles on VoIP technology, benefits for business, security best practices, and more. You can access these resources from the main menu to learn more about modern communication.',
    category: 'Resources'
  },
  {
    keywords: ['faq', 'question', 'answer', 'common'],
    response: 'Our FAQ section provides answers to common questions about VoIP setup, features, pricing, and technical requirements. You can search or filter by category to find the information you need quickly.',
    category: 'FAQ'
  },
  {
    keywords: ['demo', 'trial', 'free', 'test', 'try'],
    response: 'We offer personalized demos and free trials of our VoIP services. Our sales team can show you how our features can benefit your specific business workflows. Would you like to schedule a demo?',
    category: 'Sales'
  },
  {
    keywords: ['enterprise', 'large', 'scale', 'custom', 'solution'],
    response: 'We specialize in enterprise-level VoIP solutions with custom configurations, dedicated support, and scalable infrastructure. Our enterprise packages are designed for high-volume and multi-location businesses. Contact us for a custom proposal.',
    category: 'Enterprise'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
    response: 'Hello! Welcome to VOIP CAT. I\'m your AI assistant here to help answer questions about our VoIP and business communication solutions. Feel free to ask me anything, or connect directly with our team for personalized assistance.',
    category: 'Greeting'
  }
];

export function findRelevantResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword)) {
        return item.response;
      }
    }
  }
  
  // Default response if no match found
  return 'Thank you for your question! I\'m here to help with information about our VoIP and business communication solutions. If you need more specific assistance, our team is available 24/7. Would you like to connect with us for more details?';
}
