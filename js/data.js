/**
 * SWARNAVEDA — Mock Data Store & State Management
 * Jewellery B2C Marketplace Frontend
 */

// ── Gold Rates ──────────────────────────────────────
window.goldRates = {
  '24K': { rate: 7185, unit: '10g', updated: 'Today, 9:00 AM' },
  '22K': { rate: 6587, unit: '10g', updated: 'Today, 9:00 AM' },
  '18K': { rate: 5389, unit: '10g', updated: 'Today, 9:00 AM' },
  'Silver': { rate: 87, unit: '10g', updated: 'Today, 9:00 AM' }
};

// ── Products Database ─────────────────────────────────
window.products = [
  {
    id: 'GR-001',
    vendorId: 'V001',
    vendorName: 'Raj Jewellers',
    vendorVerified: true,
    name: '22K Floral Garden Gold Ring',
    sku: 'GR-22K-001',
    category: 'Rings',
    subcategory: 'Gold Rings',
    gender: 'Women',
    occasion: 'Daily Wear',
    image: '../assets/images/ring.jpg',
    images: ['../assets/images/ring.jpg'],
    price: 48950,
    compareAtPrice: 52000,
    goldPurity: '22K',
    grossWeight: 4.82,
    netGoldWeight: 4.60,
    goldColor: 'Yellow Gold',
    stoneType: 'None',
    huid: 'AA2B3C4D',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 8,
    sizes: [8, 10, 12, 14, 16, 18, 20],
    rating: 4.8,
    reviewCount: 128,
    badge: 'bestseller',
    status: 'active',
    tags: ['rings', 'gold', 'daily-wear', 'women'],
    description: 'A beautifully crafted 22K gold floral ring featuring intricate hand-engraved petals and fine granulation work. Perfect for daily wear or festive occasions.',
    shippingInfo: { weight: 5.5, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-09-15'
  },
  {
    id: 'GN-001',
    vendorId: 'V002',
    vendorName: 'Srinivas Gold House',
    vendorVerified: true,
    name: '22K Temple Lakshmi Necklace',
    sku: 'GN-22K-001',
    category: 'Necklaces',
    subcategory: 'Temple Jewellery',
    gender: 'Women',
    occasion: 'Festive',
    image: '../assets/images/necklace.jpg',
    images: ['../assets/images/necklace.jpg'],
    price: 185000,
    compareAtPrice: 195000,
    goldPurity: '22K',
    grossWeight: 28.5,
    netGoldWeight: 27.2,
    goldColor: 'Yellow Gold',
    stoneType: 'Ruby',
    stoneWeight: 2.5,
    huid: 'BB3C4D5E',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 3,
    sizes: [],
    rating: 4.9,
    reviewCount: 64,
    badge: 'new',
    status: 'active',
    tags: ['necklaces', 'gold', 'temple', 'festive'],
    description: 'Exquisitely crafted 22K gold temple necklace featuring the divine Goddess Lakshmi centrepiece with ruby and pearl drops. A masterpiece of traditional South Indian jewellery art.',
    shippingInfo: { weight: 30, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-09-20'
  },
  {
    id: 'GE-001',
    vendorId: 'V001',
    vendorName: 'Raj Jewellers',
    vendorVerified: true,
    name: '22K Emerald Jhumka Earrings',
    sku: 'GE-22K-001',
    category: 'Earrings',
    subcategory: 'Jhumkas',
    gender: 'Women',
    occasion: 'Festive',
    image: '../assets/images/earrings.jpg',
    images: ['../assets/images/earrings.jpg'],
    price: 62500,
    compareAtPrice: null,
    goldPurity: '22K',
    grossWeight: 9.4,
    netGoldWeight: 8.9,
    goldColor: 'Yellow Gold',
    stoneType: 'Emerald',
    stoneWeight: 1.2,
    huid: 'CC4D5E6F',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 5,
    sizes: [],
    rating: 4.7,
    reviewCount: 93,
    badge: null,
    status: 'active',
    tags: ['earrings', 'gold', 'jhumka', 'festive'],
    description: 'Traditional 22K gold jhumka earrings adorned with natural emerald drops and pearl dangles. The ornate dome design with granulation work showcases the finest artisanal craftsmanship.',
    shippingInfo: { weight: 10, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-09-25'
  },
  {
    id: 'GB-001',
    vendorId: 'V003',
    vendorName: 'Padmavathi Jewels',
    vendorVerified: true,
    name: '22K Filigree Kada Bangle Set',
    sku: 'GB-22K-001',
    category: 'Bangles',
    subcategory: 'Kadas',
    gender: 'Women',
    occasion: 'Wedding',
    image: '../assets/images/bangle.jpg',
    images: ['../assets/images/bangle.jpg'],
    price: 128500,
    compareAtPrice: 138000,
    goldPurity: '22K',
    grossWeight: 19.6,
    netGoldWeight: 18.8,
    goldColor: 'Yellow Gold',
    stoneType: 'None',
    huid: 'DD5E6F7G',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 4,
    sizes: ['2/0', '2/2', '2/4', '2/6', '2/8'],
    rating: 4.9,
    reviewCount: 147,
    badge: 'bestseller',
    status: 'active',
    tags: ['bangles', 'gold', 'kada', 'wedding'],
    description: 'A stunning pair of 22K gold filigree kadas featuring intricate floral motifs handcrafted by master artisans. The delicate wire-work creates an exquisite lattice pattern that catches the light beautifully.',
    shippingInfo: { weight: 22, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-09-10'
  },
  {
    id: 'GR-002',
    vendorId: 'V002',
    vendorName: 'Srinivas Gold House',
    vendorVerified: true,
    name: '22K Peacock Motif Statement Ring',
    sku: 'GR-22K-002',
    category: 'Rings',
    subcategory: 'Statement Rings',
    gender: 'Women',
    occasion: 'Festive',
    image: '../assets/images/ring.jpg',
    images: ['../assets/images/ring.jpg'],
    price: 38750,
    compareAtPrice: null,
    goldPurity: '22K',
    grossWeight: 3.92,
    netGoldWeight: 3.70,
    goldColor: 'Yellow Gold',
    stoneType: 'Emerald',
    stoneWeight: 0.35,
    huid: 'EE6F7G8H',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 0,
    sizes: [10, 12, 14, 16],
    rating: 4.6,
    reviewCount: 55,
    badge: 'out',
    status: 'active',
    tags: ['rings', 'gold', 'peacock', 'festive'],
    description: 'An elegant 22K gold statement ring featuring a detailed peacock motif with emerald inlay. Each feather detail is carefully hand-engraved.',
    shippingInfo: { weight: 5, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-10-01'
  },
  {
    id: 'GN-002',
    vendorId: 'V003',
    vendorName: 'Padmavathi Jewels',
    vendorVerified: true,
    name: '18K Diamond Solitaire Pendant',
    sku: 'DP-18K-001',
    category: 'Pendants',
    subcategory: 'Diamond Pendants',
    gender: 'Women',
    occasion: 'Daily Wear',
    image: '../assets/images/necklace.jpg',
    images: ['../assets/images/necklace.jpg'],
    price: 42800,
    compareAtPrice: 48000,
    goldPurity: '18K',
    grossWeight: 2.8,
    netGoldWeight: 2.4,
    goldColor: 'White Gold',
    stoneType: 'Diamond',
    stoneWeight: 0.25,
    diamondClarity: 'VS1',
    diamondColor: 'F',
    certification: 'GIA Certified',
    huid: 'FF7G8H9I',
    hallmark: 'BIS Certified',
    stock: 12,
    sizes: [],
    rating: 4.9,
    reviewCount: 211,
    badge: 'sale',
    status: 'active',
    tags: ['pendants', 'diamond', 'daily-wear'],
    description: 'A timeless 18K white gold diamond solitaire pendant featuring a perfectly cut round brilliant diamond. GIA certified for authenticity and quality.',
    shippingInfo: { weight: 4, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-10-05'
  },
  {
    id: 'GE-002',
    vendorId: 'V001',
    vendorName: 'Raj Jewellers',
    vendorVerified: true,
    name: '22K Classic Gold Stud Earrings',
    sku: 'GE-22K-002',
    category: 'Earrings',
    subcategory: 'Studs',
    gender: 'Women',
    occasion: 'Daily Wear',
    image: '../assets/images/earrings.jpg',
    images: ['../assets/images/earrings.jpg'],
    price: 18500,
    compareAtPrice: null,
    goldPurity: '22K',
    grossWeight: 2.8,
    netGoldWeight: 2.65,
    goldColor: 'Yellow Gold',
    stoneType: 'None',
    huid: 'GG8H9I0J',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 24,
    sizes: [],
    rating: 4.5,
    reviewCount: 320,
    badge: null,
    status: 'active',
    tags: ['earrings', 'gold', 'studs', 'daily-wear'],
    description: 'Elegant 22K gold classic dome studs — the perfect everyday earring for any occasion.',
    shippingInfo: { weight: 4, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-08-20'
  },
  {
    id: 'GB-002',
    vendorId: 'V002',
    vendorName: 'Srinivas Gold House',
    vendorVerified: true,
    name: '22K Antique Gold Bangle Pair',
    sku: 'GB-22K-002',
    category: 'Bangles',
    subcategory: 'Antique Bangles',
    gender: 'Women',
    occasion: 'Festive',
    image: '../assets/images/bangle.jpg',
    images: ['../assets/images/bangle.jpg'],
    price: 85200,
    compareAtPrice: 90000,
    goldPurity: '22K',
    grossWeight: 13.2,
    netGoldWeight: 12.6,
    goldColor: 'Yellow Gold',
    stoneType: 'None',
    huid: 'HH9I0J1K',
    hallmark: 'BIS Certified',
    certification: 'BIS Hallmarked',
    stock: 7,
    sizes: ['2/2', '2/4', '2/6'],
    rating: 4.7,
    reviewCount: 88,
    badge: null,
    status: 'active',
    tags: ['bangles', 'gold', 'antique', 'festive'],
    description: 'A beautiful pair of 22K antique finished gold bangles with traditional motifs.',
    shippingInfo: { weight: 15, deliveryDays: '5-7 business days', freeShipping: true },
    returnEligible: true,
    exchangeEligible: true,
    createdAt: '2026-09-28'
  }
];

// ── Vendors Database ──────────────────────────────────
window.vendors = [
  {
    id: 'V001',
    businessName: 'Raj Jewellers',
    ownerName: 'Rajesh Kumar',
    logo: null,
    coverImage: null,
    description: 'Raj Jewellers has been crafting exquisite gold jewellery for over 35 years. We specialize in traditional South Indian jewellery with intricate craftsmanship and BIS hallmarked purity.',
    phone: '+91 98765 43210',
    email: 'info@rajjewellers.com',
    address: '45, Commercial Street',
    city: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '560001',
    gstin: '29AABCR1234F1Z5',
    bisDetails: 'BIS/HM/2023/KA/001',
    rating: 4.8,
    reviewCount: 541,
    productCount: 128,
    verified: true,
    status: 'active',
    joinedAt: '2025-03-15',
    businessHours: 'Mon–Sat: 10:00 AM – 8:00 PM, Sun: 11:00 AM – 6:00 PM',
    services: ['Gold Jewellery', 'Custom Orders', 'Exchange', 'Repair']
  },
  {
    id: 'V002',
    businessName: 'Srinivas Gold House',
    ownerName: 'Srinivas Rao',
    logo: null,
    coverImage: null,
    description: 'Premium gold and diamond jewellery retailer with over 25 years of excellence. Specializing in bridal jewellery and custom designs.',
    phone: '+91 88765 43211',
    email: 'info@srinivasgold.com',
    address: '12, T. Nagar Main Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pinCode: '600017',
    gstin: '33AABCS5678G1Z2',
    bisDetails: 'BIS/HM/2022/TN/002',
    rating: 4.9,
    reviewCount: 328,
    productCount: 89,
    verified: true,
    status: 'active',
    joinedAt: '2025-01-20',
    businessHours: 'Mon–Sun: 9:30 AM – 8:30 PM',
    services: ['Gold Jewellery', 'Diamond Jewellery', 'Bridal Consultation', 'Custom Orders']
  },
  {
    id: 'V003',
    businessName: 'Padmavathi Jewels',
    ownerName: 'Meena Padmanabhan',
    logo: null,
    coverImage: null,
    description: 'Creators of contemporary and traditional jewellery. Our collection blends modern aesthetics with timeless Indian craftsmanship.',
    phone: '+91 77654 32109',
    email: 'info@padmavathijewels.com',
    address: '8A, MG Road',
    city: 'Hyderabad',
    state: 'Telangana',
    pinCode: '500001',
    gstin: '36AABCP9012H1Z8',
    bisDetails: 'BIS/HM/2023/TS/003',
    rating: 4.7,
    reviewCount: 235,
    productCount: 62,
    verified: true,
    status: 'active',
    joinedAt: '2025-06-10',
    businessHours: 'Tue–Sun: 10:00 AM – 7:30 PM',
    services: ['Gold Jewellery', 'Diamond Pendants', 'Custom Orders', 'Gift Wrapping']
  }
];

// ── Orders Database ───────────────────────────────────
window.orders = [
  {
    id: 'GJ-102938',
    customerId: 'C001',
    customerName: 'Priya Sharma',
    vendorId: 'V001',
    products: [{ ...window.products[0], qty: 1, size: 12 }],
    subtotal: 48950,
    makingCharges: 0,
    stoneCharges: 0,
    discount: 3050,
    gst: 1468,
    shipping: 0,
    total: 47368,
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    orderStatus: 'Delivered',
    shippingAddress: {
      name: 'Priya Sharma',
      phone: '+91 98765 12345',
      address: '42, Lake View Apartments, Whitefield',
      city: 'Bengaluru',
      state: 'Karnataka',
      pinCode: '560066'
    },
    timeline: [
      { status: 'Order Placed', date: '10 Sep 2026, 2:15 PM', done: true },
      { status: 'Payment Confirmed', date: '10 Sep 2026, 2:18 PM', done: true },
      { status: 'Processing', date: '11 Sep 2026, 9:00 AM', done: true },
      { status: 'Quality Check', date: '12 Sep 2026, 11:00 AM', done: true },
      { status: 'Packed', date: '12 Sep 2026, 3:00 PM', done: true },
      { status: 'Shipped', date: '13 Sep 2026, 10:00 AM', done: true, tracking: 'DHLBD2938471' },
      { status: 'Out for Delivery', date: '17 Sep 2026, 8:30 AM', done: true },
      { status: 'Delivered', date: '17 Sep 2026, 1:45 PM', done: true }
    ],
    createdAt: '10 Sep 2026',
    estimatedDelivery: '17 Sep 2026'
  },
  {
    id: 'GJ-102875',
    customerId: 'C001',
    customerName: 'Priya Sharma',
    vendorId: 'V002',
    products: [{ ...window.products[2], qty: 1 }],
    subtotal: 62500,
    makingCharges: 0,
    stoneCharges: 0,
    discount: 0,
    gst: 1875,
    shipping: 0,
    total: 64375,
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    orderStatus: 'Shipped',
    shippingAddress: {
      name: 'Priya Sharma',
      phone: '+91 98765 12345',
      address: '42, Lake View Apartments, Whitefield',
      city: 'Bengaluru',
      state: 'Karnataka',
      pinCode: '560066'
    },
    timeline: [
      { status: 'Order Placed', date: '14 Oct 2026, 11:30 AM', done: true },
      { status: 'Payment Confirmed', date: '14 Oct 2026, 11:33 AM', done: true },
      { status: 'Processing', date: '15 Oct 2026, 9:00 AM', done: true },
      { status: 'Quality Check', date: '15 Oct 2026, 2:00 PM', done: true },
      { status: 'Packed', date: '16 Oct 2026, 10:00 AM', done: true },
      { status: 'Shipped', date: '16 Oct 2026, 4:00 PM', done: true, tracking: 'BLUEDART29384' },
      { status: 'Out for Delivery', date: null, done: false },
      { status: 'Delivered', date: null, done: false }
    ],
    createdAt: '14 Oct 2026',
    estimatedDelivery: '22 Oct 2026'
  }
];

// ── Stores Database ───────────────────────────────────
window.stores = [
  {
    id: 'S001',
    vendorId: 'V001',
    name: 'Raj Jewellers – Commercial Street',
    address: '45, Commercial Street, Near Petite Corner',
    city: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '560001',
    phone: '+91 80-2234-5678',
    email: 'cs.store@rajjewellers.com',
    hours: 'Mon–Sat: 10:00 AM – 8:00 PM | Sun: 11:00 AM – 6:00 PM',
    services: ['Jewellery Consultation', 'Gold Exchange', 'Custom Orders', 'Repair'],
    lat: 12.9816,
    lng: 77.5921
  },
  {
    id: 'S002',
    vendorId: 'V002',
    name: 'Srinivas Gold House – T. Nagar',
    address: '12, T. Nagar Main Road, Near Pondy Bazaar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pinCode: '600017',
    phone: '+91 44-4567-8901',
    email: 'tnagar@srinivasgold.com',
    hours: 'Mon–Sun: 9:30 AM – 8:30 PM',
    services: ['Bridal Consultation', 'Diamond Jewellery', 'Custom Design', 'Exchange'],
    lat: 13.0418,
    lng: 80.2341
  },
  {
    id: 'S003',
    vendorId: 'V003',
    name: 'Padmavathi Jewels – MG Road',
    address: '8A, MG Road, Abids',
    city: 'Hyderabad',
    state: 'Telangana',
    pinCode: '500001',
    phone: '+91 40-3456-7890',
    email: 'mgrd@padmavathijewels.com',
    hours: 'Tue–Sun: 10:00 AM – 7:30 PM',
    services: ['Gold & Diamond Jewellery', 'Custom Orders', 'Gift Wrapping', 'Exchange'],
    lat: 17.3929,
    lng: 78.4700
  }
];

// ── Cart State ────────────────────────────────────────
window.cart = JSON.parse(localStorage.getItem('swCart') || '[]');
window.wishlist = JSON.parse(localStorage.getItem('swWishlist') || '[]');
window.currentUser = JSON.parse(localStorage.getItem('swUser') || 'null');
window.isVendor = window.currentUser?.type === 'vendor';

// ── Cart Functions ─────────────────────────────────────
window.addToCart = function(productId, options = {}) {
  const product = window.products.find(p => p.id === productId);
  if (!product) return;

  const existing = window.cart.find(item =>
    item.productId === productId &&
    item.size === (options.size || null)
  );

  if (existing) {
    existing.qty = (existing.qty || 1) + (options.qty || 1);
  } else {
    window.cart.push({
      productId,
      vendorId: product.vendorId,
      name: product.name,
      image: product.image,
      price: product.price,
      sku: product.sku,
      purity: product.goldPurity,
      weight: product.grossWeight,
      qty: options.qty || 1,
      size: options.size || null
    });
  }

  localStorage.setItem('swCart', JSON.stringify(window.cart));
  updateCartBadge();
  showToast(`"${product.name}" added to cart`, 'success');
};

window.removeFromCart = function(productId, size = null) {
  window.cart = window.cart.filter(item =>
    !(item.productId === productId && item.size === size)
  );
  localStorage.setItem('swCart', JSON.stringify(window.cart));
  updateCartBadge();
};

window.getCartTotal = function() {
  return window.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
};

// ── Wishlist Functions ────────────────────────────────
window.toggleWishlist = function(productId) {
  const idx = window.wishlist.indexOf(productId);
  if (idx > -1) {
    window.wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    window.wishlist.push(productId);
    showToast('Added to wishlist ♥', 'success');
  }
  localStorage.setItem('swWishlist', JSON.stringify(window.wishlist));
  updateWishlistBadge();
  return idx === -1;
};

window.isWishlisted = function(productId) {
  return window.wishlist.includes(productId);
};

// ── Badge Updaters ─────────────────────────────────────
window.updateCartBadge = function() {
  const total = window.cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
};

window.updateWishlistBadge = function() {
  const count = window.wishlist.length;
  document.querySelectorAll('.wishlist-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
};

// ── Toast Notification ────────────────────────────────
window.showToast = function(message, type = 'success', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

// ── Price Formatter ───────────────────────────────────
window.formatPrice = function(amount) {
  return '₹' + amount.toLocaleString('en-IN');
};

// ── Rating Stars Generator ─────────────────────────────
window.generateStars = function(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '<span class="star filled">★</span>';
    } else if (rating >= i - 0.5) {
      stars += '<span class="star half">★</span>';
    } else {
      stars += '<span class="star">★</span>';
    }
  }
  return stars;
};

// ── Product Card HTML Generator ───────────────────────
window.renderProductCard = function(product, opts = {}) {
  const isInsidePages = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
  const targetProductUrl = isInsidePages ? `product.html?id=${product.id}` : `pages/product.html?id=${product.id}`;
  let cleanImg = product.image || '';
  if (!isInsidePages && cleanImg.startsWith('../')) {
    cleanImg = cleanImg.slice(3);
  } else if (isInsidePages && !cleanImg.startsWith('../') && !cleanImg.startsWith('http') && !cleanImg.startsWith('data:')) {
    cleanImg = '../' + cleanImg;
  }

  const isWished = window.isWishlisted(product.id);
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 3;
  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  const badges = {
    'bestseller': `<span class="badge badge-bestseller">Bestseller</span>`,
    'new': `<span class="badge badge-new">New</span>`,
    'sale': `<span class="badge badge-sale">Sale</span>`,
    'out': `<span class="badge badge-out">Out of Stock</span>`,
  };

  let badgeHtml = '';
  if (isOutOfStock) badgeHtml += `<span class="badge badge-out">Out of Stock</span>`;
  else if (isLowStock) badgeHtml += `<span class="badge badge-low">Low Stock</span>`;
  else if (product.badge && badges[product.badge]) badgeHtml += badges[product.badge];
  if (discount > 0) badgeHtml += `<span class="badge badge-sale">-${discount}%</span>`;

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrap">
        <a href="${targetProductUrl}">
          <img
            src="${cleanImg}"
            alt="${product.name}"
            class="product-img"
            loading="lazy"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23f4f0e8%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%2260%22 fill=%22%23e0d8c8%22/%3E%3C/svg%3E'">
        </a>

        <div class="product-badges">${badgeHtml}</div>

        <div class="product-actions">
          <button
            class="wishlist-btn product-action-btn ${isWished ? 'active' : ''}"
            onclick="handleWishlistClick('${product.id}', this)"
            title="Add to Wishlist"
            aria-label="Toggle wishlist">
            <svg viewBox="0 0 24 24" fill="${isWished ? '#e74c3c' : 'none'}" stroke="${isWished ? '#e74c3c' : 'currentColor'}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button
            class="product-action-btn"
            onclick="openQuickView('${product.id}')"
            title="Quick View">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>

        <div class="product-bottom-action">
          <button
            class="product-add-btn"
            onclick="handleAddToCart('${product.id}')"
            ${isOutOfStock ? 'disabled' : ''}>
            ${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
          <a class="product-add-btn" href="${targetProductUrl}">
            View Details
          </a>
        </div>
      </div>

      <div class="product-info">
        <div class="product-vendor">
          ${product.vendorName}
          ${product.vendorVerified ? '<span style="color:var(--success);font-size:0.6rem;">✓ Verified</span>' : ''}
        </div>
        <a href="${targetProductUrl}" class="product-name">${product.name}</a>
        <div class="product-meta">
          <span class="product-purity-badge">${product.goldPurity}</span>
          <span class="product-meta-item">⚖ ${product.grossWeight}g</span>
        </div>
        <div class="product-rating">
          <div class="stars">${window.generateStars(product.rating)}</div>
          <span>${product.rating}</span>
          <span>(${product.reviewCount})</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">${window.formatPrice(product.price)}</span>
          ${product.compareAtPrice ? `<span class="price-original">${window.formatPrice(product.compareAtPrice)}</span>` : ''}
          ${discount > 0 ? `<span class="price-savings">Save ${discount}%</span>` : ''}
        </div>
      </div>
    </div>
  `;
};

// ── Event Handlers ──────────────────────────────────
window.handleWishlistClick = function(productId, btn) {
  const added = window.toggleWishlist(productId);
  const svg = btn.querySelector('svg');
  if (added) {
    svg.setAttribute('fill', '#e74c3c');
    svg.setAttribute('stroke', '#e74c3c');
    btn.classList.add('active');
  } else {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    btn.classList.remove('active');
  }
};

window.handleAddToCart = function(productId) {
  const product = window.products.find(p => p.id === productId);
  if (!product || product.stock === 0) {
    showToast('This item is out of stock', 'error');
    return;
  }
  if (product.sizes && product.sizes.length > 0) {
    openQuickView(productId);
    return;
  }
  addToCart(productId);
};

// ── Quick View Modal ───────────────────────────────────
window.openQuickView = function(productId) {
  const product = window.products.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width:780px;">
        <div class="modal-header">
          <h3>Quick View</h3>
          <button class="modal-close" onclick="closeModal('quick-view-modal')">✕</button>
        </div>
        <div id="quick-view-body" class="modal-body"></div>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal('quick-view-modal');
    });
    document.body.appendChild(modal);
  }

  const selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : null;
  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  const isInsidePages = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
  const targetProductUrl = isInsidePages ? `product.html?id=${product.id}` : `pages/product.html?id=${product.id}`;
  let cleanImg = product.image || '';
  if (!isInsidePages && cleanImg.startsWith('../')) {
    cleanImg = cleanImg.slice(3);
  } else if (isInsidePages && !cleanImg.startsWith('../') && !cleanImg.startsWith('http') && !cleanImg.startsWith('data:')) {
    cleanImg = '../' + cleanImg;
  }

  document.getElementById('quick-view-body').innerHTML = `
    <div class="quick-view-content">
      <div class="qv-image">
        <img src="${cleanImg}" alt="${product.name}" style="width:100%;border-radius:var(--radius-md);aspect-ratio:1;object-fit:cover;"
             onerror="this.style.background='var(--surface-alt)'">
      </div>
      <div class="qv-details" style="display:flex;flex-direction:column;gap:var(--space-4);">
        <div>
          <div class="product-vendor" style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--space-2);">${product.vendorName}</div>
          <h3 style="font-size:var(--text-xl);margin-bottom:var(--space-2);">${product.name}</h3>
          <div class="product-rating" style="margin-bottom:var(--space-3);">
            <div class="stars">${window.generateStars(product.rating)}</div>
            <span>${product.rating}</span>
            <span>(${product.reviewCount} reviews)</span>
          </div>
          <div class="product-price-row">
            <span class="price-current" style="font-size:1.5rem;">${window.formatPrice(product.price)}</span>
            ${product.compareAtPrice ? `<span class="price-original">${window.formatPrice(product.compareAtPrice)}</span>` : ''}
            ${discount > 0 ? `<span class="price-savings">Save ${discount}%</span>` : ''}
          </div>
        </div>
        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;">
          <span class="product-purity-badge" style="padding:4px 10px;">${product.goldPurity}</span>
          <span style="font-size:var(--text-xs);color:var(--text-muted);padding:4px 10px;border:1px solid var(--border);border-radius:var(--radius-xs);">⚖ ${product.grossWeight}g</span>
        </div>
        ${product.sizes && product.sizes.length > 0 ? `
          <div>
            <div style="font-size:var(--text-xs);font-weight:600;color:var(--text-muted);margin-bottom:var(--space-2);">SELECT SIZE</div>
            <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
              ${product.sizes.map(s => `
                <button onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('size-active'));this.classList.add('size-active')"
                  style="min-width:36px;height:36px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:var(--text-xs);font-weight:600;cursor:pointer;transition:all 0.2s;padding:0 8px;"
                  onmouseover="this.style.borderColor='var(--gold-accent)'"
                  onmouseout="if(!this.classList.contains('size-active'))this.style.borderColor='var(--border)'">
                  ${s}
                </button>`).join('')}
            </div>
          </div>
        ` : ''}
        <div style="display:flex;flex-direction:column;gap:var(--space-3);">
          <button onclick="addToCart('${product.id}');closeModal('quick-view-modal')" class="btn btn-primary" style="width:100%">Add to Cart</button>
          <a href="${targetProductUrl}" class="btn btn-secondary" style="width:100%;text-align:center;">View Full Details</a>
        </div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);display:flex;gap:var(--space-4);">
          <span>✓ BIS Hallmarked</span>
          <span>✓ Secure Delivery</span>
          <span>✓ Easy Exchange</span>
        </div>
      </div>
    </div>
  `;

  openModal('quick-view-modal');
};

// ── Modal Helpers ──────────────────────────────────────
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');

  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// ── Drawer Helpers ─────────────────────────────────────
window.openDrawer = function(id) {
  const drawer = document.getElementById(id);
  if (!drawer) return;
  drawer.classList.add('active');
  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'overlay';
    overlay.onclick = () => closeAllDrawers();
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeDrawer = function(id) {
  const drawer = document.getElementById(id);
  if (drawer) drawer.classList.remove('active');
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

window.closeAllDrawers = function() {
  document.querySelectorAll('.drawer.active').forEach(d => d.classList.remove('active'));
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// ── DOM Ready ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Merge custom vendor products from localStorage
  try {
    const customProds = JSON.parse(localStorage.getItem('swarnaveda_custom_products') || '[]');
    if (customProds.length > 0) {
      customProds.forEach(cp => {
        if (!window.products.some(p => p.id === cp.id)) {
          window.products.unshift(cp);
        }
      });
    }
  } catch (e) {}

  updateCartBadge();
  updateWishlistBadge();

  // Sticky header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Accordion
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Filter section toggles
  document.querySelectorAll('.filter-section-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.filter-section');
      section.classList.toggle('open');
    });
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabGroup = btn.closest('[data-tabs]') || btn.closest('.tab-container');
      const targetId = btn.dataset.tab;
      if (tabGroup) {
        tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        tabGroup.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      } else {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      }
      btn.classList.add('active');
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add('active');
    });
  });

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Mobile nav items
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    if (link.nextElementSibling?.classList.contains('mobile-submenu')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const item = link.closest('.mobile-nav-item');
        item.classList.toggle('open');
      });
    }
  });

  // Search overlay
  const searchTriggers = document.querySelectorAll('[data-open-search]');
  const searchOverlay = document.getElementById('search-overlay');
  if (searchOverlay) {
    searchTriggers.forEach(t => {
      t.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchOverlay.querySelector('.search-overlay-input')?.focus(), 100);
      });
    });
    document.querySelector('#search-close-btn')?.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
    searchOverlay.addEventListener('keydown', e => {
      if (e.key === 'Escape') searchOverlay.classList.remove('active');
    });
  }
});
