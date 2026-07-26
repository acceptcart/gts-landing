import {
  BadgeCheck,
  Boxes,
  Building2,
  Cable,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock3,
  Cpu,
  Earth,
  Headphones,
  HeartHandshake,
  Landmark,
  Lightbulb,
  PackageCheck,
  PackageOpen,
  RefreshCw,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Tablet,
  Truck,
  Users,
  Warehouse,
  Wifi,
} from "lucide-react";

export const company = {
  name: "Gts",
  legalName: "Gold Tech Store Co. for Wholesale & Retail Trade",
  legalNameAr: "شركة جولد تيك ستور لتجارة الجملة والتجزئة",
  domain: "gts.kw",
  description:
    "Gts is Kuwait’s trusted B2B source for smartphones, electronics, accessories, and integrated supply solutions.",
  copyrightYears: "2023 - 2026. All rights reserved.",
} as const;

export const navigation = {
  links: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Sectors", href: "/#sectors" },
    { label: "Contact", href: "/contact-us" },
  ],
  cta: "Contact Us",
  menuOpen: "Open navigation menu",
  menuClose: "Close navigation menu",
  skip: "Skip to content",
} as const;

export const hero = {
  eyebrow: "Kuwait’s B2B Electronics Supply Partner",
  headlines: ["Grow Your Business. We Handle the Supply"],
  supporting: "Consistent Stock. Competitive Pricing. Fast Delivery.",
  primaryCta: "Get in Touch",
  secondaryCta: "Learn More",
  scroll: "Scroll to explore",
} as const;

export const about = {
  eyebrow: "Built for business",
  title: "Reliable technology supply, from source to shelf.",
  body:
    "Gts is a specialized company importing and supplying electronic devices, smartphones, and accessories to the business sector in Kuwait. We supply stores, distributors, retail chains, e-commerce platforms, corporations, and government entities with reliable products at competitive prices — backed by professional service and clear warranty and after-sales policies. Gts relies on a network of global suppliers and long-term strategic relationships to ensure the latest technology products, delivered to the highest standards of quality and operational efficiency.",
  features: [
    { title: "Kuwait Market", label: "Established local presence", icon: Landmark },
    { title: "Global Network", label: "Trusted supplier relationships", icon: Earth },
    { title: "B2B Ready", label: "Corporate & government supply", icon: Building2 },
  ],
} as const;

export const visionMission = {
  eyebrow: "Direction with purpose",
  title: "A clear vision. A practical mission.",
  vision: {
    title: "Our Vision",
    description:
      "To become the trusted electronics and smartphone provider for the business sector in Kuwait and the Gulf region, by building sustainable partnerships and delivering the latest technological innovations.",
    icon: Rocket,
  },
  mission: {
    title: "Our Mission",
    description:
      "To empower our partners with efficient, reliable access to the latest electronic devices — through an effective supply chain, long-term strategic partnerships, and professional service that delivers sustainable value to all parties.",
    icon: ChartNoAxesCombined,
  },
} as const;

export const values = {
  eyebrow: "How we operate",
  title: "Values that power every partnership.",
  items: [
    { title: "Integrity", description: "Commitment to transparency and credibility in all dealings.", icon: ShieldCheck },
    { title: "Quality", description: "Delivering products and services that meet the highest quality standards.", icon: BadgeCheck },
    { title: "Innovation", description: "Adopting modern solutions and technologies to enhance efficiency.", icon: Lightbulb },
    { title: "Partnership", description: "Building long-term relationships based on trust and shared success.", icon: HeartHandshake },
    { title: "Service Excellence", description: "Providing a professional experience and continuous partner support.", icon: Sparkles },
    { title: "Flexibility", description: "Responding quickly to market changes and customer needs.", icon: RefreshCw },
  ],
} as const;

export const offers = {
  eyebrow: "What we offer",
  title: "End-to-end supply capability.",
  items: [
    { title: "Import & Supply of Electronics", description: "Sourcing smartphones, electronic devices, and accessories from trusted global suppliers.", icon: PackageOpen },
    { title: "Wholesale & Distribution", description: "Flexible supply solutions for stores, distributors, and retail chains.", icon: Warehouse },
    { title: "Corporate & Institutional Supply Contracts", description: "Tailored supply solutions for companies and government entities.", icon: Building2 },
    { title: "Latest Tech Products", description: "Early access to the newest devices and technology releases before wide market availability.", icon: Cpu },
    { title: "Tender Management & Execution", description: "Participating in government and private tenders with fully integrated supply solutions.", icon: Scale },
    { title: "Warranty & After-Sales Services", description: "Professional support that ensures business continuity and partner satisfaction.", icon: Headphones },
  ],
} as const;

