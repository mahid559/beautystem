"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Spheres3D from "@/components/Spheres3D";

export default function HomePage() {
  const { addItem } = useCart();
  const [activeStep, setActiveStep] = useState(0);

  const stepsList = [
    {
      number: "01",
      title: "Cleanse",
      subtitle: "Hydra-Foam Cleanser",
      descr:
        "Low-pH micro-foam with bio-purified salmon PDRN that dissolves micro-pollutants and sebum without altering essential barrier lipids.",
      product: PRODUCTS[0],
    },
    {
      number: "02",
      title: "Activate",
      subtitle: "Reset Serum",
      descr:
        "Clinical-grade PDRN cellular concentrate designed to stimulate fibroblast collagen synthesis and reverse structural fatigue.",
      product: PRODUCTS[1],
    },
    {
      number: "03",
      title: "Recovery",
      subtitle: "Hydra-Nutrition Essence",
      descr:
        "Triple ceramide and squalane micro-emulsion that locks in active serums and seals the protective lipid mantle for 48 hours.",
      product: PRODUCTS[2],
    },
    {
      number: "04",
      title: "Maintain",
      subtitle: "Lash and Eye Conditioner",
      descr:
        "Dual-action peptide treatment that visibly smooths delicate orbital contours while conditioning lash root follicles.",
      product: PRODUCTS[3],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-stem-pearl">
      {/* 1. HERO SECTION */}
      <section className="relative h-[92vh] sm:h-[95vh] w-full overflow-hidden flex items-end justify-center pb-16 sm:pb-20">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/b7911f727cfd45ebae8db5d2ec31fc83.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/poster-img.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-metropolis uppercase tracking-widest border border-white/30">
              Korean Bio-Cellular Technology
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-metropolis font-bold uppercase tracking-tight text-white leading-none">
              Korean Formulas
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-degular font-light text-white/90 lowercase tracking-wide max-w-2xl mx-auto">
              engineered for ultimate skin fitness
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-white text-stem-espresso text-xs font-metropolis uppercase tracking-widest hover:bg-stem-taupe hover:text-white transition-all shadow-xl rounded-sm"
              >
                Shop The Collection
              </Link>
              <Link
                href="/science"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/40 text-xs font-metropolis uppercase tracking-widest transition-all rounded-sm"
              >
                Discover PDRN Science
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1 text-[10px] font-metropolis uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </section>

      {/* 2. THE COLLECTION PREVIEW */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute -top-32 right-0 w-96 h-96 opacity-30 pointer-events-none">
          <Image
            src="/assets/images/bg2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-stem-border pb-6">
          <div>
            <span className="text-xs font-metropolis font-semibold tracking-widest text-stem-taupe uppercase block mb-1">
              Curated Regimen
            </span>
            <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight">
              The Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 sm:mt-0 font-degular text-sm uppercase tracking-wider text-stem-espresso hover:text-stem-taupe transition-colors flex items-center gap-1.5 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/70 rounded-lg p-3 border border-stem-border/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] w-full bg-[#f6f2ef] rounded overflow-hidden mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                  />
                  {product.images[1] && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.title} alternate`}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  )}
                  <span className="absolute top-2 left-2 text-[10px] font-metropolis uppercase px-2 py-0.5 bg-white/80 backdrop-blur-sm text-stem-espresso rounded">
                    {product.step.split(":")[0]}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="font-metropolis text-sm font-semibold uppercase text-stem-espresso group-hover:text-stem-taupe transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-stem-muted line-clamp-1 font-degular">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-sm font-semibold text-stem-espresso">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-stem-muted">
                      {product.volume}
                    </span>
                  </div>
                </div>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product, 1);
                }}
                className="w-full py-2.5 bg-stem-pearl hover:bg-stem-espresso text-stem-espresso hover:text-white text-xs font-metropolis uppercase tracking-wider rounded transition-colors duration-200 flex items-center justify-center gap-1.5 border border-stem-border"
              >
                <span>Select & Add to Bag</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY & INTERACTIVE 3D BIO-CELLULAR SPHERE */}
      <section className="relative py-24 sm:py-36 bg-[#fbfaf9] border-y border-stem-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-metropolis font-semibold tracking-widest text-stem-taupe uppercase block mb-2">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight leading-tight">
              Our Products Are Designed As Skin Fitness Tools
            </h2>
            <p className="text-sm sm:text-base text-stem-muted mt-4 font-degular leading-relaxed">
              We reject transient cosmetic masking. By harnessing clinical salmon DNA PDRN, we condition the skin’s physiological resilience at a cellular depth.
            </p>
          </div>

          {/* Interactive 3D Canvas Area */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="h-[460px] sm:h-[550px] w-full">
              <Spheres3D variant="philosophy" className="w-full h-full" />
            </div>

            {/* Editorial Annotations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 sm:mt-12 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 bg-white/70 backdrop-blur-md rounded-lg border border-stem-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
                  <div className="w-2 h-2 rounded-full bg-stem-taupe" />
                  <strong className="font-metropolis text-xs uppercase tracking-wider text-stem-espresso">
                    Supporting
                  </strong>
                </div>
                <p className="text-xs text-stem-muted leading-relaxed">
                  Enhances the skin&apos;s natural defense mechanisms against UV radiation, urban pollution, and oxidative stress.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 bg-white/70 backdrop-blur-md rounded-lg border border-stem-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
                  <div className="w-2 h-2 rounded-full bg-stem-blush" />
                  <strong className="font-metropolis text-xs uppercase tracking-wider text-stem-espresso">
                    Recover
                  </strong>
                </div>
                <p className="text-xs text-stem-muted leading-relaxed">
                  Replenishes trans-epidermal moisture loss and stimulates micro-cellular repair pathways for rapid rebound.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 bg-white/70 backdrop-blur-md rounded-lg border border-stem-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
                  <div className="w-2 h-2 rounded-full bg-stem-espresso" />
                  <strong className="font-metropolis text-xs uppercase tracking-wider text-stem-espresso">
                    Maintain
                  </strong>
                </div>
                <p className="text-xs text-stem-muted leading-relaxed">
                  Preserves long-term structural dermal density, skin elasticity, and radiant, lit-from-within Korean glass skin.
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/science"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-stem-espresso text-white hover:bg-stem-taupe text-xs font-metropolis uppercase tracking-widest rounded transition-colors"
              >
                <span>Read The Cellular Science</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKIN FITNESS EDITORIAL BANNER */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/images/skin-bg.jpg"
          alt="Skin Fitness Editorial"
          fill
          className="object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-stem-espresso/30 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs font-metropolis font-semibold tracking-widest text-stem-blush uppercase">
              The Protocol
            </span>
            <h2 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase text-white tracking-tight leading-tight">
              A Regimen Built For Strength, Not Just Surface
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
              Every formula works synergistically with the next, creating an unbroken cycle of cleansing, activation, moisture recovery, and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. 4 ESSENTIAL STEPS INTERACTIVE REGIMEN */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-4xl sm:text-6xl font-metropolis font-light italic text-stem-taupe block mb-1">
            4
          </span>
          <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight">
            Essential Steps
          </h2>
          <p className="text-xs sm:text-sm text-stem-muted mt-2">
            Click through our 4-step daily skin fitness protocol to explore each targeted bio-cellular treatment.
          </p>

          {/* Step Selector Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mt-8 flex-wrap">
            {stepsList.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-metropolis uppercase tracking-wider transition-all ${
                  activeStep === idx
                    ? "bg-stem-espresso text-white shadow-md"
                    : "bg-white text-stem-muted hover:text-stem-espresso border border-stem-border"
                }`}
              >
                {step.number} {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-white rounded-2xl border border-stem-border overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-12 items-center">
            {/* Image */}
            <div className="relative aspect-square w-full bg-stem-pearl rounded-xl overflow-hidden">
              <Image
                src={stepsList[activeStep].product.images[0]}
                alt={stepsList[activeStep].subtitle}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-metropolis font-bold text-stem-espresso">
                Step {stepsList[activeStep].number}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-1">
                  {stepsList[activeStep].title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-metropolis font-bold uppercase text-stem-espresso">
                  {stepsList[activeStep].subtitle}
                </h3>
                <p className="text-sm font-mono text-stem-taupe font-semibold mt-1">
                  ${stepsList[activeStep].product.price.toFixed(2)} • {stepsList[activeStep].product.volume}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stem-muted leading-relaxed font-degular">
                {stepsList[activeStep].descr}
              </p>

              <div className="space-y-2 border-t border-stem-border pt-4">
                <span className="text-[11px] font-metropolis uppercase font-semibold text-stem-espresso block">
                  Key Benefits:
                </span>
                <ul className="space-y-1.5 text-xs text-stem-muted">
                  {stepsList[activeStep].product.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-stem-taupe flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => addItem(stepsList[activeStep].product, 1)}
                  className="flex-1 py-3 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-widest rounded transition-colors text-center"
                >
                  Add To Bag — ${stepsList[activeStep].product.price.toFixed(2)}
                </button>
                <Link
                  href={`/products/${stepsList[activeStep].product.slug}`}
                  className="px-6 py-3 bg-stem-pearl hover:bg-stem-border text-stem-espresso text-xs font-metropolis uppercase tracking-widest rounded transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPLETE COLLECTION BUNDLE CALL TO ACTION */}
      <section className="py-20 bg-stem-surface border-t border-stem-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#24150d] text-white rounded-2xl p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="space-y-4 max-w-xl z-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stem-taupe/20 border border-stem-taupe/30 text-stem-blush text-xs font-metropolis uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Special Regimen Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase tracking-tight">
                Skin Fitness Collection
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-degular">
                Experience the complete 4-step Korean protocol. Includes full-size Cleanser, Reset Serum, Hydra-Nutrition Essence, and Lash & Eye Conditioner in a luxury embossed keepsake box.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-2xl font-mono font-bold text-white">$225.00</span>
                <span className="text-sm font-mono text-white/50 line-through">$240.00</span>
                <span className="text-xs bg-emerald-600/30 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  Save $15
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full lg:w-auto">
              <button
                onClick={() => addItem(PRODUCTS[4], 1)}
                className="w-full sm:w-auto px-8 py-4 bg-stem-taupe hover:bg-stem-blush hover:text-stem-espresso text-white text-xs font-metropolis uppercase tracking-widest font-semibold rounded transition-all shadow-lg text-center"
              >
                Add Collection To Bag
              </button>
              <Link
                href="/products/skin-fitness-collection"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-metropolis uppercase tracking-widest rounded transition-all text-center border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
