import UsMain from "@/components/UsMain";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us — Beauty In Stem",
  description:
    "Korean skincare formulas engineered for ultimate skin fitness.",
};

export default function UsPage() {
  return (
    <div className="page-scroll">
      <UsMain />
      <Footer />
    </div>
  );
}
