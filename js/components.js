/**
 * SWARNAVEDA — Shared Components
 * Dynamically renders header & footer on all inner pages
 */

function renderSharedHeader() {
  const header = document.getElementById('shared-header');
  if (!header) return;

  header.innerHTML = `
    <!-- Announcement Bar -->
    <div class="announcement-bar">
      <div class="announcement-track">
        <span class="announcement-item">🚚 Free Shipping on Orders Above ₹25,000</span>
        <span class="announcement-dot">●</span>
        <span class="announcement-item">📞 Book a Personal Jewellery Consultation – <a href="appointment.html">Schedule Now</a></span>
        <span class="announcement-dot">●</span>
        <span class="announcement-item">✨ BIS Hallmarked Jewellery Guaranteed</span>
        <span class="announcement-dot">●</span>
        <span class="announcement-item">🚚 Free Shipping on Orders Above ₹25,000</span>
        <span class="announcement-dot">●</span>
        <span class="announcement-item">📞 Book a Personal Jewellery Consultation – <a href="appointment.html">Schedule Now</a></span>
        <span class="announcement-dot">●</span>
        <span class="announcement-item">✨ BIS Hallmarked Jewellery Guaranteed</span>
      </div>
    </div>

    <!-- Desktop Header -->
    <header class="site-header">
      <div class="header-main">
        <a href="../index.html" class="logo">
          <div class="logo-wordmark">Swarna<span>veda</span></div>
          <div class="logo-tagline">Fine Jewellery Marketplace</div>
        </a>
        <div class="header-search">
          <div class="header-search-inner" data-open-search>
            <svg class="header-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input type="text" class="header-search-input" placeholder="Search for rings, necklaces, bangles..." readonly aria-label="Search">
            <button class="header-search-btn">Search</button>
          </div>
        </div>
        <div class="header-actions">
          <a href="stores.html" class="header-action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a10 10 0 0 0-10 10c0 7 10 14 10 14s10-7 10-14A10 10 0 0 0 12 2z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Stores</span>
          </a>
          <a href="account.html" class="header-action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Account</span>
          </a>
          <a href="wishlist.html" class="header-action-btn" style="position:relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="action-badge wishlist-badge" style="display:none">0</span>
            <span>Wishlist</span>
          </a>
          <a href="cart.html" class="header-action-btn" style="position:relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span class="action-badge cart-badge" style="display:none">0</span>
            <span>Cart</span>
          </a>
        </div>
      </div>
      <nav class="site-nav">
        <div class="nav-inner">
          <div class="nav-item"><a href="new-arrivals.html" class="nav-link">New Arrivals</a></div>
          <div class="nav-item">
            <div class="nav-link">Gold <svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg></div>
            <div class="mega-menu">
              <div class="mega-menu-grid">
                <div>
                  <div class="mega-col-title">Gold Jewellery</div>
                  <div class="mega-links">
                    <a class="mega-link" href="category.html?cat=gold-rings">Gold Rings</a>
                    <a class="mega-link" href="category.html?cat=gold-earrings">Gold Earrings</a>
                    <a class="mega-link" href="category.html?cat=gold-necklaces">Gold Necklaces</a>
                    <a class="mega-link" href="category.html?cat=gold-bangles">Gold Bangles</a>
                    <a class="mega-link" href="category.html?cat=mangalsutra">Mangalsutra</a>
                    <a class="mega-link" href="category.html?cat=pendants">Pendants</a>
                  </div>
                </div>
                <div>
                  <div class="mega-col-title">By Occasion</div>
                  <div class="mega-links">
                    <a class="mega-link" href="category.html?occ=wedding">Wedding</a>
                    <a class="mega-link" href="category.html?occ=daily-wear">Daily Wear</a>
                    <a class="mega-link" href="category.html?occ=festive">Festive</a>
                    <a class="mega-link" href="category.html?occ=party-wear">Party Wear</a>
                  </div>
                </div>
                <div>
                  <div class="mega-col-title">By Price</div>
                  <div class="mega-links">
                    <a class="mega-link" href="category.html?price=under-25k">Under ₹25,000</a>
                    <a class="mega-link" href="category.html?price=25k-50k">₹25,000 – ₹50,000</a>
                    <a class="mega-link" href="category.html?price=50k-1l">₹50,000 – ₹1 Lakh</a>
                    <a class="mega-link" href="category.html?price=above-1l">Above ₹1 Lakh</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">Diamond <svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg></div>
            <div class="mega-menu">
              <div class="mega-menu-grid">
                <div>
                  <div class="mega-col-title">Diamond Jewellery</div>
                  <div class="mega-links">
                    <a class="mega-link" href="category.html?cat=diamond-rings">Diamond Rings</a>
                    <a class="mega-link" href="category.html?cat=diamond-earrings">Diamond Earrings</a>
                    <a class="mega-link" href="category.html?cat=diamond-necklaces">Diamond Necklaces</a>
                    <a class="mega-link" href="category.html?cat=diamond-pendants">Diamond Pendants</a>
                    <a class="mega-link" href="category.html?cat=solitaires">Solitaires</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="bridal.html" class="nav-link" style="display:flex;">Bridal</a>
          <a href="category.html?gender=men" class="nav-link" style="display:flex;">Men</a>
          <a href="category.html?gender=women" class="nav-link" style="display:flex;">Women</a>
          <a href="category.html?gender=kids" class="nav-link" style="display:flex;">Kids</a>
          <a href="category.html?occ=gifting" class="nav-link" style="display:flex;">Gifts</a>
          <a href="category.html?sale=true" class="nav-link" style="display:flex;color:var(--error);">Offers</a>
          <div style="margin-left:auto;">
            <a href="../vendor/dashboard.html" class="btn btn-sm btn-secondary" style="font-size:0.7rem;padding:6px 14px;margin:8px 0;">Vendor Portal</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile Header -->
    <header class="mobile-header">
      <button class="hamburger" id="hamburger-btn" aria-label="Open Menu">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </button>
      <a href="../index.html" class="logo">
        <div class="logo-wordmark" style="font-size:1.35rem;">Swarna<span>veda</span></div>
      </a>
      <div style="display:flex;gap:var(--space-1);">
        <button class="header-action-btn" data-open-search style="flex-direction:row;padding:var(--space-2);">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
        <a href="cart.html" class="header-action-btn" style="flex-direction:row;padding:var(--space-2);position:relative;">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="action-badge cart-badge" style="display:none;top:2px;right:2px;">0</span>
        </a>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu">
      <div class="mobile-menu-header">
        <div class="logo-wordmark" style="color:var(--white);font-size:1.35rem;">Swarna<span style="color:var(--gold-300);">veda</span></div>
        <button onclick="document.getElementById('mobile-menu').classList.remove('active')" style="color:rgba(255,255,255,0.6);font-size:1.25rem;cursor:pointer;">✕</button>
      </div>
      <div style="padding:var(--space-5);border-bottom:1px solid var(--border);">
        <div style="display:flex;gap:var(--space-3);">
          <a href="login.html" class="btn btn-secondary btn-sm" style="flex:1;text-align:center;">Login</a>
          <a href="register.html" class="btn btn-primary btn-sm" style="flex:1;text-align:center;">Register</a>
        </div>
      </div>
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item"><a href="new-arrivals.html" class="mobile-nav-link">New Arrivals</a></li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link">Gold Jewellery <span>›</span></div>
          <ul class="mobile-submenu">
            <li><a class="mobile-sub-link" href="category.html?cat=gold-rings">Gold Rings</a></li>
            <li><a class="mobile-sub-link" href="category.html?cat=gold-earrings">Gold Earrings</a></li>
            <li><a class="mobile-sub-link" href="category.html?cat=gold-necklaces">Gold Necklaces</a></li>
            <li><a class="mobile-sub-link" href="category.html?cat=gold-bangles">Gold Bangles</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item"><a href="bridal.html" class="mobile-nav-link">Bridal</a></li>
        <li class="mobile-nav-item"><a href="gold-exchange.html" class="mobile-nav-link">Gold Exchange</a></li>
        <li class="mobile-nav-item"><a href="appointment.html" class="mobile-nav-link">Book Appointment</a></li>
        <li class="mobile-nav-item"><a href="../vendor/dashboard.html" class="mobile-nav-link" style="color:var(--gold-accent);">Vendor Portal →</a></li>
      </ul>
    </div>

    <!-- Search Overlay -->
    <div id="search-overlay" class="search-overlay">
      <div class="search-overlay-box">
        <div class="search-overlay-input-wrap">
          <svg class="search-overlay-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" class="search-overlay-input" id="search-overlay-input" placeholder="Search jewellery…">
          <button class="search-overlay-close" id="search-close-btn">ESC</button>
        </div>
        <div class="search-suggestions">
          <div class="search-suggestion-label">Popular Searches</div>
          <a href="category.html?cat=gold-rings" class="search-suggestion-item">
            <div class="suggestion-icon">💍</div>
            <div><div class="suggestion-text">Gold Rings</div><div class="suggestion-sub">124 products</div></div>
          </a>
          <a href="category.html?cat=gold-necklaces" class="search-suggestion-item">
            <div class="suggestion-icon">📿</div>
            <div><div class="suggestion-text">Gold Necklaces</div><div class="suggestion-sub">89 products</div></div>
          </a>
          <a href="bridal.html" class="search-suggestion-item">
            <div class="suggestion-icon">👰</div>
            <div><div class="suggestion-text">Bridal Collection</div><div class="suggestion-sub">Complete sets</div></div>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderSharedFooter() {
  const footer = document.getElementById('shared-footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="logo-wordmark">Swarna<span>veda</span></div>
          <p class="footer-desc">India's premium multi-vendor gold and diamond jewellery marketplace.</p>
          <div class="footer-social">
            <a href="#" class="social-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" class="social-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Shop</h6>
          <div class="footer-links">
            <a href="category.html?cat=gold" class="footer-link">Gold Jewellery</a>
            <a href="category.html?cat=diamond" class="footer-link">Diamond Jewellery</a>
            <a href="bridal.html" class="footer-link">Bridal</a>
            <a href="new-arrivals.html" class="footer-link">New Arrivals</a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Customer Service</h6>
          <div class="footer-links">
            <a href="contact.html" class="footer-link">Contact Us</a>
            <a href="track-order.html" class="footer-link">Track Order</a>
            <a href="faq.html" class="footer-link">FAQs</a>
            <a href="appointment.html" class="footer-link">Book Appointment</a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Legal</h6>
          <div class="footer-links">
            <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
            <a href="terms.html" class="footer-link">Terms & Conditions</a>
            <a href="return-policy.html" class="footer-link">Return Policy</a>
          </div>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Swarnaveda Fine Jewellery Pvt. Ltd. All rights reserved.</p>
        <div class="footer-payments">
          <span class="payment-icon">UPI</span>
          <span class="payment-icon">VISA</span>
          <span class="payment-icon">MC</span>
          <span class="payment-icon">NetB</span>
          <span class="payment-icon">COD</span>
        </div>
      </div>
    </footer>
    <nav class="bottom-mobile-nav">
      <div class="bottom-nav-inner">
        <a href="../index.html" class="bottom-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></a>
        <a href="category.html" class="bottom-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg><span>Categories</span></a>
        <a href="#" class="bottom-nav-item" data-open-search><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span>Search</span></a>
        <a href="wishlist.html" class="bottom-nav-item" style="position:relative;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span class="action-badge wishlist-badge" style="display:none;top:2px;right:20px;">0</span><span>Wishlist</span></a>
        <a href="cart.html" class="bottom-nav-item" style="position:relative;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><span class="action-badge cart-badge" style="display:none;top:2px;right:20px;">0</span><span>Cart</span></a>
      </div>
    </nav>
    <div id="toast-container"></div>
  `;
}

// Init
document.addEventListener('DOMContentLoaded', function() {
  renderSharedHeader();
  renderSharedFooter();
});
