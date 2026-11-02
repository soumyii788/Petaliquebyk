import React from 'react';

/**
 * Bespoke fine-line botanical emblems for Petalique gifting occasions.
 * Designed with elegant proportions, fine strokes (1.5px), and responsive currentColor.
 */

// 1. Birthdays: An artisanal celebration cake crowned with a botanical sprig & fine candle
export function BirthdayLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Pedestal plate */}
      <line x1="7" y1="30" x2="29" y2="30" />
      <path d="M14 30 L13 32 L23 32 L22 30" />
      
      {/* Bottom tier */}
      <rect x="9" y="21" width="18" height="9" rx="1.5" />
      <path d="M9 24 Q13.5 26 18 24 Q22.5 26 27 24" opacity="0.6" />
      
      {/* Top tier */}
      <rect x="12" y="14" width="12" height="7" rx="1" />
      <path d="M12 17 Q15 18.5 18 17 Q21 18.5 24 17" opacity="0.6" />
      
      {/* Candle & Flame */}
      <line x1="18" y1="14" x2="18" y2="9" />
      <path d="M18 9 C17 7.5 17 6 18 4.5 C19 6 19 7.5 18 9 Z" fill="currentColor" fillOpacity="0.2" />
      
      {/* Delicate floral sprigs flanking the cake */}
      <path d="M7 23 C6 21 6.5 19 8 18" opacity="0.7" />
      <path d="M29 23 C30 21 29.5 19 28 18" opacity="0.7" />
      <circle cx="8" cy="18" r="0.8" fill="currentColor" />
      <circle cx="28" cy="18" r="0.8" fill="currentColor" />
    </svg>
  );
}

// 2. Anniversaries: Two intertwining eternity rings embraced by fine botanical leaves
export function AnniversaryLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Primary ring */}
      <circle cx="14" cy="19" r="7.5" />
      
      {/* Interlocking secondary ring */}
      <circle cx="22" cy="19" r="7.5" />
      
      {/* Solitaire diamond atop primary ring */}
      <path d="M14 8.5 L16.5 11.5 L11.5 11.5 Z" fill="currentColor" fillOpacity="0.2" />
      <line x1="12.5" y1="11.5" x2="14" y2="8.5" />
      <line x1="15.5" y1="11.5" x2="14" y2="8.5" />
      
      {/* Delicate laurel/olive sprig curving on the side */}
      <path d="M26 13 C28.5 11 30.5 8 30 5" opacity="0.7" />
      <path d="M27.5 11 C29 10 30 11 29 12" opacity="0.8" />
      <path d="M29.5 8 C31 7 32 8 31 9" opacity="0.8" />
      <circle cx="30" cy="5" r="0.8" fill="currentColor" />
    </svg>
  );
}

// 3. Valentine's Day: A fine-line botanical heart woven from flowering rose stems
export function ValentineLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Flowing botanical heart contour */}
      <path
        d="M18 30 C18 30 7 22 7 14 C7 9.5 10.5 6 15 6 C16.5 6 17.5 6.8 18 7.5 C18.5 6.8 19.5 6 21 6 C25.5 6 29 9.5 29 14 C29 22 18 30 18 30 Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      
      {/* Inner rose bloom contour */}
      <path d="M18 11 C16.5 12.5 16.5 15 18 16.5 C19.5 15 19.5 12.5 18 11 Z" opacity="0.6" />
      <path d="M16 13.5 C15 14.5 15 16 16.5 17" opacity="0.5" />
      <path d="M20 13.5 C21 14.5 21 16 19.5 17" opacity="0.5" />
      
      {/* Delicate stem leaves */}
      <path d="M10 22 C8 21.5 7.5 20 8.5 19 C9.5 20 10 21 10 22 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M26 22 C28 21.5 28.5 20 27.5 19 C26.5 20 26 21 26 22 Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

