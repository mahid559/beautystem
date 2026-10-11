import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProductCleanser from "@/components/ProductCleanser";
import ProductSerum from "@/components/ProductSerum";
import ProductEye from "@/components/ProductEye";
import ProductEssence from "@/components/ProductEssence";

export function generateStaticParams() {
  return [
    { slug: "hydra-foam-cleanser" },
    { slug: "reset-serum" },
    { slug: "lash-and-eye-conditioner" },
    { slug: "hydra-nutrition-essence" },
    { slug: "skin-fitness-collection-1" },
    { slug: "skin-fitness-collection" },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    "hydra-foam-cleanser": "Hydra-Foam Cleanser — Beauty In Stem",
    "reset-serum": "Reset Serum — Beauty In Stem",
    "lash-and-eye-conditioner": "Lash and Eye Conditioner — Beauty In Stem",
    "hydra-nutrition-essence": "Hydra-Nutrition Essence — Beauty In Stem",
    "skin-fitness-collection-1": "Skin Fitness Collection — Beauty In Stem",
    "skin-fitness-collection": "Skin Fitness Collection — Beauty In Stem",
  };
  return {
    title: titles[params.slug] || "Product — Beauty In Stem",
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  let ProductComponent = null;
  switch (params.slug) {
    case "hydra-foam-cleanser":
      ProductComponent = ProductCleanser;
      break;
    case "reset-serum":
      ProductComponent = ProductSerum;
      break;
    case "lash-and-eye-conditioner":
      ProductComponent = ProductEye;
      break;
    case "hydra-nutrition-essence":
      ProductComponent = ProductEssence;
      break;
    case "skin-fitness-collection-1":
    case "skin-fitness-collection":
      ProductComponent = ProductCleanser;
      break;
    default:
      notFound();
  }

  return (
    <div className="page-scroll">
      <ProductComponent />
      <Footer />
    </div>
  );
}
