// components/OrderFormModal.jsx
import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const FREE_DELIVERY_THRESHOLD = 1000;

const isWholeFish = (item) => item?.pricingModel === "WHOLE_BY_SIZE_COUNT";
const isGradeKg = (item) => item?.pricingModel === "KG_BY_GRADE";

const formatQty = (n) => {
  const x = Number(n);
  if (!Number.isFinite(x)) return "1";
  if (Number.isInteger(x)) return String(x);
  return x.toFixed(1).replace(/0+$/, "").replace(/\.$/, "");
};

const money = (n) => `৳${Math.round(Number(n) || 0)}`;

const OrderFormModal = ({
  isOpen,
  onClose,
  cartItems,
  estimatedSubtotal,
  deliveryFee,
  onOrderSuccess,
  onOrderError,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const finalTotal = (Number(estimatedSubtotal) || 0) + (Number(deliveryFee) || 0);

  // Option A count metric: fish count + kg-line count
  const totalItemsMetric = useMemo(() => {
    return cartItems.reduce((sum, it) => {
      if (isWholeFish(it)) return sum + (Number(it.count) || 1);
      return sum + 1;
    }, 0);
  }, [cartItems]);

  const orderSummary = useMemo(() => {
    return cartItems
      .map((item) => {
        const name = item.nameBn || item.name || "Item";
        const approx = Number(item.totalPrice)
          ? `~${money(item.totalPrice)}`
          : "price to confirm";

        if (isWholeFish(item)) {
          const c = Number(item.count) || 1;
          const sizeLabel = item.selectedSizeLabel || item.selectedSizeKey;
          const size = sizeLabel ? ` (Size: ${sizeLabel})` : "";
          return `• ${name}${size} – ${c} ${c > 1 ? "fish" : "fish"} (${approx})`;
        }

        const k = Number(item.kg) || 1;
        const gradeLabel = item.selectedGradeLabel || item.selectedGradeKey;
        const grade = gradeLabel ? ` (Grade: ${gradeLabel})` : "";
        return `• ${name}${grade} – ${formatQty(k)}kg (${approx})`;
      })
      .join("\n");
  }, [cartItems]);

  const headerQtyText = useMemo(() => {
    // For display only (nice compact)
    const fishCount = cartItems.reduce(
      (sum, it) => sum + (isWholeFish(it) ? (Number(it.count) || 1) : 0),
      0
    );
    const kgLines = cartItems.reduce((sum, it) => sum + (!isWholeFish(it) ? 1 : 0), 0);
    const parts = [];
    if (fishCount > 0) parts.push(`${fishCount} fish`);
    if (kgLines > 0) parts.push(`${kgLines} kg-items`);
    return parts.length ? parts.join(" · ") : `${cartItems.length} items`;
  }, [cartItems]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName || !phone || !address) {
      onOrderError?.("Please fill all required fields.");
      return;
    }
    if (!cartItems.length) {
      onOrderError?.("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);

    const params = {
      customer_name: customerName,
      phone,
      address,

      // keep existing template compatibility
      area: "",
      notes: "",

      order_summary: orderSummary,
      subtotal: money(estimatedSubtotal),
      delivery_fee: deliveryFee === 0 ? "Free" : money(deliveryFee),
      final_total: money(finalTotal),

      // NOTE: now it's Option A metric, not kg sum
      total_items: totalItemsMetric,

      coupon_code: coupon || "N/A",

      // Extra fields (safe even if template ignores)
      items_breakdown: headerQtyText,
      pricing_note:
        "Estimated amounts shown. Final payable will be confirmed by agent after size/weight check.",
      free_delivery_threshold: money(FREE_DELIVERY_THRESHOLD),
    };

    try {
      await emailjs.send(serviceId, templateId, params, publicKey);
      onOrderSuccess?.(
        "Order submitted successfully! We will call you shortly to confirm size/weight & delivery."
      );
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      console.error(err);
      onOrderError?.(
        "Failed to submit order. Please try again or use WhatsApp checkout."
      );
      setIsSubmitting(false);
    }
  };

  return (
    // BACKDROP
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 px-3"
      onClick={onClose}
    >
      {/* MODAL CARD */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative
                   max-h-[90vh] overflow-y-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Cash on Delivery – Order Details
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Fill in your information. We will call you to confirm the order,
              size/weight and delivery time.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            type="button"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-4 space-y-5">
          {/* Order summary card */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-gray-800 text-sm">
                Order Summary
              </p>
              <span className="text-[11px] text-gray-500">
                {cartItems.length} lines · {headerQtyText}
              </span>
            </div>

            <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1 text-xs">
              {cartItems.map((item, idx) => {
                const name = item.nameBn || item.name || "Item";
                const approx = Number(item.totalPrice) ? `~${money(item.totalPrice)}` : "price later";

                if (isWholeFish(item)) {
                  const c = Number(item.count) || 1;
                  const sizeLabel = item.selectedSizeLabel || item.selectedSizeKey;
                  const size = sizeLabel ? ` · Size: ${sizeLabel}` : "";
                  return (
                    <div key={item.cartKey || idx} className="flex justify-between text-gray-700">
                      <span>{name} · {c} fish{size}</span>
                      <span className="text-gray-500">{approx}</span>
                    </div>
                  );
                }

                const k = Number(item.kg) || 1;
                const gradeLabel = item.selectedGradeLabel || item.selectedGradeKey;
                const grade = gradeLabel ? ` · Grade: ${gradeLabel}` : "";
                return (
                  <div key={item.cartKey || idx} className="flex justify-between text-gray-700">
                    <span>{name} · {formatQty(k)}kg{grade}</span>
                    <span className="text-gray-500">{approx}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 border-t border-dashed border-gray-200 pt-2 text-xs text-gray-800 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal (estimate)</span>
                <span className="font-medium">{money(estimatedSubtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>
                  Delivery (inside Dhaka)
                  <span className="block text-[10px] text-gray-400">
                    Free over {money(FREE_DELIVERY_THRESHOLD)}
                  </span>
                </span>
                <span>{deliveryFee === 0 ? "Free" : `~${money(deliveryFee)}`}</span>
              </div>
              <div className="flex justify-between pt-1 mt-1 border-t border-gray-200">
                <span className="font-semibold text-gray-900 text-sm">
                  Total (estimate)
                </span>
                <span className="font-semibold text-[#3D84A7] text-sm">
                  {money(finalTotal)}
                </span>
              </div>
              <p className="mt-2 text-[10px] text-gray-500">
                Final payable amount will be confirmed by our agent after size/weight check.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-800">
                আপনার নাম <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center rounded-lg border border-gray-300 bg-white overflow-hidden">
                <div className="w-12 h-11 flex items-center justify-center bg-gray-100 text-gray-600 text-xl">
                  👤
                </div>
                <input
                  type="text"
                  className="flex-1 px-3 py-2 text-sm outline-none border-0 focus:ring-0"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="আপনার নাম"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-800">
                ফোন নাম্বার <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center rounded-lg border border-gray-300 bg-white overflow-hidden">
                <div className="w-12 h-11 flex items-center justify-center bg-gray-100 text-gray-600 text-xl">
                  📞
                </div>
                <input
                  type="tel"
                  className="flex-1 px-3 py-2 text-sm outline-none border-0 focus:ring-0"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="০১XXXXXXXXX"
                  required
                />
              </div>
              <p className="text-[10px] text-gray-400">
                অর্ডার কনফার্ম করার জন্য এই নাম্বারে কল করা হবে।
              </p>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-800">
                এড্রেস <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-lg border border-gray-300 bg-white overflow-hidden">
                <div className="w-12 flex items-start justify-center bg-gray-100 text-gray-600 text-xl pt-2">
                  📍
                </div>
                <textarea
                  className="flex-1 px-3 py-2 text-sm outline-none border-0 focus:ring-0 resize-none"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="বাড়ি, রোড, এরিয়া, সিটি"
                  required
                />
              </div>
            </div>

            {/* Coupon */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-800">
                কুপন কোড (ঐচ্ছিক)
              </label>
              <div className="flex rounded-lg border border-gray-300 bg-white overflow-hidden">
                <div className="w-12 h-11 flex items-center justify-center bg-gray-100 text-gray-600 text-lg">
                  🎫
                </div>
                <input
                  type="text"
                  className="flex-1 px-3 py-2 text-sm outline-none border-0 focus:ring-0"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="যদি কুপন থাকে লিখুন"
                />
                <button
                  type="button"
                  className="px-3 text-xs font-semibold text-[#3D84A7] border-l border-gray-200 bg-gray-50"
                  disabled
                >
                  Apply
                </button>
              </div>
              <p className="text-[10px] text-gray-400">
                কুপন থাকলে আমাদের টিম কনফার্মেশন কলের সময় প্রয়োগ করবে।
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2
                           rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold
                           text-sm py-2.5 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "এখনই অর্ডার করুন (Cash on Delivery)"}
              </button>

              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center gap-2
                           rounded-lg border border-dashed border-gray-300 text-gray-500
                           text-xs py-2.5 cursor-not-allowed bg-gray-50"
              >
                🔒 Pay Online (Coming soon)
              </button>

              <p className="mt-1 text-[10px] text-gray-400 text-center">
                সাবমিট করার পর Rupsha Fish টিম আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderFormModal;
