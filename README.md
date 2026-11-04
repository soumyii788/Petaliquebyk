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
export const RAZORPAY_KEY_ID = 'rzp_test_placeholder'; // ← Or set VITE_RAZORPAY_KEY_ID in .env
```

### Setting Up Razorpay Online Payments
1. Sign up / log in to [Razorpay Dashboard](https://dashboard.razorpay.com).
2. Go to **Settings > API Keys** and generate a Key ID (`rzp_test_...` or `rzp_live_...`).
3. Create a `.env` file from `.env.example` in the project root:
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key_here
   ```
   Or edit `RAZORPAY_KEY_ID` in `src/data/products.js`.
4. Customers can now pay via UPI (GPay, PhonePe, Paytm), Debit/Credit Cards, and Netbanking. On successful payment, an official Order Confirmation Receipt is generated with the payment reference, and can be sent to WhatsApp with 1 click.

---

## 🛒 Order & Checkout Flow

Petalique supports two flexible checkout methods:

1. **Online Payment (Razorpay)**:
   - Validates delivery address, name, phone, and PIN code
   - Opens Razorpay modal supporting UPI, Cards, Netbanking
   - On payment completion, displays the verified Order Receipt Modal with Payment ID
   - 1-click button to share verified receipt on WhatsApp

2. **Direct WhatsApp Order**:
   - Customers can also choose "Order & Pay via WhatsApp" to coordinate directly with Khushi.

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
