'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [activeTab, setActiveTab] = useState<'description' | 'benefits' | 'ingredients' | 'howToUse'>('description');
  const [cart, setCart] = useState<{ product: typeof products[0]; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 4);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = () => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product, qty }];
    });
    setAdded(true);
    setCartOpen(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const price = product.discountPrice ?? product.price;
  const discount = product.discountPrice ? Math.round((1 - product.discountPrice / product.price) * 100) : null;

  const tabs = [
    { id: 'description', label: 'Description / ការពិពណ៌នា' },
    { id: 'benefits', label: 'Benefits / អត្ថប្រយោជន៍' },
    { id: 'ingredients', label: 'Ingredients / គ្រឿងផ្សំ' },
    { id: 'howToUse', label: 'How to Use / របៀបប្រើ' },
  ] as const;

  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09' }}>
      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(12,10,9,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2420' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #c9a882, #b8936e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#0c0a09' }}>W</div>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#f5ede6', letterSpacing: '-0.5px' }}>WeYoung</span>
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/shop" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>← Back to Shop</Link>
            <Link href="/profile" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span>👤</span> <span>Profile</span>
            </Link>
            <button onClick={() => setCartOpen(true)} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: '#f5ede6', fontSize: 20 }}>
              🛒 {cartCount > 0 && <span style={{ position: 'absolute', top: -4, right: -4, background: '#c9a882', color: '#0c0a09', borderRadius: '50%', width: 18, height: 18, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      {cartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          <div onClick={() => setCartOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', maxWidth: 380, background: '#1a1714', borderLeft: '1px solid #2a2420', padding: 24, overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", color: '#f5ede6', fontSize: 20 }}>Cart ({cartCount})</h2>
              <button onClick={() => setCartOpen(false)} style={{ background: 'none', border: 'none', color: '#a89080', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>
            {cart.map(({ product: p, qty: q }) => (
              <div key={p.id} style={{ display: 'flex', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #2a2420' }}>
                <div style={{ position: 'relative', width: 56, height: 56, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#f5ede6', fontSize: 13 }}>{p.name.en}</p>
                  <p style={{ color: '#c9a882', fontSize: 14, fontWeight: 700 }}>${(p.discountPrice ?? p.price) * q}</p>
                </div>
              </div>
            ))}
            {cart.length > 0 && <button style={{ width: '100%', background: '#c9a882', color: '#0c0a09', border: 'none', borderRadius: 10, padding: '14px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer', marginTop: 16 }}>Checkout</button>}
          </div>
        </div>
      )}

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <p style={{ color: '#6b5a50', fontSize: 13, marginBottom: 32 }}>
          <Link href="/" style={{ color: '#6b5a50', textDecoration: 'none' }}>Home</Link> / <Link href="/shop" style={{ color: '#6b5a50', textDecoration: 'none' }}>Shop</Link> / <span style={{ color: '#a89080' }}>{product.name.en}</span>
        </p>

        {/* Product Main */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, marginBottom: 64 }} className="product-main">
          {/* Image */}
          <div>
            <div style={{ position: 'relative', paddingTop: '100%', borderRadius: 20, overflow: 'hidden', background: '#1a1714', border: '1px solid #2a2420' }}>
              <Image src={product.image} alt={product.name.en} fill style={{ objectFit: 'cover' }} priority />
              {discount && <div style={{ position: 'absolute', top: 16, left: 16, background: '#4a2d2d', color: '#f08080', fontSize: 13, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>-{discount}%</div>}
            </div>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Brand + badges */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ color: '#a89080', fontSize: 13 }}>{product.brand}</span>
              {product.bestSeller && <span style={{ background: '#c9a882', color: '#0c0a09', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>BEST SELLER</span>}
              {product.newArrival && <span style={{ background: '#2d4a2d', color: '#7bc47b', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>NEW</span>}
            </div>

            {/* Name */}
            <div>
              <h1 style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 'clamp(20px, 3vw, 28px)', color: '#f5ede6', lineHeight: 1.4, marginBottom: 6 }}>{product.name.km}</h1>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#a89080', fontStyle: 'italic', fontWeight: 400 }}>{product.name.en}</h2>
              <p style={{ color: '#c9a882', fontSize: 14, marginTop: 8 }}>{product.tagline.en}</p>
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#c9a882', fontSize: 16 }}>{'★'.repeat(Math.round(product.rating))}</span>
              <span style={{ color: '#f5ede6', fontSize: 14, fontWeight: 600 }}>{product.rating}</span>
              <span style={{ color: '#6b5a50', fontSize: 13 }}>({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 36, color: '#f5ede6', fontWeight: 400 }}>${price}</span>
              {product.discountPrice && <span style={{ fontSize: 20, color: '#6b5a50', textDecoration: 'line-through' }}>${product.price}</span>}
              {discount && <span style={{ background: '#4a2d2d', color: '#f08080', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Save {discount}%</span>}
            </div>

            {/* Stock */}
            <p style={{ color: product.stock > 20 ? '#7bc47b' : product.stock > 0 ? '#c9a882' : '#f08080', fontSize: 13 }}>
              {product.stock > 20 ? '✓ In Stock' : product.stock > 0 ? `⚠ Only ${product.stock} left` : '✕ Out of Stock'}
            </p>

            {/* Size */}
            {product.sizes.length > 1 && (
              <div>
                <p style={{ color: '#a89080', fontSize: 13, marginBottom: 10 }}>Size: <strong style={{ color: '#f5ede6' }}>{selectedSize}</strong></p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {product.sizes.map(size => (
                    <button key={size} onClick={() => setSelectedSize(size)}
                      style={{ padding: '8px 16px', borderRadius: 8, border: `1px solid ${selectedSize === size ? '#c9a882' : '#2a2420'}`, background: selectedSize === size ? '#c9a882' : 'transparent', color: selectedSize === size ? '#0c0a09' : '#f5ede6', cursor: 'pointer', fontSize: 13, fontWeight: selectedSize === size ? 700 : 400 }}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qty + CTA */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', border: '1px solid #2a2420', borderRadius: 10, overflow: 'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ background: '#1a1714', border: 'none', color: '#f5ede6', width: 44, height: 52, cursor: 'pointer', fontSize: 18 }}>−</button>
                <span style={{ color: '#f5ede6', width: 48, textAlign: 'center', fontSize: 16, lineHeight: '52px', background: '#1a1714' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ background: '#1a1714', border: 'none', color: '#f5ede6', width: 44, height: 52, cursor: 'pointer', fontSize: 18 }}>+</button>
              </div>
              <button onClick={addToCart} disabled={product.stock === 0}
                style={{ flex: 1, minWidth: 160, background: added ? '#2d4a2d' : '#c9a882', color: added ? '#7bc47b' : '#0c0a09', border: 'none', borderRadius: 10, padding: '14px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
                {added ? '✓ Added to Cart!' : `Add to Cart — $${(price * qty).toFixed(2)}`}
              </button>
            </div>
            <button style={{ width: '100%', background: '#f5ede6', color: '#0c0a09', border: 'none', borderRadius: 10, padding: '14px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              Buy Now
            </button>

            {/* Trust */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid #2a2420' }}>
              {['✓ Authentic', '✓ Nationwide delivery 🇰🇭', '✓ Cash on delivery'].map(t => (
                <span key={t} style={{ color: '#6b5a50', fontSize: 12 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #2a2420', gap: 0, overflowX: 'auto' }} className="no-scrollbar">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{ padding: '12px 20px', background: 'none', border: 'none', borderBottom: `2px solid ${activeTab === tab.id ? '#c9a882' : 'transparent'}`, color: activeTab === tab.id ? '#c9a882' : '#a89080', fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: activeTab === tab.id ? 600 : 400, transition: 'all 0.2s' }}>
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ background: '#1a1714', borderRadius: '0 0 16px 16px', padding: '28px 24px', border: '1px solid #2a2420', borderTop: 'none' }}>
            {activeTab === 'description' && (
              <div>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{product.description.km}</p>
                <p style={{ color: '#a89080', fontSize: 15, lineHeight: 1.8 }}>{product.description.en}</p>
              </div>
            )}
            {activeTab === 'benefits' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {product.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px', background: '#211d19', borderRadius: 10 }}>
                    <span style={{ color: '#c9a882', fontSize: 18, flexShrink: 0 }}>✓</span>
                    <div>
                      <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 14 }}>{b.km}</p>
                      <p style={{ color: '#a89080', fontSize: 13, marginTop: 2 }}>{b.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>{product.ingredients.km}</p>
                <p style={{ color: '#a89080', fontSize: 15, lineHeight: 1.8 }}>{product.ingredients.en}</p>
              </div>
            )}
            {activeTab === 'howToUse' && (
              <div>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>{product.howToUse.km}</p>
                <p style={{ color: '#a89080', fontSize: 15, lineHeight: 1.8 }}>{product.howToUse.en}</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, color: '#f5ede6', marginBottom: 24, fontStyle: 'italic', fontWeight: 400 }}>You May Also Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 18 }}>
              {related.map(p => (
                <Link key={p.id} href={`/shop/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', paddingTop: '100%', background: '#211d19' }}>
                      <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <p style={{ color: '#6b5a50', fontSize: 10, textTransform: 'uppercase' }}>{p.brand}</p>
                      <p style={{ color: '#f5ede6', fontSize: 13, marginTop: 4 }}>{p.name.en}</p>
                      <p style={{ color: '#c9a882', fontSize: 15, fontWeight: 700, marginTop: 6 }}>${p.discountPrice ?? p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
