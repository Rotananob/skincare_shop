'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import ProductCard from '@/components/ProductCard';
import StoryCinema from '@/components/StoryCinema';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@/components/Icons';

export default function HomePage() {
  const { products, lang, t } = useShop();

  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival || p.id === 'p04' || p.id === 'p07').slice(0, 4);

  // Categories matching Screenshot 1 & 2
  const categoriesList = [
    {
      id: 'cleanser',
      title: 'សាប៊ូលាងមុខ',
      enTitle: 'Cleanser',
      image: '/images/92480f01-20c1-46d9-8dfd-3fef5c94a9d0.png',
      href: '/shop?category=cleanser',
    },
    {
      id: 'toner',
      title: 'ទឹកជូតមុខ',
      enTitle: 'Toner',
      image: '/images/b651362e-0879-4c6d-a918-3d61e0c2a1f9.png',
      href: '/shop?category=toner',
    },
    {
      id: 'serum',
      title: 'សេរ៉ូម',
      enTitle: 'Serum',
      image: '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png',
      href: '/shop?category=serum',
    },
    {
      id: 'moisturizer',
      title: 'ក្រែមផ្តល់សំណើម',
      enTitle: 'Moisturizer',
      image: '/images/bebe6db9-1d97-487e-beb7-3599f3af83ef.png',
      href: '/shop?category=moisturizer',
    },
    {
      id: 'essence',
      title: 'អេសេន',
      enTitle: 'Essence',
      image: '/images/519afb53-d143-4187-be40-3ab10c24b9e4.png',
      href: '/shop?category=essence',
    },
    {
      id: 'bodycare',
      title: 'ថែរក្សាស្បែកខ្លួន',
      enTitle: 'Body Care',
      image: '/images/a5d33cf8-2e86-445c-aa61-926be7aa8219.png',
      href: '/shop?category=bodycare',
    },
  ];

  // Skin Concerns matching Screenshot 7
  const concernsList = [
    {
      id: 'acne',
      title: 'ស្បែកមុន',
      desc: 'កាត់បន្ថយមុន និងការរលាក',
      href: '/shop?concern=acne',
    },
    {
      id: 'dryness',
      title: 'ស្បែកស្ងួត',
      desc: 'បន្ថែមសំណើម ជ្រៅជ្រះ',
      href: '/shop?concern=dryness',
    },
    {
      id: 'oiliness',
      title: 'ស្បែកខ្លាញ់',
      desc: 'គ្រប់គ្រងជាតិខ្លាញ់លើស',
      href: '/shop?concern=oiliness',
    },
    {
      id: 'sensitivity',
      title: 'ស្បែកងាយរលាក',
      desc: 'ថែទាំទន់ភ្លន់ ធ្វើឱ្យស្បែកស្ងប់',
      href: '/shop?concern=sensitivity',
    },
  ];

  // Reviews matching Screenshot 11 & 13
  const reviewsList = [
    {
      author: 'Sreymom / ស្រីមុំ',
      location: 'Phnom Penh',
      date: '2026-09-12',
      text: 'ដឹកជញ្ជូនលឿនណាស់ ២ថ្ងៃបានទទួល។ សេរ៉ូមស្រូបលឿន មិនជាប់ស្រេចពេលអាកាសធាតុក្តៅ។ នឹងបញ្ជាទិញម្តងទៀត។',
    },
    {
      author: 'Chanthy / ចន្ធី',
      location: 'Battambang',
      date: '2026-09-02',
      text: 'ស្បែកខ្ញុំងាយរលាកណាស់ ប៉ុន្តែក្រែមនេះស្ងប់ល្អ មិនមានអារម្មណ៍រមាស់ទេ។ ក្រែមទី៣ ដែលខ្ញុំសាក ហើយនេះជាក្រែមល្អបំផុត។',
    },
  ];

  return (
    <div className="bg-[#FAF5EE] min-h-screen">
      
      {/* ── 1. HERO SECTION matching Screenshot 3 & 4 ── */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-end sm:items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png"
            alt="Beautiful Skin Cambodia"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-white w-full">
          <div className="max-w-xl space-y-4">
            
            {/* Eyebrow */}
            <p className="text-[12.5px] uppercase tracking-wider text-[#FAF5EE]/90 font-medium font-khmer">
              {t('hero.eyebrow')}
            </p>

            {/* Headline */}
            <h1 className="font-display text-[32px] sm:text-[48px] lg:text-[54px] font-semibold text-white leading-[1.2] tracking-tight font-khmer">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-[14.5px] sm:text-[16px] text-[#FAF5EE]/85 leading-relaxed font-khmer">
              {t('hero.sub')}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/shop"
                className="bg-[#FFFDF9] !text-[#2E2620] px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-white transition-transform active:scale-95 inline-flex items-center gap-2 font-khmer shadow-sm"
                style={{ color: '#2E2620' }}
              >
                <span style={{ color: '#2E2620' }}>{t('hero.cta')}</span>
                <ArrowRightIcon size={16} />
              </Link>

              <Link
                href="/shop?concern=all"
                className="text-[14px] font-medium !text-white underline underline-offset-4 hover:text-[#FAF5EE]/80 transition-colors font-khmer"
                style={{ color: '#ffffff' }}
              >
                {t('hero.cta2')}
              </Link>
            </div>

            {/* Pills / Badges below buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-2.5 pt-5 text-[11.5px] font-khmer">
              <span className="bg-black/30 backdrop-blur-md border border-white/20 text-[#FAF5EE] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <CheckIcon size={12} className="text-[#D4E6D9]" />
                {t('trust.authentic')}
              </span>
              <span className="bg-black/30 backdrop-blur-md border border-white/20 text-[#FAF5EE] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <CheckIcon size={12} className="text-[#D4E6D9]" />
                {t('trust.delivery')}
              </span>
            </div>

            {/* Scroll indicator matching screenshot */}
            <div className="pt-6 flex items-center gap-2 text-[11.5px] text-white/70 font-khmer">
              <span>រំកិលចុះ</span>
              <span className="inline-block w-4 h-[1px] bg-white/50" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE / TICKER BAR matching Screenshot 1 & 4 ── */}
      <div className="bg-[#261E19] text-[#FAF5EE] py-3 overflow-hidden border-y border-[#3D332B] select-none">
        <div className="animate-marquee flex items-center gap-8 text-[13px] font-medium font-khmer tracking-wide">
          <span>ដឹកជញ្ជូនឥតគិតថ្លៃ សម្រាប់ការទិញចាប់ពី $30 ឡើង</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ដល់គ្រប់ខេត្តទាំង ២៥</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ទូទាត់តាម KHQR</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ផលិតផលថ្មីៗ</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ផលិតផលពិតប្រាកដ ១០០%</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ដឹកជញ្ជូនឥតគិតថ្លៃ សម្រាប់ការទិញចាប់ពី $30 ឡើង</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ដល់គ្រប់ខេត្តទាំង ២៥</span>
          <span className="text-[#A9573B]">✦</span>
          <span>ទូទាត់តាម KHQR</span>
          <span className="text-[#A9573B]">✦</span>
        </div>
      </div>

      {/* ── 3. CATEGORIES SECTION matching Screenshot 1 & 2 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 space-y-1.5">
          <h2 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] tracking-tight font-khmer">
            {t('home.categories')}
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#7A7067] font-khmer">
            {t('home.categoriesSub')}
          </p>
          <div className="pt-1">
            <Link
              href="/shop"
              className="text-[13.5px] font-semibold text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer inline-block"
            >
              {t('shop.clear') ? 'មើលទាំងអស់' : 'មើលទាំងអស់'}
            </Link>
          </div>
        </div>

        {/* 2-column on mobile, 3/6-column on desktop matching screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {categoriesList.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group block rounded-[4px] overflow-hidden border border-[#E7DDD0] bg-[#FFFDF9] hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-[#F1E9DC] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#EFECE6] p-2.5 sm:p-3 text-center transition-colors group-hover:bg-[#E7DDD0]">
                <p className="text-[13px] sm:text-[14px] font-medium text-[#2E2620] font-khmer truncate">
                  {lang === 'km' ? cat.title : cat.enTitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. BEST SELLERS SECTION matching Screenshot 2 ── */}
      <section className="bg-[#FAF5EE] border-t border-[#E7DDD0] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-1.5">
            <h2 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] tracking-tight font-khmer">
              {t('home.best')}
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#7A7067] font-khmer">
              {t('home.bestSub')}
            </p>
            <div className="pt-1">
              <Link
                href="/shop?sort=best"
                className="text-[13.5px] font-semibold text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer inline-block"
              >
                មើលទាំងអស់
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE STORY CINEMA CAROUSEL matching Screenshots 5, 9, 10 ── */}
      <StoryCinema />

      {/* ── 6. OUR STORY SECTION matching Screenshots 8 & 11 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Video / Story Image matching Screenshot 8 */}
          <div className="lg:col-span-6 relative rounded-[4px] overflow-hidden border border-[#E7DDD0] bg-[#F1E9DC]">
            <img
              src="/images/93197771-a19c-4916-98db-316b75cf0682.png"
              alt="Our Story Skincare Cambodia"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Play badge matching Screenshot 8 */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-[12px] font-medium text-[#2E2620] font-khmer">
              <span className="text-[#A9573B]">▶</span>
              <span>វីដេអូ · របៀបថែស្បែក</span>
            </div>
          </div>

          {/* Right: Story Details matching Screenshot 8 & 11 */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[12.5px] font-bold text-[#A9573B] uppercase tracking-wider block font-khmer">
              {t('story.eyebrow')}
            </span>

            <h2 className="font-display text-[26px] sm:text-[36px] font-semibold text-[#2E2620] leading-snug tracking-tight font-khmer">
              {t('story.title')}
            </h2>

            <p className="text-[14.5px] text-[#7A7067] leading-relaxed font-khmer">
              {t('story.body')}
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer"
              >
                {t('story.cta')}
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. STATS GRID matching Screenshot 6 ── */}
      <section className="bg-[#261E19] text-[#FAF5EE] py-12 border-y border-[#3D332B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 sm:divide-x divide-[#3D332B]">
            <div className="p-2">
              <p className="font-display text-[36px] sm:text-[44px] font-bold text-white">25</p>
              <p className="text-[13px] text-[#FAF5EE]/75 mt-1 font-khmer">{t('stat.provinces')}</p>
            </div>
            <div className="p-2">
              <p className="font-display text-[36px] sm:text-[44px] font-bold text-white">48h</p>
              <p className="text-[13px] text-[#FAF5EE]/75 mt-1 font-khmer">{t('stat.delivery')}</p>
            </div>
            <div className="p-2">
              <p className="font-display text-[36px] sm:text-[44px] font-bold text-white">100%</p>
              <p className="text-[13px] text-[#FAF5EE]/75 mt-1 font-khmer">{t('trust.authentic')}</p>
            </div>
            <div className="p-2">
              <p className="font-display text-[36px] sm:text-[44px] font-bold text-white">10k+</p>
              <p className="text-[13px] text-[#FAF5EE]/75 mt-1 font-khmer">{t('stat.customers')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. NEW ARRIVALS matching Screenshot 6 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 space-y-1.5">
          <h2 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] tracking-tight font-khmer">
            {t('home.new') || 'ផលិតផលថ្មី'}
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#7A7067] font-khmer">
            {t('home.newSub') || 'ទើបមកដល់ហាងរបស់យើង។'}
          </p>
          <div className="pt-1">
            <Link
              href="/shop?sort=new"
              className="text-[13.5px] font-semibold text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer inline-block"
            >
              មើលទាំងអស់
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── 9. SKIN CONCERNS matching Screenshot 7 ── */}
      <section className="bg-[#FAF5EE] border-t border-[#E7DDD0] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-1.5">
            <h2 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] tracking-tight font-khmer">
              {t('home.concerns')}
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#7A7067] font-khmer">
              {t('home.concernsSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {concernsList.map((c) => (
              <div
                key={c.id}
                className="bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] p-6 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-[#2E2620] mb-2 font-khmer">
                    {c.title}
                  </h3>
                  <p className="text-[13.5px] text-[#7A7067] leading-relaxed font-khmer">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer"
                  >
                    មើលទាំងអស់
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. EDITORIAL QUOTE BANNER matching Screenshot 7 ── */}
      <section className="relative w-full min-h-[400px] sm:min-h-[480px] overflow-hidden flex items-center justify-center my-6">
        <img
          src="/images/aa0d74a7-1c15-4d5f-9d37-455a58d44910.png"
          alt="Quote Skincare Cambodia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-3">
          <p className="text-[12px] uppercase tracking-widest text-[#FAF5EE]/80 font-bold font-khmer">
            {t('band.eyebrow')}
          </p>
          <h2 className="font-display text-[26px] sm:text-[38px] font-semibold leading-snug tracking-tight font-khmer">
            {t('band.quote')}
          </h2>
        </div>
      </section>

      {/* ── 11. REVIEWS SECTION matching Screenshot 11 & 13 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-10 text-center space-y-2">
          <h2 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] tracking-tight font-khmer">
            {t('home.reviews')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviewsList.map((rev, i) => (
            <div
              key={i}
              className="bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] p-6 sm:p-7 space-y-4 shadow-sm"
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} size={15} filled={true} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#2E2620] leading-relaxed font-khmer italic">
                “{rev.text}”
              </p>

              {/* Author & Location */}
              <div className="pt-2 border-t border-[#F1E9DC]">
                <p className="text-[14px] font-bold text-[#2E2620] font-khmer">
                  {rev.author}
                </p>
                <p className="text-[12px] text-[#8A8077] mt-0.5">
                  {rev.location} · {rev.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. COMMUNITY / INSTAGRAM GRID matching Screenshot 13 ── */}
      <section className="bg-[#FAF5EE] border-t border-[#E7DDD0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 space-y-1">
            <h2 className="font-display text-[22px] sm:text-[28px] font-semibold text-[#2E2620] font-khmer">
              រួមដំណើរជាមួយយើង
            </h2>
            <p className="text-[14px] font-medium text-[#A9573B]">
              @weyoung.skin
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {[
              '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png',
              '/images/92480f01-20c1-46d9-8dfd-3fef5c94a9d0.png',
              '/images/b651362e-0879-4c6d-a918-3d61e0c2a1f9.png',
              '/images/d7d2d2ae-10dd-485a-b6d6-34776640c893.png',
              '/images/bebe6db9-1d97-487e-beb7-3599f3af83ef.png',
              '/images/abe00f01-b498-4ced-9d32-8405c0db4c17.png',
            ].map((img, idx) => (
              <div key={idx} className="aspect-square bg-[#F1E9DC] rounded-[2px] overflow-hidden group">
                <img
                  src={img}
                  alt="Community photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
