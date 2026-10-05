'use client';
import React from 'react';
import Link from 'next/link';
import { useShop, Product } from '@/context/ShopContext';
import { HeartIcon, PlusIcon, StarIcon } from '@/components/Icons';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted, formatPrice, lang } = useShop();
  const wishlisted = isWishlisted(product.id);

  const discountPercent = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col bg-[#FFFDF9] rounded-[4px] border border-[#E7DDD0] overflow-hidden transition-all duration-300 hover:shadow-md">
      
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/5] bg-[#F1E9DC] overflow-hidden">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name[lang] || product.name.en}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Top Left: Discount badge matching screenshot */}
        {discountPercent > 0 && (
          <div className="absolute top-2.5 left-2.5 bg-[#A9573B] text-white text-[11px] font-bold px-2 py-0.5 rounded-[2px] shadow-sm">
            -{discountPercent}%
          </div>
        )}

        {/* Top Right: Wishlist Heart button in white circle matching screenshot */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center transition-transform active:scale-90 ${
            wishlisted ? 'text-[#A9573B]' : 'text-[#7A7067] hover:text-[#2E2620]'
          }`}
          aria-label="Save to wishlist"
        >
          <HeartIcon size={16} filled={wishlisted} />
        </button>
      </div>

      {/* Product Information */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8077] font-semibold block mb-1">
            {product.brand}
          </span>

          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-[13.5px] sm:text-[14.5px] font-medium text-[#2E2620] leading-snug line-clamp-2 hover:text-[#A9573B] transition-colors font-khmer">
              {product.name[lang] || product.name.km}
            </h3>
          </Link>

          {/* Rating stars matching screenshot */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={12} filled={i < Math.floor(product.rating)} />
              ))}
            </div>
            <span className="text-[11px] text-[#8A8077] ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Price and Plus Button Row */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F1E9DC]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] sm:text-[16px] font-bold text-[#2E2620]">
              {formatPrice(product.discountPrice ?? product.price)}
            </span>
            {product.discountPrice && (
              <span className="text-[12px] text-[#9CA3AF] line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Plus Add-to-Cart button in circle matching screenshot */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-8 h-8 rounded-full border border-[#E7DDD0] flex items-center justify-center text-[#2E2620] hover:bg-[#2E2620] hover:text-[#FAF5EE] hover:border-[#2E2620] transition-all active:scale-95 bg-[#FFFDF9]"
            aria-label="Add to cart"
          >
            <PlusIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
