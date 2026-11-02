import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, COLLECTION_CATEGORIES } from '../data/products';

export default function CollectionsPage() {
  const { slug } = useParams();

  // If a specific collection slug is given, show that collection
  if (slug) {
    const collection = COLLECTION_CATEGORIES.find((c) => c.slug === slug);
    const products = PRODUCTS.filter((p) => p.category === slug);

    if (!collection) {
      return (
        <main className="pt-20 min-h-screen bg-cream flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🌸</div>
            <h2 className="font-serif text-3xl text-cocoa mb-3">Collection Not Found</h2>
            <Link to="/collections" className="btn-primary mt-4 inline-block">View All Collections</Link>
          </div>
        </main>
      );
    }

    return (
      <main className="pt-20 min-h-screen bg-cream">
        {/* Hero banner */}
        <div className="relative h-64 overflow-hidden">
          <img src={collection.image} alt={collection.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 to-cocoa/20 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <Link to="/collections" className="font-sans text-xs text-cream/60 hover:text-cream flex items-center gap-1 mb-2">
                ← All Collections
              </Link>
              <h1 className="font-serif text-4xl text-cream">{collection.name}</h1>
              <p className="font-sans text-sm text-cream/70 mt-1">{collection.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="font-serif text-2xl text-cocoa mb-2">Coming Soon</h3>
              <p className="font-sans text-sm text-cocoa/60 mb-6">
                We're crafting new blooms for this collection. Check back soon!
              </p>
              <Link to="/custom-bouquet" className="btn-primary">Request a Custom Bouquet</Link>
            </div>
          )}
        </div>
      </main>
    );
  }

  // All collections overview
  return (
    <main className="pt-20 min-h-screen bg-cream">
      <div className="bg-blush/30 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading mb-3">Handcrafted with Heart</p>
          <h1 className="section-heading">Our Collections</h1>
          <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
            Each collection is a world of its own — curated, handcrafted and made to be gifted.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTION_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-serif text-2xl text-cream">{cat.name}</h2>
                  <p className="font-sans text-xs text-cream/70 mt-1 mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    {cat.count && (
                      <span className="font-sans text-xs text-cream/50">{cat.count} designs</span>
                    )}
                    <div className="flex items-center gap-1 text-cream text-xs font-sans tracking-widest uppercase group-hover:gap-2 transition-all duration-200">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
