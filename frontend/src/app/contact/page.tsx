'use client';
import React from 'react';
import { useShop } from '@/context/ShopContext';

export default function ContactPage() {
  const { t } = useShop();

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16 font-khmer">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        
        <h1 className="font-display text-[32px] sm:text-[42px] font-semibold text-[#2E2620] tracking-tight">
          {t('footer.contact') || 'ទំនាក់ទំនង'}
        </h1>

        <p className="text-[15px] text-[#7A7067]">
          ប្រសិនបើអ្នកមានចម្ងល់អំពីផលិតផល ឬការបញ្ជាទិញ សូមទាក់ទងមកកាន់យើងតាមមធ្យោបាយខាងក្រោម៖
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px]">
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-semibold text-[#2E2620]">ទូរស័ព្ទ / Phone</p>
              <p className="text-[14px] text-[#7A7067]">012 345 678 / 098 765 432</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px]">
            <span className="text-2xl">✈️</span>
            <div>
              <p className="font-semibold text-[#2E2620]">Telegram</p>
              <p className="text-[14px] text-[#7A7067]">@weyoungskin</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px]">
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-[#2E2620]">Facebook Messenger</p>
              <p className="text-[14px] text-[#7A7067]">WeYoung Skin</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px]">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-[#2E2620]">អាសយដ្ឋាន</p>
              <p className="text-[14px] text-[#7A7067]">ផ្ទះលេខ ៤៥ ផ្លូវ ២៧១, រាជធានីភ្នំពេញ</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
