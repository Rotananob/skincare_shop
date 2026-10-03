import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokha Skin — សុខា | Premium Skincare Cambodia",
  description: "Sokha Skin — carefully curated authentic skincare, delivered across Cambodia. ផលិតផលថែស្បែកពិតប្រាកដ ដឹកជញ្ជូនទូទាំងប្រទេស។",
  icons: { icon: "/favicon.png", apple: "/icon.png" },
  openGraph: {
    title: "Sokha Skin — សុខា",
    description: "Beautiful skin begins with the right ritual. Premium skincare, delivered across Cambodia.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0a09",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Manrope:wght@400;500;600;700;800&family=Kantumruy+Pro:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#0c0a09', color: '#f5ede6', fontFamily: "'Manrope', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
