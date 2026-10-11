"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutUsPage() {
  const pillars = [
    {
      title: "Cellular Skin Fitness",
      desc: "Like physical exercise strengthens muscle fibers, our bio-cellular formulas train the cutaneous barrier to become self-sufficient, resilient, and responsive.",
    },
    {
      title: "Korean Laboratory Heritage",
      desc: "Developed in Gangnam, Seoul, in partnership with veteran skin scientists who pioneered the clinical application of salmon DNA polynucleotides.",
    },
    {
      title: "Strict EWG Clean Standards",
      desc: "Every batch is rigorously tested for heavy metals, micro-toxins, and allergens. We formulate without artificial fragrance, parabens, or volatile alcohols.",
    },
    {
      title: "Sustainable Oceanic Stewardship",
      desc: "We exclusively utilize ethically sourced wild salmon milt from certified responsible fisheries, leaving maritime ecosystems fully protected.",
    },
  ];

  return (
    <div className="bg-stem-pearl min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/images/about-top.jpg"
          alt="Beauty In Stem Heritage"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-blush font-semibold">
              Our Seoul Origin
            </span>
            <h1 className="text-4xl sm:text-6xl font-metropolis font-bold uppercase text-white tracking-tight leading-tight">
              About Beauty In Stem
            </h1>
            <p className="text-xs sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed font-degular">
              Redefining luxury skincare through the lens of cellular physiology, regenerative medicine, and Korean skin fitness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-stem-border">
            <Image
              src="/assets/images/our-img.jpg"
              alt="Korean Skincare Philosophy"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight leading-tight">
              Beyond Temporary Radiance
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-stem-muted leading-relaxed font-degular">
              <p>
                In the heart of Seoul’s aesthetic dermatology district, clinics have long utilized salmon PDRN injections to rapidly regenerate trauma, laser recovery, and depleted tissue.
              </p>
              <p>
                Our founders asked a fundamental question: Why should this extraordinary regenerative mechanism remain confined to clinical syringes? Could we engineer a daily non-invasive topical regimen with equivalent molecular penetration?
              </p>
              <p>
                After four years of collaborative research with biochemical engineers, Beauty In Stem was born: four meticulously balanced steps that elevate skin from fragile to fit.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-xs font-metropolis uppercase tracking-widest text-stem-espresso hover:text-stem-taupe font-semibold transition-colors"
              >
                <span>Explore The Scientific Proof</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE BRAND PILLARS */}
      <section className="py-24 bg-white border-y border-stem-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-1">
              Ethos & Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-metropolis font-bold uppercase text-stem-espresso">
              What Drives Our Formulations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-stem-pearl/40 rounded-xl border border-stem-border hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-stem-espresso text-white flex items-center justify-center text-xs font-mono mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-metropolis text-sm font-semibold uppercase text-stem-espresso mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stem-muted leading-relaxed font-degular">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISCOVER CATALOG CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <span className="text-xs font-metropolis uppercase tracking-widest text-stem-taupe font-semibold block mb-3">
          Begin Your Regimen
        </span>
        <h2 className="text-3xl sm:text-5xl font-metropolis font-bold uppercase text-stem-espresso tracking-tight mb-6">
          Ready For True Skin Fitness?
        </h2>
        <p className="text-xs sm:text-sm text-stem-muted max-w-lg mx-auto mb-8 font-degular leading-relaxed">
          Join thousands who have unlocked resilient, firm, and radiant skin with our 4-step protocol.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-10 py-4 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-widest rounded transition-all shadow-xl"
        >
          <span>Shop The Regimen</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
