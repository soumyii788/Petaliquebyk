import React from 'react';

/**
 * Petalique Bespoke Bloom Page Breakers
 * Crafted with delicate botanical line-art, chenille petal motifs,
 * and elegant fading gradient dividers to gracefully separate page sections.
 */

// 1. Central Blooming Flower Icon with layered petals & fine stamen wires
export function BloomEmblem({ className = "w-10 h-10 text-dusty" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Center core / spiraled pistil */}
      <circle cx="24" cy="24" r="3.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />

      {/* 5 Layered chenille petals */}
      {/* Top petal */}
      <path
        d="M24 20.5 C21 13 27 13 24 20.5"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Top-Right petal */}
      <path
        d="M26.8 21.8 C34 18 37 24 26.8 21.8"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Bottom-Right petal */}
      <path
        d="M26.2 26.2 C32 32 26 36 26.2 26.2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Bottom-Left petal */}
      <path
        d="M21.8 26.2 C16 32 12 26 21.8 26.2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Top-Left petal */}
      <path
        d="M21.2 21.8 C14 18 11 24 21.2 21.8"
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Delicate stamen radiating accents */}
      <line x1="24" y1="18" x2="24" y2="16" opacity="0.6" />
      <line x1="28.5" y1="21" x2="30.5" y2="20" opacity="0.6" />
      <line x1="27.5" y1="27.5" x2="29" y2="29.5" opacity="0.6" />
      <line x1="20.5" y1="27.5" x2="19" y2="29.5" opacity="0.6" />
      <line x1="19.5" y1="21" x2="17.5" y2="20" opacity="0.6" />
    </svg>
  );
}

// 2. Wide Botanical Vine Flourish (Emblem with flanking leaves & tendrils)
export function BotanicalFlourish({ className = "w-44 h-8 text-dusty" }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central Bloom */}
      <circle cx="80" cy="18" r="3" fill="currentColor" fillOpacity="0.25" />
      <path d="M80 15 C77 9 83 9 80 15" fill="currentColor" fillOpacity="0.1" />
      <path d="M82.5 16.5 C88 13 90 18 82.5 16.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M82 20 C87 25 82 28 82 20" fill="currentColor" fillOpacity="0.1" />
      <path d="M78 20 C73 25 68 20 78 20" fill="currentColor" fillOpacity="0.1" />
      <path d="M77.5 16.5 C72 13 70 18 77.5 16.5" fill="currentColor" fillOpacity="0.1" />

      {/* Left botanical tendril */}
      <path d="M72 18 C62 18 56 14 46 18 C38 21 30 18 20 18" opacity="0.75" />
      {/* Left leaves */}
      <path d="M58 16 C55 11 61 11 58 16 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M42 19 C39 24 45 24 42 19 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="30" cy="15" r="1.2" fill="currentColor" />
      <circle cx="16" cy="18" r="1" fill="currentColor" />
      <circle cx="8" cy="18" r="0.8" fill="currentColor" opacity="0.5" />

      {/* Right botanical tendril */}
      <path d="M88 18 C98 18 104 14 114 18 C122 21 130 18 140 18" opacity="0.75" />
      {/* Right leaves */}
      <path d="M102 16 C105 11 99 11 102 16 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M118 19 C121 24 115 24 118 19 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="130" cy="15" r="1.2" fill="currentColor" />
      <circle cx="144" cy="18" r="1" fill="currentColor" />
      <circle cx="152" cy="18" r="0.8" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// 3. Floating Petals Motif
export function PetalsTrio({ className = "w-12 h-6 text-dusty" }) {
  return (
    <svg
      viewBox="0 0 60 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Center petal */}
      <path
        d="M30 6 C25 14 35 18 30 24 C25 18 35 14 30 6 Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Left petal (drifting) */}
      <path
        d="M16 11 C11 16 18 21 16 25 C11 20 19 16 16 11 Z"
        transform="rotate(-25 16 18)"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Right petal (drifting) */}
      <path
        d="M44 11 C39 16 46 21 44 25 C39 20 47 16 44 11 Z"
        transform="rotate(25 44 18)"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}

// 4. Scalloped Petal Wave Transition (For transitioning between section background colors)
export function PetalWaveTransition({
  fill = "fill-cream",
  bg = "bg-transparent",
  flip = false,
  className = "",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${bg} ${className}`}>
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className={`w-full h-6 sm:h-9 md:h-12 block ${fill} ${flip ? 'rotate-180' : ''}`}
      >
        {/* Repeating soft scalloped organic petal arches */}
        <path d="M0,0 
          C100,38 150,38 200,0 
          C300,38 350,38 400,0 
          C500,38 550,38 600,0 
          C700,38 750,38 800,0 
          C900,38 950,38 1000,0 
          C1100,38 1150,38 1200,0 
          L1200,48 L0,48 Z" 
        />
      </svg>
    </div>
  );
}

/**
 * Main BloomDivider Component
 * Variants:
 *  - 'bloom' (default): Elegant floral emblem with subtle tapering hairline rules on both sides
 *  - 'flourish': Wider botanical vine with leaves and flower center
 *  - 'petals': Drifting velvet petal trio with hairline dividers
 *  - 'simple': Minimalist fine line with tiny floral bud in center
 */
export default function BloomDivider({
  variant = 'bloom',
  color = 'text-dusty',
  lineColor = 'via-dusty/30',
  className = '',
  spacing = 'py-6 sm:py-8',
}) {
  return (
    <div
      role="separator"
      aria-label="Section divider"
      className={`relative flex items-center justify-center w-full px-4 overflow-hidden ${spacing} ${className}`}
    >
      {/* Left Hairline Rule */}
      <div
        className={`flex-1 h-px bg-gradient-to-r from-transparent ${lineColor} to-transparent max-w-xs sm:max-w-sm md:max-w-md`}
      />

      {/* Center Motif according to Bloom */}
      <div className={`mx-3 sm:mx-5 flex items-center gap-2 ${color} flex-shrink-0`}>
        <span className="w-1 h-1 rounded-full bg-current opacity-40" />

        {variant === 'bloom' && <BloomEmblem className="w-8 h-8 sm:w-9 sm:h-9" />}
        {variant === 'flourish' && <BotanicalFlourish className="w-36 h-7 sm:w-44 sm:h-8" />}
        {variant === 'petals' && <PetalsTrio className="w-10 h-5 sm:w-12 sm:h-6" />}
        {variant === 'simple' && (
          <span className="text-xs font-serif italic tracking-widest opacity-70">
            🌸
          </span>
        )}

        <span className="w-1 h-1 rounded-full bg-current opacity-40" />
      </div>

      {/* Right Hairline Rule */}
      <div
        className={`flex-1 h-px bg-gradient-to-l from-transparent ${lineColor} to-transparent max-w-xs sm:max-w-sm md:max-w-md`}
      />
    </div>
  );
}
