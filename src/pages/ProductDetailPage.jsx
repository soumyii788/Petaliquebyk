import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, ChevronLeft, ChevronRight, Truck, Clock, Sparkles, MessageCircle, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [currentImg, setCurrentImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [personalization, setPersonalization] = useState('');
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);
  const [errors, setErrors] = useState({});

  if (!product) {
    return (
      <main className="pt-20 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌸</div>
          <h2 className="font-serif text-3xl text-cocoa mb-3">Bloom Not Found</h2>
          <p className="font-sans text-sm text-cocoa/60 mb-6">This flower seems to have drifted away.</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const getStemMultiplier = (sizeName) => {
    if (!sizeName) return 1;
    if (sizeName.includes('10')) return 10;
    if (sizeName.includes('5')) return 5;
    if (sizeName.includes('3')) return 3;
    return 1;
  };

  const multiplier = getStemMultiplier(selectedSize);
  const currentUnitPrice = product.price * multiplier;
  const currentOriginalPrice = product.originalPrice ? product.originalPrice * multiplier : null;
  const currentTotal = currentUnitPrice * quantity;

  const currentDiscount = currentOriginalPrice
    ? Math.round(((currentOriginalPrice - currentUnitPrice) / currentOriginalPrice) * 100)
    : null;

  const validate = () => {
    const e = {};
    if (!selectedColor) e.color = 'Please select a color';
    if (!selectedSize) e.size = 'Please select a size';
    return e;
  };

  const handleAddToCart = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    addItem({ ...product, price: currentUnitPrice }, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleOrderNow = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const msg = encodeURIComponent(
      `Hi! I'd like to order:\n\n*${product.name}*\nColor: ${selectedColor}\nSize: ${selectedSize}\nQuantity: ${quantity}${personalization ? `\nPersonalization: ${personalization}` : ''}\n\nPrice: ₹${currentTotal.toLocaleString('en-IN')}\n\nLooking forward to hearing from you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  // Related products
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <main className="pt-20 min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-cocoa/50">
          <Link to="/" className="hover:text-dusty transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dusty transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-blush/20">
              <img
                src={product.images[currentImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.bestseller && (
                <div className="absolute top-4 left-4 bg-dusty text-white text-xs font-sans tracking-wider uppercase px-3 py-1 rounded-full">
                  Bestseller
                </div>
              )}
              {discount && (
                <div className="absolute top-4 right-4 bg-cocoa text-cream text-xs font-sans px-3 py-1 rounded-full">
                  {discount}% off
                </div>
              )}
              {/* Nav arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImg((prev) => (prev - 1 + product.images.length) % product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentImg((prev) => (prev + 1) % product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentImg === i ? 'border-dusty' : 'border-transparent hover:border-blush'
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-dusty mb-2">{product.category}</p>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-cocoa leading-tight mb-4">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-serif text-3xl text-cocoa">₹{currentUnitPrice.toLocaleString('en-IN')}</span>
              {currentOriginalPrice && (
                <span className="font-sans text-lg text-cocoa/40 line-through">
                  ₹{currentOriginalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {currentDiscount && (
                <span className="bg-blush text-dusty font-sans text-xs px-2 py-0.5 rounded">Save {currentDiscount}%</span>
              )}
            </div>
            {product.category === 'lilies' && (
              <p className="font-sans text-xs text-dusty mb-4">
                ✨ Includes +₹250 intricate handmade craft fee for lily petals & stamens
              </p>
            )}

            {/* Stars (placeholder) */}
            <div className="flex items-center gap-1.5 mb-5">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-dusty text-dusty" />)}
              <span className="font-sans text-xs text-cocoa/50 ml-1">4.9 (24 reviews)</span>
            </div>

            {/* Short description */}
            <p className="font-sans text-sm text-cocoa/70 leading-relaxed mb-6">{product.shortDescription}</p>

            {/* Color selection */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-sans text-xs tracking-widest uppercase text-cocoa">Color</p>
                {selectedColor && <p className="font-sans text-xs text-dusty">{selectedColor}</p>}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => { setSelectedColor(color); setErrors(e => ({...e, color: null})); }}
                    className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 border ${
                      selectedColor === color
                        ? 'border-dusty bg-dusty text-white'
                        : 'border-blush text-cocoa hover:border-dusty'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
              {errors.color && <p className="font-sans text-xs text-red-400 mt-1">{errors.color}</p>}
            </div>

            {/* Size selection */}
            <div className="mb-5">
              <p className="font-sans text-xs tracking-widest uppercase text-cocoa mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setErrors(e => ({...e, size: null})); }}
                    className={`px-4 py-2 rounded-full font-sans text-xs transition-all duration-200 border ${
                      selectedSize === size
                        ? 'border-dusty bg-dusty text-white'
                        : 'border-blush text-cocoa hover:border-dusty'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {errors.size && <p className="font-sans text-xs text-red-400 mt-1">{errors.size}</p>}
            </div>

            {/* Quantity */}
            <div className="mb-5">
              <p className="font-sans text-xs tracking-widest uppercase text-cocoa mb-2">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-blush rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-cocoa hover:bg-blush transition-colors font-serif text-lg"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-sans text-sm text-cocoa">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-cocoa hover:bg-blush transition-colors font-serif text-lg"
                  >
                    +
                  </button>
                </div>
                <span className="font-sans text-sm text-cocoa/60">
                  Total: <span className="text-cocoa font-semibold">₹{currentTotal.toLocaleString('en-IN')}</span>
                </span>
              </div>
            </div>

            {/* Personalization */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-cocoa mb-2">
                Personalized Message <span className="text-cocoa/40 normal-case tracking-normal text-xs">(optional)</span>
              </p>
              <textarea
                value={personalization}
                onChange={(e) => setPersonalization(e.target.value)}
                placeholder="Add a heartfelt message for your tag..."
                rows={2}
                className="w-full px-4 py-3 rounded-xl border border-blush bg-white text-cocoa placeholder-cocoa/40 font-sans text-sm focus:outline-none focus:border-dusty transition-colors resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.available}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                  added ? 'bg-sage text-white' : 'btn-primary'
                } ${!product.available ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ShoppingBag size={15} />
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWished(!wished)}
                className="w-12 h-12 flex items-center justify-center border border-blush rounded-full hover:border-dusty transition-all duration-300"
              >
                <Heart size={16} className={wished ? 'fill-dusty text-dusty' : 'text-cocoa'} />
              </button>
            </div>

            <button
              onClick={handleOrderNow}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#1ebe5a] transition-colors mb-6"
            >
              <MessageCircle size={15} />
              Order via WhatsApp
            </button>

            {/* Product details */}
            <div className="border border-blush rounded-xl p-5 space-y-3 mb-4">
              <div className="flex items-center gap-2 font-sans text-xs text-cocoa/70">
                <Clock size={14} className="text-dusty" />
                <span>Preparation: <strong>{product.preparationDays}</strong></span>
              </div>
              <div className="flex items-center gap-2 font-sans text-xs text-cocoa/70">
                <Truck size={14} className="text-dusty" />
                <span>Delivery details confirmed on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 font-sans text-xs text-cocoa/70">
                <Sparkles size={14} className="text-dusty" />
                <span>Handcrafted · Each piece is unique</span>
              </div>
            </div>

            {/* Handmade note */}
            <div className="bg-blush/30 rounded-xl p-4">
              <p className="font-sans text-xs text-cocoa/70 leading-relaxed italic">
                💛 <strong>Handmade Note:</strong> Because every Petalique bloom is individually handcrafted, slight variations in color, shape and texture are natural — and what makes your bouquet uniquely yours.
              </p>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl text-cocoa mb-4">About This Bouquet</h2>
          <div className="font-sans text-sm text-cocoa/70 leading-relaxed whitespace-pre-line">
            {product.description}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-3xl text-cocoa mb-8">You May Also Love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
