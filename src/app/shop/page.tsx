import ShopMain from "@/components/ShopMain";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Beauty In Stem",
  description:
    "Explore our collection of Korean skincare formulas engineered for ultimate skin fitness.",
};

export default function ShopPage() {
  return (
    <div className="page-scroll">
      <ShopMain />
      <Footer />
    </div>
  );
}
