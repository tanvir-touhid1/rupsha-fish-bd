// App.jsx
import React, { useState, useEffect } from "react";
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



import { products, categories } from "./data/products.js";

// Simple skeleton grid for loading state
const ProductSkeletonGrid = () => {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-4" />

          {/* Title lines */}
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-4" />

          {/* Price */}
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />

          {/* Badges */}
          <div className="flex gap-2 mb-4">
            <div className="h-5 bg-gray-200 rounded-full w-16" />
            <div className="h-5 bg-gray-200 rounded-full w-12" />
          </div>

          {/* Bottom row */}
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
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toast, setToast] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Load cart + recently viewed from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("fishmart-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const savedViewed = localStorage.getItem("fishmart-recently-viewed");
    if (savedViewed) {
      setRecentlyViewed(JSON.parse(savedViewed));
    }

    // Simulate brief loading state for skeleton
    const t = setTimeout(() => setIsLoadingProducts(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("fishmart-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save recently viewed
  useEffect(() => {
    localStorage.setItem(
      "fishmart-recently-viewed",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  const addToCart = (productWithQuantity) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === productWithQuantity.id
      );

      if (existingIndex !== -1) {
        const updated = [...prevItems];
        const existingItem = updated[existingIndex];

        updated[existingIndex] = {
          ...existingItem,
          cartQuantity:
            (existingItem.cartQuantity || 0) +
            (productWithQuantity.cartQuantity || 0),
          totalPrice:
            (existingItem.totalPrice || 0) +
            (productWithQuantity.totalPrice || 0),
        };

        return updated;
      }

      return [...prevItems, productWithQuantity];
    });

    setToast({
      message: `${productWithQuantity.cartQuantity}kg ${productWithQuantity.name} added to cart!`,
      type: "success",
    });
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const clearCart = () => setCartItems([]);

  const updateCartItemQuantity = (index, newQuantity) => {
  setCartItems((prevItems) => {
    const updated = [...prevItems];
    const item = updated[index];
    if (!item) return prevItems;

    const qty = Math.max(0.5, newQuantity);
    const basePrice = item.priceMin ?? item.price ?? 0;
    const totalPrice = basePrice * qty;

    updated[index] = {
      ...item,
      cartQuantity: qty,
      totalPrice,
    };

    return updated;
  });
};


  // Handle recently viewed
  const handleViewProduct = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const newItem = {
        id: product.id,
        name: product.name,
        nameBn: product.nameBn,
        nameEn: product.nameEn,
        image: product.image,
        priceMin: product.priceMin,
        priceMax: product.priceMax,
        price: product.price,
        unit: product.unit || product.weight || "kg",
      };
      return [newItem, ...filtered].slice(0, 10); // keep last 10
    });
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      (product.nameBn && product.nameBn.toLowerCase().includes(term));

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Totals – use totalPrice if present, otherwise fallback to price range
  const subtotal = cartItems.reduce((sum, item) => {
  if (typeof item.totalPrice === "number") {
    return sum + item.totalPrice;
  }
  const qty = item.cartQuantity || 1;
  const base = item.priceMin ?? item.price ?? 0;
  return sum + base * qty;
  }, 0);


  // Total kg (for cart section, floating button, etc.)
  const totalKg = cartItems.reduce(
    (sum, item) => sum + (item.cartQuantity || 1),
    0
  );

  // Number of distinct items (for header badge)
  const itemCount = cartItems.length;


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartCount={itemCount} />

      {/* Hero / top brand section */}
      <section id="home">
        <Hero />
      </section>
      {/* Trust badges strip */}
      <TrustBar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* PRODUCTS SECTION */}
        <section id="products-section" className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
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

            {/* Search & Filter */}
            <div className="mb-6">
              <SearchAndFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            </div>

            {/* Products grid / skeleton / empty state */}
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
        </section>

        {/* RECENTLY VIEWED SECTION (only if there are items) */}
        {recentlyViewed.length > 0 && (
          <section className="bg-slate-50 border-t border-slate-200 py-6 md:py-8">
            <div className="container mx-auto px-4">
              <RecentlyViewed items={recentlyViewed} />
            </div>
          </section>
        )}

        {/* CART SECTION – collapsible component, in its own band */}
        <section
          id="cart-section"
          className="bg-slate-50 border-t border-slate-200/70 py-6 md:py-8"
        >
          <div className="container mx-auto px-4">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              subtotal={subtotal}
              onUpdateQuantity={updateCartItemQuantity}
            />

          </div>
        </section>

        {/* WHY RUPSHA SECTION */}
        <section className="bg-white border-t border-gray-100 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <WhyRupsha />
          </div>
        </section>

        {/* DELIVERY INFO SECTION */}
        <section className="bg-slate-50 border-t border-slate-200 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <DeliveryInfo />
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section
          id="reviews-section"
          className="bg-white border-t border-gray-100 py-8 md:py-10"
        >
          <div className="container mx-auto px-4">
            <ReviewsSection />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact-section"
          className="bg-slate-50 border-t border-slate-200 py-8 md:py-10"
        >
          <div className="container mx-auto px-4">
            <ContactInfo />
          </div>
        </section>
      </main>

      {/* Floating mobile cart button */}
      {cartItems.length > 0 && (
        <button
          onClick={() =>
            document
              .getElementById("cart-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-4 right-4 bg-[#3D84A7] text-white px-4 py-3 rounded-full shadow-xl text-sm font-semibold lg:hidden"
        >
          🛒 {itemCount} kg • View Cart
        </button>
      )}
      {/* Mobile bottom nav */}
      <MobileBottomNav cartCount={itemCount} />

      <Footer />

      {/* Toast */}
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
