'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type TabKey = 'personal' | 'skin' | 'orders' | 'address' | 'payment' | 'settings';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');
  const [savedToast, setSavedToast] = useState(false);

  // Form states
  const [profile, setProfile] = useState({
    name: 'Rotana Nob',
    nameKm: 'ណុប រតនៈ',
    phone: '+855 98 765 432',
    email: 'rotananob@gmail.com',
    gender: 'Male',
    birthday: '2000-08-15',
    bio: 'Skincare enthusiast passionate about hydration, barrier repair and daily SPF protection.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    memberTier: 'WeYoung Glow VIP 👑',
    glowPoints: 1850,
  });

  const [skinProfile, setSkinProfile] = useState({
    skinType: 'combination',
    concerns: ['oiliness', 'pores', 'sensitivity'],
    sensitivityLevel: 'Medium',
    currentRoutine: ['Cleanser', 'Toner', 'Serum (Centella)', 'Moisturizer', 'SPF50+'],
    waterIntake: '2.5L / Day',
  });

  const [addresses, setAddresses] = useState([
    {
      id: 'addr-1',
      label: 'Home / ផ្ទះ (Default)',
      recipient: 'Rotana Nob',
      phone: '+855 98 765 432',
      details: 'Street 271, Sangkat Boeung Tumpun, Khan Mean Chey',
      city: 'Phnom Penh / ភ្នំពេញ',
      note: 'Call before delivery. Leave at security desk if away.',
      isDefault: true,
    },
    {
      id: 'addr-2',
      label: 'Office / កន្លែងធ្វើការ',
      recipient: 'Rotana Nob (Reception)',
      phone: '+855 12 345 678',
      details: 'Canadia Tower, 14th Floor, Monivong Blvd',
      city: 'Phnom Penh / ភ្នំពេញ',
      note: 'Delivery during office hours: 8:00 AM - 5:30 PM',
      isDefault: false,
    },
  ]);

  const [orders] = useState([
    {
      id: 'WY-8942',
      date: 'Oct 04, 2026',
      total: 39.00,
      status: 'Out for Delivery 🛵',
      statusColor: '#7bc47b',
      trackingNo: 'VET-883921-KH',
      carrier: 'Virak Buntham Express',
      items: [
        { name: 'Centella Asiatica Water Serum', qty: 1, price: 19.00, img: '/images/92480f01-20c1-46d9-8dfd-3fef5c94a9d0.png' },
        { name: 'Retinol 0.3% Night Cream', qty: 1, price: 20.00, img: '/images/bebe6db9-1d97-487e-beb7-3599f3af83ef.png' },
      ],
    },
    {
      id: 'WY-8710',
      date: 'Sep 28, 2026',
      total: 42.00,
      status: 'Delivered ✅',
      statusColor: '#c9a882',
      trackingNo: 'GRAB-99210-PP',
      carrier: 'GrabExpress Instant',
      items: [
        { name: 'SPF50+ Daily Sunscreen', qty: 1, price: 18.00, img: '/images/93197771-a19c-4916-98db-316b75cf0682.png' },
        { name: 'Snail Repair Essence', qty: 1, price: 24.00, img: '/images/aa0d74a7-1c15-4d5f-9d37-455a58d44910.png' },
      ],
    },
  ]);

  const [preferences, setPreferences] = useState({
    language: 'km',
    currency: 'USD',
    telegramNotifications: true,
    smsNotifications: true,
    promoEmails: false,
    autoDiscount: true,
    twoFactorAuth: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09', color: '#f5ede6' }}>
      {/* ── Top Bar ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(12,10,9,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #2a2420' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #c9a882, #b8936e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#0c0a09' }}>W</div>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, color: '#f5ede6', fontWeight: 600 }}>WeYoung</span>
            </Link>
            <span style={{ color: '#2a2420' }}>|</span>
            <span style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13 }}>ការកំណត់គណនី / Account Settings</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/shop" style={{ textDecoration: 'none', background: '#1a1714', border: '1px solid #2a2420', color: '#f5ede6', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🛍️</span> <span>ទៅហាង / Shop</span>
            </Link>
            <Link href="/" style={{ textDecoration: 'none', color: '#a89080', fontSize: 13 }}>
              ចេញក្រៅ / Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── Notification Toast ── */}
      {savedToast && (
        <div className="animate-fade-in-right" style={{ position: 'fixed', top: 80, right: 24, zIndex: 999, background: '#1a1714', border: '1px solid #2d4a2d', borderLeft: '4px solid #7bc47b', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 12px 32px rgba(0,0,0,0.6)' }}>
          <span style={{ color: '#7bc47b', fontSize: 20 }}>✓</span>
          <div>
            <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 13, color: '#f5ede6', fontWeight: 600 }}>បានរក្សាទុកដោយជោគជ័យ!</p>
            <p style={{ fontSize: 11, color: '#a89080' }}>Your profile settings have been updated.</p>
          </div>
        </div>
      )}

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 80px' }}>
        {/* ── User Overview Hero Card ── */}
        <div style={{ background: 'linear-gradient(135deg, #1a1714 0%, #161311 100%)', borderRadius: 24, border: '1px solid #2a2420', padding: '28px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,130,0.08), transparent)' }} />
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 84, height: 84, borderRadius: 20, background: '#2a2420', overflow: 'hidden', border: '2px solid #c9a882', position: 'relative' }}>
                  <img src={profile.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ position: 'absolute', bottom: -4, right: -4, background: '#7bc47b', width: 16, height: 16, borderRadius: '50%', border: '2px solid #0c0a09' }} title="Active Member" />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 500, color: '#f5ede6' }}>{profile.name}</h1>
                  <span style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 14 }}>({profile.nameKm})</span>
                  <span style={{ background: 'rgba(201,168,130,0.15)', border: '1px solid rgba(201,168,130,0.3)', color: '#c9a882', padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
                    {profile.memberTier}
                  </span>
                </div>
                <p style={{ color: '#a89080', fontSize: 13, marginTop: 4 }}>{profile.email} · {profile.phone}</p>
                <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#6b5a50', fontSize: 12, marginTop: 4 }}>សមាជិកតាំងពី ខែមករា 2024</p>
              </div>
            </div>

            {/* Loyalty points badge */}
            <div style={{ background: '#211d19', border: '1px solid #2a2420', borderRadius: 18, padding: '16px 24px', display: 'flex', gap: 24, alignItems: 'center' }}>
              <div>
                <p style={{ color: '#a89080', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Glow Points</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: 28, color: '#c9a882', fontWeight: 600, marginTop: 2 }}>
                  {profile.glowPoints.toLocaleString()} <span style={{ fontSize: 14, fontWeight: 400 }}>pts</span>
                </p>
                <p style={{ color: '#7bc47b', fontSize: 11, marginTop: 2 }}>= ${(profile.glowPoints / 100).toFixed(2)} USD off next order</p>
              </div>
              <button onClick={() => alert('Points can be redeemed at checkout!')} style={{ background: '#c9a882', color: '#0c0a09', border: 'none', borderRadius: 10, padding: '10px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                Redeem 🎁
              </button>
            </div>
          </div>
        </div>

        {/* ── Main Layout: Tabs + Content ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32 }} className="profile-grid-layout">
          {/* Navigation Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p style={{ color: '#6b5a50', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, padding: '0 12px 6px' }}>
              ការកំណត់ / MENU
            </p>
            {[
              { key: 'personal', icon: '👤', km: 'ព័ត៌មានផ្ទាល់ខ្លួន', en: 'Personal Info' },
              { key: 'skin', icon: '🌿', km: 'ប្រវត្តិស្បែក', en: 'Skin Profile & Routine' },
              { key: 'orders', icon: '📦', km: 'ការបញ្ជាទិញ & ដឹក', en: 'Orders & Tracking' },
              { key: 'address', icon: '📍', km: 'អាសយដ្ឋានដឹកជញ្ជូន', en: 'Delivery Addresses' },
              { key: 'payment', icon: '💳', km: 'ការទូទាត់ KHQR / ABA', en: 'Payments & KHQR' },
              { key: 'settings', icon: '⚙️', km: 'ការកំណត់ & សុវត្ថិភាព', en: 'Preferences & Security' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 14px',
                  borderRadius: 12,
                  border: activeTab === tab.key ? '1px solid rgba(201,168,130,0.3)' : '1px solid transparent',
                  background: activeTab === tab.key ? 'rgba(201,168,130,0.1)' : 'transparent',
                  color: activeTab === tab.key ? '#c9a882' : '#a89080',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                <span style={{ fontSize: 18 }}>{tab.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 13, lineHeight: 1.3, color: activeTab === tab.key ? '#f5ede6' : 'inherit' }}>{tab.km}</p>
                  <p style={{ fontSize: 11, opacity: 0.7 }}>{tab.en}</p>
                </div>
              </button>
            ))}

            <div style={{ marginTop: 24, padding: '16px', background: '#1a1714', borderRadius: 14, border: '1px solid #2a2420' }}>
              <p style={{ color: '#c9a882', fontSize: 12, fontWeight: 700 }}>🇰🇭 WeYoung Hotline</p>
              <p style={{ color: '#a89080', fontSize: 12, marginTop: 4 }}>Telegram: @weyoung_support</p>
              <p style={{ color: '#6b5a50', fontSize: 11, marginTop: 2 }}>Daily 8:00 AM - 10:00 PM</p>
            </div>
          </aside>

          {/* Tab Content Panes */}
          <section style={{ background: '#1a1714', borderRadius: 20, border: '1px solid #2a2420', padding: '32px' }}>
            {/* 1. PERSONAL INFO TAB */}
            {activeTab === 'personal' && (
              <form onSubmit={handleSave} className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>Personal Information</h2>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                    កែសម្រួលព័ត៌មានផ្ទាល់ខ្លួន និងទំនាក់ទំនងរបស់អ្នក
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Full Name (English)</label>
                    <input
                      className="input-field"
                      value={profile.name}
                      onChange={e => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>ឈ្មោះជាភាសាខ្មែរ (Khmer Name)</label>
                    <input
                      className="input-field"
                      style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
                      value={profile.nameKm}
                      onChange={e => setProfile({ ...profile, nameKm: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Email Address</label>
                    <input
                      className="input-field"
                      type="email"
                      value={profile.email}
                      onChange={e => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Phone Number (ABA / Wing linked)</label>
                    <input
                      className="input-field"
                      value={profile.phone}
                      onChange={e => setProfile({ ...profile, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Birthday (Receive $10 Birthday Voucher 🎂)</label>
                    <input
                      className="input-field"
                      type="date"
                      value={profile.birthday}
                      onChange={e => setProfile({ ...profile, birthday: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Gender</label>
                    <select
                      className="input-field"
                      value={profile.gender}
                      onChange={e => setProfile({ ...profile, gender: e.target.value })}
                    >
                      <option value="Male">Male / ប្រុស</option>
                      <option value="Female">Female / ស្រី</option>
                      <option value="Other">Other / ផ្សេងៗ</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Skincare Bio & Notes</label>
                  <textarea
                    className="input-field"
                    rows={3}
                    value={profile.bio}
                    onChange={e => setProfile({ ...profile, bio: e.target.value })}
                  />
                </div>

                <div style={{ marginTop: 28, display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button type="button" onClick={() => setActiveTab('skin')} className="btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
                    Next: Skin Profile →
                  </button>
                  <button type="submit" className="btn-primary" style={{ fontSize: 13, padding: '10px 24px' }}>
                    Save Changes 💾
                  </button>
                </div>
              </form>
            )}

            {/* 2. SKIN PROFILE TAB */}
            {activeTab === 'skin' && (
              <form onSubmit={handleSave} className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>My Skin Profile & Routine</h2>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                    កំណត់ប្រភេទស្បែក ដើម្បីឱ្យ WeYoung ណែនាំផលិតផលដែលត្រូវនឹងស្បែករបស់អ្នក
                  </p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, color: '#c9a882', marginBottom: 10, fontWeight: 600 }}>
                    1. Skin Type / ប្រភេទស្បែករបស់អ្នក
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                    {[
                      { id: 'oily', label: 'ស្បែកខ្លាញ់ (Oily)', desc: 'Excess shine, visible pores' },
                      { id: 'dry', label: 'ស្បែកស្ងួត (Dry)', desc: 'Tightness, flaking' },
                      { id: 'combination', label: 'ស្បែកចម្រុះ (Combo)', desc: 'Oily T-zone, dry cheeks' },
                      { id: 'sensitive', label: 'ស្បែកងាយប្រតិកម្ម', desc: 'Prone to redness, burning' },
                      { id: 'normal', label: 'ស្បែកធម្មតា (Normal)', desc: 'Balanced, smooth texture' },
                    ].map(st => (
                      <div
                        key={st.id}
                        onClick={() => setSkinProfile({ ...skinProfile, skinType: st.id })}
                        style={{
                          padding: '14px 12px',
                          borderRadius: 12,
                          border: skinProfile.skinType === st.id ? '2px solid #c9a882' : '1px solid #2a2420',
                          background: skinProfile.skinType === st.id ? 'rgba(201,168,130,0.1)' : '#111009',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.2s',
                        }}
                      >
                        <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 13, color: skinProfile.skinType === st.id ? '#c9a882' : '#f5ede6', fontWeight: 600 }}>{st.label}</p>
                        <p style={{ fontSize: 10, color: '#6b5a50', marginTop: 4 }}>{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, color: '#c9a882', marginBottom: 10, fontWeight: 600 }}>
                    2. Main Skin Concerns / បញ្ហាស្បែកចម្បង
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {[
                      { id: 'acne', label: 'មុន និងរលាក (Acne)' },
                      { id: 'oiliness', label: 'រន្ធញើសធំ & ខ្លាញ់ (Pores & Oil)' },
                      { id: 'dark-spots', label: 'ស្នាមខ្មៅ & អាចម៍រុយ (Dark Spots)' },
                      { id: 'dullness', label: 'ស្បែកស្រអាប់ (Dullness)' },
                      { id: 'dryness', label: 'ខ្វះសំណើម (Dehydration)' },
                      { id: 'aging', label: 'ភាពចាស់ & ស្នាមជ្រួញ (Aging)' },
                      { id: 'sensitivity', label: 'ក្រហម & រមាស់ (Redness)' },
                    ].map(c => {
                      const selected = skinProfile.concerns.includes(c.id);
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            const newConcerns = selected
                              ? skinProfile.concerns.filter(x => x !== c.id)
                              : [...skinProfile.concerns, c.id];
                            setSkinProfile({ ...skinProfile, concerns: newConcerns });
                          }}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 20,
                            border: selected ? '1px solid #c9a882' : '1px solid #2a2420',
                            background: selected ? '#c9a882' : '#111009',
                            color: selected ? '#0c0a09' : '#a89080',
                            fontSize: 12,
                            fontWeight: selected ? 700 : 500,
                            cursor: 'pointer',
                            fontFamily: "'Kantumruy Pro', sans-serif",
                            transition: 'all 0.2s',
                          }}
                        >
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ background: '#111009', borderRadius: 14, padding: '18px', border: '1px solid #2a2420', marginBottom: 24 }}>
                  <p style={{ color: '#c9a882', fontSize: 13, fontWeight: 700, marginBottom: 8 }}>💡 WeYoung Custom Recommendation:</p>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, lineHeight: 1.6 }}>
                    សម្រាប់ប្រភេទស្បែក Combination + Sensitivity ក្នុងអាកាសធាតុក្តៅនៅកម្ពុជា៖ សូមណែនាំឱ្យប្រើប្រាស់ <strong style={{ color: '#f5ede6' }}>Centella Asiatica Serum</strong> នៅពេលព្រឹក និង <strong style={{ color: '#f5ede6' }}>Ceramide Barrier Cream</strong> នៅពេលយប់ រួមជាមួយ <strong style={{ color: '#f5ede6' }}>SPF50+ Daily Sunscreen</strong> ជាប្រចាំ!
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button type="submit" className="btn-primary" style={{ fontSize: 13, padding: '10px 24px' }}>
                    Save Skin Profile 🌿
                  </button>
                </div>
              </form>
            )}

            {/* 3. ORDERS & TRACKING TAB */}
            {activeTab === 'orders' && (
              <div className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>Order History & Live Tracking</h2>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                      តាមដានការដឹកជញ្ជូនទំនិញតាម Virak Buntham / GrabExpress
                    </p>
                  </div>
                  <span style={{ background: '#211d19', color: '#c9a882', padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                    {orders.length} Orders Total
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {orders.map(order => (
                    <div key={order.id} style={{ background: '#111009', borderRadius: 16, border: '1px solid #2a2420', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, borderBottom: '1px solid #1a1714', paddingBottom: 14 }}>
                        <div>
                          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, color: '#f5ede6', fontWeight: 600 }}>Order #{order.id}</p>
                          <p style={{ color: '#6b5a50', fontSize: 12 }}>Placed on {order.date} · Carrier: {order.carrier}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ background: 'rgba(123,196,123,0.1)', color: order.statusColor, border: `1px solid ${order.statusColor}40`, padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
                            {order.status}
                          </span>
                          <p style={{ color: '#c9a882', fontSize: 14, fontWeight: 700, marginTop: 6 }}>${order.total.toFixed(2)} USD</p>
                        </div>
                      </div>

                      {/* Items */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
                        {order.items.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ position: 'relative', width: 44, height: 44, borderRadius: 8, overflow: 'hidden', background: '#1a1714' }}>
                              <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <p style={{ fontSize: 13, color: '#f5ede6', fontWeight: 500 }}>{item.name}</p>
                              <p style={{ fontSize: 11, color: '#6b5a50' }}>Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Live Tracking link */}
                      <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #1a1714', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                        <p style={{ fontSize: 12, color: '#a89080' }}>Tracking code: <strong style={{ color: '#f5ede6' }}>{order.trackingNo}</strong></p>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button onClick={() => alert(`Tracking ${order.trackingNo} via ${order.carrier}: Driver is en route.`)} className="btn-outline" style={{ fontSize: 11, padding: '6px 14px', borderRadius: 8 }}>
                            📍 Live Map Tracking
                          </button>
                          <Link href="/shop" className="btn-primary" style={{ fontSize: 11, padding: '6px 14px', borderRadius: 8, textDecoration: 'none' }}>
                            Buy Again 🔁
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. ADDRESSES TAB */}
            {activeTab === 'address' && (
              <div className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>Saved Delivery Addresses</h2>
                    <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                      អាសយដ្ឋានសម្រាប់ដឹកជញ្ជូនរហ័សក្នុងរាជធានីភ្នំពេញ និងបណ្តាខេត្ត
                    </p>
                  </div>
                  <button onClick={() => alert('Add address modal')} className="btn-primary" style={{ fontSize: 12, padding: '8px 16px' }}>
                    + Add New Address
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  {addresses.map(addr => (
                    <div key={addr.id} style={{ background: '#111009', borderRadius: 16, border: addr.isDefault ? '2px solid #c9a882' : '1px solid #2a2420', padding: '20px', position: 'relative' }}>
                      {addr.isDefault && (
                        <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(201,168,130,0.15)', color: '#c9a882', padding: '2px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700 }}>
                          DEFAULT
                        </span>
                      )}
                      <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 14, color: '#f5ede6', fontWeight: 600 }}>{addr.label}</p>
                      <p style={{ color: '#a89080', fontSize: 13, marginTop: 8 }}>{addr.recipient} ({addr.phone})</p>
                      <p style={{ color: '#6b5a50', fontSize: 12, marginTop: 4 }}>{addr.details}</p>
                      <p style={{ color: '#c9a882', fontSize: 12, marginTop: 2 }}>{addr.city}</p>
                      <p style={{ color: '#6b5a50', fontSize: 11, marginTop: 8, fontStyle: 'italic', background: '#1a1714', padding: '6px 10px', borderRadius: 6 }}>
                        Note: {addr.note}
                      </p>
                      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                        <button className="btn-outline" style={{ fontSize: 11, padding: '5px 12px', borderRadius: 6 }}>Edit</button>
                        {!addr.isDefault && (
                          <button onClick={() => {
                            setAddresses(addresses.map(a => ({ ...a, isDefault: a.id === addr.id })));
                            setSavedToast(true);
                            setTimeout(() => setSavedToast(false), 2000);
                          }} className="btn-outline" style={{ fontSize: 11, padding: '5px 12px', borderRadius: 6, color: '#c9a882', borderColor: '#c9a882' }}>
                            Set Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. PAYMENTS & KHQR TAB */}
            {activeTab === 'payment' && (
              <div className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>Payment Methods & KHQR</h2>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                    វិធីទូទាត់ប្រាក់រហ័សតាម KHQR Bakong, ABA PayWay និងទូទាត់ពេលដឹកដល់ (Cash on Delivery)
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Bakong KHQR Card */}
                  <div style={{ background: '#111009', borderRadius: 16, border: '1px solid #2a2420', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: '#e1251b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 12 }}>
                        KHQR
                      </div>
                      <div>
                        <p style={{ fontSize: 14, color: '#f5ede6', fontWeight: 600 }}>Bakong KHQR (All Banks in Cambodia)</p>
                        <p style={{ fontSize: 12, color: '#a89080' }}>ABA, ACLEDA, Wing, Canadia, TrueMoney...</p>
                        <p style={{ color: '#7bc47b', fontSize: 11, marginTop: 2 }}>✓ Zero transaction fees · Instant verification</p>
                      </div>
                    </div>
                    <span style={{ background: 'rgba(123,196,123,0.1)', color: '#7bc47b', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
                      ACTIVE & READY
                    </span>
                  </div>

                  {/* Cash On Delivery */}
                  <div style={{ background: '#111009', borderRadius: 16, border: '1px solid #2a2420', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: '#2d4a2d', color: '#7bc47b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                        💵
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 14, color: '#f5ede6', fontWeight: 600 }}>ទូទាត់សាច់ប្រាក់ពេលទំនិញដឹកដល់ (Cash on Delivery)</p>
                        <p style={{ fontSize: 12, color: '#a89080' }}>Inspect your skincare products before paying the delivery driver.</p>
                      </div>
                    </div>
                    <span style={{ background: 'rgba(201,168,130,0.15)', color: '#c9a882', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
                      ENABLED
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 6. SETTINGS & PREFERENCES TAB */}
            {activeTab === 'settings' && (
              <form onSubmit={handleSave} className="animate-fade-in">
                <div style={{ borderBottom: '1px solid #2a2420', paddingBottom: 16, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5ede6' }}>App Preferences & Security</h2>
                  <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 13, marginTop: 4 }}>
                    កំណត់ភាសា រូបិយប័ណ្ណ ការជូនដំណឹង និងសុវត្ថិភាពគណនី
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>App Language / ភាសា</label>
                    <select
                      className="input-field"
                      value={preferences.language}
                      onChange={e => setPreferences({ ...preferences, language: e.target.value })}
                    >
                      <option value="km">ភាសាខ្មែរ (Khmer - Default)</option>
                      <option value="en">English (US)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#a89080', marginBottom: 6, fontWeight: 600 }}>Currency Display / រូបិយប័ណ្ណ</label>
                    <select
                      className="input-field"
                      value={preferences.currency}
                      onChange={e => setPreferences({ ...preferences, currency: e.target.value })}
                    >
                      <option value="USD">USD ($) - US Dollar</option>
                      <option value="KHR">KHR (៛) - Khmer Riel</option>
                    </select>
                  </div>
                </div>

                {/* Notification Toggles */}
                <div style={{ marginBottom: 28 }}>
                  <p style={{ color: '#c9a882', fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Notifications / ការជូនដំណឹង</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      {
                        key: 'telegramNotifications',
                        title: 'Telegram Order Updates',
                        km: 'ដំណឹងដឹកជញ្ជូនតាម Telegram Bot',
                        val: preferences.telegramNotifications,
                      },
                      {
                        key: 'smsNotifications',
                        title: 'SMS Delivery Notifications',
                        km: 'សារជូនដំណឹងពេលអ្នកដឹកជញ្ជូនជិតដល់',
                        val: preferences.smsNotifications,
                      },
                      {
                        key: 'promoEmails',
                        title: 'VIP Promo Offers & Free Gifts',
                        km: 'ការបញ្ចុះតម្លៃពិសេស និងកាដូឥតគិតថ្លៃ',
                        val: preferences.promoEmails,
                      },
                    ].map(n => (
                      <div key={n.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#111009', borderRadius: 12, border: '1px solid #2a2420' }}>
                        <div>
                          <p style={{ fontSize: 13, color: '#f5ede6', fontWeight: 500 }}>{n.title}</p>
                          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 11, color: '#6b5a50' }}>{n.km}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={n.val}
                          onChange={e => setPreferences({ ...preferences, [n.key]: e.target.checked })}
                          style={{ width: 18, height: 18, accentColor: '#c9a882', cursor: 'pointer' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Danger zone / Account actions */}
                <div style={{ background: '#1a1210', border: '1px solid #4a2d2d', borderRadius: 14, padding: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <p style={{ color: '#f08080', fontSize: 13, fontWeight: 700 }}>Danger Zone</p>
                    <p style={{ color: '#6b5a50', fontSize: 11 }}>Log out from all devices or remove account history.</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button type="button" onClick={() => alert('Logged out successfully.')} style={{ background: '#211d19', border: '1px solid #4a2d2d', color: '#f08080', padding: '8px 16px', borderRadius: 8, fontSize: 12, cursor: 'pointer' }}>
                      Log Out 🚪
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn-primary" style={{ fontSize: 13, padding: '10px 24px' }}>
                    Save Preferences ⚙️
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .profile-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
