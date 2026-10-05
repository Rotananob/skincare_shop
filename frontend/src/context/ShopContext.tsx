'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/data/translations.json';
import productsData from '@/data/exact_products.json';

export interface Product {
  id: string;
  slug: string;
  name: { km: string; en: string };
  tagline: { km: string; en: string };
  description: { km: string; en: string };
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  stock: number;
  rating: number;
  reviewCount: number;
  skinTypes: string[];
  concerns: string[];
  benefits: { km: string; en: string }[];
  ingredients: { km: string; en: string };
  howToUse: { km: string; en: string };
  sizes: string[];
  bestSeller?: boolean;
  featured?: boolean;
  newArrival?: boolean;
}

export interface CartItem {
  product: Product;
  qty: number;
  size?: string;
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  lang: 'km' | 'en';
  currency: 'USD' | 'KHR';
  isCartOpen: boolean;
  isMenuOpen: boolean;
  setLang: (lang: 'km' | 'en') => void;
  setCurrency: (c: 'USD' | 'KHR') => void;
  setIsCartOpen: (open: boolean) => void;
  setIsMenuOpen: (open: boolean) => void;
  addToCart: (product: Product, qty?: number, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  formatPrice: (usd: number) => string;
  t: (key: string) => string;
  cartCount: number;
  cartSubtotal: number;
  freeDeliveryThreshold: number;
  freeDeliveryRemaining: number;
  freeDeliveryProgress: number;
}

const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [products] = useState<Product[]>(productsData as unknown as Product[]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [lang, setLang] = useState<'km' | 'en'>('km');
  const [currency, setCurrency] = useState<'USD' | 'KHR'>('USD');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('sokha_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWishlist = localStorage.getItem('sokha_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      const savedLang = localStorage.getItem('sokha_lang');
      if (savedLang === 'km' || savedLang === 'en') setLang(savedLang);
    } catch {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sokha_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('sokha_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('sokha_lang', lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const addToCart = (product: Product, qty = 1, size?: string) => {
    const chosenSize = size || (product.sizes && product.sizes[0]) || '';
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.size === chosenSize);
      if (existing) {
        return prev.map(i => i.product.id === product.id && i.size === chosenSize ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { product, qty, size: chosenSize }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  };

  const updateQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(i => i.product.id === productId ? { ...i, qty } : i));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const formatPrice = (usd: number) => {
    if (currency === 'KHR') {
      const khr = Math.round(usd * 4100 / 100) * 100;
      return `${khr.toLocaleString(lang === 'km' ? 'km-KH' : 'en-US')} ៛`;
    }
    return `$${usd.toFixed(2)}`;
  };

  const t = (key: string): string => {
    const entry = (translations as Record<string, { km: string; en: string }>)[key];
    if (!entry) return key;
    return entry[lang] || entry.km || key;
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cart.reduce((sum, item) => {
    const p = item.product.discountPrice ?? item.product.price;
    return sum + p * item.qty;
  }, 0);

  const freeDeliveryThreshold = 30;
  const freeDeliveryRemaining = Math.max(0, freeDeliveryThreshold - cartSubtotal);
  const freeDeliveryProgress = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        lang,
        currency,
        isCartOpen,
        isMenuOpen,
        setLang,
        setCurrency,
        setIsCartOpen,
        setIsMenuOpen,
        addToCart,
        removeFromCart,
        updateQty,
        toggleWishlist,
        isWishlisted,
        formatPrice,
        t,
        cartCount,
        cartSubtotal,
        freeDeliveryThreshold,
        freeDeliveryRemaining,
        freeDeliveryProgress,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}
