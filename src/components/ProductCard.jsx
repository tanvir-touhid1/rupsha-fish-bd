// src/components/ProductCard.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

const getMainImage = (p) =>
  p?.images?.[0] || p?.image || "/images/fallback-fish.jpg";

// --------- text helpers ----------
const pickText = (value, lang = "bn") => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value?.[lang] || value?.bn || value?.en || "";
  }
  if (typeof value === "string") return value;
  return "";
};

const getTitleBn = (p) => p?.title?.bn || p?.nameBn || p?.name || "";
const getTitleEn = (p) => p?.title?.en || p?.nameEn || "";
const getDisplayName = (p, lang) =>
  lang === "en"
    ? getTitleEn(p) || getTitleBn(p)
    : getTitleBn(p) || getTitleEn(p);

const getTitleOtherLang = (p, lang) =>
  lang === "en" ? getTitleBn(p) : getTitleEn(p);

const getSubtitle = (p, lang) => pickText(p?.subtitle, lang);
const getDisplaySubtitle = (p, lang) =>
  getSubtitle(p, lang) || getTitleOtherLang(p, lang) || "";

// --------- Starts-from price helpers (NO RANGE) ----------
const safeNum = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

const minFromArray = (arr, pick) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const nums = arr.map(pick).map(safeNum).filter((x) => x != null);
  if (nums.length === 0) return null;
  return Math.min(...nums);
};

const getStartsFrom = (p) => {
  const model = p?.pricingModel;

  if (model === "WHOLE_BY_SIZE_COUNT") {
    return (
      safeNum(p?.startsFrom?.pricePerKg) ??
      minFromArray(p?.sizePricing, (x) => x?.pricePerKg) ??
      safeNum(p?.priceMin) ??
      safeNum(p?.price) ??
      null
    );
  }

  if (model === "KG_BY_GRADE") {
    return (
      safeNum(p?.startsFrom?.pricePerKg) ??
      minFromArray(p?.gradePricing, (x) => x?.pricePerKg) ??
      minFromArray(p?.sizePricing, (x) => x?.pricePerKg) ??
      safeNum(p?.priceMin) ??
      safeNum(p?.price) ??
      null
    );
  }

  // KG_SIMPLE or legacy
  return (
    safeNum(p?.startsFrom?.pricePerKg) ??
    safeNum(p?.priceMin) ??
    safeNum(p?.price) ??
    null
  );
};

// keep it short + consistent height
const priceLine = (p, lang) => {
  const start = getStartsFrom(p);
  if (start != null && start > 0) {
    return lang === "en" ? `Starts from ৳${start}/kg` : `শুরু ৳${start}/kg`;
  }
  return lang === "en" ? "Call for price" : "দাম জানতে কল করুন";
};

// Friendly microcopy (1 line, consistent)
const friendlyLine = (p, lang) => {
  const model = p?.pricingModel;

  // human + simple, no jargon
  if (model === "WHOLE_BY_SIZE_COUNT") {
    return lang === "en"
      ? "Final price depends on size."
      : "চূড়ান্ত দাম সাইজ অনুযায়ী নির্ধারিত হয়।";
  }

  if (model === "KG_BY_GRADE") {
    return lang === "en"
      ? "Final price depends on grade."
      : "চূড়ান্ত দাম গ্রেড অনুযায়ী নির্ধারিত হয়।";
  }

  return lang === "en"
    ? "Fresh stock, limited daily."
    : "তাজা স্টক, প্রতিদিন সীমিত।";
};

export default function ProductCard({ product, onViewProduct }) {
  const { lang } = useLang();
  const [imageError, setImageError] = useState(false);

  const mainImage = getMainImage(product);
  const productUrl = product?.slug ? `/product/${product.slug}` : "#";

  const title = getDisplayName(product, lang);
  const subtitle = getDisplaySubtitle(product, lang);

  const priceText = useMemo(() => priceLine(product, lang), [product, lang]);
  const microText = useMemo(() => friendlyLine(product, lang), [product, lang]);

  const detailsLabel = lang === "en" ? "Details" : "বিস্তারিত";
  const ctaLabel = lang === "en" ? "View" : "দেখুন";

  const badges = Array.isArray(product?.badges) ? product.badges : [];
  const showBadges = badges.slice(0, 2);
  const extraCount = Math.max(0, badges.length - showBadges.length);

  const handleView = () => {
    if (onViewProduct) onViewProduct(product);
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden h-full flex flex-col">
      <Link
        to={productUrl}
        onClick={handleView}
        className="block text-left h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative w-full h-44 bg-slate-50 flex items-center justify-center">
          <img
            src={imageError ? "/images/fallback-fish.jpg" : mainImage}
            alt={title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug truncate group-hover:text-[#3D84A7] transition-colors">
                {title}
              </h3>

              {/* Keep the same height whether subtitle exists or not */}
              {subtitle ? (
                <div className="text-[12px] text-slate-500 truncate mt-0.5">
                  {subtitle}
                </div>
              ) : (
                <div className="text-[12px] text-transparent mt-0.5 select-none">
                  .
                </div>
              )}
            </div>

            <span className="text-[11px] text-slate-400 group-hover:text-[#3D84A7] transition-colors whitespace-nowrap">
              {detailsLabel} →
            </span>
          </div>

          {/* Price box (clean + consistent) */}
          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <div className="text-sm font-extrabold text-[#3D84A7] leading-tight">
              {priceText}
            </div>
            <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
              {microText}
            </div>
          </div>

          {/* Badges (fixed-height row so cards align better) */}
          <div className="mt-3 min-h-[28px] flex flex-wrap gap-2">
            {showBadges.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="px-2 py-[2px] text-[11px] bg-white text-slate-600 rounded-full border border-slate-200"
              >
                {tag}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="px-2 py-[2px] text-[11px] bg-white text-slate-500 rounded-full border border-slate-200">
                +{extraCount}
              </span>
            )}
          </div>

          {/* CTA pinned to bottom ALWAYS */}
          <div className="mt-auto pt-4 flex items-center justify-end">
            <span className="h-10 px-6 rounded-full text-sm font-semibold text-white bg-[#3D84A7] group-hover:bg-[#46CDCF] transition-all inline-flex items-center justify-center">
              {ctaLabel}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
