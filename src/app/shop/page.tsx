"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShieldCheck, Truck, Sparkles, HeartHandshake } from "lucide-react";

export default function ShopPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", label: "All Formulations" },
    { id: "cleanse", label: "Cleansers" },
    { id: "serum", label: "Serums & Treatments" },
    { id: "moisture", label: "Essence & Eyes" },
    { id: "bundles", label: "Complete Regimens" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory === "cleanse") {
      result = result.filter((p) => p.slug.includes("cleanser"));
    } else if (selectedCategory === "serum") {
      result = result.filter((p) => p.slug.includes("serum"));
    } else if (selectedCategory === "moisture") {
      result = result.filter(
        (p) => p.slug.includes("essence") || p.slug.includes("eye")
      );
    } else if (selectedCategory === "bundles") {
      result = result.filter((p) => p.slug.includes("collection"));
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-stem-pearl py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-stem-muted uppercase tracking-wider mb-3">
          <Link href="/" className="hover:text-stem-espresso transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-stem-espresso font-semibold">Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase tracking-tight text-stem-espresso">
          The Skin Fitness Showcase
        </h1>
        <p className="text-xs sm:text-sm text-stem-muted font-degular mt-2 max-w-2xl">
          Engineered in Seoul to optimize your skin’s metabolic resilience. Explore our full suite of bio-cellular PDRN formulations.
        </p>
      </div>

      {/* Filter & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stem-border mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-metropolis uppercase tracking-wider rounded-full transition-all ${
                selectedCategory === cat.id
                  ? "bg-stem-espresso text-white shadow-sm"
                  : "bg-white text-stem-muted hover:text-stem-espresso border border-stem-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 text-xs text-stem-muted font-metropolis uppercase">
          <span>Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-stem-border rounded px-3 py-1.5 text-stem-espresso focus:outline-none focus:border-stem-taupe uppercase text-xs"
          >
            <option value="featured">Featured Protocol</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredProducts.map((product) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            key={product.id}
            className="group bg-white rounded-xl p-4 border border-stem-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div className="relative aspect-[4/5] w-full bg-[#f8f5f3] rounded-lg overflow-hidden mb-5">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {product.images[1] && (
                  <Image
                    src={product.images[1]}
                    alt={`${product.title} preview`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-metropolis font-semibold uppercase text-stem-espresso">
                  {product.step}
                </div>
              </div>

              <div className="space-y-1.5 mb-5">
                <h3 className="font-metropolis text-base font-semibold uppercase text-stem-espresso group-hover:text-stem-taupe transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-stem-muted line-clamp-2 font-degular">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-base font-bold text-stem-espresso">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-xs text-stem-muted line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stem-muted font-mono">
                    {product.volume}
                  </span>
                </div>
              </div>
            </Link>

            <button
              onClick={() => addItem(product, 1)}
              className="w-full py-3 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-widest rounded transition-colors shadow-sm active:scale-[0.99]"
            >
              Add To Bag
            </button>
          </motion.div>
        ))}
      </div>

      {/* Brand Guarantees Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-stem-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stem-taupe border border-stem-border flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-metropolis font-bold uppercase text-stem-espresso">
              Authentic PDRN
            </h4>
            <p className="text-[11px] text-stem-muted">Bio-synthesized in Seoul</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stem-taupe border border-stem-border flex-shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-metropolis font-bold uppercase text-stem-espresso">
              Fast Global Shipping
            </h4>
            <p className="text-[11px] text-stem-muted">Free delivery over $100</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stem-taupe border border-stem-border flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-metropolis font-bold uppercase text-stem-espresso">
              Clinical Safety
            </h4>
            <p className="text-[11px] text-stem-muted">Dermatologist tested</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stem-taupe border border-stem-border flex-shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-metropolis font-bold uppercase text-stem-espresso">
              30-Day Guarantee
            </h4>
            <p className="text-[11px] text-stem-muted">Love it or return easily</p>
          </div>
        </div>
      </div>
    </div>
  );
}
