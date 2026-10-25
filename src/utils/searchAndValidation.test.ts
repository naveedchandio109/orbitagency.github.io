import test from 'node:test';
import assert from 'node:assert/strict';
import { BLOG_POSTS, CORE_SERVICES, PORTFOLIO_SHOWCASE, WHATSAPP_BASE_URL } from '../data/orbitData';
import {
  buildWhatsAppUrl,
  createInquiryPayload,
  filterBlogPosts,
  filterPortfolioItems,
  filterServices,
  getProtectedDestinationInbox,
  validateInquiryForm,
} from './searchAndValidation';

test('filterServices returns all 4 core services when query is empty and tag is All', () => {
  const results = filterServices(CORE_SERVICES, '', 'All');
  assert.equal(results.length, 4);
});

test('filterServices filters accurately by quick filter tags', () => {
  const mobileOnly = filterServices(CORE_SERVICES, '', 'Mobile Apps');
  assert.equal(mobileOnly.length, 1);
  assert.equal(mobileOnly[0].title, 'iOS and Android Mobile App Development');

  const aiOnly = filterServices(CORE_SERVICES, '', 'AI and Automation');
  assert.equal(aiOnly.length, 1);
  assert.equal(aiOnly[0].title, 'Custom AI Tools and Automation');
});

test('filterServices dynamically matches real-time search queries across keywords and portfolio highlights', () => {
  const stripeMatch = filterServices(CORE_SERVICES, 'Stripe', 'All');
  assert.equal(stripeMatch.length, 1);
  assert.equal(stripeMatch[0].category, 'Web and E-Commerce');

  const iosMatch = filterServices(CORE_SERVICES, 'iOS App', 'All');
  assert.equal(iosMatch.length, 1);
  assert.equal(iosMatch[0].category, 'Mobile Apps');
});

test('filterPortfolioItems and filterBlogPosts filter case studies and blogs by tag and search text', () => {
  const allCases = filterPortfolioItems(PORTFOLIO_SHOWCASE, '', 'All');
  assert.equal(allCases.length, 4);

  const aiBlogs = filterBlogPosts(BLOG_POSTS, '', 'AI and Automation');
  assert.equal(aiBlogs.length, 1);
  assert.ok(aiBlogs[0].title.includes('Custom AI Tools'));
});

test('validateInquiryForm rejects incomplete inputs and accepts valid executive briefs', () => {
  const invalidResult = validateInquiryForm({
    fullName: '',
    country: '',
    verificationUrl: '',
    projectCategory: '',
    projectDetails: 'short',
    estimatedBudget: '',
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.country);
  assert.ok(invalidResult.errors.verificationUrl);
  assert.ok(invalidResult.errors.projectDetails);

  const validResult = validateInquiryForm({
    fullName: 'Alexander Vance',
    country: 'United Kingdom',
    verificationUrl: 'https://linkedin.com/in/alexandervance',
    projectCategory: 'Custom AI Tools and Automation',
    projectDetails: 'We need a custom multi-agent AI platform with a 24-hour prototype start.',
    estimatedBudget: '$10,000 – $25,000 (Full-Scale Platform)',
  });
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('createInquiryPayload routes to orbitagency61@gmail.com and connects WhatsApp to 923042458687', () => {
  assert.equal(getProtectedDestinationInbox(), 'orbitagency61@gmail.com');
  assert.equal(buildWhatsAppUrl(), WHATSAPP_BASE_URL);

  const payload = createInquiryPayload({
    fullName: 'Elena Rostova',
    country: 'Switzerland',
    verificationUrl: 'https://vanguard-horology.ch',
    projectCategory: 'Web and E-Commerce Platforms',
    projectDetails: 'Global luxury storefront with Stripe multi-currency checkout.',
    estimatedBudget: '$10,000 – $25,000 (Full-Scale Platform)',
  });

  assert.equal(payload.recipientRoutingTarget, 'orbitagency61@gmail.com');
  assert.ok(payload.referenceId.startsWith('ORB-'));
  assert.ok(payload.whatsappContinuationUrl.startsWith('https://wa.me/923042458687?text='));
});
