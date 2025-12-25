// src/pages/ProductPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import { bnToEnDigits } from "../utils/digits.js";



const getMainImage = (p) => p?.images?.[0] || p?.image || "/images/fallback-fish.jpg";
const formatQty = (q) => (Number.isInteger(q) ? q : q.toFixed(1));
const getUnit = (p) => p?.unit || p?.weight || "kg";


// --------- Gradual migration helpers (supports old + new structures) ----------
const pickText = (value, lang = "bn") => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value?.[lang] || value?.bn || value?.en || "";
  }
  if (typeof value === "string") return value;
  return "";
};

const pickList = (value, lang = "bn") => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const v = value?.[lang] || value?.bn || value?.en || [];
    return Array.isArray(v) ? v : [];
  }
  if (Array.isArray(value)) return value;
  return [];
};

// Titles (supports: title{bn,en} OR nameBn/nameEn OR name)
const getTitleBn = (p) => p?.title?.bn || p?.nameBn || p?.name || "";
const getTitleEn = (p) => p?.title?.en || p?.nameEn || "";

const getDisplayTitle = (p, lang) => {
  const bn = getTitleBn(p);
  const en = getTitleEn(p);
  return lang === "en" ? (en || bn) : (bn || en);
};

// ✅ Subtitle (supports your new ilish spec: subtitle{bn,en})
const getSubtitle = (p, lang) => pickText(p?.subtitle, lang);

const getDisplaySubtitle = (p, lang) => {
  const sub = getSubtitle(p, lang);
  if (sub) return sub;

  const bn = getTitleBn(p);
  const en = getTitleEn(p);
  return lang === "en" ? (bn || "") : (en || "");
};

const getPriceNote = (p, lang) =>
  pickText(p?.priceNote, lang) ||
  (lang === "bn" ? p?.priceNoteBn || "" : p?.priceNoteEn || "");

const getPriceText = (p, lang) => {
  const unit = getUnit(p);
  const hasRange =
    p?.priceMin != null &&
    p?.priceMax != null &&
    p?.priceMin !== p?.priceMax;

  const base = p?.priceMin ?? p?.price ?? 0;

  if (hasRange) return `৳${p.priceMin}–${p.priceMax}/${unit}`;
  if (base > 0) return `৳${base}/${unit}`;
  return lang === "bn" ? "দাম জানতে কল করুন" : "Call for price";
};

const getNutrition = (p, lang) => {
  const n = p?.nutrition;
  if (!n) return null;

  if (lang === "en" && n?.enPer100g && typeof n.enPer100g === "object") return n.enPer100g;
  if (n?.per100g && typeof n.per100g === "object") return n.per100g;

  if (n?.[lang] && typeof n[lang] === "object") return n[lang];

  if (typeof n === "object") return n;

  return null;
};

const SectionCard = ({ title, children }) => (
  <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
    {title ? (
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{title}</h2>
    ) : null}
    {children}
  </section>
);

