'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { products, wishlist, lang } = useShop();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Title matching Screenshot 20 */}
        <h1 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#2E2620] tracking-tight mb-8">
          Wishlist
        </h1>

        {wishlistedProducts.length === 0 ? (
          <div className="py-24 text-center max-w-sm mx-auto">
            <span className="text-4xl mb-4 block">🤍</span>
            <p className="text-[17px] font-semibold text-[#2E2620] mb-2 font-khmer">
              មិនទាន់មានផលិតផលក្នុងបញ្ជីចូលចិត្ត
            </p>
            <p className="text-[13.5px] text-[#7A7067] mb-6 font-khmer">
              ចុចលើរូបបេះដូងលើផលិតផលណាមួយដើម្បីរក្សាទុកនៅទីនេះ
            </p>
            <Link
              href="/shop"
              className="bg-[#2E2620] text-[#FAF5EE] px-6 py-2.5 rounded-full text-[13.5px] font-medium font-khmer hover:bg-[#3D332B] transition-colors inline-block"
            >
              ស្វែងរកផលិតផល
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
