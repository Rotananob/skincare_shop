'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

type SortOption = 'featured' | 'price_asc' | 'price_desc' | 'rating' | 'newest';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [selectedSkinType, setSelectedSkinType] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');
  const [cart, setCart] = useState<{ product: typeof products[0]; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const categories = ['cleanser', 'toner', 'serum', 'moisturizer', 'sunscreen', 'mask', 'essence', 'body'];
  const concerns = ['dryness', 'oiliness', 'acne', 'sensitivity', 'aging', 'dullness', 'dark-spots', 'pores'];
  const skinTypes = ['dry', 'oily', 'combination', 'sensitive', 'normal'];

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) list = list.filter(p => p.name.en.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()) || p.name.km.includes(search));
    if (selectedCategory) list = list.filter(p => p.category === selectedCategory);
    if (selectedConcern) list = list.filter(p => p.concerns.includes(selectedConcern as any));
    if (selectedSkinType) list = list.filter(p => p.skinTypes.includes(selectedSkinType as any));
    switch (sort) {
      case 'price_asc': list.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)); break;
      case 'price_desc': list.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      case 'newest': list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0)); break;
      default: list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [search, selectedCategory, selectedConcern, selectedSkinType, sort]);

  const clearFilters = () => { setSelectedCategory(''); setSelectedConcern(''); setSelectedSkinType(''); setSearch(''); };
  const hasFilters = selectedCategory || selectedConcern || selectedSkinType || search;

  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09' }}>
      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(12,10,9,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2420' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#f5ede6', textDecoration: 'none' }}>Sokha Skin</Link>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/shop" style={{ color: '#f5ede6', fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>Shop</Link>
          </div>
          <button onClick={() => setCartOpen(true)} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: '#f5ede6', fontSize: 20 }}>
            🛒
            {cartCount > 0 && <span style={{ position: 'absolute', top: -4, right: -4, background: '#c9a882', color: '#0c0a09', borderRadius: '50%', width: 18, height: 18, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
          </button>
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
            {cart.length === 0 ? <p style={{ color: '#a89080', textAlign: 'center', marginTop: 40 }}>Your cart is empty</p>
              : cart.map(({ product: p, qty }) => (
                <div key={p.id} style={{ display: 'flex', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #2a2420' }}>
                  <div style={{ position: 'relative', width: 56, height: 56, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#f5ede6', fontSize: 13 }}>{p.name.en}</p>
                    <p style={{ color: '#c9a882', fontSize: 14, fontWeight: 700 }}>${(p.discountPrice ?? p.price) * qty}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button onClick={() => setCart(c => c.map(i => i.product.id === p.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))} style={{ background: '#2a2420', border: 'none', color: '#f5ede6', width: 24, height: 24, borderRadius: 4, cursor: 'pointer' }}>-</button>
                    <span style={{ color: '#f5ede6', fontSize: 13 }}>{qty}</span>
                    <button onClick={() => setCart(c => c.map(i => i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i))} style={{ background: '#2a2420', border: 'none', color: '#f5ede6', width: 24, height: 24, borderRadius: 4, cursor: 'pointer' }}>+</button>
                    <button onClick={() => setCart(c => c.filter(i => i.product.id !== p.id))} style={{ background: 'none', border: 'none', color: '#6b5a50', cursor: 'pointer', fontSize: 14 }}>✕</button>
                  </div>
                </div>
              ))}
            {cart.length > 0 && (
              <button style={{ width: '100%', background: '#c9a882', color: '#0c0a09', border: 'none', borderRadius: 10, padding: '14px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer', marginTop: 16 }}>
                Checkout — ${cart.reduce((s, i) => s + (i.product.discountPrice ?? i.product.price) * i.qty, 0).toFixed(2)}
              </button>
            )}
          </div>
        </div>
      )}

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#c9a882', fontSize: 13, marginBottom: 6 }}>ហាងទំនិញ</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 5vw, 48px)', color: '#f5ede6', fontStyle: 'italic', fontWeight: 400 }}>All Products</h1>
          <p style={{ color: '#a89080', fontSize: 14, marginTop: 8 }}>{filtered.length} products found</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 32 }} className="shop-layout">
          {/* Sidebar Filters */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Search */}
            <div>
              <label style={{ color: '#a89080', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Search</label>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                style={{ width: '100%', marginTop: 8, padding: '10px 14px', background: '#1a1714', border: '1px solid #2a2420', borderRadius: 8, color: '#f5ede6', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Sort */}
            <div>
              <label style={{ color: '#a89080', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Sort By</label>
              <select value={sort} onChange={e => setSort(e.target.value as SortOption)}
                style={{ width: '100%', marginTop: 8, padding: '10px 14px', background: '#1a1714', border: '1px solid #2a2420', borderRadius: 8, color: '#f5ede6', fontSize: 14, outline: 'none', cursor: 'pointer' }}>
                <option value="featured">Featured</option>
                <option value="price_asc">Price: Low → High</option>
                <option value="price_desc">Price: High → Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label style={{ color: '#a89080', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Category</label>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                    style={{ textAlign: 'left', background: selectedCategory === cat ? '#c9a882' : 'none', border: `1px solid ${selectedCategory === cat ? '#c9a882' : '#2a2420'}`, borderRadius: 6, padding: '7px 12px', color: selectedCategory === cat ? '#0c0a09' : '#a89080', fontSize: 13, cursor: 'pointer', fontWeight: selectedCategory === cat ? 600 : 400, textTransform: 'capitalize' }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skin Type */}
            <div>
              <label style={{ color: '#a89080', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Skin Type</label>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {skinTypes.map(st => (
                  <button key={st} onClick={() => setSelectedSkinType(selectedSkinType === st ? '' : st)}
                    style={{ textAlign: 'left', background: selectedSkinType === st ? '#c9a882' : 'none', border: `1px solid ${selectedSkinType === st ? '#c9a882' : '#2a2420'}`, borderRadius: 6, padding: '7px 12px', color: selectedSkinType === st ? '#0c0a09' : '#a89080', fontSize: 13, cursor: 'pointer', fontWeight: selectedSkinType === st ? 600 : 400, textTransform: 'capitalize' }}>
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Concern */}
            <div>
              <label style={{ color: '#a89080', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Skin Concern</label>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {concerns.map(c => (
                  <button key={c} onClick={() => setSelectedConcern(selectedConcern === c ? '' : c)}
                    style={{ textAlign: 'left', background: selectedConcern === c ? '#c9a882' : 'none', border: `1px solid ${selectedConcern === c ? '#c9a882' : '#2a2420'}`, borderRadius: 6, padding: '7px 12px', color: selectedConcern === c ? '#0c0a09' : '#a89080', fontSize: 13, cursor: 'pointer', textTransform: 'capitalize', fontWeight: selectedConcern === c ? 600 : 400 }}>
                    {c.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button onClick={clearFilters} style={{ background: '#2a2420', border: 'none', color: '#f5ede6', padding: '10px 0', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', color: '#a89080' }}>
                <p style={{ fontSize: 48 }}>🔍</p>
                <p style={{ fontSize: 18, marginTop: 16, color: '#f5ede6' }}>No products found</p>
                <p style={{ fontSize: 14, marginTop: 8 }}>Try adjusting your filters</p>
                <button onClick={clearFilters} style={{ marginTop: 20, background: '#c9a882', color: '#0c0a09', border: 'none', padding: '12px 24px', borderRadius: 8, cursor: 'pointer', fontWeight: 700 }}>Clear Filters</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 18 }}>
                {filtered.map(p => {
                  const isAdded = addedId === p.id;
                  return (
                    <div key={p.id} style={{ background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420', overflow: 'hidden', transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                      <Link href={`/shop/${p.slug}`} style={{ textDecoration: 'none' }}>
                        <div style={{ position: 'relative', paddingTop: '100%', background: '#211d19' }}>
                          <Image src={p.image} alt={p.name.en} fill style={{ objectFit: 'cover' }} />
                          <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {p.bestSeller && <span style={{ background: '#c9a882', color: '#0c0a09', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 3 }}>BEST SELLER</span>}
                            {p.newArrival && <span style={{ background: '#2d4a2d', color: '#7bc47b', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 3 }}>NEW</span>}
                          </div>
                        </div>
                        <div style={{ padding: '12px 14px 8px' }}>
                          <p style={{ color: '#6b5a50', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{p.brand}</p>
                          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#f5ede6', fontSize: 13, marginTop: 4, lineHeight: 1.4 }}>{p.name.km}</p>
                          <p style={{ color: '#a89080', fontSize: 12, marginTop: 2 }}>{p.name.en}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                            <span style={{ color: '#c9a882', fontSize: 11 }}>{'★'.repeat(Math.round(p.rating))}</span>
                            <span style={{ color: '#6b5a50', fontSize: 10 }}>({p.reviewCount})</span>
                          </div>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
                            {p.discountPrice ? <>
                              <span style={{ color: '#f5ede6', fontSize: 15, fontWeight: 700 }}>${p.discountPrice}</span>
                              <span style={{ color: '#6b5a50', fontSize: 12, textDecoration: 'line-through' }}>${p.price}</span>
                            </> : <span style={{ color: '#f5ede6', fontSize: 15, fontWeight: 700 }}>${p.price}</span>}
                          </div>
                        </div>
                      </Link>
                      <div style={{ padding: '0 14px 14px' }}>
                        <button onClick={() => addToCart(p)}
                          style={{ width: '100%', background: isAdded ? '#2d4a2d' : '#c9a882', color: isAdded ? '#7bc47b' : '#0c0a09', border: 'none', borderRadius: 8, padding: '9px 0', fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
                          {isAdded ? '✓ Added!' : '+ Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .shop-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
