import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { INSTAGRAM_URL, BUSINESS_EMAIL, BUSINESS_CITY, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cocoa text-cream">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-serif text-3xl tracking-wide text-cream">PETALIQUE</div>
              <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-dusty">by K</div>
            </div>
            <p className="font-sans text-sm text-cream/70 leading-relaxed mb-6">
              Flowers That Stay, Memories That Bloom.
            </p>
            <p className="font-sans text-xs text-cream/50 leading-relaxed">
              Handcrafted floral gifts made with love in Jaipur, shipped across India.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-dusty hover:text-cream transition-colors duration-300 font-sans text-sm group"
            >
              <Instagram size={16} className="group-hover:scale-110 transition-transform" />
              <span>@petalique.by.k</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { to: '/shop', label: 'Shop All' },
                { to: '/collections', label: 'Collections' },
                { to: '/custom-bouquet', label: 'Custom Bouquets' },
                { to: '/our-story', label: 'Our Story' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-5">Collections</h3>
            <ul className="space-y-3">
              {[
                { to: '/collections/tulips', label: 'Tulip Tales' },
                { to: '/collections/sunflowers', label: 'Sunflower Love' },
                { to: '/collections/lilies', label: 'Lily Dreams' },
                { to: '/collections/roses', label: 'The Rose Edit' },
                { to: '/collections/mixed', label: 'Mixed Bouquets' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-dusty mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-cream/70">{BUSINESS_CITY}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-dusty mt-0.5 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-dusty mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
            </ul>

            {/* Shipping note */}
            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="font-sans text-xs text-cream/60 leading-relaxed">
                🚚 Pan-India Shipping Available
                <br />
                📦 Careful packaging for every order
                <br />
                ✋ Made to order — allow prep time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream/40 text-center sm:text-left">
            © {currentYear} PETALIQUE by K · All rights reserved
          </p>
          <p className="font-sans text-xs text-cream/40 flex items-center gap-1">
            Made with <Heart size={11} className="text-dusty fill-dusty" /> in Jaipur
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors">Privacy</Link>
            <Link to="/terms" className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
