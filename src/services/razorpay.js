import { RAZORPAY_KEY_ID } from '../data/products';

/**
 * Dynamically loads the Razorpay checkout script if not already present.
 */
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Opens Razorpay standard checkout popup.
 */
export const openRazorpayCheckout = async ({
  amount, // amount in INR
  customerInfo,
  items,
  orderNote = '',
  onSuccess,
  onFailure,
  onDismiss,
}) => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded || !window.Razorpay) {
    if (onFailure) {
      onFailure(new Error('Failed to load Razorpay payment gateway. Please check your internet connection or use WhatsApp checkout.'));
    }
    return;
  }

  // Active Key ID: checks env var first, then products.js fallback
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID || RAZORPAY_KEY_ID;

  if (!key || key === 'rzp_test_placeholder') {
    // If running in development without a real key, alert gracefully
    const promptKey = window.prompt(
      'Enter your Razorpay Key ID (e.g. rzp_test_...)\n\nTip: You can get this free at https://dashboard.razorpay.com (Settings > API Keys).\nOr save it in your .env file as VITE_RAZORPAY_KEY_ID=...',
      ''
    );
    if (!promptKey) {
      if (onFailure) {
        onFailure(new Error('Razorpay Key ID is required to initiate online payment. You can place your order via WhatsApp instead.'));
      }
      return;
    }
    // Save to window for this session
    window.__CUSTOM_RAZORPAY_KEY__ = promptKey;
  }

  const activeKey = window.__CUSTOM_RAZORPAY_KEY__ || key;

  const itemSummary = items
    .map((i) => `${i.name} (${i.selectedColor || 'Standard'}, ${i.selectedSize || 'Standard'}) × ${i.quantity}`)
    .join('; ');

  const options = {
    key: activeKey,
    amount: Math.round(amount * 100), // amount in paise
    currency: 'INR',
    name: 'PETALIQUE by K',
    description: `Order of ${items.length} item(s)`,
    image: '/favicon.svg',
    prefill: {
      name: customerInfo.name || '',
      email: customerInfo.email || '',
      contact: customerInfo.phone || '',
    },
    notes: {
      address: `${customerInfo.address}, ${customerInfo.city || ''} - ${customerInfo.pincode}`,
      items: itemSummary.substring(0, 250),
      orderNote: orderNote.substring(0, 250),
    },
    theme: {
      color: '#C78D9C', // Petalique Dusty Rose
    },
    modal: {
      ondismiss: () => {
        if (onDismiss) onDismiss();
      },
    },
    handler: (response) => {
      // response: { razorpay_payment_id: "pay_...", razorpay_order_id: "...", razorpay_signature: "..." }
      if (onSuccess) {
        onSuccess(response);
      }
    },
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (resp) {
      if (onFailure) {
        onFailure(resp.error || new Error('Payment failed. Please try again or pay via WhatsApp.'));
      }
    });
    rzp.open();
  } catch (err) {
    if (onFailure) {
      onFailure(err);
    }
  }
};
