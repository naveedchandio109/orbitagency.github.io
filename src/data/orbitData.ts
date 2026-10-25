export type FilterCategory =
  | 'All'
  | 'Mobile Apps'
  | 'AI and Automation'
  | 'Web and E-Commerce'
  | 'Project Management';

export const FILTER_TAGS: FilterCategory[] = [
  'All',
  'Mobile Apps',
  'AI and Automation',
  'Web and E-Commerce',
  'Project Management',
];

export interface DrawerLink {
  id: string;
  label: string;
  href: string;
  sectionCode: string;
}

export const SIDE_DRAWER_LINKS: DrawerLink[] = [
  { id: 'nav-home', label: 'Home', href: '#home', sectionCode: '01' },
  { id: 'nav-intro', label: 'Custom Introduction', href: '#custom-introduction', sectionCode: '02' },
  { id: 'nav-search', label: 'Search Services', href: '#search-services', sectionCode: '03' },
  { id: 'nav-solutions', label: 'Our 4 Core Solutions', href: '#core-solutions', sectionCode: '04' },
  { id: 'nav-portfolio', label: 'Portfolio Showcase', href: '#portfolio-showcase', sectionCode: '05' },
  { id: 'nav-apify', label: 'Live Apify & AI Endpoint', href: '#apify-ai-endpoint', sectionCode: '06' },
  { id: 'nav-timeline', label: 'Flexible Timeline Policy', href: '#timeline-policy', sectionCode: '07' },
  { id: 'nav-leadership', label: 'Executive Leadership (Naveed Ali)', href: '#executive-leadership', sectionCode: '08' },
  { id: 'nav-start', label: 'Start a Project', href: '#start-project', sectionCode: '09' },
];

export interface PortfolioHighlight {
  name: string;
  sector: string;
  outcomeMetric: string;
  architecture: string;
}

export interface CoreServiceCard {
  id: string;
  indexNumber: string;
  title: string;
  category: Exclude<FilterCategory, 'All'>;
  accentColor: 'cyan' | 'purple' | 'pink' | 'green';
  description: string;
  deliverables: string[];
  prototypeSla: string;
  keywords: string[];
  portfolioHighlights: PortfolioHighlight[];
  visualType: 'mobile' | 'ai' | 'web' | 'management';
}

