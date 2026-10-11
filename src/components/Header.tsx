"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, User, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const navLinks = [
    { label: "Science", href: "/science" },
    { label: "Us", href: "/us" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-stem-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between relative">
          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-degular text-sm uppercase tracking-widest transition-colors relative py-1 ${
                    isActive
                      ? "text-stem-espresso font-semibold"
                      : "text-stem-espresso/80 hover:text-stem-taupe"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-stem-espresso"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center justify-center group"
              aria-label="Beauty In Stem"
            >
              <div className="relative w-36 sm:w-44 h-8 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="Beauty In Stem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Nav (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setAccountModalOpen(true)}
              className="font-degular text-sm uppercase tracking-widest text-stem-espresso/80 hover:text-stem-taupe transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="font-degular text-sm uppercase tracking-widest text-stem-espresso hover:text-stem-taupe transition-colors flex items-center gap-2 relative group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shopping Cart</span>
              <span className="font-mono text-xs bg-stem-espresso group-hover:bg-stem-taupe text-white rounded-full px-2 py-0.5 transition-colors">
                {itemCount}
              </span>
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-stem-espresso relative"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-stem-taupe text-white font-mono text-[10px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-stem-espresso"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-stem-bg flex flex-col justify-between p-6 md:hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-stem-border">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-32 h-7"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="Beauty In Stem"
                  fill
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-stem-pearl text-stem-espresso"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 my-auto py-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-metropolis uppercase tracking-wider ${
                    pathname === link.href
                      ? "text-stem-taupe font-semibold"
                      : "text-stem-espresso"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-stem-border space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAccountModalOpen(true);
                  }}
                  className="text-base font-metropolis uppercase tracking-wider text-stem-espresso flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="text-base font-metropolis uppercase tracking-wider text-stem-espresso flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shopping Cart ({itemCount})</span>
                </button>
              </div>
            </nav>

            <div className="pt-6 border-t border-stem-border flex items-center justify-between text-xs text-stem-muted">
              <span>Follow:</span>
              <div className="flex gap-4 uppercase font-semibold text-stem-espresso">
                <a
                  href="https://www.instagram.com/beautyinstemofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stem-taupe"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@beautyinstemofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stem-taupe"
                >
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Account Modal */}
      <AnimatePresence>
        {accountModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAccountModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-xl max-w-sm w-full p-6 shadow-2xl border border-stem-border"
            >
              <button
                onClick={() => setAccountModalOpen(false)}
                className="absolute top-4 right-4 text-stem-muted hover:text-stem-espresso"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-metropolis uppercase font-semibold text-stem-espresso mb-1">
                Skin Fitness Account
              </h3>
              <p className="text-xs text-stem-muted mb-4">
                Sign in to manage your orders, subscription schedules, and loyalty points.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Logged in successfully (Demo Mode)");
                  setAccountModalOpen(false);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-[11px] font-metropolis uppercase text-stem-espresso mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="w-full px-3 py-2 text-xs bg-stem-pearl border border-stem-border rounded focus:outline-none focus:border-stem-taupe"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-metropolis uppercase text-stem-espresso mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-3 py-2 text-xs bg-stem-pearl border border-stem-border rounded focus:outline-none focus:border-stem-taupe"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis uppercase tracking-wider rounded transition-colors"
                >
                  Sign In
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
