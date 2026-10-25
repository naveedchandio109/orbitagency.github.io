import React from 'react';

interface ServiceCardVisualProps {
  visualType: 'mobile' | 'ai' | 'web' | 'management';
}

/**
 * Clean, high-resolution visual product mockup illustrations embedded inside each
 * of the 4 compact Home Page cards, illustrating the finished digital product
 * and our 3-step secure build process.
 */
export const ServiceCardVisual: React.FC<ServiceCardVisualProps> = ({ visualType }) => {
  if (visualType === 'mobile') {
    return (
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border border-sky-200 overflow-hidden relative flex items-center justify-between px-4 py-3">
        {/* Visual Phone & App Mockup Illustration */}
        <svg viewBox="0 0 320 120" className="w-full h-full" fill="none">
          {/* Phone Frame 1 */}
          <rect x="12" y="8" width="64" height="104" rx="10" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <rect x="32" y="14" width="24" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="20" y="24" width="48" height="26" rx="4" fill="#E0F2FE" />
          <path d="M25 42 L35 32 L45 38 L58 28" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <rect x="20" y="56" width="48" height="10" rx="3" fill="#F1F5F9" />
          <rect x="20" y="70" width="36" height="10" rx="3" fill="#F1F5F9" />
          <rect x="20" y="88" width="48" height="14" rx="4" fill="#0284C7" />
          <text x="31" y="98" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">iOS &amp; ANDROID</text>

          {/* Build Process Visual Cards on Right */}
          <rect x="92" y="14" width="214" height="26" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <circle cx="106" cy="27" r="6" fill="#0284C7" />
          <text x="104" y="30" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">1</text>
          <text x="120" y="25" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">24h UI/UX Interactive Prototype</text>
          <text x="120" y="35" fill="#475569" fontSize="7" fontFamily="sans-serif">Clean mobile screens &amp; user flow</text>

          <rect x="92" y="47" width="214" height="26" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <circle cx="106" cy="60" r="6" fill="#0284C7" />
          <text x="104" y="63" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">2</text>
          <text x="120" y="58" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Secure Native &amp; Cloud Coding</text>
          <text x="120" y="68" fill="#475569" fontSize="7" fontFamily="sans-serif">Fast database, login &amp; real-time sync</text>

          <rect x="92" y="80" width="214" height="26" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <circle cx="106" cy="93" r="6" fill="#10B981" />
          <text x="104" y="96" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">3</text>
          <text x="120" y="91" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">App Store &amp; Play Store Launch</text>
          <text x="120" y="101" fill="#059669" fontSize="7" fontWeight="bold" fontFamily="sans-serif">100% Verified &amp; Ready for Users</text>
        </svg>
      </div>
    );
  }

  if (visualType === 'ai') {
    return (
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 border border-purple-200 overflow-hidden relative flex items-center justify-between px-4 py-3">
        <svg viewBox="0 0 320 120" className="w-full h-full" fill="none">
          {/* AI Hub Illustration */}
          <rect x="12" y="12" width="72" height="96" rx="10" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="48" cy="44" r="18" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="1.8" />
          <polygon points="48,32 58,44 48,56 38,44" fill="#7C3AED" />
          <rect x="22" y="72" width="52" height="10" rx="3" fill="#F3E8FF" />
          <text x="27" y="79.5" fill="#6D28D9" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">AI AUTOMATION</text>
          <rect x="22" y="87" width="52" height="12" rx="4" fill="#7C3AED" />
          <text x="29" y="95" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">24/7 ACTIVE</text>

          {/* 3-Step AI Build Process */}
          <rect x="98" y="14" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1.5" />
          <circle cx="112" cy="27" r="6" fill="#7C3AED" />
          <text x="110" y="30" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">1</text>
          <text x="126" y="25" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Custom AI &amp; Workflow Setup</text>
          <text x="126" y="35" fill="#475569" fontSize="7" fontFamily="sans-serif">Tailored to your business data &amp; goals</text>

          <rect x="98" y="47" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1.5" />
          <circle cx="112" cy="60" r="6" fill="#7C3AED" />
          <text x="110" y="63" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">2</text>
          <text x="126" y="58" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Chatbot, Voice &amp; SaaS Integration</text>
          <text x="126" y="68" fill="#475569" fontSize="7" fontFamily="sans-serif">Private, encrypted &amp; ultra-fast responses</text>

          <rect x="98" y="80" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1.5" />
          <circle cx="112" cy="93" r="6" fill="#10B981" />
          <text x="110" y="96" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">3</text>
          <text x="126" y="91" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Automated Revenue &amp; Time Savings</text>
          <text x="126" y="101" fill="#059669" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Saves 80%+ manual work immediately</text>
        </svg>
      </div>
    );
  }

  if (visualType === 'web') {
    return (
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 border border-pink-200 overflow-hidden relative flex items-center justify-between px-4 py-3">
        <svg viewBox="0 0 320 120" className="w-full h-full" fill="none">
          {/* Website Portfolio & Store Browser Mockup */}
          <rect x="10" y="12" width="80" height="96" rx="8" fill="#FFFFFF" stroke="#DB2777" strokeWidth="2" />
          <line x1="10" y1="26" x2="90" y2="26" stroke="#FBCFE8" strokeWidth="1.5" />
          <circle cx="18" cy="19" r="2.2" fill="#DB2777" />
          <circle cx="25" cy="19" r="2.2" fill="#F59E0B" />
          <circle cx="32" cy="19" r="2.2" fill="#10B981" />
          <rect x="18" y="34" width="64" height="28" rx="4" fill="#FDF2F8" />
          <text x="23" y="51" fill="#BE185D" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">WEB PORTFOLIO</text>
          <rect x="18" y="68" width="30" height="14" rx="3" fill="#F1F5F9" />
          <rect x="52" y="68" width="30" height="14" rx="3" fill="#F1F5F9" />
          <rect x="18" y="88" width="64" height="13" rx="4" fill="#DB2777" />
          <text x="24" y="96.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">STRIPE CHECKOUT</text>

          {/* 3-Step Website Build Process */}
          <rect x="102" y="14" width="204" height="26" rx="6" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="1.5" />
          <circle cx="116" cy="27" r="6" fill="#DB2777" />
          <text x="114" y="30" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">1</text>
          <text x="130" y="25" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Custom Website &amp; Portfolio Design</text>
          <text x="130" y="35" fill="#475569" fontSize="7" fontFamily="sans-serif">Clean, modern &amp; mobile-responsive layout</text>

          <rect x="102" y="47" width="204" height="26" rx="6" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="1.5" />
          <circle cx="116" cy="60" r="6" fill="#DB2777" />
          <text x="114" y="63" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">2</text>
          <text x="130" y="58" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">E-Commerce &amp; Global Payments</text>
          <text x="130" y="68" fill="#475569" fontSize="7" fontFamily="sans-serif">Stripe checkout &amp; multi-currency support</text>

          <rect x="102" y="80" width="204" height="26" rx="6" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="1.5" />
          <circle cx="116" cy="93" r="6" fill="#10B981" />
          <text x="114" y="96" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">3</text>
          <text x="130" y="91" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">High-Speed Hosting &amp; SEO Ready</text>
          <text x="130" y="101" fill="#059669" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Built to convert visitors into clients</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 overflow-hidden relative flex items-center justify-between px-4 py-3">
      <svg viewBox="0 0 320 120" className="w-full h-full" fill="none">
        {/* Shield & Milestone Guarantee Graphic */}
        <rect x="12" y="12" width="72" height="96" rx="10" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
        <circle cx="48" cy="44" r="18" fill="#D1FAE5" stroke="#059669" strokeWidth="1.8" />
        <path d="M41 44 L46 49 L56 39" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="71" width="56" height="10" rx="3" fill="#D1FAE5" />
        <text x="24" y="78.5" fill="#065F46" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">24H PROTOTYPE</text>
        <rect x="20" y="86" width="56" height="13" rx="4" fill="#059669" />
        <text x="24" y="94.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">FULL SECURITY</text>

        {/* 3-Step Managed Delivery Process */}
        <rect x="98" y="14" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1.5" />
        <circle cx="112" cy="27" r="6" fill="#059669" />
        <text x="110" y="30" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">1</text>
        <text x="126" y="25" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">24-Hour Quick Response &amp; Start</text>
        <text x="126" y="35" fill="#475569" fontSize="7" fontFamily="sans-serif">Fast prototype kickoff for small scopes</text>

        <rect x="98" y="47" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1.5" />
        <circle cx="112" cy="60" r="6" fill="#059669" />
        <text x="110" y="63" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">2</text>
        <text x="126" y="58" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Dedicated Team Managed For You</text>
        <text x="126" y="68" fill="#475569" fontSize="7" fontFamily="sans-serif">Designers, coders &amp; QA under one roof</text>

        <rect x="98" y="80" width="208" height="26" rx="6" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1.5" />
        <circle cx="112" cy="93" r="6" fill="#0284C7" />
        <text x="110" y="96" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">3</text>
        <text x="126" y="91" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">Flexible Milestone Delivery</text>
        <text x="126" y="101" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="sans-serif">100% IP Ownership &amp; NDA Protection</text>
      </svg>
    </div>
  );
};
