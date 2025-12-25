// components/ProductDetails.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLang } from "../context/LangContext.jsx";
import { bnToEnDigits } from "../utils/digits.js";

const safeNum = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

const getMainImage = (p) =>
  p?.images?.[0] || p?.image || "/images/fallback-fish.jpg";

const getImages = (product) => {
  if (Array.isArray(product?.images) && product.images.length > 0) return product.images;
  if (product?.image) return [product.image];
  return ["/images/fallback-fish.jpg"];
};

const avgWeightKg = (range) => {
  const min = safeNum(range?.min);
  const max = safeNum(range?.max);
  if (min == null || max == null) return null;
  return (min + max) / 2;
};

const formatQtyRaw = (n) => {
  const x = Number(n);
  if (!Number.isFinite(x)) return "1";
  if (Number.isInteger(x)) return String(x);
  return x.toFixed(1).replace(/0+$/, "").replace(/\.$/, "");
};

// ✅ language-aware nutrition picker
const getNutrition = (p, lang = "bn") => {
  const n = p?.nutrition;
  if (!n) return null;

  // Your schema: nutrition.per100g + nutrition.enPer100g
  if (lang === "en" && n?.enPer100g && typeof n.enPer100g === "object") return n.enPer100g;
  if (n?.per100g && typeof n.per100g === "object") return n.per100g;

  // Support: nutrition.bn / nutrition.en
  if (lang === "en" && n?.en && typeof n.en === "object") return n.en;
  if (n?.bn && typeof n.bn === "object") return n.bn;

  // fallback
  if (typeof n === "object") return n;

  return null;
};

const cleanNutritionEntries = (obj) => {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj).filter(([, v]) => v != null && String(v).trim() !== "");
};

