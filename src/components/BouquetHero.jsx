import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

/* ─────────────────────────────────────────────
   Petal SVG (inline, no external dep)
───────────────────────────────────────────── */
function PetalSVG({ color = '#143bb5', size = 24, opacity = 0.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <path
        d="M12 2C9 5 7 9 7 12c0 2.76 2.24 5 5 5s5-2.24 5-5c0-3-2-7-5-10z"
        fill={color}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Floating ambient petals (CSS animation)
───────────────────────────────────────────── */
const AMBIENT_PETALS = [
  { top: '8%',  left: '72%', size: 18, color: '#143bb5', delay: 0,    dur: 6 },
  { top: '15%', left: '85%', size: 12, color: '#67b5e8', delay: 1.2,  dur: 7.5 },
  { top: '30%', left: '62%', size: 22, color: '#143bb5', delay: 0.5,  dur: 5.5 },
  { top: '55%', left: '78%', size: 14, color: '#a8d8ea', delay: 2,    dur: 8 },
  { top: '70%', left: '65%', size: 10, color: '#67b5e8', delay: 1.8,  dur: 6.5 },
  { top: '20%', left: '55%', size: 16, color: '#143bb5', delay: 0.9,  dur: 7 },
  { top: '80%', left: '82%', size: 20, color: '#a8d8ea', delay: 3,    dur: 9 },
  { top: '45%', left: '90%', size: 11, color: '#67b5e8', delay: 2.4,  dur: 5 },
  // left-side petals
  { top: '25%', left: '5%',  size: 14, color: '#143bb5', delay: 1.5,  dur: 7 },
  { top: '60%', left: '2%',  size: 10, color: '#67b5e8', delay: 2.8,  dur: 6 },
  { top: '75%', left: '8%',  size: 18, color: '#a8d8ea', delay: 0.3,  dur: 8.5 },
];

function FloatingPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {AMBIENT_PETALS.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            animation: `petalFloat ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
            willChange: 'transform',
          }}
        >
          <PetalSVG color={p.color} size={p.size} opacity={0.55} />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main BouquetHero Component
───────────────────────────────────────────── */
export default function BouquetHero() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [show3D, setShow3D] = useState(false);

  /* Scroll-based parallax on the bouquet image */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!imgRef.current || !sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
          const translateY = progress * -60;   // moves up 60px as you scroll
          const scale = 1 + progress * 0.04;   // subtle zoom
          imgRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) perspective(800px) rotateY(-4deg)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the Evil Eye Blue Chenille Bouquet. Can you share details?`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #dbeafe 40%, #f0f9ff 70%, #FDF8F3 100%)' }}
    >
      {/* Soft radial glow behind bouquet */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '55vw',
          height: '55vw',
          maxWidth: 680,
          maxHeight: 680,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103,181,232,0.22) 0%, rgba(20,59,181,0.07) 55%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Floating petals (ambient) */}
      <FloatingPetals />

      {/* ── Grid layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT: Text column ── */}
        <div className="order-2 lg:order-1">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 mb-6"
            style={{ animation: 'fadeInDown 0.7s ease both' }}
          >
            <div className="w-8 h-px" style={{ background: '#143bb5' }} />
            <span className="font-sans text-xs tracking-widest uppercase font-medium flex items-center gap-1.5" style={{ color: '#143bb5' }}>
              <Sparkles size={12} className="animate-pulse" />
              Handcrafted Floral Art · Jaipur
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif leading-[1.05] mb-6 text-cocoa"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              animation: 'fadeInUp 0.8s 0.15s ease both',
            }}
          >
            Not Just Flowers.{' '}
            <span className="italic" style={{ color: '#143bb5' }}>
              Little Pieces
            </span>{' '}
            of Forever.
          </h1>

          {/* Sub-text */}
          <p
            className="font-sans text-base text-cocoa/75 leading-relaxed mb-8 max-w-md"
            style={{ animation: 'fadeInUp 0.8s 0.3s ease both' }}
          >
            Handcrafted royal-blue chenille blooms — made petal by petal with love. Each bouquet is a unique, lasting keepsake that never wilts.
          </p>

          {/* Price chips */}
          <div
            className="flex flex-wrap gap-3 mb-8"
            style={{ animation: 'fadeInUp 0.8s 0.4s ease both' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans" style={{ borderColor: '#143bb5', background: '#EEF4FF' }}>
              <span className="font-serif text-base font-bold" style={{ color: '#143bb5' }}>₹150</span>
              <span className="text-cocoa/60 text-xs">/ bloom (bouquet)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans" style={{ borderColor: '#67b5e8', background: '#f0f9ff' }}>
              <span className="font-serif text-base font-bold" style={{ color: '#67b5e8' }}>₹199</span>
              <span className="text-cocoa/60 text-xs">/ single bloom</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            style={{ animation: 'fadeInUp 0.8s 0.45s ease both' }}
          >
            <Link
              to="/product/evil-eye-protection-bouquet"
              className="btn-primary text-center flex items-center justify-center gap-2"
              style={{ background: '#143bb5', borderColor: '#143bb5' }}
            >
              <Sparkles size={14} />
              Shop Blue Bouquet
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center flex items-center justify-center gap-2"
              style={{ borderColor: '#143bb5', color: '#143bb5' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L.057 23.943l6.258-1.642A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.6-.5-5.1-1.37L3 21.5l.9-3.8A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Order via WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div
            className="flex items-center gap-6"
            style={{ animation: 'fadeInUp 0.8s 0.6s ease both' }}
          >
            {[
              { val: 'Forever', sub: 'Blooms' },
              { val: '100%', sub: 'Handcrafted' },
              { val: 'Made to', sub: 'Order' },
            ].map(({ val, sub }, i) => (
              <React.Fragment key={val}>
                {i > 0 && <div className="w-px h-8 bg-blue-100" />}
                <div className="text-center group cursor-default">
                  <div className="font-serif text-xl text-cocoa group-hover:transition-colors duration-300" style={{ '--hover-color': '#143bb5' }}>{val}</div>
                  <div className="font-sans text-[10px] tracking-wider uppercase" style={{ color: '#143bb5' }}>{sub}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Bouquet photo column ── */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center">
          {/* Decorative ring behind image */}
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              width: '90%',
              height: '90%',
              border: '1.5px solid rgba(103,181,232,0.3)',
              top: '5%',
              left: '5%',
              borderRadius: '40% 60% 55% 45% / 50% 45% 55% 50%',
              animation: 'organicRotate 18s linear infinite',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              width: '80%',
              height: '80%',
              border: '1px solid rgba(20,59,181,0.12)',
              top: '10%',
              left: '10%',
              borderRadius: '55% 45% 40% 60% / 45% 55% 50% 50%',
              animation: 'organicRotate 24s linear infinite reverse',
            }}
          />

          {/* The actual bouquet photo */}
          <div
            className="relative z-10"
            style={{
              maxWidth: 480,
              width: '100%',
              animation: loaded ? 'bouquetEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) both' : 'none',
            }}
          >
            {/* Soft shadow / depth ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '30% 70% 65% 35% / 40% 45% 55% 60%',
                background: 'radial-gradient(ellipse, rgba(20,59,181,0.12) 0%, transparent 70%)',
                filter: 'blur(16px)',
                zIndex: 0,
              }}
            />

            <img
              ref={imgRef}
              src="/photos/blue-bouquet-hero.jpg"
              alt="Royal blue and baby-blue handmade chenille flower bouquet — Petalique signature piece"
              onLoad={() => setLoaded(true)}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '30% 70% 65% 35% / 40% 45% 55% 60%',
                boxShadow: '0 32px 80px -12px rgba(20,59,181,0.25), 0 16px 40px -8px rgba(103,181,232,0.2)',
                transformOrigin: 'center center',
                transform: 'perspective(800px) rotateY(-4deg)',
                transition: 'box-shadow 0.4s ease',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                objectFit: 'cover',
              }}
              loading="eager"
            />

            {/* Price badge floating on image */}
            <div
              className="absolute font-sans"
              style={{
                top: '12%',
                right: '-18px',
                background: '#143bb5',
                color: 'white',
                borderRadius: '50%',
                width: 72,
                height: 72,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(20,59,181,0.4)',
                animation: 'petalFloat 4s ease-in-out infinite alternate',
                zIndex: 20,
                lineHeight: 1.1,
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>from</span>
              <span style={{ fontSize: 17, fontFamily: 'Georgia, serif', fontWeight: 700 }}>₹150</span>
            </div>

            {/* "Handmade" label badge */}
            <div
              className="absolute font-sans"
              style={{
                bottom: '15%',
                left: '-22px',
                background: 'white',
                color: '#143bb5',
                borderRadius: 32,
                padding: '8px 16px',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 20px rgba(20,59,181,0.15)',
                border: '1px solid rgba(103,181,232,0.4)',
                animation: 'petalFloat 5s 1.5s ease-in-out infinite alternate',
                zIndex: 20,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>✦</span> Handmade Chenille
            </div>
          </div>

          {/* 3D view toggle */}
          <button
            onClick={() => setShow3D(!show3D)}
            className="absolute font-sans cursor-pointer"
            style={{
              bottom: '4%',
              right: '4%',
              background: 'rgba(255,255,255,0.9)',
              color: '#143bb5',
              border: '1px solid rgba(103,181,232,0.5)',
              borderRadius: 32,
              padding: '8px 16px',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 16px rgba(20,59,181,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              backdropFilter: 'blur(8px)',
              zIndex: 30,
              transition: 'all 0.3s ease',
            }}
            aria-label="Toggle 3D bouquet view"
          >
            <Eye size={13} />
            {show3D ? 'Photo View' : 'View in 3D'}
          </button>
        </div>
      </div>

      {/* 3D modal/overlay */}
      {show3D && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setShow3D(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: '70vh', background: '#0a0e1a' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lazy-load BlueBouquet3D inside modal */}
            <React.Suspense fallback={
              <div className="flex items-center justify-center h-full text-blue-200 font-sans text-sm">
                Loading 3D Preview…
              </div>
            }>
              <BlueBouquet3DLazy />
            </React.Suspense>
            <button
              onClick={() => setShow3D(false)}
              className="absolute top-4 right-4 font-sans text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: 36, height: 36, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}
              aria-label="Close 3D view"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none z-20">
        <div className="w-px h-8" style={{ background: 'rgba(20,59,181,0.4)' }} />
        <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: 'rgba(20,59,181,0.6)' }}>Scroll to Explore</span>
      </div>
    </section>
  );
}

/* Lazy wrapper for 3D component (avoid loading Three.js unless modal opened) */
const BlueBouquet3DLazy = React.lazy(() => import('./BlueBouquet3D'));
