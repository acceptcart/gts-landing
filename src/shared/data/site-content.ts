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
  name: "GTS",
  legalName: "Gold Tech Store Co. for Wholesale & Retail Trade",
  domain: "gts.kw",
  description:
    "GTS is Kuwait’s trusted B2B source for smartphones, electronics, accessories, and integrated supply solutions.",
  copyright:
    "© Gold Tech Store Co. for Wholesale & Retail Trade — 2023–2026. All rights reserved.",
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
  headlines: [
    "The Backbone of Electronics Distribution",
    "Powering Businesses with Reliable Supply",
    "Your Trusted Electronics Supply Partner",
    "Connect. Supply. Scale.",
  ],
  supporting: "Consistent Stock. Competitive Pricing. Fast Delivery.",
  primaryCta: "Get in Touch",
  secondaryCta: "Learn More",
  scroll: "Scroll to explore",
} as const;

export const about = {
  eyebrow: "Built for business",
  title: "Reliable technology supply, from source to shelf.",
  body:
    "GTS is a specialized company importing and supplying electronic devices, smartphones, and accessories to the business sector in Kuwait. We supply stores, distributors, retail chains, e-commerce platforms, corporations, and government entities with reliable products at competitive prices — backed by professional service and clear warranty and after-sales policies. GTS relies on a network of global suppliers and long-term strategic relationships to ensure the latest technology products, delivered to the highest standards of quality and operational efficiency.",
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
  eyebrow: "The GTS ecosystem",
  title: "More than distribution.",
  intro:
    "At GTS, we don't offer isolated services — we provide a fully integrated ecosystem of supply solutions and professional support, combining the strength of our supply chain with operational efficiency to empower our partners to grow with confidence and sustainability.",
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
  eyebrow: "Why GTS",
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
    "Strengthen GTS's position in the Kuwaiti market.",
    "Expand our customer and partner base.",
    "Develop our global supply network.",
    "Raise customer satisfaction levels.",
    "Enhance operational efficiency.",
    "Expand into Gulf markets.",
    "Build long-term strategic partnerships.",
  ],
} as const;

export const founder = {
  eyebrow: "Leadership",
  title: "Meet the Founder",
  name: "Mahmoud Heshmat",
  role: "Founder & CEO",
  intro:
    "Building a trusted electronics supply platform around strong partnerships, operational discipline, and long-term value.",
  quote: "Trust is the foundation. Reliable supply is the promise.",
  imageAlt: "Mahmoud Heshmat, Founder and CEO of GTS",
} as const;

export const partners = {
  eyebrow: "Our partners",
  title: "Connected to a world of supply.",
  intro:
    "GTS takes pride in building strategic relationships with a network of local and international suppliers and partners, ensuring supply continuity and added value for our clients.",
  label: "Trusted by leading global and local suppliers",
  placeholders: ["GLOBAL / 01", "MOBILE / 02", "TECH / 03", "SUPPLY / 04", "NETWORK / 05", "LOGISTICS / 06"],
} as const;

export const callToAction = {
  eyebrow: "Let’s move business forward",
  title: "Ready to grow your electronics business?",
  description: "Talk to our team about sourcing, distribution, tenders, and long-term supply partnerships.",
  button: "Start a Conversation",
} as const;

