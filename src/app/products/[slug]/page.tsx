import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductView from "@/components/ProductView";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found — Beauty In Stem",
    };
  }

  return {
    title: `${product.title} (${product.volume}) — Beauty In Stem`,
    description: product.description,
    openGraph: {
      title: `${product.title} — Beauty In Stem Korean Skincare`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
  };
}

export default function Page({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
}
