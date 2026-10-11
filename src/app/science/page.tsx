"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dna, ShieldCheck, Zap, Activity, Microscope, ArrowRight } from "lucide-react";
import Spheres3D from "@/components/Spheres3D";

export default function SciencePage() {
  const clinicalStats = [
    {
      stat: "+84%",
      label: "Cellular Hydration",
      desc: "Measured 24-hour trans-epidermal moisture retention in double-blind testing.",
    },
    {
      stat: "96%",
      label: "Barrier Resilience",
      desc: "Reduction in reactive redness and environmental lipid breakdown.",
    },
    {
      stat: "-42%",
      label: "Fine Line Depth",
      desc: "Clinically observed smoothing of periorbital and nasolabial micro-creases.",
    },
    {
      stat: "99.2%",
      label: "Bio-Compatibility",
      desc: "Salmon DNA fragments match human cellular receptor sites almost identically.",
    },
  ];

  const mechanisms = [
    {
      icon: <Dna className="w-6 h-6 text-stem-taupe" />,
      title: "Cellular DNA Activation",
      desc: "Polydeoxyribonucleotide (PDRN) binds to adenosine A2A receptors, stimulating endogenous fibroblast proliferation and accelerating natural collagen genesis.",
    },
    {
      icon: <Zap className="w-6 h-6 text-stem-taupe" />,
      title: "Micro-Vascular Vitality",
      desc: "Enhances localized cutaneous micro-circulation, optimizing nutrient and oxygen delivery to the deep dermal matrix while eliminating metabolic waste.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-stem-taupe" />,
      title: "Anti-Inflammatory Shield",
      desc: "Inhibits pro-inflammatory cytokines (IL-6, TNF-alpha) to rescue stressed, damaged skin from environmental UV radiation and pollutants.",
    },
  ];

  return (
    <div className="bg-stem-pearl min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stem-border text-xs font-metropolis uppercase tracking-wider text-stem-taupe">
              <Microscope className="w-3.5 h-3.5" />
              Seoul Dermatological Research
            </span>
            <h1 className="text-4xl sm:text-6xl font-metropolis font-bold uppercase tracking-tight text-stem-espresso leading-none">
              The Science Of Skin Fitness
            </h1>
            <p className="text-sm sm:text-base text-stem-muted leading-relaxed font-degular">
              Skin is not an inert canvas; it is a living organ that responds to cellular conditioning. We formulate with bio-purified salmon DNA PDRN to restore youthfulness from the nucleus outward.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/shop"
                className="px-7 py-3.5 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-widest rounded transition-colors shadow-sm"
              >
                Shop Formulations
              </Link>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-lg mx-auto bg-[#f8f4f2] rounded-2xl overflow-hidden shadow-2xl border border-stem-border">
            <Spheres3D variant="steps" className="w-full h-full" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3.5 rounded-lg border border-stem-border text-center">
              <p className="text-[11px] font-metropolis uppercase font-semibold text-stem-espresso">
                Bio-Cellular PDRN Spherical Simulation
              </p>
              <p className="text-[10px] text-stem-muted font-degular">
                Move your cursor across the canvas to interact with cellular clusters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL STATS SECTION */}
      <section className="py-20 bg-white border-y border-stem-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-1">
              Rigorous Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase text-stem-espresso">
              Validated Clinical Results
            </h2>
            <p className="text-xs sm:text-sm text-stem-muted mt-2 font-degular">
              Measured through independent 8-week instrumental clinical trials on multi-ethnic skin types in Seoul, South Korea.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalStats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-stem-pearl/50 rounded-xl border border-stem-border flex flex-col justify-between text-center sm:text-left"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-metropolis font-bold text-stem-taupe block mb-2 font-mono">
                    {item.stat}
                  </span>
                  <h3 className="font-metropolis text-sm font-semibold uppercase text-stem-espresso mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-stem-muted leading-relaxed font-degular">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE CORE MECHANISMS */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-1">
            Bio-Cellular Mechanism
          </span>
          <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase text-stem-espresso">
            How Salmon PDRN Works
          </h2>
          <p className="text-xs sm:text-sm text-stem-muted mt-2 font-degular">
            Salmon DNA shares a remarkable 95%+ structural homology with human DNA nucleotides, allowing friction-free bio-absorption without triggering systemic immune reactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mechanisms.map((mech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-xl border border-stem-border shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-stem-pearl flex items-center justify-center mb-6 border border-stem-border">
                  {mech.icon}
                </div>
                <h3 className="text-lg font-metropolis font-bold uppercase text-stem-espresso mb-3">
                  {mech.title}
                </h3>
                <p className="text-xs sm:text-sm text-stem-muted leading-relaxed font-degular">
                  {mech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HERITAGE & LAB COLLABORATION */}
      <section className="py-20 bg-[#2b1910] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-metropolis font-semibold tracking-widest text-stem-blush uppercase block">
              Ethical Formulation Protocol
            </span>
            <h2 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase tracking-tight">
              Sustainably Extracted. Zero Harm.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-degular">
              Our PDRN is ethically harvested from wild-run salmon milt during natural breeding seasons in pristine sub-arctic waters, certified sustainable and purified through multi-stage bio-filtration.
            </p>
            <ul className="space-y-3 text-xs text-white/90">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stem-taupe" />
                <span>Certified Cruelty-Free & EWG Green Grade ingredients</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stem-taupe" />
                <span>Free from synthetic dyes, parabens, sulfates, and artificial fragrance</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stem-taupe" />
                <span>Formulated in Seoul under cGMP pharmaceutical-grade standards</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-stem-taupe hover:bg-stem-blush hover:text-stem-espresso text-white text-xs font-metropolis uppercase tracking-widest rounded transition-colors"
              >
                <span>Experience The Regimen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src="/assets/images/science-img.jpg"
              alt="Seoul Skincare Laboratory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
