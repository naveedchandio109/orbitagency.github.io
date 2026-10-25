import {
  BLOG_POSTS,
  BlogPost,
  CoreServiceCard,
  FilterCategory,
  PORTFOLIO_SHOWCASE,
  PortfolioCaseStudy,
  WHATSAPP_BASE_URL,
} from '../data/orbitData';

export interface InquiryFormInput {
  fullName: string;
  country: string;
  verificationUrl: string;
  projectCategory: string;
  projectDetails: string;
  estimatedBudget: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryFormInput, string>>;
}

export interface DispatchedInquiryRecord {
  referenceId: string;
  submittedAtIso: string;
  recipientRoutingTarget: string;
  client: {
    fullName: string;
    country: string;
    verificationUrl: string;
  };
  project: {
    category: string;
    budget: string;
    details: string;
  };
  whatsappContinuationUrl: string;
}

/**
 * Dynamically filters the 4 Core Service cards by search query and category filter tag.
 */
export function filterServices(
  services: CoreServiceCard[],
  searchQuery: string,
  activeTag: FilterCategory
): CoreServiceCard[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return services.filter((service) => {
    const matchesTag = activeTag === 'All' || service.category === activeTag;
    if (!matchesTag) return false;

    if (!normalizedQuery) return true;

    const searchableFields = [
      service.title,
      service.category,
      service.description,
      service.prototypeSla,
      ...service.deliverables,
      ...service.keywords,
      ...service.portfolioHighlights.flatMap((p) => [
        p.name,
        p.sector,
        p.outcomeMetric,
        p.architecture,
      ]),
    ]
      .join(' ')
      .toLowerCase();

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    return tokens.every((token) => searchableFields.includes(token));
  });
}

/**
 * Dynamically filters the Portfolio Showcase cards by search query and category filter tag.
 */
export function filterPortfolioItems(
  items: PortfolioCaseStudy[] = PORTFOLIO_SHOWCASE,
  searchQuery: string,
  activeTag: FilterCategory
): PortfolioCaseStudy[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesTag = activeTag === 'All' || item.category === activeTag;
    if (!matchesTag) return false;

    if (!normalizedQuery) return true;

    const searchableFields = [
      item.title,
      item.category,
      item.clientProfile,
      item.deliveryWindow,
      item.impactMetric,
      item.summary,
      ...item.stack,
    ]
      .join(' ')
      .toLowerCase();

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    return tokens.every((token) => searchableFields.includes(token));
  });
}

/**
 * Dynamically filters the Insights & Engineering Blog Posts by search query and category filter tag.
 */
export function filterBlogPosts(
  posts: BlogPost[] = BLOG_POSTS,
  searchQuery: string,
  activeTag: FilterCategory
): BlogPost[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesTag = activeTag === 'All' || post.tag === activeTag;
    if (!matchesTag) return false;

    if (!normalizedQuery) return true;

    const searchableFields = [
      post.title,
      post.tag,
      post.summary,
      ...post.keyTakeaways,
      ...post.fullArticleParagraphs,
    ]
      .join(' ')
      .toLowerCase();

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    return tokens.every((token) => searchableFields.includes(token));
  });
}

/**
 * Validates the Secure Verification Inquiry Form inputs.
 */
export function validateInquiryForm(input: InquiryFormInput): InquiryValidationResult {
  const errors: Partial<Record<keyof InquiryFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!input.country || input.country.trim().length < 2) {
    errors.country = 'Please specify your country or primary operating region.';
  }

  if (!input.verificationUrl || input.verificationUrl.trim().length < 3) {
    errors.verificationUrl =
      'Please provide your company name, website, or LinkedIn profile URL for verification.';
  }

  if (!input.projectCategory || input.projectCategory.trim().length === 0) {
    errors.projectCategory = 'Please select a primary project category.';
  }

  if (!input.estimatedBudget || input.estimatedBudget.trim().length === 0) {
    errors.estimatedBudget = 'Please select an estimated project budget range.';
  }

  if (!input.projectDetails || input.projectDetails.trim().length < 15) {
    errors.projectDetails =
      'Please share at least 15 characters describing your scope, goals, or timeline.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds a WhatsApp deep link connected to https://wa.me/923042458687
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  if (!customMessage || !customMessage.trim()) {
    return WHATSAPP_BASE_URL;
  }
  const encoded = encodeURIComponent(customMessage.trim());
  return `${WHATSAPP_BASE_URL}?text=${encoded}`;
}

/**
 * Resolves the protected destination inbox internally via character codes so the
 * raw email address is never rendered as plain text on screen while routing
 * submissions accurately to orbitagency61@gmail.com.
 */
export function getProtectedDestinationInbox(): string {
  const codes = [
    111, 114, 98, 105, 116, 97, 103, 101, 110, 99, 121, 54, 49, 64, 103, 109,
    97, 105, 108, 46, 99, 111, 109,
  ];
  return String.fromCharCode(...codes);
}

/**
 * Creates a verified inquiry record and WhatsApp continuation URL.
 */
export function createInquiryPayload(input: InquiryFormInput): DispatchedInquiryRecord {
  const cleanName = input.fullName.trim();
  const cleanCountry = input.country.trim();
  const cleanVerification = input.verificationUrl.trim();
  const cleanCategory = input.projectCategory.trim();
  const cleanBudget = input.estimatedBudget.trim();
  const cleanDetails = input.projectDetails.trim();

  const hashSeed = `${cleanName}-${cleanCategory}-${Date.now().toString(36).toUpperCase()}`;
  const referenceId = `ORB-${hashSeed.replace(/[^A-Z0-9]/gi, '').slice(-8).toUpperCase()}`;

  const whatsappMessage = [
    `Hello Naveed Ali & Orbit Agency Executive Team,`,
    `I have submitted a Secure Project Inquiry (Ref: ${referenceId}).`,
    `• Name: ${cleanName}`,
    `• Country: ${cleanCountry}`,
    `• Company / LinkedIn: ${cleanVerification}`,
    `• Category: ${cleanCategory}`,
    `• Budget: ${cleanBudget}`,
    `• Scope Summary: ${cleanDetails}`,
  ].join('\n');

  return {
    referenceId,
    submittedAtIso: new Date().toISOString(),
    recipientRoutingTarget: getProtectedDestinationInbox(),
    client: {
      fullName: cleanName,
      country: cleanCountry,
      verificationUrl: cleanVerification,
    },
    project: {
      category: cleanCategory,
      budget: cleanBudget,
      details: cleanDetails,
    },
    whatsappContinuationUrl: buildWhatsAppUrl(whatsappMessage),
  };
}
