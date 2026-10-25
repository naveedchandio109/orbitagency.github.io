import React, { useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SIDE_DRAWER_LINKS, WHATSAPP_BASE_URL } from '../data/orbitData';

interface NavbarAndDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export const NavbarAndDrawer: React.FC<NavbarAndDrawerProps> = ({
  isOpen,
  onToggle,
  onClose,
  onNavigate,
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    onClose();
  };

  return (
    <>
      {/* Top Navigation Bar following strict 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-40 w-full bg-[#05050A]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-8 h-14 sm:h-16">
          {/* Zone 1: Glowing Orbit Agency Brand Title (Single text element wordmark) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl sm:text-2xl font-extrabold tracking-tight font-display bg-gradient-to-r from-[#FFFFFF] via-[#00F5FF] to-[#8A2BE2] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(0,245,255,0.35)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#00F5FF]"
          >
            Orbit Agency
          </a>

          {/* Zone 2: 4 Concise Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            <a
              href="#custom-introduction"
              onClick={(e) => handleLinkClick(e, '#custom-introduction')}
              className="hover:text-[#00F5FF] transition-colors whitespace-nowrap shrink-0"
            >
              Introduction
            </a>
            <a
              href="#core-solutions"
              onClick={(e) => handleLinkClick(e, '#core-solutions')}
              className="hover:text-[#00F5FF] transition-colors whitespace-nowrap shrink-0"
            >
              Core Solutions
            </a>
            <a
              href="#portfolio-showcase"
              onClick={(e) => handleLinkClick(e, '#portfolio-showcase')}
              className="hover:text-[#00F5FF] transition-colors whitespace-nowrap shrink-0"
            >
              Portfolio
            </a>
            <a
              href="#executive-leadership"
              onClick={(e) => handleLinkClick(e, '#executive-leadership')}
              className="hover:text-[#00F5FF] transition-colors whitespace-nowrap shrink-0"
            >
              Leadership
            </a>
          </nav>

          {/* Zone 3: 3-Line Hamburger Menu Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls="orbit-side-drawer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#0D0E17] border border-[#00F5FF]/40 text-[#F4F6FB] hover:border-[#00F5FF] hover:shadow-[0_0_18px_rgba(0,245,255,0.28)] transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[42px]"
            >
              <span className="text-xs font-semibold tracking-wide text-[#00F5FF] hidden sm:inline">
                Menu
              </span>
              {isOpen ? (
                <X className="w-5 h-5 text-[#00F5FF]" />
              ) : (
                <Menu className="w-5 h-5 text-[#00F5FF]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Dark Glass Side Drawer Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Orbit Agency Navigation Drawer"
          id="orbit-side-drawer"
        >
          {/* Backdrop Scrim */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sliding Drawer Surface */}
          <aside className="relative z-10 w-full max-w-sm bg-[#080912]/95 backdrop-blur-2xl border-l border-[#00F5FF]/25 h-full flex flex-col justify-between p-6 sm:p-7 overflow-y-auto shadow-[-20px_0_50px_rgba(0,0,0,0.85)]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-lg font-bold font-display text-white tracking-tight block">
                    Orbit Agency
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Executive Directory &amp; Navigation
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close side drawer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#00F5FF]/50 transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav aria-label="Side Drawer Navigation" className="mt-5 space-y-1.5">
                {SIDE_DRAWER_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#00F5FF] hover:bg-[#00F5FF]/10 border border-transparent hover:border-[#00F5FF]/25 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono-tabular text-xs text-[#00F5FF]/75 group-hover:text-[#00F5FF]">
                        {item.sectionCode}.
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00F5FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-5 mt-6 border-t border-white/10 space-y-3">
              <div className="text-xs text-slate-400 leading-relaxed">
                Led by Founder &amp; Managing Director <strong className="text-white">Naveed Ali</strong> · 24-Hour Prototype Start for Small Scopes
              </div>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#04130D] font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all whitespace-nowrap"
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
