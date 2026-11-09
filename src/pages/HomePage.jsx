import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Sparkles, Heart, Package, Star } from 'lucide-react';
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

// ---------- Section: Hero ----------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Beautiful handcrafted bouquet by Petalique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-dusty" />
            <span className="font-sans text-xs tracking-widest uppercase text-dusty">
              Handcrafted Floral Gifting
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cocoa leading-[1.05] mb-6">
            Not Just Flowers.{' '}
            <span className="italic text-dusty">Little Pieces</span> of Forever.
          </h1>

          {/* Subtext */}
          <p className="font-sans text-base text-cocoa/70 leading-relaxed mb-8 max-w-md">
            Handcrafted blooms, made with love and wrapped in memories. Find a bouquet that says everything words cannot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="btn-primary text-center">
              Explore the Blooms
            </Link>
            <Link to="/custom-bouquet" className="btn-outline text-center">
              Create Your Bouquet
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 mt-10">
            <div className="text-center">
              <div className="font-serif text-2xl text-cocoa">Forever</div>
              <div className="font-sans text-[10px] tracking-wider uppercase text-dusty">Blooms</div>
            </div>
            <div className="w-px h-8 bg-blush" />
            <div className="text-center">
              <div className="font-serif text-2xl text-cocoa">100%</div>
              <div className="font-sans text-[10px] tracking-wider uppercase text-dusty">Handcrafted</div>
            </div>
            <div className="w-px h-8 bg-blush" />
            <div className="text-center">
              <div className="font-serif text-2xl text-cocoa">Made to</div>
              <div className="font-sans text-[10px] tracking-wider uppercase text-dusty">Order</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-dusty/50" />
        <span className="font-sans text-[10px] tracking-widest uppercase text-dusty/70">Scroll</span>
      </div>
    </section>
  );
}

// ---------- Section: Bestsellers ----------
function BestsellersSection() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Most Loved</p>
          <h2 className="section-heading">Our Bestsellers</h2>
          <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
            These handcrafted bouquets have found their way to hundreds of happy hearts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Blooms
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Collections ----------
function CollectionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-blush/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Curated For You</p>
          <h2 className="section-heading">Shop by Collection</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {COLLECTION_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-cream leading-tight">{cat.name}</h3>
                  <p className="font-sans text-xs text-cream/70 mt-1 mb-3 hidden sm:block">{cat.description}</p>
                  {cat.count && (
                    <span className="font-sans text-xs text-cream/60">{cat.count} designs</span>
                  )}
                  <div className="mt-3 flex items-center gap-1 text-cream/80 group-hover:text-cream transition-colors">
                    <span className="font-sans text-xs tracking-widest uppercase">Explore</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
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
          <div>
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
                <div key={label} className="text-center">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-dusty" />
                  </div>
                  <p className="font-serif text-sm text-cocoa">{label}</p>
                  <p className="font-sans text-[10px] text-cocoa/50 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link to="/our-story" className="btn-primary">
              Read Our Story
            </Link>
          </div>

          {/* Right: Image grid */}
          <div className="grid grid-cols-2 gap-4">
            {PROCESS_IMAGES.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 0 ? 'row-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  style={{ minHeight: i === 0 ? '320px' : '150px' }}
                />
              </div>
            ))}
          </div>
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
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Every Moment</p>
          <h2 className="section-heading">The Perfect Gift For</h2>
          <p className="font-sans text-sm text-cocoa/60 mt-4">
            Petalique blooms are the answer to every gifting occasion.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {OCCASION_CARDS.map(({ id, label, tagline }) => {
            const LogoComponent = occasionLogos[id] || JustBecauseLogo;
            return (
              <Link
                key={label}
                to="/shop"
                className="bg-white/80 hover:bg-white border border-blush/80 hover:border-dusty/60 rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center justify-between min-h-[175px]"
              >
                <div className="w-13 h-13 rounded-full bg-cream border border-blush/80 flex items-center justify-center text-dusty group-hover:bg-dusty group-hover:text-cream group-hover:border-dusty group-hover:scale-105 transition-all duration-300 shadow-xs mb-3">
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
                    Shop <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
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
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dusty/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </div>
    </section>
  );
}

// ---------- Section: Testimonials ----------
function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Real Reviews</p>
          <h2 className="section-heading">Customer Love</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-dusty text-dusty" />
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
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blush rounded-full flex items-center justify-center">
                  <span className="font-serif text-xs text-dusty font-semibold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold text-cocoa">{t.name}</p>
                  <p className="font-sans text-[10px] text-cocoa/50">{t.location}</p>
                </div>
              </div>
            </div>
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
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-white" />
              </div>
            </a>
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
            className="flex-1 px-5 py-3 rounded-full border border-dusty/30 bg-white text-cocoa placeholder-cocoa/40 font-sans text-sm focus:outline-none focus:border-dusty transition-colors"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="font-sans text-[10px] text-cocoa/40 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

// ---------- Main Home Page ----------
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BloomDivider variant="flourish" className="bg-cream" />
      <BestsellersSection />
      <BloomDivider variant="bloom" className="bg-cream" />
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
