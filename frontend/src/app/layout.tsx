import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import MenuDrawer from '@/components/MenuDrawer';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sokha Skin — សុខា | Premium Skincare Cambodia',
  description: 'Sokha Skin — carefully curated authentic skincare, delivered across Cambodia. ផលិតផលថែស្បែកពិតប្រាកដ ដឹកជញ្ជូនទូទាំងប្រទេស។',
  icons: { icon: '/favicon.png', apple: '/icon.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#261E19',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Manrope:wght@400;500;600;700;800&family=Kantumruy+Pro:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF5EE] text-[#2E2620] antialiased selection:bg-[#E7DDD0] selection:text-[#2E2620]">
        <ShopProvider>
          <Navbar />
          <MenuDrawer />
          <CartDrawer />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </ShopProvider>
      </body>
    </html>
  );
}
