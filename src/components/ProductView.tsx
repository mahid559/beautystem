"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Plus,
  Minus,
  Check,
  Truck,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "how" | "ingred" | "clin">(
    "desc"
  );

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-stem-pearl min-h-screen py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stem-muted uppercase tracking-wider mb-8">
        <Link href="/" className="hover:text-stem-espresso transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-stem-espresso transition-colors">
          Shop
        </Link>
        <span>/</span>
        <span className="text-stem-espresso font-semibold truncate max-w-[200px]">
          {product.title}
        </span>
      </div>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden border border-stem-border shadow-md">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.title}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-metropolis font-semibold uppercase text-stem-espresso border border-stem-border">
              {product.step}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-stem-espresso shadow-md"
                      : "border-stem-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} thumb ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Purchase Actions */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-2">
              {product.step}
            </span>
            <h1 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="text-sm sm:text-base text-stem-muted font-degular mt-2">
              {product.subtitle}
            </p>

            <div className="flex items-baseline gap-4 mt-6 pb-6 border-b border-stem-border">
              <span className="text-3xl font-mono font-bold text-stem-espresso">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base font-mono text-stem-muted line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-stem-muted font-mono uppercase bg-stem-surface px-2.5 py-1 rounded border border-stem-border">
                {product.volume}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stem-espresso/90 leading-relaxed font-degular mt-6">
              {product.tagline}
            </p>
          </div>

          {/* Purchase Block */}
          <div className="space-y-4 pt-4 border-t border-stem-border">
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-stem-border rounded-lg bg-white p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-stem-espresso hover:text-stem-taupe"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-mono text-sm font-semibold text-stem-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-stem-espresso hover:text-stem-taupe"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-widest font-semibold rounded-lg transition-colors shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Add To Bag — ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-3 text-[11px] text-stem-muted">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-stem-taupe flex-shrink-0" />
                <span>Free express shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stem-taupe flex-shrink-0" />
                <span>100% Authentic Seoul PDRN Formulation</span>
              </div>
            </div>
          </div>

          {/* Interactive Information Tabs */}
          <div className="border border-stem-border rounded-xl bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 border-b border-stem-border text-center text-xs font-metropolis uppercase">
              <button
                onClick={() => setActiveTab("desc")}
                className={`py-3 transition-colors ${
                  activeTab === "desc"
                    ? "bg-stem-pearl font-bold text-stem-espresso border-b-2 border-stem-espresso"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("how")}
                className={`py-3 transition-colors ${
                  activeTab === "how"
                    ? "bg-stem-pearl font-bold text-stem-espresso border-b-2 border-stem-espresso"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Usage
              </button>
              <button
                onClick={() => setActiveTab("ingred")}
                className={`py-3 transition-colors ${
                  activeTab === "ingred"
                    ? "bg-stem-pearl font-bold text-stem-espresso border-b-2 border-stem-espresso"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Actives
              </button>
              <button
                onClick={() => setActiveTab("clin")}
                className={`py-3 transition-colors ${
                  activeTab === "clin"
                    ? "bg-stem-pearl font-bold text-stem-espresso border-b-2 border-stem-espresso"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Clinical
              </button>
            </div>

            <div className="p-6 text-xs text-stem-muted leading-relaxed font-degular">
              {activeTab === "desc" && (
                <div className="space-y-4">
                  <p>{product.description}</p>
                  <ul className="space-y-2 pt-2">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-stem-espresso">
                        <Check className="w-4 h-4 text-stem-taupe flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "how" && (
                <div className="space-y-3">
                  <h4 className="font-metropolis uppercase font-semibold text-stem-espresso text-xs">
                    Application Instructions:
                  </h4>
                  <p>{product.howToUse}</p>
                  <p className="text-[11px] text-stem-taupe">
                    Pro Tip: Warm between fingers for 5 seconds to activate micro-molecular penetration before gently pressing into the skin.
                  </p>
                </div>
              )}

              {activeTab === "ingred" && (
                <div className="space-y-3">
                  {product.ingredients.map((ing, i) => (
                    <div key={i} className="pb-2 border-b border-stem-border/50 last:border-none">
                      <strong className="font-metropolis uppercase text-stem-espresso block mb-0.5">
                        {ing.name}
                      </strong>
                      <p>{ing.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "clin" && (
                <div className="space-y-3">
                  <h4 className="font-metropolis uppercase font-semibold text-stem-espresso text-xs mb-2">
                    Consumer Study Feedback:
                  </h4>
                  <ul className="space-y-2">
                    {product.clinicalResults?.map((res, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-stem-taupe flex-shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Complementary Formulations */}
      <section className="pt-16 border-t border-stem-border">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-1">
              Synergistic Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-metropolis font-bold uppercase text-stem-espresso">
              Pairs Well With
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-degular uppercase tracking-wider text-stem-espresso hover:text-stem-taupe transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              className="group bg-white p-4 rounded-xl border border-stem-border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full bg-stem-pearl rounded-lg overflow-hidden mb-3">
                <Image
                  src={rel.images[0]}
                  alt={rel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-[10px] font-metropolis uppercase text-stem-taupe block mb-0.5">
                  {rel.step}
                </span>
                <h3 className="font-metropolis text-sm font-semibold uppercase text-stem-espresso group-hover:text-stem-taupe transition-colors">
                  {rel.title}
                </h3>
                <span className="font-mono text-xs font-bold text-stem-espresso mt-1 block">
                  ${rel.price.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