export const CORE_SERVICES: CoreServiceCard[] = [
  {
    id: 'service-mobile-apps',
    indexNumber: '01',
    title: 'iOS and Android Mobile App Development',
    category: 'Mobile Apps',
    accentColor: 'cyan',
    description:
      'High-performance native and cross-platform mobile applications with smooth UI, secure authentication, real-time databases, and App Store / Play Store deployment.',
    deliverables: [
      'SwiftUI, Kotlin & React Native Architecture',
      'Biometric OAuth2 & End-to-End Encrypted Auth',
      'Low-Latency Real-Time Sync & Offline Persistence',
      'Full Apple App Store & Google Play Store Compliance',
    ],
    prototypeSla: '24-Hour Interactive UI Prototype for Core Screens',
    keywords: [
      'ios app',
      'android',
      'mobile apps',
      'react native',
      'flutter',
      'swift',
      'kotlin',
      'app store',
      'play store',
      'biometric',
      'fintech mobile',
    ],
    portfolioHighlights: [
      {
        name: 'AetherPay Institutional Wallet',
        sector: 'FinTech & Digital Banking',
        outcomeMetric: '99.98% Crash-Free Across 180K+ Active Devices',
        architecture: 'SwiftUI · Kotlin Multiplatform · WebSockets',
      },
      {
        name: 'PulseCare Telemedicine Suite',
        sector: 'Digital Health & Diagnostics',
        outcomeMetric: '-42% Patient Triage Latency in 4 Months',
        architecture: 'React Native · WebRTC Video · HIPAA Vault',
      },
    ],
    visualType: 'mobile',
  },
  {
    id: 'service-ai-automation',
    indexNumber: '02',
    title: 'Custom AI Tools and Automation',
    category: 'AI and Automation',
    accentColor: 'purple',
    description:
      'Next-generation AI SaaS wrappers, custom LLM chatbots, Apify automation workflows, voice and image AI generators, and automated business workflows that save time and multiply revenue.',
    deliverables: [
      'Custom Multi-Agent LLM Orchestration & RAG Pipelines',
      'Apify Actor Integrations & Automated Web Intelligence',
      'Enterprise AI SaaS Wrappers with Usage Billing',
      'Real-Time Voice Synthesis & Autonomous CRM Workflows',
    ],
    prototypeSla: '24-Hour Functional Agent or Apify Pipeline Proof',
    keywords: [
      'ai tools',
      'automation',
      'apify',
      'apify automation',
      'llm',
      'chatbot',
      'rag',
      'voice ai',
      'image generator',
      'saas wrapper',
      'agentic workflow',
      'openai',
      'gemini',
    ],
    portfolioHighlights: [
      {
        name: 'LexiCore Autonomous Legal Analyst',
        sector: 'Enterprise LegalTech AI',
        outcomeMetric: '14,200 Hours Saved Annually Across 12 Law Firms',
        architecture: 'Vector RAG · Apify Pipelines · Multi-Model Routing',
      },
      {
        name: 'VoxFlow Multimodal Voice Concierge',
        sector: 'Hospitality & High-Ticket Sales',
        outcomeMetric: '+68% Inbound Lead Qualification Conversion',
        architecture: 'Sub-300ms Streaming Audio · CRM Webhook Engine',
      },
    ],
    visualType: 'ai',
  },
  {
    id: 'service-web-ecommerce',
    indexNumber: '03',
    title: 'Web and E-Commerce Platforms',
    category: 'Web and E-Commerce',
    accentColor: 'pink',
    description:
      'Ultra-fast SaaS web applications, custom online storefronts, payment gateway integrations (Stripe and global payouts), and high-converting landing pages.',
    deliverables: [
      'Next.js & React High-Frequency SaaS Web Platforms',
      'Headless Luxury Storefronts with Sub-Second Loads',
      'Stripe Connect, Multi-Currency & Global Payout Splits',
      'Conversion-Engineered Product Launch Architectures',
    ],
    prototypeSla: '24-Hour Live Staging Preview for Landing Scopes',
    keywords: [
      'web',
      'e-commerce',
      'ecommerce',
      'stripe',
      'saas',
      'storefront',
      'payment gateway',
      'global payouts',
      'landing page',
      'nextjs',
      'react',
    ],
    portfolioHighlights: [
      {
        name: 'Vanguard Chrono Direct-to-Collector',
        sector: 'Luxury Horology & Commerce',
        outcomeMetric: '+144% Checkout Completion & $4.8M GMV Run-Rate',
        architecture: 'Next.js Edge · Stripe Multi-Currency · 99 Lighthouse',
      },
      {
        name: 'MetricScale B2B Revenue Cloud',
        sector: 'Enterprise SaaS Analytics',
        outcomeMetric: 'Sub-80ms Query Render for 10M+ Event Rows',
        architecture: 'TypeScript · Edge Caching · Automated Billing',
      },
    ],
    visualType: 'web',
  },
  {
    id: 'service-agile-management',
    indexNumber: '04',
    title: 'Agile Project and Team Management',
    category: 'Project Management',
    accentColor: 'green',
    description:
      'Complete end-to-end software management. We provide a 24-hour quick response and basic prototype start for small features, while larger custom projects are planned with flexible timelines tailored to your exact project scope.',
    deliverables: [
      '24-Hour Executive Scope Audit & Prototype Kickoff',
      'Dedicated Architecture, UI/UX, Dev & QA Roster',
      'Milestone-Locked Escrow & Transparent Sprint Demos',
      'Flexible Timeline Governance Scaled to Project Complexity',
    ],
    prototypeSla: '24-Hour Executive Response & Sprint Blueprint',
    keywords: [
      'management',
      'agile',
      'project management',
      'team management',
      'prototype',
      '24-hour',
      'timeline',
      'milestone',
      'qa',
      'architecture',
      'scrum',
    ],
    portfolioHighlights: [
      {
        name: 'Helios Cloud Migration & Rescue',
        sector: 'Global Logistics Infrastructure',
        outcomeMetric: 'Delivered 3 Weeks Ahead of Schedule with Zero Downtime',
        architecture: '14-Milestone Governance · Automated CI/CD · QA Matrix',
      },
      {
        name: 'NovaVentures Multi-Product Studio Build',
        sector: 'Venture-Backed SaaS Portfolio',
        outcomeMetric: '3 Production MVPs Launched in 90 Days Under 1 Roof',
        architecture: 'Dedicated 8-Engineer Pod · Weekly Executive Briefings',
      },
    ],
    visualType: 'management',
  },
];

