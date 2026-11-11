import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import { PRODUCTS } from '../data/products';

const CATEGORIES = ['All', 'tulips', 'sunflowers', 'roses', 'lilies', 'mixed'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹250', min: 0, max: 250 },
  { label: '₹250 – ₹500', min: 250, max: 500 },
  { label: '₹500 – ₹1000', min: 500, max: 1000 },
  { label: '₹1000+', min: 1000, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Bestsellers First', value: 'bestseller' },
];

export default function ShopPage() {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);
  const [sort, setSort] = useState('featured');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'All') list = list.filter((p) => p.category === category);
    list = list.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);
    if (availableOnly) list = list.filter((p) => p.available);

    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'bestseller': list.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)); break;
      default: break;
    }
    return list;
  }, [category, priceRange, sort, availableOnly]);

  return (
    <main className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-blush/30 py-14 overflow-hidden relative">
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blush/40 blur-2xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-dusty/10 blur-2xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <p className="section-subheading mb-3">Handcrafted With Love</p>
          <h1 className="section-heading">Shop All Blooms</h1>
          <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
            Every flower individually handcrafted. Every bouquet a unique creation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                  category === cat
                    ? 'bg-cocoa text-cream shadow-sm'
                    : 'bg-white border border-blush text-cocoa hover:border-dusty hover:text-dusty shadow-xs hover:shadow-sm'
                }`}
              >
                {cat === 'All' ? 'All Flowers' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-blush text-cocoa font-sans text-xs px-4 pr-8 py-2 rounded-full focus:outline-none focus:border-dusty cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-cocoa/50 pointer-events-none" />
            </div>

            {/* Filter button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 bg-white border border-blush text-cocoa font-sans text-xs px-4 py-2 rounded-full hover:border-dusty transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>
          </div>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="bg-white border border-blush rounded-2xl p-6 mb-8 flex flex-col sm:flex-row gap-6 animate-fade-in shadow-xs">
            {/* Price */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-dusty mb-3">Price Range</p>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setPriceRange(r)}
                    className={`px-3 py-1 rounded-full font-sans text-xs transition-all duration-300 ${
                      priceRange.label === r.label
                        ? 'bg-dusty text-white shadow-xs'
                        : 'bg-blush/30 text-cocoa hover:bg-blush'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="sm:border-l sm:border-blush sm:pl-6">
              <p className="font-sans text-xs tracking-widest uppercase text-dusty mb-3">Availability</p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="accent-dusty"
                />
                <span className="font-sans text-xs text-cocoa">In Stock Only</span>
              </label>
            </div>

            {/* Reset */}
            <button
              onClick={() => { setCategory('All'); setPriceRange(PRICE_RANGES[0]); setAvailableOnly(false); setSort('featured'); }}
              className="flex items-center gap-1 font-sans text-xs text-dusty hover:text-cocoa transition-colors ml-auto self-start"
            >
              <X size={12} /> Reset Filters
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="font-sans text-xs text-cocoa/50 mb-6">
          Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 4) * 70}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-5xl mb-4 animate-float">🌸</div>
            <h3 className="font-serif text-2xl text-cocoa mb-2">No flowers found</h3>
            <p className="font-sans text-sm text-cocoa/60">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </main>
  );
}