// 4. Friendship: Twin blossoming flowers tied together with a flowing ribbon
export function FriendshipLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Flower 1 (Left) */}
      <circle cx="13" cy="11" r="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M13 6 C12 7.5 12 8.5 13 9" />
      <path d="M18 11 C16.5 11 15.5 11 15 11" />
      <path d="M8 11 C9.5 11 10.5 11 11 11" />
      <path d="M13 16 C12 14.5 12 13.5 13 13" />
      <circle cx="13" cy="11" r="5" strokeDasharray="2 2" opacity="0.4" />
      
      {/* Flower 2 (Right) */}
      <circle cx="23" cy="13" r="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M23 8 C22 9.5 22 10.5 23 11" />
      <path d="M28 13 C26.5 13 25.5 13 25 13" />
      <path d="M18 13 C19.5 13 20.5 13 21 13" />
      <path d="M23 18 C22 16.5 22 15.5 23 15" />
      <circle cx="23" cy="13" r="5" strokeDasharray="2 2" opacity="0.4" />
      
      {/* Stems crossing and gathering */}
      <path d="M13 16 C14 20 17 24 19 31" />
      <path d="M23 18 C22 21 19 25 17 31" />
      
      {/* Ribbon bow binding the stems */}
      <path d="M18 22 C16 20.5 14 21 15 23 C16 24 17.5 23 18 22 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M18 22 C20 20.5 22 21 21 23 C20 24 18.5 23 18 22 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="18" cy="22" r="1.2" fill="currentColor" />
    </svg>
  );
}

// 5. Graduation: An academic mortarboard embraced by a classical laurel wreath of honor
export function GraduationLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Mortarboard rhomboid cap */}
      <polygon points="18,8 30,13.5 18,19 6,13.5" fill="currentColor" fillOpacity="0.1" />
      
      {/* Cap base underneath */}
      <path d="M11 16 L11 21 C11 23.5 25 23.5 25 21 L25 16" />
      
      {/* Tassel */}
      <path d="M18 13.5 L7.5 17.5 L7 23" />
      <circle cx="7" cy="23.5" r="1" fill="currentColor" />
      
      {/* Classical laurel wreath framing the graduation emblem */}
      <path d="M8 29 C6 25 6 19 9 14" opacity="0.7" />
      <path d="M6.5 26 C5.5 25 5.5 24 6.5 23.5" opacity="0.8" />
      <path d="M6 21 C5 20 5 19 6 18.5" opacity="0.8" />
      
      <path d="M28 29 C30 25 30 19 27 14" opacity="0.7" />
      <path d="M29.5 26 C30.5 25 30.5 24 29.5 23.5" opacity="0.8" />
      <path d="M30 21 C31 20 31 19 30 18.5" opacity="0.8" />
    </svg>
  );
}

// 6. Just Because: A delicate botanical blossom / camellia with morning dew
export function JustBecauseLogo({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central flower bud */}
      <circle cx="18" cy="15" r="2" fill="currentColor" fillOpacity="0.3" />
      
      {/* Elegant organic petal layers */}
      <path d="M18 9 C16 9 14.5 11 15 13" />
      <path d="M21 11 C22.5 12 23 14 22 16" />
      <path d="M21 19 C20 20.5 18 21 16 20" />
      <path d="M14 18 C13 17 12.5 15 13.5 13" />
      
      {/* Outer blooming petal contours */}
      <path
        d="M18 7 C13 7 10 11 10 16 C10 21 14 24 18 24 C22 24 26 21 26 16 C26 11 23 7 18 7 Z"
        opacity="0.5"
      />
      
      {/* Slender stem with curved leaf */}
      <path d="M18 24 C18 27 17.5 29 17 31" />
      <path d="M18 26 C20.5 25 22.5 26 22 28 C20.5 28.5 19 27.5 18 26 Z" fill="currentColor" fillOpacity="0.2" />
      
      {/* Subtle sparkle accent */}
      <path d="M27 8 L27 10 M26 9 L28 9" opacity="0.6" />
    </svg>
  );
}
