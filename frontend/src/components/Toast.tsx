'use client';
import React from 'react';
import { useShop } from '@/context/ShopContext';
import { CheckIcon, XIcon, ShoppingBagIcon, HeartIcon } from '@/components/Icons';

export default function Toast() {
  const { toast, dismissToast, setIsCartOpen, lang } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[92%] sm:w-auto animate-toast pointer-events-auto">
      <div className="bg-[#2E2620] text-[#FAF5EE] rounded-full shadow-2xl p-2 sm:p-2.5 pr-4 flex items-center gap-3 border border-[#4A3D34]">
        
        {/* Thumbnail or Icon */}
        {toast.image ? (
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FAF5EE] shrink-0 border border-white/20">
            <img src={toast.image} alt="" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-full bg-[#A9573B] flex items-center justify-center shrink-0 text-white">
            {toast.type === 'cart' ? (
              <ShoppingBagIcon size={16} />
            ) : toast.type === 'wishlist' ? (
              <HeartIcon size={16} filled={true} />
            ) : (
              <CheckIcon size={16} />
            )}
          </div>
        )}

        {/* Text */}
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-[13px] font-semibold font-khmer leading-tight">
            {toast.message}
          </p>
          {toast.subMessage && (
            <p className="text-[11.5px] text-[#FAF5EE]/70 truncate font-khmer mt-0.5">
              {toast.subMessage}
            </p>
          )}
        </div>

        {/* Action Button for Cart */}
        {toast.type === 'cart' && (
          <button
            onClick={() => {
              dismissToast();
              setIsCartOpen(true);
            }}
            className="text-[12px] font-semibold text-[#FAF5EE] bg-[#A9573B] hover:bg-[#B86244] px-3 py-1.5 rounded-full transition-colors font-khmer shrink-0"
          >
            {lang === 'km' ? 'កន្ត្រក' : 'View'}
          </button>
        )}

        {/* Dismiss Button */}
        <button
          onClick={dismissToast}
          className="p-1 text-[#FAF5EE]/50 hover:text-[#FAF5EE] transition-colors"
          aria-label="Dismiss"
        >
          <XIcon size={14} />
        </button>

      </div>
    </div>
  );
}
