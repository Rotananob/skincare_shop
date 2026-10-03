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
    name: { km: 'សាប៊ូលាងមុខទឹកអង្ករ', en: 'Rice Water Gentle Cleanser' },
    tagline: { km: 'ស្អាតដោយស្លូតបូត មិនខូចស្បែក', en: 'Soft enough for every day, thorough enough to matter.' },
    description: {
      km: 'ក្រែមលាងមុខស្រាលស្រាល ផ្អែកលើទឹកអង្ករ និង Ceramide ជួយសម្អាតកំទេចក្រអូបដោយ មិនខូចស្រទាប់ Natural Barrier របស់ស្បែក។',
      en: 'A creamy, low-pH cleanser built on rice water and ceramides. It removes the day without stripping your skin barrier — Cambodia-tested through heat and humidity.'
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
      { km: 'ថែរក្សា Natural Barrier', en: 'Preserves natural skin barrier' },
      { km: 'pH ទាប សម្រាប់ស្បែករំខាន', en: 'Low pH, gentle for sensitive skin' },
      { km: 'លាងស្អាតដោយមិនខូចសំណើម', en: 'Cleanses without stripping moisture' },
    ],
    ingredients: {
      km: 'Rice Water (Oryza Sativa), Ceramide NP, Panthenol, Glycerin, Centella Asiatica Extract.',
      en: 'Rice Water (Oryza Sativa), Ceramide NP, Panthenol, Glycerin, Centella Asiatica Extract.',
    },
    howToUse: {
      km: 'ប្រើព្រឹក និងពេលយប់ ជ្រីលើទឹក រួចដុសថ្នមៗ រួចលាងជម្រះ',
      en: 'Morning and evening. Dampen face, massage gently, rinse.',
    },
    sizes: ['100ml', '150ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p02',
    slug: 'niacinamide-toner',
    name: { km: 'ទឹកកក់ Niacinamide 10%', en: 'Niacinamide 10% Clarifying Toner' },
    tagline: { km: 'រន្ធញើសតូច ស្បែកស្រស់ ស្មើ', en: 'Pores minimised. Tone evened. Shine gone.' },
    description: {
      km: 'ទឹកកក់ Niacinamide 10% ជ្រៀតចូលស្ទើរ Instantly ជួយបំបាត់រន្ធញើស ស្បែកខ្ញើ និងស្នាមខ្មៅ ល្អសម្រាប់អាកាសធាតុក្ដៅ',
      en: 'A water-light 10% niacinamide toner that targets pores, shine, and uneven tone. Works fast in Cambodia\'s heat — no stickiness, just results.',
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
      { km: 'បំបាត់រន្ធញើស 30 ថ្ងៃ', en: 'Visibly minimises pores in 30 days' },
      { km: 'ស្បែករលួច មិនខ្ញើ', en: 'Matte, non-greasy finish' },
      { km: 'ស្នាមខ្មៅស្រអាប់ក្នុង 4 សប្តាហ៍', en: 'Fades dark spots in 4 weeks' },
    ],
    ingredients: {
      km: 'Niacinamide 10%, Zinc PCA, Hyaluronic Acid, Panthenol, Witch Hazel.',
      en: 'Niacinamide 10%, Zinc PCA, Hyaluronic Acid, Panthenol, Witch Hazel.',
    },
    howToUse: {
      km: 'ប្រើក្រោយពេលលាងមុខ ដំណក់លើ Cotton Pad ចាក់លើមុខ ព្រឹក និងយប់',
      en: 'After cleansing, apply with a cotton pad or pat directly. Morning and night.',
    },
    sizes: ['150ml'],
    bestSeller: true,
  },
  {
    id: 'p03',
    slug: 'vitamin-c-brightening-serum',
    name: { km: 'Serum Vitamin C ភ្លឺ', en: 'Vitamin C Brightening Serum' },
    tagline: { km: 'ភ្លឺ ស្រស់ ស្ពឹករបស់ Vitamin C', en: 'Your Monday-morning glow, every day.' },
    description: {
      km: 'Serum Vitamin C 15% ជាមួយ Ferulic Acid ជួយភ្លឺ ស្ប៉ាង ស្បែកស្រស់ ក្នុងរយៈពេល 2-3 សប្តាហ៍',
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
      { km: 'ភ្លឺស្ប៉ាង ក្នុង 2-3 សប្តាហ៍', en: 'Visible brightening in 2–3 weeks' },
      { km: 'ការពារ Free Radical', en: 'Shields against free radical damage' },
      { km: 'ស្ប-ស្ពឹករ Vitamin C អស់ 24 ម៉ោង', en: 'Stable formula, active for 24 hours' },
    ],
    ingredients: {
      km: 'L-Ascorbic Acid 15%, Ferulic Acid, Vitamin E (Tocopherol), Hyaluronic Acid.',
      en: 'L-Ascorbic Acid 15%, Ferulic Acid, Vitamin E (Tocopherol), Hyaluronic Acid.',
    },
    howToUse: {
      km: 'ប្រើព្រឹក 2-3 ដំណក់ ស្ទង់ ដំណក់ ហើយប្រើ SPF ជានាំជូន',
      en: 'Apply 2–3 drops in the morning before SPF. Let absorb before moisturiser.',
    },
    sizes: ['30ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p04',
    slug: 'ceramide-barrier-cream',
    name: { km: 'ក្រែមជួសជុល Barrier Ceramide', en: 'Ceramide Barrier Repair Cream' },
    tagline: { km: 'ស្បែករឹងមាំ ជូររំអិល ហ្វតបត់', en: 'When your skin needs a reset.' },
    description: {
      km: 'ក្រែម Ceramide ជួស Barrier ស្បែក ជូររំអិល ហ្វតបត់ ស្ដើងស្រស់ ល្អសម្រាប់ស្បែករំខាន',
      en: 'A richer cream with ceramides, squalane, and peptides to rebuild a compromised barrier. Rich without heaviness — sinks in fast in the heat.',
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
      { km: 'ជួស Barrier ក្នុង 7 ថ្ងៃ', en: 'Measurably repairs barrier in 7 days' },
      { km: 'ធូររំអិល 72 ម៉ោង', en: 'Long-lasting 72-hour hydration' },
      { km: 'ស្ងប់ស្បែករំខាន ភ្លាមៗ', en: 'Calms reactive skin instantly' },
    ],
    ingredients: {
      km: 'Ceramide NP, Ceramide EOP, Squalane, Peptide Complex, Shea Butter, Panthenol.',
      en: 'Ceramide NP, Ceramide EOP, Squalane, Peptide Complex, Shea Butter, Panthenol.',
    },
    howToUse: {
      km: 'ប្រើ 1-2 ដង ក្នុងមួយថ្ងៃ ព្រឹក និងយប់ ក្រោយ Serum',
      en: 'Apply morning and night after serum. Use a pea-size for face and neck.',
    },
    sizes: ['50ml'],
    featured: true,
  },
  {
    id: 'p05',
    slug: 'centella-water-serum',
    name: { km: 'Serum ស្រស់ Centella Asiatica', en: 'Centella Asiatica Water Serum' },
    tagline: { km: 'ស្ងប់ ធូររំអិល ពេលអាកាសធាតុក្ដៅ', en: 'The calm-skin serum for Cambodia\'s heat.' },
    description: {
      km: 'Serum ស្រាល ផ្អែកលើ Centella Asiatica និង Hyaluronic Acid ធូររំអិលរហ័ស ស្ងប់ស្បែក',
      en: 'A featherlight water serum with Centella Asiatica extract and hyaluronic acid. It absorbs quickly, layers well under sunscreen, and leaves skin feeling calm — made for Cambodia\'s hot, humid days.',
    },
    brand: 'Sokha Skin',
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
      { km: 'ធូររំអិល 12 ម៉ោង ភ្លាមៗ', en: 'Immediate 12-hour hydration' },
      { km: 'ស្ងប់ស្បែក', en: 'Skin feels calm and soothed' },
      { km: 'ស្រស់ ស្រស់ស្អាតមិនស្អិត', en: 'Fast-absorbing, never sticky' },
    ],
    ingredients: {
      km: 'Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Madecassoside.',
      en: 'Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Madecassoside.',
    },
    howToUse: {
      km: 'ចំណុចល័ក 2-3 ដំណក់ ដំណក់ ក្រោយ Toner ក្នុងព្រឹក/យប់',
      en: 'Pat 2–3 drops after toner, before moisturiser, morning and night.',
    },
    sizes: ['30ml', '50ml'],
    bestSeller: true,
    newArrival: true,
  },
  {
    id: 'p06',
    slug: 'spf50-daily-sunscreen',
    name: { km: 'គ្រីម SPF50+ ប្រចាំថ្ងៃ', en: 'SPF50+ Daily Sunscreen' },
    tagline: { km: 'ការពារថ្ងៃ ស្អាត មិន White Cast', en: 'Tropical-proof. No white cast. Works.' },
    description: {
      km: 'ក្រែម SPF50+ PA++++ ស្រាល ស្ដើង ជ្រៀតចូលរហ័ស មិន White Cast ល្អ ជា Base Primer',
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
      { km: 'មិន White Cast', en: 'No white cast' },
      { km: 'ធន់ញើស ក្ដៅ Humid', en: 'Sweat-resistant in humid weather' },
    ],
    ingredients: {
      km: 'Uvinul A Plus, Tinosorb S, Niacinamide, Squalane, Panthenol.',
      en: 'Uvinul A Plus, Tinosorb S, Niacinamide, Squalane, Panthenol.',
    },
    howToUse: {
      km: 'ប្រើ 2 ម្រាម ២០ នាទីមុនចេញ ឡើងសូរ 2-3 ម៉ោង',
      en: 'Apply two finger-lengths 20 minutes before sun exposure; reapply every 2–3 hours outdoors.',
    },
    sizes: ['50ml'],
    bestSeller: true,
    featured: true,
  },
  {
    id: 'p07',
    slug: 'green-tea-sheet-mask',
    name: { km: 'Mask ក្រដាស Green Tea (5 គ្រាប់)', en: 'Green Tea Sheet Mask (5 pack)' },
    tagline: { km: '១៥ នាទី ស្ងប់ ធូររំអិល', en: 'Fifteen quiet minutes of hydration and calm.' },
    description: {
      km: 'Mask ក្រដាស Tencel ស្រូប Green Tea និង Rice Ferment ស្ងប់ ធូររំអិល ល្អពេលស្បែកអស់កម្លាំង',
      en: 'Soft Tencel sheets soaked in green tea and rice ferment — for tired-skin days or the night before something important.',
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
      { km: 'ធូររំអិលភ្លាមៗ', en: 'Instant hydration' },
      { km: 'ស្ងប់ស្បែកយ៉ាក់ចិត្ត', en: 'Comforts stressed skin' },
      { km: 'គ្មាន Fragrance', en: 'Fragrance-free' },
    ],
    ingredients: {
      km: 'Camellia Sinensis Leaf Extract, Rice Ferment Filtrate, Panthenol, Sodium Hyaluronate.',
      en: 'Camellia Sinensis Leaf Extract, Rice Ferment Filtrate, Panthenol, Sodium Hyaluronate.',
    },
    howToUse: {
      km: 'ប្រើបន្ទាប់លាងមុខ ១៥-២០ នាទី ដក ហើយ ស្ទង់ Essence ដែលនៅ',
      en: 'Apply to clean skin for 15–20 minutes, remove, and pat in the remaining essence.',
    },
    sizes: ['5 × 25ml'],
    newArrival: true,
  },
  {
    id: 'p08',
    slug: 'snail-repair-essence',
    name: { km: 'Essence ជួសជុល Snail', en: 'Snail Repair Essence' },
    tagline: { km: 'ជំហានចាំបាច់ ធ្វើឲ Glass Skin', en: 'The bouncy, glossy-skin step your routine is missing.' },
    description: {
      km: 'Essence ជាមួយ Snail Mucin 74% និង Galactomyces ធ្វើឲ Glass Skin ក្នុងការប្រើប្រចាំថ្ងៃ',
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
      { km: 'ជ្រៅ Plumping ធូររំអិល', en: 'Deep plumping hydration' },
      { km: 'ភ្លឺ Glass Skin', en: 'Glass-skin luminosity' },
      { km: 'ជួយជួសជុលពេលដេក', en: 'Supports overnight recovery' },
    ],
    ingredients: {
      km: 'Snail Secretion Filtrate (74%), Galactomyces Ferment Filtrate, Sodium Hyaluronate, Trehalose.',
      en: 'Snail Secretion Filtrate (74%), Galactomyces Ferment Filtrate, Sodium Hyaluronate, Trehalose.',
    },
    howToUse: {
      km: 'ចំណុចល័ក 2-3 Pump ក្រោយ Toner មុន Serum',
      en: 'Pat 2–3 pumps after toner, before serum.',
    },
    sizes: ['100ml'],
    newArrival: true,
  },
  {
    id: 'p09',
    slug: 'caffeine-eye-cream',
    name: { km: 'ក្រែមមុខភ្នែក Caffeine', en: 'Caffeine Eye Cream' },
    tagline: { km: 'ភ្នែករំភ្លឺ ព្រឹករំភ្លឺ', en: 'A bright morning for tired eyes.' },
    description: {
      km: 'ក្រែមមុខភ្នែក Caffeine និង Peptides ជួយបំបាត់រន្ទះ ធ្វើឲ Make-up ស្ពឹក',
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
      { km: 'ព្រះស្ងប់ De-Puff', en: 'Cooling, de-puffing feel' },
      { km: 'ស្ពឹក Make-up', en: 'Invisible under makeup' },
      { km: 'ស្ងប់ ស្រស់ ភ្នែក', en: 'Gentle for the eye area' },
    ],
    ingredients: {
      km: 'Caffeine, Acetyl Tetrapeptide-5, Niacinamide, Squalane, Vitamin E.',
      en: 'Caffeine, Acetyl Tetrapeptide-5, Niacinamide, Squalane, Vitamin E.',
    },
    howToUse: {
      km: 'ដំណក់ចូលជុំភ្នែក ព្រឹក និងយប់',
      en: 'Tap a rice-grain amount around the eyes morning and night.',
    },
    sizes: ['15ml'],
  },
  {
    id: 'p10',
    slug: 'coconut-body-lotion',
    name: { km: 'លាបខ្លួន Coconut ស្រស់', en: 'Coconut Body Lotion' },
    tagline: { km: 'ធូររំអិល ស្រស់ ក្លិន Coconut', en: 'Lightweight moisture with a soft coconut scent.' },
    description: {
      km: 'Lotion ខ្លួន Coconut ស្រស់ ស្ទើរ Instant Absorb ធូររំអិល ស្ងប់ ក្ដៅ-Humid',
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
      { km: 'ស្រូបចូលរហ័ស', en: 'Fast-absorbing' },
      { km: 'ធូររំអិល ២៤ ម៉ោង', en: '24-hour moisture lock' },
      { km: 'ក្លិន Coconut ស្ងប់', en: 'Soft coconut scent' },
    ],
    ingredients: {
      km: 'Cocos Nucifera Oil, Sodium Hyaluronate, Shea Butter, Glycerin.',
      en: 'Cocos Nucifera Oil, Sodium Hyaluronate, Shea Butter, Glycerin.',
    },
    howToUse: {
      km: 'ដំណក់ ២-៣ ដង ខ្លួន ក្រោយងូតទឹក',
      en: 'Apply generously to body after showering.',
    },
    sizes: ['200ml'],
    newArrival: true,
  },
  {
    id: 'p11',
    slug: 'salicylic-acid-acne-cleanser',
    name: { km: 'សាប៊ូ Salicylic Acid ប្រឆាំងមុន', en: 'Salicylic Acid Acne Cleanser' },
    tagline: { km: 'ស្អាតស្ទះ ដោះស្រាយមុន', en: 'Unclog. Calm. Clear.' },
    description: {
      km: 'ជ្រូតលើ Salicylic Acid 2% ស្ងប់មុន ជ្រូតរំអិល Pores ស្ងប់ Cambodia Climate',
      en: 'A medicated 2% salicylic acid wash that dissolves pore-clogging debris and cools inflammation — formulated for breakout-prone skin in humid climates.',
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
      { km: 'ដោះស្រាយ Blackhead', en: 'Dissolves blackheads and congestion' },
      { km: 'ស្ងប់ Red Spot ភ្លាមៗ', en: 'Visibly calms active breakouts' },
      { km: 'ការពារ Pores ស្រើប', en: 'Prevents new clogged pores' },
    ],
    ingredients: {
      km: 'Salicylic Acid 2%, Tea Tree Oil, Niacinamide, Centella Asiatica.',
      en: 'Salicylic Acid 2%, Tea Tree Oil, Niacinamide, Centella Asiatica.',
    },
    howToUse: {
      km: 'ព្រឹក/យប់ ២-៣ ដង ក្នុងសប្តាហ៍ ក្រោយលាងស្អាត',
      en: 'Use 2–3 times per week, morning or evening. Follow with moisturiser.',
    },
    sizes: ['150ml'],
    bestSeller: true,
  },
  {
    id: 'p12',
    slug: 'retinol-night-cream',
    name: { km: 'ក្រែមយប់ Retinol 0.3%', en: 'Retinol 0.3% Night Cream' },
    tagline: { km: 'ជួសជុល Anti-Aging ពេលដេក', en: 'While you sleep, it works.' },
    description: {
      km: 'ក្រែមយប់ Retinol 0.3% ជួស Collagen ស្បែក Texture ល្អ ក្នុង 4-8 សប្តាហ៍',
      en: 'An entry-level 0.3% retinol with squalane and peptides to ease skin into the routine. Designed for Cambodia beginners — effective, less irritation.',
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
      { km: 'Texture ល្អ ក្នុង 4-8 សប្តាហ៍', en: 'Refined texture in 4–8 weeks' },
      { km: 'ជួស Collagen ផលិត', en: 'Boosts collagen production' },
      { km: 'Fade Fine Lines', en: 'Reduces fine lines gradually' },
    ],
    ingredients: {
      km: 'Retinol 0.3%, Squalane, Peptide Complex, Ceramide NP, Vitamin E.',
      en: 'Retinol 0.3%, Squalane, Peptide Complex, Ceramide NP, Vitamin E.',
    },
    howToUse: {
      km: 'ប្រើ ២-៣ ដង ក្នុងសប្តាហ៍ (យប់) ហើយ Build Up ជាដំណើរ',
      en: 'Start 2–3 nights per week and build up. Always follow with SPF the next morning.',
    },
    sizes: ['50ml'],
  },
  {
    id: 'p13',
    slug: 'hyaluronic-acid-gel-moisturizer',
    name: { km: 'ក្រែម Gel Hyaluronic Acid', en: 'Hyaluronic Acid Gel Moisturiser' },
    tagline: { km: 'ស្រស់ ស្ងប់ ស្ពឹកលើ Humid', en: 'Dewy skin, zero heaviness.' },
    description: {
      km: 'Gel Moisturizer Hyaluronic Acid ស្រស់ ស្ទើររំអិល ស្ងប់ ល្អ Cambodia Humid',
      en: 'A water-gel moisturiser with three molecular weights of hyaluronic acid. Soaks in fast, leaves skin plump and dewy — perfect for humid days.',
    },
    brand: 'Sokha Skin',
    category: 'moisturizer',
    price: 17,
    image: '/images/d7d2d2ae-10dd-485a-b6d6-34776640c893.png',
    stock: 63,
    rating: 4.6,
    reviewCount: 156,
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['dryness', 'dullness'],
    benefits: [
      { km: 'ធូររំអិល Plump ភ្លាម', en: 'Plumps skin instantly' },
      { km: 'ស្ទើរ Matte ស្ងប់', en: 'Lightweight, non-greasy' },
      { km: 'ល្អ Layer ជាមួយ Serum', en: 'Layers beautifully over serums' },
    ],
    ingredients: {
      km: 'Sodium Hyaluronate (3 weights), Tremella Mushroom Extract, Panthenol, Glycerin.',
      en: 'Sodium Hyaluronate (3 weights), Tremella Mushroom Extract, Panthenol, Glycerin.',
    },
    howToUse: {
      km: 'ប្រើព្រឹក/យប់ ក្រោយ Serum ២-៣ ដំណក់ ដំណក់',
      en: 'Apply after serum, morning and night. A little goes a long way.',
    },
    sizes: ['50ml', '100ml'],
    bestSeller: true,
  },
  {
    id: 'p14',
    slug: 'aha-bha-exfoliating-toner',
    name: { km: 'Toner AHA+BHA Exfoliate', en: 'AHA+BHA Exfoliating Toner' },
    tagline: { km: 'ជ្រូត Exfoliate ស្ងប់ ស្ពឹករ', en: 'Sunday-night skin, any night.' },
    description: {
      km: 'Toner AHA+BHA Exfoliate ស្ងប់ ជ្រូតក្រហ Texture ស្ប-ស្ព PH ល្អ',
      en: 'A gentle chemical exfoliant with AHA (glycolic + lactic) and BHA (salicylic) to slough off dead skin, smooth texture, and clarify tone — without the burn.',
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
      { km: 'ជ្រូត Exfoliate ស្ងប់', en: 'Gentle chemical exfoliation' },
      { km: 'Texture ស្ប-ស្ពឹក ក្នុង 2 សប្តាហ៍', en: 'Smoother texture in 2 weeks' },
      { km: 'ភ្លឺ ស្ប-ស្ពឹករ', en: 'Brighter, more even tone' },
    ],
    ingredients: {
      km: 'Glycolic Acid 5%, Lactic Acid 3%, Salicylic Acid 0.5%, Aloe Vera, Panthenol.',
      en: 'Glycolic Acid 5%, Lactic Acid 3%, Salicylic Acid 0.5%, Aloe Vera, Panthenol.',
    },
    howToUse: {
      km: 'ប្រើ ២-៣ ដង ក្នុងសប្តាហ៍ (យប់) ហើយ SPF ព្រឹក',
      en: 'Use 2–3 evenings per week. Always follow with SPF the next morning.',
    },
    sizes: ['150ml'],
    newArrival: true,
  },
  {
    id: 'p15',
    slug: 'aloe-soothing-gel',
    name: { km: 'Gel ស្ងប់ Aloe Vera 99%', en: 'Aloe Vera 99% Soothing Gel' },
    tagline: { km: 'ស្ងប់ ចល់ ទន់ ត្រជាក់', en: 'Cool. Calm. Instant relief.' },
    description: {
      km: 'Gel Aloe Vera 99% ស្ងប់ ត្រជាក់ ស្ព-ស្ព-ស្ព ល្អ ក្រោយ Sun ឬ Skin Burn',
      en: 'A pure 99% aloe vera gel for instant soothing — post-sun, post-wax, or any angry skin. Multi-use: face, body, hair.',
    },
    brand: 'Sokha Skin',
    category: 'moisturizer',
    price: 10,
    image: '/images/9c011e81-95ce-4d5f-be76-f3594692baad.png',
    stock: 95,
    rating: 4.7,
    reviewCount: 221,
    skinTypes: ['sensitive', 'oily', 'combination', 'normal', 'dry'],
    concerns: ['sensitivity', 'acne', 'dullness'],
    benefits: [
      { km: 'ស្ងប់ ភ្លាមៗ', en: 'Immediate soothing relief' },
      { km: 'ត្រជាក់ ស្ងប់ ក្ដៅ', en: 'Cooling effect for sunburn' },
      { km: 'ប្រើបាន Face, Body, Hair', en: 'Multi-use: face, body, hair' },
    ],
    ingredients: {
      km: 'Aloe Barbadensis Leaf Juice (99%), Panthenol, Allantoin, Sodium Hyaluronate.',
      en: 'Aloe Barbadensis Leaf Juice (99%), Panthenol, Allantoin, Sodium Hyaluronate.',
    },
    howToUse: {
      km: 'ដំណក់ ដំណក់ ព្រឹក/យប់ ឬ ក្រោយ Sun Exposure',
      en: 'Apply as needed to face, body, or hair. Refrigerate for extra cooling.',
    },
    sizes: ['100ml', '300ml'],
    newArrival: true,
  },
];

