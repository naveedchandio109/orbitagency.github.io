import React from 'react';

interface ServiceCardVisualProps {
  visualType: 'mobile' | 'ai' | 'web' | 'management';
}

export const ServiceCardVisual: React.FC<ServiceCardVisualProps> = ({ visualType }) => {
  if (visualType === 'mobile') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-[#070812] border border-[#00F5FF]/20 overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,245,255,0.14),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.14),transparent_60%)]" />
        <svg viewBox="0 0 360 150" className="w-full h-full relative z-10" fill="none">
          {/* Dual Native iOS & Android Device Frames */}
          <rect x="28" y="14" width="132" height="122" rx="12" fill="#0B0E1A" stroke="#00F5FF" strokeOpacity="0.5" strokeWidth="1.5" />
          <rect x="68" y="20" width="52" height="4" rx="2" fill="#00F5FF" fillOpacity="0.4" />
          <path d="M42 78 C62 54, 82 92, 102 64 C118 44, 132 72, 146 52" stroke="#00F5FF" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="42" y="94" width="54" height="8" rx="4" fill="#00F5FF" fillOpacity="0.25" />
          <rect x="42" y="108" width="84" height="6" rx="3" fill="#8A2BE2" fillOpacity="0.35" />
          <circle cx="136" cy="100" r="10" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.4" />
          <path d="M132 100 L135 103 L141 97" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" />

          {/* Second Card / Real-time Sync Panel */}
          <rect x="184" y="22" width="148" height="106" rx="10" fill="#0B0E1A" stroke="#8A2BE2" strokeOpacity="0.55" strokeWidth="1.5" />
          <text x="198" y="44" fill="#00F5FF" fontSize="9" fontFamily="monospace">iOS · ANDROID SYNC</text>
          <rect x="198" y="54" width="118" height="18" rx="4" fill="#121629" stroke="#00F5FF" strokeOpacity="0.25" />
          <circle cx="209" cy="63" r="4" fill="#00F5FF" />
          <rect x="220" y="60" width="66" height="6" rx="3" fill="#E2E8F0" fillOpacity="0.6" />
          <rect x="198" y="80" width="56" height="32" rx="4" fill="#121629" stroke="#10B981" strokeOpacity="0.35" />
          <text x="206" y="99" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">99.98%</text>
          <rect x="260" y="80" width="56" height="32" rx="4" fill="#121629" stroke="#FF2A85" strokeOpacity="0.35" />
          <text x="269" y="99" fill="#FF2A85" fontSize="10" fontFamily="monospace" fontWeight="bold">60 FPS</text>
        </svg>
      </div>
    );
  }

  if (visualType === 'ai') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-[#070812] border border-[#8A2BE2]/30 overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(138,43,226,0.18),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(0,245,255,0.12),transparent_60%)]" />
        <svg viewBox="0 0 360 150" className="w-full h-full relative z-10" fill="none">
          {/* Multi-Agent Neural & Apify Orchestration Graph */}
          <line x1="88" y1="45" x2="175" y2="75" stroke="#00F5FF" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="88" y1="105" x2="175" y2="75" stroke="#8A2BE2" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="175" y1="75" x2="275" y2="45" stroke="#FF2A85" strokeWidth="1.5" />
          <line x1="175" y1="75" x2="275" y2="105" stroke="#10B981" strokeWidth="1.5" />

          {/* Input Nodes */}
          <rect x="24" y="28" width="68" height="34" rx="7" fill="#0D1021" stroke="#00F5FF" strokeWidth="1.4" />
          <text x="31" y="48" fill="#00F5FF" fontSize="8.5" fontFamily="monospace">APIFY ACTOR</text>

          <rect x="24" y="88" width="68" height="34" rx="7" fill="#0D1021" stroke="#8A2BE2" strokeWidth="1.4" />
          <text x="35" y="108" fill="#C084FC" fontSize="8.5" fontFamily="monospace">VOICE / LLM</text>

          {/* Central Agent Core */}
          <circle cx="178" cy="75" r="28" fill="#110E24" stroke="#8A2BE2" strokeWidth="2" />
          <polygon points="178,59 194,75 178,91 162,75" fill="#00F5FF" fillOpacity="0.25" stroke="#00F5FF" strokeWidth="1.5" />
          <circle cx="178" cy="75" r="4" fill="#FFFFFF" />

          {/* Output Automation Nodes */}
          <rect x="266" y="28" width="72" height="34" rx="7" fill="#0D1021" stroke="#FF2A85" strokeWidth="1.4" />
          <text x="275" y="48" fill="#FF2A85" fontSize="8.5" fontFamily="monospace">AI SAAS API</text>

          <rect x="266" y="88" width="72" height="34" rx="7" fill="#0D1021" stroke="#10B981" strokeWidth="1.4" />
          <text x="275" y="108" fill="#10B981" fontSize="8.5" fontFamily="monospace">AUTO WORKFLOW</text>
        </svg>
      </div>
    );
  }

  if (visualType === 'web') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-[#070812] border border-[#FF2A85]/25 overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_75%,rgba(255,42,133,0.14),transparent_60%),radial-gradient(circle_at_80%_25%,rgba(0,245,255,0.12),transparent_60%)]" />
        <svg viewBox="0 0 360 150" className="w-full h-full relative z-10" fill="none">
          <rect x="22" y="14" width="316" height="122" rx="10" fill="#0B0E1A" stroke="#FF2A85" strokeOpacity="0.45" strokeWidth="1.5" />
          <line x1="22" y1="34" x2="338" y2="34" stroke="#FFFFFF" strokeOpacity="0.1" />
          <circle cx="36" cy="24" r="3" fill="#FF2A85" />
          <circle cx="46" cy="24" r="3" fill="#00F5FF" />
          <circle cx="56" cy="24" r="3" fill="#10B981" />

          <rect x="36" y="46" width="166" height="76" rx="6" fill="#11162A" stroke="#00F5FF" strokeOpacity="0.25" />
          <text x="48" y="64" fill="#F4F6FB" fontSize="9.5" fontFamily="monospace" fontWeight="bold">GLOBAL COMMERCE EDGE</text>
          <path d="M48 104 L76 88 L104 94 L136 72 L168 78 L188 60" stroke="#00F5FF" strokeWidth="2" strokeLinecap="round" />
          <rect x="48" y="110" width="76" height="5" rx="2.5" fill="#FF2A85" fillOpacity="0.6" />

          <rect x="214" y="46" width="110" height="76" rx="6" fill="#11162A" stroke="#10B981" strokeOpacity="0.4" />
          <text x="224" y="63" fill="#10B981" fontSize="8.5" fontFamily="monospace">STRIPE PAYOUTS</text>
          <text x="224" y="84" fill="#FFFFFF" fontSize="13" fontFamily="monospace" fontWeight="bold">+144% CVR</text>
          <rect x="224" y="96" width="88" height="16" rx="4" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
          <text x="236" y="107" fill="#10B981" fontSize="8" fontFamily="monospace">MULTI-CURRENCY</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 rounded-lg bg-[#070812] border border-[#10B981]/25 overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.14),transparent_60%),radial-gradient(circle_at_25%_25%,rgba(0,245,255,0.14),transparent_60%)]" />
      <svg viewBox="0 0 360 150" className="w-full h-full relative z-10" fill="none">
        <rect x="22" y="16" width="316" height="118" rx="10" fill="#0B0E1A" stroke="#10B981" strokeOpacity="0.45" strokeWidth="1.5" />
        <text x="38" y="38" fill="#00F5FF" fontSize="9" fontFamily="monospace">24-HOUR PROTOTYPE START · FLEXIBLE MILESTONES</text>

        <rect x="38" y="50" width="95" height="20" rx="5" fill="#00F5FF" fillOpacity="0.18" stroke="#00F5FF" strokeWidth="1.2" />
        <text x="46" y="63" fill="#00F5FF" fontSize="8.5" fontFamily="monospace">M1: 24H KICKOFF</text>

        <rect x="118" y="76" width="115" height="20" rx="5" fill="#8A2BE2" fillOpacity="0.22" stroke="#8A2BE2" strokeWidth="1.2" />
        <text x="128" y="89" fill="#C084FC" fontSize="8.5" fontFamily="monospace">M2: SPRINT BUILD</text>

        <rect x="210" y="102" width="112" height="20" rx="5" fill="#10B981" fillOpacity="0.22" stroke="#10B981" strokeWidth="1.2" />
        <text x="220" y="115" fill="#10B981" fontSize="8.5" fontFamily="monospace">M3: QA &amp; DEPLOY</text>
      </svg>
    </div>
  );
};
