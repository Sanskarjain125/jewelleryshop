# 👑 Swarnaveda — Luxury Indian Gold Jewellery B2C Marketplace

> A production-ready, complete B2C Gold Jewellery E-Commerce & Multi-Vendor Marketplace frontend inspired by high-end Indian jewellery brands with 100% price transparency, live bullion rates, and BIS Hallmarking verification.

---

## ✨ Key Highlights

- **Luxury Indian Aesthetic:** Warm ivory backgrounds (`#faf8f3`), champagne gold accents (`#d4af37`), deep charcoal typography, with elegant serif headers (*Cormorant Garamond*) and modern sans-serif (*Inter*).
- **Automated Live Gold Price Breakdown:** Live IBJA bullion feed integration breaking down Pure Gold Net Value, Handcrafted Making Charges, and 3% Bullion GST.
- **Dynamic 18K / 22K Purity Switcher:** Automatically recalculates retail prices across products based on market benchmarks.
- **BIS Hallmarking & HUID Guarantee:** Laser-inscribed 6-digit HUID simulation for authentic government assay compliance.
- **Multi-Vendor Ecosystem:**
  - **Vendor Dashboard:** Real-time KPI metrics, Bullion ticker, and recent customer orders.
  - **Catalog Management:** Stock inventory tracking, active/out-of-stock pills, and instant product deletion.
  - **Add Jewellery Creator:** Full form with image presets, weight specifications, live price calculator, and instant publishing into the customer marketplace via `localStorage`.
- **Complete End-to-End Customer Flow:**
  - Filtering by Purity, Gender, Occasion, and Price Range.
  - Ring size selector with Indian standard size guide modal.
  - Shopping Cart with 15-minute Gold Price-Lock guarantee, coupon discounts (`GOLD500`), and gift box options.
  - Multi-step Insured Checkout with Tamper-proof Armoured Courier (Sequel / BVC Logistics) and Indian payment methods (UPI, Card EMI, Net Banking).
  - Order Confirmation with live tracking timeline and tax invoice download.
  - Persistent Wishlist with "Move to Cart" capabilities.

---

## 📁 Project Structure

```
├── index.html                  # Marketplace Landing Page
├── assets/images/              # High-Res Jewellery Photography
│   ├── hero.jpg                # Bridal Heirloom Hero
│   ├── bridal.jpg              # Traditional Bridal Set
│   ├── ring.jpg                # 22K Floral Gold Ring
│   ├── necklace.jpg            # 22K Temple Lakshmi Necklace
│   ├── earrings.jpg            # 22K Emerald Jhumkas
│   └── bangle.jpg              # 22K Peacock Kada Bangle
├── css/
│   ├── variables.css           # Design tokens, color palette & typography
│   ├── global.css              # Reset, utilities, buttons & layout primitives
│   ├── header.css              # Sticky header, mega menu, announcement ticker
│   ├── homepage.css            # Hero carousel, gold rate ticker, curated grids
│   ├── products.css            # Product cards, badges, filter sidebar & badges
│   └── vendor.css              # Vendor layout, KPI cards, tables & forms
├── js/
│   ├── data.js                 # Bullion rate feed, product catalog, cart & wishlist state
│   └── components.js           # Shared header & footer injection, search & drawers
├── pages/
│   ├── category.html           # Product Listing Page with filters, sort & view switcher
│   ├── product.html            # Product Detail Page (PDP) with live gold breakdown & size guide
│   ├── cart.html               # Shopping bag with gold rate lock, coupons & gift options
│   ├── checkout.html           # Multi-step insured checkout with Indian payment methods
│   ├── order-success.html      # Order confirmation with live tracking timeline & invoice
│   ├── wishlist.html           # Saved items with move-to-cart functionality
│   ├── about.html              # Heritage, BIS Hallmarking commitment & craftsmanship
│   └── contact.html            # VIP concierge & private showroom consultation booking
└── vendor/
    ├── dashboard.html          # Merchant Hub with live bullion rates & KPI analytics
    ├── products.html           # Vendor Catalog with inventory management & actions
    └── add-product.html        # Comprehensive Add Jewellery Form with live bullion price calculator
```

---

## 🚀 Running Locally

Serve with any static file server:

### Using Python:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000/](http://localhost:8000/)

### Using Node / NPX:
```bash
npx serve
```
