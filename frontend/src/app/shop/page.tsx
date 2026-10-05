'use client';
import React, { useState, useMemo } from 'react';
import { useShop, Product } from '@/context/ShopContext';
import ProductCard from '@/components/ProductCard';
import { SlidersIcon, ChevronDownIcon, XIcon, SearchIcon } from '@/components/Icons';

export default function ShopPage() {
  const { products, lang, t } = useShop();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedConcern, setSelectedConcern] = useState<string>('all');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('featured');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: lang === 'km' ? 'ទាំងអស់' : 'All' },
    { id: 'cleanser', label: lang === 'km' ? 'សាប៊ូលាងមុខ' : 'Cleanser' },
    { id: 'toner', label: lang === 'km' ? 'ទឹកជូតមុខ' : 'Toner' },
    { id: 'serum', label: lang === 'km' ? 'សេរ៉ូម' : 'Serum' },
    { id: 'moisturizer', label: lang === 'km' ? 'ក្រែមផ្តល់សំណើម' : 'Moisturizer' },
    { id: 'sunscreen', label: lang === 'km' ? 'ឡេការពារកម្តៅថ្ងៃ' : 'Sunscreen' },
    { id: 'mask', label: lang === 'km' ? 'ម៉ាស' : 'Mask' },
    { id: 'essence', label: lang === 'km' ? 'អេសេន' : 'Essence' },
    { id: 'bodycare', label: lang === 'km' ? 'ថែរក្សាស្បែកខ្លួន' : 'Body Care' },
  ];

  const concerns = [
    { id: 'all', label: lang === 'km' ? 'ទាំងអស់' : 'All' },
    { id: 'acne', label: lang === 'km' ? 'ស្បែកមុន' : 'Acne' },
    { id: 'dryness', label: lang === 'km' ? 'ស្បែកស្ងួត' : 'Dryness' },
    { id: 'oiliness', label: lang === 'km' ? 'ស្បែកខ្លាញ់' : 'Oiliness' },
    { id: 'sensitivity', label: lang === 'km' ? 'ស្បែកងាយរលាក' : 'Sensitivity' },
    { id: 'dullness', label: lang === 'km' ? 'ស្បែកស្រអាប់' : 'Dullness' },
  ];

  const skinTypes = [
    { id: 'all', label: lang === 'km' ? 'ទាំងអស់' : 'All' },
    { id: 'normal', label: lang === 'km' ? 'ធម្មតា' : 'Normal' },
    { id: 'dry', label: lang === 'km' ? 'ស្ងួត' : 'Dry' },
    { id: 'oily', label: lang === 'km' ? 'ខ្លាញ់' : 'Oily' },
    { id: 'combination', label: lang === 'km' ? 'ចម្រុះ' : 'Combination' },
    { id: 'sensitive', label: lang === 'km' ? 'ងាយរលាក' : 'Sensitive' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.en.toLowerCase().includes(q) ||
          p.name.km.includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedConcern !== 'all') {
      list = list.filter((p) => p.concerns && p.concerns.includes(selectedConcern));
    }

    if (selectedSkinType !== 'all') {
      list = list.filter((p) => p.skinTypes && p.skinTypes.includes(selectedSkinType));
    }

    switch (sortOption) {
      case 'priceAsc':
        list.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
        break;
      case 'priceDesc':
        list.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
        break;
      case 'new':
        list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case 'best':
        list.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured default
        break;
    }

    return list;
  }, [products, search, selectedCategory, selectedConcern, selectedSkinType, sortOption]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedConcern('all');
    setSelectedSkinType('all');
    setSearch('');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedConcern !== 'all' ||
    selectedSkinType !== 'all' ||
    search.trim() !== '';

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Top Controls matching Screenshot 21 */}
        <div className="flex items-center justify-between gap-3 mb-8">
          
          {/* Filters Button */}
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center gap-2 border border-[#E7DDD0] bg-[#FFFDF9] px-4 py-2.5 rounded-full text-[13.5px] font-medium text-[#2E2620] hover:border-[#A9573B] transition-colors shadow-sm font-khmer"
          >
            <SlidersIcon size={16} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#A9573B]" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none border border-[#E7DDD0] bg-[#FFFDF9] pl-4 pr-9 py-2.5 rounded-full text-[13.5px] font-medium text-[#2E2620] cursor-pointer hover:border-[#A9573B] transition-colors shadow-sm outline-none font-khmer"
            >
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="best">Best Sellers</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A7067]">
              <ChevronDownIcon size={14} />
            </div>
          </div>
        </div>

        {/* Product Grid matching Screenshot 21 (2 columns on mobile) */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[18px] font-semibold text-[#2E2620] mb-2 font-khmer">
              រកមិនឃើញផលិតផល
            </p>
            <p className="text-[13.5px] text-[#7A7067] mb-6 font-khmer">
              សូមព្យាយាមជ្រើសរើសតម្រងផ្សេងទៀត
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#2E2620] text-[#FAF5EE] text-[13.5px] px-6 py-2.5 rounded-full font-medium font-khmer"
            >
              សម្អាតតម្រង
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>

      {/* Filter Modal / Drawer */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={() => setIsFilterModalOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-[#FAF5EE] h-full shadow-2xl flex flex-col z-10">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E7DDD0] flex items-center justify-between">
              <h3 className="font-display text-[18px] font-semibold text-[#2E2620] font-khmer">
                តម្រងផលិតផល (Filters)
              </h3>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="p-1 text-[#7A7067] hover:text-[#2E2620]"
              >
                <XIcon size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* Search input */}
              <div>
                <label className="text-[12.5px] font-bold text-[#8A8077] uppercase tracking-wider block mb-2 font-khmer">
                  ស្វែងរក (Search)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ឈ្មោះផលិតផល..."
                    className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] py-2.5 pl-9 pr-3 text-[13.5px] text-[#2E2620] focus:border-[#A9573B] outline-none font-khmer"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8077]">
                    <SearchIcon size={16} />
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="text-[12.5px] font-bold text-[#8A8077] uppercase tracking-wider block mb-2 font-khmer">
                  ប្រភេទផលិតផល (Category)
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`px-3 py-1.5 rounded-full text-[12.5px] font-medium font-khmer transition-colors ${
                        selectedCategory === c.id
                          ? 'bg-[#2E2620] text-[#FAF5EE]'
                          : 'bg-[#FFFDF9] border border-[#E7DDD0] text-[#7A7067] hover:border-[#2E2620]'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Concerns */}
              <div>
                <label className="text-[12.5px] font-bold text-[#8A8077] uppercase tracking-wider block mb-2 font-khmer">
                  បញ្ហាស្បែក (Skin Concern)
                </label>
                <div className="flex flex-wrap gap-2">
                  {concerns.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedConcern(c.id)}
                      className={`px-3 py-1.5 rounded-full text-[12.5px] font-medium font-khmer transition-colors ${
                        selectedConcern === c.id
                          ? 'bg-[#2E2620] text-[#FAF5EE]'
                          : 'bg-[#FFFDF9] border border-[#E7DDD0] text-[#7A7067] hover:border-[#2E2620]'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Type */}
              <div>
                <label className="text-[12.5px] font-bold text-[#8A8077] uppercase tracking-wider block mb-2 font-khmer">
                  ប្រភេទស្បែក (Skin Type)
                </label>
                <div className="flex flex-wrap gap-2">
                  {skinTypes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSkinType(s.id)}
                      className={`px-3 py-1.5 rounded-full text-[12.5px] font-medium font-khmer transition-colors ${
                        selectedSkinType === s.id
                          ? 'bg-[#2E2620] text-[#FAF5EE]'
                          : 'bg-[#FFFDF9] border border-[#E7DDD0] text-[#7A7067] hover:border-[#2E2620]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#E7DDD0] flex items-center gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-[#E7DDD0] rounded-full text-[13.5px] font-medium text-[#7A7067] hover:text-[#2E2620] font-khmer"
              >
                សម្អាតទាំងអស់
              </button>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="flex-1 py-3 bg-[#2E2620] text-[#FAF5EE] rounded-full text-[13.5px] font-semibold hover:bg-[#3D332B] font-khmer"
              >
                អនុវត្ត
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
