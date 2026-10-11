import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";
import GeoPopup from "@/components/GeoPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://stembeauty.com"),
  title: "Beauty In Stem — Korean Skincare",
  description:
    "Korean skincare formulas engineered for ultimate skin fitness. Advanced PDRN science developed in collaboration with Korean skin scientists.",
  keywords: [
    "Korean Skincare",
    "PDRN",
    "Salmon DNA",
    "Skin Fitness",
    "Beauty In Stem",
    "Hydra-Foam Cleanser",
    "Reset Serum",
    "Lash and Eye Conditioner",
    "Hydra-Nutrition Essence"
  ],
  openGraph: {
    title: "Beauty In Stem — Korean Skincare",
    description:
      "Korean skincare formulas engineered for ultimate skin fitness. Advanced PDRN science developed in collaboration with Korean skin scientists.",
    url: "https://stembeauty.com",
    siteName: "Beauty In Stem",
    images: [
      {
        url: "/assets/images/about-top.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty In Stem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty In Stem — Korean Skincare",
    description:
      "Korean skincare formulas engineered for ultimate skin fitness. Advanced PDRN science developed in collaboration with Korean skin scientists.",
    images: ["/assets/images/about-top.jpg"],
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <link href="/assets/css/app.css" rel="stylesheet" type="text/css" media="all" />
      </head>
      <body>
        <Header />
        {children}
        <CartSidebar />
        <GeoPopup />

        <div className="page-transition">
          <div className="pt-panel pt-panel--1"></div>
          <div className="pt-panel pt-panel--2"></div>
        </div>

        <Script id="shopify-vars" strategy="beforeInteractive">
          {`
            window.shopifyAssetsUrl = "/assets/images/";
            window.Shopify = window.Shopify || {};
            window.Shopify.currency = { active: "USD" };
            window.Shopify.moneyFormat = "$\{{amount}}";
          `}
        </Script>
        <Script src="/assets/js/vendors.js" strategy="afterInteractive" />
        <Script src="/assets/js/mock-cart.js" strategy="afterInteractive" />
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
