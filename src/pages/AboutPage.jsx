import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Star } from 'lucide-react';
import { FOUNDER_IMAGE, INSTAGRAM_URL } from '../data/products';

const VALUES = [
  { emoji: '✋', title: 'Handmade Always', desc: 'Every single petal shaped by hand. No shortcuts, no machines.' },
  { emoji: '💛', title: 'Made With Love', desc: 'Each bouquet carries K\'s personal care and creative energy.' },
  { emoji: '🌸', title: 'Lasting Beauty', desc: 'Premium fabric flowers that stay perfect, forever.' },
  { emoji: '🎁', title: 'Gift-First Thinking', desc: 'Thoughtfully wrapped and ready to make someone\'s day.' },
];

const JOURNEY = [
  { year: '2022', event: 'The first handmade tulip — made for a friend\'s birthday that changed everything.' },
  { year: '2023', event: 'Petalique by K is born. First 50 orders, all made from a tiny workspace in Jaipur.' },
  { year: '2024', event: 'Custom bouquets become the heart of the brand, crafting bespoke floral stories.' },
  { year: '2025', event: 'New collections, a growing community and beautiful handcrafted blooms from Jaipur.' },
];

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative bg-blush/30 py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-dusty/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading mb-4">The Story Behind the Blooms</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cocoa leading-tight mb-6">
            Every Petal Has a <span className="italic text-dusty">Little Story.</span>
          </h1>
          <p className="font-sans text-sm text-cocoa/70 leading-relaxed max-w-xl mx-auto">
            Petalique isn't just a flower brand — it's a creative journey, a personal practice and a love letter written in petals.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Khushi Joshi, founder of Petalique"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-4 shadow-lg border border-blush max-w-[180px]">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={11} className="fill-dusty text-dusty" />)}
                </div>
                <p className="font-sans text-[10px] text-cocoa/70 italic">"Every bouquet she makes feels like a piece of art."</p>
                <p className="font-sans text-[10px] text-dusty mt-1 font-semibold">— A happy customer</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-subheading mb-4">Meet the Creator</p>
              <h2 className="font-serif text-4xl text-cocoa leading-tight mb-6">
                Hi, I'm <span className="italic text-dusty">Khushi.</span>
              </h2>
              <div className="space-y-4 font-sans text-sm text-cocoa/70 leading-relaxed">
                <p>
                  I'm a physiotherapy student from Jaipur with a slightly obsessive love for flowers, textures and the art of making something beautiful with my hands.
                </p>
                <p>
                  Petalique started as a birthday gift — a small handmade tulip I made for my best friend because I wanted to give her something she could keep forever. She cried. And I knew I was onto something.
                </p>
                <p>
                  What started in my room with a few sheets of fabric and a lot of YouTube tutorials has grown into a small, passionate brand creating handcrafted blooms.
                </p>
                <p>
                  Every flower I make carries a little bit of intention. I think about who it's going to, what they mean to the person ordering and how I can make that feeling tangible in the petals.
                </p>
                <p>
                  My physio studies teach me about the body. Petalique teaches me about the heart. I love both equally.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-12 h-0.5 bg-dusty" />
                <p className="font-serif text-lg text-dusty italic">Khushi Joshi</p>
                <Heart size={14} className="fill-dusty text-dusty" />
              </div>
              <p className="font-sans text-xs text-cocoa/50 mt-1 ml-15">Founder, Petalique by K</p>

              <div className="flex gap-4 mt-8">
                <Link to="/custom-bouquet" className="btn-primary">Commission a Bouquet</Link>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Follow Along
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blush/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">What We Stand For</p>
            <h2 className="section-heading">The Petalique Promise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-serif text-xl text-cocoa mb-2">{v.title}</h3>
                <p className="font-sans text-xs text-cocoa/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subheading mb-3">How We Grew</p>
            <h2 className="section-heading">The Petalique Journey</h2>
          </div>
          <div className="space-y-8">
            {JOURNEY.map((item, i) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-sm text-dusty font-semibold">{item.year}</span>
                  </div>
                  {i < JOURNEY.length - 1 && (
                    <div className="w-0.5 h-12 bg-blush mt-2" />
                  )}
                </div>
                <div className="pt-2.5">
                  <p className="font-sans text-sm text-cocoa/80 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cocoa text-center">
        <div className="max-w-xl mx-auto px-4">
          <Sparkles size={28} className="text-dusty mx-auto mb-4" />
          <h3 className="font-serif text-3xl text-cream mb-3">Want Something Made Just for You?</h3>
          <p className="font-sans text-sm text-cream/70 mb-7">Every bouquet is a collaboration. Tell me your vision and I'll bring it to life.</p>
          <Link to="/custom-bouquet" className="btn-primary bg-cream text-cocoa hover:bg-blush">
            Build Your Custom Bouquet
          </Link>
        </div>
      </section>
    </main>
  );
}
