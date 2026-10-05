'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { XIcon, PlusIcon, MinusIcon } from '@/components/Icons';

export default function CartDrawer() {
  const router = useRouter();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQty,
    cartCount,
    cartSubtotal,
    freeDeliveryThreshold,
    freeDeliveryRemaining,
    freeDeliveryProgress,
    formatPrice,
    t,
    lang,
  } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF5EE] h-full shadow-2xl flex flex-col z-10 transition-transform">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E7DDD0] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h2 className="font-display text-[20px] font-semibold text-[#2E2620]">
              {t('cart.title')}
            </h2>
            <span className="text-[13px] text-[#7A7067] font-medium font-khmer">
              {cartCount} {t('cart.items') || 'ផលិតផល'}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#7A7067] hover:text-[#2E2620] transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Banner */}
        <div className="bg-[#FAF5EE] px-4 py-3 border-b border-[#E7DDD0]">
          {cartSubtotal >= freeDeliveryThreshold ? (
            <p className="text-[13px] font-medium text-[#2E4B37] text-center font-khmer">
              🎉 {t('cart.freeDone') || 'អ្នកទទួលបានការដឹកជញ្ជូនឥតគិតថ្លៃ!'}
            </p>
          ) : (
            <div>
              <p className="text-[12.5px] text-[#7A7067] mb-2 font-khmer">
                {lang === 'km' ? (
                  <>បន្ថែម <span className="font-semibold text-[#A9573B]">{formatPrice(freeDeliveryRemaining)}</span> ទៀត ដើម្បីទទួលបានដឹកជញ្ជូនឥតគិតថ្លៃ</>
                ) : (
                  <>Add <span className="font-semibold text-[#A9573B]">{formatPrice(freeDeliveryRemaining)}</span> more for free delivery</>
                )}
              </p>
              <div className="w-full bg-[#E7DDD0] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#2E4B37] h-full rounded-full transition-all duration-300"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center">
              <span className="text-4xl mb-3">🌿</span>
              <p className="text-[16px] font-medium text-[#2E2620] mb-1 font-khmer">
                {t('cart.empty')}
              </p>
              <p className="text-[13px] text-[#7A7067] mb-6 font-khmer">
                {t('cart.emptySub') || 'បន្ថែមផលិតផលដើម្បីចាប់ផ្តើម'}
              </p>
              <Link
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#2E2620] text-[#FAF5EE] text-[13.5px] font-medium px-6 py-2.5 rounded-full hover:bg-[#3D332B] transition-colors font-khmer"
              >
                {t('cart.emptyCta') || 'មើលផលិតផល'}
              </Link>
            </div>
          ) : (
            cart.map(({ product, qty, size }) => (
              <div
                key={`${product.id}-${size}`}
                className="flex gap-3.5 pb-4 border-b border-[#E7DDD0] relative"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-20 bg-[#F1E9DC] rounded-[4px] overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between pr-5">
                      <div>
                        <span className="text-[10.5px] uppercase tracking-wider text-[#8A8077] font-semibold">
                          {product.brand}
                        </span>
                        <h4 className="text-[14px] font-medium text-[#2E2620] leading-snug font-khmer">
                          {product.name[lang]}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-[#8A8077] hover:text-[#A9573B] p-1 -mr-1"
                        aria-label="Remove item"
                      >
                        <XIcon size={16} />
                      </button>
                    </div>
                    {size && (
                      <span className="text-[12px] text-[#7A7067] mt-0.5 inline-block">
                        {size}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Qty button pill */}
                    <div className="flex items-center border border-[#E7DDD0] rounded-sm bg-[#FFFDF9] overflow-hidden">
                      <button
                        onClick={() => updateQty(product.id, qty - 1)}
                        className="px-2 py-1 text-[#7A7067] hover:bg-[#F1E9DC] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <MinusIcon size={13} />
                      </button>
                      <span className="px-2.5 text-[12.5px] font-semibold text-[#2E2620]">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQty(product.id, qty + 1)}
                        className="px-2 py-1 text-[#7A7067] hover:bg-[#F1E9DC] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-[15px] font-semibold text-[#2E2620]">
                      {formatPrice((product.discountPrice ?? product.price) * qty)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#FAF5EE] border-t border-[#E7DDD0] space-y-3">
            <div className="flex items-center justify-between text-[15px]">
              <span className="text-[#7A7067] font-khmer">{t('cart.subtotal') || 'សរុប'}</span>
              <span className="font-semibold text-[#2E2620] text-[18px]">
                {formatPrice(cartSubtotal)}
              </span>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                router.push('/checkout');
              }}
              className="w-full bg-[#2E2620] text-[#FAF5EE] py-3.5 rounded-full font-semibold text-[14px] hover:bg-[#3D332B] transition-transform active:scale-[0.99] font-khmer"
            >
              {t('cart.checkout') || 'បន្តទៅ Checkout'}
            </button>

            <button
              onClick={() => {
                setIsCartOpen(false);
                router.push('/shop');
              }}
              className="w-full block text-center text-[12.5px] font-medium text-[#7A7067] hover:text-[#2E2620] transition-colors font-khmer"
            >
              {t('cart.viewCart') || 'មើលកន្ត្រក'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
