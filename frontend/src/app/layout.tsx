import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeYoung — វ៉េយ៉ាំង | Premium Skincare Cambodia",
  description: "WeYoung — ផលិតផលថែស្បែកល្អបំផុត ពិតប្រាកដ ដឹកជញ្ជូនទូទាំងប្រទេស។ Premium skincare for every skin, every age.",
  icons: { icon: "/favicon.png", apple: "/icon.png" },
  keywords: ["skincare", "WeYoung", "Cambodia", "beauty", "serum", "moisturizer"],
  openGraph: {
    title: "WeYoung — វ៉េយ៉ាំង",
    description: "Beautiful skin at every age. Premium skincare, delivered across Cambodia.",
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
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Manrope:wght@400;500;600;700;800&family=Kantumruy+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
