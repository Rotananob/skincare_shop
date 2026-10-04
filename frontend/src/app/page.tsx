'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories, skinConcerns } from '@/data/products';

// ─── TYPES ──────────────────────────────────────────────────────────────────
type CartItem = { product: typeof products[0]; qty: number };
type Toast = { id: number; message: string; type: 'success' | 'error' | 'info' };

// ─── TOAST ───────────────────────────────────────────────────────────────────
function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: number) => void }) {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {toasts.map(t => (
        <div key={t.id} className="toast animate-fade-in-right"
          style={{ background: '#1a1714', border: `1px solid ${t.type === 'success' ? '#2d4a2d' : t.type === 'error' ? '#4a2d2d' : '#2a2420'}`, borderLeft: `3px solid ${t.type === 'success' ? '#7bc47b' : t.type === 'error' ? '#f08080' : '#c9a882'}` }}>
          <span style={{ fontSize: 18 }}>{t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : 'ℹ'}</span>
          <span style={{ color: '#f5ede6', fontSize: 13, flex: 1 }}>{t.message}</span>
          <button onClick={() => onRemove(t.id)} style={{ background: 'none', border: 'none', color: '#6b5a50', cursor: 'pointer', fontSize: 14 }}>✕</button>
        </div>
      ))}
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ cartCount, wishCount, onCartOpen, onSearchOpen }: { cartCount: number; wishCount: number; onCartOpen: () => void; onSearchOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s ease', background: scrolled ? 'rgba(12,10,9,0.97)' : 'rgba(12,10,9,0.8)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${scrolled ? '#2a2420' : 'transparent'}`, boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #c9a882, #b8936e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#0c0a09' }}>W</div>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#f5ede6', letterSpacing: '-0.5px' }}>WeYoung</span>
        </Link>
        {/* Desktop nav */}
        <div className="desktop-only" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['ហាង', 'Shop', '/shop'], ['ប្រភេទ', 'Concerns', '/shop'], ['អំពី', 'About', '/about']].map(([km, en, href]) => (
            <Link key={en} href={href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, group: '' }}
              onMouseEnter={e => { const el = e.currentTarget.querySelector('.nav-km') as HTMLElement; if(el) el.style.color = '#c9a882'; }}
              onMouseLeave={e => { const el = e.currentTarget.querySelector('.nav-km') as HTMLElement; if(el) el.style.color = '#6b5a50'; }}>
              <span className="nav-km" style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 10, color: '#6b5a50', transition: 'color 0.2s', lineHeight: 1 }}>{km}</span>
              <span style={{ color: '#a89080', fontSize: 14, fontWeight: 500, transition: 'color 0.2s', lineHeight: 1 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f5ede6')}
                onMouseLeave={e => (e.currentTarget.style.color = '#a89080')}>{en}</span>
            </Link>
          ))}
        </div>
        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button onClick={onSearchOpen} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a89080', fontSize: 18, width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1714'; (e.currentTarget as HTMLElement).style.color = '#f5ede6'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'none'; (e.currentTarget as HTMLElement).style.color = '#a89080'; }}>🔍</button>
          <Link href="/profile" style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#a89080', fontSize: 18, width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', position: 'relative' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1714'; (e.currentTarget as HTMLElement).style.color = '#f5ede6'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'none'; (e.currentTarget as HTMLElement).style.color = '#a89080'; }}>
            👤
          </Link>
          <button onClick={onCartOpen} style={{ position: 'relative', background: cartCount > 0 ? 'rgba(201,168,130,0.1)' : 'none', border: cartCount > 0 ? '1px solid rgba(201,168,130,0.2)' : 'none', cursor: 'pointer', color: cartCount > 0 ? '#c9a882' : '#a89080', fontSize: 18, width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            🛒
            {cartCount > 0 && (
              <span className="animate-scale-in" style={{ position: 'absolute', top: -4, right: -4, background: 'linear-gradient(135deg, #c9a882, #b8936e)', color: '#0c0a09', borderRadius: '50%', width: 18, height: 18, fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(201,168,130,0.4)' }}>
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>
          {/* Mobile menu */}
          <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#f5ede6', fontSize: 20, width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-slide-up" style={{ background: '#111009', borderTop: '1px solid #2a2420', padding: '16px 20px 24px' }}>
          {[['ហាង / Shop', '/shop'], ['ប្រភេទ / Concerns', '/shop'], ['Profile', '/profile'], ['About', '/about']].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', color: '#f5ede6', textDecoration: 'none', fontSize: 15, borderBottom: '1px solid #1a1714', fontFamily: label.includes('ហ') ? "'Kantumruy Pro', sans-serif" : 'inherit' }}>{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── SEARCH OVERLAY ───────────────────────────────────────────────────────────
function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const results = q.length > 1 ? products.filter(p => p.name.en.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()) || p.name.km.includes(q)).slice(0, 6) : [];
  return (
    <div className="animate-fade-in" style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(12,10,9,0.95)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 100 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 600, padding: '0 20px' }}>
        <div className="animate-slide-up" style={{ background: '#1a1714', borderRadius: 20, border: '1px solid #2a2420', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid #2a2420' }}>
            <span style={{ color: '#c9a882', fontSize: 18 }}>🔍</span>
            <input ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Search products, brands..." className="input-field" style={{ border: 'none', background: 'none', fontSize: 16, flex: 1, outline: 'none' }} />
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b5a50', cursor: 'pointer', fontSize: 14, padding: '4px 8px', borderRadius: 6, background: '#211d19' } as any}>Esc</button>
          </div>
          {results.length > 0 ? (
            <div style={{ maxHeight: 400, overflowY: 'auto' }}>
              {results.map((p, i) => (
                <Link key={p.id} href={`/shop/${p.slug}`} onClick={onClose} style={{ textDecoration: 'none', display: 'flex', gap: 14, alignItems: 'center', padding: '12px 20px', borderBottom: '1px solid #211d19', transition: 'background 0.15s', animationDelay: `${i * 0.05}s` }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#211d19'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  <div style={{ position: 'relative', width: 48, height: 48, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#f5ede6', fontSize: 14, fontWeight: 500 }}>{p.name.en}</p>
                    <p style={{ color: '#6b5a50', fontSize: 12 }}>{p.brand} · {p.category}</p>
                  </div>
                  <p style={{ color: '#c9a882', fontWeight: 700, fontSize: 15 }}>${p.discountPrice ?? p.price}</p>
                </Link>
              ))}
            </div>
          ) : q.length > 1 ? (
            <div style={{ padding: '32px', textAlign: 'center', color: '#a89080' }}>
              <p style={{ fontSize: 32 }}>🌿</p>
              <p style={{ marginTop: 12 }}>No products found for "{q}"</p>
            </div>
          ) : (
            <div style={{ padding: '20px 20px 24px' }}>
              <p style={{ color: '#6b5a50', fontSize: 12, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Popular</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Vitamin C', 'Niacinamide', 'SPF50+', 'Serum', 'Retinol', 'Centella'].map(tag => (
                  <button key={tag} onClick={() => setQ(tag)} style={{ background: '#211d19', border: '1px solid #2a2420', color: '#a89080', padding: '6px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a882'; (e.currentTarget as HTMLElement).style.color = '#c9a882'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2420'; (e.currentTarget as HTMLElement).style.color = '#a89080'; }}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CART DRAWER ──────────────────────────────────────────────────────────────
function CartDrawer({ cart, onClose, onRemove, onUpdateQty, onAddToast }: { cart: CartItem[]; onClose: () => void; onRemove: (id: string) => void; onUpdateQty: (id: string, qty: number) => void; onAddToast: (msg: string, type?: any) => void }) {
  const subtotal = cart.reduce((s, i) => s + (i.product.discountPrice ?? i.product.price) * i.qty, 0);
  const progress = Math.min((subtotal / 30) * 100, 100);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />
      <div className="animate-fade-in-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', maxWidth: 420, background: '#111009', borderLeft: '1px solid #2a2420', display: 'flex', flexDirection: 'column', boxShadow: '-16px 0 64px rgba(0,0,0,0.5)' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #2a2420', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(26,23,20,0.5)' }}>
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>My Cart</h2>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 11, marginTop: 2 }}>កន្ត្រកទំនិញ</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ background: '#c9a882', color: '#0c0a09', borderRadius: '50%', width: 24, height: 24, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cart.reduce((s, i) => s + i.qty, 0)}</span>
            <button onClick={onClose} style={{ background: '#211d19', border: '1px solid #2a2420', color: '#a89080', width: 36, height: 36, borderRadius: 10, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>
        {/* Free delivery progress */}
        <div style={{ padding: '12px 24px', background: '#0f0d0b', borderBottom: '1px solid #2a2420' }}>
          {subtotal >= 30 ? (
            <p style={{ color: '#7bc47b', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>🎉 You've unlocked FREE delivery!</p>
          ) : (
            <>
              <p style={{ color: '#a89080', fontSize: 12, marginBottom: 8 }}>Add <strong style={{ color: '#c9a882' }}>${(30 - subtotal).toFixed(2)}</strong> more for free delivery</p>
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
            </>
          )}
        </div>
        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }} className="no-scrollbar">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#a89080' }}>
              <div className="animate-float" style={{ fontSize: 48, marginBottom: 16 }}>🌿</div>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: '#f5ede6', marginBottom: 8 }}>Your cart is empty</p>
              <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 13, marginBottom: 24 }}>កន្ត្រករបស់អ្នកនៅទទេ</p>
              <button onClick={onClose} className="btn-primary" style={{ fontSize: 13, padding: '10px 24px' }} onClick={onClose}>Shop Now →</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {cart.map(({ product: p, qty }, idx) => (
                <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s`, display: 'flex', gap: 14, padding: '14px', background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420' }}>
                  <Link href={`/shop/${p.slug}`} onClick={onClose} style={{ position: 'relative', width: 70, height: 70, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                  </Link>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, lineHeight: 1.4, marginBottom: 2 }}>{p.name.km}</p>
                    <p style={{ color: '#6b5a50', fontSize: 11 }}>{p.brand}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                      <div style={{ display: 'flex', border: '1px solid #2a2420', borderRadius: 8, overflow: 'hidden' }}>
                        <button onClick={() => qty > 1 ? onUpdateQty(p.id, qty - 1) : onRemove(p.id)} style={{ background: '#211d19', border: 'none', color: '#a89080', width: 30, height: 30, cursor: 'pointer', fontSize: 16 }}>−</button>
                        <span style={{ color: '#f5ede6', width: 28, textAlign: 'center', fontSize: 13, lineHeight: '30px', background: '#1a1714' }}>{qty}</span>
                        <button onClick={() => onUpdateQty(p.id, qty + 1)} style={{ background: '#211d19', border: 'none', color: '#a89080', width: 30, height: 30, cursor: 'pointer', fontSize: 16 }}>+</button>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#c9a882', fontWeight: 700, fontSize: 15 }}>${((p.discountPrice ?? p.price) * qty).toFixed(2)}</span>
                        <button onClick={() => { onRemove(p.id); onAddToast('Removed from cart'); }} style={{ background: 'none', border: 'none', color: '#4a2d2d', cursor: 'pointer', fontSize: 14, width: 24, height: 24, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#4a2d2d'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'none'}>🗑</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2420', background: 'rgba(26,23,20,0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#a89080', fontSize: 14 }}>Subtotal</span>
              <span style={{ color: '#f5ede6', fontSize: 15, fontWeight: 700 }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ color: '#a89080', fontSize: 13 }}>Delivery</span>
              <span style={{ color: subtotal >= 30 ? '#7bc47b' : '#6b5a50', fontSize: 13 }}>{subtotal >= 30 ? '🎉 FREE' : 'From $2'}</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: 10 }}>
              Checkout · ${subtotal.toFixed(2)}
            </button>
            <p style={{ textAlign: 'center', color: '#6b5a50', fontSize: 11 }}>💳 Cash on delivery · 🔒 Secure checkout</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddToCart, wishlist, onToggleWish }: { product: typeof products[0]; onAddToCart: (p: typeof products[0]) => void; wishlist: Set<string>; onToggleWish: (id: string) => void }) {
  const [adding, setAdding] = useState(false);
  const wished = wishlist.has(product.id);
  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    onAddToCart(product);
    setTimeout(() => setAdding(false), 1500);
  };
  return (
    <Link href={`/shop/${product.slug}`} style={{ textDecoration: 'none' }}>
      <div className="card-hover" style={{ background: '#1a1714', borderRadius: 18, border: '1px solid #2a2420', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Image */}
        <div style={{ position: 'relative', paddingTop: '100%', background: '#211d19', overflow: 'hidden' }}>
          <Image src={product.image} alt={product.name.en} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'} />
          {/* Overlay gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,10,9,0.4) 0%, transparent 50%)' }} />
          {/* Badges */}
          <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {product.bestSeller && <span className="badge badge-gold" style={{ fontSize: 9 }}>⭐ BEST SELLER</span>}
            {product.newArrival && <span className="badge badge-new" style={{ fontSize: 9 }}>✨ NEW</span>}
            {product.discountPrice && <span className="badge badge-red" style={{ fontSize: 9 }}>-{Math.round((1 - product.discountPrice / product.price) * 100)}%</span>}
          </div>
          {/* Wishlist */}
          <button onClick={e => { e.preventDefault(); onToggleWish(product.id); }} style={{ position: 'absolute', top: 10, right: 10, background: wished ? 'rgba(240,128,128,0.2)' : 'rgba(26,23,20,0.8)', border: wished ? '1px solid rgba(240,128,128,0.4)' : '1px solid #2a2420', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', backdropFilter: 'blur(4px)' }}
            className={wished ? 'animate-heartbeat' : ''}>
            {wished ? '❤️' : '🤍'}
          </button>
          {/* Add to cart */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 10px 10px', transform: 'translateY(100%)', transition: 'transform 0.3s ease' }}
            onMouseEnter={e => { (e.currentTarget.parentElement as HTMLElement).style.transform = 'translateY(0)'; }}
            className="cart-btn-wrapper">
          </div>
        </div>
        {/* Info */}
        <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <p style={{ color: '#6b5a50', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{product.brand}</p>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, lineHeight: 1.5 }}>{product.name.km}</p>
          <p style={{ color: '#a89080', fontSize: 12, lineHeight: 1.4 }}>{product.name.en}</p>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="stars" style={{ fontSize: 11 }}>{'★'.repeat(Math.round(product.rating))+'☆'.repeat(5 - Math.round(product.rating))}</span>
            <span style={{ color: '#6b5a50', fontSize: 10 }}>({product.reviewCount})</span>
          </div>
          {/* Price + add button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 8 }}>
            <div>
              {product.discountPrice ? (
                <div>
                  <span style={{ color: '#f5ede6', fontSize: 16, fontWeight: 700 }}>${product.discountPrice}</span>
                  <span style={{ color: '#6b5a50', fontSize: 12, textDecoration: 'line-through', marginLeft: 6 }}>${product.price}</span>
                </div>
              ) : (
                <span style={{ color: '#f5ede6', fontSize: 16, fontWeight: 700 }}>${product.price}</span>
              )}
            </div>
            <button onClick={handleAdd} style={{ background: adding ? '#2d4a2d' : 'linear-gradient(135deg, #c9a882, #b8936e)', border: 'none', borderRadius: 10, width: 36, height: 36, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s', transform: adding ? 'scale(1.1)' : 'scale(1)', boxShadow: adding ? 'none' : '0 4px 12px rgba(201,168,130,0.3)' }}>
              {adding ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ km, en, sub, centered = false }: { km: string; en: string; sub?: string; centered?: boolean }) {
  return (
    <div className="animate-fade-in" style={{ marginBottom: 36, textAlign: centered ? 'center' : 'left' }}>
      <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#c9a882', fontSize: 12, marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>{km}</p>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px, 4vw, 40px)', color: '#f5ede6', lineHeight: 1.15, fontWeight: 400, fontStyle: 'italic' }}>{en}</h2>
      {sub && <p style={{ color: '#a89080', fontSize: 15, marginTop: 12, lineHeight: 1.7, maxWidth: centered ? 560 : 'none', margin: centered ? '12px auto 0' : '12px 0 0' }}>{sub}</p>}
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#080706', borderTop: '1px solid #1a1714', marginTop: 0 }}>
      <div className="container" style={{ padding: '56px 20px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #c9a882, #b8936e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#0c0a09' }}>W</div>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 24, color: '#f5ede6' }}>WeYoung</span>
            </div>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 13, lineHeight: 1.8, marginBottom: 4 }}>ផលិតផលថែស្បែកល្អបំផុត</p>
            <p style={{ color: '#6b5a50', fontSize: 13, lineHeight: 1.8 }}>Beautiful skin at every age. Delivered across Cambodia.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['📘', '📸', '🎵', '📺'].map((icon, i) => (
                <button key={i} style={{ background: '#1a1714', border: '1px solid #2a2420', borderRadius: 8, width: 36, height: 36, cursor: 'pointer', fontSize: 16, transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a882'; (e.currentTarget as HTMLElement).style.background = '#211d19'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2420'; (e.currentTarget as HTMLElement).style.background = '#1a1714'; }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
          {[
            { title: 'Shop', km: 'ហាង', links: ['All Products', 'Best Sellers', 'New Arrivals', 'Skin Concerns', 'Brands'] },
            { title: 'Help', km: 'ជំនួយ', links: ['About Us', 'Contact', 'Delivery Info', 'Returns', 'FAQ'] },
            { title: 'Account', km: 'គណនី', links: ['My Profile', 'Order History', 'Wishlist', 'Settings'] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ color: '#6b5a50', fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{col.km}</p>
              <h4 style={{ color: '#a89080', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{col.title}</h4>
              {col.links.map(link => (
                <p key={link} style={{ marginBottom: 10 }}>
                  <Link href={link === 'My Profile' || link === 'Order History' || link === 'Wishlist' || link === 'Settings' ? '/profile' : '/shop'} style={{ color: '#6b5a50', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#c9a882'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#6b5a50'}>{link}</Link>
                </p>
              ))}
            </div>
          ))}
        </div>
        {/* Newsletter */}
        <div style={{ background: '#1a1714', borderRadius: 16, padding: '24px 28px', border: '1px solid #2a2420', marginBottom: 40, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ color: '#c9a882', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>✉ Stay in the loop</p>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 12 }}>ដំណឹងថ្មីៗ ផលិតផល និងការផ្ដល់ជូន</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flex: 1, minWidth: 200 }}>
            <input className="input-field" placeholder="your@email.com" style={{ flex: 1 }} />
            <button className="btn-primary" style={{ padding: '12px 20px', borderRadius: 10, whiteSpace: 'nowrap', fontSize: 13 }}>Subscribe</button>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1a1714', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#3a2e28', fontSize: 12 }}>© 2024 WeYoung. All rights reserved.</p>
          <p style={{ color: '#3a2e28', fontSize: 12 }}>Made with ♥ for Cambodia 🇰🇭</p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN HOME PAGE ───────────────────────────────────────────────────────────
export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [visible, setVisible] = useState(false);
  const toastId = useRef(0);

  useEffect(() => { setVisible(true); }, []);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'k' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setSearchOpen(true); } if (e.key === 'Escape') { setSearchOpen(false); setCartOpen(false); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = ++toastId.current;
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  };
  const addToCart = (product: typeof products[0]) => {
    setCart(prev => { const ex = prev.find(i => i.product.id === product.id); if (ex) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i); return [...prev, { product, qty: 1 }]; });
    addToast(`${product.name.en} added to cart! 🛒`);
  };
  const removeFromCart = (id: string) => setCart(p => p.filter(i => i.product.id !== id));
  const updateQty = (id: string, qty: number) => setCart(p => p.map(i => i.product.id === id ? { ...i, qty } : i));
  const toggleWish = (id: string) => {
    setWishlist(prev => { const n = new Set(prev); if (n.has(id)) { n.delete(id); addToast('Removed from wishlist', 'info'); } else { n.add(id); addToast('Added to wishlist ❤️'); } return n; });
  };
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const bestSellers = products.filter(p => p.bestSeller);
  const newArrivals = products.filter(p => p.newArrival);

  return (
    <>
      <Navbar cartCount={cartCount} wishCount={wishlist.size} onCartOpen={() => setCartOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onUpdateQty={updateQty} onAddToast={addToast} />}
      <ToastContainer toasts={toasts} onRemove={id => setToasts(t => t.filter(x => x.id !== id))} />

      <main style={{ paddingTop: 64 }}>
        {/* ── Announcement Bar ── */}
        <div style={{ background: 'linear-gradient(90deg, #1a1714, #211d19, #1a1714)', borderBottom: '1px solid #2a2420', textAlign: 'center', padding: '10px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(201,168,130,0.03), transparent)', animation: 'gradientMove 4s ease infinite', backgroundSize: '200% 100%' }} />
          <p style={{ position: 'relative', fontFamily: "'Kantumruy Pro', sans-serif", color: '#c9a882', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span>✦ ដឹកជញ្ជូនដោយឥតគិតថ្លៃ លើការបញ្ជាទិញលើស $30</span>
            <span style={{ color: '#2a2420' }}>|</span>
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: '#a89080' }}>Free delivery on orders over $30 ✦</span>
          </p>
        </div>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          {/* Animated bg */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src="/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png" alt="Hero" fill style={{ objectFit: 'cover', opacity: 0.2 }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0c0a09 35%, rgba(12,10,9,0.85) 60%, rgba(12,10,9,0.5) 100%)' }} />
            {/* Floating orbs */}
            <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '15%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,130,0.06) 0%, transparent 70%)', animationDelay: '0s' }} />
            <div className="animate-float" style={{ position: 'absolute', bottom: '20%', right: '25%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,130,0.04) 0%, transparent 70%)', animationDelay: '1.5s' }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, padding: '100px 20px 80px' }}>
            <div style={{ maxWidth: 700, opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>
              <p className="animate-fade-in" style={{ color: '#c9a882', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: '#c9a882' }} />
                Authentic skincare · Nationwide delivery 🇰🇭
              </p>
              {/* Brand name */}
              <div className="animate-fade-in delay-100" style={{ marginBottom: 16 }}>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(14px, 2vw, 20px)', color: '#c9a882', fontStyle: 'italic', letterSpacing: 2 }}>WeYoung</span>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 13, marginTop: 2 }}>វ៉េយ៉ាំង</p>
              </div>
              <h1 className="animate-fade-in delay-200" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(38px, 6vw, 76px)', color: '#f5ede6', lineHeight: 1.05, fontWeight: 400, fontStyle: 'italic', marginBottom: 20, letterSpacing: '-1px' }}>
                Beautiful skin<br />at every age.
              </h1>
              <p className="animate-fade-in delay-300" style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 15, maxWidth: 480, lineHeight: 1.8, marginBottom: 6 }}>
                ផលិតផលថែស្បែក ជ្រើសរើសដោយប្រុងប្រយ័ត្ន សម្រាប់ស្បែករស់នៅក្នុងអាកាសធាតុកម្ពុជា
              </p>
              <p className="animate-fade-in delay-300" style={{ color: '#6b5a50', fontSize: 14, maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
                A carefully curated edit of skincare, chosen for skin living in Cambodia's climate.
              </p>
              <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/shop" className="btn-primary" style={{ fontSize: 15, padding: '15px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Shop Now <span>→</span>
                </Link>
                <Link href="/shop" className="btn-outline" style={{ fontSize: 15, padding: '15px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Skin Concerns
                </Link>
              </div>
              {/* Trust badges */}
              <div className="animate-fade-in delay-500" style={{ display: 'flex', gap: 20, marginTop: 48, flexWrap: 'wrap' }}>
                {[['✓', '100% Authentic'], ['🚀', 'Nationwide'], ['💰', 'Free $30+'], ['💳', 'Cash on delivery']].map(([icon, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#c9a882', fontSize: 13 }}>{icon}</span>
                    <span style={{ color: '#6b5a50', fontSize: 12 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-pulse" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#6b5a50' }}>
            <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
            <span style={{ fontSize: 16 }}>↓</span>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div style={{ background: '#111009', borderTop: '1px solid #1a1714', borderBottom: '1px solid #1a1714' }}>
          <div className="container" style={{ padding: '24px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 0 }}>
              {[
                { num: '10K+', label: 'Happy Customers', km: 'អតិថិជន' },
                { num: '100%', label: 'Authentic', km: 'ពិតប្រាកដ' },
                { num: '48h', label: 'Delivery', km: 'ដឹកជញ្ជូន' },
                { num: '15+', label: 'Products', km: 'ផលិតផល' },
                { num: '4.8★', label: 'Avg Rating', km: 'ពិន្ទុ' },
              ].map(({ num, label, km }, i) => (
                <div key={label} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center', padding: '12px', borderRight: i < 4 ? '1px solid #1a1714' : 'none' }}>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: 24, color: '#c9a882', fontWeight: 400 }}>{num}</p>
                  <p style={{ color: '#a89080', fontSize: 12, marginTop: 2 }}>{label}</p>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 10 }}>{km}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Categories ── */}
        <section className="section">
          <div className="container">
            <SectionHeader km="ជ្រើសរើសតាមប្រភេទ" en="Shop by Category" sub="Every step of a routine, from cleansing to sun protection." />
            <div className="category-grid">
              {categories.map((cat, i) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card-hover animate-fade-in" style={{ animationDelay: `${i * 0.08}s`, background: '#1a1714', borderRadius: 16, border: '1px solid #2a2420', overflow: 'hidden', cursor: 'pointer' }}>
                    <div style={{ position: 'relative', paddingTop: '80%', background: '#211d19', overflow: 'hidden' }}>
                      <Image src={cat.image} alt={cat.name.en} fill style={{ objectFit: 'cover', opacity: 0.75, transition: 'all 0.4s' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,10,9,0.6), transparent)' }} />
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, fontWeight: 500 }}>{cat.name.km}</p>
                      <p style={{ color: '#6b5a50', fontSize: 11, marginTop: 2 }}>{cat.name.en} · {cat.count}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Best Sellers ── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <SectionHeader km="លក់ដាច់ជាងគេ" en="Best Sellers" sub="What our customers come back for, again and again." />
              <Link href="/shop" className="btn-outline" style={{ fontSize: 13, padding: '10px 20px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', marginTop: 20 }}>View All →</Link>
            </div>
            <div className="product-grid">
              {bestSellers.slice(0, 4).map((p, i) => (
                <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p} onAddToCart={addToCart} wishlist={wishlist} onToggleWish={toggleWish} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skin Concern CTA Banner ── */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <div className="animate-glow" style={{ background: 'linear-gradient(135deg, #1a1714, #211d19)', borderRadius: 24, border: '1px solid rgba(201,168,130,0.15)', padding: 'clamp(32px,5vw,56px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,130,0.06), transparent)' }} />
              <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#c9a882', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>✦ Personalized</p>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 4vw, 36px)', color: '#f5ede6', fontStyle: 'italic', lineHeight: 1.2, marginBottom: 16 }}>
                    Not sure where to start?
                  </h2>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                    ស្វែងរកការថែស្បែក ដែលត្រឹមត្រូវសម្រាប់ប្រភេទស្បែករបស់អ្នក
                  </p>
                  <p style={{ color: '#6b5a50', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>Take our 60-second skin quiz to find the perfect products for your skin type and concerns.</p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/shop" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', fontSize: 14 }}>Take Skin Quiz →</Link>
                    <Link href="/shop" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', fontSize: 14 }}>Browse All</Link>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {skinConcerns.slice(0, 4).map((c, i) => (
                    <Link key={c.id} href={`/shop?concern=${c.id}`} style={{ textDecoration: 'none' }}>
                      <div className="card-hover" style={{ background: '#0c0a09', borderRadius: 14, border: '1px solid #2a2420', padding: '16px 14px', textAlign: 'center', cursor: 'pointer' }}>
                        <p style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</p>
                        <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 12, marginBottom: 2 }}>{c.name.km}</p>
                        <p style={{ color: '#6b5a50', fontSize: 11 }}>{c.name.en}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── New Arrivals ── */}
        <section className="section" style={{ background: '#080706', paddingTop: 64, paddingBottom: 64 }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <SectionHeader km="ផលិតផលថ្មី" en="New Arrivals" />
              <Link href="/shop?sort=new" className="btn-outline" style={{ textDecoration: 'none', fontSize: 13, padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20 }}>See All →</Link>
            </div>
            <div className="product-grid">
              {newArrivals.slice(0, 4).map((p, i) => (
                <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p} onAddToCart={addToCart} wishlist={wishlist} onToggleWish={toggleWish} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── All Concerns Grid ── */}
        <section className="section">
          <div className="container">
            <SectionHeader km="ជ្រើសរើសតាមបញ្ហា" en="Shop by Skin Concern" sub="Start from what your skin needs most." centered />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14, marginTop: 36 }}>
              {skinConcerns.map((c, i) => (
                <Link key={c.id} href={`/shop?concern=${c.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card-hover animate-fade-in" style={{ animationDelay: `${i * 0.07}s`, background: '#1a1714', borderRadius: 16, border: '1px solid #2a2420', padding: '22px 16px', textAlign: 'center', cursor: 'pointer' }}>
                    <p style={{ fontSize: 30, marginBottom: 12 }}>{c.icon}</p>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, marginBottom: 4 }}>{c.name.km}</p>
                    <p style={{ color: '#6b5a50', fontSize: 12 }}>{c.name.en}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Story ── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
              <div className="animate-fade-in-left">
                <p style={{ color: '#c9a882', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Our Story</p>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,5vw,44px)', color: '#f5ede6', lineHeight: 1.1, fontStyle: 'italic', marginBottom: 20 }}>
                  Built for skin that lives<br />in Cambodia.
                </h2>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 14, lineHeight: 1.9, marginBottom: 14 }}>
                  WeYoung ត្រូវបានបង្កើតឡើងដោយគំនិត ដើម្បីផ្ដល់នូវផលិតផលថែស្បែក ដែលពិតជាមានប្រសិទ្ធភាព ក្នុងអាកាសធាតុក្ដៅ-សើម កម្ពុជា។
                </p>
                <p style={{ color: '#6b5a50', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
                  Every product is tested and selected for real results in Cambodia's heat and humidity. Authentic formulas, honest ingredients.
                </p>
                <Link href="/about" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', fontSize: 14 }}>Learn More →</Link>
              </div>
              <div className="animate-fade-in-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  { n: '10K+', l: 'Happy Customers', km: 'អតិថិជន', icon: '😊' },
                  { n: '100%', l: 'Authentic', km: 'ពិតប្រាកដ', icon: '✅' },
                  { n: '48h', l: 'Nationwide', km: 'ដឹកជញ្ជូន', icon: '🚀' },
                  { n: '4.8★', l: 'Avg Rating', km: 'ពិន្ទុ', icon: '⭐' },
                ].map(({ n, l, km, icon }) => (
                  <div key={l} className="card-hover animate-glow" style={{ background: '#1a1714', borderRadius: 18, border: '1px solid #2a2420', padding: '24px 20px', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, marginBottom: 8 }}>{icon}</p>
                    <p style={{ fontFamily: "'Fraunces', serif", fontSize: 28, color: '#c9a882', fontWeight: 400 }}>{n}</p>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 11, marginTop: 4 }}>{km}</p>
                    <p style={{ color: '#6b5a50', fontSize: 11 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
