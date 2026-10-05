// Product data extracted from original site
// Images stored in /public/images/

export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive' | 'normal';
export type Concern = 'dryness' | 'oiliness' | 'acne' | 'sensitivity' | 'aging' | 'dullness' | 'dark-spots' | 'pores';
export type Category = 'cleanser' | 'toner' | 'serum' | 'moisturizer' | 'sunscreen' | 'mask' | 'essence' | 'eye-cream' | 'body';

export interface Benefit {
  km: string;
  en: string;
}

export interface BilingualText {
  km: string;
  en: string;
}

export interface ProductSize {
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: BilingualText;
  tagline: BilingualText;
  description: BilingualText;
  brand: string;
  category: Category;
  price: number;
  discountPrice?: number;
  image: string;
  stock: number;
  rating: number;
  reviewCount: number;
  skinTypes: SkinType[];
  concerns: Concern[];
  benefits: Benefit[];
  ingredients: BilingualText;
  howToUse: BilingualText;
  sizes: string[];
  bestSeller?: boolean;
  featured?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: 'p01',
    slug: 'rice-water-cleanser',
    name: { km: 'ážŸáž¶áž”áŸŠáž¼áž›áž¶áž„áž˜áž»ážáž‘áž¹áž€áž¢áž„áŸ’áž€ážš', en: 'Rice Water Gentle Cleanser' },
    tagline: { km: 'ážŸáŸ’áž¢áž¶ážážŠáŸ„áž™ážŸáŸ’áž›áž¼ážáž”áž¼áž áž˜áž·áž“ážáž¼áž…ážŸáŸ’áž”áŸ‚áž€', en: 'Soft enough for every day, thorough enough to matter.' },
    description: {
      km: 'áž€áŸ’ážšáŸ‚áž˜áž›áž¶áž„áž˜áž»ážážŸáŸ’ážšáž¶áž›ážŸáŸ’ážšáž¶áž› áž•áŸ’áž¢áŸ‚áž€áž›áž¾áž‘áž¹áž€áž¢áž„áŸ’áž€ážš áž“áž·áž„ Ceramide áž‡áž½áž™ážŸáž˜áŸ’áž¢áž¶ážáž€áŸ†áž‘áŸáž…áž€áŸ’ážšáž¢áž¼áž”ážŠáŸ„áž™ áž˜áž·áž“ážáž¼áž…ážŸáŸ’ážšáž‘áž¶áž”áŸ‹ Natural Barrier ážšáž”ážŸáŸ‹ážŸáŸ’áž”áŸ‚áž€áŸ”',
      en: 'A creamy, low-pH cleanser built on rice water and ceramides. It removes the day without stripping your skin barrier â€” Cambodia-tested through heat and humidity.'
    },
    brand: 'Bopha Botanics',
    category: 'cleanser',
    price: 14,
    discountPrice: 11,
    image: '/images/268bcbd0-0186-449f-963e-51bf59d73065.png',
    stock: 48,
    rating: 4.7,
    reviewCount: 203,
    skinTypes: ['dry', 'sensitive', 'combination'],
    concerns: ['dryness', 'sensitivity'],
    benefits: [
      { km: 'ážáŸ‚ážšáž€áŸ’ážŸáž¶ Natural Barrier', en: 'Preserves natural skin barrier' },
      { km: 'pH áž‘áž¶áž” ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€ážšáŸ†ážáž¶áž“', en: 'Low pH, gentle for sensitive skin' },
      { km: 'áž›áž¶áž„ážŸáŸ’áž¢áž¶ážážŠáŸ„áž™áž˜áž·áž“ážáž¼áž…ážŸáŸ†ážŽáž¾áž˜', en: 'Cleanses without stripping moisture' },
    ],
    ingredients: {
      km: 'Rice Water (Oryza Sativa), Ceramide NP, Panthenol, Glycerin, Centella Asiatica Extract.',
      en: 'Rice Water (Oryza Sativa), Ceramide NP, Panthenol, Glycerin, Centella Asiatica Extract.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾áž–áŸ’ážšáž¹áž€ áž“áž·áž„áž–áŸáž›áž™áž”áŸ‹ áž‡áŸ’ážšáž¸áž›áž¾áž‘áž¹áž€ ážšáž½áž…ážŠáž»ážŸážáŸ’áž“áž˜áŸ— ážšáž½áž…áž›áž¶áž„áž‡áž˜áŸ’ážšáŸ‡',
      en: 'Morning and evening. Dampen face, massage gently, rinse.',
    },
    sizes: ['100ml', '150ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p02',
    slug: 'niacinamide-toner',
    name: { km: 'áž‘áž¹áž€áž€áž€áŸ‹ Niacinamide 10%', en: 'Niacinamide 10% Clarifying Toner' },
    tagline: { km: 'ážšáž“áŸ’áž’áž‰áž¾ážŸážáž¼áž… ážŸáŸ’áž”áŸ‚áž€ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž˜áž¾', en: 'Pores minimised. Tone evened. Shine gone.' },
    description: {
      km: 'áž‘áž¹áž€áž€áž€áŸ‹ Niacinamide 10% áž‡áŸ’ážšáŸ€ážáž…áž¼áž›ážŸáŸ’áž‘áž¾ážš Instantly áž‡áž½áž™áž”áŸ†áž”áž¶ážáŸ‹ážšáž“áŸ’áž’áž‰áž¾ážŸ ážŸáŸ’áž”áŸ‚áž€ážáŸ’áž‰áž¾ áž“áž·áž„ážŸáŸ’áž“áž¶áž˜ážáŸ’áž˜áŸ… áž›áŸ’áž¢ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áž€áŸ’ážŠáŸ…',
      en: 'A water-light 10% niacinamide toner that targets pores, shine, and uneven tone. Works fast in Cambodia\'s heat â€” no stickiness, just results.',
    },
    brand: 'Srah',
    category: 'toner',
    price: 16,
    image: '/images/519afb53-d143-4187-be40-3ab10c24b9e4.png',
    stock: 62,
    rating: 4.6,
    reviewCount: 178,
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['oiliness', 'pores', 'dark-spots', 'dullness'],
    benefits: [
      { km: 'áž”áŸ†áž”áž¶ážáŸ‹ážšáž“áŸ’áž’áž‰áž¾ážŸ 30 ážáŸ’áž„áŸƒ', en: 'Visibly minimises pores in 30 days' },
      { km: 'ážŸáŸ’áž”áŸ‚áž€ážšáž›áž½áž… áž˜áž·áž“ážáŸ’áž‰áž¾', en: 'Matte, non-greasy finish' },
      { km: 'ážŸáŸ’áž“áž¶áž˜ážáŸ’áž˜áŸ…ážŸáŸ’ážšáž¢áž¶áž”áŸ‹áž€áŸ’áž“áž»áž„ 4 ážŸáž”áŸ’ážáž¶áž áŸ', en: 'Fades dark spots in 4 weeks' },
    ],
    ingredients: {
      km: 'Niacinamide 10%, Zinc PCA, Hyaluronic Acid, Panthenol, Witch Hazel.',
      en: 'Niacinamide 10%, Zinc PCA, Hyaluronic Acid, Panthenol, Witch Hazel.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾áž€áŸ’ážšáŸ„áž™áž–áŸáž›áž›áž¶áž„áž˜áž»áž ážŠáŸ†ážŽáž€áŸ‹áž›áž¾ Cotton Pad áž…áž¶áž€áŸ‹áž›áž¾áž˜áž»áž áž–áŸ’ážšáž¹áž€ áž“áž·áž„áž™áž”áŸ‹',
      en: 'After cleansing, apply with a cotton pad or pat directly. Morning and night.',
    },
    sizes: ['150ml'],
    bestSeller: true,
  },
  {
    id: 'p03',
    slug: 'vitamin-c-brightening-serum',
    name: { km: 'Serum Vitamin C áž—áŸ’áž›ážº', en: 'Vitamin C Brightening Serum' },
    tagline: { km: 'áž—áŸ’áž›ážº ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž–áž¹áž€ážšáž”ážŸáŸ‹ Vitamin C', en: 'Your Monday-morning glow, every day.' },
    description: {
      km: 'Serum Vitamin C 15% áž‡áž¶áž˜áž½áž™ Ferulic Acid áž‡áž½áž™áž—áŸ’áž›ážº ážŸáŸ’áž”áŸ‰áž¶áž„ ážŸáŸ’áž”áŸ‚áž€ážŸáŸ’ážšážŸáŸ‹ áž€áŸ’áž“áž»áž„ážšáž™áŸˆáž–áŸáž› 2-3 ážŸáž”áŸ’ážáž¶áž áŸ',
      en: 'A stable 15% vitamin C serum with ferulic acid and vitamin E. Brightens, protects against oxidative stress, and gives that lit-from-within glow.',
    },
    brand: 'Angkor Herbals',
    category: 'serum',
    price: 28,
    discountPrice: 22,
    image: '/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png',
    stock: 21,
    rating: 4.9,
    reviewCount: 312,
    skinTypes: ['dry', 'normal', 'combination'],
    concerns: ['dullness', 'dark-spots', 'aging'],
    benefits: [
      { km: 'áž—áŸ’áž›ážºážŸáŸ’áž”áŸ‰áž¶áž„ áž€áŸ’áž“áž»áž„ 2-3 ážŸáž”áŸ’ážáž¶áž áŸ', en: 'Visible brightening in 2â€“3 weeks' },
      { km: 'áž€áž¶ážšáž–áž¶ážš Free Radical', en: 'Shields against free radical damage' },
      { km: 'ážŸáŸ’áž”-ážŸáŸ’áž–áž¹áž€ážš Vitamin C áž¢ážŸáŸ‹ 24 áž˜áŸ‰áŸ„áž„', en: 'Stable formula, active for 24 hours' },
    ],
    ingredients: {
      km: 'L-Ascorbic Acid 15%, Ferulic Acid, Vitamin E (Tocopherol), Hyaluronic Acid.',
      en: 'L-Ascorbic Acid 15%, Ferulic Acid, Vitamin E (Tocopherol), Hyaluronic Acid.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾áž–áŸ’ážšáž¹áž€ 2-3 ážŠáŸ†ážŽáž€áŸ‹ ážŸáŸ’áž‘áž„áŸ‹ ážŠáŸ†ážŽáž€áŸ‹ áž áž¾áž™áž”áŸ’ážšáž¾ SPF áž‡áž¶áž“áž¶áŸ†áž‡áž¼áž“',
      en: 'Apply 2â€“3 drops in the morning before SPF. Let absorb before moisturiser.',
    },
    sizes: ['30ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p04',
    slug: 'ceramide-barrier-cream',
    name: { km: 'áž€áŸ’ážšáŸ‚áž˜áž‡áž½ážŸáž‡áž»áž› Barrier Ceramide', en: 'Ceramide Barrier Repair Cream' },
    tagline: { km: 'ážŸáŸ’áž”áŸ‚áž€ážšáž¹áž„áž˜áž¶áŸ† áž‡áž¼ážšážšáŸ†áž¢áž·áž› áž áŸ’ážœážáž”ážáŸ‹', en: 'When your skin needs a reset.' },
    description: {
      km: 'áž€áŸ’ážšáŸ‚áž˜ Ceramide áž‡áž½ážŸ Barrier ážŸáŸ’áž”áŸ‚áž€ áž‡áž¼ážšážšáŸ†áž¢áž·áž› áž áŸ’ážœážáž”ážáŸ‹ ážŸáŸ’ážŠáž¾áž„ážŸáŸ’ážšážŸáŸ‹ áž›áŸ’áž¢ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€ážšáŸ†ážáž¶áž“',
      en: 'A richer cream with ceramides, squalane, and peptides to rebuild a compromised barrier. Rich without heaviness â€” sinks in fast in the heat.',
    },
    brand: 'Bopha Botanics',
    category: 'moisturizer',
    price: 22,
    image: '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png',
    stock: 55,
    rating: 4.8,
    reviewCount: 147,
    skinTypes: ['dry', 'sensitive', 'normal'],
    concerns: ['dryness', 'sensitivity', 'aging'],
    benefits: [
      { km: 'áž‡áž½ážŸ Barrier áž€áŸ’áž“áž»áž„ 7 ážáŸ’áž„áŸƒ', en: 'Measurably repairs barrier in 7 days' },
      { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž› 72 áž˜áŸ‰áŸ„áž„', en: 'Long-lasting 72-hour hydration' },
      { km: 'ážŸáŸ’áž„áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€ážšáŸ†ážáž¶áž“ áž—áŸ’áž›áž¶áž˜áŸ—', en: 'Calms reactive skin instantly' },
    ],
    ingredients: {
      km: 'Ceramide NP, Ceramide EOP, Squalane, Peptide Complex, Shea Butter, Panthenol.',
      en: 'Ceramide NP, Ceramide EOP, Squalane, Peptide Complex, Shea Butter, Panthenol.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾ 1-2 ážŠáž„ áž€áŸ’áž“áž»áž„áž˜áž½áž™ážáŸ’áž„áŸƒ áž–áŸ’ážšáž¹áž€ áž“áž·áž„áž™áž”áŸ‹ áž€áŸ’ážšáŸ„áž™ Serum',
      en: 'Apply morning and night after serum. Use a pea-size for face and neck.',
    },
    sizes: ['50ml'],
    featured: true,
  },
  {
    id: 'p05',
    slug: 'centella-water-serum',
    name: { km: 'Serum ážŸáŸ’ážšážŸáŸ‹ Centella Asiatica', en: 'Centella Asiatica Water Serum' },
    tagline: { km: 'ážŸáŸ’áž„áž”áŸ‹ áž’áž¼ážšážšáŸ†áž¢áž·áž› áž–áŸáž›áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áž€áŸ’ážŠáŸ…', en: 'The calm-skin serum for Cambodia\'s heat.' },
    description: {
      km: 'Serum ážŸáŸ’ážšáž¶áž› áž•áŸ’áž¢áŸ‚áž€áž›áž¾ Centella Asiatica áž“áž·áž„ Hyaluronic Acid áž’áž¼ážšážšáŸ†áž¢áž·áž›ážšáž áŸážŸ ážŸáŸ’áž„áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€',
      en: 'A featherlight water serum with Centella Asiatica extract and hyaluronic acid. It absorbs quickly, layers well under sunscreen, and leaves skin feeling calm â€” made for Cambodia\'s hot, humid days.',
    },
    brand: 'WeYoung',
    category: 'serum',
    price: 24,
    discountPrice: 19,
    image: '/images/92480f01-20c1-46d9-8dfd-3fef5c94a9d0.png',
    stock: 34,
    rating: 4.8,
    reviewCount: 124,
    skinTypes: ['sensitive', 'combination', 'oily'],
    concerns: ['sensitivity', 'dryness', 'acne'],
    benefits: [
      { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž› 12 áž˜áŸ‰áŸ„áž„ áž—áŸ’áž›áž¶áž˜áŸ—', en: 'Immediate 12-hour hydration' },
      { km: 'ážŸáŸ’áž„áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€', en: 'Skin feels calm and soothed' },
      { km: 'ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’ážšážŸáŸ‹ážŸáŸ’áž¢áž¶ážáž˜áž·áž“ážŸáŸ’áž¢áž·áž', en: 'Fast-absorbing, never sticky' },
    ],
    ingredients: {
      km: 'Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Madecassoside.',
      en: 'Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Madecassoside.',
    },
    howToUse: {
      km: 'áž…áŸ†ážŽáž»áž…áž›áŸáž€ 2-3 ážŠáŸ†ážŽáž€áŸ‹ ážŠáŸ†ážŽáž€áŸ‹ áž€áŸ’ážšáŸ„áž™ Toner áž€áŸ’áž“áž»áž„áž–áŸ’ážšáž¹áž€/áž™áž”áŸ‹',
      en: 'Pat 2â€“3 drops after toner, before moisturiser, morning and night.',
    },
    sizes: ['30ml', '50ml'],
    bestSeller: true,
    newArrival: true,
  },
  {
    id: 'p06',
    slug: 'spf50-daily-sunscreen',
    name: { km: 'áž‚áŸ’ážšáž¸áž˜ SPF50+ áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ', en: 'SPF50+ Daily Sunscreen' },
    tagline: { km: 'áž€áž¶ážšáž–áž¶ážšážáŸ’áž„áŸƒ ážŸáŸ’áž¢áž¶áž áž˜áž·áž“ White Cast', en: 'Tropical-proof. No white cast. Works.' },
    description: {
      km: 'áž€áŸ’ážšáŸ‚áž˜ SPF50+ PA++++ ážŸáŸ’ážšáž¶áž› ážŸáŸ’ážŠáž¾áž„ áž‡áŸ’ážšáŸ€ážáž…áž¼áž›ážšáž áŸážŸ áž˜áž·áž“ White Cast áž›áŸ’áž¢ áž‡áž¶ Base Primer',
      en: 'A featherlight sunscreen with modern UV filters for intense tropical sun. It sinks in fast, leaves no white cast, and doubles as a smooth makeup base.',
    },
    brand: 'Srah',
    category: 'sunscreen',
    price: 18,
    image: '/images/93197771-a19c-4916-98db-316b75cf0682.png',
    stock: 73,
    rating: 4.8,
    reviewCount: 189,
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['dark-spots', 'aging', 'oiliness'],
    benefits: [
      { km: 'SPF50+ PA++++', en: 'SPF50+ PA++++ protection' },
      { km: 'áž˜áž·áž“ White Cast', en: 'No white cast' },
      { km: 'áž’áž“áŸ‹áž‰áž¾ážŸ áž€áŸ’ážŠáŸ… Humid', en: 'Sweat-resistant in humid weather' },
    ],
    ingredients: {
      km: 'Uvinul A Plus, Tinosorb S, Niacinamide, Squalane, Panthenol.',
      en: 'Uvinul A Plus, Tinosorb S, Niacinamide, Squalane, Panthenol.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾ 2 áž˜áŸ’ážšáž¶áž˜ áŸ¢áŸ  áž“áž¶áž‘áž¸áž˜áž»áž“áž…áŸáž‰ áž¡áž¾áž„ážŸáž¼ážš 2-3 áž˜áŸ‰áŸ„áž„',
      en: 'Apply two finger-lengths 20 minutes before sun exposure; reapply every 2â€“3 hours outdoors.',
    },
    sizes: ['50ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p07',
    slug: 'green-tea-sheet-mask',
    name: { km: 'Mask áž€áŸ’ážšážŠáž¶ážŸ Green Tea (5 áž‚áŸ’ážšáž¶áž”áŸ‹)', en: 'Green Tea Sheet Mask (5 pack)' },
    tagline: { km: 'áŸ¡áŸ¥ áž“áž¶áž‘áž¸ ážŸáŸ’áž„áž”áŸ‹ áž’áž¼ážšážšáŸ†áž¢áž·áž›', en: 'Fifteen quiet minutes of hydration and calm.' },
    description: {
      km: 'Mask áž€áŸ’ážšážŠáž¶ážŸ Tencel ážŸáŸ’ážšáž¼áž” Green Tea áž“áž·áž„ Rice Ferment ážŸáŸ’áž„áž”áŸ‹ áž’áž¼ážšážšáŸ†áž¢áž·áž› áž›áŸ’áž¢áž–áŸáž›ážŸáŸ’áž”áŸ‚áž€áž¢ážŸáŸ‹áž€áž˜áŸ’áž›áž¶áŸ†áž„',
      en: 'Soft Tencel sheets soaked in green tea and rice ferment â€” for tired-skin days or the night before something important.',
    },
    brand: 'Bopha Botanics',
    category: 'mask',
    price: 8,
    discountPrice: 6,
    image: '/images/9c011e81-95ce-4d5f-be76-f3594692baad.png',
    stock: 120,
    rating: 4.4,
    reviewCount: 87,
    skinTypes: ['normal', 'sensitive', 'combination'],
    concerns: ['dryness', 'dullness', 'sensitivity'],
    benefits: [
      { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž›áž—áŸ’áž›áž¶áž˜áŸ—', en: 'Instant hydration' },
      { km: 'ážŸáŸ’áž„áž”áŸ‹ážŸáŸ’áž”áŸ‚áž€áž™áŸ‰áž¶áž€áŸ‹áž…áž·ážáŸ’áž', en: 'Comforts stressed skin' },
      { km: 'áž‚áŸ’áž˜áž¶áž“ Fragrance', en: 'Fragrance-free' },
    ],
    ingredients: {
      km: 'Camellia Sinensis Leaf Extract, Rice Ferment Filtrate, Panthenol, Sodium Hyaluronate.',
      en: 'Camellia Sinensis Leaf Extract, Rice Ferment Filtrate, Panthenol, Sodium Hyaluronate.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž›áž¶áž„áž˜áž»áž áŸ¡áŸ¥-áŸ¢áŸ  áž“áž¶áž‘áž¸ ážŠáž€ áž áž¾áž™ ážŸáŸ’áž‘áž„áŸ‹ Essence ážŠáŸ‚áž›áž“áŸ…',
      en: 'Apply to clean skin for 15â€“20 minutes, remove, and pat in the remaining essence.',
    },
    sizes: ['5 Ã— 25ml'],
    newArrival: true,
  },
  {
    id: 'p08',
    slug: 'snail-repair-essence',
    name: { km: 'Essence áž‡áž½ážŸáž‡áž»áž› Snail', en: 'Snail Repair Essence' },
    tagline: { km: 'áž‡áŸ†áž áž¶áž“áž…áž¶áŸ†áž”áž¶áž…áŸ‹ áž’áŸ’ážœáž¾áž² Glass Skin', en: 'The bouncy, glossy-skin step your routine is missing.' },
    description: {
      km: 'Essence áž‡áž¶áž˜áž½áž™ Snail Mucin 74% áž“áž·áž„ Galactomyces áž’áŸ’ážœáž¾áž² Glass Skin áž€áŸ’áž“áž»áž„áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ',
      en: 'A slippery-thick essence with 74% snail mucin and galactomyces ferment for that bouncy, glass-skin bounce with daily use.',
    },
    brand: 'Angkor Herbals',
    category: 'essence',
    price: 26,
    image: '/images/aa0d74a7-1c15-4d5f-9d37-455a58d44910.png',
    stock: 29,
    rating: 4.6,
    reviewCount: 71,
    skinTypes: ['dry', 'normal', 'combination'],
    concerns: ['dryness', 'dullness', 'aging'],
    benefits: [
      { km: 'áž‡áŸ’ážšáŸ… Plumping áž’áž¼ážšážšáŸ†áž¢áž·áž›', en: 'Deep plumping hydration' },
      { km: 'áž—áŸ’áž›ážº Glass Skin', en: 'Glass-skin luminosity' },
      { km: 'áž‡áž½áž™áž‡áž½ážŸáž‡áž»áž›áž–áŸáž›ážŠáŸáž€', en: 'Supports overnight recovery' },
    ],
    ingredients: {
      km: 'Snail Secretion Filtrate (74%), Galactomyces Ferment Filtrate, Sodium Hyaluronate, Trehalose.',
      en: 'Snail Secretion Filtrate (74%), Galactomyces Ferment Filtrate, Sodium Hyaluronate, Trehalose.',
    },
    howToUse: {
      km: 'áž…áŸ†ážŽáž»áž…áž›áŸáž€ 2-3 Pump áž€áŸ’ážšáŸ„áž™ Toner áž˜áž»áž“ Serum',
      en: 'Pat 2â€“3 pumps after toner, before serum.',
    },
    sizes: ['100ml'],
    newArrival: true,
  },
  {
    id: 'p09',
    slug: 'caffeine-eye-cream',
    name: { km: 'áž€áŸ’ážšáŸ‚áž˜áž˜áž»ážáž—áŸ’áž“áŸ‚áž€ Caffeine', en: 'Caffeine Eye Cream' },
    tagline: { km: 'áž—áŸ’áž“áŸ‚áž€ážšáŸ†áž—áŸ’áž›ážº áž–áŸ’ážšáž¹áž€ážšáŸ†áž—áŸ’áž›ážº', en: 'A bright morning for tired eyes.' },
    description: {
      km: 'áž€áŸ’ážšáŸ‚áž˜áž˜áž»ážáž—áŸ’áž“áŸ‚áž€ Caffeine áž“áž·áž„ Peptides áž‡áž½áž™áž”áŸ†áž”áž¶ážáŸ‹ážšáž“áŸ’áž‘áŸ‡ áž’áŸ’ážœáž¾áž² Make-up ážŸáŸ’áž–áž¹áž€',
      en: 'A cooling cream-gel with caffeine and peptides that wakes up the under-eye area and layers invisibly under concealer.',
    },
    brand: 'Srah',
    category: 'moisturizer',
    price: 15,
    image: '/images/abe00f01-b498-4ced-9d32-8405c0db4c17.png',
    stock: 38,
    rating: 4.3,
    reviewCount: 52,
    skinTypes: ['normal', 'oily', 'combination'],
    concerns: ['aging', 'dullness'],
    benefits: [
      { km: 'áž–áŸ’ážšáŸ‡ážŸáŸ’áž„áž”áŸ‹ De-Puff', en: 'Cooling, de-puffing feel' },
      { km: 'ážŸáŸ’áž–áž¹áž€ Make-up', en: 'Invisible under makeup' },
      { km: 'ážŸáŸ’áž„áž”áŸ‹ ážŸáŸ’ážšážŸáŸ‹ áž—áŸ’áž“áŸ‚áž€', en: 'Gentle for the eye area' },
    ],
    ingredients: {
      km: 'Caffeine, Acetyl Tetrapeptide-5, Niacinamide, Squalane, Vitamin E.',
      en: 'Caffeine, Acetyl Tetrapeptide-5, Niacinamide, Squalane, Vitamin E.',
    },
    howToUse: {
      km: 'ážŠáŸ†ážŽáž€áŸ‹áž…áž¼áž›áž‡áž»áŸ†áž—áŸ’áž“áŸ‚áž€ áž–áŸ’ážšáž¹áž€ áž“áž·áž„áž™áž”áŸ‹',
      en: 'Tap a rice-grain amount around the eyes morning and night.',
    },
    sizes: ['15ml'],
  },
  {
    id: 'p10',
    slug: 'coconut-body-lotion',
    name: { km: 'áž›áž¶áž”ážáŸ’áž›áž½áž“ Coconut ážŸáŸ’ážšážŸáŸ‹', en: 'Coconut Body Lotion' },
    tagline: { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž› ážŸáŸ’ážšážŸáŸ‹ áž€áŸ’áž›áž·áž“ Coconut', en: 'Lightweight moisture with a soft coconut scent.' },
    description: {
      km: 'Lotion ážáŸ’áž›áž½áž“ Coconut ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž‘áž¾ážš Instant Absorb áž’áž¼ážšážšáŸ†áž¢áž·áž› ážŸáŸ’áž„áž”áŸ‹ áž€áŸ’ážŠáŸ…-Humid',
      en: 'A fast-absorbing body lotion with coconut extract and hyaluronic acid. Stays light in Cambodia\'s heat, never greasy.',
    },
    brand: 'Bopha Botanics',
    category: 'body',
    price: 12,
    image: '/images/ae19e7f3-4756-4a98-b432-ca7d28e363f0.png',
    stock: 84,
    rating: 4.5,
    reviewCount: 93,
    skinTypes: ['normal', 'dry', 'combination'],
    concerns: ['dryness'],
    benefits: [
      { km: 'ážŸáŸ’ážšáž¼áž”áž…áž¼áž›ážšáž áŸážŸ', en: 'Fast-absorbing' },
      { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž› áŸ¢áŸ¤ áž˜áŸ‰áŸ„áž„', en: '24-hour moisture lock' },
      { km: 'áž€áŸ’áž›áž·áž“ Coconut ážŸáŸ’áž„áž”áŸ‹', en: 'Soft coconut scent' },
    ],
    ingredients: {
      km: 'Cocos Nucifera Oil, Sodium Hyaluronate, Shea Butter, Glycerin.',
      en: 'Cocos Nucifera Oil, Sodium Hyaluronate, Shea Butter, Glycerin.',
    },
    howToUse: {
      km: 'ážŠáŸ†ážŽáž€áŸ‹ áŸ¢-áŸ£ ážŠáž„ ážáŸ’áž›áž½áž“ áž€áŸ’ážšáŸ„áž™áž„áž¼ážáž‘áž¹áž€',
      en: 'Apply generously to body after showering.',
    },
    sizes: ['200ml'],
    newArrival: true,
  },
  {
    id: 'p11',
    slug: 'salicylic-acid-acne-cleanser',
    name: { km: 'ážŸáž¶áž”áŸŠáž¼ Salicylic Acid áž”áŸ’ážšáž†áž¶áŸ†áž„áž˜áž»áž“', en: 'Salicylic Acid Acne Cleanser' },
    tagline: { km: 'ážŸáŸ’áž¢áž¶ážážŸáŸ’áž‘áŸ‡ ážŠáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž˜áž»áž“', en: 'Unclog. Calm. Clear.' },
    description: {
      km: 'áž‡áŸ’ážšáž¼ážáž›áž¾ Salicylic Acid 2% ážŸáŸ’áž„áž”áŸ‹áž˜áž»áž“ áž‡áŸ’ážšáž¼ážážšáŸ†áž¢áž·áž› Pores ážŸáŸ’áž„áž”áŸ‹ Cambodia Climate',
      en: 'A medicated 2% salicylic acid wash that dissolves pore-clogging debris and cools inflammation â€” formulated for breakout-prone skin in humid climates.',
    },
    brand: 'Srah',
    category: 'cleanser',
    price: 15,
    image: '/images/b651362e-0879-4c6d-a918-3d61e0c2a1f9.png',
    stock: 45,
    rating: 4.5,
    reviewCount: 118,
    skinTypes: ['oily', 'combination'],
    concerns: ['acne', 'oiliness', 'pores'],
    benefits: [
      { km: 'ážŠáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ Blackhead', en: 'Dissolves blackheads and congestion' },
      { km: 'ážŸáŸ’áž„áž”áŸ‹ Red Spot áž—áŸ’áž›áž¶áž˜áŸ—', en: 'Visibly calms active breakouts' },
      { km: 'áž€áž¶ážšáž–áž¶ážš Pores ážŸáŸ’ážšáž¾áž”', en: 'Prevents new clogged pores' },
    ],
    ingredients: {
      km: 'Salicylic Acid 2%, Tea Tree Oil, Niacinamide, Centella Asiatica.',
      en: 'Salicylic Acid 2%, Tea Tree Oil, Niacinamide, Centella Asiatica.',
    },
    howToUse: {
      km: 'áž–áŸ’ážšáž¹áž€/áž™áž”áŸ‹ áŸ¢-áŸ£ ážŠáž„ áž€áŸ’áž“áž»áž„ážŸáž”áŸ’ážáž¶áž áŸ áž€áŸ’ážšáŸ„áž™áž›áž¶áž„ážŸáŸ’áž¢áž¶áž',
      en: 'Use 2â€“3 times per week, morning or evening. Follow with moisturiser.',
    },
    sizes: ['150ml'],
    bestSeller: true,
  },
  {
    id: 'p12',
    slug: 'retinol-night-cream',
    name: { km: 'áž€áŸ’ážšáŸ‚áž˜áž™áž”áŸ‹ Retinol 0.3%', en: 'Retinol 0.3% Night Cream' },
    tagline: { km: 'áž‡áž½ážŸáž‡áž»áž› Anti-Aging áž–áŸáž›ážŠáŸáž€', en: 'While you sleep, it works.' },
    description: {
      km: 'áž€áŸ’ážšáŸ‚áž˜áž™áž”áŸ‹ Retinol 0.3% áž‡áž½ážŸ Collagen ážŸáŸ’áž”áŸ‚áž€ Texture áž›áŸ’áž¢ áž€áŸ’áž“áž»áž„ 4-8 ážŸáž”áŸ’ážáž¶áž áŸ',
      en: 'An entry-level 0.3% retinol with squalane and peptides to ease skin into the routine. Designed for Cambodia beginners â€” effective, less irritation.',
    },
    brand: 'Angkor Herbals',
    category: 'moisturizer',
    price: 20,
    image: '/images/bebe6db9-1d97-487e-beb7-3599f3af83ef.png',
    stock: 17,
    rating: 4.7,
    reviewCount: 89,
    skinTypes: ['normal', 'combination', 'dry'],
    concerns: ['aging', 'dullness', 'dark-spots'],
    benefits: [
      { km: 'Texture áž›áŸ’áž¢ áž€áŸ’áž“áž»áž„ 4-8 ážŸáž”áŸ’ážáž¶áž áŸ', en: 'Refined texture in 4â€“8 weeks' },
      { km: 'áž‡áž½ážŸ Collagen áž•áž›áž·áž', en: 'Boosts collagen production' },
      { km: 'Fade Fine Lines', en: 'Reduces fine lines gradually' },
    ],
    ingredients: {
      km: 'Retinol 0.3%, Squalane, Peptide Complex, Ceramide NP, Vitamin E.',
      en: 'Retinol 0.3%, Squalane, Peptide Complex, Ceramide NP, Vitamin E.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾ áŸ¢-áŸ£ ážŠáž„ áž€áŸ’áž“áž»áž„ážŸáž”áŸ’ážáž¶áž áŸ (áž™áž”áŸ‹) áž áž¾áž™ Build Up áž‡áž¶ážŠáŸ†ážŽáž¾ážš',
      en: 'Start 2â€“3 nights per week and build up. Always follow with SPF the next morning.',
    },
    sizes: ['50ml'],
  },
  {
    id: 'p13',
    slug: 'hyaluronic-acid-gel-moisturizer',
    name: { km: 'áž€áŸ’ážšáŸ‚áž˜ Gel Hyaluronic Acid', en: 'Hyaluronic Acid Gel Moisturiser' },
    tagline: { km: 'ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž„áž”áŸ‹ ážŸáŸ’áž–áž¹áž€áž›áž¾ Humid', en: 'Dewy skin, zero heaviness.' },
    description: {
      km: 'Gel Moisturizer Hyaluronic Acid ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž‘áž¾ážšážšáŸ†áž¢áž·áž› ážŸáŸ’áž„áž”áŸ‹ áž›áŸ’áž¢ Cambodia Humid',
      en: 'A water-gel moisturiser with three molecular weights of hyaluronic acid. Soaks in fast, leaves skin plump and dewy â€” perfect for humid days.',
    },
    brand: 'WeYoung',
    category: 'moisturizer',
    price: 17,
    image: '/images/d7d2d2ae-10dd-485a-b6d6-34776640c893.png',
    stock: 63,
    rating: 4.6,
    reviewCount: 156,
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['dryness', 'dullness'],
    benefits: [
      { km: 'áž’áž¼ážšážšáŸ†áž¢áž·áž› Plump áž—áŸ’áž›áž¶áž˜', en: 'Plumps skin instantly' },
      { km: 'ážŸáŸ’áž‘áž¾ážš Matte ážŸáŸ’áž„áž”áŸ‹', en: 'Lightweight, non-greasy' },
      { km: 'áž›áŸ’áž¢ Layer áž‡áž¶áž˜áž½áž™ Serum', en: 'Layers beautifully over serums' },
    ],
    ingredients: {
      km: 'Sodium Hyaluronate (3 weights), Tremella Mushroom Extract, Panthenol, Glycerin.',
      en: 'Sodium Hyaluronate (3 weights), Tremella Mushroom Extract, Panthenol, Glycerin.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾áž–áŸ’ážšáž¹áž€/áž™áž”áŸ‹ áž€áŸ’ážšáŸ„áž™ Serum áŸ¢-áŸ£ ážŠáŸ†ážŽáž€áŸ‹ ážŠáŸ†ážŽáž€áŸ‹',
      en: 'Apply after serum, morning and night. A little goes a long way.',
    },
    sizes: ['50ml', '100ml'],
    bestSeller: true,
  },
  {
    id: 'p14',
    slug: 'aha-bha-exfoliating-toner',
    name: { km: 'Toner AHA+BHA Exfoliate', en: 'AHA+BHA Exfoliating Toner' },
    tagline: { km: 'áž‡áŸ’ážšáž¼áž Exfoliate ážŸáŸ’áž„áž”áŸ‹ ážŸáŸ’áž–áž¹áž€ážš', en: 'Sunday-night skin, any night.' },
    description: {
      km: 'Toner AHA+BHA Exfoliate ážŸáŸ’áž„áž”áŸ‹ áž‡áŸ’ážšáž¼ážáž€áŸ’ážšáž  Texture ážŸáŸ’áž”-ážŸáŸ’áž– PH áž›áŸ’áž¢',
      en: 'A gentle chemical exfoliant with AHA (glycolic + lactic) and BHA (salicylic) to slough off dead skin, smooth texture, and clarify tone â€” without the burn.',
    },
    brand: 'Angkor Herbals',
    category: 'toner',
    price: 17,
    image: '/images/d96d5fef-65d2-4fed-875c-b918ab10962d.png',
    stock: 41,
    rating: 4.5,
    reviewCount: 104,
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['dullness', 'acne', 'dark-spots', 'pores'],
    benefits: [
      { km: 'áž‡áŸ’ážšáž¼áž Exfoliate ážŸáŸ’áž„áž”áŸ‹', en: 'Gentle chemical exfoliation' },
      { km: 'Texture ážŸáŸ’áž”-ážŸáŸ’áž–áž¹áž€ áž€áŸ’áž“áž»áž„ 2 ážŸáž”áŸ’ážáž¶áž áŸ', en: 'Smoother texture in 2 weeks' },
      { km: 'áž—áŸ’áž›ážº ážŸáŸ’áž”-ážŸáŸ’áž–áž¹áž€ážš', en: 'Brighter, more even tone' },
    ],
    ingredients: {
      km: 'Glycolic Acid 5%, Lactic Acid 3%, Salicylic Acid 0.5%, Aloe Vera, Panthenol.',
      en: 'Glycolic Acid 5%, Lactic Acid 3%, Salicylic Acid 0.5%, Aloe Vera, Panthenol.',
    },
    howToUse: {
      km: 'áž”áŸ’ážšáž¾ áŸ¢-áŸ£ ážŠáž„ áž€áŸ’áž“áž»áž„ážŸáž”áŸ’ážáž¶áž áŸ (áž™áž”áŸ‹) áž áž¾áž™ SPF áž–áŸ’ážšáž¹áž€',
      en: 'Use 2â€“3 evenings per week. Always follow with SPF the next morning.',
    },
    sizes: ['150ml'],
    newArrival: true,
  },
  {
    id: 'p15',
    slug: 'aloe-soothing-gel',
    name: { km: 'Gel ážŸáŸ’áž„áž”áŸ‹ Aloe Vera 99%', en: 'Aloe Vera 99% Soothing Gel' },
    tagline: { km: 'ážŸáŸ’áž„áž”áŸ‹ áž…áž›áŸ‹ áž‘áž“áŸ‹ ážáŸ’ážšáž‡áž¶áž€áŸ‹', en: 'Cool. Calm. Instant relief.' },
    description: {
      km: 'Gel Aloe Vera 99% ážŸáŸ’áž„áž”áŸ‹ ážáŸ’ážšáž‡áž¶áž€áŸ‹ ážŸáŸ’áž–-ážŸáŸ’áž–-ážŸáŸ’áž– áž›áŸ’áž¢ áž€áŸ’ážšáŸ„áž™ Sun áž¬ Skin Burn',
      en: 'A pure 99% aloe vera gel for instant soothing â€” post-sun, post-wax, or any angry skin. Multi-use: face, body, hair.',
    },
    brand: 'WeYoung',
    category: 'moisturizer',
    price: 10,
    image: '/images/9c011e81-95ce-4d5f-be76-f3594692baad.png',
    stock: 95,
    rating: 4.7,
    reviewCount: 221,
    skinTypes: ['sensitive', 'oily', 'combination', 'normal', 'dry'],
    concerns: ['sensitivity', 'acne', 'dullness'],
    benefits: [
      { km: 'ážŸáŸ’áž„áž”áŸ‹ áž—áŸ’áž›áž¶áž˜áŸ—', en: 'Immediate soothing relief' },
      { km: 'ážáŸ’ážšáž‡áž¶áž€áŸ‹ ážŸáŸ’áž„áž”áŸ‹ áž€áŸ’ážŠáŸ…', en: 'Cooling effect for sunburn' },
      { km: 'áž”áŸ’ážšáž¾áž”áž¶áž“ Face, Body, Hair', en: 'Multi-use: face, body, hair' },
    ],
    ingredients: {
      km: 'Aloe Barbadensis Leaf Juice (99%), Panthenol, Allantoin, Sodium Hyaluronate.',
      en: 'Aloe Barbadensis Leaf Juice (99%), Panthenol, Allantoin, Sodium Hyaluronate.',
    },
    howToUse: {
      km: 'ážŠáŸ†ážŽáž€áŸ‹ ážŠáŸ†ážŽáž€áŸ‹ áž–áŸ’ážšáž¹áž€/áž™áž”áŸ‹ áž¬ áž€áŸ’ážšáŸ„áž™ Sun Exposure',
      en: 'Apply as needed to face, body, or hair. Refrigerate for extra cooling.',
    },
    sizes: ['100ml', '300ml'],
    newArrival: true,
  },
];

export const categories = [
  { id: 'cleanser', name: { km: 'áž˜áŸ’ážŸáŸ…/ážŸáž¶áž”áŸŠáž¼', en: 'Cleansers' }, image: '/images/268bcbd0-0186-449f-963e-51bf59d73065.png', count: 2 },
  { id: 'toner', name: { km: 'áž‘áž¹áž€áž€áž€áŸ‹', en: 'Toners' }, image: '/images/519afb53-d143-4187-be40-3ab10c24b9e4.png', count: 2 },
  { id: 'serum', name: { km: 'Serum', en: 'Serums' }, image: '/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png', count: 3 },
  { id: 'moisturizer', name: { km: 'áž€áŸ’ážšáŸ‚áž˜', en: 'Moisturisers' }, image: '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png', count: 5 },
  { id: 'sunscreen', name: { km: 'áž€áž¶ážšáž–áž¶ážš ážáŸ’áž„áŸƒ', en: 'Sunscreen' }, image: '/images/93197771-a19c-4916-98db-316b75cf0682.png', count: 1 },
  { id: 'mask', name: { km: 'Mask', en: 'Masks' }, image: '/images/9c011e81-95ce-4d5f-be76-f3594692baad.png', count: 1 },
];

export const skinConcerns = [
  { id: 'dryness', name: { km: 'ážŸáŸ’ážšážŸáŸ‹ ážŸáŸ’áž–-ážŸáŸ’áž–', en: 'Dryness & Dehydration' }, icon: 'ðŸ’§' },
  { id: 'acne', name: { km: 'áž˜áž»áž“ / ážŸ-ážŸ-ážŸ', en: 'Acne & Breakouts' }, icon: 'ðŸŒ¿' },
  { id: 'aging', name: { km: 'Anti-Aging', en: 'Signs of Aging' }, icon: 'âœ¨' },
  { id: 'dullness', name: { km: 'áž—áŸ’áž›ážº / ážŸáŸ’ážšážŸáŸ‹', en: 'Dullness & Dark Spots' }, icon: 'â˜€ï¸' },
  { id: 'sensitivity', name: { km: 'ážŸáŸ’áž”áŸ‚áž€ážšáŸ†ážáž¶áž“', en: 'Sensitivity & Redness' }, icon: 'ðŸŒ¸' },
  { id: 'oiliness', name: { km: 'ážŸáŸ’áž”áŸ‚áž€ážáŸ’áž‰áž¾', en: 'Oiliness & Pores' }, icon: 'ðŸƒ' },
];

