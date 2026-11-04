import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowLeft,
  Plus,
  Minus,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/products';
import { openRazorpayCheckout } from '../services/razorpay';

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

// Order Confirmation Receipt Modal displayed after verified Razorpay payment
function OrderSuccessModal({ order, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyPaymentId = () => {
    navigator.clipboard.writeText(order.paymentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendToWhatsApp = () => {
    const itemLines = order.items
      .map(
        (i) =>
          `• ${i.name} (${i.selectedColor || 'Standard'}, ${i.selectedSize || 'Standard'}) × ${i.quantity} = ₹${(
            i.price * i.quantity
          ).toLocaleString('en-IN')}`
      )
      .join('\n');

    const msg = encodeURIComponent(
      `🎉 *PETALIQUE — PAID ORDER RECEIPT*\n\n` +
      `✅ *Payment Status:* PAID (via Razorpay)\n` +
      `💳 *Payment ID:* ${order.paymentId}\n` +
      `📅 *Date:* ${order.date}\n\n` +
      `*Customer Details:*\n` +
      `Name: ${order.customer.name}\n` +
      `Phone: ${order.customer.phone}\n` +
      `Email: ${order.customer.email}\n` +
      `Address: ${order.customer.address}, ${order.customer.city || ''} – ${order.customer.pincode}\n\n` +
      `*Purchased Items:*\n${itemLines}\n\n` +
      `Subtotal: ₹${order.subtotal.toLocaleString('en-IN')}\n` +
      `Shipping: ${order.shipping === 0 ? 'Free' : `₹${order.shipping}`}\n` +
      `*Total Paid: ₹${order.total.toLocaleString('en-IN')}*\n\n` +
      (order.note ? `Note: ${order.note}\n\n` : '') +
      `_I have completed the payment via Razorpay. Please confirm receipt and let me know the preparation update. Thank you!_ 🌸`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-blush max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-sm">
            <CheckCircle2 size={36} />
          </div>
          <span className="font-sans text-[10px] tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold">
            Payment Verified & Completed
          </span>
          <h2 className="font-serif text-3xl text-cocoa mt-3">Order Confirmed!</h2>
          <p className="font-sans text-xs text-cocoa/60 mt-1">
            Thank you, <span className="font-semibold text-cocoa">{order.customer.name}</span>. Your blooms are now queued for crafting.
          </p>
        </div>

        {/* Payment details pill */}
        <div className="bg-cream/80 border border-blush/80 rounded-2xl p-4 mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-cocoa/60">Payment Reference:</span>
            <button
              onClick={handleCopyPaymentId}
              className="font-mono text-dusty font-semibold hover:text-cocoa transition-colors flex items-center gap-1"
            >
              {order.paymentId}
              <span className="text-[10px] text-cocoa/40">({copied ? 'Copied!' : 'Copy'})</span>
            </button>
          </div>
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-cocoa/60">Amount Paid:</span>
            <span className="font-serif text-base text-cocoa font-bold">₹{order.total.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-cocoa/60">Delivery Address:</span>
            <span className="text-cocoa text-right max-w-[200px] truncate">
              {order.customer.address}, {order.customer.city}
            </span>
          </div>
        </div>

        {/* Ordered items brief */}
        <div className="mb-6">
          <p className="font-sans text-xs tracking-wider uppercase text-cocoa/60 mb-2">Items Ordered</p>
          <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
            {order.items.map((i, idx) => (
              <div key={idx} className="flex justify-between font-sans text-xs text-cocoa py-1 border-b border-blush/40">
                <span className="truncate pr-2">{i.name} ({i.selectedColor || 'Standard'}) × {i.quantity}</span>
                <span className="font-semibold flex-shrink-0">₹{(i.price * i.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-3">
          <button
            onClick={handleSendToWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-full font-sans text-xs tracking-widest uppercase hover:bg-[#1ebe5a] transition-all shadow-md font-semibold"
          >
            <MessageCircle size={16} />
            Notify Khushi on WhatsApp
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 border border-blush text-cocoa rounded-full font-sans text-xs tracking-widest uppercase hover:bg-cream transition-colors"
          >
            Done & Continue Shopping
          </button>
        </div>

        <p className="font-sans text-[10px] text-cocoa/40 text-center mt-4">
          A copy of this confirmation has been generated with your Razorpay payment authorization.
        </p>
      </div>
    </div>
  );
}

export default function CartPage() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [orderNote, setOrderNote] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '', address: '', city: '', pincode: '' });
  const [showCheckout, setShowCheckout] = useState(false);
  const [errors, setErrors] = useState({});
  const [isProcessingRazorpay, setIsProcessingRazorpay] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [completedOrder, setCompletedOrder] = useState(null);

  const set = (k, v) => setCustomerInfo((p) => ({ ...p, [k]: v }));

  const shipping = totalPrice >= 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  const validate = () => {
    const e = {};
    if (!customerInfo.name.trim()) e.name = 'Full name is required';
    if (!customerInfo.phone.trim()) e.phone = 'Phone number is required';
    if (!customerInfo.email.trim()) e.email = 'Email address is required';
    if (!customerInfo.address.trim()) e.address = 'Delivery address is required';
    if (!customerInfo.pincode.trim()) e.pincode = 'PIN Code is required';
    return e;
  };

  // Pay online with Razorpay Gateway
  const handleRazorpayPayment = async () => {
    setPaymentError(null);
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setShowCheckout(true);
      return;
    }

    setIsProcessingRazorpay(true);

    await openRazorpayCheckout({
      amount: grandTotal,
      customerInfo,
      items,
      orderNote,
      onSuccess: (response) => {
        setIsProcessingRazorpay(false);
        const orderData = {
          paymentId: response.razorpay_payment_id || `pay_${Date.now()}`,
          date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
          customer: { ...customerInfo },
          items: [...items],
          subtotal: totalPrice,
          shipping,
          total: grandTotal,
          note: orderNote,
        };
        clearCart();
        setCompletedOrder(orderData);
      },
      onFailure: (err) => {
        setIsProcessingRazorpay(false);
        setPaymentError(err.message || 'Payment was unsuccessful or cancelled. Please retry or choose WhatsApp checkout.');
      },
      onDismiss: () => {
        setIsProcessingRazorpay(false);
      },
    });
  };

  // Manual WhatsApp order workflow
  const handleWhatsAppOrder = () => {
    setPaymentError(null);
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setShowCheckout(true);
      return;
    }

    const itemLines = items
      .map(
        (i) =>
          `• ${i.name} (${i.selectedColor || 'Standard'}, ${i.selectedSize || 'Standard'}) × ${i.quantity} = ₹${(
            i.price * i.quantity
          ).toLocaleString('en-IN')}`
      )
      .join('\n');

    const msg = encodeURIComponent(
      `🌸 *PETALIQUE – New Order Request*\n\n` +
      `*Customer Details:*\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nEmail: ${customerInfo.email}\n` +
      `Address: ${customerInfo.address}, ${customerInfo.city} – ${customerInfo.pincode}\n\n` +
      `*Order Items:*\n${itemLines}\n\n` +
      `Subtotal: ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `Shipping: ${shipping === 0 ? 'Free' : `₹${shipping}`}\n` +
      `*Grand Total: ₹${grandTotal.toLocaleString('en-IN')}*\n\n` +
      (orderNote ? `Note: ${orderNote}\n\n` : '') +
      `_Please confirm availability and sharing payment details via WhatsApp._ 💐`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  if (completedOrder) {
    return (
      <main className="pt-20 min-h-screen bg-cream">
        <OrderSuccessModal order={completedOrder} onClose={() => navigate('/shop')} />
      </main>
    );
  }

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
            <p className="font-sans text-sm text-cocoa/50 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-sans text-xs text-cocoa/60 hover:text-dusty transition-colors"
          >
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
                      <p className="font-sans text-xs text-cocoa/50 mt-0.5">
                        {item.selectedColor || 'Standard'} · {item.selectedSize || 'Standard'}
                      </p>
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
                placeholder="Any special gift message or crafting instructions..."
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

          {/* Order Summary & Checkout */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-blush p-6 sticky top-24 shadow-sm">
              <h2 className="font-serif text-xl text-cocoa mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.cartId} className="flex justify-between font-sans text-xs text-cocoa/70">
                    <span className="truncate pr-2">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="flex-shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
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
                  <span>Total Amount</span>
                  <span className="font-bold">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout toggle button */}
              <button
                onClick={() => setShowCheckout(!showCheckout)}
                className="w-full btn-primary mt-5 text-center flex items-center justify-center gap-2"
              >
                <CreditCard size={15} />
                {showCheckout ? 'Hide Checkout Form' : 'Proceed to Checkout'}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-cocoa/50 font-sans">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Secure Checkout powered by Razorpay</span>
              </div>
            </div>

            {/* Delivery Details & Payment Form */}
            {showCheckout && (
              <div className="bg-white rounded-2xl border border-blush p-6 shadow-sm animate-slide-up">
                <h3 className="font-serif text-lg text-cocoa mb-4">Delivery & Contact Information</h3>

                {paymentError && (
                  <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-700">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs">{paymentError}</p>
                  </div>
                )}

                <div className="space-y-3">
                  {[
                    { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'Recipient full name' },
                    { key: 'phone', label: 'Phone / WhatsApp Number *', type: 'tel', placeholder: '+91 92573 46967' },
                    { key: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                    { key: 'address', label: 'Delivery Address *', type: 'text', placeholder: 'House/flat number, street, area' },
                    { key: 'city', label: 'City *', type: 'text', placeholder: 'Jaipur' },
                    { key: 'pincode', label: 'PIN Code *', type: 'text', placeholder: '302001' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="font-sans text-[10px] tracking-widest uppercase text-cocoa/60 block mb-1">
                        {label}
                      </label>
                      <input
                        type={type}
                        value={customerInfo[key]}
                        onChange={(e) => set(key, e.target.value)}
                        placeholder={placeholder}
                        className={`w-full px-4 py-2.5 border rounded-xl font-sans text-sm text-cocoa focus:outline-none transition-colors ${
                          errors[key] ? 'border-red-300 focus:border-red-400 bg-red-50/30' : 'border-blush focus:border-dusty'
                        }`}
                      />
                      {errors[key] && <p className="font-sans text-[10px] text-red-500 mt-0.5">{errors[key]}</p>}
                    </div>
                  ))}
                </div>

                <div className="border-t border-blush mt-6 pt-5 space-y-3">
                  <p className="font-sans text-xs tracking-wider uppercase text-cocoa/70 font-semibold mb-2">
                    Choose Payment Option:
                  </p>

                  {/* Primary Option: Razorpay Payment Gateway */}
                  <button
                    onClick={handleRazorpayPayment}
                    disabled={isProcessingRazorpay}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-cocoa text-cream rounded-full font-sans text-xs tracking-widest uppercase hover:bg-dusty transition-all shadow-md group disabled:opacity-50"
                  >
                    <CreditCard size={16} className="text-blush group-hover:scale-110 transition-transform" />
                    <span>{isProcessingRazorpay ? 'Opening Gateway...' : `Pay ₹${grandTotal.toLocaleString('en-IN')} via Razorpay`}</span>
                  </button>

                  <p className="font-sans text-[10px] text-center text-cocoa/50">
                    Supports UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards & Netbanking
                  </p>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-blush/80"></div>
                    <span className="flex-shrink mx-3 text-[10px] font-sans text-cocoa/40 uppercase tracking-widest">or</span>
                    <div className="flex-grow border-t border-blush/80"></div>
                  </div>

                  {/* Secondary Option: WhatsApp Direct Order */}
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-emerald-600/40 text-emerald-800 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-emerald-50 transition-colors"
                  >
                    <MessageCircle size={15} className="text-emerald-600" />
                    <span>Order & Pay via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
