/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  Cpu,
  Globe,
  Layers,
  Shield,
  Clock,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Award,
  Briefcase,
  BookOpen,
  FileText,
  AlertCircle,
} from 'lucide-react';
import {
  AGENCY_FOUNDER_NAME,
  AGENCY_FOUNDER_TITLE,
  BLOG_POSTS,
  CORE_SERVICES,
  CoreServiceCard,
  FilterCategory,
  FOOTER_EXACT_TEXT,
  LEGAL_SECTIONS,
  TIMELINE_POLICY_TIERS,
  WHATSAPP_BASE_URL,
} from './data/orbitData';
import {
  buildWhatsAppUrl,
  filterServices,
} from './utils/searchAndValidation';
import { ActivePageView, NavbarAndDrawer } from './components/NavbarAndDrawer';
import { ServiceCardVisual } from './components/ServiceCardVisual';
import { SecureInquiryForm } from './components/SecureInquiryForm';
import { NeonOrbitIcon } from './components/NeonOrbitIcon';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState<ActivePageView>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<FilterCategory>('All');
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>(
    CORE_SERVICES[0].title
  );

  const filteredServices = useMemo(
    () => filterServices(CORE_SERVICES, searchQuery, activeTag),
    [searchQuery, activeTag]
  );

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const target = document.getElementById(id.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const handleSelectPage = (page: ActivePageView, scrollToId?: string) => {
    setActivePage(page);
    if (scrollToId) {
      scrollToSection(scrollToId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDiscussService = (service: CoreServiceCard) => {
    setSelectedServiceForForm(service.title);
    setActivePage('home');
    scrollToSection('start-project');
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveTag('All');
  };

  const renderServiceIcon = (visualType: CoreServiceCard['visualType']) => {
    switch (visualType) {
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-sky-600" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'web':
        return <Globe className="w-4 h-4 text-pink-600" />;
      case 'management':
        return <Layers className="w-4 h-4 text-emerald-600" />;
    }
  };

  const getCardBorderClasses = (accent: CoreServiceCard['accentColor']) => {
    switch (accent) {
      case 'cyan':
        return 'border-slate-200 hover:border-sky-500';
      case 'purple':
        return 'border-slate-200 hover:border-purple-500';
      case 'pink':
        return 'border-slate-200 hover:border-pink-500';
      case 'green':
        return 'border-slate-200 hover:border-emerald-500';
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-x-hidden">
      {/* COMPACT TOP HEADER WITH ROTATING ORBIT ICON + TOP SEARCH BAR + SIDE MENU FOLDERS */}
      <NavbarAndDrawer
        isOpen={isDrawerOpen}
        onToggle={() => setIsDrawerOpen((prev) => !prev)}
        onClose={() => setIsDrawerOpen(false)}
        activePage={activePage}
        onSelectPage={handleSelectPage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTag={activeTag}
        onTagChange={setActiveTag}
        totalSolutionsCount={CORE_SERVICES.length}
        filteredSolutionsCount={filteredServices.length}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6">
        {activePage === 'home' ? (
          <>
            {/* 1. COMPACT, CRISP HERO SECTION */}
            <section id="home" className="pt-6 sm:pt-8 pb-6 text-center border-b border-slate-200">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 mb-1.5">
                GLOBAL WEBSITE, AI &amp; MOBILE APP DEVELOPMENT STUDIO
              </p>

              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-slate-950 max-w-3xl mx-auto leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Orbit Agency — Global Software, AI and Mobile App Development Management
              </h1>

              <p className="mt-2.5 text-xs sm:text-sm font-bold text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Turn your vision into scalable digital products. Get a quick 24-hour prototype start
                for small scopes, backed by flexible project timeline management tailored entirely to
                your project scale.
              </p>

              {/* Compact Hero Action Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 max-w-md mx-auto">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp to Start</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('start-project')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Submit Project via Secure Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>

            {/* 2. THE 4 COMPACT VISUAL PORTFOLIO & SERVICE CARDS */}
            <section id="core-solutions" className="py-6 sm:py-8">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
                    COMPLETE SECURE BUILD PROCESS &amp; SOLUTIONS
                  </span>
                  <h2 className="text-lg sm:text-2xl font-extrabold font-display text-slate-950">
                    Our 4 Core Website, AI &amp; App Solutions
                  </h2>
                </div>
                {(searchQuery || activeTag !== 'All') && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[11px] font-extrabold text-blue-700 hover:bg-blue-100 cursor-pointer shrink-0"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              {filteredServices.length === 0 ? (
                <div
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center space-y-3"
                  data-testid="empty-services-state"
                >
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">
                    No cards matched "{searchQuery}" under {activeTag}.
                  </p>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white font-extrabold text-xs cursor-pointer"
                  >
                    Show All 4 Cards
                  </button>
                </div>
              ) : (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
                  data-testid="core-services-grid"
                >
                  {filteredServices.map((service) => {
                    const topPortfolio = service.portfolioHighlights[0];
                    return (
                      <article
                        key={service.id}
                        data-testid={`service-card-${service.id}`}
                        className={`rounded-2xl bg-white border p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all ${getCardBorderClasses(
                          service.accentColor
                        )}`}
                      >
                        <div>
                          {/* Compact Top Meta */}
                          <div className="flex items-center justify-between gap-2 text-[11px] font-extrabold text-slate-500 mb-2.5">
                            <span className="font-mono-tabular text-blue-700">
                              {service.indexNumber} · {service.category}
                            </span>
                            <span className="font-mono-tabular text-emerald-700">
                              {service.prototypeSla}
                            </span>
                          </div>

                          {/* Visual Image & 3-Step Build Process Inside Card */}
                          <ServiceCardVisual visualType={service.visualType} />

                          {/* Compact Bold Title */}
                          <div className="mt-3.5 flex items-center gap-2">
                            <span className="shrink-0">{renderServiceIcon(service.visualType)}</span>
                            <h3 className="text-base sm:text-lg font-extrabold font-display text-slate-950 leading-snug">
                              {service.title}
                            </h3>
                          </div>

                          {/* Short, Unique & Professional Description */}
                          <p className="mt-1.5 text-xs font-bold text-slate-600 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Concise Verified Portfolio Proof Line */}
                          {topPortfolio && (
                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-extrabold text-slate-900 truncate">
                                Portfolio: {topPortfolio.name}
                              </span>
                              <span className="font-extrabold text-emerald-700 font-mono-tabular shrink-0">
                                {topPortfolio.outcomeMetric.split(' ')[0]}{' '}
                                {topPortfolio.outcomeMetric.split(' ')[1]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Compact Card Footer Buttons */}
                        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleDiscussService(service)}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
                          >
                            <span>Discuss This Service</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={buildWhatsAppUrl(
                              `Hello Naveed Ali, I would like to discuss "${service.title}" with Orbit Agency.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-600 border border-emerald-600 text-emerald-900 hover:text-white text-xs font-extrabold transition-all whitespace-nowrap"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            {/* 3. COMPACT SECURE PROJECT INQUIRY FORM ON HOME PAGE */}
            <section id="start-project" className="py-6 sm:py-8 border-t border-slate-200">
              <SecureInquiryForm preselectedCategory={selectedServiceForForm} />
            </section>
          </>
        ) : (
          /* DEDICATED SIDE-MENU FOLDER PAGE VIEWS (Leadership, About, Timeline, Blogs, Privacy, Terms, Disclaimer) */
          <div className="py-6 sm:py-8 space-y-6">
            {/* Top Back to Home Page Bar */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <button
                type="button"
                onClick={() => handleSelectPage('home')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-extrabold text-xs cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home Page</span>
              </button>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-extrabold text-xs cursor-pointer"
              >
                All Side Menu Folders
              </button>
            </div>

            {/* FOLDER VIEW: EXECUTIVE LEADERSHIP (NAVEED ALI) WITH VISUAL PORTRAIT EMBLEM CARD */}
            {activePage === 'leadership' && (
              <section
                id="executive-leadership"
                className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-8 shadow-xs space-y-6"
              >
                {/* Visual Executive Banner Image Card */}
                <div className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-7 text-white flex flex-col sm:flex-row items-center gap-5 shadow-md">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 border-2 border-sky-400 flex flex-col items-center justify-center shadow-lg">
                      <NeonOrbitIcon className="w-12 h-12" />
                      <span className="text-[10px] font-extrabold tracking-widest text-sky-300 mt-1">
                        FOUNDER
                      </span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-400 block">
                      EXECUTIVE LEADERSHIP FOLDER · ORBIT AGENCY
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-0.5">
                      {AGENCY_FOUNDER_NAME}
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-sky-200 mt-0.5">
                      {AGENCY_FOUNDER_TITLE}
                    </p>
                    <p className="text-xs font-bold text-slate-300 mt-2 max-w-xl leading-relaxed">
                      Direct executive supervision of all website portfolios, custom AI platforms,
                      and mobile application architecture under strict milestone security.
                    </p>
                  </div>
                </div>

                {/* 3 Compact Executive Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-blue-700">
                      <Award className="w-4 h-4" />
                      <span>Quality Assurance</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1.5 leading-relaxed">
                      Every line of code and UI screen is reviewed and tested across desktop and
                      mobile before delivery.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-purple-700">
                      <Shield className="w-4 h-4" />
                      <span>Confidential NDA Handling</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1.5 leading-relaxed">
                      100% private project handling, protected client verification, and full IP
                      ownership transfer.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700">
                      <Briefcase className="w-4 h-4" />
                      <span>Milestone-Based Delivery</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1.5 leading-relaxed">
                      24-hour prototype start for small scopes and verifiable sprint releases for
                      large builds.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl(
                      'Hello Naveed Ali, I would like to discuss a new project with Orbit Agency.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Directly with Naveed Ali on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleSelectPage('home', 'start-project')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Submit Project via Secure Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            )}

            {/* FOLDER VIEW: ABOUT ORBIT AGENCY */}
            {activePage === 'about' && (
              <section
                id="custom-introduction"
                className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-8 space-y-5"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
                    ABOUT FOLDER · STUDIO INTRODUCTION
                  </span>
                  <h1 className="text-xl sm:text-3xl font-extrabold font-display text-slate-950 mt-1">
                    About Orbit Agency — Precision Engineering Meets Executive Management
                  </h1>
                </div>

                <div className="space-y-3 text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-950 font-extrabold">Orbit Agency</strong>, led by
                    Founder and Managing Director{' '}
                    <strong className="text-blue-700 font-extrabold">{AGENCY_FOUNDER_NAME}</strong>,
                    bridges the gap between ambitious startup ideas and market-ready software. We
                    deliver complete, secure websites, custom portfolios, AI tools, and mobile
                    applications under one roof.
                  </p>
                  <p>
                    Clients never have to worry about hiring or managing individual coders because
                    our dedicated global engineering roster handles architecture, UI/UX design,
                    coding, testing, and deployment under strict milestone security.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-950">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span>Zero Hiring Stress</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      Complete design, coding, and QA managed for you from start to finish.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-950">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span>24-Hour Prototype Start</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      Fast 24-hour prototype kickoff for small scopes and flexible timelines.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-950">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>100% Secure Delivery</span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      Full source code ownership and verified staging previews at every step.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* FOLDER VIEW: FLEXIBLE TIMELINE POLICY */}
            {activePage === 'timeline' && (
              <section id="timeline-policy" className="space-y-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
                    TIMELINE POLICY FOLDER
                  </span>
                  <h1 className="text-xl sm:text-2xl font-extrabold font-display text-slate-950">
                    24-Hour Quick Prototype Start &amp; Flexible Milestone Policy
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {TIMELINE_POLICY_TIERS.map((tier) => (
                    <div
                      key={tier.id}
                      className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-extrabold font-mono-tabular">
                          <span style={{ color: tier.accentHex }}>{tier.tierLabel}</span>
                          <span className="text-slate-950">{tier.turnaround}</span>
                        </div>
                        <h3 className="mt-2 text-base font-extrabold font-display text-slate-950">
                          {tier.title}
                        </h3>
                        <p className="mt-1 text-xs font-extrabold text-blue-700">
                          {tier.idealFor}
                        </p>
                        <ul className="mt-3 pt-3 border-t border-slate-200 space-y-2 text-xs font-bold text-slate-700">
                          {tier.commitments.map((c) => (
                            <li key={c} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-extrabold">✓</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FOLDER VIEW: INSIGHTS & ENGINEERING BLOGS */}
            {activePage === 'blogs' && (
              <section id="blogs-section" className="space-y-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
                    BLOGS &amp; GUIDES FOLDER
                  </span>
                  <h1 className="text-xl sm:text-2xl font-extrabold font-display text-slate-950">
                    Website Portfolio, AI &amp; App Development Blogs
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BLOG_POSTS.map((blog) => (
                    <article
                      key={blog.id}
                      className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3"
                    >
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-blue-700">
                        <span className="inline-flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{blog.tag}</span>
                        </span>
                        <span className="text-slate-500">{blog.readTime}</span>
                      </div>
                      <h3 className="text-base font-extrabold font-display text-slate-950">
                        {blog.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-700 leading-relaxed">
                        {blog.summary}
                      </p>
                      <ul className="pt-2 border-t border-slate-200 space-y-1 text-xs font-bold text-slate-700">
                        {blog.keyTakeaways.map((point) => (
                          <li key={point} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-extrabold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* FOLDER VIEWS: PRIVACY POLICY, TERMS & CONDITIONS, DISCLAIMER */}
            {(activePage === 'privacy' ||
              activePage === 'terms' ||
              activePage === 'disclaimer') && (
              <section className="space-y-4">
                {/* Quick Switch Tabs Between the 3 Legal Folders */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActivePage('privacy')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer border ${
                      activePage === 'privacy'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-800 border-slate-200'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Privacy Policy</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('terms')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer border ${
                      activePage === 'terms'
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-white text-slate-800 border-slate-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Terms &amp; Conditions</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('disclaimer')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer border ${
                      activePage === 'disclaimer'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-800 border-slate-200'
                    }`}
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Disclaimer</span>
                  </button>
                </div>

                {LEGAL_SECTIONS.filter(
                  (l) =>
                    (activePage === 'privacy' && l.anchorId === 'legal-privacy') ||
                    (activePage === 'terms' && l.anchorId === 'legal-terms') ||
                    (activePage === 'disclaimer' && l.anchorId === 'legal-disclaimer')
                ).map((legal) => (
                  <article
                    key={legal.id}
                    className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-7 space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-extrabold text-blue-700 font-mono-tabular">
                      <span>{legal.badge}</span>
                      <span className="text-slate-500">{legal.lastUpdated}</span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-extrabold font-display text-slate-950">
                      {legal.title} — Orbit Agency
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                      {legal.summary}
                    </p>
                    <div className="pt-3 border-t border-slate-200 space-y-3">
                      {legal.clauses.map((clause) => (
                        <div
                          key={clause.heading}
                          className="p-4 rounded-xl bg-white border border-slate-200"
                        >
                          <h2 className="text-xs sm:text-sm font-extrabold text-slate-950">
                            {clause.heading}
                          </h2>
                          <p className="mt-1 text-xs font-bold text-slate-600 leading-relaxed">
                            {clause.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </section>
            )}
          </div>
        )}
      </main>

      {/* CLEAN SINGLE-LINE 2026 COPYRIGHT FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-5 px-4 text-center mt-6">
        <p className="text-xs font-extrabold text-slate-700">{FOOTER_EXACT_TEXT}</p>
      </footer>
    </div>
  );
}
