// components/Header.jsx
import React, { useState, useEffect } from "react";

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const [prevCartCount, setPrevCartCount] = useState(0);

  // Trigger animation when cartCount increases
  useEffect(() => {
    if (cartCount > prevCartCount) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 400);
      return () => clearTimeout(timer);
    }
    setPrevCartCount(cartCount);
  }, [cartCount, prevCartCount]);

  // Subtle counter animation (no crazy rotate/shadow)
  const getCounterAnimation = () => {
    if (!animateCart) return "";
    return "scale-110 ring-2 ring-red-300/70";
  };

  const cartLabel =
    cartCount === 0
      ? "Cart"
      : cartCount === 1
      ? "1 item in cart"
      : `${cartCount} items in cart`;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#47466D] to-[#3D84A7] text-white py-2 px-4">
        <div className="container mx-auto">
          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z" />
              </svg>
              <span className="whitespace-nowrap">
                আমাদের যেকোন পণ্য অর্ডার করতে কল বা WhatsApp:
              </span>
              <a
                href="tel:+8801521493443"
                className="font-bold hover:text-[#ABEDD8] transition-colors whitespace-nowrap"
              >
                +8801521493443
              </a>
            </div>

            <div className="text-white/60">|</div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613t.575-.362l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.8-.775 1.625-1.438T14.1 14.35q.775-.775 1.438-1.6T17 10.9l-2.35-2.35q-.225-.225-.338-.588t-.062-.712l.7-3.45q.1-.35.363-.575T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.1-1.363 6.15t-3.862 5.55q-2.5 2.5-5.55 3.863T4.05 21Z" />
              </svg>
              <span className="whitespace-nowrap">হটলাইন:</span>
              <a
                href="tel:09642922922"
                className="font-bold hover:text-[#ABEDD8] transition-colors whitespace-nowrap"
              >
                09642-922922
              </a>
            </div>
          </div>

          {/* Mobile Layout – compact single-line style */}
          <div className="sm:hidden text-[11px] leading-tight text-center px-2 py-1 flex items-center justify-center">
            <p className="text-white whitespace-normal">
              আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:
              <a
                href="tel:+8801521493443"
                className="font-semibold mx-1 hover:text-[#ABEDD8]"
              >
                +8801521493443
              </a>
              |
              <span className="mx-1">হট লাইন:</span>
              <a
                href="tel:09642922922"
                className="font-semibold hover:text-[#ABEDD8]"
              >
                09642-922922
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/75 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Rupsha Fish"
                className="h-12 md:h-14 w-auto transition-transform duration-200 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full" />
              </a>
              <a
                href="#products-section"
                className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full" />
              </a>
              <a
                href="#cart-section"
                className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group"
              >
                Cart
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full" />
              </a>
            </nav>

            {/* Desktop: Cart only (primary action) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#cart-section"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
                  />
                </svg>

                {cartCount > 0 && (
                  <span
                    className={`bg-gradient-to-br from-red-500 to-red-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center font-bold shadow-md transition-all duration-300 ${getCounterAnimation()}`}
                  >
                    {cartCount}
                  </span>
                )}

                <span className="text-sm text-gray-600">{cartLabel}</span>
              </a>
            </div>

            {/* Mobile: cart + menu */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Cart Icon */}
              {cartCount > 0 && (
                <a
                  href="#cart-section"
                  className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300 group"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
                    />
                  </svg>

                  <span
                    className={`absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-[10px] rounded-full px-1.5 py-0.5 min-w-[18px] h-4 flex items-center justify-center font-bold shadow-md border border-white transition-all duration-300 ${
                      animateCart ? "scale-125 ring-2 ring-red-300/80" : ""
                    }`}
                  >
                    {cartCount}
                  </span>
                </a>
              )}

              {/* Mobile Menu Button */}
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products-section"
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#cart-section"
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {cartCount > 0 && (
                  <span
                    className={`bg-gradient-to-br from-red-500 to-red-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center font-bold shadow-md transition-all duration-300 ${getCounterAnimation()}`}
                  >
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
