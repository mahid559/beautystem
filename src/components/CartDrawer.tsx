"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { UPSELL_PRODUCTS } from "@/data/products";
import confetti from "canvas-confetti";

export default function CartDrawer() {
  const {
    items,
    itemCount,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    addItem,
    freeShippingThreshold,
    freeShippingProgress,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "STEM10") {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d08c81", "#e8c5c1", "#331b0f"],
    });

    setTimeout(() => {
      alert(
        `Thank you for shopping with Beauty In Stem!\n\nOrder Total: $${(
          totalPrice * (promoApplied ? 0.9 : 1)
        ).toFixed(2)}\nItems: ${itemCount}\n\nThis mock checkout demonstrates the complete Next.js e-commerce integration.`
      );
      setIsCheckingOut(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-[#fdfcfb] shadow-2xl flex flex-col border-l border-stem-border"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-stem-border flex items-center justify-between bg-white/70 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-stem-espresso" />
                  <h2 className="font-metropolis tracking-wider text-sm font-semibold uppercase text-stem-espresso">
                    Shopping Cart ({itemCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-stem-pearl text-stem-muted hover:text-stem-espresso transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="px-6 py-3.5 bg-stem-pearl/80 border-b border-stem-border text-xs">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-medium text-stem-espresso flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-stem-taupe" />
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-emerald-700 font-semibold">
                        Free Express Shipping Unlocked!
                      </span>
                    ) : (
                      <span>
                        Add <strong className="text-stem-espresso font-bold">${remainingForFreeShipping.toFixed(2)}</strong> for Free Express Shipping
                      </span>
                    )}
                  </span>
                  <span className="text-stem-muted font-mono">{freeShippingProgress}%</span>
                </div>
                <div className="w-full bg-stem-border h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-stem-taupe rounded-full"
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-stem-pearl flex items-center justify-center mb-4 text-stem-taupe">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="font-metropolis uppercase tracking-wide text-base font-medium text-stem-espresso mb-1">
                      Your Bag is Empty
                    </h3>
                    <p className="text-xs text-stem-muted max-w-[240px] mb-6">
                      Discover our bio-cellular Korean skin fitness formulas to activate your skin regimen.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2.5 bg-stem-espresso text-white text-xs font-metropolis uppercase tracking-wider hover:bg-stem-taupe transition-colors"
                    >
                      Explore The Collection
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      key={item.key}
                      className="flex gap-4 p-3 bg-white rounded-lg border border-stem-border/60 shadow-sm"
                    >
                      <div className="relative w-20 h-24 bg-stem-pearl rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <Link
                              href={`/products/${item.slug}`}
                              onClick={() => setIsCartOpen(false)}
                              className="font-metropolis text-xs font-semibold uppercase text-stem-espresso hover:text-stem-taupe truncate"
                            >
                              {item.title}
                            </Link>
                            <span className="font-mono text-xs font-semibold text-stem-espresso">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                          <p className="text-[11px] text-stem-muted mt-0.5">
                            {item.variantTitle}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-stem-border rounded bg-stem-pearl">
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="p-1 hover:text-stem-taupe text-stem-espresso transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-medium font-mono text-stem-espresso">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="p-1 hover:text-stem-taupe text-stem-espresso transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.key)}
                            className="text-stem-muted hover:text-red-600 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}

                {/* Upsell Section */}
                {items.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-stem-border">
                    <h4 className="text-xs font-metropolis uppercase font-semibold text-stem-espresso tracking-wider mb-3">
                      Complete Your Regimen
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {UPSELL_PRODUCTS.filter(
                        (p) => !items.some((item) => item.id === p.id)
                      )
                        .slice(0, 2)
                        .map((prod) => (
                          <div
                            key={prod.id}
                            className="p-2.5 bg-white rounded border border-stem-border/80 flex flex-col justify-between"
                          >
                            <div className="relative aspect-square w-full bg-stem-pearl rounded overflow-hidden mb-2">
                              <Image
                                src={prod.images[0]}
                                alt={prod.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-[11px] font-metropolis font-semibold uppercase text-stem-espresso truncate">
                                {prod.title}
                              </p>
                              <p className="text-[10px] text-stem-muted font-mono mb-2">
                                ${prod.price.toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => addItem(prod, 1)}
                              className="w-full py-1 text-[10px] font-metropolis uppercase tracking-wider bg-stem-pearl hover:bg-stem-espresso hover:text-white text-stem-espresso rounded transition-colors"
                            >
                              + Quick Add
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-stem-border bg-white/95 backdrop-blur-md space-y-3">
                  {/* Promo Form */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (use STEM10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-stem-pearl border border-stem-border rounded focus:outline-none focus:border-stem-taupe uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-metropolis uppercase bg-stem-pearl hover:bg-stem-espresso hover:text-white text-stem-espresso rounded transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {promoApplied && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                      <Check className="w-3.5 h-3.5" />
                      <span>10% VIP Discount Applied (-${(totalPrice * 0.1).toFixed(2)})</span>
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex justify-between text-stem-muted">
                      <span>Subtotal</span>
                      <span className="font-mono">${totalPrice.toFixed(2)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-emerald-700">
                        <span>Discount (10%)</span>
                        <span className="font-mono">-${(totalPrice * 0.1).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-stem-muted">
                      <span>Estimated Shipping</span>
                      <span>
                        {remainingForFreeShipping === 0 ? (
                          <span className="text-emerald-700 font-semibold uppercase">Free</span>
                        ) : (
                          <span className="font-mono">$10.00</span>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-stem-espresso pt-2 border-t border-stem-border">
                      <span className="font-metropolis uppercase tracking-wider">Total</span>
                      <span className="font-mono">
                        $
                        {(
                          totalPrice * (promoApplied ? 0.9 : 1) +
                          (remainingForFreeShipping === 0 ? 0 : 10)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-3.5 bg-stem-espresso hover:bg-stem-taupe text-white text-xs font-metropolis font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
                  >
                    {isCheckingOut ? (
                      <span>Processing Order...</span>
                    ) : (
                      <>
                        <span>Proceed To Checkout</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-stem-muted">
                    Taxes calculated at checkout. Complimentary luxury samples included with every order.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
