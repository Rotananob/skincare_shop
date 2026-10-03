'use client';
import { useState } from 'react';
import Link from 'next/link';
import { products, categories, skinConcerns } from '@/data/products';
import Image from 'next/image';

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ cartCount, onCartOpen }: { cartCount: number; onCartOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(12,10,9,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2420' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#f5ede6', textDecoration: 'none', letterSpacing: '-0.5px' }}>
          Sokha Skin
        </Link>
        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {[['Shop', '/shop'], ['Skin Concerns', '/shop?concern=all'], ['About', '/about']].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: '#a89080', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f5ede6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a89080')}>
              {label}
            </Link>
          ))}
        </div>
        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={onCartOpen} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: '#f5ede6', fontSize: 20, padding: 4 }}>
            🛒
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -4, background: '#c9a882', color: '#0c0a09', borderRadius: '50%', width: 18, height: 18, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f5ede6', fontSize: 20, display: 'none' }} className="mobile-menu-btn">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#1a1714', borderTop: '1px solid #2a2420', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[['ហាង / Shop', '/shop'], ['ប្រភេទស្បែក / Skin Concerns', '/shop'], ['អំពីយើង / About', '/about']].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: '#f5ede6', fontSize: 15, textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddToCart }: { product: typeof products[0]; onAddToCart: (p: typeof products[0]) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/shop/${product.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#1a1714', borderRadius: 16, border: '1px solid #2a2420', overflow: 'hidden',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.25s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column',
        }}>
        {/* Image */}
        <div style={{ position: 'relative', paddingTop: '100%', background: '#211d19', overflow: 'hidden' }}>
          <Image src={product.image} alt={product.name.en} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
          {/* Badges */}
          <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {product.bestSeller && <span style={{ background: '#c9a882', color: '#0c0a09', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: 0.5 }}>BEST SELLER</span>}
            {product.newArrival && <span style={{ background: '#2d4a2d', color: '#7bc47b', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>NEW</span>}
            {product.discountPrice && <span style={{ background: '#4a2d2d', color: '#f08080', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>SALE</span>}
          </div>
          {/* Add to cart hover */}
          {hovered && (
            <button
              onClick={e => { e.preventDefault(); onAddToCart(product); }}
              style={{ position: 'absolute', bottom: 10, left: 10, right: 10, background: '#c9a882', color: '#0c0a09', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
              + Add to Cart
            </button>
          )}
        </div>
        {/* Info */}
        <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ color: '#a89080', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>{product.brand}</p>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, lineHeight: 1.5 }}>{product.name.km}</p>
          <p style={{ color: '#a89080', fontSize: 12, lineHeight: 1.4 }}>{product.name.en}</p>
          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: '#c9a882', fontSize: 12 }}>{'★'.repeat(Math.round(product.rating))}</span>
            <span style={{ color: '#6b5a50', fontSize: 11 }}>({product.reviewCount})</span>
          </div>
          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            {product.discountPrice ? (
              <>
                <span style={{ color: '#f5ede6', fontSize: 16, fontWeight: 700 }}>${product.discountPrice}</span>
                <span style={{ color: '#6b5a50', fontSize: 13, textDecoration: 'line-through' }}>${product.price}</span>
              </>
            ) : (
              <span style={{ color: '#f5ede6', fontSize: 16, fontWeight: 700 }}>${product.price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── CART DRAWER ──────────────────────────────────────────────────────────────
function CartDrawer({ cart, onClose, onRemove, onUpdateQty }: {
  cart: { product: typeof products[0]; qty: number }[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}) {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.discountPrice ?? item.product.price) * item.qty, 0);
  const freeDeliveryAt = 30;
  const progress = Math.min((subtotal / freeDeliveryAt) * 100, 100);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', maxWidth: 400, background: '#1a1714', borderLeft: '1px solid #2a2420', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #2a2420', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, color: '#f5ede6' }}>🛒 Cart ({cart.length})</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#a89080', fontSize: 20, cursor: 'pointer' }}>✕</button>
        </div>
        {/* Free delivery progress */}
        {subtotal < freeDeliveryAt && (
          <div style={{ padding: '12px 24px', background: '#211d19', borderBottom: '1px solid #2a2420' }}>
            <p style={{ color: '#a89080', fontSize: 12, marginBottom: 8 }}>Add <strong style={{ color: '#c9a882' }}>${(freeDeliveryAt - subtotal).toFixed(2)}</strong> more for free delivery!</p>
            <div style={{ background: '#2a2420', borderRadius: 4, height: 4 }}>
              <div style={{ background: '#c9a882', height: 4, borderRadius: 4, width: `${progress}%`, transition: 'width 0.3s' }} />
            </div>
          </div>
        )}
        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#a89080' }}>
              <p style={{ fontSize: 40 }}>🌿</p>
              <p style={{ fontSize: 16, marginTop: 12 }}>Your cart is empty</p>
              <p style={{ fontSize: 13, marginTop: 4 }}>Add some skincare to get started</p>
            </div>
          ) : cart.map(({ product, qty }) => (
            <div key={product.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ position: 'relative', width: 64, height: 64, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                <Image src={product.image} alt={product.name.en} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f5ede6', fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{product.name.en}</p>
                <p style={{ color: '#a89080', fontSize: 11 }}>{product.brand}</p>
                <p style={{ color: '#c9a882', fontSize: 14, fontWeight: 700, marginTop: 4 }}>${(product.discountPrice ?? product.price) * qty}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', border: '1px solid #2a2420', borderRadius: 6, overflow: 'hidden' }}>
                  <button onClick={() => qty > 1 ? onUpdateQty(product.id, qty - 1) : onRemove(product.id)} style={{ background: 'none', border: 'none', color: '#a89080', width: 28, height: 28, cursor: 'pointer', fontSize: 14 }}>−</button>
                  <span style={{ color: '#f5ede6', width: 24, textAlign: 'center', fontSize: 13, lineHeight: '28px' }}>{qty}</span>
                  <button onClick={() => onUpdateQty(product.id, qty + 1)} style={{ background: 'none', border: 'none', color: '#a89080', width: 28, height: 28, cursor: 'pointer', fontSize: 14 }}>+</button>
                </div>
                <button onClick={() => onRemove(product.id)} style={{ background: 'none', border: 'none', color: '#6b5a50', fontSize: 11, cursor: 'pointer' }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2420' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: '#a89080', fontSize: 14 }}>Subtotal</span>
              <span style={{ color: '#f5ede6', fontSize: 14, fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ color: '#a89080', fontSize: 14 }}>Delivery</span>
              <span style={{ color: subtotal >= 30 ? '#7bc47b' : '#a89080', fontSize: 14 }}>
                {subtotal >= 30 ? 'FREE 🎉' : 'Calculated at checkout'}
              </span>
            </div>
            <button style={{ width: '100%', background: '#c9a882', color: '#0c0a09', border: 'none', borderRadius: 10, padding: '14px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              Checkout — ${subtotal.toFixed(2)}
            </button>
            <p style={{ textAlign: 'center', color: '#6b5a50', fontSize: 11, marginTop: 10 }}>Cash on delivery available 🇰🇭</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ km, en, sub }: { km: string; en: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#c9a882', fontSize: 13, marginBottom: 6 }}>{km}</p>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 4vw, 36px)', color: '#f5ede6', lineHeight: 1.2, fontWeight: 500 }}>{en}</h2>
      {sub && <p style={{ color: '#a89080', fontSize: 15, marginTop: 10, maxWidth: 560, lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#111009', borderTop: '1px solid #2a2420', marginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 20px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6', marginBottom: 12 }}>Sokha Skin</h3>
            <p style={{ color: '#a89080', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Authentic skincare for Cambodia's climate. Curated with care, delivered nationwide.
            </p>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 12, marginTop: 8 }}>ផលិតផលថែស្បែកពិតប្រាកដ</p>
          </div>
          <div>
            <h4 style={{ color: '#f5ede6', fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Shop</h4>
            {['All Products', 'Best Sellers', 'New Arrivals', 'Skin Concerns', 'Brands'].map(link => (
              <p key={link} style={{ marginBottom: 10 }}>
                <Link href="/shop" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>{link}</Link>
              </p>
            ))}
          </div>
          <div>
            <h4 style={{ color: '#f5ede6', fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Help</h4>
            {['About Us', 'Contact', 'Delivery Info', 'Returns', 'FAQ'].map(link => (
              <p key={link} style={{ marginBottom: 10 }}>
                <Link href="/" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>{link}</Link>
              </p>
            ))}
          </div>
          <div>
            <h4 style={{ color: '#f5ede6', fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Trust</h4>
            {['✓ 100% Authentic Products', '✓ Nationwide Delivery 🇰🇭', '✓ Free delivery over $30', '✓ Easy returns', '✓ Secure checkout'].map(item => (
              <p key={item} style={{ color: '#a89080', fontSize: 13, marginBottom: 8 }}>{item}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2a2420', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#6b5a50', fontSize: 13 }}>© 2024 Sokha Skin. All rights reserved.</p>
          <p style={{ color: '#6b5a50', fontSize: 12 }}>Made with ♥ for Cambodia 🇰🇭</p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN HOME PAGE ───────────────────────────────────────────────────────────
export default function HomePage() {
  const [cart, setCart] = useState<{ product: typeof products[0]; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.product.id !== id));
  const updateQty = (id: string, qty: number) => setCart(prev => prev.map(i => i.product.id === id ? { ...i, qty } : i));
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const bestSellers = products.filter(p => p.bestSeller);
  const newArrivals = products.filter(p => p.newArrival);
  const featured = products.filter(p => p.featured);

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onUpdateQty={updateQty} />}

      <main>
        {/* ── Announcement Bar ── */}
        <div style={{ background: '#1a1714', borderBottom: '1px solid #2a2420', textAlign: 'center', padding: '10px 20px' }}>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#c9a882', fontSize: 13 }}>
            ✦ ដឹកជញ្ជូនដោយឥតគិតថ្លៃ លើការបញ្ជាទិញលើស $30 ✦
            <span style={{ marginLeft: 16, fontFamily: "'Manrope', sans-serif", fontSize: 12, color: '#a89080' }}>Free delivery on orders over $30</span>
          </p>
        </div>

        {/* ── Hero Section ── */}
        <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          {/* Background image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png" alt="Hero" fill style={{ objectFit: 'cover', opacity: 0.25 }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(12,10,9,0.95) 40%, rgba(12,10,9,0.6) 100%)' }} />
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '80px 20px', width: '100%' }}>
            <p style={{ color: '#c9a882', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              ✦ Authentic skincare · Nationwide delivery
            </p>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px, 6vw, 72px)', color: '#f5ede6', lineHeight: 1.1, maxWidth: 700, marginBottom: 16, fontWeight: 400, fontStyle: 'italic' }}>
              Beautiful skin begins with the right ritual.
            </h1>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 15, maxWidth: 480, lineHeight: 1.7, marginBottom: 8 }}>
              ផលិតផលថែស្បែក ជ្រើសរើសដោយប្រុងប្រយ័ត្ន សម្រាប់ស្បែករស់នៅក្នុងអាកាសធាតុកម្ពុជា
            </p>
            <p style={{ color: '#a89080', fontSize: 15, maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
              A carefully curated edit of skincare, chosen for skin living in Cambodia's climate.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/shop" style={{ background: '#c9a882', color: '#0c0a09', padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
                Shop Products →
              </Link>
              <Link href="/shop" style={{ border: '1px solid #2a2420', color: '#f5ede6', padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>
                Shop by Skin Concern
              </Link>
            </div>
            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}>
              {['✓ 100% Authentic', '✓ Nationwide 🇰🇭', '✓ Free delivery $30+', '✓ Cash on delivery'].map(badge => (
                <span key={badge} style={{ color: '#6b5a50', fontSize: 13 }}>{badge}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shop by Category ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }}>
          <SectionHeader km="ជ្រើសរើសតាមប្រភេទ" en="Shop by Category" sub="Every step of a routine, from cleansing to sun protection." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
            {categories.map(cat => (
              <Link key={cat.id} href={`/shop?category=${cat.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420', overflow: 'hidden', transition: 'all 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a882'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2420'; }}>
                  <div style={{ position: 'relative', paddingTop: '80%', background: '#211d19' }}>
                    <Image src={cat.image} alt={cat.name.en} fill style={{ objectFit: 'cover', opacity: 0.8 }} />
                  </div>
                  <div style={{ padding: '12px 14px' }}>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13 }}>{cat.name.km}</p>
                    <p style={{ color: '#a89080', fontSize: 12, marginTop: 2 }}>{cat.name.en}</p>
                    <p style={{ color: '#6b5a50', fontSize: 11, marginTop: 4 }}>{cat.count} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Best Sellers ── */}
        <section style={{ padding: '0 0 80px', background: 'linear-gradient(180deg, #0c0a09 0%, #0f0d0b 100%)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <SectionHeader km="លក់ដាច់ជាងគេ" en="Best Sellers" sub="What our customers come back for, again and again." />
              <Link href="/shop?sort=best" style={{ color: '#c9a882', fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap', marginBottom: 8 }}>View all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
              {bestSellers.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
            </div>
          </div>
        </section>

        {/* ── Skin Concerns ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px 80px' }}>
          <SectionHeader km="ជ្រើសរើសតាមបញ្ហាស្បែក" en="Shop by Skin Concern" sub="Start from what your skin needs most." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
            {skinConcerns.map(concern => (
              <Link key={concern.id} href={`/shop?concern=${concern.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420', padding: '20px 16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a882'; (e.currentTarget as HTMLElement).style.background = '#211d19'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2420'; (e.currentTarget as HTMLElement).style.background = '#1a1714'; }}>
                  <p style={{ fontSize: 28, marginBottom: 10 }}>{concern.icon}</p>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, marginBottom: 4 }}>{concern.name.km}</p>
                  <p style={{ color: '#a89080', fontSize: 12 }}>{concern.name.en}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── New Arrivals ── */}
        <section style={{ background: '#111009', padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <SectionHeader km="ផលិតផលថ្មី" en="New Arrivals" />
              <Link href="/shop?sort=new" style={{ color: '#c9a882', fontSize: 14, textDecoration: 'none', marginBottom: 8 }}>View all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
              {newArrivals.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
            </div>
          </div>
        </section>

        {/* ── Brand Story ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 20px' }}>
          <div style={{ background: '#1a1714', borderRadius: 24, border: '1px solid #2a2420', padding: 'clamp(32px, 6vw, 64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#c9a882', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Our Story</p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 4vw, 40px)', color: '#f5ede6', lineHeight: 1.2, marginBottom: 20, fontStyle: 'italic' }}>
                Built for skin that lives in Cambodia.
              </h2>
              <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                ផលិតផលនីមួយៗ ត្រូវបានជ្រើសរើសសម្រាប់ស្បែករស់នៅក្នុងអាកាសធាតុក្ដៅ-សើម របស់កម្ពុជា។
              </p>
              <p style={{ color: '#a89080', fontSize: 14, lineHeight: 1.8 }}>
                Every product is selected for effectiveness in Cambodia's heat and humidity. Authentic formulas, honest ingredients, real results.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { stat: '10,000+', label: 'Happy customers', km: 'អតិថិជន' },
                { stat: '100%', label: 'Authentic products', km: 'ពិតប្រាកដ' },
                { stat: '48h', label: 'Nationwide delivery', km: 'ដឹកជញ្ជូន' },
                { stat: '15+', label: 'Curated products', km: 'ផលិតផល' },
              ].map(({ stat, label, km }) => (
                <div key={label} style={{ background: '#211d19', borderRadius: 14, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: 28, color: '#c9a882', fontWeight: 400 }}>{stat}</p>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 12, marginTop: 4 }}>{km}</p>
                  <p style={{ color: '#6b5a50', fontSize: 11 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
