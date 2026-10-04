'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09', color: '#f5ede6' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(12,10,9,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #2a2420' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #c9a882, #b8936e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#0c0a09' }}>W</div>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#f5ede6', letterSpacing: '-0.5px' }}>WeYoung</span>
          </Link>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Link href="/" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>Home</Link>
            <Link href="/shop" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>Shop</Link>
            <Link href="/profile" style={{ color: '#a89080', fontSize: 14, textDecoration: 'none' }}>Profile</Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px 100px' }}>
        <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ color: '#c9a882', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>
            Our Philosophy · ទស្សនវិស័យរបស់យើង
          </p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontStyle: 'italic', color: '#f5ede6', lineHeight: 1.15, marginBottom: 20 }}>
            WeYoung — វ៉េយ៉ាំង<br />Skincare for Cambodia.
          </h1>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 16, lineHeight: 1.8, maxWidth: 680, margin: '0 auto' }}>
            យើងជឿជាក់ថា ស្បែកស្រស់ស្អាតនិងមានសុខភាពល្អ មិនអាស្រ័យលើអាយុនោះទេ ប៉ុន្តែអាស្រ័យលើការជ្រើសរើសរូបមន្តដែលត្រឹមត្រូវសម្រាប់អាកាសធាតុក្តៅ-សើម។
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 60 }}>
          {[
            {
              icon: '🌿',
              title: '100% Authentic & Safe',
              km: 'ផលិតផលសុទ្ធ ១០០% មានសុវត្ថិភាព',
              desc: 'Every single product in our catalog is authentic, rigorously tested, and non-comedogenic.',
            },
            {
              icon: '☀️',
              title: 'Tropical Weather Proof',
              km: 'ស័ក្តិសមអាកាសធាតុកម្ពុជា',
              desc: 'Lightweight textures, fast absorption, zero white cast, and high sweat resistance.',
            },
            {
              icon: '🛵',
              title: 'Fast Nationwide Delivery',
              km: 'ដឹកជញ្ជូនរហ័សទូទាំងប្រទេស',
              desc: 'Instant delivery in Phnom Penh and 24-48h nationwide via Virak Buntham and J&T.',
            },
          ].map((item, i) => (
            <div key={i} className="card-hover animate-fade-in" style={{ background: '#1a1714', borderRadius: 18, border: '1px solid #2a2420', padding: '28px 22px' }}>
              <p style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</p>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: '#f5ede6', marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", fontSize: 13, color: '#c9a882', marginBottom: 10 }}>{item.km}</p>
              <p style={{ color: '#a89080', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div style={{ background: 'linear-gradient(135deg, #1a1714, #211d19)', border: '1px solid #2a2420', borderRadius: 24, padding: '40px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, color: '#f5ede6', fontStyle: 'italic', marginBottom: 12 }}>Start Your Skincare Journey</h2>
          <p style={{ fontFamily: "'Kantumruy Pro', sans-serif", color: '#a89080', fontSize: 14, marginBottom: 24 }}>ចាប់ផ្តើមថែរក្សាស្បែករបស់អ្នកជាមួយ WeYoung ថ្ងៃនេះ</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Shop All Products →</Link>
            <Link href="/profile" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex' }}>View My Skin Profile</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
