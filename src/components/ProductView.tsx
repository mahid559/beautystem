"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Plus, Minus } from "lucide-react";

export default function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "how" | "ingred" | "clin">("desc");

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#fbfaf9] min-h-screen py-10 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-stem-espresso">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stem-muted uppercase tracking-wider mb-10">
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

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-28">
        {/* Gallery Slider Left */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full bg-[#f3eeeb] overflow-hidden shadow-sm">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.title}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-28 h-28 overflow-hidden transition-all border ${
                    activeImageIndex === idx
                      ? "border-stem-espresso opacity-100 shadow-sm"
                      : "border-transparent opacity-60 hover:opacity-100"
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

        {/* Product Details Right */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h1 className="font-metropolis text-3xl sm:text-5xl font-medium uppercase text-stem-espresso tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="font-degular text-sm sm:text-base font-normal uppercase tracking-wider text-stem-muted">
              optimize your skin’s fitness.
            </p>

            <div className="pt-2 pb-2">
              <span className="font-metropolis text-2xl sm:text-3xl font-medium text-stem-espresso">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Volume Pill Box matching stembeauty.com (.volume-spprod-block) */}
            <div>
              <span className="text-[11px] font-degular uppercase tracking-wider text-stem-muted block mb-1">
                Volume:
              </span>
              <div className="inline-block bg-[#f0e9e9] text-stem-espresso px-4 py-2 font-degular text-xs uppercase tracking-wider">
                {product.volume}
              </div>
            </div>

            {/* Quantity Selector & Add To Bag */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-stem-espresso h-11 px-2 bg-transparent">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-full flex items-center justify-center text-stem-espresso hover:text-stem-taupe"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-degular text-sm font-medium text-stem-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-full flex items-center justify-center text-stem-espresso hover:text-stem-taupe"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="stem-btn stem-btn-filled text-xs px-10 py-3 h-11"
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Description Text */}
          <div className="pt-6 border-t border-stem-border space-y-4 font-degular text-xs sm:text-sm text-stem-dark leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Tab Navigation matching stembeauty.com (.tab__list) */}
          <div className="pt-6 border-t border-stem-border">
            <div className="flex border-b border-stem-border gap-8 overflow-x-auto text-xs font-degular uppercase pb-2">
              <button
                onClick={() => setActiveTab("desc")}
                className={`transition-colors whitespace-nowrap pb-2 ${
                  activeTab === "desc"
                    ? "font-bold text-stem-espresso border-b-2 border-stem-espresso -mb-[9px]"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("how")}
                className={`transition-colors whitespace-nowrap pb-2 ${
                  activeTab === "how"
                    ? "font-bold text-stem-espresso border-b-2 border-stem-espresso -mb-[9px]"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                How To Use
              </button>
              <button
                onClick={() => setActiveTab("ingred")}
                className={`transition-colors whitespace-nowrap pb-2 ${
                  activeTab === "ingred"
                    ? "font-bold text-stem-espresso border-b-2 border-stem-espresso -mb-[9px]"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab("clin")}
                className={`transition-colors whitespace-nowrap pb-2 ${
                  activeTab === "clin"
                    ? "font-bold text-stem-espresso border-b-2 border-stem-espresso -mb-[9px]"
                    : "text-stem-muted hover:text-stem-espresso"
                }`}
              >
                Clinical Proof
              </button>
            </div>

            <div className="pt-6 font-degular text-xs sm:text-sm text-stem-muted leading-relaxed">
              {activeTab === "desc" && (
                <ul className="space-y-2.5">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-stem-espresso">
                      <span className="w-1.5 h-1.5 rounded-full bg-stem-taupe"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "how" && (
                <p>{product.howToUse}</p>
              )}

              {activeTab === "ingred" && (
                <div className="space-y-3">
                  {product.ingredients.map((ing, i) => (
                    <div key={i} className="pb-2 border-b border-stem-border/40 last:border-none">
                      <strong className="font-metropolis uppercase text-stem-espresso block text-xs mb-0.5">
                        {ing.name}
                      </strong>
                      <p>{ing.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "clin" && (
                <ul className="space-y-2">
                  {product.clinicalResults?.map((res, i) => (
                    <li key={i} className="flex items-center gap-2 text-stem-espresso">
                      <span className="text-stem-taupe font-bold">+</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Complementary Products */}
      <section className="pt-20 border-t border-stem-border">
        <div className="mb-10">
          <span className="stem-title">You May Also Like</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] w-full bg-[#f3eeeb] overflow-hidden mb-4">
                <Image
                  src={rel.images[0]}
                  alt={rel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-metropolis text-sm font-medium uppercase text-stem-espresso">
                {rel.title}
              </h3>
              <span className="font-degular text-xs text-stem-muted block mt-1">
                ${rel.price.toFixed(2)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
