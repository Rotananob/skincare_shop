'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { XIcon, SearchIcon, ShoppingBagIcon } from '@/components/Icons';

export default function MenuDrawer() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setIsCartOpen,
    cartCount,
    lang,
    setLang,
    t,
  } = useShop();

  if (!isMenuOpen) return null;

  const links = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.shop'), href: '/shop' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
    { label: t('nav.wishlist'), href: '/wishlist' },
    { label: t('nav.account'), href: '/account' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-[#FAF5EE] h-full shadow-2xl flex flex-col z-10">
        
        {/* Top Header matching Screenshot 15 */}
        <div className="p-4 sm:p-5 border-b border-[#E7DDD0] flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 text-[#2E2620] hover:text-[#A9573B]"
            aria-label="Close menu"
          >
            <XIcon size={22} />
          </button>

          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <img src="/favicon.png" alt="Sokha Skin Logo" className="h-7 w-7 rounded-full object-cover" />
            <span className="font-display text-[20px] font-semibold text-[#2E2620]">
              Sokha <span className="text-[#A9573B]">Skin</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-[#2E2620]"
            >
              <SearchIcon size={20} />
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="p-1 text-[#2E2620] relative"
            >
              <ShoppingBagIcon size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A9573B] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Menu Links with horizontal border divider matching Screenshot 15 */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E7DDD0]">
          {links.map((link) => (
            <div key={link.href} className="py-4">
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[17px] font-medium text-[#2E2620] hover:text-[#A9573B] transition-colors font-khmer block"
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Language Switcher matching Screenshot 15 */}
          <div className="py-5 flex items-center gap-3 text-[14px]">
            <button
              onClick={() => setLang('km')}
              className={`font-khmer transition-colors ${
                lang === 'km' ? 'font-bold text-[#2E2620]' : 'text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              ខ្មែរ
            </button>
            <span className="text-[#D6CCC2]">|</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${
                lang === 'en' ? 'font-bold text-[#2E2620]' : 'text-[#8A8077] hover:text-[#2E2620]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Footer info inside menu */}
        <div className="p-6 border-t border-[#E7DDD0] text-[12.5px] text-[#8A8077] font-khmer">
          <p>© {new Date().getFullYear()} Sokha Skin Cambodia</p>
        </div>
      </div>
    </div>
  );
}
