import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { INSTAGRAM_URL } from '../data/products';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/custom-bouquet', label: 'Custom Bouquets' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-blush/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group">
              <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-cocoa group-hover:text-dusty transition-colors duration-300">
                PETALIQUE
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-dusty -mt-1">
                by K
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-sans text-xs tracking-widest uppercase transition-all duration-300 pb-0.5 ${
                      isActive
                        ? 'text-dusty border-b border-dusty'
                        : 'text-cocoa hover:text-dusty'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex p-2 text-cocoa hover:text-dusty transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <Link
                to="/cart"
                className="relative p-2 text-cocoa hover:text-dusty transition-colors duration-300"
                aria-label={`Cart (${totalItems} items)`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-dusty text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-cocoa hover:text-dusty transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-cocoa/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-cream shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="font-serif text-2xl text-cocoa">PETALIQUE</div>
                <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-dusty">by K</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-cocoa hover:text-dusty transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-serif text-2xl transition-colors duration-200 ${
                      isActive ? 'text-dusty' : 'text-cocoa hover:text-dusty'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-blush">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cocoa hover:text-dusty transition-colors font-sans text-sm"
              >
                <Instagram size={16} />
                <span>@petalique.by.k</span>
              </a>
              <p className="font-sans text-xs text-dusty/70 mt-3">
                Jaipur, Rajasthan · Pan-India Shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
