// src/components/CartDrawer.jsx
import React, { useEffect, useMemo, useState } from "react";
import OrderFormModal from "./OrderFormModal.jsx";
const FREE_DELIVERY_THRESHOLD = 1000; // Tk
const BASE_DELIVERY_FEE = 60; // Tk


const getModel = (item) => item?.pricingModel || "KG_SIMPLE";
const isWholeFish = (item) => item?.pricingModel === "WHOLE_BY_SIZE_COUNT";
const isGradeKg = (item) => item?.pricingModel === "KG_BY_GRADE";

const formatQty = (n) => {
  const x = Number(n);
  if (!Number.isFinite(x)) return "1";
  if (Number.isInteger(x)) return String(x);
  return x.toFixed(1).replace(/0+$/, "").replace(/\.$/, "");
};


export default function CartDrawer({
  open,
  onClose,
  cartItems,
  onUpdateQty,
  onRemove,
  onClear,
}) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    // ==================== MOBILE SWIPE STATE ====================
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = React.useRef(0);

  // ==================== MOBILE SWIPE HANDLERS ====================
  const onTouchStart = (e) => {
    if (window.innerWidth >= 640) return;
    startXRef.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    const deltaY = Math.abs(e.touches[0].clientY - e.changedTouches?.[0]?.clientY || 0);

    // ignore mostly-vertical gestures
    if (deltaX > 0 && deltaX > deltaY) {
      setDragX(deltaX);
    }
  };

  const onTouchEnd = () => {
    if (!isDragging) return;

    const threshold = window.innerWidth * 0.35;
    if (dragX > threshold) onClose?.();

    setDragX(0);
    setIsDragging(false);
  };

  // lock background scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // esc to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (Number(item.totalPrice) || 0), 0);
  }, [cartItems]);
  const deliveryFee =
  subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD
    ? 0
    : BASE_DELIVERY_FEE;

  const estimatedTotal = subtotal + deliveryFee;

  const whatsappMessage = (() => {
  if (!cartItems.length) {
    return `I would like to place an order from Rupsha Fish. Please share available items and prices.`;
  }

  const lines = cartItems.map((item) => {
    const name = item.nameBn || item.name || "Item";
    const approx = Number(item.totalPrice)
      ? `~৳${Math.round(item.totalPrice)}`
      : "price to confirm";

    if (isWholeFish(item)) {
      const c = Number(item.count) || 1;
      const size = item.selectedSizeLabel || item.selectedSizeKey;
      return `• ${name}${size ? ` (Size: ${size})` : ""} – ${c} fish (${approx})`;
    }

    const k = Number(item.kg) || 1;
    const grade = item.selectedGradeLabel || item.selectedGradeKey;
    return `• ${name}${grade ? ` (Grade: ${grade})` : ""} – ${formatQty(k)}kg (${approx})`;
  });

  return (
    `*Rupsha Fish Order (Estimate)*\n\n` +
    `${lines.join("\n")}\n\n` +
    `Estimated subtotal: ৳${Math.round(subtotal)}\n` +
    `Delivery: ${deliveryFee === 0 ? "Free" : `~৳${deliveryFee}`}\n` +
    `Estimated total: ৳${Math.round(estimatedTotal)}\n\n` +
    `*Note:* Final price confirmed after weighing/size check on call.\n\n` +
    `Please provide:\n• Name\n• Mobile number\n• Delivery address`
  );
  })();

  const whatsappUrl = `https://wa.me/8801521493443?text=${encodeURIComponent(
    whatsappMessage
  )}`;


  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          className={[
            "absolute inset-0 bg-black/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={onClose}
          aria-hidden="true"
        />
      </div>

      {/* Drawer */}
      <aside
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={[
          "fixed top-0 right-0 z-[60] h-[100dvh] w-[92%] sm:w-[420px]",
          "bg-white shadow-2xl border-l border-slate-200 flex flex-col",
          isDragging ? "" : "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{
          transform: open
            ? `translateX(${dragX}px)`
            : "translateX(100%)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >

        {/* Header */}
        {/* Mobile drag handle */}
      <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-slate-300" />
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Shopping Cart
            </h3>
            <p className="text-xs text-slate-500">
              Estimated total — final payable will be confirmed on call.
            </p>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50 grid place-items-center"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 overflow-y-auto flex-1 min-h-0">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-4xl">🛒</div>
              <div className="mt-3 font-semibold text-slate-800">
                Your cart is empty
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Open a product and choose size/grade.
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => {
                // qty + step based on pricingModel
                const qtyValue = isWholeFish(item)
                  ? Number(item.count) || 1
                  : Number(item.kg) || 1;

                const step = isWholeFish(item) ? 1 : isGradeKg(item) ? 0.5 : 1;
                const minQty = 1;

                const unitLabel = isWholeFish(item) ? "fish" : "kg";

                const lineTotal = Number(item.totalPrice) || 0;

                // show chosen option info
                const optionText = (() => {
                  if (isWholeFish(item)) {
                    const label = item.selectedSizeLabel || item.selectedSizeKey;
                    return label ? `Size: ${label}` : "";
                  }
                  if (isGradeKg(item)) {
                    const label = item.selectedGradeLabel || item.selectedGradeKey;
                    return label ? `Grade: ${label}` : "";
                  }
                  return "";
                })();


                const to1 = (x) => Math.round(Number(x) * 10) / 10;

                const dec = () => {
                  const nextRaw = qtyValue - step;
                  const next = isWholeFish(item)
                    ? Math.max(minQty, Math.round(nextRaw))
                    : Math.max(minQty, to1(nextRaw));
                  onUpdateQty(idx, next);
                };

                const inc = () => {
                  const nextRaw = qtyValue + step;
                  const next = isWholeFish(item)
                    ? Math.max(minQty, Math.round(nextRaw))
                    : Math.max(minQty, to1(nextRaw));
                  onUpdateQty(idx, next);
                };


                return (
                  <div
                    key={item.cartKey || `${item.id}-${idx}`}
                    className="flex gap-3 p-3 rounded-2xl border border-slate-200"
                  >
                    <div className="h-16 w-16 rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center border border-slate-200">
                      <img
                        src={item.image || "/images/fallback-fish.jpg"}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 truncate">
                            {item.name}
                          </div>

                          {optionText ? (
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {optionText}
                            </div>
                          ) : null}

                          <div className="text-[11px] text-slate-500 mt-1">
                            {isWholeFish(item)
                              ? "Whole fish (estimated by weight)"
                              : isGradeKg(item)
                              ? "Grade-based pricing"
                              : "Weight-based pricing"}
                          </div>
                        </div>

                        <button
                          onClick={() => onRemove(idx)}
                          className="text-xs text-slate-500 hover:text-red-600 underline whitespace-nowrap"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        {/* Qty Stepper */}
                        <div className="flex items-center rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                          <button
                            type="button"
                            onClick={dec}
                            className="w-9 h-9 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <div className="px-3 text-sm font-semibold text-slate-900 tabular-nums">
                            {formatQty(qtyValue)}
                            <span className="ml-1 text-slate-500 font-medium">
                              {unitLabel}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={inc}
                            className="w-9 h-9 grid place-items-center text-slate-700 hover:bg-slate-200 transition"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-xs text-slate-500">Est. Total</div>
                          <div className="font-extrabold text-slate-900">
                            ৳{Math.round(lineTotal)}
                          </div>
                        </div>
                      </div>

                      {isGradeKg(item) ? (
                        <div className="text-[11px] text-slate-500 mt-2">
                          Step: 0.5kg
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}

              <button
                onClick={onClear}
                className="text-sm text-slate-500 hover:text-red-600 underline"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-slate-200 space-y-3">
          {/* Totals */}
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal (estimate)</span>
              <span className="font-semibold">৳{Math.round(subtotal)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Delivery
                <span className="block text-[11px] text-slate-400">
                  Free over ৳{FREE_DELIVERY_THRESHOLD}
                </span>
              </span>
              <span className="font-semibold">
                {deliveryFee === 0 ? "Free" : `~৳${deliveryFee}`}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-1 flex justify-between">
              <span className="font-semibold text-slate-800">Total (estimate)</span>
              <span className="font-bold text-[#3D84A7]">
                ৳{Math.round(estimatedTotal)}
              </span>
            </div>
          </div>

          {/* Explicit affirmation */}
          <p className="text-[11px] text-slate-500">
            This is an estimate. Final payable is confirmed on call.
          </p>

          {/* OPTION 1 */}
          <button
            type="button"
            className="w-full py-3 rounded-full text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition disabled:opacity-50"
            disabled={cartItems.length === 0}
            onClick={() => {
              if (!cartItems.length) return;
              setIsOrderModalOpen(true);
              onClose?.(); // close drawer
            }}

          >
            📝 Order with Form (Cash on Delivery)
          </button>

          {/* OR */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">
              or
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* OPTION 2 */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={`block w-full text-center py-3 rounded-full text-sm font-semibold ${
              cartItems.length === 0
                ? "bg-gray-300 text-gray-600 pointer-events-none"
                : "bg-[#25D366] text-white hover:bg-[#1ebe5b]"
            }`}
          >
            💬 Checkout via WhatsApp
          </a>
        </div>

      </aside>
            <OrderFormModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        estimatedSubtotal={subtotal}
        deliveryFee={deliveryFee}
        onOrderSuccess={(msg) => {
          onClear?.();
          alert(msg || "Order submitted successfully!");
          setIsOrderModalOpen(false);
          onClose?.();
        }}
        onOrderError={(msg) => {
          alert(msg || "Failed to submit order. Please try WhatsApp.");
        }}
      />

    </>
  );
}
