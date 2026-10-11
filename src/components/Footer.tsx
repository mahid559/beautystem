"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1f120a] text-white pt-20 pb-12 border-t border-stem-espresso/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-44 h-8 brightness-0 invert">
              <Image
                src="/assets/images/logo.png"
                alt="Beauty In Stem"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Korean skincare formulas engineered for ultimate skin fitness. Bio-synthesized salmon DNA PDRN developed in collaboration with leading Seoul dermatological laboratories.
            </p>

            <div className="pt-2">
              <span className="block text-[11px] font-metropolis uppercase tracking-wider text-stem-blush mb-2">
                Join The Skin Fitness Journal
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-white/5 p-3 rounded border border-emerald-500/30">
                  <Check className="w-4 h-4" />
                  <span>Welcome to Beauty In Stem. Check your inbox for 10% off.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs bg-white/5 border border-white/20 rounded-l focus:outline-none focus:border-stem-taupe text-white placeholder-white/40"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-stem-taupe hover:bg-stem-blush hover:text-stem-espresso text-white text-xs font-metropolis uppercase tracking-wider rounded-r transition-colors flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-metropolis font-semibold uppercase tracking-widest text-stem-blush">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/science" className="hover:text-white transition-colors">
                  The Science (PDRN)
                </Link>
              </li>
              <li>
                <Link href="/us" className="hover:text-white transition-colors">
                  About Us & Heritage
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Complete Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* The Regimen */}
          <div className="space-y-4">
            <h4 className="text-xs font-metropolis font-semibold uppercase tracking-widest text-stem-blush">
              4-Step Protocol
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link
                  href="/products/hydra-foam-cleanser"
                  className="hover:text-white transition-colors"
                >
                  Step 1: Cleanse
                </Link>
              </li>
              <li>
                <Link
                  href="/products/reset-serum"
                  className="hover:text-white transition-colors"
                >
                  Step 2: Activate
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hydra-nutrition-essence"
                  className="hover:text-white transition-colors"
                >
                  Step 3: Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lash-and-eye-conditioner"
                  className="hover:text-white transition-colors"
                >
                  Step 4: Maintain
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-metropolis font-semibold uppercase tracking-widest text-stem-blush">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <a
                href="https://www.instagram.com/beautyinstemofficial"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors block"
              >
                Instagram (@beautyinstem)
              </a>
              <a
                href="https://www.tiktok.com/@beautyinstemofficial"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors block"
              >
                TikTok
              </a>
              <span className="block pt-2 text-[11px] text-white/50">
                Seoul • New York • Global Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Beauty In Stem Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="hover:text-white transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