export interface PortfolioCaseStudy {
  id: string;
  code: string;
  title: string;
  category: Exclude<FilterCategory, 'All'>;
  clientProfile: string;
  deliveryWindow: string;
  impactMetric: string;
  summary: string;
  stack: string[];
  accentColor: 'cyan' | 'purple' | 'pink' | 'green';
}

export const PORTFOLIO_SHOWCASE: PortfolioCaseStudy[] = [
  {
    id: 'case-aetherpay',
    code: 'CASE 01',
    title: 'AetherPay Cross-Border Mobile Vault',
    category: 'Mobile Apps',
    clientProfile: 'Series A FinTech Collective (London & Zurich)',
    deliveryWindow: '24h Prototype · 8-Week Full Store Launch',
    impactMetric: '$38M+ Monthly Transaction Volume Processed',
    summary:
      'Engineered a dual iOS and Android financial super-app with hardware enclave passkeys, instant IBAN/card provisioning, and real-time ledger synchronization.',
    stack: ['SwiftUI', 'Kotlin', 'Biometric Auth', 'WebSockets'],
    accentColor: 'cyan',
  },
  {
    id: 'case-lexicore',
    code: 'CASE 02',
    title: 'LexiCore Multi-Agent Contract Intelligence',
    category: 'AI and Automation',
    clientProfile: 'Corporate M&A Advisory Group (New York)',
    deliveryWindow: '24h Workflow Proof · 5-Week Production Rollout',
    impactMetric: '91% Reduction in Due-Diligence Review Time',
    summary:
      'Built an isolated multi-agent AI & Apify pipeline platform that ingests thousands of dataroom PDFs, flags indemnity anomalies, and drafts redline clauses with citation traceability.',
    stack: ['Custom LLM RAG', 'Apify Actors', 'React', 'Encrypted Vector DB'],
    accentColor: 'purple',
  },
  {
    id: 'case-vanguard',
    code: 'CASE 03',
    title: 'Vanguard Bespoke Commerce & Global Payouts',
    category: 'Web and E-Commerce',
    clientProfile: 'Luxury Hardware & Apparel Brand (Milan & Tokyo)',
    deliveryWindow: '24h Interactive Storefront · 6-Week Global Launch',
    impactMetric: '+144% Checkout Conversion across 28 Currencies',
    summary:
      'Replaced a sluggish legacy store with an edge-rendered headless storefront featuring instant Stripe Connect split settlements, localized duties, and 3D product inspection.',
    stack: ['Next.js', 'Stripe Connect', 'Tailwind CSS', 'Edge CDN'],
    accentColor: 'pink',
  },
  {
    id: 'case-helios',
    code: 'CASE 04',
    title: 'Helios Enterprise Fleet & Milestone Turnaround',
    category: 'Project Management',
    clientProfile: 'Autonomous Supply Chain Operator (Singapore)',
    deliveryWindow: '24h Architecture Audit · 10-Week Phased Delivery',
    impactMetric: '100% On-Time Milestone Completion & 4.2x Velocity',
    summary:
      'Assumed full executive technical management of a stalled multi-vendor build, restructuring architecture, establishing automated QA gates, and launching on schedule.',
    stack: ['Agile Governance', 'CI/CD Pipelines', 'Automated QA', 'Cloud Architecture'],
    accentColor: 'green',
  },
];

