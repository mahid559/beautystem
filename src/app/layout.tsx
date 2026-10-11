import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://stembeauty.com"),
  title: "Beauty In Stem — Korean Skincare & Bio-Cellular Skin Fitness",
  description:
    "Award-winning Korean skincare formulas engineered for ultimate skin fitness. Advanced salmon DNA PDRN bio-science developed in collaboration with leading Seoul dermatological scientists.",
  keywords: [
    "Korean Skincare",
    "PDRN",
    "Salmon DNA",
    "Skin Fitness",
    "Beauty In Stem",
    "Luxury Skincare",
    "Hydra-Foam Cleanser",
    "Reset Serum",
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
        alt: "Beauty In Stem Luxury Skincare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty In Stem — Korean Skincare",
    description:
      "Korean skincare formulas engineered for ultimate skin fitness.",
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
      <body className="min-h-screen flex flex-col bg-stem-pearl text-stem-dark antialiased selection:bg-stem-taupe selection:text-white">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