export const contact = {
  eyebrow: "Contact GTS",
  title: "Let’s Power Your Business Together.",
  intro: "Tell us what your business needs. Our team will get back to you with the right supply solution.",
  formTitle: "Send an inquiry",
  infoTitle: "Connect with our team",
  phone: { label: "Phone", value: "+965 5000 7972", href: "tel:+96550007972" },
  whatsapp: { label: "WhatsApp", value: "+965 9896 7713", href: "https://wa.me/96598967713" },
  email: { label: "Email", value: "ERP@Gtsq8.com", href: "mailto:ERP@Gtsq8.com" },
  website: { label: "Website", value: "gts.kw", href: "https://gts.kw" },
  linkedin: { label: "LinkedIn", value: "GTS Kuwait", href: "https://www.linkedin.com/company/gtsq8" },
  address: { label: "Address", value: "Nora Commercial Complex, Abdullah Al Othman St., Hawally, Kuwait" },
  mapTitle: "GTS location in Hawally, Kuwait",
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
  title: "Terms & Conditions",
  updated: "Template prepared for review — July 2026",
  disclaimer:
    "This is a template and should be reviewed by legal counsel before publishing.",
  intro:
    "These Terms & Conditions govern your use of the GTS website and outline the general commercial framework that may apply to inquiries and business transactions with Gold Tech Store Co. for Wholesale & Retail Trade.",
  sections: [
    { title: "1. General Use of Website", paragraphs: ["This website is provided for general business information and inquiry purposes. By accessing it, you agree to use it lawfully and not to disrupt, damage, or misuse any website service, content, or security feature. Information presented on this website does not constitute a binding offer unless expressly confirmed by GTS in writing.", "You are responsible for ensuring that information supplied through forms or other communications is accurate, current, and authorized on behalf of the business or entity you represent."] },
    { title: "2. Products & Availability", paragraphs: ["Product descriptions, specifications, images, and availability are indicative and may change without notice due to manufacturer updates, market conditions, or supplier availability. GTS may substitute or discontinue products and will communicate material changes before confirming an order.", "Availability is not guaranteed until GTS issues a written order confirmation or executes an applicable supply agreement."] },
    { title: "3. Pricing & Quotations", paragraphs: ["All prices are subject to written quotation and may vary based on quantity, specifications, currency movements, freight, duties, and market conditions. Unless stated otherwise, a quotation is valid only for the period specified and excludes taxes, delivery, installation, and other third-party charges.", "Pricing displayed or discussed informally is non-binding. Only an authorized written quotation or contract issued by GTS establishes applicable commercial terms."] },
    { title: "4. Orders & Payment Terms", paragraphs: ["Orders become binding only after written acceptance by GTS. Payment schedules, credit limits, deposits, accepted payment methods, and any security requirements will be set out in the relevant quotation, purchase order acceptance, or supply agreement.", "Late or incomplete payment may result in suspension of fulfillment, cancellation, recovery costs, or other remedies permitted by contract and applicable law."] },
    { title: "5. Delivery & Shipping", paragraphs: ["Delivery dates are estimates unless expressly guaranteed in writing. GTS will use commercially reasonable efforts to meet agreed schedules but is not responsible for delays caused by customs, carriers, suppliers, force majeure events, or circumstances beyond its reasonable control.", "Risk, title, inspection periods, shipping charges, and delivery acceptance will be governed by the applicable quotation or contract. Customers must promptly report visible shortages or transport damage."] },
    { title: "6. Warranty & After-Sales Policy", paragraphs: ["Warranty coverage varies by product, manufacturer, territory, and agreed commercial terms. Warranty support is subject to proof of purchase, serial-number verification, proper use, and compliance with applicable manufacturer or GTS procedures.", "Warranty does not normally cover accidental damage, misuse, unauthorized repair, altered serial numbers, improper storage, or ordinary wear. Specific service levels will be confirmed in the transaction documents."] },
    { title: "7. Returns & Exchanges", paragraphs: ["Returns or exchanges require prior written authorization and are subject to the agreed return window, product condition, packaging, serial-number verification, and restocking or logistics charges where applicable. Customized, activated, clearance, or specially sourced products may be non-returnable.", "No product should be returned until GTS provides instructions and a return authorization reference."] },
    { title: "8. Intellectual Property", paragraphs: ["The website, brand marks, designs, text, graphics, and other content are owned by or licensed to GTS and are protected by applicable intellectual property laws. No content may be reproduced, modified, distributed, or used commercially without prior written permission.", "Third-party brand names and trademarks remain the property of their respective owners and are used for identification only."] },
    { title: "9. Limitation of Liability", paragraphs: ["To the fullest extent permitted by law, GTS will not be liable for indirect, incidental, special, or consequential loss arising from website use, delayed availability, or reliance on non-binding information. Any transaction-specific liability will be governed by the applicable written agreement.", "Nothing in these terms excludes liability that cannot lawfully be excluded under the laws of the State of Kuwait."] },
    { title: "10. Governing Law", paragraphs: ["These Terms & Conditions are governed by the laws of the State of Kuwait. Subject to any agreed dispute-resolution procedure, the competent courts of Kuwait will have jurisdiction over disputes arising from these terms or use of this website."] },
    { title: "11. Changes to Terms", paragraphs: ["GTS may update these Terms & Conditions from time to time. The version posted on this page applies from its stated effective date. Continued website use after an update constitutes acceptance of the revised terms."] },
    { title: "12. Contact Information", paragraphs: ["Questions about these terms may be directed to ERP@Gtsq8.com or to GTS at Nora Commercial Complex, Abdullah Al Othman St., Hawally, Kuwait."] },
  ],
} as const;

export const footer = {
  tagline: "The backbone of electronics distribution.",
  navigationTitle: "Navigate",
  contactTitle: "Contact",
  legal: "Terms & Conditions",
  backToTop: "Back to top",
  developedBy: {
    prefix: "Developed by",
    name: "Quantum Software",
    href: "https://quantumsw.tech",
  },
} as const;

export type IconComponent = typeof Users;
