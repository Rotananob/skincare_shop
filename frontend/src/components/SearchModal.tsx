'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { SearchIcon, XIcon, StarIcon } from '@/components/Icons';

export default function SearchModal() {
  const { products, isSearchOpen, setIsSearchOpen, formatPrice, lang } = useShop();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: lang === 'km' ? 'ទាំងអស់' : 'All' },
    { id: 'cleanser', label: lang === 'km' ? 'សាប៊ូលាងមុខ' : 'Cleanser' },
    { id: 'toner', label: lang === 'km' ? 'ទឹកជូតមុខ' : 'Toner' },
    { id: 'serum', label: lang === 'km' ? 'សេរ៉ូម' : 'Serum' },
    { id: 'moisturizer', label: lang === 'km' ? 'ក្រែមផ្តល់សំណើម' : 'Moisturizer' },
    { id: 'sunscreen', label: lang === 'km' ? 'ឡេការពារកម្តៅថ្ងៃ' : 'Sunscreen' },
  ];

  const results = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.en.toLowerCase().includes(q) ||
          p.name.km.includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, query, activeCategory]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-xl shadow-2xl border border-[#E7DDD0] overflow-hidden z-10 animate-scale-up flex flex-col max-h-[85vh]">
        
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-[#E7DDD0] flex items-center gap-3 bg-[#FFFDF9]">
          <SearchIcon size={20} className="text-[#8A8077] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'km' ? 'ស្វែងរកផលិតផល ឬប្រេន...' : 'Search products or brand...'}
            className="w-full bg-transparent text-[15.5px] text-[#2E2620] placeholder-[#8A8077] outline-none font-khmer"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#8A8077] hover:text-[#2E2620] p-1 text-[12px] font-bold"
            >
              សម្អាត
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#7A7067] hover:text-[#2E2620] transition-colors rounded-full"
            aria-label="Close search"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Quick Category Filters */}
        <div className="px-4 py-2.5 bg-[#FAF5EE] border-b border-[#E7DDD0] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors font-khmer ${
                activeCategory === c.id
                  ? 'bg-[#2E2620] text-[#FAF5EE]'
                  : 'bg-[#FFFDF9] border border-[#E7DDD0] text-[#7A7067] hover:border-[#2E2620]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {results.length === 0 ? (
            <div className="py-12 text-center text-[#7A7067] font-khmer">
              <p className="text-[15px] font-medium text-[#2E2620] mb-1">
                រកមិនឃើញផលិតផលត្រូវនឹង &quot;{query}&quot;
              </p>
              <p className="text-[13px]">សូមព្យាយាមវាយពាក្យគន្លឹះផ្សេងទៀត</p>
            </div>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                onClick={() => setIsSearchOpen(false)}
                className="flex items-center gap-3.5 p-2.5 rounded-lg bg-[#FFFDF9] hover:bg-[#F5EFEB] border border-[#E7DDD0] transition-colors group"
              >
                <div className="w-14 h-14 bg-[#F1E9DC] rounded-[4px] overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#8A8077] tracking-wider block">
                    {product.brand}
                  </span>
                  <h4 className="text-[14px] font-medium text-[#2E2620] font-khmer truncate group-hover:text-[#A9573B] transition-colors">
                    {product.name[lang] || product.name.km}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex items-center">
                      <StarIcon size={11} filled={true} />
                    </div>
                    <span className="text-[11px] text-[#8A8077]">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[14.5px] font-bold text-[#2E2620] block">
                    {formatPrice(product.discountPrice ?? product.price)}
                  </span>
                  {product.discountPrice && (
                    <span className="text-[11.5px] text-[#9CA3AF] line-through block">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#FAF5EE] border-t border-[#E7DDD0] text-center text-[12px] text-[#8A8077] font-khmer">
          បង្ហាញ {results.length} ផលិតផល · ចុចលើផលិតផលដើម្បីមើលលម្អិត
        </div>

      </div>
    </div>
  );
}
