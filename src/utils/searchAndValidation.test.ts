import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  filterServices,
  filterPortfolioItems,
  validateInquiryForm,
  getProtectedDestinationInbox
} from './searchAndValidation';
import {
  buildApifyActorEndpoint,
  APIFY_ACTOR_PRESETS
} from './apifyConnector';
import { CORE_SERVICES, PORTFOLIO_SHOWCASE } from '../data/orbitData';

describe('Smart Search & Quick Filter Logic', () => {
  it('returns all 4 core services and all portfolio items when query is empty and tag is All', () => {
    const services = filterServices(CORE_SERVICES, '', 'All');
    const portfolio = filterPortfolioItems(PORTFOLIO_SHOWCASE, '', 'All');
    assert.equal(services.length, 4);
    assert.equal(portfolio.length, 4);
  });

  it('filters services by category tag accurately', () => {
    const services = filterServices(CORE_SERVICES, '', 'AI and Automation');
    assert.equal(services.length, 1);
    assert.equal(services[0].id, 'service-ai-automation');
  });

  it('filters services by keyword search (case-insensitive)', () => {
    const services = filterServices(CORE_SERVICES, 'iOS App', 'All');
    assert.equal(services.length, 1);
    assert.equal(services[0].id, 'service-mobile-apps');
  });

  it('matches Apify keyword in AI and Automation service card', () => {
    const services = filterServices(CORE_SERVICES, 'Apify', 'All');
    assert.equal(services.length, 1);
    assert.equal(services[0].id, 'service-ai-automation');
  });

  it('returns empty arrays when search query matches nothing', () => {
    const services = filterServices(CORE_SERVICES, 'nonexistent-xyz-999', 'All');
    const portfolio = filterPortfolioItems(PORTFOLIO_SHOWCASE, 'nonexistent-xyz-999', 'All');
    assert.equal(services.length, 0);
    assert.equal(portfolio.length, 0);
  });
});

describe('Secure Project Inquiry Validation & Email Protection', () => {
  it('flags missing fields accurately', () => {
    const result = validateInquiryForm({
      fullName: 'A',
      country: '',
      verificationUrl: 'x',
      projectCategory: '',
      projectDetails: 'Short',
      estimatedBudget: ''
    });

    assert.equal(result.valid, false);
    assert.ok(result.errors.fullName);
    assert.ok(result.errors.country);
    assert.ok(result.errors.verificationUrl);
    assert.ok(result.errors.projectCategory);
    assert.ok(result.errors.estimatedBudget);
    assert.ok(result.errors.projectDetails);
  });

  it('passes valid input', () => {
    const result = validateInquiryForm({
      fullName: 'Alex Mercer',
      country: 'United Kingdom',
      verificationUrl: 'https://linkedin.com/in/alexmercer',
      projectCategory: 'Custom AI Tools and Automation',
      projectDetails: 'We need an enterprise multi-agent Apify workflow and mobile dashboard.',
      estimatedBudget: '$10,000 – $25,000 (Full-Scale Platform & Architecture)'
    });

    assert.equal(result.valid, true);
    assert.equal(Object.keys(result.errors).length, 0);
  });

  it('reconstructs the destination address accurately', () => {
    assert.equal(getProtectedDestinationInbox(), 'orbitagency61@gmail.com');
  });
});

describe('Apify & AI Webhook Endpoint Builder', () => {
  it('constructs valid Apify v2 Actor runs URL', () => {
    const url = buildApifyActorEndpoint('orbit-agency~ai-web-scraper');
    assert.equal(
      url,
      'https://api.apify.com/v2/acts/orbit-agency~ai-web-scraper/runs'
    );
  });

  it('has 3 preconfigured Apify Actor & AI Webhook presets', () => {
    assert.equal(APIFY_ACTOR_PRESETS.length, 3);
  });
});
