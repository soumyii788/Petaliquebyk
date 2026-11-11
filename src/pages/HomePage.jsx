import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Sparkles, Heart, Package, Star, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {
  BirthdayLogo,
  AnniversaryLogo,
  ValentineLogo,
  FriendshipLogo,
  GraduationLogo,
  JustBecauseLogo,
} from '../components/OccasionIcons';
import {
  PRODUCTS,
  COLLECTION_CATEGORIES,
  OCCASION_CARDS,
  TESTIMONIALS,
  INSTAGRAM_POSTS,
  PROCESS_IMAGES,
  HERO_IMAGE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from '../data/products';
import BloomDivider, { PetalWaveTransition } from '../components/BloomDivider';
import ScrollReveal from '../components/ScrollReveal';
import BouquetHero from '../components/BouquetHero';

// ---------- Section: Hero (Photo-based with animations) ----------
// Hero is now BouquetHero — rendered inline in the main export below.

// ---------- Section: Bestsellers ----------
function BestsellersSection() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">Most Loved</p>
            <h2 className="section-heading">Our Bestsellers</h2>
            <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
              These handcrafted bouquets have found their way to hundreds of happy hearts.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100} distance={24}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal direction="up" delay={200} distance={16}>
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-outline">
              View All Blooms
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------- Section: Collections ----------
function CollectionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-blush/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">Curated For You</p>
            <h2 className="section-heading">Shop by Collection</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {COLLECTION_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 80} distance={20} className={i === 4 ? 'col-span-2 lg:col-span-1' : ''}>
              <Link
                to={`/collections/${cat.slug}`}
                className="group block relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/25 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-serif text-xl text-cream leading-tight">{cat.name}</h3>
                    <p className="font-sans text-xs text-cream/70 mt-1 mb-3 hidden sm:block">{cat.description}</p>
                    {cat.count && (
                      <span className="font-sans text-xs text-cream/60">{cat.count} designs</span>
                    )}
                    <div className="mt-3 flex items-center gap-1 text-cream/80 group-hover:text-cream transition-colors">
                      <span className="font-sans text-xs tracking-widest uppercase font-medium">Explore</span>
                      <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Made With Love ----------
function MadeWithLoveSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <ScrollReveal direction="right" distance={28}>
            <p className="section-subheading mb-4">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cocoa leading-tight mb-6">
              Every Bloom Is Born From{' '}
              <span className="italic text-dusty">Patience & Love</span>
            </h2>
            <p className="font-sans text-sm text-cocoa/70 leading-relaxed mb-6">
              Unlike mass-produced flowers, every Petalique bloom is individually handcrafted. We choose premium chenille-textured fabric, shape each petal by hand, and assemble every bouquet with care.
            </p>
            <p className="font-sans text-sm text-cocoa/70 leading-relaxed mb-8">
              No two bouquets are identical — which means yours is uniquely yours.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { icon: Sparkles, label: 'Premium Materials', desc: 'Carefully sourced fabric' },
                { icon: Heart, label: 'Handcrafted', desc: 'Every petal shaped by hand' },
                { icon: Package, label: 'Gift-Ready', desc: 'Premium packaging included' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center group">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-dusty group-hover:text-cream transition-colors duration-300">
                    <Icon size={18} className="text-dusty group-hover:text-cream transition-colors duration-300" />
                  </div>
                  <p className="font-serif text-sm text-cocoa">{label}</p>
                  <p className="font-sans text-[10px] text-cocoa/50 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link to="/our-story" className="btn-primary inline-block">
              Read Our Story
            </Link>
          </ScrollReveal>

          {/* Right: Image grid */}
          <ScrollReveal direction="left" distance={28} delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {PROCESS_IMAGES.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                    i === 0 ? 'row-span-2' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover object-center hover:scale-106 transition-transform duration-700 ease-out will-change-transform"
                    style={{ minHeight: i === 0 ? '320px' : '150px' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Perfect Gift ----------
function PerfectGiftSection() {
  const occasionLogos = {
    birthdays: BirthdayLogo,
    anniversaries: AnniversaryLogo,
    valentines: ValentineLogo,
    friendship: FriendshipLogo,
    graduation: GraduationLogo,
    'just-because': JustBecauseLogo,
  };

  return (
    <section className="py-20 lg:py-28 bg-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">Every Moment</p>
            <h2 className="section-heading">The Perfect Gift For</h2>
            <p className="font-sans text-sm text-cocoa/60 mt-4">
              Petalique blooms are the answer to every gifting occasion.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {OCCASION_CARDS.map(({ id, label, tagline }, i) => {
            const LogoComponent = occasionLogos[id] || JustBecauseLogo;
            return (
              <ScrollReveal key={label} delay={i * 60} distance={18}>
                <Link
                  to="/shop"
                  className="bg-white/80 hover:bg-white border border-blush/80 hover:border-dusty/60 rounded-2xl p-5 sm:p-6 text-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col items-center justify-between min-h-[175px] h-full"
                >
                  <div className="w-13 h-13 rounded-full bg-cream border border-blush/80 flex items-center justify-center text-dusty group-hover:bg-dusty group-hover:text-cream group-hover:border-dusty group-hover:scale-110 transition-all duration-400 shadow-xs mb-3">
                    <LogoComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-cocoa group-hover:text-dusty transition-colors leading-snug">
                      {label}
                    </h3>
                    {tagline && (
                      <p className="font-sans text-[10px] tracking-wider text-cocoa/50 mt-1 uppercase">
                        {tagline}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-dusty opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-sans text-[10px] tracking-widest uppercase flex items-center gap-1 font-medium">
                      Shop <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Custom Bouquets CTA ----------
function CustomCTASection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to create a custom bouquet with Petalique.`;
  return (
    <section className="py-20 lg:py-28 bg-cocoa relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-dusty/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-sage/20 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" distance={24}>
          <p className="font-sans text-xs tracking-widest uppercase text-dusty mb-4">Dream It. We'll Make It.</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
            Can't Find Exactly What You're Looking For?
          </h2>
          <p className="font-sans text-sm text-cream/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Design your perfect bouquet — choose your flowers, colors, size, wrapping and add a personal message. We'll craft it just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-bouquet" className="btn-primary bg-cream text-cocoa hover:bg-blush">
              Build Your Bouquet
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-cream text-cream hover:bg-cream hover:text-cocoa"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------- Section: Testimonials ----------
function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">Real Reviews</p>
            <h2 className="section-heading">Customer Love</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 90} distance={20}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5 h-full flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={13} className="fill-dusty text-dusty" />
                    ))}
                  </div>
                  {/* Text */}
                  <p className="font-sans text-sm text-cocoa/80 leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  {/* Product */}
                  <p className="font-sans text-[10px] tracking-wider uppercase text-dusty mb-4">
                    {t.product}
                  </p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-blush/40">
                  <div className="w-8 h-8 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-xs text-dusty font-semibold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-cocoa">{t.name}</p>
                    <p className="font-sans text-[10px] text-cocoa/50">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Instagram Gallery ----------
function InstagramSection() {
  return (
    <section className="py-20 lg:py-28 bg-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-10">
            <p className="section-subheading mb-3">Find Us On</p>
            <h2 className="section-heading">@petalique.by.k</h2>
            <p className="font-sans text-sm text-cocoa/60 mt-4">
              Behind the scenes, new drops and happy customers ✨
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 btn-outline"
            >
              <Instagram size={15} />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {INSTAGRAM_POSTS.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 50} distance={16}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden rounded-xl group shadow-2xs hover:shadow-md transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cocoa/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <Instagram size={20} className="text-white transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Newsletter ----------
function NewsletterSection() {
  return (
    <section className="py-16 bg-blush">
      <div className="max-w-xl mx-auto px-4 text-center">
        <ScrollReveal direction="up" distance={20}>
          <h3 className="font-serif text-3xl text-cocoa mb-3">Stay in Bloom</h3>
          <p className="font-sans text-sm text-cocoa/70 mb-6">
            Be the first to know about new collections, seasonal drops and special offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-dusty/30 bg-white text-cocoa placeholder-cocoa/40 font-sans text-sm focus:outline-none focus:border-dusty transition-all duration-300 focus:shadow-[0_0_15px_-3px_rgba(199,141,156,0.3)]"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="font-sans text-[10px] text-cocoa/40 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------- Section: Signature Blue Bouquet Featured ----------
function SignaturePieceSection() {
  const blueBouquet = PRODUCTS.find((p) => p.id === 9) || PRODUCTS[0];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${encodeURIComponent(blueBouquet.name)}. Can you share details and availability?`;

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #dbeafe 50%, #FDF8F3 100%)' }}
    >
      {/* Soft decorative circles */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103,181,232,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: '-8%', left: '-4%',
          width: 360, height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,59,181,0.08) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <ScrollReveal direction="up" distance={16}>
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-widest uppercase font-medium mb-3" style={{ color: '#143bb5' }}>
              ✦ &nbsp;Our Signature Creation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cocoa leading-tight">
              The Blue Chenille <span className="italic" style={{ color: '#143bb5' }}>Bouquet</span>
            </h2>
            <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
              Royal-blue and baby-blue handmade chenille blooms — a unique keepsake that never wilts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with zoom and decoration */}
          <ScrollReveal direction="right" distance={32}>
            <div className="relative group">
              {/* Organic blob shape behind image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(103,181,232,0.2) 0%, rgba(20,59,181,0.1) 100%)',
                  transform: 'rotate(-3deg) scale(1.03)',
                  borderRadius: '30% 70% 65% 35% / 40% 45% 55% 60%',
                }}
              />

              {/* Main image with zoom on hover */}
              <div
                className="relative overflow-hidden shimmer-on-hover"
                style={{
                  borderRadius: '30% 70% 65% 35% / 40% 45% 55% 60%',
                  boxShadow: '0 32px 80px -12px rgba(20,59,181,0.22), 0 16px 40px -8px rgba(103,181,232,0.18)',
                }}
              >
                <img
                  src="/photos/blue-bouquet-card.jpg"
                  alt="Royal blue handmade chenille bouquet — Petalique signature piece"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ display: 'block', aspectRatio: '4/5' }}
                  loading="lazy"
                />
                {/* Blue tint overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(20,59,181,0.15) 0%, transparent 60%)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute font-sans"
                style={{
                  top: '8%',
                  right: '-16px',
                  background: 'white',
                  color: '#143bb5',
                  borderRadius: 32,
                  padding: '10px 18px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  boxShadow: '0 8px 28px rgba(20,59,181,0.18)',
                  border: '1.5px solid rgba(103,181,232,0.4)',
                  animation: 'petalFloat 5s ease-in-out infinite alternate',
                }}
              >
                ✦ Handmade
              </div>
              <div
                className="absolute font-sans"
                style={{
                  bottom: '12%',
                  left: '-18px',
                  background: '#143bb5',
                  color: 'white',
                  borderRadius: 32,
                  padding: '10px 18px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  boxShadow: '0 8px 28px rgba(20,59,181,0.3)',
                  animation: 'petalFloat 6s 1s ease-in-out infinite alternate',
                }}
              >
                💙 Never Wilts
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Product details */}
          <ScrollReveal direction="left" distance={32} delay={150}>
            <div>
              {/* Product name & rating */}
              <p className="font-sans text-xs tracking-widest uppercase font-medium mb-3" style={{ color: '#143bb5' }}>
                Evil Eye Protection Bouquet
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-cocoa leading-tight mb-4">
                Royal Blue Chenille<br />
                <span className="italic" style={{ color: '#143bb5' }}>Handcrafted Bouquet</span>
              </h3>

              {/* Stars */}
              <div className="flex items-center gap-1.5 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="font-sans text-xs text-cocoa/50 ml-2">Premium Handcrafted</span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-cocoa/70 leading-relaxed mb-6">
                Each bloom is individually shaped from premium chenille fabric — soft, vibrant, and beautifully detailed. This bouquet features royal blue and baby-blue flowers with delicate white accents and hand-tied satin ribbon. A lasting keepsake for every occasion.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-7">
                {['Royal Blue Chenille', 'Baby Blue Accents', 'Handmade Petals', 'Satin Ribbon', 'Gift-Ready', 'Never Wilts'].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[11px] px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(20,59,181,0.07)', color: '#143bb5', border: '1px solid rgba(103,181,232,0.3)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-end gap-4 mb-7">
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-cocoa/40 mb-1">Bouquet Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold" style={{ color: '#143bb5' }}>₹{blueBouquet.price?.toLocaleString('en-IN') || '1,150'}</span>
                    {blueBouquet.originalPrice && (
                      <span className="font-sans text-base text-cocoa/35 line-through">₹{blueBouquet.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                  <p className="font-sans text-[10px] text-cocoa/40 mt-0.5">₹150 per bloom · Minimum 7 blooms</p>
                </div>
                <div className="w-px h-12 bg-blue-100" />
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-cocoa/40 mb-1">Single Bloom</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold" style={{ color: '#67b5e8' }}>₹199</span>
                  </div>
                  <p className="font-sans text-[10px] text-cocoa/40 mt-0.5">Individual flower</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/product/evil-eye-protection-bouquet"
                  className="btn-primary flex items-center justify-center gap-2 text-center"
                  style={{ background: '#143bb5', borderColor: '#143bb5' }}
                >
                  <ShoppingBag size={15} />
                  View Full Details
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 text-center"
                  style={{ borderColor: '#143bb5', color: '#143bb5' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L.057 23.943l6.258-1.642A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.6-.5-5.1-1.37L3 21.5l.9-3.8A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Main Home Page ----------
export default function HomePage() {
  return (
    <main>
      <BouquetHero />
      <BloomDivider variant="flourish" className="bg-cream" />
      <BestsellersSection />
      <BloomDivider variant="bloom" className="bg-cream" />
      <SignaturePieceSection />
      <BloomDivider variant="flourish" className="bg-blush/30" />
      <CollectionsSection />
      <BloomDivider variant="flourish" className="bg-blush/30" />
      <MadeWithLoveSection />
      <BloomDivider variant="petals" className="bg-cream" />
      <PerfectGiftSection />
      <PetalWaveTransition fill="fill-cocoa" bg="bg-blush/20" />
      <CustomCTASection />
      <PetalWaveTransition fill="fill-cream" bg="bg-cocoa" />
      <TestimonialsSection />
      <BloomDivider variant="bloom" className="bg-cream" />
      <InstagramSection />
      <BloomDivider variant="flourish" className="bg-blush/20" />
      <NewsletterSection />
    </main>
  );
}
