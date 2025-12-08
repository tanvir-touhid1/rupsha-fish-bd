// components/MobileBottomNav.jsx
import React from "react";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const MobileBottomNav = ({ cartCount }) => {
  const hasItems = cartCount > 0;

  return (
    <nav className="fixed bottom-1 inset-x-0 z-40 lg:hidden pointer-events-none">
      <div className="mx-auto max-w-md px-3 pb-2 pointer-events-auto">
        <div
          className="
            bg-white/80 backdrop-blur-md
            border border-white/60
            shadow-[0_-6px_18px_rgba(15,23,42,0.18)]
            rounded-t-2xl
            flex justify-around items-center
            h-14 text-xs text-gray-700
          "
        >
          {/* Home */}
          <button
            onClick={() => scrollToId("home")}
            className="flex flex-col items-center justify-center gap-0.5"
          >
            <span className="text-lg">🏠</span>
            <span>Home</span>
          </button>

          {/* Products */}
          <button
            onClick={() => scrollToId("products-section")}
            className="flex flex-col items-center justify-center gap-0.5"
          >
            <span className="text-lg">🐟</span>
            <span>Products</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => scrollToId("cart-section")}
            className="relative flex flex-col items-center justify-center gap-0.5"
          >
            <span className="text-lg">🛒</span>
            <span>Cart</span>
            {hasItems && (
              <span
                className="
                  absolute -top-1 -right-2 
                  bg-red-500 text-white text-[10px] 
                  rounded-full px-1.5 py-0.5 min-w-[16px]
                  flex items-center justify-center
                  shadow-md
                "
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801521493443"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 text-[11px] text-emerald-700"
          >
            <span className="text-lg">🟢</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
