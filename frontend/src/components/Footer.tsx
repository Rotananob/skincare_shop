'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

export default function Footer() {
  const { lang, currency, setCurrency, t } = useShop();

  return (
    <footer className="bg-[#FAF5EE] border-t border-[#E7DDD0] pt-16 pb-24 md:pb-16 text-[#2E2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/favicon.png" alt="WeYoung Skin" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-display text-[24px] font-semibold tracking-tight text-[#2E2620]">
                WeYoung <span className="text-[#A9573B]">Skin</span>
              </span>
            </Link>

            <p className="text-[14px] text-[#7A7067] max-w-md leading-relaxed font-khmer">
              ស្បែករបស់អ្នក សមនឹងការថែទាំដែលយកចិត្តទុកដាក់។
            </p>

            {/* Social Icons in Circles matching Screenshot 14 */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Facebook', icon: 'f', href: 'https://facebook.com' },
                { name: 'Instagram', icon: '📸', href: 'https://instagram.com' },
                { name: 'TikTok', icon: '🎵', href: 'https://tiktok.com' },
                { name: 'Telegram', icon: '✈️', href: 'https://t.me' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#E7DDD0] flex items-center justify-center text-[14px] text-[#2E2620] hover:border-[#A9573B] hover:text-[#A9573B] transition-colors bg-[#FFFDF9]"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1: Shop (ហាង) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[14.5px] font-semibold text-[#2E2620] uppercase tracking-wider font-khmer">
              ហាង
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#7A7067] font-khmer">
              <li>
                <Link href="/shop" className="hover:text-[#2E2620] transition-colors">
                  ផលិតផលទាំងអស់
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#2E2620] transition-colors">
                  ជ្រើសរើសតាមប្រភេទ
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#2E2620] transition-colors">
                  ផលិតផលដែលចូលចិត្ត
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-[#2E2620] transition-colors">
                  ការបញ្ជាទិញរបស់ខ្ញុំ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Customer Support (ជំនួយអតិថិជន) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[14.5px] font-semibold text-[#2E2620] uppercase tracking-wider font-khmer">
              ជំនួយអតិថិជន
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#7A7067] font-khmer">
              <li>
                <Link href="/contact" className="hover:text-[#2E2620] transition-colors">
                  ទំនាក់ទំនង
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2E2620] transition-colors">
                  អំពីយើង
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2E2620] transition-colors">
                  ការដឹកជញ្ជូន
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2E2620] transition-colors">
                  ការប្រគល់ទំនិញ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Currency Switcher & Copyright */}
        <div className="mt-14 pt-8 border-t border-[#E7DDD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#8A8077]">
          <p className="font-khmer">
            © {new Date().getFullYear()} WeYoung Skin. រក្សាសិទ្ធិគ្រប់បែបយ៉ាង។
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'KHR' : 'USD')}
              className="font-medium text-[#2E2620] border border-[#E7DDD0] bg-[#FFFDF9] px-3 py-1 rounded-sm hover:border-[#A9573B] transition-colors"
            >
              {currency === 'USD' ? 'USD $' : 'KHR ៛'}
            </button>
            <span>Made for Cambodia 🇰🇭</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
