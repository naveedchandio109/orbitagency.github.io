import React, { useEffect } from 'react';
import {
  X,
  MessageSquare,
  ArrowUpRight,
  Search,
  Shield,
  FileText,
  AlertCircle,
  Home,
  Info,
  Award,
  BookOpen,
  Clock,
  Layers,
  Send,
} from 'lucide-react';
import {
  FILTER_TAGS,
  FilterCategory,
  WHATSAPP_BASE_URL,
} from '../data/orbitData';
import { NeonOrbitIcon } from './NeonOrbitIcon';

export type ActivePageView =
  | 'home'
  | 'about'
  | 'leadership'
  | 'timeline'
  | 'blogs'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

interface NavbarAndDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activePage: ActivePageView;
  onSelectPage: (page: ActivePageView, scrollToId?: string) => void;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  activeTag: FilterCategory;
  onTagChange: (tag: FilterCategory) => void;
  totalSolutionsCount: number;
  filteredSolutionsCount: number;
}

export const NavbarAndDrawer: React.FC<NavbarAndDrawerProps> = ({
  isOpen,
  onToggle,
  onClose,
  activePage,
  onSelectPage,
  searchQuery,
  onSearchChange,
  activeTag,
  onTagChange,
  totalSolutionsCount,
  filteredSolutionsCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleMenuFolderClick = (page: ActivePageView, scrollToId?: string) => {
    onSelectPage(page, scrollToId);
    onClose();
  };

  return (
    <>
      {/* COMPACT TOP WEBSITE HEADER WITH ROTATING ORBIT ICON + TOP SEARCH BAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        {/* Row 1: Compact Brand + Desktop Folder Links + Top 4-Line Menu Button */}
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-3 sm:px-6 py-2">
          {/* Left: Rotating Colorful Orbit Icon + Compact Bold "Orbit Agency" Title */}
          <button
            type="button"
            onClick={() => handleMenuFolderClick('home', 'home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <NeonOrbitIcon className="w-9 h-9 sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight font-display text-slate-950 group-hover:text-blue-700 transition-colors">
              Orbit Agency
            </span>
          </button>

          {/* Center: Compact Quick Navigation */}
          <nav
            aria-label="Primary Website Navigation"
            className="hidden md:flex items-center gap-5 text-xs font-extrabold text-slate-700"
          >
            <button
              type="button"
              onClick={() => handleMenuFolderClick('home', 'home')}
              className={`hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'home' ? 'text-blue-600' : ''
              }`}
            >
              Home Portfolio
            </button>
            <button
              type="button"
              onClick={() => handleMenuFolderClick('about')}
              className={`hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'about' ? 'text-blue-600' : ''
              }`}
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleMenuFolderClick('leadership')}
              className={`hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'leadership' ? 'text-blue-600' : ''
              }`}
            >
              Leadership (Naveed Ali)
            </button>
            <button
              type="button"
              onClick={() => handleMenuFolderClick('blogs')}
              className={`hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'blogs' ? 'text-blue-600' : ''
              }`}
            >
              Blogs
            </button>
            <button
              type="button"
              onClick={() => handleMenuFolderClick('privacy')}
              className={`hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'privacy' || activePage === 'terms' || activePage === 'disclaimer'
                  ? 'text-blue-600'
                  : ''
              }`}
            >
              Privacy & Terms
            </button>
          </nav>

          {/* Right: Compact Top 4-Line Menu Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls="orbit-side-drawer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-700 text-white font-extrabold text-xs shadow-2xs transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[36px]"
            >
              <span>Menu</span>
              {isOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="5" x2="21" y2="5" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="3" y1="20" x2="21" y2="20" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Compact Top Search Bar & Filter Tags */}
        <div
          id="search-services"
          className="bg-slate-50/90 border-t border-slate-200 px-3 sm:px-6 py-1.5"
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            {/* Compact Search Input */}
            <div className="relative flex-1">
              <label htmlFor="orbit-smart-search" className="sr-only">
                Search services or portfolios
              </label>
              <Search className="w-4 h-4 text-blue-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="orbit-smart-search"
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (activePage !== 'home') {
                    onSelectPage('home');
                  }
                }}
                placeholder="Search services or portfolios (e.g., AI Tools, iOS App, Android, E-Commerce, Management)..."
                className="w-full pl-9 pr-8 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Compact Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
              <div
                className="flex items-center gap-1"
                role="group"
                aria-label="Filter solutions by category"
              >
                {FILTER_TAGS.map((tag) => {
                  const isActive = activeTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        onTagChange(tag);
                        if (activePage !== 'home') {
                          onSelectPage('home');
                        }
                      }}
                      aria-pressed={isActive}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
              <span
                className="hidden lg:inline-block text-[11px] font-extrabold text-slate-600 font-mono-tabular pl-1 whitespace-nowrap"
                data-testid="search-results-summary"
              >
                {filteredSolutionsCount}/{totalSolutionsCount} Cards
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SIDE MENU DRAWER WITH CLEAN BOXED FOLDER CARDS FOR ALL SECTIONS & LEGAL PAGES */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Orbit Agency Navigation Drawer"
          id="orbit-side-drawer"
        >
          <div
            className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />

          <aside className="relative z-10 w-full max-w-sm bg-white border-l border-slate-200 h-full flex flex-col justify-between p-5 overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <NeonOrbitIcon className="w-9 h-9" />
                  <div>
                    <span className="text-base font-extrabold font-display text-slate-950 block">
                      Orbit Agency
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      All Website Folders & Legal Pages
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close side drawer"
                  className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Group 1: Main Website & Executive Folders (Styled in the exact boxed card design) */}
              <div className="mt-4">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  WEBSITE FOLDERS & LEADERSHIP
                </div>
                <nav aria-label="Side Drawer Navigation" className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('home', 'home')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Home className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Home Page (4 Core Portfolio Cards)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('leadership')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Executive Leadership (Naveed Ali)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('about')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Info className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>About Orbit Agency (Introduction)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('timeline')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Flexible Timeline Policy (24h Start)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('blogs')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>Insights & Engineering Blogs</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('home', 'start-project')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Send className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Start a Project (Inquiry Form)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                </nav>
              </div>

              {/* Group 2: Legal, Privacy & Governance Folders */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  LEGAL, PRIVACY & GOVERNANCE
                </div>
                <nav aria-label="Legal and Policy Navigation" className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('privacy')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Privacy Policy</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('terms')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Terms & Conditions</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMenuFolderClick('disclaimer')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-900 transition-all cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Disclaimer</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                </nav>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-4 mt-5 border-t border-slate-200 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-600 leading-snug">
                Led by Founder & Managing Director{' '}
                <strong className="text-slate-950 font-extrabold">Naveed Ali</strong> · 24-Hour
                Prototype Start for Small Scopes
              </div>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-sm transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp to Start</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
