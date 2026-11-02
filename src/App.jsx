import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionsPage from './pages/CollectionsPage';
import CustomBouquetPage from './pages/CustomBouquetPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 404 Not Found page
function NotFoundPage() {
  return (
    <main className="pt-20 min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌸</div>
        <h1 className="font-serif text-5xl text-cocoa mb-3">404</h1>
        <h2 className="font-serif text-2xl text-dusty mb-4">This Petal Got Lost</h2>
        <p className="font-sans text-sm text-cocoa/60 mb-8 max-w-sm mx-auto">
          The page you're looking for seems to have floated away. Let's get you back to the blooms.
        </p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </main>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:slug" element={<CollectionsPage />} />
        <Route path="/custom-bouquet" element={<CustomBouquetPage />} />
        <Route path="/our-story" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}
