'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@/components/Icons';

export default function Navbar() {
  const { cartCount, setIsCartOpen, setIsMenuOpen, t } = useShop();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#261E19] text-[#FAF5EE] text-center py-2 px-4 text-[12.5px] font-medium tracking-wide">
        <p className="font-khmer">{t('announce')}</p>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#E7DDD0] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Mobile hamburger menu & Desktop nav */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 -ml-1 text-[#2E2620] hover:text-[#A9573B] transition-colors md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon size={22} />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/" className="text-[14px] font-medium text-[#2E2620] hover:text-[#A9573B] transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="/shop" className="text-[14px] font-medium text-[#7A7067] hover:text-[#2E2620] transition-colors">
                {t('nav.shop')}
              </Link>
              <Link href="/shop?concern=all" className="text-[14px] font-medium text-[#7A7067] hover:text-[#2E2620] transition-colors">
                {t('nav.concerns')}
              </Link>
              <Link href="/about" className="text-[14px] font-medium text-[#7A7067] hover:text-[#2E2620] transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="text-[14px] font-medium text-[#7A7067] hover:text-[#2E2620] transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/favicon.png" alt="Sokha Skin Logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-display text-[22px] font-semibold tracking-tight text-[#2E2620]">
              Sokha <span className="text-[#A9573B]">Skin</span>
            </span>
          </Link>

          {/* Right: Search & Shopping Bag */}
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="p-1.5 text-[#2E2620] hover:text-[#A9573B] transition-colors"
              aria-label="Search"
            >
              <SearchIcon size={20} />
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-[#2E2620] hover:text-[#A9573B] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBagIcon size={21} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A9573B] text-white text-[10.5px] font-bold rounded-full h-[18px] min-w-[18px] px-1 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