export const services = {
  eyebrow: "The Gts ecosystem",
  title: "More than distribution.",
  intro:
    "At Gts, we don't offer isolated services — we provide a fully integrated ecosystem of supply solutions and professional support, combining the strength of our supply chain with operational efficiency to empower our partners to grow with confidence and sustainability.",
  items: [
    { title: "Electronics Import & Supply", description: "We source electronic devices, smartphones, and accessories from certified global suppliers and brands, ensuring product quality and supply continuity.", icon: PackageCheck },
    { title: "Latest Products & Technologies", description: "We give our partners early access to the newest devices and technology releases, strengthening their competitive edge and ability to meet evolving customer demands.", icon: Cpu },
    { title: "Distribution & Wholesale Solutions", description: "Flexible distribution solutions for stores, distributors, retail chains, and e-commerce platforms, with competitive pricing and quantities suited to every business need.", icon: Boxes },
    { title: "Corporate & Institutional Supply Contracts", description: "Long-term supply contracts for companies and government entities, ensuring stable supply and continuous fulfillment of operational needs.", icon: Building2 },
    { title: "Logistics & Supply Chain Solutions", description: "We manage storage, shipping, and distribution operations with high efficiency, ensuring products arrive on time while maintaining the highest standards of quality and reliability.", icon: Truck },
    { title: "Tenders & Government Supply Solutions", description: "We execute government and private supply projects and tenders through integrated solutions that meet technical and commercial requirements at the highest efficiency levels.", icon: Landmark },
    { title: "After-Sales Services", description: "We support our clients with warranty and technical support services under clear policies, ensuring uninterrupted business continuity for our partners.", icon: Headphones },
    { title: "Business Support for Partners", description: "We provide our partners with business consultations and partnership programs designed to help grow their business.", icon: ChartNoAxesCombined },
  ],
} as const;

export const products = {
  eyebrow: "Product categories",
  title: "Technology for every market need.",
  items: [
    { title: "Smartphones", description: "The latest smartphones from leading global brands.", icon: Smartphone },
    { title: "Tablets", description: "Diverse solutions for business and commercial use.", icon: Tablet },
    { title: "Consumer Electronics", description: "Tech products that meet a wide range of market needs.", icon: Wifi },
    { title: "Accessories", description: "High-quality supporting accessories and peripherals.", icon: Cable },
    { title: "Smart Devices & Modern Tech", description: "Innovative products that keep pace with global developments.", icon: Cpu },
  ],
} as const;

export const sectors = {
  eyebrow: "Sectors we serve",
  title: "Built for the full B2B landscape.",
  items: [
    { title: "Electronics Stores", icon: Store },
    { title: "Local Distributors", icon: Warehouse },
    { title: "Retail Chains", icon: ShoppingBag },
    { title: "E-commerce Platforms", icon: ShoppingCart },
    { title: "Telecom Companies", icon: Wifi },
    { title: "Government Entities & Major Institutions", icon: Landmark },
  ],
} as const;

export const differentiators = {
  eyebrow: "Why Gts",
  title: "A supply partner engineered for momentum.",
  items: [
    { title: "Global Supplier Network", detail: "Connected sourcing", icon: Earth },
    { title: "Fast Delivery", detail: "Responsive fulfillment", icon: Clock3 },
    { title: "Competitive Pricing", detail: "Commercial advantage", icon: CircleDollarSign },
    { title: "Dedicated Support", detail: "Partner-first service", icon: Headphones },
  ],
} as const;

export const goals = {
  eyebrow: "Strategic goals",
  title: "Growing with intention.",
  items: [
    "Strengthen Gts's position in the Kuwaiti market.",
    "Expand our customer and partner base.",
    "Develop our global supply network.",
    "Raise customer satisfaction levels.",
    "Enhance operational efficiency.",
    "Expand into Gulf markets.",
    "Build long-term strategic partnerships.",
  ],
} as const;

export const partners = {
  eyebrow: "Our partners",
  title: "Connected to a world of supply.",
  intro:
    "Gts takes pride in building strategic relationships with a network of local and international suppliers and partners, ensuring supply continuity and added value for our clients.",
  label: "Trusted by leading global and local suppliers",
  placeholders: ["GLOBAL", "MOBILE", "TECH", "SUPPLY", "NETWORK", "LOGISTICS"],
} as const;

export const callToAction = {
  eyebrow: "Let’s move business forward",
  title: "Ready to grow your electronics business?",
  description: "Talk to our team about sourcing, distribution, tenders, and long-term supply partnerships.",
  button: "Start a Conversation",
} as const;