export interface TimelineTier {
  id: string;
  tierLabel: string;
  title: string;
  turnaround: string;
  idealFor: string;
  commitments: string[];
  accentHex: string;
}

export const TIMELINE_POLICY_TIERS: TimelineTier[] = [
  {
    id: 'tier-24h',
    tierLabel: '01 · Rapid Ignition',
    title: '24-Hour Quick Response & Prototype Start',
    turnaround: 'First 24 Hours',
    idealFor: 'Small Scopes, Feature Modules & Concept Validation',
    commitments: [
      'Direct executive architecture review by Naveed Ali within hours',
      'Interactive UI prototype or functional technical proof initiated in 24 hours',
      'Clear fixed-scope milestone breakdown with zero hiring friction',
    ],
    accentHex: '#00F5FF',
  },
  {
    id: 'tier-agile',
    tierLabel: '02 · Growth Product Build',
    title: 'Flexible Sprint-Based MVP & Platform Delivery',
    turnaround: '2 to 6 Weeks (Scope-Tailored)',
    idealFor: 'Full Mobile Apps, Custom AI SaaS & E-Commerce Stores',
    commitments: [
      'Dedicated UI/UX, Frontend, Backend, and AI specialists managed under one roof',
      'Weekly live staging deployments and verifiable milestone sign-offs',
      'Adaptive sprint velocity that scales up or down with your launch calendar',
    ],
    accentHex: '#8A2BE2',
  },
  {
    id: 'tier-enterprise',
    tierLabel: '03 · Enterprise Scale',
    title: 'Multi-Phase Architecture & Long-Term Governance',
    turnaround: 'Custom Multi-Quarter Roadmap',
    idealFor: 'Complex Global Platforms, Regulated Systems & Multi-App Ecosystems',
    commitments: [
      'Strict NDA protection, IP assignment, and enterprise security hardening',
      'End-to-end automated testing, load benchmarking, and App Store / Cloud rollout',
      'Post-launch SLA monitoring and continuous feature evolution',
    ],
    accentHex: '#10B981',
  },
];

export interface BlogPost {
  id: string;
  tag: Exclude<FilterCategory, 'All'>;
  readTime: string;
  publishedDate: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  fullArticleParagraphs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-24h-prototype',
    tag: 'Project Management',
    readTime: '4 Min Read',
    publishedDate: 'October 2026',
    title: 'How Our 24-Hour Prototype Start Eliminates Software Project Risk',
    summary:
      'Discover how Orbit Agency turns your initial idea into a clickable, visual prototype within 24 hours for small scopes.',
    keyTakeaways: [
      'See your product workflow visually within the first 24 hours for focused scopes.',
      'Align stakeholders and refine features early before heavy coding begins.',
    ],
    fullArticleParagraphs: [
      'At Orbit Agency, led by Founder and Managing Director Naveed Ali, we eliminate project uncertainty with our 24-Hour Quick Response and Prototype Start for small scopes.',
    ],
  },
  {
    id: 'blog-ai-automation-roi',
    tag: 'AI and Automation',
    readTime: '5 Min Read',
    publishedDate: 'October 2026',
    title: 'Building Custom AI Tools & Apify Workflows That Multiply Revenue',
    summary:
      'A practical guide on integrating custom AI chatbots, Apify Actors, and voice assistants directly into daily operations.',
    keyTakeaways: [
      'Automate repetitive customer support and lead qualification 24/7.',
      'Connect private company knowledge bases safely without leaking sensitive data.',
    ],
    fullArticleParagraphs: [
      'Custom AI development connects advanced language models and Apify automation pipelines directly to your verified business data.',
    ],
  },
];

export const WHATSAPP_BASE_URL = 'https://wa.me/923042458687';
export const AGENCY_FOUNDER_NAME = 'Naveed Ali';
export const AGENCY_FOUNDER_TITLE = 'Founder and Managing Director at Orbit Agency';
export const FOOTER_EXACT_TEXT =
  '© 2026 Orbit Agency. All Rights Reserved. Global Software and AI Development Studio.';