const YouMightAlsoLike = ({ products, featuredSlugs = [], lang = "bn" }) => {
  const picks = useMemo(() => {
    const set = new Set(featuredSlugs.map((s) => String(s).toLowerCase()));
    return products
      .filter((p) => set.has(String(p.slug || "").toLowerCase()))
      .slice(0, 8);
  }, [products, featuredSlugs]);

  if (picks.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base md:text-lg font-bold text-gray-900">
          {lang === "bn" ? "আপনার পছন্দ হতে পারে" : "You Might Also Like"}
        </h3>
        <Link to="/" className="text-sm text-[#3D84A7] hover:underline">
          {lang === "bn" ? "হোমে ফিরে যান" : "Back to Home"}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {picks.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.slug}`}
            className="bg-white rounded-2xl border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all p-3"
          >
            <div className="h-24 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={getMainImage(p)}
                alt={getDisplayTitle(p, lang)}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-2">
              <div className="text-sm font-semibold text-gray-900 leading-tight">
                {getDisplayTitle(p, lang)}
              </div>
              <div className="text-[11px] text-gray-500">
                {getDisplaySubtitle(p, lang)}
              </div>
              <div className="text-sm font-bold text-[#3D84A7] mt-1">
                {getPriceText(p, lang)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ---------- Pricing chart helpers ----------
const safeNum = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);
const money = (n) => `৳${Math.round(Number(n) || 0)}`;
const avgWeightKg = (range) => {
  const min = safeNum(range?.min);
  const max = safeNum(range?.max);
  if (min == null || max == null) return null;
  return (min + max) / 2;
};

export default function ProductPage({ products, addToCart, onViewProduct }) {
  const { lang } = useLang(); // "bn" | "en"
  const { slug } = useParams();
  const [qty, setQty] = useState(1.0); // legacy fallback only
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedSizeKey, setSelectedSizeKey] = useState("");
  const [selectedGradeKey, setSelectedGradeKey] = useState("");
  const [fishCount, setFishCount] = useState(1);
  const [kgQty, setKgQty] = useState(1);


  const product = useMemo(() => {
    const target = String(slug || "").toLowerCase();
    return (products || []).find((p) => String(p.slug || "").toLowerCase() === target);
  }, [products, slug]);

  useEffect(() => {
    if (product) onViewProduct?.(product);
    // we intentionally don't depend on onViewProduct to avoid infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);


  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h1 className="text-xl font-bold text-gray-900">
            {lang === "bn" ? "পণ্য পাওয়া যায়নি" : "Product not found"}
          </h1>
          <p className="text-gray-600 mt-2">
            {lang === "bn"
              ? "আপনি যে পেজটি খুলতে চাচ্ছেন, সেটি পাওয়া যাচ্ছে না।"
              : "The product page you tried to open doesn’t exist."}
          </p>
          <Link to="/" className="inline-block mt-4 text-[#3D84A7] font-semibold hover:underline">
            {lang === "bn" ? "হোমে ফিরে যান" : "Go back home"}
          </Link>
        </div>
      </div>
    );
  }

  // ===== NEW pricing-aware section =====
  const model = product?.pricingModel || "LEGACY";
  const sizeOptions = Array.isArray(product?.sizePricing) ? product.sizePricing : [];
  const gradeOptions = Array.isArray(product?.gradePricing)
    ? product.gradePricing
    : Array.isArray(product?.sizePricing)
    ? product.sizePricing
    : [];

  const hasOptions =
  (model === "WHOLE_BY_SIZE_COUNT" && sizeOptions.length > 0) ||
  (model === "KG_BY_GRADE" && gradeOptions.length > 0);


  useEffect(() => {
    setSelectedSizeKey(sizeOptions?.[0]?.sizeKey || "");
    setSelectedGradeKey((gradeOptions?.[0]?.gradeKey || gradeOptions?.[0]?.sizeKey) || "");
    setFishCount(1);
    setKgQty(1);
    setQty(1.0);
    setOpenDetails(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);

  const selectedSize = useMemo(() => {
    return sizeOptions.find((s) => s.sizeKey === selectedSizeKey) || sizeOptions[0] || null;
  }, [sizeOptions, selectedSizeKey]);

  const selectedGrade = useMemo(() => {
    const key = selectedGradeKey;
    return gradeOptions.find((g) => (g.gradeKey || g.sizeKey) === key) || gradeOptions[0] || null;
  }, [gradeOptions, selectedGradeKey]);

  const kgSimplePricePerKg = useMemo(() => {
    return (
      safeNum(product?.startsFrom?.pricePerKg) ??
      safeNum(product?.priceMin) ??
      safeNum(product?.price) ??
      0
    );
  }, [product]);

  const estimateTotal = useMemo(() => {
    if (model === "WHOLE_BY_SIZE_COUNT") {
      const ppk = safeNum(selectedSize?.pricePerKg) ?? 0;
      const avg = avgWeightKg(selectedSize?.approxWholeFishWeightKg) ?? 0;
      return fishCount * avg * ppk;
    }
    if (model === "KG_BY_GRADE") {
      const ppk = safeNum(selectedGrade?.pricePerKg) ?? 0;
      return kgQty * ppk;
    }
    // KG_SIMPLE / LEGACY fallback
    return (Number(kgQty) || 1) * (Number(kgSimplePricePerKg) || 0);
  }, [model, selectedSize, selectedGrade, fishCount, kgQty, kgSimplePricePerKg]);

  const addFromProductPage = () => {
    // Keep old behavior for truly legacy products (no model set)
    if (model === "LEGACY" && sizeOptions.length === 0 && gradeOptions.length === 0) {
      const unit = getUnit(product);
      const basePrice = product.priceMin ?? product.price ?? 0;
      const totalPrice = basePrice > 0 ? basePrice * qty : 0;

      addToCart({
        id: product.id,
        name: getDisplayTitle(product, "bn"),
        nameBn: getTitleBn(product),
        nameEn: getTitleEn(product),
        image: getMainImage(product),
        price: product.price,
        priceMin: product.priceMin,
        weight: product.weight || product.unit || unit,
        cartQuantity: qty,
        totalPrice,
        slug: product.slug,
      });
      return;
    }

    // New model-aware cart payload (matches your Patch 2/3 system)
    const sizeK = selectedSize?.sizeKey || "size";
    const gradeK = selectedGrade?.gradeKey || selectedGrade?.sizeKey || "grade";

    const cartKey =
      model === "WHOLE_BY_SIZE_COUNT"
        ? `${product.id}::size:${sizeK}`
        : model === "KG_BY_GRADE"
        ? `${product.id}::grade:${gradeK}`
        : `${product.id}`;

    addToCart({
      cartKey,
      id: product.id,
      slug: product.slug,
      image: getMainImage(product),

      name: getDisplayTitle(product, "bn"),
      nameBn: getTitleBn(product),
      nameEn: getTitleEn(product),

      pricingModel: model,
      sellBy: product?.sellBy || (model === "WHOLE_BY_SIZE_COUNT" ? "count" : "kg"),

      selectedSizeKey: model === "WHOLE_BY_SIZE_COUNT" ? sizeK : null,
      selectedGradeKey: model === "KG_BY_GRADE" ? gradeK : null,

      selectedSizeLabel:
        model === "WHOLE_BY_SIZE_COUNT"
          ? (lang === "en"
              ? (selectedSize?.label?.en || selectedSize?.label?.bn || sizeK)
              : (selectedSize?.label?.bn || selectedSize?.label?.en || sizeK))
          : null,


      selectedGradeLabel:
        model === "KG_BY_GRADE"
          ? (selectedGrade?.label?.bn || selectedGrade?.label?.en || gradeK)
          : null,

      count: model === "WHOLE_BY_SIZE_COUNT" ? fishCount : null,
      kg: model === "WHOLE_BY_SIZE_COUNT" ? null : kgQty,

      totalPrice: estimateTotal, // estimate only
    });
  };

  // ===== legacy qty helpers (only used for legacy fallback block) =====
  const unit = getUnit(product);
  const basePrice = product.priceMin ?? product.price ?? 0;
  const totalPrice = basePrice > 0 ? basePrice * qty : null;
  const decrement = () => setQty((p) => Math.max(0.5, Number((p - 0.5).toFixed(1))));
  const increment = () => setQty((p) => Number((p + 0.5).toFixed(1)));

  // Specifications (old + new)
  const pageTitle = getDisplayTitle(product, lang);
  const pageSubtitle = getDisplaySubtitle(product, lang);

  const shortDescription =
    pickText(product.shortDescription, lang) ||
    (lang === "bn"
      ? "এই মাছটি সম্পর্কে বিস্তারিত তথ্য খুব শিগগিরই যোগ করা হবে।"
      : "Detailed info will be added soon.");

  const overview =
    pickText(product.overview, lang) ||
    product.longOverview ||
    (lang === "bn"
      ? "এই মাছের স্বাদ, রান্নার ধরন, এবং উৎস সম্পর্কে বিস্তারিত খুব শিগগিরই যোগ করা হবে।"
      : "We’ll add detailed overview (taste, cooking, sourcing) soon.");

  const healthBenefits = pickList(product.healthBenefits, lang);
  const cookingTips = pickList(product.cookingTips, lang);
  const nutrition = getNutrition(product, lang);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-4 py-6 md:py-10 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to="/" className="text-sm text-gray-500 hover:text-[#3D84A7]">
              ← {lang === "bn" ? "হোমে ফিরে যান" : "Back to Home"}
            </Link>

            <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
              {pageTitle}
            </h1>

            {pageSubtitle ? (
              <p className="text-sm text-gray-600 mt-1">{pageSubtitle}</p>
            ) : null}
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500">{lang === "bn" ? "দাম" : "Price"}</div>
            <div className="text-xl font-extrabold text-[#3D84A7]">
              {lang === "bn" ? bnToEnDigits(getPriceText(product, lang)) : getPriceText(product, lang)}
            </div>


            {getPriceNote(product, lang) ? (
              <div className="text-[11px] text-gray-500 mt-1">
                {getPriceNote(product, lang)}
              </div>
            ) : null}
          </div>
        </div>

        {/* Image + Order Options */}
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
  {/* ================= LEFT COLUMN (stack) ================= */}
  <div className="lg:col-span-3 space-y-6">
    {/* Top main product card */}
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8">
      <div className="h-64 md:h-80 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden">
        <img
          src={getMainImage(product)}
          alt={pageTitle}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
        {shortDescription}
      </p>

      {Array.isArray(product.badges) && product.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {product.badges.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="px-3 py-1 text-xs bg-slate-50 text-gray-700 rounded-full border border-slate-200"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      {/* Health Benefits */}
      {healthBenefits.length > 0 && (
        <div className="mt-5 border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-gray-900">
              {lang === "bn" ? "স্বাস্থ্য উপকারিতা" : "Health Benefits"}
            </h3>
          </div>

          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
            {healthBenefits.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      )}

    </div>

    {/* Cooking Tips (NOW in left column, directly under main card) */}
    <SectionCard title={lang === "bn" ? "রান্নার টিপস" : "Cooking Tips"}>
      {cookingTips.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
          {cookingTips.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600">
          {lang === "bn"
            ? "খুব শিগগিরই রান্নার উপায় ও টিপস যোগ করা হবে।"
            : "We’ll add cooking approach & tips soon."}
        </p>
      )}
    </SectionCard>

    {/* Nutrition (LEFT column, under Cooking Tips) */}
{nutrition && (
  <SectionCard
    title={lang === "bn" ? "পুষ্টিগুণ (প্রতি ১০০ গ্রাম)" : "Nutrition (per 100g)"}
  >
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <tbody>
          {Object.entries(nutrition)
            .filter(([, v]) => v != null && String(v).trim() !== "")
            .map(([k, v]) => (
              <tr key={k} className="border-b border-slate-200">
                <td className="py-2 font-semibold text-gray-700">{k}</td>
                <td className="py-2 text-gray-600 text-right tabular-nums">
                  {lang === "bn" ? bnToEnDigits(v) : v}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </SectionCard>
)}

  </div>

  {/* ================= RIGHT COLUMN (stack) ================= */}
  <div className="lg:col-span-2 space-y-6">
    <SectionCard title={lang === "bn" ? "অর্ডার অপশন" : "Order Options"}>
      {/* WHOLE_BY_SIZE_COUNT: show clean price chart */}
      {model === "WHOLE_BY_SIZE_COUNT" && sizeOptions.length > 0 ? (
        <div className="space-y-5">
          {/* Subheading */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                {lang === "bn" ? "সাইজ নির্বাচন করুন" : "Choose a size"}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {lang === "bn"
                  ? "দাম সাইজ ও ওজনের উপর নির্ভর করে"
                  : "Pricing depends on size & actual weight"}
              </div>
            </div>
            <div className="text-xs text-slate-500">
              {lang === "bn" ? "আনুমানিক" : "Estimated"}
            </div>
          </div>

          {/* Size cards */}
          <div className="grid gap-2">
            {sizeOptions.map((s) => {
              const key = s.sizeKey;
              const active = key === selectedSizeKey;

              const labelRaw =
                lang === "en"
                  ? (s?.label?.en || s?.label?.bn || key)
                  : (s?.label?.bn || s?.label?.en || key);

              // Only convert digits when showing Bangla UI
              const label = lang === "bn" ? bnToEnDigits(labelRaw) : labelRaw;


              const avg = avgWeightKg(s?.approxWholeFishWeightKg);
              const ppk = Math.round(Number(s?.pricePerKg) || 0);

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedSizeKey(key)}
                  className={[
                    "w-full rounded-2xl border p-3 text-left transition",
                    "hover:bg-slate-50",
                    active ? "border-[#3D84A7] bg-[#3D84A7]/[0.06]" : "border-slate-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 leading-snug">
                        {label}
                      </div>

                      <div className="text-xs text-slate-500 mt-1">
                        {avg
                          ? (lang === "bn"
                              ? `আনুমানিক ${avg.toFixed(1)} কেজি/মাছ`
                              : `Approx. ${avg.toFixed(1)} kg per fish`)
                          : (lang === "bn" ? "ওজন আনুমানিক" : "Approximate weight")}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-[#3D84A7] tabular-nums">
                        ৳{ppk}
                        <span className="text-xs font-semibold text-slate-500">
                          {lang === "bn" ? "/কেজি" : "/kg"}
                        </span>
                      </div>

                      <div className="mt-2 flex justify-end">
                        <span
                          className={[
                            "h-5 w-5 rounded-full border flex items-center justify-center",
                            active ? "border-[#3D84A7]" : "border-slate-300",
                          ].join(" ")}
                        >
                          {active ? (
                            <span className="h-2.5 w-2.5 rounded-full bg-[#3D84A7]" />
                          ) : null}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quantity + total */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500">
                  {lang === "bn" ? "মাছের সংখ্যা" : "Fish count"}
                </div>

                <div className="mt-2 inline-flex items-center rounded-full bg-white border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFishCount((c) => Math.max(1, c - 1))}
                    className="w-10 h-10 grid place-items-center hover:bg-slate-100"
                    aria-label={lang === "bn" ? "কম করুন" : "Decrease"}
                  >
                    −
                  </button>

                  <div className="px-4 font-semibold text-slate-900 tabular-nums">
                    {fishCount} {lang === "bn" ? "টি" : "fish"}
                  </div>

                  <button
                    type="button"
                    onClick={() => setFishCount((c) => c + 1)}
                    className="w-10 h-10 grid place-items-center hover:bg-slate-100"
                    aria-label={lang === "bn" ? "বাড়ান" : "Increase"}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-500">
                  {lang === "bn" ? "আনুমানিক মোট" : "Estimated total"}
                </div>
                <div className="text-2xl font-extrabold text-[#3D84A7] tabular-nums">
                  {money(estimateTotal)}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl bg-white/70 border border-slate-200 p-3">
              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3D84A7]" />
                <p className="text-[12px] leading-relaxed text-slate-600">
                  {lang === "bn"
                    ? "এটি আনুমানিক। চূড়ান্ত দাম সাইজ/ওজন যাচাই করে ফোনে নিশ্চিত করা হবে।"
                    : "This is an estimate. Final payable is confirmed on call after size/weight check."}
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={addFromProductPage}
            className="w-full h-11 rounded-full bg-[#3D84A7] hover:bg-[#46CDCF] text-white font-semibold transition"
          >
            {lang === "bn" ? "কার্টে যোগ করুন" : "Add to cart"}
          </button>

          <button
            type="button"
            onClick={() => setOpenDetails(true)}
            className="w-full h-11 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold transition"
          >
            {lang === "bn" ? "বিস্তারিত দেখুন" : "View details"}
          </button>
        </div>
      ) : model === "KG_BY_GRADE" && gradeOptions.length > 0 ? (
        // KG_BY_GRADE: show grade selection clean cards
        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-900">
            {lang === "bn" ? "গ্রেড অনুযায়ী দাম" : "Price by grade"}
          </div>

          <div className="grid gap-2">
            {gradeOptions.map((g) => {
              const key = g.gradeKey || g.sizeKey;
              const labelRaw =
                lang === "en"
                  ? (g?.label?.en || g?.label?.bn || key)
                  : (g?.label?.bn || g?.label?.en || key);

              // if Bangla UI, keep Bangla text but force English digits
              const label = lang === "bn" ? bnToEnDigits(labelRaw) : labelRaw;

              const active = key === selectedGradeKey;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedGradeKey(key)}
                  className={[
                    "w-full p-3 rounded-2xl border text-left transition",
                    active ? "border-[#3D84A7] bg-[#3D84A7]/[0.08]" : "border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-900">{label}</div>
                    <div className="font-extrabold text-[#3D84A7]">{money(g.pricePerKg)}/kg</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">
              {lang === "bn" ? "পরিমাণ (কেজি) — Step 0.5" : "Quantity (kg) — Step 0.5"}
            </div>

            <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setKgQty((k) => Math.max(1, Math.round((k - 0.5) * 10) / 10))}
                className="w-10 h-10 grid place-items-center hover:bg-slate-200"
              >
                −
              </button>
              <div className="px-4 font-semibold text-slate-900 tabular-nums">
                {formatQty(kgQty)} kg
              </div>
              <button
                type="button"
                onClick={() => setKgQty((k) => Math.round((k + 0.5) * 10) / 10)}
                className="w-10 h-10 grid place-items-center hover:bg-slate-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">{lang === "bn" ? "আনুমানিক মোট" : "Estimated total"}</div>
            <div className="text-xl font-extrabold text-[#3D84A7]">{money(estimateTotal)}</div>
          </div>
          {/* Estimate reassurance */}
          <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
            <div className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#3D84A7]" />
              <p className="text-[12px] leading-relaxed text-slate-600">
                {lang === "bn"
                  ? "এটি আনুমানিক দাম। সাইজ ও প্রকৃত ওজন যাচাই করে ফোনে চূড়ান্ত মূল্য নিশ্চিত করা হবে।"
                  : "This is an estimate. Final payable is confirmed on call after size and weight verification."}
              </p>
            </div>
          </div>


          <button
            type="button"
            onClick={addFromProductPage}
            className="w-full h-11 rounded-full bg-[#3D84A7] hover:bg-[#46CDCF] text-white font-semibold transition"
          >
            {lang === "bn" ? "কার্টে যোগ করুন" : "Add to cart"}
          </button>

          

          <button
            type="button"
            onClick={() => setOpenDetails(true)}
            className="w-full h-11 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold transition"
          >
            {lang === "bn" ? "বিস্তারিত দেখুন" : "View details"}
          </button>
        </div>
      ) : (
        // LEGACY / KG_SIMPLE fallback (keeps your old system)
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-2">
              <button
                type="button"
                onClick={decrement}
                className="text-gray-700 font-bold text-lg"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="font-semibold text-gray-900 text-sm">
                {formatQty(qty)} {unit}
              </span>

              <button
                type="button"
                onClick={increment}
                className="text-gray-700 font-bold text-lg"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={addFromProductPage}
              className="bg-[#3D84A7] hover:bg-[#46CDCF] text-white font-semibold px-5 py-2.5 rounded-full transition"
            >
              {lang === "bn" ? "যোগ করুন" : "Add"}
            </button>
          </div>

          <div className="text-sm text-gray-600">
            {totalPrice != null ? (
              <span>
                {lang === "bn" ? "আনুমানিক মোট:" : "Estimated total:"}{" "}
                <span className="font-bold text-gray-900">৳{Math.round(totalPrice)}</span>
              </span>
            ) : (
              <span>
                {lang === "bn"
                  ? "চূড়ান্ত দাম ফোন/WhatsApp এ নিশ্চিত করা হবে।"
                  : "Final price will be confirmed by phone/WhatsApp."}
              </span>
            )}
          </div>

          {/* Calm reassurance (always visible) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
            <div className="flex items-start gap-2">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-[#3D84A7]" />
              <p className="text-[12px] text-slate-600 leading-relaxed">
                {lang === "bn"
                  ? "এটি আনুমানিক। সঠিক ওজন/দাম যাচাই করে আমরা ফোন/WhatsApp এ নিশ্চিত করে জানিয়ে দেব।"
                  : "This is an estimate. We’ll confirm the final payable by phone/WhatsApp after checking the actual weight."}
              </p>
            </div>
          </div>

          {/* Only show “Choose size/grade” if this product actually has options */}
          {hasOptions ? (
            <button
              type="button"
              onClick={() => setOpenDetails(true)}
              className="w-full h-11 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold transition"
            >
              {lang === "bn" ? "সাইজ / গ্রেড নির্বাচন করুন" : "Choose size / grade"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setOpenDetails(true)}
              className="w-full h-11 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold transition"
            >
              {lang === "bn" ? "বিস্তারিত দেখুন" : "View details"}
            </button>
          )}

        </div>
      )}

      {openDetails && (
        <ProductDetails product={product} onClose={() => setOpenDetails(false)} addToCart={addToCart} />
      )}
    </SectionCard>

    <SectionCard title={lang === "bn" ? "সংক্ষিপ্ত পরিচিতি" : "Overview"}>
      <p className="text-sm text-gray-700 leading-relaxed">{overview}</p>
    </SectionCard>

    {/* Sticky Summary (RIGHT column, so right side never looks empty) */}
    <div className="sticky top-24 space-y-6">
      <SectionCard title={lang === "bn" ? "সংক্ষেপ" : "Summary"}>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="text-sm text-slate-600">
              {lang === "bn" ? "নির্বাচিত দাম" : "Selected pricing"}
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {getPriceText(product, lang)}
            </div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="text-sm text-slate-600">
              {lang === "bn" ? "আনুমানিক মোট" : "Estimated total"}
            </div>
            <div className="text-lg font-extrabold text-[#3D84A7]">
              {money(estimateTotal)}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {lang === "bn"
                ? "এটি আনুমানিক। চূড়ান্ত দাম সাইজ/ওজন দেখে কলের মাধ্যমে নিশ্চিত করা হবে।"
                : "This is an estimate. Final payable is confirmed on call after size/weight check."}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  </div>
</div>


        {/* Bottom */}
        <SectionCard title="">
          <YouMightAlsoLike products={products} featuredSlugs={["ilish", "koi"]} lang={lang} />
        </SectionCard>
      </div>
    </div>
  );
}
