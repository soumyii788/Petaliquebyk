import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.colors[0], product.sizes[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card group relative">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
          style={{ transform: 'scale(1)' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-cocoa/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 bg-cream text-cocoa text-xs font-sans tracking-widest uppercase px-5 py-2.5 rounded-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <Eye size={14} />
            Quick View
          </span>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.category === 'lilies' && (
            <span className="bg-cocoa text-cream text-[9px] font-sans tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
              +₹250 Lily Craft
            </span>
          )}
          {product.bestseller && (
            <span className="bg-dusty text-white text-[9px] font-sans tracking-wider uppercase px-2.5 py-1 rounded-full">
              Bestseller
            </span>
          )}
          {discount && (
            <span className="bg-sage text-white text-[9px] font-sans tracking-wider uppercase px-2.5 py-1 rounded-full">
              {discount}% off
            </span>
          )}
          {!product.available && (
            <span className="bg-cocoa/80 text-cream text-[9px] font-sans tracking-wider uppercase px-2.5 py-1 rounded-full">
              Sold Out
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWished(!wished); }}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            className={wished ? 'fill-dusty text-dusty' : 'text-cocoa'}
          />
        </button>
      </Link>

      {/* Info */}
      <div className="p-4">
        {/* Category */}
        <p className="font-sans text-[10px] tracking-widest uppercase text-dusty mb-1">{product.category}</p>

        {/* Name */}
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg text-cocoa leading-tight mb-1 hover:text-dusty transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="font-sans text-xs text-cocoa/60 leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-serif text-xl text-cocoa">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-cocoa/40 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
              !product.available
                ? 'bg-cocoa/10 text-cocoa/40 cursor-not-allowed'
                : added
                ? 'bg-sage text-white'
                : 'bg-cocoa text-cream hover:bg-dusty'
            }`}
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : product.available ? 'Add to Cart' : 'Sold Out'}
          </button>
          <Link
            to={`/product/${product.slug}`}
            className="px-3 py-2.5 border border-blush rounded-full text-cocoa hover:border-dusty hover:text-dusty transition-all duration-300"
            aria-label="View product details"
          >
            <Eye size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
