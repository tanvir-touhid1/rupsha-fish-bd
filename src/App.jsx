// src/App.jsx
import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, useInRouterContext } from "react-router-dom";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SearchAndFilter from "./components/SearchAndFilter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import DeliveryInfo from "./components/DeliveryInfo.jsx";
import ContactInfo from "./components/ContactInfo.jsx";
import ReviewsSection from "./components/ReviewsSection.jsx";
import WhyRupsha from "./components/WhyRupsha.jsx";
import RecentlyViewed from "./components/RecentlyViewed.jsx";
import TrustBar from "./components/TrustBar.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

import ProductPage from "./pages/ProductPage.jsx";
import { products, categories, PRODUCTS_VERSION } from "./data/products.js";

// ------------------- helpers -------------------
const pickText = (value, lang = "bn") => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value?.[lang] || value?.bn || value?.en || "";
  }
  if (typeof value === "string") return value;
  return "";
};

const getTitleBn = (p) => pickText(p?.title, "bn") || p?.nameBn || p?.name || "";
const getTitleEn = (p) => pickText(p?.title, "en") || p?.nameEn || "";
const getDisplayTitle = (p, lang = "bn") => {
  const bn = getTitleBn(p);
  const en = getTitleEn(p);
  return lang === "en" ? en || bn : bn || en;
};

const getMainImage = (p) =>
  p?.images?.[0] || p?.image || "/images/fallback-fish.jpg";

const getSearchableName = (p) => {
  const bn = pickText(p?.title, "bn") || p?.nameBn || p?.name || "";
  const en = pickText(p?.title, "en") || p?.nameEn || "";
  const base = p?.name || "";
  return `${bn} ${en} ${base}`.toLowerCase();
};

const formatQtyForToast = (q) => {
  if (q == null) return "";
  if (Number.isInteger(q)) return String(q);
  return Number(q).toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
};

const safeNum = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

const avgWeightKg = (range) => {
  const min = safeNum(range?.min);
  const max = safeNum(range?.max);
  if (min == null || max == null) return null;
  return (min + max) / 2;
};

const computeEstimatedTotal = (item, product) => {
  const model = item?.pricingModel || product?.pricingModel;

  // Whole fish: count × avgWeight × pricePerKg(size)
  if (model === "WHOLE_BY_SIZE_COUNT") {
    const sizeKey = item?.selectedSizeKey;
    const tier = (product?.sizePricing || []).find((s) => s.sizeKey === sizeKey);
    const ppk = safeNum(tier?.pricePerKg) ?? safeNum(product?.priceMin) ?? safeNum(product?.price) ?? 0;
    const avg = avgWeightKg(tier?.approxWholeFishWeightKg) ?? 0;
    const count = Math.max(1, Number(item?.count) || 1);
    return count * avg * ppk;
  }

  // KG by grade: kg × pricePerKg(grade)
  if (model === "KG_BY_GRADE") {
    const gradeKey = item?.selectedGradeKey;
    const list = product?.gradePricing || product?.sizePricing || [];
    const tier = list.find((g) => (g.gradeKey || g.sizeKey) === gradeKey);
    const ppk = safeNum(tier?.pricePerKg) ?? safeNum(product?.priceMin) ?? safeNum(product?.price) ?? 0;
    const kg = Math.max(1, Number(item?.kg) || 1);
    return kg * ppk;
  }

  // KG simple: kg × pricePerKg
  const perKg =
    safeNum(product?.startsFrom?.pricePerKg) ??
    safeNum(product?.priceMin) ??
    safeNum(product?.price) ??
    0;

  const kg = Math.max(1, Number(item?.kg) || 1);
  return kg * perKg;
};


