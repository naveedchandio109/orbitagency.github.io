import React from 'react';

export const NeonOrbitIcon: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 select-none animate-neon-pulse"
      data-testid="neon-atomic-orbit-icon"
      aria-hidden="true"
    >
      {/* Ambient Radial Aura */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.22)_0%,rgba(138,43,226,0.14)_52%,transparent_75%)] blur-xl pointer-events-none" />

      {/* Rotating 360-Degree Atomic Orbit SVG Assembly */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-orbit-360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pink-Purple-Blue Gradient for Outer Circle */}
          <linearGradient id="outerOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2A85" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#00F5FF" />
          </linearGradient>

          {/* Glowing Neon Cyan Gradient for Intersecting Atomic Rings */}
          <linearGradient id="cyanRingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#7DF9FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00F5FF" stopOpacity="0.95" />
          </linearGradient>

          {/* Center White Diamond Glow */}
          <radialGradient id="diamondCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#E0FFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00F5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Pink-Purple-Blue Gradient Circle */}
        <circle
          cx="100"
          cy="100"
          r="88"
          stroke="url(#outerOrbitGradient)"
          strokeWidth="3"
          strokeDasharray="160 18"
          strokeLinecap="round"
        />

        {/* Secondary Fine Precision Outer Track */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="url(#outerOrbitGradient)"
          strokeWidth="1"
          strokeOpacity="0.45"
        />

        {/* Intersecting Neon Cyan Atomic Ring 1 (30 deg) */}
        <g transform="rotate(30 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="68"
            ry="26"
            stroke="url(#cyanRingGradient)"
            strokeWidth="2.4"
          />
          <circle cx="168" cy="100" r="3.8" fill="#00F5FF" />
        </g>

        {/* Intersecting Neon Cyan Atomic Ring 2 (90 deg) */}
        <g transform="rotate(90 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="68"
            ry="26"
            stroke="url(#cyanRingGradient)"
            strokeWidth="2.4"
          />
          <circle cx="32" cy="100" r="3.8" fill="#FF2A85" />
        </g>

        {/* Intersecting Neon Cyan Atomic Ring 3 (150 deg) */}
        <g transform="rotate(150 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="68"
            ry="26"
            stroke="url(#cyanRingGradient)"
            strokeWidth="2.4"
          />
          <circle cx="168" cy="100" r="3.8" fill="#8A2BE2" />
        </g>

        {/* Soft Inner Halo Around Center Diamond */}
        <circle cx="100" cy="100" r="22" fill="url(#diamondCoreGlow)" opacity="0.45" />

        {/* Glowing White Diamond in the Center */}
        <polygon
          points="100,82 118,100 100,118 82,100"
          fill="#FFFFFF"
          stroke="#00F5FF"
          strokeWidth="1.75"
        />
        <polygon
          points="100,88 112,100 100,112 88,100"
          fill="#E8FFFF"
        />
      </svg>
    </div>
  );
};