export const contact = {
  eyebrow: "Contact Gts",
  title: "Let’s Power Your Business Together.",
  intro: "Tell us what your business needs. Our team will get back to you with the right supply solution.",
  formTitle: "Send an inquiry",
  infoTitle: "Connect with our team",
  phone: { label: "Phone", value: "+965 5000 7972", href: "tel:+96550007972" },
  whatsapp: { label: "WhatsApp", value: "+965 9896 7713", href: "https://wa.me/96598967713" },
  email: { label: "Email", value: "ERP@Gtsq8.com", href: "mailto:ERP@Gtsq8.com" },
  linkedin: { label: "LinkedIn", value: "Gts Kuwait", href: "https://www.linkedin.com/company/gtsq8" },
  address: { label: "Address", value: "Nora Commercial Complex, Abdullah Al Othman St., Hawally, Kuwait" },
  mapTitle: "Gts location in Hawally, Kuwait",
  fields: {
    name: "Name",
    company: "Company Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
  },
  placeholders: {
    name: "Your full name",
    company: "Your company",
    email: "you@company.com",
    phone: "+965",
    subject: "How can we help?",
    message: "Tell us about your supply requirements...",
  },
  submit: "Send Inquiry",
  submitting: "Sending...",
  successTitle: "Inquiry received.",
  successMessage: "Thank you. Our team will contact you shortly.",
  sendAnother: "Send another inquiry",
  requiredError: "Please complete all required fields.",
  emailError: "Please enter a valid email address.",
} as const;

export const terms = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "Template prepared for review — July 2026",
  disclaimer:
    "This is a template and should be reviewed by legal counsel before publishing.",
  intro:
    "This Privacy Policy explains how Gts (Gold Tech Store Co. for Wholesale & Retail Trade) collects, uses, stores, and protects personal and business information when you visit our website or contact us about supply and partnership inquiries.",
  sections: [
    {
      title: "1. Information We Collect",
      paragraphs: [
        "We may collect personal and business details that you voluntarily provide through our contact forms or communications, including your name, company name, email address, phone number, subject, and message content.",
        "We may also collect limited technical information automatically, such as browser type, device information, IP address, and general usage data that helps us understand how visitors interact with our website.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      paragraphs: [
        "We use collected information to respond to inquiries, provide business support, manage partnership and supply discussions, improve website performance, and communicate relevant updates related to our services.",
        "We do not sell personal information. Information is processed only for legitimate business purposes related to Gts operations and customer communication.",
      ],
    },
    {
      title: "3. Legal Basis for Processing",
      paragraphs: [
        "Where applicable, we process information based on your consent, our legitimate interest in operating a B2B electronics distribution business, and the need to respond to commercial inquiries or pre-contractual requests.",
      ],
    },
    {
      title: "4. Cookies & Website Analytics",
      paragraphs: [
        "Our website may use cookies or similar technologies to support essential functionality, remember preferences, and analyze traffic in aggregate form.",
        "You can control cookies through your browser settings. Disabling certain cookies may affect website performance or features.",
      ],
    },
    {
      title: "5. Data Sharing",
      paragraphs: [
        "We may share information with trusted service providers who support website hosting, communications, IT, or business operations, only as needed to deliver those services.",
        "We may also disclose information when required by applicable law, regulation, legal process, or to protect the rights, safety, and integrity of Gts, our partners, or users.",
      ],
    },
    {
      title: "6. Data Retention",
      paragraphs: [
        "We retain personal and business information only for as long as reasonably necessary to fulfill the purpose for which it was collected, respond to follow-up inquiries, meet legal or accounting requirements, or resolve disputes.",
      ],
    },
    {
      title: "7. Data Security",
      paragraphs: [
        "We apply reasonable administrative and technical measures to protect information against unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and absolute security cannot be guaranteed.",
      ],
    },
    {
      title: "8. Your Rights",
      paragraphs: [
        "Subject to applicable Kuwaiti law, you may request access to, correction of, or deletion of personal information we hold about you, or ask us to limit certain processing activities.",
        "To exercise these rights, contact us using the details below. We may need to verify your identity before responding to a request.",
      ],
    },
    {
      title: "9. Third-Party Links",
      paragraphs: [
        "Our website may include links to third-party platforms such as LinkedIn or messaging services. We are not responsible for the privacy practices or content of external websites and services.",
      ],
    },
    {
      title: "10. International Transfers",
      paragraphs: [
        "If information is transferred or processed outside Kuwait in connection with service providers or communication tools, we take reasonable steps to ensure appropriate safeguards are applied where required.",
      ],
    },
    {
      title: "11. Changes to This Policy",
      paragraphs: [
        "Gts may update this Privacy Policy from time to time. The version published on this page applies from its stated update date. Continued use of the website after changes means you acknowledge the updated policy.",
      ],
    },
    {
      title: "12. Contact Information",
      paragraphs: [
        "For privacy-related questions or requests, contact Gts at ERP@Gtsq8.com or Nora Commercial Complex, Abdullah Al Othman St., Hawally, Kuwait.",
      ],
    },
  ],
} as const;

export const footer = {
  tagline: "The backbone of electronics distribution.",
  navigationTitle: "Navigate",
  contactTitle: "Contact",
  legal: "Privacy Policy",
  backToTop: "Back to top",
} as const;

export type IconComponent = typeof Users;
