(function () {
  const isSubdir = window.location.pathname.includes('/products/') || window.location.href.includes('/products/');
  const assetPrefix = window.location.protocol === 'file:' ? (isSubdir ? '../' : '') : '/';

  const PRODUCTS = {
    "52708060102995": {
      id: 52708060102995,
      variant_id: 52708060102995,
      title: "Hydra-Foam Cleanser",
      price: 3500,
      presentment_price: 35.00,
      variant_title: "150ml / 5.1 fl oz",
      image: (assetPrefix + "assets/products/cleanser-1.jpg").replace('//', '/'),
      url: isSubdir ? "hydra-foam-cleanser.html" : "products/hydra-foam-cleanser.html"
    },
    "52708175642963": {
      id: 52708175642963,
      variant_id: 52708175642963,
      title: "Reset Serum",
      price: 7500,
      presentment_price: 75.00,
      variant_title: "30ml / 1.0 fl oz",
      image: (assetPrefix + "assets/products/serum-1.jpg").replace('//', '/'),
      url: isSubdir ? "reset-serum.html" : "products/reset-serum.html"
    },
    "52696490180947": {
      id: 52696490180947,
      variant_id: 52696490180947,
      title: "Lash and Eye Conditioner",
      price: 6500,
      presentment_price: 65.00,
      variant_title: "15ml / 0.5 fl oz",
      image: (assetPrefix + "assets/products/eye-1.jpg").replace('//', '/'),
      url: isSubdir ? "lash-and-eye-conditioner.html" : "products/lash-and-eye-conditioner.html"
    },
    "52708176101715": {
      id: 52708176101715,
      variant_id: 52708176101715,
      title: "Hydra-Nutrition Essence",
      price: 6500,
      presentment_price: 65.00,
      variant_title: "100ml / 3.4 fl oz",
      image: (assetPrefix + "assets/products/essence-1.jpg").replace('//', '/'),
      url: isSubdir ? "hydra-nutrition-essence.html" : "products/hydra-nutrition-essence.html"
    },
    "53279358419283": {
      id: 53279358419283,
      variant_id: 53279358419283,
      title: "Skin Fitness Collection",
      price: 22500,
      presentment_price: 225.00,
      variant_title: "Complete 4-Step System",
      image: (assetPrefix + "assets/products/collection-1.jpg").replace('//', '/'),
      url: isSubdir ? "skin-fitness-collection.html" : "products/skin-fitness-collection.html"
    }
  };

  const CART_KEY = "beauty_in_stem_cart_v1";

  function getStoredCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      token: "mock_cart_token",
      note: null,
      attributes: {},
      total_price: 0,
      item_count: 0,
      items: [],
      requires_shipping: true,
      currency: "USD"
    };
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
  }

  function recalculateCart(cart) {
    let count = 0;
    let total = 0;
    cart.items.forEach(item => {
      count += item.quantity;
      total += (item.presentment_price * item.quantity);
    });
    cart.item_count = count;
    cart.total_price = Math.round(total * 100);
    saveCart(cart);
    return cart;
  }

  function handleAdd(variantId, quantity) {
    const cart = getStoredCart();
    const strId = String(variantId);
    const prod = PRODUCTS[strId] || {
      id: Number(variantId),
      variant_id: Number(variantId),
      title: "Skin Fitness Product",
      price: 4500,
      presentment_price: 45.00,
      variant_title: "Standard Edition",
      image: (assetPrefix + "assets/products/cleanser-1.jpg").replace('//', '/'),
      url: "#"
    };

    const existing = cart.items.find(i => String(i.variant_id) === strId || String(i.id) === strId);
    if (existing) {
      existing.quantity += (quantity || 1);
    } else {
      cart.items.push({
        id: prod.id,
        key: strId + ":" + Date.now(),
        variant_id: prod.variant_id,
        title: prod.title,
        price: prod.price,
        presentment_price: prod.presentment_price,
        variant_title: prod.variant_title,
        quantity: quantity || 1,
        image: prod.image,
        url: prod.url
      });
    }
    return recalculateCart(cart);
  }

  function handleChange(keyOrId, quantity) {
    const cart = getStoredCart();
    const strKey = String(keyOrId);
    const idx = cart.items.findIndex(i => String(i.key) === strKey || String(i.variant_id) === strKey || String(i.id) === strKey);
    if (idx !== -1) {
      if (quantity <= 0) {
        cart.items.splice(idx, 1);
      } else {
        cart.items[idx].quantity = quantity;
      }
    }
    return recalculateCart(cart);
  }

  // Intercept window.fetch for Shopify cart endpoints
  const origFetch = window.fetch;
  window.fetch = async function (url, options) {
    const urlStr = typeof url === "string" ? url : (url?.url || "");
    
    if (urlStr.includes("/cart.js") && (!options || options.method === "GET")) {
      const cart = getStoredCart();
      return new Response(JSON.stringify(cart), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (urlStr.includes("/cart/add.js")) {
      let body = {};
      try {
        body = JSON.parse(options?.body || "{}");
      } catch (e) {}
      const cart = handleAdd(body.id, body.quantity || 1);
      return new Response(JSON.stringify(cart), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (urlStr.includes("/cart/change.js")) {
      let body = {};
      try {
        body = JSON.parse(options?.body || "{}");
      } catch (e) {}
      const cart = handleChange(body.id, body.quantity);
      return new Response(JSON.stringify(cart), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (urlStr.includes("/cart/clear.js")) {
      const cart = recalculateCart({
        token: "mock_cart_token",
        note: null,
        attributes: {},
        total_price: 0,
        item_count: 0,
        items: [],
        requires_shipping: true,
        currency: "USD"
      });
      return new Response(JSON.stringify(cart), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return origFetch.apply(this, arguments);
  };

  // Interactions setup
  document.addEventListener("DOMContentLoaded", function () {
    const productSlugMap = {
      "hydra-foam-cleanser": "52708060102995",
      "reset-serum": "52708175642963",
      "lash-and-eye-conditioner": "52696490180947",
      "hydra-nutrition-essence": "52708176101715",
      "skin-fitness-collection": "53279358419283"
    };

    // 1. Card "select" button click
    document.querySelectorAll(".collection .card .button").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const card = btn.closest(".card");
        const href = card ? card.getAttribute("href") : "";
        let variantId = "52708060102995";
        for (const [slug, id] of Object.entries(productSlugMap)) {
          if (href && href.includes(slug)) {
            variantId = id;
            break;
          }
        }
        handleAdd(variantId, 1);
        const cartTrigger = document.querySelector("[data-cart-open]");
        if (cartTrigger) {
          cartTrigger.click();
        }
      });
    });

    // 2. Single product page quantity buttons (+ / -)
    document.addEventListener("click", function (e) {
      const minusBtn = e.target.closest(".quantity__btn.minus");
      const plusBtn = e.target.closest(".quantity__btn.plus");
      if (minusBtn) {
        const qtyVal = minusBtn.closest(".quantity")?.querySelector(".quantity__value");
        if (qtyVal) {
          let current = parseInt(qtyVal.textContent.trim(), 10) || 1;
          if (current > 1) qtyVal.textContent = current - 1;
        }
      }
      if (plusBtn) {
        const qtyVal = plusBtn.closest(".quantity")?.querySelector(".quantity__value");
        if (qtyVal) {
          let current = parseInt(qtyVal.textContent.trim(), 10) || 1;
          qtyVal.textContent = current + 1;
        }
      }
    });

    // 3. Single product page tab switching
    document.addEventListener("click", function (e) {
      const tabLink = e.target.closest(".tab__item");
      if (!tabLink) return;
      e.preventDefault();
      const targetId = tabLink.getAttribute("data-main");
      if (!targetId) return;
      const wrapper = tabLink.closest(".tab__wraper");
      if (!wrapper) return;
      wrapper.querySelectorAll(".tab__item").forEach(t => t.classList.remove("item-activ"));
      tabLink.classList.add("item-activ");
      wrapper.querySelectorAll(".tab-text").forEach(p => {
        p.classList.remove("tab-activ");
        p.style.display = "none";
      });
      const targetPanel = wrapper.querySelector(targetId);
      if (targetPanel) {
        targetPanel.classList.add("tab-activ");
        targetPanel.style.display = "block";
        targetPanel.style.opacity = "1";
      }
    });

    // 4. Mobile hamburger menu
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const closeBtn = document.querySelector(".header__menu-close");
    if (burger && menu) {
      burger.addEventListener("click", function () {
        menu.classList.add("is-open");
        document.body.classList.add("header-active");
      });
    }
    if (closeBtn && menu) {
      closeBtn.addEventListener("click", function () {
        menu.classList.remove("is-open");
        document.body.classList.remove("header-active");
      });
    }

    // 5. Checkout modal
    document.querySelectorAll(".cart-sidebar__checkout").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const cart = getStoredCart();
        if (cart.items.length === 0) {
          alert("Your shopping cart is currently empty.");
          return;
        }
        const total = (cart.total_price / 100).toFixed(2);
        alert(`Proceeding to checkout with ${cart.item_count} items.\nTotal: $${total}\nThank you for choosing Beauty In Stem!`);
      });
    });
  });
})();