const ProductDetails = ({ product, onClose, addToCart }) => {
  const { lang } = useLang(); // "bn" | "en"
  const [selectedImage, setSelectedImage] = useState(0);

  // selection state
  const [sizeKey, setSizeKey] = useState("");
  const [gradeKey, setGradeKey] = useState("");
  const [count, setCount] = useState(1); // WHOLE_BY_SIZE_COUNT
  const [kg, setKg] = useState(1);       // KG_SIMPLE / KG_BY_GRADE

  // ✅ helper: Bangla UI but English digits
  const fmt = (v) => {
    const s = v == null ? "" : String(v);
    return lang === "bn" ? bnToEnDigits(s) : s;
  };

  const formatMoney = (n) => {
    const x = safeNum(n);
    if (x == null) return "—";
    return fmt(`৳${Math.round(x)}`);
  };

  const formatQty = (n) => fmt(formatQtyRaw(n));

  if (!product) return null;

  const images = getImages(product);
  const model = product?.pricingModel || "LEGACY";
  const sellBy = product?.sellBy || "kg";

  const sizeOptions = Array.isArray(product?.sizePricing) ? product.sizePricing : [];
  const gradeOptions = Array.isArray(product?.gradePricing)
    ? product.gradePricing
    : (Array.isArray(product?.sizePricing) ? product.sizePricing : []);

  // ✅ init defaults
  useEffect(() => {
    if (model === "WHOLE_BY_SIZE_COUNT") {
      if (!sizeKey && sizeOptions.length > 0) setSizeKey(sizeOptions[0].sizeKey);
      if (count < 1) setCount(1);
      return;
    }

    if (model === "KG_BY_GRADE") {
      if (!gradeKey && gradeOptions.length > 0) {
        setGradeKey(gradeOptions[0].gradeKey || gradeOptions[0].sizeKey);
      }
      if (kg < 1) setKg(1);
      return;
    }

    if (model === "KG_SIMPLE") {
      if (kg < 1) setKg(1);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, product?.id, sizeOptions.length, gradeOptions.length]);

  const kgSimplePricePerKg = useMemo(() => {
    return (
      safeNum(product?.startsFrom?.pricePerKg) ??
      safeNum(product?.priceMin) ??
      safeNum(product?.price) ??
      0
    );
  }, [product]);

  const selectedSize = useMemo(() => {
    if (model !== "WHOLE_BY_SIZE_COUNT") return null;
    return sizeOptions.find((s) => s.sizeKey === sizeKey) || sizeOptions[0] || null;
  }, [model, sizeKey, sizeOptions]);

  const selectedGrade = useMemo(() => {
    if (model !== "KG_BY_GRADE") return null;
    const key = gradeKey;
    return (
      gradeOptions.find((g) => (g.gradeKey || g.sizeKey) === key) ||
      gradeOptions[0] ||
      null
    );
  }, [model, gradeKey, gradeOptions]);

  const estimate = useMemo(() => {
    if (model === "WHOLE_BY_SIZE_COUNT") {
      const ppk = safeNum(selectedSize?.pricePerKg) ?? 0;
      const avg = avgWeightKg(selectedSize?.approxWholeFishWeightKg) ?? 0;
      return (Number(count) || 1) * avg * ppk;
    }

    if (model === "KG_SIMPLE") {
      return (Number(kg) || 1) * (Number(kgSimplePricePerKg) || 0);
    }

    if (model === "KG_BY_GRADE") {
      const ppk = safeNum(selectedGrade?.pricePerKg) ?? 0;
      return (Number(kg) || 1) * ppk;
    }

    const base = safeNum(product?.priceMin) ?? safeNum(product?.price) ?? 0;
    return (Number(kg) || 1) * base;
  }, [model, count, kg, selectedSize, selectedGrade, kgSimplePricePerKg, product]);

  const displayLine = useMemo(() => {
    if (model === "WHOLE_BY_SIZE_COUNT") {
      const label =
        (lang === "en"
          ? (selectedSize?.label?.en || selectedSize?.label?.bn)
          : (selectedSize?.label?.bn || selectedSize?.label?.en)) ||
        selectedSize?.sizeKey ||
        "";

      const ppk = safeNum(selectedSize?.pricePerKg);
      const avg = avgWeightKg(selectedSize?.approxWholeFishWeightKg);

      return {
        title: lang === "bn" ? "আনুমানিক দাম" : "Estimated price",
        sub:
          lang === "bn"
            ? fmt(`সাইজ: ${label} • ৳${ppk ?? "—"}/kg • প্রতি মাছ আনু. ${avg ? `${avg.toFixed(2)}kg` : "—"}`)
            : `Size: ${label} • ৳${ppk ?? "—"}/kg • Avg wt/fish: ${avg ? `${avg.toFixed(2)}kg` : "—"}`,
        hint:
          lang === "bn"
            ? "পুরো মাছ হিসেবে বিক্রি। ওজন মেপে চূড়ান্ত দাম নিশ্চিত করা হবে।"
            : "Sold as whole fish. Final amount confirmed after weighing.",
      };
    }

    if (model === "KG_BY_GRADE") {
      const label =
        (lang === "en"
          ? (selectedGrade?.label?.en || selectedGrade?.label?.bn)
          : (selectedGrade?.label?.bn || selectedGrade?.label?.en)) ||
        (selectedGrade?.gradeKey || selectedGrade?.sizeKey) ||
        "";

      const ppk = safeNum(selectedGrade?.pricePerKg);
      return {
        title: lang === "bn" ? "আনুমানিক দাম" : "Estimated price",
        sub:
          lang === "bn"
            ? fmt(`গ্রেড: ${label} • ৳${ppk ?? "—"}/kg`)
            : `Grade: ${label} • ৳${ppk ?? "—"}/kg`,
        hint:
          lang === "bn"
            ? "গ্রেড অনুযায়ী দাম পরিবর্তিত হতে পারে। কল দিয়ে নিশ্চিত করা হবে।"
            : "Price depends on grade (pcs per kg). Final amount confirmed on call.",
      };
    }

    return {
      title: lang === "bn" ? "আনুমানিক দাম" : "Estimated price",
      sub: fmt(`৳${kgSimplePricePerKg || "—"}/kg`),
      hint:
        lang === "bn"
          ? "ওজন অনুযায়ী বিক্রি। ওজন মেপে চূড়ান্ত দাম নিশ্চিত করা হবে।"
          : "Sold by weight. Final amount confirmed after weighing.",
    };
  }, [model, selectedSize, selectedGrade, kgSimplePricePerKg, lang]);

  const kgStep = model === "KG_BY_GRADE" ? 0.5 : 1;

  const incrementCount = () => setCount((v) => v + 1);
  const decrementCount = () => setCount((v) => (v > 1 ? v - 1 : 1));

  const incrementKg = () => setKg((v) => Math.round((v + kgStep) * 10) / 10);
  const decrementKg = () =>
    setKg((v) => {
      const next = Math.round((v - kgStep) * 10) / 10;
      return next >= 1 ? next : 1;
    });

  const handleBackdropClick = (e) => {
  // close ONLY when clicking outside the modal card
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };


  const handlePrevImage = () =>
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNextImage = () =>
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const title = product?.title?.bn || product?.nameBn || product?.name || "";
  const titleEn = product?.title?.en || product?.nameEn || "";

  const nutrition = useMemo(() => getNutrition(product, lang), [product, lang]);
  const nutritionEntries = useMemo(() => cleanNutritionEntries(nutrition), [nutrition]);

  const handleAddToCart = () => {
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

      name: title,
      nameBn: title,
      nameEn: titleEn,

      pricingModel: model,
      sellBy,

      selectedSizeKey: model === "WHOLE_BY_SIZE_COUNT" ? sizeK : null,
      selectedGradeKey: model === "KG_BY_GRADE" ? gradeK : null,

      selectedSizeLabel:
        model === "WHOLE_BY_SIZE_COUNT"
          ? (selectedSize?.label?.bn || selectedSize?.label?.en || selectedSize?.sizeKey || "")
          : null,

      selectedGradeLabel:
        model === "KG_BY_GRADE"
          ? (selectedGrade?.label?.bn || selectedGrade?.label?.en || selectedGrade?.gradeKey || selectedGrade?.sizeKey || "")
          : null,

      count: model === "WHOLE_BY_SIZE_COUNT" ? count : null,
      kg: model === "WHOLE_BY_SIZE_COUNT" ? null : kg,

      cartQuantity: model === "WHOLE_BY_SIZE_COUNT" ? count : kg,
      unit: model === "WHOLE_BY_SIZE_COUNT" ? "fish" : "kg",

      totalPrice: Number.isFinite(Number(estimate)) ? Number(estimate) : 0,
    });

    onClose?.();
  };

  const whatsappText = useMemo(() => {
    if (model === "WHOLE_BY_SIZE_COUNT") {
      const label =
        (lang === "en"
          ? (selectedSize?.label?.en || selectedSize?.label?.bn)
          : (selectedSize?.label?.bn || selectedSize?.label?.en)) ||
        selectedSize?.sizeKey ||
        "";

      return `Hello! I'd like to order ${count} fish of ${titleEn || title} (Size: ${label}). Estimated: ${formatMoney(estimate)} (final confirmed on call).`;
    }

    if (model === "KG_BY_GRADE") {
      const label =
        (lang === "en"
          ? (selectedGrade?.label?.en || selectedGrade?.label?.bn)
          : (selectedGrade?.label?.bn || selectedGrade?.label?.en)) ||
        (selectedGrade?.gradeKey || selectedGrade?.sizeKey) ||
        "";

      return `Hello! I'd like to order ${formatQtyRaw(kg)}kg of ${titleEn || title} (Grade: ${label}). Estimated: ${formatMoney(estimate)} (final confirmed on call).`;
    }

    return `Hello! I'd like to order ${formatQtyRaw(kg)}kg of ${titleEn || title}. Estimated: ${formatMoney(estimate)} (final confirmed on call).`;
  }, [model, count, kg, title, titleEn, selectedSize, selectedGrade, estimate, lang]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start sm:items-center overflow-y-auto p-4"
      onMouseDown={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Images */}
          <div className="md:w-1/2 p-6">
            <div className="relative mb-4">
              <div className="w-full h-64 md:h-80 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
                <img
                  src={images[selectedImage]}
                  alt={title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 border-2 rounded-xl overflow-hidden ${
                      selectedImage === index ? "border-[#3D84A7]" : "border-slate-200"
                    }`}
                  >
                    <img src={img} alt={`${title} view ${index + 1}`} className="w-full h-full object-contain bg-slate-100" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
                {titleEn ? <div className="text-sm text-slate-500 mt-0.5">{titleEn}</div> : null}
              </div>

              <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Estimate card */}
            <div className="mb-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-600">{displayLine.title}</div>
              <div className="text-3xl font-extrabold text-[#3D84A7] mt-1">
                {formatMoney(estimate)}
              </div>
              <div className="text-xs text-slate-500 mt-2">{displayLine.sub}</div>
              <div className="text-[11px] text-slate-500 mt-2">{displayLine.hint}</div>
            </div>

            {/* Selector block */}
            {model === "WHOLE_BY_SIZE_COUNT" && (
              <div className="mb-6">
                <div className="font-semibold text-slate-900 mb-2">
                  {lang === "bn" ? "সাইজ নির্বাচন করুন" : "Select size"}
                </div>
                <select
                  value={sizeKey}
                  onChange={(e) => setSizeKey(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-white"
                >
                  {sizeOptions.map((s) => (
                    <option key={s.sizeKey} value={s.sizeKey}>
                      {fmt(
                        `${(lang === "en" ? (s?.label?.en || s?.label?.bn) : (s?.label?.bn || s?.label?.en)) || s.sizeKey} — ৳${s.pricePerKg}/kg`
                      )}
                    </option>
                  ))}
                </select>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {lang === "bn" ? "মাছের সংখ্যা" : "Fish count"}
                  </span>

                  <div className="flex items-center rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={decrementCount}
                      className="w-10 h-10 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                    >
                      −
                    </button>
                    <div className="px-4 text-sm font-bold text-slate-900 tabular-nums">
                      {fmt(count)}
                    </div>
                    <button
                      type="button"
                      onClick={incrementCount}
                      className="w-10 h-10 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(model === "KG_SIMPLE" || model === "KG_BY_GRADE" || model === "LEGACY") && (
              <div className="mb-6">
                {model === "KG_BY_GRADE" && (
                  <>
                    <div className="font-semibold text-slate-900 mb-2">
                      {lang === "bn" ? "গ্রেড নির্বাচন করুন" : "Select grade"}
                    </div>
                    <select
                      value={gradeKey}
                      onChange={(e) => setGradeKey(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-white"
                    >
                      {gradeOptions.map((g) => {
                        const key = g.gradeKey || g.sizeKey;
                        const label =
                          (lang === "en"
                            ? (g?.label?.en || g?.label?.bn)
                            : (g?.label?.bn || g?.label?.en)) || key;

                        return (
                          <option key={key} value={key}>
                            {fmt(`${label} — ৳${g.pricePerKg}/kg`)}
                          </option>
                        );
                      })}
                    </select>
                  </>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {lang === "bn" ? "পরিমাণ (কেজি)" : "Quantity (kg)"}
                  </span>

                  <div className="flex items-center rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={decrementKg}
                      className="w-10 h-10 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                    >
                      −
                    </button>
                    <div className="px-4 text-sm font-bold text-slate-900 tabular-nums">
                      {formatQty(kg)}
                      <span className="ml-1 text-slate-500 font-medium">kg</span>
                    </div>
                    <button
                      type="button"
                      onClick={incrementKg}
                      className="w-10 h-10 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {model === "KG_BY_GRADE" && (
                  <div className="text-[11px] text-slate-500 mt-2">
                    {lang === "bn" ? "স্টেপ: 0.5kg" : "Step: 0.5kg"}
                  </div>
                )}
              </div>
            )}

            {nutritionEntries.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    {lang === "bn" ? "পুষ্টিগুণ (প্রতি ১০০ গ্রাম)" : "Nutrition (per 100g)"}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    {lang === "bn" ? "প্রায়" : "Approx."}
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_1fr_auto] gap-x-5 gap-y-3 text-sm">
                    {nutritionEntries.map(([k, v]) => (
                      <React.Fragment key={k}>
                        <div className="font-semibold text-slate-700">{fmt(k)}</div>
                        <div className="text-right text-slate-600 tabular-nums">{fmt(v)}</div>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                    {lang === "bn"
                      ? "নোট: সাইজ ও মৌসুম অনুযায়ী মান পরিবর্তিত হতে পারে।"
                      : "Note: Values may vary depending on fish size and season."}
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#3D84A7] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#46CDCF] transition"
              >
                {lang === "bn" ? "কার্টে যোগ করুন" : "Add to Cart"}
              </button>

              <a
                href={`https://wa.me/+8801521493443?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#1ebe5b] transition text-center"
              >
                {lang === "bn" ? "এখনই কিনুন" : "Buy Now"}
              </a>
            </div>

            <div className="text-[11px] text-slate-500 mt-3">
              {lang === "bn"
                ? "নোট: এটি আনুমানিক দাম। আমাদের প্রতিনিধি কল করে চূড়ান্ত মূল্য নিশ্চিত করবেন।"
                : "Note: This is an estimated price for your convenience. Final payable amount will be confirmed by our agent."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
