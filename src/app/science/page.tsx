import ScienceMain from "@/components/ScienceMain";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The science of skin fitness — Beauty In Stem",
  description:
    "Training, Not Treatment. With scientifically engineered biological inputs the skin adapts and strengthens over time.",
};

export default function SciencePage() {
  return (
    <div className="page-scroll">
      <ScienceMain />
      <Footer />
    </div>
  );
}
