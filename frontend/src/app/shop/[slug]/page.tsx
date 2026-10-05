'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { useShop, Product } from '@/context/ShopContext';
import ProductCard from '@/components/ProductCard';
import { StarIcon, PlusIcon, MinusIcon, HeartIcon, CheckIcon } from '@/components/Icons';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { products, addToCart, toggleWishlist, isWishlisted, formatPrice, lang } = useShop();

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');
  const [activeTab, setActiveTab] = useState<'desc' | 'benefits' | 'ingredients' | 'howTo'>('desc');

  const wishlisted = isWishlisted(product.id);
  const price = product.discountPrice ?? product.price;
  const discountPercent = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12.5px] text-[#8A8077] mb-8 font-khmer">
          <Link href="/" className="hover:text-[#2E2620]">ទំព័រដើម</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#2E2620]">ផលិតផល</Link>
          <span>/</span>
          <span className="text-[#2E2620] truncate">{product.name[lang] || product.name.km}</span>
        </nav>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square sm:aspect-[4/5] bg-[#F1E9DC] rounded-[4px] border border-[#E7DDD0] overflow-hidden">
              <img
                src={product.image}
                alt={product.name[lang] || product.name.en}
                className="w-full h-full object-cover"
              />

              {discountPercent > 0 && (
                <div className="absolute top-4 left-4 bg-[#A9573B] text-white text-[12px] font-bold px-2.5 py-1 rounded-[2px] shadow-sm">
                  -{discountPercent}%
                </div>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center transition-transform active:scale-90 ${
                  wishlisted ? 'text-[#A9573B]' : 'text-[#7A7067] hover:text-[#2E2620]'
                }`}
                aria-label="Wishlist"
              >
                <HeartIcon size={20} filled={wishlisted} />
              </button>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Brand & Title */}
            <div>
              <span className="text-[11.5px] uppercase tracking-wider text-[#8A8077] font-semibold block mb-1">
                {product.brand}
              </span>

              <h1 className="font-display text-[26px] sm:text-[34px] font-semibold text-[#2E2620] leading-snug tracking-tight font-khmer">
                {product.name[lang] || product.name.km}
              </h1>

              {product.name.en && (
                <p className="text-[15px] text-[#7A7067] italic font-serif mt-1">
                  {product.name.en}
                </p>
              )}

              {product.tagline && (
                <p className="text-[14px] text-[#A9573B] mt-2 font-khmer">
                  {product.tagline[lang] || product.tagline.km}
                </p>
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} filled={i < Math.floor(product.rating)} />
                ))}
              </div>
              <span className="text-[13.5px] font-semibold text-[#2E2620] ml-1">
                {product.rating}
              </span>
              <span className="text-[13px] text-[#8A8077]">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-display text-[28px] sm:text-[34px] font-bold text-[#2E2620]">
                {formatPrice(price)}
              </span>
              {product.discountPrice && (
                <span className="text-[18px] text-[#9CA3AF] line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Size options */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-[13px] font-bold text-[#8A8077] uppercase tracking-wider block font-khmer">
                  ទំហំ (Size): <span className="text-[#2E2620]">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 rounded-sm text-[13px] font-medium transition-colors border ${
                        selectedSize === s
                          ? 'border-[#2E2620] bg-[#2E2620] text-[#FAF5EE]'
                          : 'border-[#E7DDD0] bg-[#FFFDF9] text-[#2E2620] hover:border-[#2E2620]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 pt-4">
              {/* Qty pill */}
              <div className="flex items-center border border-[#E7DDD0] rounded-sm bg-[#FFFDF9] h-12">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3.5 h-full text-[#7A7067] hover:bg-[#F1E9DC] transition-colors"
                >
                  <MinusIcon size={16} />
                </button>
                <span className="px-4 text-[15px] font-semibold text-[#2E2620]">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3.5 h-full text-[#7A7067] hover:bg-[#F1E9DC] transition-colors"
                >
                  <PlusIcon size={16} />
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(product, qty, selectedSize)}
                className="flex-1 h-12 bg-[#2E2620] text-[#FAF5EE] rounded-full font-semibold text-[14px] hover:bg-[#3D332B] transition-transform active:scale-[0.99] font-khmer shadow-sm"
              >
                + បន្ថែមទៅកន្ត្រក · {formatPrice(price * qty)}
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-[#E7DDD0] grid grid-cols-2 gap-3 text-[12.5px] text-[#7A7067] font-khmer">
              <span className="flex items-center gap-1.5">
                <CheckIcon size={14} className="text-[#2E4B37]" />
                ផលិតផលសុទ្ធ ១០០%
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon size={14} className="text-[#2E4B37]" />
                ដឹកជញ្ជូន ២៤-៤៨ ម៉ោង
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon size={14} className="text-[#2E4B37]" />
                ទូទាត់តាម KHQR / ABA
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon size={14} className="text-[#2E4B37]" />
                បង់ប្រាក់ពេលទទួលទំនិញ
              </span>
            </div>

          </div>

        </div>

        {/* Tabs Section matching website */}
        <div className="mt-16 sm:mt-24">
          <div className="flex border-b border-[#E7DDD0] gap-8 font-khmer text-[14.5px] overflow-x-auto">
            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'desc'
                  ? 'border-[#A9573B] text-[#2E2620]'
                  : 'border-transparent text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              ការពិពណ៌នា
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`pb-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'benefits'
                  ? 'border-[#A9573B] text-[#2E2620]'
                  : 'border-transparent text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              អត្ថប្រយោជន៍
            </button>
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`pb-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'ingredients'
                  ? 'border-[#A9573B] text-[#2E2620]'
                  : 'border-transparent text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              គ្រឿងផ្សំ
            </button>
            <button
              onClick={() => setActiveTab('howTo')}
              className={`pb-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'howTo'
                  ? 'border-[#A9573B] text-[#2E2620]'
                  : 'border-transparent text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              របៀបប្រើ
            </button>
          </div>

          <div className="py-8 max-w-3xl font-khmer leading-relaxed text-[15px] text-[#2E2620]">
            {activeTab === 'desc' && (
              <div className="space-y-4">
                <p>{product.description[lang] || product.description.km}</p>
                {product.description.en && (
                  <p className="text-[#7A7067] italic font-sans text-[14px]">
                    {product.description.en}
                  </p>
                )}
              </div>
            )}

            {activeTab === 'benefits' && (
              <ul className="space-y-3">
                {product.benefits && product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#A9573B] font-bold">✓</span>
                    <span>{b[lang] || b.km}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-2">
                <p className="font-semibold text-[#8A8077] text-[13px] uppercase">Key Ingredients</p>
                <p>{product.ingredients[lang] || product.ingredients.km}</p>
              </div>
            )}

            {activeTab === 'howTo' && (
              <div className="space-y-2">
                <p>{product.howToUse[lang] || product.howToUse.km}</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 pt-16 border-t border-[#E7DDD0]">
            <h2 className="font-display text-[24px] sm:text-[30px] font-semibold text-[#2E2620] mb-8 font-khmer">
              ផលិតផលស្រដៀងគ្នា
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
