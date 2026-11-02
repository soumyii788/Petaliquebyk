# PETALIQUE — Premium Handmade Floral Gifting Website

> **"Flowers That Stay, Memories That Bloom."**

A complete, production-ready e-commerce website for **Petalique by K** — a handmade floral gifting brand based in Jaipur.

---

## 🌸 Project Overview

**Tech Stack:** React 18 + Vite + Tailwind CSS + React Router v6 + Lucide React

**Architecture:** Client-side SPA with localStorage cart persistence. Backend-ready structure for future Django/Node.js integration.

---

## 📁 Project Structure

```
petalique/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed responsive navigation
│   │   ├── Footer.jsx          # Full footer with links & contact
│   │   └── ProductCard.jsx     # Reusable product card
│   ├── context/
│   │   └── CartContext.jsx     # Cart state (useReducer + localStorage)
│   ├── data/
│   │   └── products.js         # ← EDIT THIS FILE for products, prices & config
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page (all sections)
│   │   ├── ShopPage.jsx        # Product catalogue with filters
│   │   ├── ProductDetailPage.jsx  # Individual product page
│   │   ├── CollectionsPage.jsx # Collection overview + detail views
│   │   ├── CustomBouquetPage.jsx  # 5-step interactive bouquet builder
│   │   ├── AboutPage.jsx       # Brand story & founder (Khushi Joshi)
│   │   ├── ContactPage.jsx     # Contact form + FAQ
│   │   └── CartPage.jsx        # Cart + checkout form → WhatsApp
│   ├── App.jsx                 # Routes & providers
│   ├── main.jsx
│   └── index.css               # Global styles & Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## ⚙️ Configuration

All configuration is in **`src/data/products.js`**:

```js
export const WHATSAPP_NUMBER = '919257346967'; // Khushi's WhatsApp
export const WHATSAPP_DISPLAY = '+91 92573 46967';
export const INSTAGRAM_URL = 'https://www.instagram.com/petalique.by.k'; // ← Verify URL
export const BUSINESS_EMAIL = 'petalique.byk@gmail.com'; // ← Update if different
export const BUSINESS_CITY = 'Jaipur, Rajasthan';
```

### Adding Real Product Photos
Replace the `Unsplash` image URLs in `products.js` with your actual product photo URLs (or local paths in `/public`):

```js
// In PRODUCTS array, replace images array:
images: ['/photos/tulip-bouquet-1.jpg', '/photos/tulip-bouquet-2.jpg'],
```

### Adding / Editing Products
Each product in the `PRODUCTS` array has:
- `price` — in INR (₹)
- `originalPrice` — optional, shows a strikethrough + discount badge
- `available` — set `false` to show "Sold Out"
- `bestseller` — set `true` to show the bestseller badge
- `preparationDays` — displayed on product page

---

## 📱 Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, bestsellers, collections, process, occasions, custom CTA, testimonials, Instagram gallery |
| Shop | `/shop` | Full product grid with category, price, sort & availability filters |
| Product | `/product/:slug` | Gallery, color/size selection, quantity, personalization, WhatsApp order |
| Collections | `/collections` | All collection overview |
| Collection Detail | `/collections/:slug` | Products filtered by collection |
| Custom Bouquet | `/custom-bouquet` | 5-step interactive builder → WhatsApp |
| Our Story | `/our-story` | Founder story (Khushi Joshi), brand values, journey timeline |
| Contact | `/contact` | Contact form → WhatsApp, FAQ |
| Cart | `/cart` | Cart management + delivery form → WhatsApp order confirmation |

---

## 🛒 Order Flow

All orders are confirmed via **WhatsApp** (no online payment processed):

1. Customer adds items / builds custom bouquet
2. Fills delivery details in cart checkout
3. Clicks **"Confirm Order on WhatsApp"**
4. Pre-filled WhatsApp message opens with full order details
5. Khushi confirms via WhatsApp and shares payment details

### Future: Razorpay Integration
The cart is structured for easy payment gateway addition:
- Replace the WhatsApp CTA in `CartPage.jsx` with a Razorpay checkout call
- Add an order confirmation page at `/order-confirmed`

---

## 🎨 Brand Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#FFF8F1` | Page background |
| `blush` | `#F3DDE3` | Accent backgrounds, cards |
| `dusty` | `#C78D9C` | Primary accent, buttons |
| `sage` | `#A8B59D` | Secondary accent |
| `cocoa` | `#58443D` | Primary text, dark buttons |

---

## 🔮 Future Roadmap

- [ ] Replace placeholder images with actual Petalique product photos
- [ ] Update WhatsApp number, Instagram URL and email
- [ ] Connect Django/Node.js backend for order management
- [ ] Add Razorpay payment gateway
- [ ] Admin dashboard for product management
- [ ] Real customer reviews (connect to backend)
- [ ] Email notifications on order
- [ ] Analytics (Google Analytics / Mixpanel)

---

## 📸 Adding Real Photos

1. Place product photos in `/public/photos/`
2. Update `src/data/products.js` image arrays to reference `/photos/your-image.jpg`
3. Replace hero image URL in `HERO_IMAGE`
4. Replace founder photo URL in `FOUNDER_IMAGE` (only when approved)

---

*Built with 🌸 for Petalique by K — Jaipur*
