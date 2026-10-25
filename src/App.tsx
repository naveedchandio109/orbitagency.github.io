import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  MessageCircle,
  ArrowUpRight,
  Clock,
  Shield,
  Zap,
  Globe,
  Check,
  Terminal,
  Cpu,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import { NavbarAndDrawer } from './components/NavbarAndDrawer';
import { NeonOrbitIcon } from './components/NeonOrbitIcon';
import { ServiceCardVisual } from './components/ServiceCardVisual';
import { SecureInquiryForm } from './components/SecureInquiryForm';
import { ApifyAutomationConsole } from './components/ApifyAutomationConsole';
import {
  FILTER_TAGS,
  CORE_SERVICES,
  PORTFOLIO_SHOWCASE,
  TIMELINE_POLICY_TIERS,
  WHATSAPP_BASE_URL,
  AGENCY_FOUNDER_NAME,
  AGENCY_FOUNDER_TITLE,
  FOOTER_EXACT_TEXT,
  FilterCategory
} from './data/orbitData';
import { filterServices, filterPortfolioItems } from './utils/searchAndValidation';

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<FilterCategory>('All');
  const [preselectedCategory, setPreselectedCategory] = useState<string>('');

  const filteredServices = useMemo(
    () => filterServices(CORE_SERVICES, searchQuery, activeTag),
    [searchQuery, activeTag]
  );

  const filteredPortfolio = useMemo(
    () => filterPortfolioItems(PORTFOLIO_SHOWCASE, searchQuery, activeTag),
    [searchQuery, activeTag]
  );

  const scrollToSection = (hrefOrId: string) => {
    const cleanId = hrefOrId.replace(/^#/, '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedCategory(serviceTitle);
    scrollToSection('start-project');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveTag('All');
  };

  const accentBorderMap = {
    cyan: 'hover:border-[#00F5FF]/60',
    purple: 'hover:border-[#8A2BE2]/60',
    pink: 'hover:border-[#FF2A85]/60',
    green: 'hover:border-[#10B981]/60'
  };

  const accentTextMap = {
    cyan: 'text-[#00F5FF]',
    purple: 'text-[#B975FF]',
    pink: 'text-[#FF2A85]',
    green: 'text-[#10B981]'
  };

  const accentGlowLineMap = {
    cyan: 'from-[#00F5FF] via-[#00F5FF]/40 to-transparent',
    purple: 'from-[#8A2BE2] via-[#8A2BE2]/40 to-transparent',
    pink: 'from-[#FF2A85] via-[#FF2A85]/40 to-transparent',
    green: 'from-[#10B981] via-[#10B981]/40 to-transparent'
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-[#F4F6FB] relative selection:bg-[#00F5FF] selection:text-[#05050A] pb-16 sm:pb-0">
      {/* Subtle Ambient Background Auras & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full bg-[#00F5FF]/[0.05] blur-[130px]" />
        <div className="absolute top-[30%] -right-48 w-[520px] h-[520px] rounded-full bg-[#8A2BE2]/[0.06] blur-[140px]" />
        <div className="absolute bottom-[15%] -left-48 w-[500px] h-[500px] rounded-full bg-[#FF2A85]/[0.04] blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Top Navigation & Sliding Dark Glass Drawer */}
      <NavbarAndDrawer
        isOpen={drawerOpen}
        onToggle={() => setDrawerOpen((prev) => !prev)}
        onClose={() => setDrawerOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Container */}
      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section
          id="home"
          className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-14 sm:pb-16 flex flex-col items-center text-center"
        >
          {/* Centerpiece 360-Degree Rotating Neon Atomic Orbit Icon */}
          <NeonOrbitIcon />

          {/* Status Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0B0C14]/90 border border-white/10 mt-6 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00F5FF]">
              GLOBAL SOFTWARE &amp; AI DEVELOPMENT STUDIO
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.08] max-w-4xl">
            Engineering Autonomous{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#B975FF] to-[#FF2A85] text-glow-cyan">
              AI Systems
            </span>
            , Native Mobile Apps &amp; Enterprise Platforms
          </h1>

          {/* Hero Subheadline */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#9499B3] max-w-2xl leading-relaxed font-normal">
            Directed by Founder &amp; Managing Director{' '}
            <strong className="text-white font-medium">{AGENCY_FOUNDER_NAME}</strong>, Orbit Agency
            architects high-concurrency software ecosystems, custom AI agents, and
            conversion-engineered digital products for global enterprises.
          </p>

          {/* Primary & Secondary Hero Actions */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollToSection('start-project')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5FF] via-[#8A2BE2] to-[#FF2A85] text-[#05050A] font-display font-bold text-sm tracking-wide hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,245,255,0.28)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-cta"
              className="px-6 py-3.5 rounded-xl bg-[#0B0C14]/90 border border-[#10B981]/45 hover:border-[#10B981] text-white font-display font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 hover:bg-[#10B981]/10"
            >
              <MessageCircle className="w-4 h-4 text-[#10B981]" />
              <span>Direct Executive WhatsApp</span>
            </a>
          </div>

          {/* 4 Single-Line Telemetry Metrics */}
          <div className="mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <div className="px-4 py-3 rounded-xl bg-[#0B0C14]/60 border border-white/[0.06] text-left">
              <div className="font-mono text-xs text-[#00F5FF] uppercase tracking-wider">
                99.98% SLA
              </div>
              <div className="text-xs text-[#9499B3] mt-0.5 truncate">
                Production Cloud Telemetry
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[#0B0C14]/60 border border-white/[0.06] text-left">
              <div className="font-mono text-xs text-[#B975FF] uppercase tracking-wider">
                24-Hour Kickoff
              </div>
              <div className="text-xs text-[#9499B3] mt-0.5 truncate">
                Rapid Architecture &amp; Prototype
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[#0B0C14]/60 border border-white/[0.06] text-left">
              <div className="font-mono text-xs text-[#FF2A85] uppercase tracking-wider">
                Full IP Ownership
              </div>
              <div className="text-xs text-[#9499B3] mt-0.5 truncate">
                Strict NDA &amp; Repository Governance
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[#0B0C14]/60 border border-white/[0.06] text-left">
              <div className="font-mono text-xs text-[#10B981] uppercase tracking-wider">
                Global Delivery
              </div>
              <div className="text-xs text-[#9499B3] mt-0.5 truncate">
                Multi-Timezone Executive Sprints
              </div>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE SMART SEARCH BAR (WITH SEMANTIC SEO & ARIA ATTRIBUTES) */}
        <section
          id="search-services"
          role="search"
          aria-label="Search Orbit Agency Services and Portfolios"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-6"
        >
          <div className="rounded-2xl bg-[#0B0C14]/90 border border-[#00F5FF]/35 p-4 sm:p-6 shadow-[0_0_35px_rgba(0,245,255,0.08)] backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
              <label
                htmlFor="orbit-service-search"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#00F5FF]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#00F5FF]">
                  Interactive Service &amp; Portfolio Command Search
                </span>
              </label>
              <span
                data-testid="search-results-counter"
                className="font-mono text-xs text-[#9499B3]"
              >
                Showing <strong className="text-white">{filteredServices.length}</strong> Solutions
                &amp; <strong className="text-white">{filteredPortfolio.length}</strong> Case
                Studies
              </span>
            </div>

            {/* Search Input Box */}
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#00F5FF] absolute left-4 pointer-events-none" />
              <input
                id="orbit-service-search"
                name="q"
                type="search"
                autoComplete="off"
                aria-controls="portfolio-cards-grid"
                data-testid="smart-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or portfolios (e.g., AI Tools, iOS App, Android, E-Commerce, Management)..."
                aria-label="Search services or portfolios"
                className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#05050A] border border-white/15 text-sm sm:text-base text-white placeholder-[#9499B3]/60 focus:outline-none focus:border-[#00F5FF] focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  data-testid="clear-search-button"
                  className="absolute right-3.5 p-1.5 rounded-lg text-[#9499B3] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#9499B3] mr-1">
                Filter Scope:
              </span>
              {FILTER_TAGS.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    data-testid={`filter-tag-${tag}`}
                    onClick={() => setActiveTag(tag)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#00F5FF] text-[#05050A] font-semibold shadow-[0_0_16px_rgba(0,245,255,0.4)]'
                        : 'bg-[#05050A]/90 text-[#9499B3] border border-white/10 hover:border-[#00F5FF]/40 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. CUSTOM INTRODUCTION SECTION */}
        <section id="custom-introduction" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="rounded-2xl bg-gradient-to-br from-[#0B0C14] via-[#0B0C14] to-[#120D24] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#B975FF]">
                  <Cpu className="w-4 h-4 text-[#00F5FF]" />
                  <span>CUSTOM ARCHITECTURE INTRODUCTION</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Precision Software Engineering Built for Global Scale
                </h2>
                <p className="text-sm sm:text-base text-[#9499B3] leading-relaxed">
                  Orbit Agency operates as an elite international software and AI development
                  management studio. Rather than stitching together fragile templates, our
                  engineering leads design resilient, cloud-native systems tailored to your exact
                  operational logic, security compliance, and commercial velocity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#05050A]/70 border border-white/[0.06]">
                    <Shield className="w-4 h-4 text-[#00F5FF] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Zero-Trust Code Security
                      </div>
                      <div className="text-[11px] text-[#9499B3] mt-0.5">
                        End-to-end encryption &amp; automated vulnerability scanning
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#05050A]/70 border border-white/[0.06]">
                    <Layers className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Modular Micro-Architecture
                      </div>
                      <div className="text-[11px] text-[#9499B3] mt-0.5">
                        Built to handle 10x traffic surges without refactoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Architecture Blueprint Card */}
              <div className="lg:col-span-5 rounded-xl bg-[#05050A] border border-[#00F5FF]/25 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#00F5FF] uppercase tracking-wider">
                    ORBIT EXECUTION PROTOCOL
                  </span>
                  <span className="font-mono text-[11px] text-[#10B981]">ACTIVE</span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      step: '01',
                      title: 'System Blueprint & Data Modeling',
                      desc: 'Schema design, API contracts, and UI wireframes within 24 hours.'
                    },
                    {
                      step: '02',
                      title: 'Parallel AI & Full-Stack Sprints',
                      desc: 'Continuous deployment staging links with automated test suites.'
                    },
                    {
                      step: '03',
                      title: 'Load Testing & Global Launch',
                      desc: 'Zero-downtime production rollout, telemetry, and full IP transfer.'
                    }
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#0B0C14] border border-white/[0.06]"
                    >
                      <span className="font-mono text-xs font-bold text-[#00F5FF] px-2 py-1 rounded bg-[#00F5FF]/10 border border-[#00F5FF]/30">
                        {item.step}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white">{item.title}</div>
                        <div className="text-[11px] text-[#9499B3] mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR 4 CORE SOLUTIONS (DARK NEON SERVICE CARDS WITH SCHEMA.ORG & DATA ATTRIBUTES) */}
        <section id="core-solutions" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#00F5FF] mb-2">
                04 // CORE SOLUTIONS MATRIX
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Our 4 Core Engineering Solutions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9499B3] max-w-md">
              Every engagement is engineered with modular scalability, clean documentation, and
              measurable commercial ROI.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div
              data-testid="empty-services-state"
              className="rounded-2xl bg-[#0B0C14] border border-white/10 p-10 text-center space-y-4"
            >
              <p className="font-display text-lg text-white">
                No core solutions matched &ldquo;{searchQuery}&rdquo; in {activeTag}.
              </p>
              <p className="text-xs text-[#9499B3] max-w-md mx-auto">
                Reset the filter scope or contact our engineering desk directly for bespoke
                architectural requirements.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#00F5FF] text-[#05050A] font-mono text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div
              id="portfolio-cards-grid"
              data-testid="core-services-grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredServices.map((service) => (
                <article
                  key={service.id}
                  data-testid={`service-card-${service.id}`}
                  data-keywords={service.keywords.join(', ')}
                  data-category={service.category}
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="hasOfferCatalog"
                  className={`group rounded-2xl bg-[#0B0C14]/90 border border-white/10 ${
                    accentBorderMap[service.accentColor]
                  } transition-all duration-300 overflow-hidden flex flex-col justify-between relative shadow-[0_12px_40px_rgba(0,0,0,0.65)]`}
                >
                  {/* Top Neon Laser Hairline */}
                  <div
                    className={`h-[2px] w-full bg-gradient-to-r ${
                      accentGlowLineMap[service.accentColor]
                    }`}
                  />

                  <div>
                    {/* Custom Architectural SVG Header Visual */}
                    <div className="p-4 pb-0">
                      <ServiceCardVisual visualType={service.visualType} />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`font-mono text-[11px] uppercase tracking-widest ${
                            accentTextMap[service.accentColor]
                          }`}
                        >
                          SOLUTION {service.indexNumber}
                        </span>
                        <span
                          itemProp="serviceType"
                          className="font-mono text-[11px] text-[#9499B3] px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10"
                        >
                          {service.category}
                        </span>
                      </div>

                      <h3
                        itemProp="name"
                        className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-2.5"
                      >
                        {service.title}
                      </h3>

                      <p
                        itemProp="description"
                        className="text-xs sm:text-sm text-[#9499B3] leading-relaxed mb-5"
                      >
                        {service.description}
                      </p>

                      {/* 3 Data Points Max Inside Card Body */}
                      <div className="space-y-2 border-t border-white/10 pt-4">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-white/90">
                            <Check
                              className={`w-3.5 h-3.5 shrink-0 ${
                                accentTextMap[service.accentColor]
                              }`}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Metrics & Action */}
                  <div className="px-6 py-4 bg-[#05050A]/80 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[#9499B3]">{service.prototypeSla}</span>
                    <button
                      type="button"
                      onClick={() => handleSelectServiceForInquiry(service.title)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00F5FF] hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      <span>Configure Scope</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 5. PORTFOLIO SHOWCASE SECTION */}
        <section id="portfolio-showcase" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF2A85] mb-2">
                05 // VERIFIED PRODUCTION DEPLOYMENTS
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Portfolio Showcase
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9499B3] max-w-md">
              Production architectures engineered for high availability, rapid response times, and
              measurable business impact.
            </p>
          </div>

          {filteredPortfolio.length === 0 ? (
            <div className="rounded-2xl bg-[#0B0C14] border border-white/10 p-8 text-center">
              <p className="text-sm text-[#9499B3]">
                No portfolio case studies matched your current filter.{' '}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-[#00F5FF] underline ml-1 cursor-pointer"
                >
                  Show all projects
                </button>
              </p>
            </div>
          ) : (
            <div
              data-testid="portfolio-showcase-grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  data-testid={`portfolio-card-${item.id}`}
                  className="rounded-2xl bg-[#0B0C14]/90 border border-white/10 hover:border-[#8A2BE2]/60 p-6 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-[#00F5FF] uppercase tracking-wider">
                        {item.clientProfile}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#10B981] px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30">
                        {item.impactMetric}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9499B3] leading-relaxed mb-5">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-white/80 px-2.5 py-1 rounded bg-[#05050A] border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectServiceForInquiry(item.title)}
                      className="font-mono text-xs text-[#B975FF] hover:text-[#00F5FF] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Request Similar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 5B. APIFY & LIVE AI ENDPOINT INTEGRATION CONSOLE */}
        <ApifyAutomationConsole />

        {/* 6. FLEXIBLE TIMELINE POLICY SECTION */}
        <section id="timeline-policy" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="rounded-2xl bg-[#0B0C14]/95 border border-[#10B981]/30 p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#10B981] mb-2">
                <Clock className="w-4 h-4" />
                <span>06 // FLEXIBLE TIMELINE POLICY</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Adaptive Delivery Schedules Built Around Your Commercial Targets
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#9499B3] leading-relaxed">
                Every software initiative carries unique market timing. Orbit Agency provides a
                transparent, milestone-backed Flexible Timeline Policy—allowing clients to select
                accelerated 24-hour prototype kickoffs or structured multi-phase enterprise sprints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TIMELINE_POLICY_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-xl bg-[#05050A] border border-white/10 hover:border-[#00F5FF]/40 p-5 flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-[#00F5FF] font-semibold">
                        {tier.tierLabel}
                      </span>
                      <span className="font-mono text-[11px] text-[#10B981] px-2.5 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/30">
                        {tier.turnaround}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-[#9499B3] leading-relaxed mb-3">{tier.idealFor}</p>
                    <ul className="space-y-1.5">
                      {tier.commitments.map((c) => (
                        <li key={c} className="text-xs text-slate-300 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-white/75">
                    <Zap className="w-3.5 h-3.5 text-[#00F5FF]" />
                    <span>Milestone-Verified Delivery</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. EXECUTIVE LEADERSHIP SECTION (NAVEED ALI) */}
        <section id="executive-leadership" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B0C14] via-[#0F0C1D] to-[#0B0C14] border border-[#8A2BE2]/40 p-6 sm:p-10 shadow-[0_0_45px_rgba(138,43,226,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Executive Monogram Seal & Credentials */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative w-28 h-28 rounded-2xl bg-[#05050A] border border-[#00F5FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.2)] mb-4">
                  <div className="absolute inset-1.5 rounded-xl border border-[#8A2BE2]/40 pointer-events-none" />
                  <span className="font-display font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#00F5FF] via-white to-[#FF2A85]">
                    NA
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00F5FF]/10 border border-[#00F5FF]/30 font-mono text-[11px] text-[#00F5FF] uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Leadership</span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {AGENCY_FOUNDER_NAME}
                </h2>
                <p className="font-mono text-xs text-[#B975FF] mt-1">{AGENCY_FOUNDER_TITLE}</p>
                <p className="font-mono text-[11px] text-[#9499B3] mt-0.5">Orbit Agency</p>
              </div>

              {/* Right Executive Bio & Governance Commitments */}
              <div className="lg:col-span-8 space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#00F5FF]">
                  07 // DIRECTOR&apos;S ARCHITECTURAL MANDATE
                </div>
                <blockquote className="font-display text-lg sm:text-xl text-white leading-relaxed">
                  &ldquo;At Orbit Agency, we treat every client engagement as mission-critical
                  infrastructure. From autonomous AI pipelines to cross-platform mobile ecosystems,
                  our mandate is uncompromising code quality, transparent sprint governance, and
                  rapid commercial execution.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#9499B3] leading-relaxed">
                  As {AGENCY_FOUNDER_TITLE},{' '}
                  <strong className="text-white">{AGENCY_FOUNDER_NAME}</strong> personally oversees
                  technical architecture reviews, enterprise security compliance, and agile delivery
                  milestones for international organizations partnering with Orbit Agency.
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="leadership-whatsapp-link"
                    className="px-5 py-2.5 rounded-xl bg-[#10B981] text-[#05050A] font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect with {AGENCY_FOUNDER_NAME} on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToSection('start-project')}
                    className="px-5 py-2.5 rounded-xl bg-[#05050A] border border-[#00F5FF]/40 text-[#00F5FF] hover:text-white hover:border-[#00F5FF] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Schedule Executive Briefing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SECURE PROJECT INQUIRY FORM SECTION */}
        <section id="start-project" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Security Protocol & Direct Executive Channels */}
            <div className="lg:col-span-5 space-y-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#00F5FF]">
                08 // START A PROJECT
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Initiate Your Project Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-[#9499B3] leading-relaxed">
                Submit your technical requirements through our encrypted dispatch portal or launch
                an instant executive briefing on WhatsApp. Every inquiry is protected under strict
                non-disclosure governance.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#0B0C14] border border-white/10 flex items-start gap-3.5">
                  <Shield className="w-5 h-5 text-[#00F5FF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white">
                      Protected Dispatch Routing
                    </h3>
                    <p className="text-xs text-[#9499B3] mt-1">
                      To prevent automated harvesting, our executive inbox is shielded behind
                      encrypted form dispatch and never exposed as plain text on screen.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0C14] border border-white/10 flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#B975FF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white">
                      International Studio Operations
                    </h3>
                    <p className="text-xs text-[#9499B3] mt-1">
                      Synchronized sprint management across North America, Europe, Middle East, and
                      Asia-Pacific commercial hubs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0B0C14] to-[#071A16] border border-[#10B981]/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#10B981]">
                    INSTANT EXECUTIVE CHANNEL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                </div>
                <p className="text-xs text-white/90 mb-4">
                  Prefer real-time architectural consultation? Message our leadership desk directly
                  on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#10B981] text-[#05050A] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Briefing</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Secure Inquiry Form */}
            <div className="lg:col-span-7">
              <SecureInquiryForm preselectedCategory={preselectedCategory} />
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#05050A] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5FF] shadow-[0_0_10px_#00F5FF]" />
            <span className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Orbit Agency
            </span>
          </div>

          <p data-testid="footer-copyright" className="font-mono text-xs text-[#9499B3]">
            {FOOTER_EXACT_TEXT}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="font-mono text-xs text-[#00F5FF] hover:underline cursor-pointer"
            >
              Top ↑
            </button>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#10B981] hover:underline"
            >
              WhatsApp Desk
            </a>
          </div>
        </div>
      </footer>

      {/* Native Mobile App Feel: Compact Bottom Action Bar on Mobile Viewports (48px height) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden h-12 bg-[#0B0C14]/95 backdrop-blur-xl border-t border-white/15 px-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => scrollToSection('start-project')}
          className="flex-1 h-8 rounded-lg bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2] text-[#05050A] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Start Project</span>
        </button>
        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-8 rounded-lg bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default App;
