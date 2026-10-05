'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { HouseIcon, StoreIcon, ShoppingBagIcon, HeartIcon, UserIcon } from '@/components/Icons';

export default function MobileNav() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, t } = useShop();

  const navItems = [
    { label: t('nav.home'), href: '/', icon: HouseIcon, isCart: false },
    { label: t('nav.shop'), href: '/shop', icon: StoreIcon, isCart: false },
    { label: t('nav.cart'), href: '#cart', icon: ShoppingBagIcon, isCart: true },
    { label: t('nav.wishlist'), href: '/wishlist', icon: HeartIcon, isCart: false },
    { label: t('nav.account'), href: '/account', icon: UserIcon, isCart: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FAF5EE] border-t border-[#E7DDD0] py-1.5 px-3 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = !item.isCart && (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href));

          if (item.isCart) {
            return (
              <button
                key={item.label}
                onClick={() => setIsCartOpen(true)}
                className="flex flex-col items-center justify-center py-1 px-2 relative text-[#7A7067] hover:text-[#A9573B] transition-colors"
              >
                <div className="relative">
                  <Icon size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-[#A9573B] text-white text-[9.5px] font-bold rounded-full h-4 min-w-4 px-0.5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium mt-1 font-khmer">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2 transition-colors ${
                isActive ? 'text-[#A9573B] font-semibold' : 'text-[#7A7067] hover:text-[#2E2620]'
              }`}
            >
              <Icon size={20} />
              <span className="text-[11px] mt-1 font-khmer">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
