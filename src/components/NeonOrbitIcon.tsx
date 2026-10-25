import React from 'react';

interface NeonOrbitIconProps {
  className?: string;
}

/**
 * Colorful, continuously rotating 360-degree Atomic Orbit Brand Icon
 * designed to sit right next to "Orbit Agency" in the Top Header Bar.
 * Features a multi-color pink-purple-cyan rotating outer circle,
 * counter-rotating atomic rings, and a bright center diamond core.
 */
export const NeonOrbitIcon: React.FC<NeonOrbitIconProps> = ({
  className = 'w-11 h-11 sm:w-12 sm:h-12',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none shrink-0 animate-neon-pulse ${className}`}
      data-testid="neon-atomic-orbit-icon"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Vibrant Multi-Color Ribbon Gradient for Rotating Outer Circle */}
          <linearGradient id="colorfulOuterCircle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="35%" stopColor="#8B5CF6" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          {/* Vivid Cyan-Blue Gradient for Intersecting Atomic Rings */}
          <linearGradient id="vividCyanRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Soft Crisp Circular Badge Base so Colorful Rings Pop on White Header */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="#0F172A"
          stroke="#E2E8F0"
          strokeWidth="3"
        />

        {/* 1. Continuously Rotating 360-Degree Colorful Outer Circle & Ribbon Arcs */}
        <g className="animate-orbit-360">
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="url(#colorfulOuterCircle)"
            strokeWidth="7"
            strokeDasharray="115 20 85 20"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="100"
            r="71"
            stroke="url(#colorfulOuterCircle)"
            strokeWidth="2.5"
            strokeDasharray="60 30"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        {/* 2. Counter-Rotating Intersecting Atomic Orbit Rings */}
        <g className="animate-orbit-reverse">
          <g transform="rotate(30 100 100)">
            <ellipse
              cx="100"
              cy="100"
              rx="58"
              ry="22"
              stroke="#00F5FF"
              strokeWidth="3.2"
            />
            <circle cx="158" cy="100" r="5.5" fill="#00F5FF" />
          </g>

          <g transform="rotate(90 100 100)">
            <ellipse
              cx="100"
              cy="100"
              rx="58"
              ry="22"
              stroke="#EC4899"
              strokeWidth="3.2"
            />
            <circle cx="42" cy="100" r="5.5" fill="#EC4899" />
          </g>

          <g transform="rotate(150 100 100)">
            <ellipse
              cx="100"
              cy="100"
              rx="58"
              ry="22"
              stroke="#A855F7"
              strokeWidth="3.2"
            />
            <circle cx="158" cy="100" r="5.5" fill="#10B981" />
          </g>
        </g>

        {/* 3. Glowing White Diamond Core in Center */}
        <polygon
          points="100,79 121,100 100,121 79,100"
          fill="#FFFFFF"
          stroke="#00F5FF"
          strokeWidth="3"
        />
        <polygon
          points="100,87 113,100 100,113 87,100"
          fill="#38BDF8"
        />
      </svg>
    </div>
  );
};
