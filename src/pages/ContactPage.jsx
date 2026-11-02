import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, Send } from 'lucide-react';
import { BUSINESS_EMAIL, BUSINESS_CITY, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, INSTAGRAM_URL } from '../data/products';

const FAQ = [
  { q: 'How long does it take to prepare an order?', a: 'Most bouquets take 3–7 business days to handcraft. Custom orders may take slightly longer depending on complexity. We\'ll confirm your exact timeline on WhatsApp.' },
  { q: 'Do you ship outside Jaipur?', a: 'Yes! We offer Pan-India shipping. Shipping charges and estimated delivery times vary by location and will be shared when you place your order.' },
  { q: 'Are the flowers really handmade?', a: 'Absolutely. Every single petal, stem and leaf is handcrafted by K using premium chenille-textured fabric materials. No mass production, ever.' },
  { q: 'Can I request a specific color or theme?', a: 'Of course! That\'s what our Custom Bouquet Builder is for. You can specify colors, themes, flower types, size and even upload a reference image.' },
  { q: 'Will my bouquet look exactly like the photograph?', a: 'Because everything is handmade, slight variations are natural and beautiful. We guarantee the same quality, style and love — but your bouquet is uniquely yours.' },
  { q: 'How do I place an order?', a: 'You can add items to your cart on the website, or use our Custom Bouquet Builder. All orders are confirmed via WhatsApp, where we\'ll discuss final details and payment.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blush rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blush/10 transition-colors"
      >
        <span className="font-sans text-sm font-medium text-cocoa pr-4">{q}</span>
        <span className="text-dusty flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="font-sans text-sm text-cocoa/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleWA = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Petalique! 👋\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n${form.message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <main className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-blush/30 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading mb-3">We'd Love to Hear From You</p>
          <h1 className="section-heading">Get in Touch</h1>
          <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-md mx-auto">
            Have a question, a custom order in mind or just want to say hello? We're always happy to chat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl text-cocoa mb-8">Let's Talk</h2>

            <div className="space-y-6 mb-10">
              {[
                { Icon: MapPin, label: 'Location', value: BUSINESS_CITY },
                { Icon: Phone, label: 'WhatsApp / Call', value: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { Icon: Mail, label: 'Email', value: BUSINESS_EMAIL, href: `mailto:${BUSINESS_EMAIL}` },
                { Icon: Clock, label: 'Response Time', value: 'Usually within 24 hours' },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-dusty" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-dusty mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-sans text-sm text-cocoa hover:text-dusty transition-colors">{value}</a>
                    ) : (
                      <p className="font-sans text-sm text-cocoa">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-5 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebe5a] transition-colors"
              >
                <MessageCircle size={20} />
                <div>
                  <p className="font-sans text-sm font-semibold">Chat on WhatsApp</p>
                  <p className="font-sans text-xs opacity-80">Fastest way to reach us</p>
                </div>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-5 py-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] to-[#cc2366] text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                <div>
                  <p className="font-sans text-sm font-semibold">DM on Instagram</p>
                  <p className="font-sans text-xs opacity-80">@petalique.by.k</p>
                </div>
              </a>
            </div>

            {/* Shipping note */}
            <div className="mt-8 p-5 bg-white rounded-xl border border-blush">
              <h3 className="font-serif text-lg text-cocoa mb-3">Shipping Information</h3>
              <ul className="space-y-2 font-sans text-xs text-cocoa/70">
                <li>🚚 Pan-India shipping available</li>
                <li>📦 All orders carefully packaged to protect handmade flowers</li>
                <li>⏱ Preparation: 3–8 business days (varies by product)</li>
                <li>📍 Based in Jaipur, Rajasthan</li>
                <li>💳 Payment details shared on WhatsApp confirmation</li>
              </ul>
              <p className="font-sans text-[10px] text-cocoa/40 mt-3 italic">
                * Exact shipping costs and timelines confirmed at time of order.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl border border-blush shadow-sm p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-cocoa mb-6">Send a Message</h2>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🌸</div>
                  <h3 className="font-serif text-2xl text-cocoa mb-2">Message Sent!</h3>
                  <p className="font-sans text-sm text-cocoa/60 mb-6">
                    Your message has been sent via WhatsApp. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-outline">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWA} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-cocoa/70 block mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-cocoa/70 block mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-wider uppercase text-cocoa/70 block mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-wider uppercase text-cocoa/70 block mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => set('subject', e.target.value)}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-wider uppercase text-cocoa/70 block mb-1.5">Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us about your order, question or just say hi..."
                      rows={5}
                      className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 btn-primary">
                    <MessageCircle size={15} />
                    Send via WhatsApp
                  </button>
                  <p className="font-sans text-[10px] text-cocoa/40 text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="section-subheading mb-3">Quick Answers</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQ.map((item) => <FAQItem key={item.q} {...item} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
