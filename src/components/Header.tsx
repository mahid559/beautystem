"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="shopify-section-sections--29922198258003__header"
      className="shopify-section shopify-section-group-header-group"
    >
      <header className="header">
        <div className="header__inner">
          <nav className="header__nav header__nav--left" aria-label="Main navigation">
            <a
              href="/science"
              className={`header__link link-animation ${pathname === "/science" ? "is-active" : ""}`}
            >
              Science
            </a>
            <a
              href="/us"
              className={`header__link link-animation ${pathname === "/us" ? "is-active" : ""}`}
            >
              Us
            </a>
            <a
              href="/shop"
              className={`header__link link-animation ${pathname === "/shop" ? "is-active" : ""}`}
            >
              Shop
            </a>
          </nav>

          <a href="/" className="header__logo" aria-label="Beauty In Stem">
            <img src="/assets/images/logo.png" alt="Beauty In Stem" />
          </a>

          <nav className="header__nav header__nav--right" aria-label="User navigation">
            <a href="/account" className="header__link link-animation">
              ACCOUNT
            </a>
            <a href="#" className="header__link link-animation" data-cart-open>
              SHOPPING CART
            </a>
          </nav>

          <div className="header__mobile-actions">
            <a href="/account" className="header__mobile-icon" aria-label="Account">
              <img src="/assets/images/login.svg" alt="" />
            </a>
            <a href="#" className="header__mobile-icon" aria-label="Shopping Cart" data-cart-open>
              <img src="/assets/images/bag.svg" alt="" />
            </a>
            <button className="header__burger" aria-label="Open menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className="header__menu" aria-hidden="true">
          <div className="header__menu-top">
            <a href="/" className="header__menu-logo" aria-label="Beauty In Stem">
              <img src="/assets/images/logo.png" alt="Beauty In Stem" />
            </a>
            <button className="header__menu-close" aria-label="Close menu">
              <span>CLOSE</span>
            </button>
          </div>

          <nav className="header__menu-nav">
            <span className="header__menu-dot"></span>
            <a
              href="/science"
              className={`header__menu-link ${pathname === "/science" ? "is-active" : ""}`}
            >
              <span>Science</span>
            </a>
            <a
              href="/us"
              className={`header__menu-link ${pathname === "/us" ? "is-active" : ""}`}
            >
              <span>Us</span>
            </a>
            <a
              href="/shop"
              className={`header__menu-link ${pathname === "/shop" ? "is-active" : ""}`}
            >
              <span>Shop</span>
            </a>
            <span className="header__menu-dot"></span>
            <a href="/account" className="header__menu-link">
              <span>ACCOUNT</span>
            </a>
            <a href="#" className="header__menu-link" data-cart-open>
              <span>SHOPPING CART</span>
            </a>
          </nav>

          <div className="header__menu-follow">
            <p>
              <span>FOLLOW US:</span>
            </p>
            <a
              href="https://www.instagram.com/beautyinstemofficial?igsh=MWd5cGw0MzBoMG5yZw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>INSTAGRAM</span>
            </a>
            <a
              href="https://www.tiktok.com/@beautyinstemofficial?_r=1&_t=ZN-96InLPMGXXK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>TIKTOK</span>
            </a>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
