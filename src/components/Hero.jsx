// src/components/Hero.jsx
import React, { useState, useEffect, useMemo } from "react";
import { products } from "../data/products.js";
import { useLang } from "../context/LangContext.jsx";

const highlightSlugs = ["ilish", "boal", "pangas"];

// ---------- Mixed-schema helpers ----------
const pickText = (value, lang = "bn") => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value?.[lang] || value?.bn || value?.en || "";
  }
  if (typeof value === "string") return value;
  return "";
};

const getTitleBn = (p) => p?.title?.bn || p?.nameBn || p?.name || "";
const getTitleEn = (p) => p?.title?.en || p?.nameEn || "";

const getDisplayTitle = (p, lang) => {
  const bn = getTitleBn(p);
  const en = getTitleEn(p);
  return lang === "en" ? (en || bn) : (bn || en);
};

const getPriceNote = (p, lang) =>
  pickText(p?.priceNote, lang) ||
  (lang === "bn" ? p?.priceNoteBn || "" : p?.priceNoteEn || "");

// ✅ null-safe price range formatting (works with 0/null correctly)
const formatPriceRange = (product, lang = "bn") => {
  const unit = product?.unit || product?.weight || "kg";

  const hasRange =
    product?.priceMin != null &&
    product?.priceMax != null &&
    product?.priceMin !== product?.priceMax;

  const base = product?.priceMin ?? product?.price ?? 0;

  if (hasRange) return `৳${product.priceMin}–${product.priceMax}/${unit}`;
  if (base > 0) return `৳${base}/${unit}`;
  return lang === "bn" ? "দাম জানতে কল করুন" : "Call for price";
};

const pickHighlights = () => {
  const selected = products.filter((p) => highlightSlugs.includes(p.slug));
  if (selected.length > 0) return selected;
  return products.slice(0, 3);
};

const Hero = () => {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  const highlightItems = useMemo(() => pickHighlights(), []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    const section = document.getElementById("products-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#47466D] via-[#3D84A7] to-[#46CDCF] text-white overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-40px] h-64 w-64 rounded-full bg-[#46CDCF]/30 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10 hidden lg:block" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] md:text-xs border border-white/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-wide">
                100% river &amp; sea fish — no farm fish
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Fresh, Clean &amp; Trusted{" "}
              <span className="block">Fish at Your Doorstep</span>
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-xl mb-6">
              Rupsha Fish collects premium fish directly from rivers and the sea
              – no farm fish. Every order is cleaned, hygienically packed, and
              delivered with care so your family can enjoy authentic
              Bangladeshi taste at home.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={scrollToProducts}
                className="
                  inline-flex items-center justify-center 
                  px-6 py-3 rounded-full text-sm md:text-base font-semibold 
                  bg-white text-[#3D84A7] shadow-lg shadow-black/10 
                  hover:shadow-xl hover:bg-gray-100 
                  transition-all
                "
              >
                Browse Fresh Fish <span className="ml-2 text-lg">🛒</span>
              </button>

              <a
                href="https://wa.me/8801521493443"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center 
                  px-5 py-3 rounded-full text-sm md:text-base font-semibold 
                  border border-white/40 bg-white/5 
                  hover:bg-white/10 hover:shadow-lg hover:shadow-green-400/20 
                  transition-all
                "
              >
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Order via WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs md:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  🚚
                </span>
                <span>Free delivery on orders over ৳1000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  🧊
                </span>
                <span>Cleaned &amp; hygienically packed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  🌊
                </span>
                <span>Collected from rivers &amp; sea only</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-4 md:mt-0">
            <div className="absolute -top-10 -right-6 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

            <div className="relative bg-white/95 text-gray-900 rounded-3xl p-5 md:p-6 shadow-2xl max-w-md md:ml-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-semibold">
                  Today&apos;s Highlights
                </h2>
                <span className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Fresh stock available
                </span>
              </div>

              <div className="space-y-3 text-sm">
                {highlightItems.map((item) => {
                  const title = getDisplayTitle(item, lang);
                  const note = getPriceNote(item, lang);
                  const isPremium = Array.isArray(item?.badges)
                    ? item.badges.includes("Premium")
                    : false;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold truncate">{title}</div>
                        <div className="text-xs text-gray-500">
                          {isPremium
                            ? "Premium cut, cleaned & ready"
                            : "Freshly sourced, cleaned & packed"}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-semibold">
                          {formatPriceRange(item, lang)}
                        </div>

                        {/* ✅ show the real note (supports new + old) */}
                        {note ? (
                          <div className="text-[11px] text-emerald-600 line-clamp-1">
                            {note}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="text-[11px] md:text-xs text-gray-500">
                  <div>Same-day delivery inside Dhaka*</div>
                  <div>Delivery slots: Morning &amp; Evening</div>
                </div>
                <button
                  onClick={scrollToProducts}
                  className="
                    text-[11px] md:text-xs font-semibold 
                    px-3 py-2 rounded-full 
                    bg-[#3D84A7] text-white hover:bg-[#46CDCF] transition
                  "
                >
                  View all fish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
