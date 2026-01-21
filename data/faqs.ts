export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-voip",
    question: "What is VoIP and how does it work?",
    answer: "VoIP stands for Voice over Internet Protocol. It's a technology that allows you to make voice calls using a broadband internet connection instead of a regular (analog) phone line. It works by converting your voice into digital data packets and sending them over the internet to the person you're calling.",
    category: "General"
  },
  {
    id: "voip-equipment",
    question: "What equipment do I need for VoIP?",
    answer: "At a minimum, you need a reliable internet connection. To make calls, you can use a specialized VoIP phone (IP phone), a traditional phone with an Analog Telephone Adapter (ATA), or simply a computer or smartphone with a VoIP app (softphone).",
    category: "Setup"
  },
  {
    id: "internet-speed",
    question: "How much internet speed do I need for VoIP?",
    answer: "VoIP doesn't require a lot of bandwidth. A single high-quality voice call typically uses about 100 Kbps (0.1 Mbps) of upload and download speed. However, for a smooth experience with multiple users and other internet activities, a stable broadband connection is recommended.",
    category: "Technical"
  },
  {
    id: "keep-number",
    question: "Can I keep my existing phone number?",
    answer: "Yes, in most cases you can 'port' your existing phone number to a VoIP provider. This process usually takes a few days to a couple of weeks, depending on your current carrier.",
    category: "General"
  },
  {
    id: "voip-reliability",
    question: "Is VoIP as reliable as a traditional landline?",
    answer: "Modern VoIP is extremely reliable, often matching or exceeding the reliability of landlines. However, because it depends on your internet connection and power, it's important to have a backup plan, such as a mobile app or a battery backup (UPS) for your internet equipment.",
    category: "Technical"
  },
  {
    id: "emergency-calls",
    question: "Does VoIP work with emergency services (911)?",
    answer: "Yes, most VoIP providers offer E911 (Enhanced 911) services. Because VoIP isn't tied to a physical location, you must provide your address to your provider so emergency services know where to go if you call.",
    category: "Security"
  },
  {
    id: "voip-security",
    question: "Is VoIP secure?",
    answer: "VoIP can be very secure if properly configured. Reputable providers use encryption (like SRTP and TLS) to protect your calls from eavesdropping. Following best practices like using strong passwords and securing your office network further enhances security.",
    category: "Security"
  },
  {
    id: "international-calls",
    question: "Can I make international calls with VoIP?",
    answer: "Absolutely. One of the biggest advantages of VoIP is significantly lower rates for international calls compared to traditional carriers. Many providers also offer unlimited international calling plans to specific countries.",
    category: "General"
  },
  {
    id: "fax-over-voip",
    question: "Can I still use my fax machine with VoIP?",
    answer: "Yes, you can use a fax machine with VoIP by using an Analog Telephone Adapter (ATA) that supports the T.38 protocol. Alternatively, many VoIP providers offer 'e-fax' services that allow you to send and receive faxes via email.",
    category: "Technical"
  },
  {
    id: "voip-features",
    question: "What features are included with business VoIP?",
    answer: "Business VoIP typically includes a wide range of features such as auto-attendants, call routing, voicemail-to-email, call recording, video conferencing, and integration with CRM systems—often at no additional cost.",
    category: "General"
  }
];