export const categories = [
  { id: 'cleanser', name: { km: 'ម្សៅ/សាប៊ូ', en: 'Cleansers' }, image: '/images/268bcbd0-0186-449f-963e-51bf59d73065.png', count: 2 },
  { id: 'toner', name: { km: 'ទឹកកក់', en: 'Toners' }, image: '/images/519afb53-d143-4187-be40-3ab10c24b9e4.png', count: 2 },
  { id: 'serum', name: { km: 'Serum', en: 'Serums' }, image: '/images/6ac90e63-54f0-45b6-b5d3-1cf88e8e45e2.png', count: 3 },
  { id: 'moisturizer', name: { km: 'ក្រែម', en: 'Moisturisers' }, image: '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png', count: 5 },
  { id: 'sunscreen', name: { km: 'ការពារ ថ្ងៃ', en: 'Sunscreen' }, image: '/images/93197771-a19c-4916-98db-316b75cf0682.png', count: 1 },
  { id: 'mask', name: { km: 'Mask', en: 'Masks' }, image: '/images/9c011e81-95ce-4d5f-be76-f3594692baad.png', count: 1 },
];

export const skinConcerns = [
  { id: 'dryness', name: { km: 'ស្រស់ ស្ព-ស្ព', en: 'Dryness & Dehydration' }, icon: '💧' },
  { id: 'acne', name: { km: 'មុន / ស-ស-ស', en: 'Acne & Breakouts' }, icon: '🌿' },
  { id: 'aging', name: { km: 'Anti-Aging', en: 'Signs of Aging' }, icon: '✨' },
  { id: 'dullness', name: { km: 'ភ្លឺ / ស្រស់', en: 'Dullness & Dark Spots' }, icon: '☀️' },
  { id: 'sensitivity', name: { km: 'ស្បែករំខាន', en: 'Sensitivity & Redness' }, icon: '🌸' },
  { id: 'oiliness', name: { km: 'ស្បែកខ្ញើ', en: 'Oiliness & Pores' }, icon: '🍃' },
];
