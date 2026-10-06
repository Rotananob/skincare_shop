# WeYoung Skin 🌸

> Premium skincare e-commerce for the Cambodian market, built with **Next.js 15** (Frontend) + **NestJS** (Backend)

WeYoung Skin is a modern, bilingual (Khmer + English) e-commerce platform designed for high-performance and a premium user experience.

---

## 📁 Project Structure

```
skincare_shop/
├── frontend/          ← Next.js 15 + Tailwind CSS v4 + TypeScript
│   ├── src/
│   │   ├── app/              ← App Router pages
│   │   │   ├── page.tsx      ← Homepage
│   │   │   ├── shop/         ← Shop listing page
│   │   │   ├── about/        ← About page
│   │   │   ├── contact/      ← Contact page
│   │   │   ├── account/      ← User account page
│   │   │   ├── checkout/     ← Checkout flow
│   │   │   ├── layout.tsx    ← Root layout & font injection
│   │   │   └── globals.css   ← Tailwind entry & global overrides
│   │   ├── components/       ← Reusable React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── MenuDrawer.tsx
│   │   │   └── ...
│   │   ├── context/          ← React contexts (ShopContext)
│   │   ├── data/             ← Static data (Products, Translations)
│   │   └── types/            ← TypeScript type definitions
│   └── public/
│       └── images/           ← Optimized product and UI imagery
│
├── backend/           ← NestJS (Planned Architecture)
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       └── modules/
│           ├── products/
│           ├── orders/
│           ├── users/
│           └── auth/
│
└── README.md
```

## 🚀 Getting Started

### Frontend (Live)
```bash
cd frontend
npm install
npm run dev
# → Live at http://localhost:3000
```

### Backend (Coming Soon)
```bash
cd backend
npm install
npm run start:dev
# → API at http://localhost:8000
```

## 🎨 Design System

Our UI is built around a dark luxury aesthetic with warm earthy tones, optimized for the Cambodian climate and market.

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0c0a09` | Main dark background |
| Card | `#1a1714` | Product and info cards |
| Primary text | `#f5ede6` | Headings and primary copy |
| Secondary text | `#a89080` | Labels and descriptions |
| Accent | `#c9a882` | Gold highlights and branding |
| Badge | `#2d4a2d` | Success states and trust badges |

**Typography:** 
- `Fraunces` (Headings)
- `Manrope` (Body)
- `Kantumruy Pro` (Khmer Script)

## 🌏 Bilingual Support

All content is fully bilingual, easily toggled via the navbar:
- **Khmer (km)** — Primary audience
- **English (en)** — Secondary audience

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| State Management | React Context API |
| Backend | NestJS, TypeORM, PostgreSQL (Planned) |
| Auth | JWT + Passport (Planned) |
| Deployment | Vercel (Frontend), Railway (Backend) |

---
*Developed for WeYoung Cambodia.*
