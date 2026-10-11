
"use client";
import React from "react";

export default function CartSidebar() {
  return (
    <>
      <div className="cart-overlay"></div>

    <aside className="cart-sidebar" aria-hidden="true">
      <div className="cart-sidebar__head">
        <span className="cart-sidebar__title">SHOPPING CART ( 0 )</span>
        <button className="cart-sidebar__close" aria-label="Close cart">
          <span>CLOSE</span>
        </button>
      </div>

      <div className="cart-sidebar__empty">
        <p>YOUR SHOPPING CART<br />IS EMPTY</p>
      </div>

      <div className="cart-sidebar__body">
        <div className="cart-sidebar__items">
          
        </div>

       <div className="cart-upsell">
        <p className="cart-upsell__title">• YOU MAY ALSO LIKE</p>
        <div className="cart-upsell__track">
          
            <div className="cart-upsell__item" data-variant-id="52708060102995">
              <div className="cart-upsell__item-img">
                <img src="/assets/products/cleanser-1.jpg" alt="Hydra-Foam Cleanser" />
              </div>
              <div className="cart-upsell__item-content">
                <div className="cart-upsell__item-top">
                  <span className="cart-upsell__item-name">HYDRA-FOAM CLEANSER</span>
                  <span className="cart-upsell__item-price">$35.00</span>
                </div>
                
                  <p className="cart-upsell__item-desc">OPTIMIZE YOUR SKIN’S FITNESS.</p>
                
                <button className="cart-upsell__item-add" data-variant-id="52708060102995">Add +</button>
              </div>
            </div>
          
            <div className="cart-upsell__item" data-variant-id="52708176101715">
              <div className="cart-upsell__item-img">
                <img src="/assets/products/essence-1.jpg" alt="Hydra-Nutrition Essence" />
              </div>
              <div className="cart-upsell__item-content">
                <div className="cart-upsell__item-top">
                  <span className="cart-upsell__item-name">HYDRA-NUTRITION ESSENCE</span>
                  <span className="cart-upsell__item-price">$65.00</span>
                </div>
                
                  <p className="cart-upsell__item-desc">OPTIMIZE YOUR SKIN’S FITNESS.</p>
                
                <button className="cart-upsell__item-add" data-variant-id="52708176101715">Add +</button>
              </div>
            </div>
          
            <div className="cart-upsell__item" data-variant-id="52696490180947">
              <div className="cart-upsell__item-img">
                <img src="/assets/products/eye-1.jpg" alt="Lash and Eye Conditioner" />
              </div>
              <div className="cart-upsell__item-content">
                <div className="cart-upsell__item-top">
                  <span className="cart-upsell__item-name">LASH AND EYE CONDITIONER</span>
                  <span className="cart-upsell__item-price">$65.00</span>
                </div>
                
                  <p className="cart-upsell__item-desc">OPTIMIZE YOUR SKIN’S FITNESS.</p>
                
                <button className="cart-upsell__item-add" data-variant-id="52696490180947">Add +</button>
              </div>
            </div>
          
            <div className="cart-upsell__item" data-variant-id="52708175642963">
              <div className="cart-upsell__item-img">
                <img src="/assets/products/serum-1.jpg" alt="Reset Serum" />
              </div>
              <div className="cart-upsell__item-content">
                <div className="cart-upsell__item-top">
                  <span className="cart-upsell__item-name">RESET SERUM</span>
                  <span className="cart-upsell__item-price">$75.00</span>
                </div>
                
                  <p className="cart-upsell__item-desc">OPTIMIZE YOUR SKIN’S FITNESS.</p>
                
                <button className="cart-upsell__item-add" data-variant-id="52708175642963">Add +</button>
              </div>
            </div>
          
            <div className="cart-upsell__item" data-variant-id="53279358419283">
              <div className="cart-upsell__item-img">
                <img src="/assets/products/collection-1.jpg" alt="Skin Fitness Collection" />
              </div>
              <div className="cart-upsell__item-content">
                <div className="cart-upsell__item-top">
                  <span className="cart-upsell__item-name">SKIN FITNESS COLLECTION</span>
                  <span className="cart-upsell__item-price">$225.00</span>
                </div>
                
                  <p className="cart-upsell__item-desc">OPTIMIZE YOUR SKIN’S FITNESS.</p>
                
                <button className="cart-upsell__item-add" data-variant-id="53279358419283">Add +</button>
              </div>
            </div>
          
        </div>
      </div>

        <div className="cart-sidebar__footer">
          <div className="cart-sidebar__total">
            <span>TOTAL</span>
            <span>$0.00</span>
          </div>
          <a href="/cart/checkout" className="cart-sidebar__checkout button">
            <span>CHECKOUT</span>
          </a>
        </div>
      </div>
    </aside>

    
    </>
  );
}
