# Skincare Shop — Sokha Skin 🌸

> Premium skincare e-commerce for Cambodia market, built with **Next.js** (frontend) + **NestJS** (backend)

## 📁 Project Structure

```
skincare_shop/
├── frontend/          ← Next.js 15 + Tailwind CSS + TypeScript
│   ├── src/
│   │   ├── app/              ← App Router pages
│   │   │   ├── page.tsx      ← Homepage
│   │   │   ├── shop/         ← Shop listing page
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/   ← Product detail page
│   │   │   │       └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/       ← Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Cart.tsx
│   │   │   └── ...
│   │   ├── context/          ← React contexts
│   │   │   ├── CartContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── data/             ← Static data
│   │   │   └── products.ts   ← All 15 products
│   │   ├── hooks/            ← Custom hooks
│   │   └── types/            ← TypeScript types
│   └── public/
│       └── images/           ← 15 product images
│
├── backend/           ← NestJS (placeholder — implement later)
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       └── modules/
│           ├── products/     ← TODO
│           ├── orders/       ← TODO
│           ├── users/        ← TODO
│           └── auth/         ← TODO
│
└── README.md
```

## 🚀 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

### Backend (coming soon)
```bash
cd backend
npm install
npm run start:dev
# → http://localhost:8000
```

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0c0a09` | Main background |
| Card | `#1a1714` | Product cards |
| Primary text | `#f5ede6` | Headings |
| Secondary text | `#a89080` | Labels |
| Accent | `#c9a882` | Gold highlights |

**Fonts:** Fraunces (headings) · Manrope (body) · Kantumruy Pro (Khmer)

## 🌏 Bilingual Support

All content is bilingual: **Khmer (km)** + **English (en)**

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | NestJS, TypeORM, PostgreSQL (planned) |
| Auth | JWT + Passport (planned) |
| Deployment | Vercel (frontend), Railway (backend) |
