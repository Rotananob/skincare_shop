'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

export default function AboutPage() {
  const { t } = useShop();

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16 font-khmer">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        
        <h1 className="font-display text-[32px] sm:text-[42px] font-semibold text-[#2E2620] tracking-tight">
          {t('about.title') || 'អំពី WeYoung Skin'}
        </h1>

        <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#E7DDD0] bg-[#F1E9DC]">
          <img
            src="/images/93197771-a19c-4916-98db-316b75cf0682.png"
            alt="About WeYoung Skin"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 text-[15.5px] leading-relaxed text-[#2E2620]">
          <p>
            {t('about.p1') ||
              'យើងចាប់ផ្តើមក្នុងឆ្នាំ ២០២៣ នៅភ្នំពេញ ជាមួយគំនិតសាមញ្ញមួយ៖ នាំផលិតផលថែស្បែកពិតប្រាកដ ដែលបានសាកល្បងរួច មកឱ្យអតិថិជនកម្ពុជា ក្នុងតម្លៃសមរម្យ។'}
          </p>
          <p>
            {t('about.p2') ||
              'រាល់ផលិតផលក្នុងហាងរបស់យើង ត្រូវបានក្រុមការងារសាកល្បងប្រើប្រាស់យ៉ាងតិច ៤ សប្តាហ៍ ក្នុងអាកាសធាតុក្តៅសើមរបស់កម្ពុជា មុនពេលយើងសម្រេចចិត្តនាំចូល។'}
          </p>
        </div>

        <div className="pt-6 border-t border-[#E7DDD0] flex items-center justify-between">
          <Link
            href="/shop"
            className="bg-[#2E2620] text-[#FAF5EE] px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-[#3D332B] transition-colors"
          >
            មើលផលិតផលរបស់យើង
          </Link>
          <Link
            href="/contact"
            className="text-[14px] font-semibold text-[#A9573B] hover:underline"
          >
            ទំនាក់ទំនងយើង →
          </Link>
        </div>

      </div>
    </div>
  );
}
