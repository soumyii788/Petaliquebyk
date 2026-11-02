import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, MessageCircle, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/products';

function EmptyCart() {
  return (
    <div className="text-center py-24 px-4">
      <div className="w-20 h-20 bg-blush rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBag size={32} className="text-dusty" />
      </div>
      <h2 className="font-serif text-3xl text-cocoa mb-3">Your Cart is Empty</h2>
      <p className="font-sans text-sm text-cocoa/60 mb-8">
        Looks like you haven't added any blooms yet. Let's fix that!
      </p>
      <Link to="/shop" className="btn-primary">Explore the Blooms</Link>
    </div>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [orderNote, setOrderNote] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '', address: '', city: '', pincode: '' });
  const [showCheckout, setShowCheckout] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setCustomerInfo((p) => ({ ...p, [k]: v }));

  const shipping = totalPrice >= 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  const validate = () => {
    const e = {};
    if (!customerInfo.name.trim()) e.name = 'Required';
    if (!customerInfo.phone.trim()) e.phone = 'Required';
    if (!customerInfo.email.trim()) e.email = 'Required';
    if (!customerInfo.address.trim()) e.address = 'Required';
    if (!customerInfo.pincode.trim()) e.pincode = 'Required';
    return e;
  };

  const handleWhatsAppOrder = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    const itemLines = items.map(
      (i) => `• ${i.name} (${i.selectedColor}, ${i.selectedSize}) × ${i.quantity} = ₹${(i.price * i.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    const msg = encodeURIComponent(
      `🌸 *PETALIQUE – New Order Request*\n\n` +
      `*Customer Details:*\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nEmail: ${customerInfo.email}\n` +
      `Address: ${customerInfo.address}, ${customerInfo.city} – ${customerInfo.pincode}\n\n` +
      `*Order Items:*\n${itemLines}\n\n` +
      `Subtotal: ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `Shipping: ${shipping === 0 ? 'Free' : `₹${shipping}`}\n` +
      `*Grand Total: ₹${grandTotal.toLocaleString('en-IN')}*\n\n` +
      (orderNote ? `Note: ${orderNote}\n\n` : '') +
      `_Please confirm availability, preparation time and payment details. Thank you!_`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <main className="pt-20 min-h-screen bg-cream">
        <EmptyCart />
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl text-cocoa">Your Cart</h1>
            <p className="font-sans text-sm text-cocoa/50 mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
          </div>
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-cocoa/60 hover:text-dusty transition-colors">
            <ArrowLeft size={14} /> Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.cartId} className="bg-white rounded-2xl border border-blush p-4 flex gap-4">
                <Link to={`/product/${item.slug}`} className="flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/product/${item.slug}`}>
                        <h3 className="font-serif text-base text-cocoa hover:text-dusty transition-colors">{item.name}</h3>
                      </Link>
                      <p className="font-sans text-xs text-cocoa/50 mt-0.5">{item.selectedColor} · {item.selectedSize}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.cartId)}
                      className="p-1.5 text-cocoa/30 hover:text-red-400 transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity */}
                    <div className="flex items-center border border-blush rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-cocoa hover:bg-blush transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center font-sans text-sm text-cocoa">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-cocoa hover:bg-blush transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    {/* Price */}
                    <span className="font-serif text-lg text-cocoa">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Order Note */}
            <div className="bg-white rounded-2xl border border-blush p-5">
              <label className="font-sans text-xs tracking-widest uppercase text-cocoa/70 block mb-2">
                Order Note <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="Any special instructions for your order..."
                rows={3}
                className="w-full font-sans text-sm text-cocoa placeholder-cocoa/30 border border-blush rounded-xl p-3 focus:outline-none focus:border-dusty transition-colors resize-none"
              />
            </div>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="font-sans text-xs text-cocoa/40 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Trash2 size={12} /> Clear cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-blush p-6 sticky top-24">
              <h2 className="font-serif text-xl text-cocoa mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.cartId} className="flex justify-between font-sans text-xs text-cocoa/70">
                    <span className="truncate pr-2">{item.name} × {item.quantity}</span>
                    <span className="flex-shrink-0">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-blush pt-4 space-y-2">
                <div className="flex justify-between font-sans text-sm text-cocoa/70">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-cocoa/70">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-sage font-semibold' : ''}>
                    {shipping === 0 ? 'Free 🎉' : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="font-sans text-[10px] text-dusty">
                    Add ₹{(999 - totalPrice).toLocaleString('en-IN')} more for free shipping
                  </p>
                )}
                <div className="flex justify-between font-serif text-lg text-cocoa pt-2 border-t border-blush">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout toggle */}
              <button
                onClick={() => setShowCheckout(!showCheckout)}
                className="w-full btn-primary mt-5 text-center"
              >
                {showCheckout ? 'Hide Details' : 'Proceed to Order'}
              </button>
            </div>

            {/* Checkout form */}
            {showCheckout && (
              <div className="bg-white rounded-2xl border border-blush p-6">
                <h3 className="font-serif text-lg text-cocoa mb-5">Delivery Details</h3>
                <div className="space-y-3">
                  {[
                    { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                    { key: 'phone', label: 'WhatsApp Number *', type: 'tel', placeholder: '+91 00000 00000' },
                    { key: 'email', label: 'Email Address *', type: 'email', placeholder: 'you@email.com' },
                    { key: 'address', label: 'Delivery Address *', type: 'text', placeholder: 'House/flat, street, area' },
                    { key: 'city', label: 'City', type: 'text', placeholder: 'City' },
                    { key: 'pincode', label: 'PIN Code *', type: 'text', placeholder: '000 000' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="font-sans text-[10px] tracking-widest uppercase text-cocoa/60 block mb-1">{label}</label>
                      <input
                        type={type}
                        value={customerInfo[key]}
                        onChange={(e) => set(key, e.target.value)}
                        placeholder={placeholder}
                        className={`w-full px-4 py-2.5 border rounded-xl font-sans text-sm text-cocoa focus:outline-none transition-colors ${
                          errors[key] ? 'border-red-300 focus:border-red-400' : 'border-blush focus:border-dusty'
                        }`}
                      />
                      {errors[key] && <p className="font-sans text-[10px] text-red-400 mt-0.5">{errors[key]}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="font-sans text-xs text-amber-700">
                    ⚠️ Orders are confirmed via WhatsApp only. No payment is processed online — K will share payment details on WhatsApp after confirming your order.
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 mt-4 py-3.5 bg-[#25D366] text-white rounded-full font-sans text-xs tracking-widest uppercase hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={15} />
                  Confirm Order on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