// ------------------- skeleton -------------------
const ProductSkeletonGrid = () => {
  const skeletons = Array.from({ length: 8 });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 animate-pulse"
        >
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-4" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
          <div className="flex gap-2 mb-4">
            <div className="h-5 bg-gray-200 rounded-full w-16" />
            <div className="h-5 bg-gray-200 rounded-full w-12" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="h-8 bg-gray-200 rounded-full w-24" />
            <div className="h-8 bg-gray-200 rounded-full w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  console.log("✅ App products version =", PRODUCTS_VERSION);
  console.log("✅ App first product price snapshot =", products?.[0]?.slug, products?.[0]?.priceMin, products?.[0]?.priceMax, products?.[0]?.startsFrom?.pricePerKg);


  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toast, setToast] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // ✅ drawer state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
  // 1) bust cached localStorage when products pricing changes
  const lastVersion = localStorage.getItem("fishmart-products-version");
  const versionChanged = lastVersion && lastVersion !== PRODUCTS_VERSION;

  // ---- Cart hydrate (recompute totals using latest products.js) ----
  const hydrateCart = (rawItems) => {
    if (!Array.isArray(rawItems)) return [];
    return rawItems.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return item;

      const next = { ...item };
      const est = computeEstimatedTotal(next, product);
      next.totalPrice = Number.isFinite(est) ? est : Number(next.totalPrice) || 0;
      return next;
    });
  };

  // ---- Recently viewed hydrate (refresh prices using latest products.js) ----
  const hydrateViewed = (rawItems) => {
    if (!Array.isArray(rawItems)) return [];
    return rawItems.map((rv) => {
      const product = products.find((p) => p.id === rv.id);
      if (!product) return rv;
      return {
        ...rv,
        priceMin: product.priceMin,
        priceMax: product.priceMax,
        price: product.price,
        unit: product.unit || "kg",
      };
    });
  };

  // If pricing changed: safest = clear viewed; cart can be rehydrated
  if (versionChanged) {
    localStorage.removeItem("fishmart-recently-viewed");
  }

  // Load + hydrate cart
  const savedCart = localStorage.getItem("fishmart-cart");
  if (savedCart) {
    try {
      const parsed = JSON.parse(savedCart);
      setCartItems(hydrateCart(parsed));
    } catch {
      setCartItems([]);
    }
  }

  // Load + hydrate viewed
  const savedViewed = localStorage.getItem("fishmart-recently-viewed");
  if (savedViewed) {
    try {
      const parsed = JSON.parse(savedViewed);
      setRecentlyViewed(hydrateViewed(parsed));
    } catch {
      setRecentlyViewed([]);
    }
  }

  // Save current version
  localStorage.setItem("fishmart-products-version", PRODUCTS_VERSION);

  const t = setTimeout(() => setIsLoadingProducts(false), 500);
  return () => clearTimeout(t);
}, []);




  useEffect(() => {
    localStorage.setItem("fishmart-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(
      "fishmart-recently-viewed",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  const addToCart = (incoming) => {
  setCartItems((prevItems) => {
    const keyIn = incoming.cartKey || incoming.id;

    const existingIndex = prevItems.findIndex(
      (it) => (it.cartKey || it.id) === keyIn
    );

    const product = products.find((p) => p.id === incoming.id);

    if (existingIndex !== -1) {
      const updated = [...prevItems];
      const existing = updated[existingIndex];

      // Merge qty based on pricingModel
      const model = incoming.pricingModel || existing.pricingModel || product?.pricingModel;

      let next = { ...existing };

      if (model === "WHOLE_BY_SIZE_COUNT") {
        const addCount = Number(incoming.count) || 1;
        next.count = (Number(existing.count) || 1) + addCount;
      } else {
        // KG_SIMPLE or KG_BY_GRADE
        const addKg = Number(incoming.kg) || 1;
        next.kg = Math.round(((Number(existing.kg) || 1) + addKg) * 10) / 10;
      }

      next.totalPrice = computeEstimatedTotal(next, product);

      updated[existingIndex] = next;
      return updated;
    }

    // New line item
    const item = { ...incoming };
    item.totalPrice = computeEstimatedTotal(item, product);
    return [...prevItems, item];
  });

  openCart();

  // Toast message (model-aware)
  const productName = incoming.name || "Item";
  const model = incoming.pricingModel;

  let qtyText = "";
  if (model === "WHOLE_BY_SIZE_COUNT") qtyText = `${incoming.count || 1} fish`;
  else qtyText = `${incoming.kg || 1} kg`;

  setToast({
    message: `${qtyText} ${productName} added (estimate).`,
    type: "success",
  });
};


  const removeFromCart = (index) => {
  setCartItems((prev) => {
    const item = prev[index];
    if (!item) return prev;

    const updated = [...prev];
    updated.splice(index, 1);

    // 🔴 removal toast
    setToast({
      message: `${item.nameBn || item.name || "Item"} removed from cart`,
      type: "error",
    });

    return updated;
    });
  };


  const clearCart = () => setCartItems([]);

  const snapToStep = (value, step) => {
  const v = Number(value);
  if (!Number.isFinite(v)) return step;
  // snap safely, avoid floating noise
  const snapped = Math.round(v / step) * step;
  return Math.round(snapped * 10) / 10;
};

const updateCartItemQuantity = (index, newValue) => {
  setCartItems((prevItems) => {
    const updated = [...prevItems];
    const item = updated[index];
    if (!item) return prevItems;

    const product = products.find((p) => p.id === item.id);
    const model = item.pricingModel || product?.pricingModel || "KG_SIMPLE";

    if (model === "WHOLE_BY_SIZE_COUNT") {
      const nextCount = Math.max(1, Math.round(Number(newValue) || 1));

      const next = {
        ...item,
        count: nextCount,
        // keep legacy-friendly field in sync (some UI may still read it)
        cartQuantity: nextCount,
      };

      const est = computeEstimatedTotal(next, product);
      next.totalPrice = Number.isFinite(est) ? est : item.totalPrice ?? 0;

      updated[index] = next;
      return updated;
    }

    // kg-based
    const step = model === "KG_BY_GRADE" ? 0.5 : 1;
    const nextKg = Math.max(1, snapToStep(newValue, step));

    const next = {
      ...item,
      kg: nextKg,
      cartQuantity: nextKg, // keep old UI consistent
    };

    const est = computeEstimatedTotal(next, product);
    next.totalPrice = Number.isFinite(est) ? est : item.totalPrice ?? 0;

    updated[index] = next;
    return updated;
  });
};



  const handleViewProduct = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const newItem = {
        id: product.id,
        name: getDisplayTitle(product, "bn"),
        nameBn: getTitleBn(product),
        nameEn: getTitleEn(product),
        image: getMainImage(product),
        priceMin: product.priceMin,
        priceMax: product.priceMax,
        price: product.price,
        unit: product.unit || "kg", // ✅ don't use weight "1kg"
        slug: product.slug,
      };
      return [newItem, ...filtered].slice(0, 10);
    });
  };

  const filteredProducts = useMemo(() => {
    const term = (searchTerm || "").toLowerCase();
    return products.filter((product) => {
      const matchesSearch = getSearchableName(product).includes(term);
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const subtotal = useMemo(() => {
  return cartItems.reduce((sum, item) => sum + (Number(item.totalPrice) || 0), 0);
}, [cartItems]);


  // ✅ show total qty count (better UX than unique lines)
  const itemCount = useMemo(() => {
  return cartItems.reduce((sum, item) => {
    const model = item.pricingModel;
    if (model === "WHOLE_BY_SIZE_COUNT") return sum + (Number(item.count) || 1);
    // kg items count as 1 line each
    return sum + 1;
  }, 0);
}, [cartItems]);


  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* ✅ header opens drawer */}
      <Header cartCount={itemCount} onOpenCart={openCart} />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <TrustBar />

                <section id="products-section" className="py-8 md:py-12">
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Today&apos;s Fresh Fish
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            Wild-caught river &amp; sea fish. No farm fish, ever.
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <SearchAndFilter
                          searchTerm={searchTerm}
                          setSearchTerm={setSearchTerm}
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                          categories={categories}
                        />
                      </div>

                      {isLoadingProducts ? (
                        <ProductSkeletonGrid />
                      ) : filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                          <div className="text-gray-400 text-6xl mb-4">🐟</div>
                          <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            No products found
                          </h3>
                          <p className="text-gray-500">
                            Try adjusting your search or filter criteria.
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {filteredProducts.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              addToCart={addToCart}
                              onViewProduct={handleViewProduct}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {recentlyViewed.length > 0 && (
                  <section className="border-t border-slate-200 py-6 md:py-8">
                    <div className="container mx-auto px-4">
                      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                        <RecentlyViewed items={recentlyViewed} />
                      </div>
                    </div>
                  </section>
                )}

                {/* Keep existing cart-section (optional) */}
                <section
                  id="cart-section"
                  className="border-t border-slate-200/70 py-6 md:py-8"
                >
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <Cart
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                        clearCart={clearCart}
                        subtotal={subtotal}
                        onUpdateQuantity={updateCartItemQuantity}
                      />
                    </div>
                  </div>
                </section>

                <section className="border-t border-slate-200 py-8 md:py-10">
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <WhyRupsha />
                    </div>
                  </div>
                </section>

                <section className="border-t border-slate-200 py-8 md:py-10">
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <DeliveryInfo />
                    </div>
                  </div>
                </section>

                <section
                  id="reviews-section"
                  className="border-t border-slate-200 py-8 md:py-10"
                >
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <ReviewsSection />
                    </div>
                  </div>
                </section>

                <section
                  id="contact-section"
                  className="border-t border-slate-200 py-8 md:py-10"
                >
                  <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
                      <ContactInfo />
                    </div>
                  </div>
                </section>
              </>
            }
          />

          <Route
            path="/product/:slug"
            element={
              <ProductPage
                products={products}
                addToCart={addToCart}
                onViewProduct={handleViewProduct}
              />
            }
          />
        </Routes>
      </main>

      {/* ✅ drawer is global, works on all pages */}
      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQty={updateCartItemQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {/* Optional: let mobile bottom nav open drawer too */}
      <MobileBottomNav cartCount={itemCount} onOpenCart={openCart} />

      <Footer />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
