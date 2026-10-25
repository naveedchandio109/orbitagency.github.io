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
  group: 'main' | 'legal';
}

export const SIDE_DRAWER_LINKS: DrawerLink[] = [
  { id: 'nav-home', label: 'Home', href: '#home', sectionCode: '01', group: 'main' },
  { id: 'nav-intro', label: 'About Orbit Agency (Introduction)', href: '#custom-introduction', sectionCode: '02', group: 'main' },
  { id: 'nav-solutions', label: 'Our 4 Core Solutions', href: '#core-solutions', sectionCode: '03', group: 'main' },
  { id: 'nav-portfolio', label: 'Website Portfolio Showcase', href: '#portfolio-showcase', sectionCode: '04', group: 'main' },
  { id: 'nav-blogs', label: 'Insights & Engineering Blogs', href: '#blogs-section', sectionCode: '05', group: 'main' },
  { id: 'nav-timeline', label: 'Flexible Timeline Policy', href: '#timeline-policy', sectionCode: '06', group: 'main' },
  { id: 'nav-leadership', label: 'Executive Leadership (Naveed Ali)', href: '#executive-leadership', sectionCode: '07', group: 'main' },
  { id: 'nav-start', label: 'Start a Project (Inquiry Form)', href: '#start-project', sectionCode: '08', group: 'main' },
  { id: 'nav-privacy', label: 'Privacy Policy', href: '#legal-privacy', sectionCode: '09', group: 'legal' },
  { id: 'nav-terms', label: 'Terms & Conditions', href: '#legal-terms', sectionCode: '10', group: 'legal' },
  { id: 'nav-disclaimer', label: 'Disclaimer', href: '#legal-disclaimer', sectionCode: '11', group: 'legal' },
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
      'High-performance native and cross-platform mobile applications with smooth UI, secure authentication, real-time databases, and complete Apple App Store and Google Play Store deployment.',
    deliverables: [
      'Complete iOS (Swift) & Android (Kotlin / React Native) Apps',
      'Secure User Login, Biometrics & Protected Cloud Databases',
      'Real-Time Notifications, Live Chat & Offline Support',
      'Full App Store & Google Play Store Submission & Approval',
    ],
    prototypeSla: '24-Hour Interactive Prototype Start',
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
      'mobile',
    ],
    portfolioHighlights: [
      {
        name: 'AetherPay Digital Banking Suite',
        sector: 'Financial Services & Payments',
        outcomeMetric: '99.98% Crash-Free Across 180,000+ Active Users',
        architecture: 'iOS & Android Native · Biometric Security · Instant Transfers',
      },
      {
        name: 'PulseCare On-Demand Telemedicine',
        sector: 'Healthcare & Patient Booking',
        outcomeMetric: '42% Faster Doctor Consultation Booking',
        architecture: 'Cross-Platform Mobile · HD Video Calls · Digital Prescriptions',
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
      'Next-generation AI SaaS web platforms, custom business chatbots, voice and image AI generators, and automated company workflows that save hours of manual work and multiply revenue.',
    deliverables: [
      'Custom AI Chatbots Trained on Your Company Documents',
      'Full AI SaaS Products with Subscription Billing',
      'Automated Voice Assistants & Content/Image Generators',
      'CRM, Lead Qualification & Customer Support Automation',
    ],
    prototypeSla: '24-Hour Working AI Proof of Concept',
    keywords: [
      'ai tools',
      'automation',
      'llm',
      'chatbot',
      'voice ai',
      'image generator',
      'saas wrapper',
      'workflow',
      'openai',
      'gemini',
    ],
    portfolioHighlights: [
      {
        name: 'LexiCore Document Intelligence Portal',
        sector: 'Corporate & Legal Automation',
        outcomeMetric: '14,200+ Manual Review Hours Saved Per Year',
        architecture: 'Custom AI Assistant · Instant PDF Analysis · Secure Cloud',
      },
      {
        name: 'VoxFlow 24/7 AI Sales Concierge',
        sector: 'Real Estate & High-Ticket Booking',
        outcomeMetric: '+68% Increase in Qualified Client Appointments',
        architecture: 'Automated Voice & Chat AI · Instant Calendar Booking',
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
      'Ultra-fast SaaS web applications, custom online storefronts, global payment gateway integrations (Stripe and multi-currency payouts), and high-converting business websites.',
    deliverables: [
      'Custom Business Websites, Portals & SaaS Dashboards',
      'High-Speed Online Stores with Inventory & Order Management',
      'Stripe, Credit Card & Multi-Currency Payment Integration',
      'SEO-Optimized, Mobile-Responsive Conversion Landing Pages',
    ],
    prototypeSla: '24-Hour Live Website Staging Preview',
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
      'website',
    ],
    portfolioHighlights: [
      {
        name: 'Vanguard Luxury Global Storefront',
        sector: 'Direct-to-Consumer E-Commerce',
        outcomeMetric: '+144% Higher Checkout Sales Across 28 Currencies',
        architecture: 'Next.js Web Store · Stripe Global Checkout · Sub-Second Load',
      },
      {
        name: 'MetricScale Executive Web Portal',
        sector: 'B2B Software-as-a-Service (SaaS)',
        outcomeMetric: '10,000+ Daily Active Business Users with Zero Lag',
        architecture: 'React Web Platform · Automated Invoicing · Role Management',
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
      'Complete end-to-end software development management. We provide a 24-hour quick response and basic prototype start for small features, while larger custom projects are planned with flexible timelines tailored to your exact project scope.',
    deliverables: [
      '24-Hour Scope Review & Rapid Prototype Kickoff',
      'Dedicated UI/UX Designers, Developers & QA Testers Managed for You',
      'Clear Milestone-Based Delivery with Weekly Live Demos',
      'Flexible Timelines Scaled to Match Your Exact Budget & Launch Goals',
    ],
    prototypeSla: '24-Hour Executive Roadmap & Kickoff',
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
    ],
    portfolioHighlights: [
      {
        name: 'Helios Enterprise Cloud Modernization',
        sector: 'Global Logistics & Supply Chain',
        outcomeMetric: 'Delivered 3 Weeks Ahead of Schedule with 100% QA Pass',
        architecture: '14-Milestone Plan · Dedicated Engineering Team · Zero Downtime',
      },
      {
        name: 'NovaVentures Multi-Product Launch',
        sector: 'Startup Studio Portfolio',
        outcomeMetric: '3 Complete Products Designed, Built & Launched in 90 Days',
        architecture: 'Full Executive Management · Weekly Progress Reports',
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
    code: 'PORTFOLIO 01',
    title: 'AetherPay Cross-Border Banking & Wallet Platform',
    category: 'Mobile Apps',
    clientProfile: 'Financial Technology Group (London & Zurich)',
    deliveryWindow: '24h Prototype · 8-Week Full Launch',
    impactMetric: '$38M+ Monthly Volume Processed Securely',
    summary:
      'Designed and delivered a complete iOS and Android financial platform featuring biometric login, instant multi-currency transfers, virtual card management, and real-time balance tracking.',
    stack: ['iOS Swift', 'Android Kotlin', 'Biometric Security', 'Real-Time Sync'],
    accentColor: 'cyan',
  },
  {
    id: 'case-lexicore',
    code: 'PORTFOLIO 02',
    title: 'LexiCore AI Contract & Document Analyzer',
    category: 'AI and Automation',
    clientProfile: 'Corporate Advisory Firm (New York)',
    deliveryWindow: '24h AI Proof · 5-Week Full Rollout',
    impactMetric: '91% Faster Document Review & Zero Manual Errors',
    summary:
      'Built a secure web-based AI workspace that reads hundreds of pages of business contracts in seconds, highlights risks automatically, and generates executive summaries with exact page citations.',
    stack: ['Custom AI Engine', 'Document Search', 'React Web App', 'Encrypted Cloud'],
    accentColor: 'purple',
  },
  {
    id: 'case-vanguard',
    code: 'PORTFOLIO 03',
    title: 'Vanguard Global E-Commerce & Stripe Checkout Platform',
    category: 'Web and E-Commerce',
    clientProfile: 'Luxury Retail Brand (Milan & Tokyo)',
    deliveryWindow: '24h Store Preview · 6-Week Global Launch',
    impactMetric: '+144% Sales Conversion Across 28 Countries',
    summary:
      'Transformed a slow online store into an ultra-fast global e-commerce website with one-click Stripe checkout, automatic local currency pricing, live inventory sync, and admin order dashboards.',
    stack: ['Next.js Web', 'Stripe Global Payouts', 'Responsive UI', 'High-Speed CDN'],
    accentColor: 'pink',
  },
  {
    id: 'case-helios',
    code: 'PORTFOLIO 04',
    title: 'Helios Fleet & Operations Management Portal',
    category: 'Project Management',
    clientProfile: 'International Logistics Operator (Singapore)',
    deliveryWindow: '24h Audit · 10-Week Milestone Delivery',
    impactMetric: '100% On-Time Milestone Delivery & 4.2x Faster Releases',
    summary:
      'Took over complete executive project management of a complex enterprise web and mobile system, organizing UI/UX, backend engineering, and automated quality testing under clear weekly milestones.',
    stack: ['Executive Management', 'Milestone QA', 'Cloud Deployment', 'Full Documentation'],
    accentColor: 'green',
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
      'Discover how Orbit Agency turns your initial idea into a clickable, visual prototype within 24 hours for small scopes—before you commit to long-term development cycles.',
    keyTakeaways: [
      'See your product workflow visually within the first 24 hours for focused scopes.',
      'Align stakeholders and refine features early before heavy coding begins.',
      'Lock in transparent, milestone-based timelines tailored to your exact project scale.',
    ],
    fullArticleParagraphs: [
      'When founders and business executives start a new software project, the biggest frustration is waiting weeks just to see the first screen. At Orbit Agency, led by Founder and Managing Director Naveed Ali, we solved this problem with our 24-Hour Quick Response and Prototype Start for small scopes.',
      'Within the first 24 hours of reviewing your brief, our architecture and UI/UX team prepares a clear visual prototype or technical proof-of-concept alongside a step-by-step milestone roadmap. You never have to guess how your website, AI tool, or mobile app will look and function.',
      'For larger, custom enterprise platforms, we divide the entire build into clear, verifiable sprint milestones. Every milestone is demonstrated live on a staging link so you retain 100% visibility and control from day one to final launch.',
    ],
  },
  {
    id: 'blog-ai-automation-roi',
    tag: 'AI and Automation',
    readTime: '5 Min Read',
    publishedDate: 'October 2026',
    title: 'Building Custom AI Tools That Actually Save Time and Multiply Revenue',
    summary:
      'A practical guide for business owners on integrating custom AI chatbots, automated document analyzers, and voice assistants directly into daily operations.',
    keyTakeaways: [
      'Automate repetitive customer support and lead qualification 24/7.',
      'Connect private company knowledge bases safely without leaking sensitive data.',
      'Launch subscription-ready AI SaaS platforms with built-in Stripe billing.',
    ],
    fullArticleParagraphs: [
      'Off-the-shelf AI tools often fail to understand your specific business rules, pricing, and customer workflows. Custom AI development bridges that gap by connecting advanced language and voice models directly to your company’s verified data and CRM systems.',
      'At Orbit Agency, we architect custom AI SaaS wrappers, intelligent customer support agents, and automated back-office workflows that reduce manual processing time by over 80%. Every AI solution is built with strict data privacy so your proprietary information remains 100% confidential.',
    ],
  },
  {
    id: 'blog-high-converting-web',
    tag: 'Web and E-Commerce',
    readTime: '4 Min Read',
    publishedDate: 'September 2026',
    title: 'Why Clean Website Architecture & Instant Checkout Double Online Sales',
    summary:
      'Learn why page load speed, bold visual clarity, and frictionless Stripe multi-currency checkout are the three pillars of high-converting websites and online stores.',
    keyTakeaways: [
      'Sub-second page loads keep visitors engaged and boost search engine rankings.',
      'Clear, bold typography builds immediate executive trust with international buyers.',
      'Seamless Stripe and multi-currency payouts remove checkout friction globally.',
    ],
    fullArticleParagraphs: [
      'Your website portfolio or e-commerce store is your primary global headquarters. When a prospective client visits your site, cluttered layouts or slow-loading pages immediately cost you sales.',
      'Our web engineering team builds ultra-clean, high-speed web platforms and custom online stores engineered for maximum conversion. From automated Stripe payout splits to responsive desktop and mobile layouts, every detail is tested for reliability and speed.',
    ],
  },
  {
    id: 'blog-mobile-app-scale',
    tag: 'Mobile Apps',
    readTime: '5 Min Read',
    publishedDate: 'September 2026',
    title: 'Launching Scalable iOS & Android Apps Without Managing Freelancers',
    summary:
      'How our fully managed engineering studio handles UI design, native mobile coding, backend databases, and App Store / Play Store approval under one roof.',
    keyTakeaways: [
      'Single point of executive contact instead of juggling multiple freelancers.',
      'Smooth 60fps performance across both Apple iOS and Google Android devices.',
      'Complete handling of Apple App Store and Google Play compliance and publishing.',
    ],
    fullArticleParagraphs: [
      'Building a successful mobile application requires much more than writing code—it demands cohesive UI/UX design, secure cloud APIs, real-time database synchronization, and navigating strict App Store and Google Play review guidelines.',
      'With Orbit Agency, you never have to hire or coordinate separate designers, backend coders, or testers. Our dedicated team manages the entire lifecycle under strict milestone governance and delivers a market-ready application straight to the stores.',
    ],
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
      'Direct executive review by Naveed Ali within hours of your inquiry',
      'Interactive visual prototype or technical proof initiated within 24 hours',
      'Clear fixed-scope milestone plan with zero hiring hassle',
    ],
    accentHex: '#0284C7',
  },
  {
    id: 'tier-agile',
    tierLabel: '02 · Growth Product Build',
    title: 'Flexible Sprint-Based Website, AI & App Delivery',
    turnaround: '2 to 6 Weeks (Scope-Tailored)',
    idealFor: 'Complete Websites, E-Commerce Stores, AI Tools & Mobile Apps',
    commitments: [
      'Dedicated UI/UX, Web, Mobile, and AI engineers managed for you under one roof',
      'Weekly live staging preview links and verifiable milestone sign-offs',
      'Flexible timeline pacing that adapts to your business launch calendar',
    ],
    accentHex: '#7C3AED',
  },
  {
    id: 'tier-enterprise',
    tierLabel: '03 · Enterprise Scale',
    title: 'Multi-Phase Architecture & Long-Term Governance',
    turnaround: 'Custom Multi-Phase Roadmap',
    idealFor: 'Large-Scale Platforms, Custom SaaS Ecosystems & Ongoing Evolution',
    commitments: [
      'Strict NDA protection, 100% IP ownership transfer, and security auditing',
      'Comprehensive quality assurance testing and cloud / store deployment',
      'Dedicated post-launch support, maintenance, and feature expansion',
    ],
    accentHex: '#059669',
  },
];

export interface LegalSection {
  id: string;
  anchorId: 'legal-privacy' | 'legal-terms' | 'legal-disclaimer';
  badge: string;
  title: string;
  lastUpdated: string;
  summary: string;
  clauses: {
    heading: string;
    body: string;
  }[];
}

export const LEGAL_SECTIONS: LegalSection[] = [
  {
    id: 'privacy-policy',
    anchorId: 'legal-privacy',
    badge: 'OFFICIAL POLICY 01',
    title: 'Privacy Policy',
    lastUpdated: 'Effective October 2026',
    summary:
      'Orbit Agency is committed to protecting the confidentiality, personal data, and proprietary project intellectual property of every client and website visitor.',
    clauses: [
      {
        heading: '1. Information We Collect',
        body: 'When you submit a project inquiry through our Secure Verification Form or initiate a conversation via WhatsApp, we collect only the essential business information you provide: your Full Name, Country, Company or LinkedIn Verification URL, Project Category, Estimated Budget, and Project Scope Details.',
      },
      {
        heading: '2. How Your Data Is Used & Protected',
        body: 'Your information is used strictly by Founder and Managing Director Naveed Ali and our executive architecture team to evaluate your project scope, verify client authenticity, prepare your 24-hour prototype or milestone proposal, and communicate with you directly. We never sell, rent, or share your personal data or project ideas with third-party marketers.',
      },
      {
        heading: '3. Strict Non-Disclosure (NDA) & Contact Security',
        body: 'All project descriptions, documents, business models, and source code shared with Orbit Agency are treated as strictly confidential from the moment of submission. To prevent automated spam and unauthorized scraping, our executive inbox routing is protected behind our secure verification form.',
      },
    ],
  },
  {
    id: 'terms-conditions',
    anchorId: 'legal-terms',
    badge: 'OFFICIAL POLICY 02',
    title: 'Terms & Conditions',
    lastUpdated: 'Effective October 2026',
    summary:
      'These Terms & Conditions govern all software, AI, web, e-commerce, and mobile application development engagements managed by Orbit Agency.',
    clauses: [
      {
        heading: '1. Scope of Services & 24-Hour Prototype Policy',
        body: 'Orbit Agency provides end-to-end software architecture, UI/UX design, full-stack web and mobile coding, custom AI automation, and agile project management. Our 24-hour quick response and basic prototype start applies to clearly defined small scopes and initial concept validations, while larger custom builds are governed by written milestone schedules tailored to your exact project scale.',
      },
      {
        heading: '2. Milestone-Based Delivery & Approvals',
        body: 'Every custom project is structured into transparent phases with defined deliverables. Clients review live staging previews at the completion of each milestone before moving to the next phase, ensuring complete alignment on quality, functionality, and timeline.',
      },
      {
        heading: '3. Full Intellectual Property (IP) Ownership',
        body: 'Upon completion and final settlement of agreed project milestones, 100% of the custom source code, UI/UX designs, databases, and intellectual property rights created specifically for your project are transferred directly to you.',
      },
    ],
  },
  {
    id: 'legal-disclaimer',
    anchorId: 'legal-disclaimer',
    badge: 'OFFICIAL POLICY 03',
    title: 'Disclaimer',
    lastUpdated: 'Effective October 2026',
    summary:
      'Transparency notice regarding portfolio case studies, project timeline estimates, and third-party platform integrations.',
    clauses: [
      {
        heading: '1. Portfolio Metrics & Business Outcomes',
        body: 'The sample portfolio highlights, case studies, and performance metrics showcased on this website represent real engineering architectures and historical client outcomes delivered by our studio. Actual commercial results for new projects depend on your specific market, business model, and operational execution.',
      },
      {
        heading: '2. Project Timeline Estimates',
        body: 'While Orbit Agency provides a rapid 24-hour response and prototype start for small scopes, total delivery timelines for full-scale mobile apps, AI SaaS platforms, and e-commerce websites vary based on feature complexity, third-party API approvals (such as Apple App Store, Google Play Store, or Stripe verification), and timely client feedback.',
      },
      {
        heading: '3. Official Communication Channels',
        body: 'Orbit Agency conducts official client onboarding exclusively through our verified WhatsApp Executive Desk and our Secure Project Inquiry Form overseen by Founder and Managing Director Naveed Ali.',
      },
    ],
  },
];

export const WHATSAPP_BASE_URL = 'https://wa.me/923042458687';
export const AGENCY_FOUNDER_NAME = 'Naveed Ali';
export const AGENCY_FOUNDER_TITLE = 'Founder and Managing Director at Orbit Agency';
export const FOOTER_EXACT_TEXT =
  '© 2026 Orbit Agency. All Rights Reserved. Global Software and AI Development Studio.';
